function Header() {
  return (
    <>
    <header className="bg-black text-white text-center py-5 border-bottom border-secondary shadow-sm">
      <div className="container">
        <img src="/portadas/banner.png" alt="Imagen Tienda"  className="img-fluid mb-3 rounded" style={{ maxWidth: '150px' }}/>
        <h1 className="display-4 fw-bold text-primary">Tienda Gamer</h1>
        <p className="lead text-light mb-0">Descubre las mejores experiencia del mundo gamer.</p>
      </div>
    </header>
    </>
  );
}

export default Header;