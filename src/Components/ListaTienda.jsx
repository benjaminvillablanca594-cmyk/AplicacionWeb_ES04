import TiendaCard from "./TiendaCard"

function ListaTienda(props) {

  const juego1 = {
    nombre: "EA Sports FC 26",
    imagen: "/imagenes/fc26.jpg",
    descripcion: "Simulador de fútbol con multiples modos de juego.",
    precio: "$59.990",
    stock: 12,
    estrellas: 5
  }

  const juego2 = {
    nombre: "Minecraft",
    imagen: "/imagenes/minecraft.jpg",
    descripcion: "Juego de construcción y supervivencia en un mundo hecho de bloques.",
    precio: "$29.990",
    stock: 15,
    estrellas: 5
  }

  const juego3 = {
    nombre: "Grand Theft Auto V",
    imagen: "/imagenes/gta5.jpg",
    descripcion: "Juego de acción y mundo abierto.",
    precio: "$24.990",
    stock: 8,
    estrellas: 5
  }

  return (
    <>
    < div className="container mt-4">
        <div className="row">

            <div className="col-md-4">
                <TiendaCard
                juego={juego1}
                onSeleccionar={props.onSeleccionar}
                />
            </div>
            <div className="col-md-4"> 
                <TiendaCard
                juego={juego2}
                onSeleccionar={props.onSeleccionar}
                />
            </div>

            <div className="col-md-4">
                <TiendaCard
                juego={juego3}
                onSeleccionar={props.onSeleccionar}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default ListaTienda;