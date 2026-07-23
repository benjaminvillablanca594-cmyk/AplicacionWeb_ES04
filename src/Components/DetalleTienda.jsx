function DetalleTienda({ juego }) {
  if (!juego) {
    return null;
  }

  return (
    <div className="card bg-black border-secondary text-white shadow-lg">
      <img 
        src={juego.imagen} 
        className="card-img-top" 
        alt={juego.nombre}
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
      <div className="card-body p-4">
        <h2 className="card-title fw-bold">{juego.nombre}</h2>
        
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary pb-3 mt-3">
          <h4 className="text-primary fw-bold mb-0">${juego.precio.toLocaleString('es-CL')}</h4>
          <span className="badge bg-secondary fs-6 text-white">Valoración: {juego.valoracion}</span>
        </div>
        
        <p className="card-text text-light mb-4">{juego.descripcion}</p>
        
        <div className="row mb-4 text-muted">
          <div className="col-6">
            <p className="mb-1"><strong>Género:</strong> {juego.genero}</p>
            <p className="mb-0"><strong>Edad:</strong> {juego.edad}</p>
          </div>
          <div className="col-6">
            <p className="mb-1"><strong>Desarrollador:</strong> {juego.desarrollador}</p>
          </div>
        </div>

        <div className="p-3 bg-dark rounded border border-secondary mb-4">
          <h6 className="fw-bold text-light mb-2">Requisitos Mínimos</h6>
          <ul className="list-unstyled mb-0 text-muted small">
            <li><strong>SO:</strong> {juego.requisitos.os}</li>
            <li><strong>CPU:</strong> {juego.requisitos.cpu}</li>
            <li><strong>GPU:</strong> {juego.requisitos.gpu}</li>
            <li><strong>RAM:</strong> {juego.requisitos.ram}</li>
          </ul>
        </div>

        <button className="btn btn-primary btn-lg w-100 fw-bold">
          Descargar Dossier
        </button>
      </div>
    </div>
  );
}

export default DetalleTienda;