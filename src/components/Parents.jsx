import React from 'react'
import '../App.scss';
import Club from "../assets/SZÜLŐI KLUB2023.png";
import vuk from "../assets/Vuk.jpg"
import tuskevar from "../assets/Tüskevár.jpg";
import TK from "../assets/szegediTK_1.jpg.png";


const Parents = () => {
	return (
		<div className="container-fluid d-flex justify-content-center text-center h4 py-4">
            <div className="row content">
                <div className="col-sm-2 sidenav position-static float-left">

				<div className="card card-body sidebutton p-2 ">
                        <p><a href="/szuloknek">Szülőknek</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2 ">
                        <p><a href="/diakoknak">Diákoknak</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2 ">
                        <p><a href="/hirlevel">Hírlevél</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2" id="kreta">
                        <p><a href="https://idp.e-kreta.hu/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dkreta-web%26response_type%3Dcode%26scope%3Dopenid%26state%3DOpenIdConnect.AuthenticationProperties%253DNORHRvbF5rHrjHrefhJeBa_x43g17xLRkuD74ipe2LYfdJwiAMFynD_3pPxrpiXd0ulY2U87Nr7aj5q9kn5e5y2hHRveau6wMvVC_99WEugkfiZsJ33FmI2x4b-_ccOmPNE1b5M1OMcrC125LdKLcw%26response_mode%3Dform_post%26nonce%3D638296803926746520.Yjg1YmIyOGYtYjQ0MC00YmE3LTg3Y2YtYmRlMTc1OWM1ZWI4ZDgzNTM4NDUtYWU3MC00MzY4LTg4NzMtYzNiYWI5ZTQwNDMx%26institute_code%3Dklik029662001%26institute_data%3DeyJuZXh0X3VwZGF0ZV9kYXRlX3RpbWUiOiIyMDIzLjA5LjE5LiAyMjowMCIsImlzX3N6aXJfaW5zdGl0dXRlIjpmYWxzZSwiaXNfbGljZW5jZV92YWxpZCI6dHJ1ZSwiaXNfYXJjaGl2ZSI6ZmFsc2UsImlzX2Nzb2trZW10ZXR0X2dvbmR2aXNlbG8iOnRydWUsImlzX2ludGV6bWVueV9yb3ZpZG5ldiI6dHJ1ZSwiaXNfc3VjY2Vzc19hdXRob3JpemVkX2RhdGUiOmZhbHNlfQ%253D%253D%26prompt%3Dlogin%26redirect_uri%3Dhttps%253A%252F%252Fklik029662001.e-kreta.hu%26x-client-SKU%3DID_NET461%26x-client-ver%3D5.3.0.0%26suppressed_prompt%3Dlogin" target="_blank">Kréta E-napló</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2" id="kreta">
                        <p><a href="https://ngsz.hu/2021/01/01/kozetkeztetes/#tajekoztatok" target="_blank">Közétkeztetés</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2">
                        <p><a href="https://drive.google.com/file/d/18KzjcPKw03m8qutMPMbtMAn8sggobsav/view" target="_blank">Iskolai Segítők</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2">
                        <p><a href="/" >Pszichológus</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2">
                        <p><a href="/karrier" >Karrier</a></p>
                    </div>
                    <div className="card card-body sidebutton p-2">
                        <p><a href="/aranykapu" >Aranykapu</a></p>
                    </div>



                </div>
                <div className="container col-sm-8 bg-transparent border  rounded shadow text-left">

                    

				<section className=" jumbotron text-center" id='DataManagement' >
				<div className="container border p-3 rounded shadow border-warning">
					<h1 className="jumbotron-heading">Szülők részére fenntartott</h1>
					<p className="lead text-muted">--Itt tájékozódhat a diákokkal kapcsolatos aktualitásokról.--</p>
				</div>
			</section>
			<div className='container-fluid'>
				<h2>Google Drive dokumentumok</h2>
				<div className='row'>
					<div className='col'>
						<ul id='list-group' className="list-group mt-5 text-white">
							<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
								<a href='https://drive.google.com/file/d/1_huWFJEYU5cmJDaCSBCJJNBjePV8fPOn/view' target='_blank'>
								<div className="d-flex flex-row">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="/>
									<div className="ml-2">
										<h6 id='file-text'>Tanuló 3 napot meghaladó hiányzásának kérelme</h6>										
									</div>
								</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<h2>Tájékoztatók</h2>
				<div className='row'>
					<div className="col">
						<ul id='list-group' className="list-group mt-5 text-white">
							<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
								<a href='https://drive.google.com/file/d/1cFhfAA6YpW_5SFYla2pmo9fh-FH37kMw/view' target='_blank'>
								<div className="d-flex flex-row">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="/>
									<div className="ml-2">
										<h6 className="mb-0" id='file-text'>Heti 2 testnevelés óra alóli felmentés tájékozató</h6>
									</div>
								</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='row'>
					<div className="col">
						<ul id='list-group' className="list-group mt-5 text-white">
							<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
								<a href='https://drive.google.com/file/d/1Leiucx6tZMMKV6qptEnl3c232W-i9Umi/view' target='_blank'>
								<div className="d-flex flex-row">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="/>
									<div className="ml-2">
										<h6 className="mb-0" id='file-text'>Rendezvényterv szülőknek 2023-2024</h6>
									</div>
								</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				
			</div>




                </div>

                <div className="col-sm-2 sidenav position-static float-right">
				<div className="card card-body">
				<div class="card card-body">
                <p className="">Fenntartónk</p>
            </div>
                    <div className="card card-body">
                        <a href="http://kk.gov.hu/szeged" target="_blank">
                            <img className="img-fluid" src={TK} />
                        </a>
                    </div>
                    <div className="card card-body">
                        <img className="img-fluid" src={vuk} />
                    </div>
                    <div className="card card-body">
                        <img className="img-fluid" src={tuskevar} />
                    </div>
                    <div className="card card-body sidebutton p-2" >
                        <p><a href="https://www.facebook.com/FIAISZ" target="_blank">Facebook</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
	)
}

export default Parents