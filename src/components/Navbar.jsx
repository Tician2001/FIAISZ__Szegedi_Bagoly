
import "../styles/NavbarStyles.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center border-bottom navbar-fixed-top">
  <a className="navbar-brand p-3 m-3 " href="/">
    <img src={Logo} alt="Logo" height="80" width="100%" />
  </a>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
    <ul className="navbar-nav navbar-right m-3 justify-content-center">
    <li className="nav-item dropdown justify-content-center ">
    
    <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Felhasználó
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <a className="dropdown-item" href="/regisztracio">Regisztráció</a>
      <a className="dropdown-item" href="/bejelentkezes">Bejelentkezés</a>
      
      
    </div>
  </li>
    <li className="nav-item dropdown justify-content-center ">
    
        <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hírek
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Hírfolyam</a>
          <a className="dropdown-item" href="/karrier">Karrier</a>
          <a className="dropdown-item" href="/hirlevel">Hírlevél</a>
        </div>
      </li>
      <li className="nav-item dropdown justify-content-center">
        <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Rólunk
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/rolunk">Bemutatkozás</a>
          <a className="dropdown-item" href="/konduktiv_csoport">Konduktív csoport</a>
          <a className="dropdown-item" href="/rolunk">Történetünk</a>
          <a className="dropdown-item" href="https://drive.google.com/file/d/1KkqrucoIFW4JhK3pk9FyUJV5qv-eLPhY/view" target="_blank">Pedagógusok és NOKS</a>
          <a className="dropdown-item" href="https://drive.google.com/file/d/1WapdhyarxbeC5TyuaHf1RFsvLuscpoqp/view" target="_blank">„Csillogó Szemekért” Alapítvány</a>
          <a className="dropdown-item" href="/aranykapu">Aranykapu</a>
        </div>
      </li>
      <li className="nav-item dropdown justify-content-center">
        <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Oktatás
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="https://idp.e-kreta.hu/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dkreta-web%26response_type%3Dcode%26scope%3Dopenid%26state%3DOpenIdConnect.AuthenticationProperties%253DNORHRvbF5rHrjHrefhJeBa_x43g17xLRkuD74ipe2LYfdJwiAMFynD_3pPxrpiXd0ulY2U87Nr7aj5q9kn5e5y2hHRveau6wMvVC_99WEugkfiZsJ33FmI2x4b-_ccOmPNE1b5M1OMcrC125LdKLcw%26response_mode%3Dform_post%26nonce%3D638296803926746520.Yjg1YmIyOGYtYjQ0MC00YmE3LTg3Y2YtYmRlMTc1OWM1ZWI4ZDgzNTM4NDUtYWU3MC00MzY4LTg4NzMtYzNiYWI5ZTQwNDMx%26institute_code%3Dklik029662001%26institute_data%3DeyJuZXh0X3VwZGF0ZV9kYXRlX3RpbWUiOiIyMDIzLjA5LjE5LiAyMjowMCIsImlzX3N6aXJfaW5zdGl0dXRlIjpmYWxzZSwiaXNfbGljZW5jZV92YWxpZCI6dHJ1ZSwiaXNfYXJjaGl2ZSI6ZmFsc2UsImlzX2Nzb2trZW50ZXR0X2dvbmR2aXNlbG8iOnRydWUsImlzX2ludGV6bWVueV9yb3ZpZG5ldiI6dHJ1ZSwiaXNfc3VjY2Vzc19hdXRob3JpemVkX2RhdGUiOmZhbHNlfQ%253D%253D%26prompt%3Dlogin%26redirect_uri%3Dhttps%253A%252F%252Fklik029662001.e-kreta.hu%26x-client-SKU%3DID_NET461%26x-client-ver%3D5.3.0.0%26suppressed_prompt%3Dlogin" target="_blank">Kréta</a>
          <a className="dropdown-item" href="https://drive.google.com/file/d/1mESQ1VypZKk9mPYbVEfbR9Ck9U4YWDVF/view"target="_blank">Osztályok, tanulók létszáma</a>
          <a className="dropdown-item" href="/szuloknek">Fogadóórák</a>
          <a className="dropdown-item" href="https://drive.google.com/file/d/1k7P6pYims1bfPjbLdxi5kRaWQ6RT4xVl/view" target="_blank">Mérések eredményei</a>
          <a className="dropdown-item" href="/tanszerlista">Tanszerlista</a>
        </div>
      </li>
      <li className="nav-item dropdown justify-content-center">
        <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dokumentumok
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/kozzeteteli_lista">Közzétételi lista</a>
          <a className="dropdown-item" href="/">Szervezeti és működési szabályzat</a>
          <a className="dropdown-item" href="/adatkezelesi_tajekoztato">Adatkezelési tájékoztatók</a>
          <a className="dropdown-item" href="https://drive.google.com/file/d/17ij-N5A4xYtd2Oz58aPUROXY8LBwL9W0/view"target="_blank">Házirend</a>
          
        </div>
      </li>
      <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Elérhetőségek/Kapcsolat
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
          <a className="dropdown-item" href="/kapcsolat">Vegye fel velünk a kapcsolatot!</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar