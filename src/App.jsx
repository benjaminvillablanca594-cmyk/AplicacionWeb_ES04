import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ListaTienda from "./components/ListaTienda.jsx";
import DetalleTienda from "./components/DetalleTienda.jsx";
import { useState } from "react";


function App() {
  // revision de localStorage para obtener el último juego seleccionado
const juegoGuardado = localStorage.getItem("ultimoJuegoSeleccionado");
let ValorInicial = null;
if (juegoGuardado !== null) {
  ValorInicial = JSON.parse(juegoGuardado);
}
  //estado principal en la aplicacion
const [juegoSeleccionado, setJuegoSeleccionado] = useState(ValorInicial);


const manejarJuegoSeleccionado = (juego) => {
  setJuegoSeleccionado(juego);
  localStorage.setItem("ultimoJuegoSeleccionado", JSON.stringify(juego));
};

return (
    <>
      <Header />
      
      <main className="container mt-4">
        {/* Le pasamos la función a la lista mediante props */}
        <ListaTienda onSeleccionar={manejarJuegoSeleccionado} />
        
        {/* Renderizamos el detalle SOLO si hay un juego seleccionado */}
        {juegoSeleccionado !== null ? <DetalleTienda juego={juegoSeleccionado} /> : null}
      </main>

      <Footer />
    </>
  );
}

export default App;