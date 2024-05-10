import React from 'react';
import { Sidebar, SidebarItem } from '../Navigation/Sidebar/Sidebar.tsx';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TiHome } from 'react-icons/ti';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { HiTruck } from 'react-icons/hi2';
import { IoIosPerson } from 'react-icons/io';
import { PiListChecksFill } from 'react-icons/pi';
import { SiGoogleanalytics } from 'react-icons/si';
import { MdReport } from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';
import { TbHelpCircleFilled } from 'react-icons/tb';
export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<TiHome size={20} />}
          text={'Dashboard'}
          active
        ></SidebarItem>

        <SidebarItem
          icon={<RiShoppingBag2Fill size={20} />}
          text={'Products'}
        ></SidebarItem>
        <SidebarItem
          icon={<HiTruck size={20} />}
          text={'Suppliers'}
        ></SidebarItem>
        <SidebarItem
          icon={<IoIosPerson size={20} />}
          text={'Custormers'}
        ></SidebarItem>
        <SidebarItem
          icon={<PiListChecksFill size={20} />}
          text={'Orders'}
        ></SidebarItem>
        <SidebarItem
          icon={<SiGoogleanalytics size={20} />}
          text={'Sales'}
        ></SidebarItem>
        <SidebarItem
          icon={<MdReport size={20} />}
          text={'Report'}
        ></SidebarItem>
        <SidebarItem
          icon={<IoSettings size={20} />}
          text={'Settings'}
        ></SidebarItem>
        <SidebarItem
          icon={<TbHelpCircleFilled size={20} />}
          text={'Help & Support'}
          alert
        ></SidebarItem>
      </Sidebar>
      <div>{children}</div>
    </div>
  );
};
