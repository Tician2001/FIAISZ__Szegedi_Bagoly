import React from 'react'
import "../App.scss";
import vuk from "../assets/Vuk.jpg"
import tuskevar from "../assets/Tüskevár.jpg";
import TK from "../assets/szegediTK_1.jpg.png";

const Public = () => {
  return (
	<div className=" container-fluid d-flex justify-content-center text-center h4 py-4">
            <div className=" row content">
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
                <div className="col-sm-8 bg-transparent border  rounded shadow text-left">



				<div className='container'>
		
		<section className="jumbotron text-center" id='DataManagement' >
						<div className="container border p-3 rounded shadow border-warning">
							<h1 className="jumbotron-heading">Nevelési-oktatási intézményi közzétételi lista</h1>
							<p className="lead text-muted">--A nemzeti köznevelési törvény végrehajtásáról szóló 229/2012 (VIII. 28.) Korm. rendelet 23. § alapján előírt közzétételi lista--</p>
						</div>
					</section>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col'>
								<ul id='list-group' className="list-group mt-5 text-white">
					  <a href='https://drive.google.com/file/d/1gZ-7E6dwYS3xS6Rhd_bj8vDMlJdwU44k/view' target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 id='datamanagementtitle' className="mb-0">A felvételi lehetőségekről szóló tájékoztató</h6>
											</div>
										</div>
									</li>
					  </a>
					  <a href='https://drive.google.com/file/d/1SRBJGPOeGEjUWtE_P37j3SQMR4Zu009T/view' target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">A beiratkozásra meghatározott idő</h6>
											</div>
										</div>
									</li>
					  </a>
									<a href='https://drive.google.com/file/d/1syKVJy7cOsRejDgslNNbA9aoWmBIzL1o/view' target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">A fenntartó által engedélyezett osztályok, csoportok száma 2022-2023</h6>
											</div>
										</div>
									</li>
					  </a>
					  <a href='https://drive.google.com/file/d/1Leiucx6tZMMKV6qptEnl3c232W-i9Umi/view' target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Rendezvényterv szülőknek 2023-24</h6>
											</div>
										</div>
									</li>
					  </a>
								</ul>
		
							</div>
							<div className="col">
							<ul id='list-group' className="list-group mt-5 text-white">
					<a href="https://drive.google.com/file/d/15iGMuYypewHSAPONAGg8lzMxdKfPVfNM/view" target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Szervezeti és működési szabályzat</h6>
												
											</div>
										</div>
									</li>
					  </a>
					  <a href="https://drive.google.com/file/d/17ij-N5A4xYtd2Oz58aPUROXY8LBwL9W0/view" target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Házirend</h6>
												
											</div>
										</div>
									</li>
					  </a>
					  
					  <a href="https://drive.google.com/file/d/17ij-N5A4xYtd2Oz58aPUROXY8LBwL9W0/view" target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Pedagógiai program</h6>
												
											</div>
										</div>
									</li>
					  </a>
					  <a href='https://drive.google.com/file/d/1A54g8JYEI0qnmzfCjBntnjsPxTZmRfH1/view' target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0"> A tanulók le- és kimaradásával, évfolyamismétlésével kapcsolatos adatok</h6>
											</div>
										</div>
									</li>
					  </a>
								</ul>
			</div>
			<div className="col">
			  <ul id='list-group' className="list-group mt-5 text-white">
				<a href="https://drive.google.com/file/d/1vgrbQ_KGevX1mF086P5o97Ac4Unssb5D/view" target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Pedagógusok iskolai végzettsége</h6>
												
											</div>
										</div>
									</li>
					  </a>
					  <a href="https://drive.google.com/file/d/1KkqrucoIFW4JhK3pk9FyUJV5qv-eLPhY/view" target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Nevelő és oktató munkát segítő dolgozók, iskolai végzettségük</h6>
												
											</div>
										</div>
									</li>
					  </a>
					  <a href="https://drive.google.com/file/d/1k7P6pYims1bfPjbLdxi5kRaWQ6RT4xVl/view" target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Az országos mérés-értékelés éves eredményei</h6>
												
											</div>
										</div>
									</li>
					  </a>
					  <a href="https://drive.google.com/file/d/1tulDAZ_egmhSAvhxuKs-qqAJ_J-FScB7/view" target='_blank'>
									<li id='files' className="list-group-item d-flex justify-content-between align-content-center">
										<div className="d-flex flex-row">
											<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
											<div className="ml-2">
												<h6 className="mb-0">Alapdokumentum</h6>
												
											</div>
										</div>
									</li>
					  </a>
								</ul>
			</div>
						</div>
					</div>
			</div>




                </div>

                <div className="col-sm-2 sidenav position-static float-right">
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

  )
}

export default Public