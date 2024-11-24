import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">JingleGings</h1>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <ul>
            <li><a href="#perfect-for" onClick={toggleMenu}>Ótimos para</a></li>
            <li><a href="#prices" onClick={toggleMenu}>Preços</a></li>
            <li><a href="#house-kit" onClick={toggleMenu}>Kit Casinha</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Galeria</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Biscoitos JingleGings</h2>
          <p>Biscoitos natalinos de gengibre e especiarias</p>
        </section>

        <section id="perfect-for" className="perfect-for">
          <h2 className="script-heading">Ótimos para</h2>
          <div className="perfect-for-container">
            <div className="perfect-for-item">
              <img 
                src="/img1.jpg" 
                alt="Gingerbread House Kit" 
                className="perfect-for-image" 
              />
              <p className="perfect-for-caption">decorar a mesa de Natal</p>
            </div>
            <div className="perfect-for-item">
              <img 
                src="/img2.jpg" 
                alt="Gingerbread House Kit" 
                className="perfect-for-image" 
              />
              <p className="perfect-for-caption">aproveitar</p>
            </div>
            <div className="perfect-for-item">
              <img 
                src="/img3.jpg" 
                alt="Gingerbread House Kit" 
                className="perfect-for-image" 
              />
              <p className="perfect-for-caption">presentear</p>
            </div>
          </div>
        </section>

        <section id="prices" className="prices">
          <h2 className="script-heading">Preços</h2>
          <div className="price-container">
            <div className="price-item">
              <span className="quantity">3 biscoitos</span>
              <span className="dots"></span>
              <span className="price">R$ 7,00</span>
            </div>
            <div className="price-item">
              <span className="quantity">5 biscoitos</span>
              <span className="dots"></span>
              <span className="price">R$ 12,00</span>
            </div>
            <div className="price-item">
              <span className="quantity">10 biscoitos</span>
              <span className="dots"></span>
              <span className="price">R$ 25,00</span>
            </div>
            <div className="price-item">
              <span className="quantity">20 biscoitos</span>
              <span className="dots"></span>
              <span className="price">R$ 50,00</span>
            </div>
            <div className="price-item">
              <span className="quantity">50 biscoitos</span>
              <span className="dots"></span>
              <span className="price">R$ 100,00</span>
            </div>
            <div className="price-item">
              <span className="quantity">kit casinha</span>
              <span className="dots"></span>
              <span className="price">R$ 35,00</span>
            </div>
          </div>
        </section>

        <section id="house-kit" className="house-kit">
          <h2 className="script-heading">Kit Casinha</h2>
          <div className="house-details">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img 
                    src="/gbh.png" 
                    alt="Gingerbread House Kit" 
                    className="gingerbread-house" 
                  />
                </div>
                <div className="flip-card-back">
                  <div className="dimensions">
                    <div className="dimension">
                      <span className="dimension-label">Altura</span>
                      <span className="dimension-value">10 cm</span>
                    </div>
                    <div className="dimension">
                      <span className="dimension-label">Largura</span>
                      <span className="dimension-value">6 cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="house-description">partes da casinha desmontada + glacê branco</p>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <h2 className="script-heading">Galeria</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src="/g1.jpg"
                alt="Gingerbread House"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/g2.jpg"
                alt="Christmas Tree Cookie"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/g3.jpg"
                alt="Snowflake Cookie"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/g4.jpg"
                alt="Gingerbread Man"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/g5.jpg"
                alt="Star Cookie"
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/img2.jpg"
                alt="Candy Cane Cookie"
                className="gallery-image"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Faça seu pedido!</h2>
          <p>atendimento via WhatsApp e Instagram</p>
          
          <div className="contact-details">
            <p className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <a 
                href="https://www.instagram.com/jingle.gings/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                @jingle.gings
              </a>
            </p>
            <p className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <a 
                href="https://www.instagram.com/_manuffreire_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
               @_manuffreire_
              </a>
            </p>
            
            <p className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a 
                href="tel:+5511945437667" 
                className="contact-link"
              >
                (11) 94543-7667
              </a>
            </p>
          </div>

          <div className="service-dates">
            <p>atendimento São Paulo: 7- 20 novembro</p>
            <p>atendimento Alphaville: 7 nov -10 dezembro</p>
          </div>

          <a 
            href="https://www.instagram.com/jingle.gings/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Contato
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 JingleGings. Espalhando alegria através do gengibre.</p>
      </footer>
    </div>
  );
};

export default HomePage;
