import '../styles/sidebar.scss';
import { TbMenu } from 'react-icons/tb';
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import SidebarLinks from './SidebarLinks';

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const menuicon = <TbMenu className="hamburger" size="40px" onClick={() => setOpen(!open)} />;

  const closeicon = <GrFormClose className="hamburger" size="40px" onClick={() => setOpen(!open)} />;

  // const closeMenu = {} => setOpen(false);

  return (
    <div className="mobile-sidebar">
      {open ? closeicon : menuicon}
      {open && <SidebarLinks />}
    </div>
  );
};

export default MobileSidebar;
