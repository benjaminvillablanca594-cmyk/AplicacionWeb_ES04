import TiendaCard from "./TiendaCard"

function ListaTienda(props) {

  const juego1 = {
    nombre: "EA Sports FC 26",
    imagen: "/imagenes/fc26.jpg",
    descripcion: "Simulador de fútbol con múltiples modos de juego. Experimenta la máxima autenticidad con las ligas, clubes y estrellas más importantes del mundo del fútbol.",
    precio: "$59.990",
    stock: 12,
    estrellas: 5,
    edad: "+3 Años",
    genero: "Deportes / Simulación",
    desarrollador: "Electronic Arts",
    requisitos: {
      os: "Windows 10/11 64-bit",
      cpu: "Intel Core i7-6700K / AMD Ryzen 5 1600",
      gpu: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 5600 XT",
      ram: "16 GB"
    }
  }

  const juego2 = {
    nombre: "Minecraft",
    imagen: "/imagenes/minecraft.jpg",
    descripcion: "Juego de construcción y supervivencia en un mundo hecho de bloques. Explora mundos generados aleatoriamente y construye cosas maravillosas, desde una simple casa hasta un grandioso castillo.",
    precio: "$29.990",
    stock: 15,
    estrellas: 5,
    edad: "+7 Años",
    genero: "Aventura / Sandbox",
    desarrollador: "Mojang Studios",
    requisitos: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i3-3210 / AMD A8-7600",
      gpu: "Intel HD Graphics 4000 / AMD Radeon R5",
      ram: "8 GB"
    }
  }

  const juego3 = {
    nombre: "Grand Theft Auto V",
    imagen: "/imagenes/gta5.jpg",
    descripcion: "Juego de acción y mundo abierto. Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, deben llevar a cabo una serie de peligrosos golpes para sobrevivir.",
    precio: "$24.990",
    stock: 8,
    estrellas: 5,
    edad: "+18 Años",
    genero: "Acción / Mundo Abierto",
    desarrollador: "Rockstar Games",
    requisitos: {
      os: "Windows 10 64-bit",
      cpu: "Intel Core i5 3470 / AMD X8 FX-8350",
      gpu: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
      ram: "8 GB"
    }
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
