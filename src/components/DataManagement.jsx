import React from 'react'
import "../App.scss";
import vuk from "../assets/Vuk.jpg"
import tuskevar from "../assets/Tüskevár.jpg";
import TK from "../assets/szegediTK_1.jpg.png";


const DataManagement = () => {
	return (
		<div className=" container-fluid d-flex justify-content-center text-center h4 py-4">
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
                <div className="col-sm-8 bg-transparent border  rounded shadow text-left">



				<section class="jumbotron text-center" id='DataManagement' >
				<div class="container border p-3 rounded shadow border-warning">
					<h1 class="jumbotron-heading">Adatkezelési tájékoztatók</h1>
					<p class="lead text-muted">--Itt letöltheti az adatkezelési tájékoztatókról szóló dokumentumokat a linkekre kattintva.--</p>
				</div>
			</section>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<ul id='list-group' class="list-group mt-5 text-white">
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 id='datamanagementtitle' class="mb-0">Tanulói adatkezelési tájékoztató</h6>
									</div>
								</div>
							</li>
							<a href="https://drive.google.com/file/d/1IrQsV6TzWXnivAToMnVVbz2KvltznAMu/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Fekete - Kamerarendszer adatkezelési szabályzata</h6>
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/1IlWX8vuDuZzi-J4SQA4cmqoTTt11JKZb/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Intézményi adatkezelési szabályzat</h6>
										
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/1GuxPKkwLjlCaLI_JdJ9n-KDZzaFiCV3j/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Tájékoztató Szülők részére allergiás / anafilaxiás reakciót kiváltó érzékenységről</h6>
										
									</div>
								</div>
							</li>
							</a>
							
							
						</ul>

					</div>
					<div class="col">
					<ul id='list-group' class="list-group mt-5 text-white">
						<a href="https://drive.google.com/file/d/10vwsg5UhZ3Sp5wntBAPG34qcHYI5bPeg/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Adatkezelési és adattovábbítási szabályzat</h6>
										
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/1mD-ccZp9Lwyyt9QQV6ti2oB3SmbvYgqE/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Adatkezelési tájékoztató óraadó tanárok részére</h6>
										
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/1vocmEKOugzMVb4RfDkdhPiC_n5SwxO3s/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Adatkezelési tájékoztató szerződéses partnerek részére</h6>
										
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/1wkABO0sYWH7oV94LB2PtBpUd-9aTSvAO/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Panaszok , közérdekű bejelentések adatvédelmi szabályzata</h6>
										
									</div>
								</div>
								<div class="check">
								</div>
							</li>
							</a>
							
						</ul>
    </div>
    <div class="col">
      <ul id='list-group' class="list-group mt-5 text-white">
		<a href="https://drive.google.com/file/d/1GOP62ZQJMrtYZWtAXu1Dtf43_s9uosKT/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Adatkezelési tájékoztató álláspályázathoz</h6>
										
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/1oOao1HRtgZN4SBrIthGPZUwbJPwayLP1/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Hit- és erkölcstan oktatással kapcsolatos adatkezelési tájékoztató</h6>
										
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/15C7j3RTnHEVoug56uh7s4ha6wkjlgDSj/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Adatkezelési tájékoztató foglalkoztatottak részére</h6>
										
									</div>
								</div>
							</li>
							</a>
							<a href="https://drive.google.com/file/d/1qrGDjBwkWxp5qJyf1LzxrYtFPr0k3IHX/view" target='_blank'>
							<li id='files' class="list-group-item d-flex justify-content-between align-content-center">
								<div class="d-flex flex-row">
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2VMWrDQBBFp8gRQhoFV5a0pM0Zci/fRAK7CcJd0gXcRfKALxFIZ4OdA+gbxZ1A3nU1A/4Pfv/f7OyuCCGEEDICS3lGJQ1q+UMtSEolC3FTvpZDcnFvErhM/vbyXiRwy9p4lMBQYPUAfGVAVwAabNMVPTazX3w+vaUJDOXb3L64jtLmPT4eX+MCw+Sty+pENrOfuICHtdGpUyj6uIB1Sb0eCoAnELhCV7FeEfASq/2UwWdU7ScNfmTqMxLDuiAooPZTBldI7ScNXmL1GbmHZ/RkXRJT2YZjXGBbrh0LNAkCoYCWe/OyOk55wO5lHhX4l/jOM2h4d7JOp2HyyeUJIYTcFWcLXG7i+rfwxwAAAABJRU5ErkJggg=="></img>
									<div class="ml-2">
										<h6 class="mb-0">Eljárásrend gyermekbalesetekkel kapcsolatban honlap</h6>
										
									</div>
								</div>
							</li>
							</a>
							
							
						</ul>
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

export default DataManagement