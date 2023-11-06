import React, { useCallback, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

import Aranykapu1 from "../assets/1.png";
import Aranykapu2 from "../assets/2.png";
import "../App.scss";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const NewsLetter = () => {

  return (
    <div className="wrapper container-fluid d-flex justify-content-center text-center h4 py-4">
        <div class="set">
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
            </div>
            <div class="set set2">
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
            </div>
            <div class="set set3">
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%"/></div>
                <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%"/></div>
            </div>
    <div className="leaves row content">
        <div className="col-sm-2 sidenav position-static">
            <div className="panel panel-default">
                <p><a href="/szuloknek">Szülőknek</a></p>
            </div>
            <div className="panel panel-default ">
                <p><a href="/diakoknak">Diákoknak</a></p>
            </div>
            
            <div className="panel panel-default" id="kreta">
                <p><a href="https://idp.e-kreta.hu/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dkreta-web%26response_type%3Dcode%26scope%3Dopenid%26state%3DOpenIdConnect.AuthenticationProperties%253DNORHRvbF5rHrjHrefhJeBa_x43g17xLRkuD74ipe2LYfdJwiAMFynD_3pPxrpiXd0ulY2U87Nr7aj5q9kn5e5y2hHRveau6wMvVC_99WEugkfiZsJ33FmI2x4b-_ccOmPNE1b5M1OMcrC125LdKLcw%26response_mode%3Dform_post%26nonce%3D638296803926746520.Yjg1YmIyOGYtYjQ0MC00YmE3LTg3Y2YtYmRlMTc1OWM1ZWI4ZDgzNTM4NDUtYWU3MC00MzY4LTg4NzMtYzNiYWI5ZTQwNDMx%26institute_code%3Dklik029662001%26institute_data%3DeyJuZXh0X3VwZGF0ZV9kYXRlX3RpbWUiOiIyMDIzLjA5LjE5LiAyMjowMCIsImlzX3N6aXJfaW5zdGl0dXRlIjpmYWxzZSwiaXNfbGljZW5jZV92YWxpZCI6dHJ1ZSwiaXNfYXJjaGl2ZSI6ZmFsc2UsImlzX2Nzb2trZW50ZXR0X2dvbmR2aXNlbG8iOnRydWUsImlzX2ludGV6bWVueV9yb3ZpZG5ldiI6dHJ1ZSwiaXNfc3VjY2Vzc19hdXRob3JpemVkX2RhdGUiOmZhbHNlfQ%253D%253D%26prompt%3Dlogin%26redirect_uri%3Dhttps%253A%252F%252Fklik029662001.e-kreta.hu%26x-client-SKU%3DID_NET461%26x-client-ver%3D5.3.0.0%26suppressed_prompt%3Dlogin" target="_blank">Kréta E-napló</a></p>
            </div>
            <div className="panel panel-default" id="kreta">
                <p><a href="https://ngsz.hu/2021/01/01/kozetkeztetes/#tajekoztatok" target="_blank">Közétkeztetés</a></p>
            </div>
            <div className="panel panel-default">
                <p><a href="https://drive.google.com/file/d/18KzjcPKw03m8qutMPMbtMAn8sggobsav/view" target="_blank">Iskolai Segítők</a></p>
            </div>
            <div className="panel panel-default">
                <p><a href="/" >Iskola pszichológus</a></p>
            </div>
            <div className="panel panel-default">
                <p><a href="/karrier" >Karrier</a></p>
            </div>
            <div className="panel panel-default">
                        <p><a href="/aranykapu" >Aranykapu</a></p>
                    </div>
        </div>
        <div className="col-sm-8 bg-transparent border  rounded shadow text-left">
        <h1 className="h1 text-center" id="pageHeaderTitle">Hírlevél</h1>
        <div className="text-center">
               
        
     

        </div>
        </div>

        <div className="col-sm-2 sidenav position-stiky float-right">
        
        <div className="panel panel-default">       
                <img className="img-fluid" src={Aranykapu1}/>
            </div>
            <div className="panel panel-default">
                <img className="img-fluid" src={Aranykapu2} />
            </div>
            
        </div>
    </div>
</div>
  )
}

export default NewsLetter