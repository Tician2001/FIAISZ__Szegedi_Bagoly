import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import vuk from "../assets/Vuk.jpg"
import tuskevar from "../assets/Tüskevár.jpg";
import TK from "../assets/szegediTK_1.jpg.png";
import "../App.scss";

import axios from '../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
      <div className="container-fluid  justify-content-center text-center h4 py-4">
            
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
                <div className="col-sm-8 bg-transparent border   rounded  text-left shadow">
                    
                {success ? (
                <section className='text-center'>
                    <h1>Sikeres bejelentkezés!</h1>
                    <br />
                    <p>
                        <a href="/">Irány a főoldal</a>
                    </p>
                </section>
            ) : (
                <section id='login-box' className='border shadow border-warning m-3 p-3 mx-auto d-flex justify-content-center'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className='mx-auto'>
                    <h1>Bejelentkezés</h1>
                    <form onSubmit={handleSubmit}>
                        <label className='mt-3 mb-3' htmlFor="username">Felhasználónév:</label>
                        <input className='ml-3'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <br></br>
                        <label className='mt-3 mb-3' htmlFor="password">Jelszó:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <br />
                        <button className='mb-3 mt-3'>Bejelentkezés</button>
                    </form>
                    <p>
                        Még nincs felhasználód?<br />
                        <span className="line">
                            
                            <a href="/regisztracio">Regisztráció</a>
                        </span>
                    </p>
                    </div>
                </section>
            )}
        
                   
                    
                   
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

export default Login