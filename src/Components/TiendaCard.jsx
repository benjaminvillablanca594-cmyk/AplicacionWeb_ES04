function TiendaCard(props) {
  return (
    <div className="card bg-black border-secondary text-white shadow-sm h-100">
      <img 
        src={props.juego.imagen} 
        className="card-img-top" 
        alt={props.juego.nombre}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{props.juego.nombre}</h5>
        <p className="card-text text-muted text-truncate">{props.juego.descripcion}</p>
        <button 
          className="btn btn-outline-primary mt-auto fw-bold"
          onClick={() => props.onSeleccionar(props.juego)}
        >
          Más información
        </button>
      </div>
    </div>
  );
}

export default TiendaCard;