import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../public/images/logo_bopha.png";
import arrow from "./../public/images/icons/arrow-icon.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-img">
        <Image src={logo} alt="logo" width="100" height="100" />
      </div>
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/admin">
                Administration
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/galerie">
                Galerie
              </Link>
            </li>
          </ul>
        </nav>
        <form method="get" action="/contact">
          <button type="submit" className="button btn btn-dark">
            Contactez-moi
            <Image src={arrow} alt="flèche" className="arrow" />
          </button>
        </form>
      </div>
    </footer>
  );
}
