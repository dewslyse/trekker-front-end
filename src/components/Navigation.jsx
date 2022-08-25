import '../styles/sidebar.scss';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';

const Navigation = () => (
  <div className="navigation">
    <Sidebar />
    <MobileSidebar />
  </div>
);

export default Navigation;
