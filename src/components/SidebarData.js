import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  {
    title: 'Candidates',
    path: '/candidates',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Live Chat',
    path: '/chat',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  

  {
    title: 'Update profile',
    path: '/update-profile',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }


];