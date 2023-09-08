import "./Header.css"

const Header = () => {
    return (
      <nav className="header">
        <div className="header-logo">
          <img src="https://icon2.cleanpng.com/20180221/eqw/kisspng-dog-tag-cat-pet-pet-footprints-logo-5a8e35a8643669.3161012915192692884105.jpg" alt="Logo" />
        </div>
        <div className="header-links">
          <h1>VETBEE</h1>
          <a href="/">Pets</a>
          <a href="/about">Medications</a>
        </div>
      </nav>
    );
  };
  
  export default Header;