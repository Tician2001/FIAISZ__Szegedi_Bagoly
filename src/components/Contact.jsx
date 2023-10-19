import "../styles/ContactStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactStyles.css";
import vuk from "../assets/Vuk.jpg"
import tuskevar from "../assets/Tüskevár.jpg";
import Preseles from "../assets/preseles.jpg";
import TK from "../assets/szegediTK_1.jpg.png";


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g7z271m', 'template_hlagsio', form.current, 'kI5CFyDHGNDPkYOHR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    
    <div className=" container-fluid  justify-content-center text-center h4 py-4 ">
<div class="set">
        <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%" /></div>
      </div>
      <div class="set set2">
        <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%" /></div>
      </div>
      <div class="set set3">
        <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/M59443B/leaves1.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/v1WGv6b/leaves2.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/V3KSBdV/leaves3.png" width="30%" height="30%" /></div>
        <div><img src="https://i.ibb.co/jkGMYLM/leaves4.png" width="30%" height="30%" /></div>
      </div>
      <div className="row content">
        <div className="col-sm-2 sidenav position-static float-left">
          <div className="panel panel-default">
            <p><a href="/szuloknek">Szülőknek</a></p>
          </div>
          <div className="panel panel-default ">
            <p><a href="/diakoknak">Diákoknak</a></p>
          </div>
          <div className="panel panel-default">
            <p><a href="/hirlevel">Hírlevél</a></p>
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
            <p><a href="/aranykapu" >Aranykapu</a></p>
          </div>



        </div>
        <div className="col-sm-8 bg-transparent border  rounded shadow text-left">


          <div className=''>

            <div className="container-fluid">
              <h1 className="text-center mb-3">Vegye fel velünk a kapcsolatot!</h1>

              <div class="container-fluid m-3 ">
                <div class="row   contact-wrap m-0 p-0">
                  <div class="col-md-8">
                    <div class=" h-100">
                      <h3>Vegye fel velünk a kapcsolatot!</h3>
                      <form class="mb-5" ref={form} onSubmit={sendEmail} >
                        <div class="row">
                          <div class="col-md-6 form-group mb-5">
                            <label for class="col-form-label">Név</label>
                            <input name="user_name" type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Kérem adja meg a teljes nevét..." />
                          </div>
                          <div class="col-md-6 form-group mb-5">
                            <label for class="col-form-label">Email-cím</label>
                            <input name="user_email" type="email" class="form-control" id="exampleInputPassword1" placeholder="Kérem adja meg az Email címét..." />
                          </div>
                        </div>
                        <div class="row">
                          
                          
                        </div>
                        <div class="row">
                          <div class="col-md-12 form-group mb-5">
                            <label for="message" class="col-form-label">Üzenet</label>
                            <textarea name="message" class="form-control" placeholder="Ide írja az üzenetet..." id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12 form-group">
                            <input type="submit" value="Elküld" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary rounded-0 py-2 px-4" />
                            <span class="submitting"></span>
                          </div>
                        </div>
                      </form>
                      <div id="form-message-warning mt-4"></div>
                      <div id="form-message-success">
                        Your message was sent, thank you!
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="contact-info h-100">
                      <h3 className="text-center ">Szegedi Fekete István Általános Iskola</h3>
                      <p className="text-center">OM azonosító : 029662</p>
                      <p className="text-center">6729 , Szeged, Postás u. 1-3.</p>
                      <p className="text-center">Tel.: +36 62/548-960</p>
                      <h3 className="text-center">Igazgató</h3>
                      <p className="text-center">Sáriné Vetró Zsuzsanna</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>




        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Üzenet</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Az üzenet sikeresen elküldve.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Bezár</button>
        
      </div>
    </div>
  </div>
</div>

        <div className="col-sm-2 sidenav position-static float-right">
          <div className="panel panel-default">
            <p>Fenntartónk</p>
          </div>
          <div className="panel panel-default">
            <a href="http://kk.gov.hu/szeged" target="_blank">
              <img className="img-fluid" src={TK} />
            </a>
          </div>
          <div className="panel panel-default">
            <img className="img-fluid" src={vuk} />
          </div>
          <div className="panel panel-default">
            <img className="img-fluid" src={tuskevar} />
          </div>
          <div className="panel panel-default">
            <p><a href="https://www.facebook.com/FIAISZ" target="_blank">Facebook</a></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact