import {useState} from "react";

function DetalleTienda({props}){
    const [cantidad, setCantidad] = useState(1);

    const aumentarCantidad = () => {
        if (cantidad < props.juego.stock) {
            setCantidad(cantidad + 1);
        }
        else 
        { window.alert("No hay más stock disponible");}
        };

        const disminuirCantidad = () => {
            if (cantidad > 1) {
                setCantidad(cantidad - 1);
            }
        };
return(
    <div className="card mb-5 shadow border-primary mt-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.juego.imagen} className="img-fluid rounded-start h-100 object-fit-cover" alt={props.juego.nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{props.juego.nombre}</h3>
            <p className="card-text">{props.juego.descripcion}</p>
            
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item"><strong>Precio:</strong> {props.juego.precio}</li>
              <li className="list-group-item"><strong>Stock disponible:</strong> {props.juego.stock} unidades</li>
              <li className="list-group-item"><strong>Reseñas:</strong> {estrellasHtml}</li>
            </ul>

            <div className="d-flex align-items-center mb-3">
              <span className="me-3"><strong>Cantidad a comprar:</strong></span>
              <button className="btn btn-secondary btn-sm" onClick={disminuirCantidad}>-</button>
              <span className="mx-3">{cantidad}</span>
              <button className="btn btn-secondary btn-sm" onClick={aumentarCantidad}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleTienda;