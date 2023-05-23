const User = require("../models/User");
const bcrypt = require("bcryptjs");
const saltRounds = 5;
const jwt = require("jsonwebtoken");

//Register a User | guest
const createUser = async (req, res) => {
  console.log("req",req)
  if (req.body) {
    let email = req.body.email;
    let username = req.body.username;

    await User.findOne({ email: email }, async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (!result) {
          bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, async function (err, hash) {
              req.body.password = hash;

              const user = new User(req.body);
              await user
                .save()
                .then((data) => {
                  console.log(data);
                  res.status(200).send(data);
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).send(err);
                });
            });
          });
        } else {
          console.log("User Already Exist");
          res.status(500).send({ message: "User Already Exist" });
        }
      }
    });
  }
};

//login Validate
const validateUser = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (user == null) return res.status(500).send("User Not Found");
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        // result == true
        console.log("r:::",result);
        if (result) {
          console.log(user);
          // const token = jwt.sign(
          //   {
          //     fullName: user.fullName,
          //     email: user.email,
          //   },
          //   process.env.JWT_SECRET
          // );

          res.send({ userDetails: user });
        } else {
          console.log("Credentials Does Not Matched");
          res.status(500).send("Credentials Does Not Matched");
        }
      });
    }
  });
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  validateUser,
  updateUser,
  deleteUser,
};
