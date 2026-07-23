import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import ListaTienda from "./Components/ListaTienda.jsx";
import DetalleTienda from "./Components/DetalleTienda.jsx";
import { useState } from "react";

// Implementacio de localStorage para obtener el último juego seleccionado y poder vizualisar su informacion
function App() {
  const juegoGuardado = localStorage.getItem("ultimoJuegoSeleccionado");
  let ValorInicial = null;
  if (juegoGuardado !== null) {
    ValorInicial = JSON.parse(juegoGuardado);
  }

  // Estado principal en la aplicacion
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(ValorInicial);
  const manejarJuegoSeleccionado = (juego) => {
    setJuegoSeleccionado(juego);
    localStorage.setItem("ultimoJuegoSeleccionado", JSON.stringify(juego));
  };

  return (
    <>
      <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      <Header />
      
      <main className="container mt-4">
        {/* Creamos las columnas en paralelo con row */}
        <div className="row">
          
          {/* La columna de la izquierda es donde se encontrara la Lista de juegos */}
          <div className="col-md-6">
            {/* Le pasamos la función a la lista mediante props */}
            <ListaTienda onSeleccionar={manejarJuegoSeleccionado} />
          </div>
          
          {/* La columna de la derecha mostrara los Detalle del juego */}
          <div className="col-md-6">
            {/* sticky-top cumple la funcion de poder vizualisar toda la infromacion si esta es muy extensa */}
            <div className="sticky-top" style={{ top: '20px' }}>
              
              {/* Renderizamos el detalle solo si un juego ha sido seleccionado, de lo contrario mostramos un mensaje */}
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
  </>
  );
}

export default App;
