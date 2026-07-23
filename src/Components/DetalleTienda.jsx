function DetalleTienda({ juego }) {
    if (!juego) {
        return (
            <div className="alert alert-secondary mt-4 text-center" role="alert">
                Selecciona un juego para ver más información.
            </div>
        );
    }

    return (
        <div className="card shadow-sm border-0 mt-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-5">
              <img 
                src={juego.imagen} 
                className="img-fluid rounded-start h-100 object-fit-cover" 
                alt={juego.nombre} 
              />
            </div>
            <div className="col-md-7">
              <div className="card-body p-4">
                <h2 className="card-title display-6 fw-bold">{juego.nombre}</h2>
                <p className="card-text lead text-muted mt-3">{juego.descripcion}</p>

                <div className="mt-4">
                  <h4 className="text-primary fw-bold">Precio: {juego.precio}</h4>
                  <p className="mb-0 text-secondary">
                    <strong>Valoración:</strong> {juego.reseñas}
                  </p>
                </div>

                <div className="mt-4">
                  <button className="btn btn-primary btn-lg w-100">
                    Obtener ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default DetalleTienda;