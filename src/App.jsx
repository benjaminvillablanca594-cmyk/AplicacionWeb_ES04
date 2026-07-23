import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ListaTienda from "./ListaTienda.jsx";
import DetalleTienda from "./DetalleTienda.jsx";
import { useState } from "react";

function App() {
  const juegoGuardado = localStorage.getItem("ultimoJuegoSeleccionado");
  let valorInicial = null;
  if (juegoGuardado !== null) {
    valorInicial = JSON.parse(juegoGuardado);
  }

  const [juegoSeleccionado, setJuegoSeleccionado] = useState(valorInicial);
  
  const manejarJuegoSeleccionado = (juego) => {
    setJuegoSeleccionado(juego);
    localStorage.setItem("ultimoJuegoSeleccionado", JSON.stringify(juego));
  };

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      <Header />
      
      <main className="container mt-5 mb-5 flex-grow-1">
        <div className="row g-4">
          <div className="col-md-5">
            <h3 className="mb-4 fw-bold text-light">Catálogo de Títulos</h3>
            <ListaTienda onSeleccionar={manejarJuegoSeleccionado} />
          </div>
          
          <div className="col-md-7">
            <div className="sticky-top" style={{ top: '20px' }}>
              {juegoSeleccionado !== null ? (
                <DetalleTienda juego={juegoSeleccionado} />
              ) : (
                <div className="alert bg-black text-white border border-secondary text-center p-5 shadow">
                  <h4>Selecciona un título</h4>
                  <p className="text-muted mb-0">Haz clic en "Más información" para revisar las especificaciones del producto.</p>
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