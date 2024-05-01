import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Rooms',
    path: '/rooms',
    icon: <IoIcons.IoMdTv />,
    cName: 'nav-text',
  },
  {
    title: 'Join Room',
    path: '/room',
    icon: <FaIcons.FaPlay />,
    cName: 'nav-text',
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text',
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FaIcons.FaSignInAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Sign Up',
    path: '/sign-up',
    icon: <IoIcons.IoMdPersonAdd />,
    cName: 'nav-text',
  },
];
