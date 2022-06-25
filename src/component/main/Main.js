import "./Main.css";
import hello from "../../assets/hello.png"
import Chart from "../charts/Chart"

const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello"/>
                    <div className="main__greeting">
                        <h1>hello AmalaPorto</h1>
                        <p>Selamat Datang di Dashboard Portofolio</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Jumlah Pengikut</p>
                            <span className="font-bold text-tittle">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Waktu Kunjungan</p>
                            <span className="font-bold text-tittle">555</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Jumlah Media</p>
                            <span className="font-bold text-tittle">875</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-share fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Jumlah Berbagi</p>
                            <span className="font-bold text-tittle">578</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Laporan Harian</h1>
                                <p>Jawa Timur, Indonesia</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Data Laporan</h1>
                                <p>Jawa Timur, Indonesia</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Pemasukan</h1>
                                <p>Rp. 789.000</p>
                            </div>

                            <div className="card2">
                                <h1>Penjualan</h1>
                                <p>Rp. 789.000</p>
                            </div>

                            <div className="card3">
                                <h1>Pengguna</h1>
                                <p>7891</p>
                            </div>

                            <div className="card4">
                                <h1>Pesanan</h1>
                                <p>8000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;