import { useState } from "react";

// 1. Recibimos directamente { juego } en lugar de {props}
function DetalleTienda({ juego }) {
    const [cantidad, setCantidad] = useState(1);

    // 2. RENDERIZADO CONDICIONAL (El "Escudo")
    // Si la variable "juego" viene vacía, mostramos esto y cortamos la ejecución
    if (!juego) {
        return (
            <div className="alert alert-info mt-4 text-center" role="alert">
                Selecciona un juego de la lista para ver sus detalles.
            </div>
        );
    }

    const aumentarCantidad = () => {
        // Actualizamos para usar la variable "juego" directamente
        if (cantidad < juego.stock) {
            setCantidad(cantidad + 1);
        } else { 
            window.alert("No hay más stock disponible");
        }
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    // 3. Definimos la variable que faltaba para que no explote el código
    const estrellasHtml = "⭐⭐⭐⭐⭐"; 

    return (
        <div className="card mb-5 shadow border-primary mt-4">
          <div className="row g-0">
            <div className="col-md-4">
              {/* Cambiamos todos los props.juego por simplemente juego */}
              <img src={juego.imagen} className="img-fluid rounded-start h-100 object-fit-cover" alt={juego.nombre} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{juego.nombre}</h3>
                <p className="card-text">{juego.descripcion}</p>
                
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item"><strong>Precio:</strong> {juego.precio}</li>
                  <li className="list-group-item"><strong>Stock disponible:</strong> {juego.stock} unidades</li>
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