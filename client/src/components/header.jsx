//creo que aquí hay que importar una variable relacionada con "la forma de la página, "items" que se van a repetir

const Header = () => {
  return (
    <header className="header" id="header">
      {/* Social Media Bar */}
      <div className="container-socialMediaBar" id="socialMediaBar">
        {/* Twitter */}
        <a
          className="btn btn-primary"
          style={{ backgroundColor: '#000000' }}
          href="#!"
          role="button"
          id="twitter"
        >
          <i className="bi bi-twitter-x">X</i>
        </a>

        {/* Telegram */}
        <a
          className="btn btn-primary"
          style={{ backgroundColor: '#00c8ff' }}
          href="#!"
          role="button"
          id="telegram"
        >
          <i className="bi bi-telegram" style={{ color: '#000000' }}>Telegram</i>
        </a>

        {/* Facebook */}
        <a
          className="btn btn-primary"
          style={{ backgroundColor: '#3b5998' }}
          href="#!"
          role="button"
          id="facebook"
        >
          <i className="fab fa-facebook-f">Facebook</i>
        </a>

        {/* Whatsapp */}
        <a
          className="btn btn-primary"
          style={{ backgroundColor: '#01ff63' }}
          href="#!"
          role="button"
          id="whatsapp"
        >
          <i className="bi bi-whatsapp" style={{ color: '#000000' }}>Whatsapp</i>
        </a>
      </div>

      {/* Navigation */}
      <nav>
        <a className="NavHome" href="/">
          <button type="button" className="ButtonNavHome">Home</button>
        </a>
        <a className="NavAbout" href="/about">
          <button type="button" className="ButtonNavAbout">About</button>
        </a>
        <a className="NavContact" href="/contact">
          <button type="button" className="ButtonNavContact">Contact</button>
        </a>

        {/* Search Form */}
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="inputBuscarPeli"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            id="ButtontBuscarPeli"
          >
            Search
          </button>
        </form>
      </nav>

      {/* Logo and Brand */}
      <img
        src="https://i.postimg.cc/FRnxdJ15/LogoFav.jpg"
        className="logo"
        width="80px"
        alt="Logo"
      />
      <img
        src="https://i.postimg.cc/DZqXFJsP/letrassinfondo.png"
        className="letras"
        alt="Brand Name"
      />
    </header>
  );
};

export default Header;
