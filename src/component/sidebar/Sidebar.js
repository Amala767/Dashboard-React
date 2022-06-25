import "./Sidebar.css";
import logo from "../../assets/logo.png";


const Sidebar = ({ sidebarOpen, closeSidebar}) => {
    return(
        <div className={sidebarOpen ? "sidebar-reponsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>AmalaPorto</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar() }></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Beranda</a>
                </div>
                <h2>PENGENDALIAN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Manejemen Admin</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Manajemen Perusahaan</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Manajemen Karyawan</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Gudang</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Kerjasama</a>
                </div>
                <h2>KELUAR</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Pertanyaan</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Keluar</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Hari Spesial</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Coba untuk Keluar</a>
                </div>
                <h2>PEMBAYARAN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Pembayarn</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Riwayat Pembayaran</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Keluar</a>
                </div>
            </div> 
        </div>
    )
}

export default Sidebar;