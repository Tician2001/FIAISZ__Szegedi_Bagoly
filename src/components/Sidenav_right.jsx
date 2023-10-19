import React from 'react'
import vuk from "../assets/Vuk.jpg"
import tuskevar from "../assets/Tüskevár.jpg";

const Sidenav_right = () => {
  return (
    <div className="col-sm-2 sidenav">
    <div className="panel panel-default">
        <img className="img-fluid" src={vuk} />
    </div>
    <div className="panel panel-default">
        <img className="img-fluid" src={tuskevar} />
    </div>
    <div className="panel panel-default social">
        <h2>Közösségi média</h2>
    </div>
    <div className="panel panel-default">
        <p><a href="https://www.facebook.com/FIAISZ" target="_blank">Facebook</a></p>
    </div>
</div>
  )
}

export default Sidenav_right