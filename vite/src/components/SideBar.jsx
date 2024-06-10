import {Link} from 'react-router-dom'
function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                 <img className="w-100" src="assets/images/androide.png" alt="Hanus" /> 
                </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            {/* <li className="nav-item active">
                <Link className="nav-Link" to="/products">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - process automation</span></Link>
            </li> */}

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Actions</div>

            {/* <!-- Nav Item - Pages --> */}
            <li className="nav-item">
                <Link className="nav-Link collapsed" to="/prueba">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Enlace de Prueba</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            {/* <li className="nav-item">
                <a className="nav-Link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li> */}

            {/* <!-- Nav Item - Tables --> */}
            {/* <li className="nav-item">
                <a className="nav-Link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li> */}

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>

    );
}

export default SideBar;