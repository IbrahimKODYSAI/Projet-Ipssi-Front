// // == Import : npm
// import 'semantic-ui-css/semantic.min.css';
// import { Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import React from 'react';

// == Import : local

import './footer.scss';

// == Composant
const Footer = () => (
      <div className="footer-navigation">
        <section>
            <h2>Adide & Information</h2>
            <ul className="help">
              <li>Questions fréquentes</li>
              <li>Essayer d'abord, payer après</li>
              <li>Livraison 24h en point retrait</li>
              <li>Retour depuis votre boîte aux lettres</li>
              <li>Suivre mon colis</li>
              <li>Assistance</li>
              <li>Guide des tailles</li>
            </ul>
        </section>
        <section>
          <h2>à propos de Queens'sLand</h2>
          <ul className="help">
            <li>Corporate Website</li>
            <li>Queen'sLand recrute</li>
            <li>Presse</li>
            <li>Programme d'affiliation</li>
            <li>Queen'sLand Marketing Services</li>
            <li>Mode d'emploi Mode</li>
            <li>Investisseurs</li>
          </ul>
        </section>
        <section>
          <h2>Chêques cadeaux</h2>
          <ul className="help">
            <li>Offrir une carte cadeau</li>
            <li>Utiliser uen carte cadeau</li>
            <li>Chèques cadeaux d'entreprise</li>
          </ul>
        </section>
        <section>
          <h2>Moyens de paiement</h2>
          <ul className="card">
            <li><img src="images/master.PNG" alt=""/></li>
            <li><img src="images/visa.PNG" alt=""/></li>
            <li><img src="images/paypal.PNG" alt=""/></li>
            <li><img src="images/amex.PNG" alt=""/></li>
          </ul>
        </section>
        
        <div className="footer-navigation-2">
          <div className="mentions-liste">
            <ul>
              <li>Mentions légales</li>
              <li>Proctection des données</li>
              <li>CGV</li>
              <li>Conditions des offres</li>
              <li>Traitements des données</li>
            </ul>
          </div>
          <div className="app-icons">
            <h3>applicaitons Queen'sLand</h3>
            <div>
              <svg id="apple" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M395.748 272.046c-.646-64.84 52.88-95.938 55.27-97.483-30.074-44.01-76.924-50.04-93.62-50.736-39.87-4.037-77.797 23.474-98.032 23.474-20.184 0-51.41-22.876-84.476-22.275-43.458.646-83.53 25.27-105.906 64.19-45.152 78.35-11.563 194.42 32.445 257.963 21.503 31.104 47.145 66.038 80.812 64.79 32.42-1.294 44.68-20.98 83.878-20.98 39.196 0 50.215 20.98 84.524 20.336 34.888-.648 56.99-31.7 78.347-62.898 24.695-36.084 34.863-71.02 35.463-72.812-.775-.354-68.03-26.12-68.705-103.568zM331.28 81.76C349.15 60.083 361.21 30.006 357.92 0c-25.74 1.048-56.938 17.145-75.405 38.775-16.57 19.188-31.075 49.813-27.188 79.218 28.734 2.242 58.065-14.602 75.953-36.232z"></path></svg>
              <svg id="android" preserveAspectRatio="xMidYMid meet" viewBox="0 0 505.145 505.145"><path d="M68.54 164.715h-1.293c-16.588 0-30.113 13.568-30.113 30.113v131.107c0 16.61 13.525 30.134 30.113 30.134h1.316c16.588 0 30.113-13.57 30.113-30.135V194.827c-.022-16.544-13.568-30.112-30.135-30.112zm44.545 211.825c0 15.23 12.446 27.632 27.675 27.632h29.574v70.817c0 16.63 13.568 30.155 30.113 30.155h1.294c16.61 0 30.157-13.546 30.157-30.156V404.17h41.33v70.817c0 16.63 13.61 30.155 30.156 30.155h1.273c16.61 0 30.134-13.546 30.134-30.156V404.17h29.595c15.207 0 27.654-12.403 27.654-27.632V169.525H113.084V376.54zM322.04 43.983l23.492-36.26c1.51-2.287.84-5.414-1.467-6.903-2.286-1.51-5.414-.884-6.903 1.467L312.81 39.8c-18.27-7.486-38.677-11.692-60.227-11.692-21.57 0-41.934 4.206-60.247 11.69l-24.31-37.51C166.538-.065 163.388-.69 161.08.82c-2.308 1.488-2.977 4.616-1.467 6.903l23.512 36.26c-42.387 20.773-70.968 59.924-70.968 104.834 0 2.76.173 5.48.41 8.175H392.62c.237-2.696.388-5.414.388-8.175 0-44.91-28.602-84.06-70.967-104.834zM187.656 108.91c-7.442 0-13.482-5.996-13.482-13.46 0-7.462 6.04-13.438 13.482-13.438 7.485 0 13.482 5.975 13.482 13.44s-6.04 13.46-13.482 13.46zm129.835 0c-7.442 0-13.482-5.996-13.482-13.46 0-7.462 6.04-13.438 13.482-13.438 7.463 0 13.46 5.975 13.46 13.44 0 7.462-5.997 13.46-13.46 13.46zm120.385 55.805h-1.25c-16.59 0-30.157 13.568-30.157 30.113v131.107c0 16.61 13.59 30.134 30.155 30.134h1.273c16.61 0 30.113-13.57 30.113-30.135V194.827c0-16.544-13.546-30.112-30.134-30.112z"></path></svg>
            </div>
          </div>
          <div className="social-icons">
            <h3>Plus d'inspirations</h3>
            <div>
              <svg id="twitter" preserveAspectRatio="xMidYMid meet" viewBox="0 0 612 612"><path d="M612 116.258a250.714 250.714 0 0 1-72.088 19.772c25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48A125.556 125.556 0 0 1 24.63 232.21v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253c24.661-17.595 46.001-39.7 62.791-64.863z"></path></svg>
              <svg id="facebook" preserveAspectRatio="xMidYMid meet" viewBox="0 0 96.124 96.123"><path d="M72.09.02L59.623 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.96v15.804a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.96-1.96H56.84v-9.247c0-4.444 1.06-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.96-1.96V1.98A1.96 1.96 0 0 0 72.088.02z"></path></svg>
              <svg id="pinterest" preserveAspectRatio="xMidYMid meet" viewBox="0 0 486.392 486.392"><path d="M430.15 135.248C416.864 39.125 321.075-9.818 218.872 1.642 138.07 10.702 57.513 76.03 54.168 169.447c-2.037 57.03 14.136 99.8 68.4 111.84 23.498-41.586-7.57-50.676-12.434-80.802C90.222 77.367 252.16-6.718 336.974 79.313c58.733 59.583 20.034 242.77-74.57 223.71-90.62-18.18 44.384-164.005-27.936-192.61-58.793-23.287-90.013 71.134-62.137 118.07-16.354 80.712-51.556 156.71-37.3 257.91 46.208-33.56 61.803-97.734 74.57-164.704 23.226 14.135 35.66 28.757 65.27 31.037 109.194 8.48 170.266-109.014 155.28-217.48z"></path></svg>
              <svg id="instagram" preserveAspectRatio="xMidYMid meet" viewBox="0 0 97.395 97.395"><path d="M12.5 0h72.394c6.875 0 12.5 5.09 12.5 12.5v72.395c0 7.41-5.625 12.5-12.5 12.5H12.5c-6.876 0-12.5-5.09-12.5-12.5V12.5C0 5.09 5.624 0 12.5 0zm58.45 10.82a4.395 4.395 0 0 0-4.383 4.386V25.7a4.396 4.396 0 0 0 4.383 4.386h11.008A4.398 4.398 0 0 0 86.34 25.7V15.207a4.397 4.397 0 0 0-4.384-4.385H70.948zm15.44 30.368h-8.573a28.486 28.486 0 0 1 1.25 8.355c0 16.2-13.556 29.332-30.275 29.332-16.718 0-30.272-13.132-30.272-29.332 0-2.904.438-5.708 1.25-8.355h-8.945v41.14a3.884 3.884 0 0 0 3.872 3.873h67.822a3.883 3.883 0 0 0 3.872-3.87V41.187h-.003zm-37.6-11.655c-10.8 0-19.56 8.485-19.56 18.953S37.99 67.44 48.79 67.44c10.804 0 19.563-8.486 19.563-18.954s-8.757-18.953-19.56-18.953z"></path></svg>
            </div>
          </div>
        </div>

      </div>
);

// == Export
export default Footer;
