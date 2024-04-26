import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: ' #fff' }}>
        <div className="bg-black bg-opacity-50 h-20 flex justify-start items-center">
          <Link to="#" className="ml-8 text-2xl bg-transparent">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={`bg-black bg-opacity-80 w-64 h-screen flex justify-center fixed top-0 ${sidebar ? 'left-0 transition-all duration-350 ease-in-out' : 'left-[-100%] transition-all duration-850 ease-in-out'}`}>
          <ul className="w-full" onClick={showSidebar}>
            <li className="bg-black w-full h-20 flex justify-start items-center">
              <Link to="#" className="ml-8 text-2xl">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => { 
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className="justify-start flex items-center py-2 px-4 list-none h-15 no-underline text-gray-200 text-base w-[95%] h-full flex items-center px-4 rounded hover:bg-[#1a83ff]">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;