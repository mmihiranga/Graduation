import React from 'react';
import { IoTennisballOutline, IoPeopleOutline } from 'react-icons/io5';
import { BsSpeedometer2, BsCalendar4Event, BsCamera } from 'react-icons/bs';
import { FiLayers } from 'react-icons/fi';
import client1Image from '../assets/Images/sponsors/client-1.png';
import client2Image from '../assets/Images/sponsors/client-2.png';
import client3Image from '../assets/Images/sponsors/client-3.png';
import client4Image from '../assets/Images/sponsors/client-4.png';
import client5Image from '../assets/Images/sponsors/client-5.png';
import client6Image from '../assets/Images/sponsors/client-6.png';

export const PAGES = [
  { label: 'Home', path: '/home' },
  { label: 'Products', path: '/products' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
];

export const MENU_ITEMS = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const SPONSOR_IMAGES = [
  client1Image,
  client2Image,
  client3Image,
  client4Image,
  client5Image,
  client6Image,
];

export const SERVICES_LIST = [
  {
    title: 'Graduation Photography',
    description:
      'We provide professional photography services for your graduation ceremony. Our photographers are highly skilled and experienced in capturing the best moments of your graduation ceremony. We also provide a wide range of photography packages to suit your needs and budget.',
    icon: <IoTennisballOutline />,
    color: '#47aeff',
  },
  {
    title: 'Photography Services',
    description:
      'We offer professional photography services to capture the special moments of graduation day. Our team of experienced photographers will be on-site to take photos of graduates and their families, and we provide both digital and print copies of the photos.',
    icon: <BsCamera />,
    color: '#ffa76e',
  },
  {
    title: 'Email Notifications',
    description:
      'Our application automates the process of sending email notifications to all stakeholders involved in the graduation ceremony, including graduates, faculty, and guests. This saves universities and students time and hassle, allowing them to focus on enjoying the ceremony.',
    icon: <BsSpeedometer2 />,
    color: '#e80368',
  },
  {
    title: 'Customer Support',
    description:
      'Our team is dedicated to providing excellent customer support to ensure that universities and students have a seamless experience using our application. We are available to answer any questions or concerns and to help troubleshoot any issues that may arise.',
    icon: <FiLayers />,
    color: '#ffbb2c',
  },
  {
    title: 'Event Planning',
    description:
      'We can help plan and execute events of all sizes,Graduation and other special occasions in universities. Our team will work with you every step of the way to ensure that your event is a success.',
    icon: <BsCalendar4Event />,
    color: '#ff5828',
  },
  {
    title: 'Social Media Management',
    description:
      'In todays digital age, having a strong social media presence is essential for any business. We can help you manage your social media accounts, create content, and engage with your followers to build your brand and grow your online presence.',
    icon: <IoPeopleOutline />,
    color: '#11dbcf',
  },
];



export const GALLERY_ITEMS = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];