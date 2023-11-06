import "../App.scss";

const Footer = () => {
    return (


        
    <footer className="text-center h4 m-0 ">
      <div className="m-3 p-4 ">
        <div className="row ">
          <div className="col-lg-3 col-md-6 mb-4 ">
            <h5 className="mb-3 text-dark">Támogatás</h5>
            <ul className="list-group list-group-flush mb-0 ">
              <li className="list-group-item bg-transparent">
              <a href="https://drive.google.com/file/d/1HIXuNkUIJHtm8Q1ktertF5ksRzwGvljX/view" target="_blank">Patrónus program</a>
              </li>
              <li className="list-group-item bg-transparent">
                <a href="https://drive.google.com/file/d/1WapdhyarxbeC5TyuaHf1RFsvLuscpoqp/view" target="_blank">„Csillogó Szemekért” Alapítvány</a>
              </li>
              
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 d-inline-block text-truncate">
            <h5 className="mb-3 text-dark">Kapcsolat</h5>
            <ul className="list-group list-group-flush mb-0">
              <li className="list-group-item bg-transparent">
              <i className="fa fa-envelope"></i> <a href="mailto: szegedi.fekete.iskola@gmail.com" >szegedi.fekete.iskola@gmail.com</a>
              </li>
              <li className="list-group-item bg-transparent">
              <i className="fa fa-phone"></i> <a href="tel:+36 62/548-960" > +36 62/548-960</a>
              </li>
              <li className="list-group-item bg-transparent">
              <i className="fa fa-location-arrow"></i>
 <a href="https://www.google.com/maps/dir//P%C3%B3st%C3%A1s%20utca%201-3." target="_blank">6729 Szeged, Postás u. 1-3.</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-1 text-dark">Csengetési rend</h5>
            <table id="table" className="table " >
              <tbody>
                <tr>
                  <td className="bg-transparent">1.óra</td>
                  <td className="bg-transparent">8:00-8:45</td>
                </tr>
                <tr>
                  <td className="bg-transparent">2.óra</td>
                  <td className="bg-transparent">9:00-9:45</td>
                </tr>
                <tr>
                  <td className="bg-transparent">3.óra</td>
                  <td className="bg-transparent">10:00-10:45</td>
                </tr>
                <tr>
                  <td className="bg-transparent">4.óra</td>
                  <td className="bg-transparent">11:00-11:45</td>
                </tr>
                <tr>
                  <td className="bg-transparent">5.óra</td>
                  <td className="bg-transparent">12:00-12:45</td>
                </tr>
                <tr>
                  <td className="bg-transparent">6.óra</td>
                  <td className="bg-transparent">13:00-13:45</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 ">
            <h5 className="mb-1 text-dark">Nyitvatartás</h5>
            <table className="table table-sm" >
              <tbody>
                <tr>
                  <td className="bg-transparent">Hétfő-Péntek</td>
                  <td className="bg-transparent">6:00-18:00</td>
                </tr>
                <tr>
                  <td className="bg-transparent">Szombat,Vasárnap</td>
                  <td className="bg-transparent">Zárva</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="OwlLink" className="text-center p-3" >
       <h3>Fejlesztés alatt</h3>
      </div>
    </footer>

    );
}
export default Footer