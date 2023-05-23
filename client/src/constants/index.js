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

export const MENU_ITEMS = [ 'Dashboard', 'Logout'];

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
    id: 1,
    img: "https://i.pinimg.com/564x/fa/20/c9/fa20c984e30ebf5deabfe26e0b703c04.jpg",
    title: 'Graduation 001',
    author: '@bkristastucchio',
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/fa/20/c9/fa20c984e30ebf5deabfe26e0b703c04.jpg",
    title: 'Graduation 002',
    author: '@rollelflex_graphy726',
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/be/76/98/be7698807091fb7a180c79a0f99fb526.jpg",
    title: 'Graduation 003',
    author: '@helloimnik',
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/eb/25/af/eb25af8d616e6a7dfd8ae91bab35b7e2.jpg",
    title: 'Graduation 004',
    author: '@nolanissac',
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/75/e3/c7/75e3c7cb69f8ee80c44245a2a9fe96b4.jpg",
    title: 'Graduation 005',
    author: '@hjrc33',
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/1a/c0/5b/1ac05bef54fd71c5f2515241aac315ae.jpg",
    title: 'Graduation 006',
    author: '@arwinneil',
  },
  {
    id: 7,
    img: "https://i.pinimg.com/564x/33/d2/bc/33d2bcba3d61b402b62d140814eff838.jpg",
    title: 'Graduation 007',
    author: '@tjdragotta',
  },
  {
    id: 8,
    img: "https://i.pinimg.com/564x/52/3f/ac/523fac64ee490eee751cee6eb0cfc1ea.jpg",
    title: 'Graduation 008',
    author: '@katie_wasserman',
  },
  {
    id: 9,
    img: "https://i.pinimg.com/564x/21/4a/34/214a34dd50cc34f5e04ae8ff3d6586b6.jpg",
    title: 'Graduation 009',
    author: '@silverdalex',
  },
  {
    id: 10,
    img: "https://i.pinimg.com/564x/dc/9a/64/dc9a64d9372518cedd17c17402a971e5.jpg",
    title: 'Graduation 010',
    author: '@shelleypauls',
  },
  {
    id: 11,
    img: "https://i.pinimg.com/564x/1a/7c/15/1a7c1506cfaeada0b63de669a66b9f4a.jpg",
    title: 'Graduation 011',
    author: '@peterlaster',
  },
  {
    id: 12,
    img: "https://i.pinimg.com/564x/85/68/17/856817693efad185ee741a8bb01e59ab.jpg",
    title: 'Graduation 012',
    author: '@southside_customs',
  },
];
