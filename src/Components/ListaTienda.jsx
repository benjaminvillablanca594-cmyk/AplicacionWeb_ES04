function TiendaCard(props) {
    return (
        <div className="card h-100 shadow-sm">
            <img src={props.juego.imagen} className="card-img-top" alt={props.juego.nombre} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.juego.nombre}</h5>
                <button
                    className="btn btn-primary mt-auto"
                    onClick={() => props.onSeleccionar(props.juego)}
                >
                    Más información
                </button>
            </div>
        </div>
    );
}

export default TiendaCard;