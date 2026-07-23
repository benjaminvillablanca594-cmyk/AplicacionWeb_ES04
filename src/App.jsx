import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ListaTienda from "./ListaTienda.jsx";
import DetalleTienda from "./DetalleTienda.jsx";
import { useState } from "react";

// revision de localStorage para obtener el último juego seleccionado
function App() {
  const juegoGuardado = localStorage.getItem("ultimoJuegoSeleccionado");
  let ValorInicial = null;
  if (juegoGuardado !== null) {
    ValorInicial = JSON.parse(juegoGuardado);
  }

  // estado principal en la aplicacion
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(ValorInicial);
  const manejarJuegoSeleccionado = (juego) => {
    setJuegoSeleccionado(juego);
    localStorage.setItem("ultimoJuegoSeleccionado", JSON.stringify(juego));
  };

  return (
    <>
      <Header />
      
      <main className="container mt-4">
        {/* Envolvemos todo en un 'row' para crear las columnas en paralelo */}
        <div className="row">
          
          {/* Columna Izquierda: Lista de juegos */}
          <div className="col-md-6">
            {/* Le pasamos la función a la lista mediante props */}
            <ListaTienda onSeleccionar={manejarJuegoSeleccionado} />
          </div>
          
          {/* Columna Derecha: Detalle del juego */}
          <div className="col-md-6">
            {/* sticky-top hace que el detalle baje contigo si la lista es muy larga */}
            <div className="sticky-top" style={{ top: '20px' }}>
              
              {/* Renderizamos el detalle SOLO si hay un juego seleccionado, de lo contrario mostramos un mensaje */}
              {juegoSeleccionado !== null ? (
                <DetalleTienda juego={juegoSeleccionado} />
              ) : (
                <div className="alert alert-secondary mt-4 text-center shadow-sm">
                  Haz clic en "Más información" en cualquier título para ver sus detalles aquí.
                </div>
              )}
              
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
