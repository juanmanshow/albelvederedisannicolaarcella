'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  MapPin,
  Car,
  Snowflake,
  CookingPot,
  Bath,
  Sofa,
  Sheet,
  Smartphone,
  MapPinned,
} from 'lucide-react';

const gallery = [
  '/images/apartment-1.jpg',
  '/images/balcony1.jpg',
  '/images/bedroom1.jpg',
  '/images/kitchen1.jpg',
  '/images/bathroom1.jpg',
  '/images/sofa1.jpg',
];

export default function AppartamentoSuperiorConBalcone() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  const slides = gallery.map((src) => ({ src }));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <main>
      <header className={`nav scrolled ${menuOpen ? 'menuIsOpen' : ''}`}>
        <div className="brand">
          <img
            src="/images/logo-dark.png"
            alt="Logo Al Belvedere di San Nicola Arcella"
            className="brandLogo"
          />

          <div className="brandText">
            <span className="brandTitle">
              Al Belvedere di San Nicola Arcella
            </span>
          </div>
        </div>

        <nav>
        <Link href="/">Home</Link>
        <Link href="/#contact">Prenota</Link>
        <div className="navDropdown">
          <Link href="/#apartments">Appartamenti</Link>
          <div className="navDropdownMenu">
            <Link href="/appartamento-superior-con-balcone">
              Superior con balcone
            </Link>
            <Link href="/appartamento-superior">
              Superior
            </Link>
          </div>
        </div>
        <Link href="/#place">San Nicola Arcella</Link>
        <Link href="/#contact">Recensioni</Link>
        <Link href="/#contact">Contatti</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>

        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/#contact" onClick={() => setMenuOpen(false)}>
          Prenota
        </Link>

        <Link href="/#apartments" onClick={() => setMenuOpen(false)}>
          Appartamenti
        </Link>

        <Link href="/#place" onClick={() => setMenuOpen(false)}>
          San Nicola Arcella
        </Link>

        <Link href="/#contact" onClick={() => setMenuOpen(false)}>
          Recensioni
        </Link>

        <Link href="/#contact" onClick={() => setMenuOpen(false)}>
          Contatti
        </Link>

        <Link href="/#faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>
      </div>

      <section className="apartmentPageHero">
        <p className="sectionLabel">Boutique apartment</p>

        <h1>Appartamento Superior con balcone</h1>

        <p>
          Un appartamento luminoso e mediterraneo, con balcone privato, pensato
          per vivere San Nicola Arcella tra comfort, quiete e posizione centrale.
        </p>

        <div className="heroActions">
          <a
            href="https://wa.me/393485721282"
            className="btn primary whatsappBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a href="tel:+393485721282" className="btn phoneBtn">
            +39 348 572 1282
          </a>
        </div>
      </section>

      <section className="apartmentEditorialGallery">
        <button
          className="galleryFeatured"
          onClick={() => {
            setPhotoIndex(0);
            setOpen(true);
          }}
        >
          <img
            src={gallery[0]}
            alt="Appartamento Superior con balcone a San Nicola Arcella"
          />
        </button>

        <div className="galleryThumbs">
          {gallery.slice(1).map((image, index) => (
            <button
              key={image}
              className="galleryThumb"
              onClick={() => {
                setPhotoIndex(index + 1);
                setOpen(true);
              }}
            >
              <img
                src={image}
                alt="Dettaglio Appartamento Superior con balcone"
              />
            </button>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={photoIndex}
        />
      </section>

      <section className="apartmentPageContent">
        <div>
          <p className="sectionLabel">Details</p>
          <h2>Comfort essenziale, atmosfera curata.</h2>
        </div>

        <div className="apartmentPageText">
          <p>
            Ideale per coppie, famiglie o piccoli gruppi, l’appartamento offre
            camera da letto, divano letto, cucina attrezzata, bagno privato,
            aria condizionata, posto auto e balcone.
          </p>

          <ul>
            <li>
              <MapPin size={20} />
              Posizione centrale
            </li>
            <li>
              <Car size={20} />
              Posto auto
            </li>
            <li>
              <Snowflake size={20} />
              Aria condizionata
            </li>
            <li>
              <CookingPot size={20} />
              Cucina attrezzata
            </li>
            <li>
              <Bath size={20} />
              Bagno privato
            </li>
            <li>
              <Sofa size={20} />
              Divano letto
            </li>
            <li>
              <Sheet size={20} />
              Biancheria inclusa
            </li>
            <li>
              <Smartphone size={20} />
              Check-In da remoto
            </li>
          </ul>

          <Link href="/#contact" className="placeButton">
            Richiedi disponibilità
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footerTop">
          <div className="footerBrand">
            <img
              src="/images/icon.png"
              alt="Logo Al Belvedere di San Nicola Arcella"
              className="footerLogo"
            />

            <h3 className="footerBrandTitle">
              Appartamenti “Al Belvedere di San Nicola Arcella”
            </h3>

            <span className="footerTagline">
              Boutique apartments in Calabria
            </span>
          </div>

          <div className="footerColumn">
            <h4>Informazioni</h4>

            <p>
              Corso Umberto I, 12
              <br />
              San Nicola Arcella 87020
              <br />
              Calabria, Italia
              <br />
              <br />
              CIN: IT078125C2YDTUYBJV
              <br />
              CIR: 078125-AAT-00066
            </p>
          </div>

          <div className="footerColumn">
            <h4>Contatti</h4>

            <a href="tel:+393485721282">+39 348 572 1282</a>

            <a href="mailto:giovanniesposito99.ge@gmail.com">
              giovanniesposito99.ge@gmail.com
            </a>

            <a
              href="https://maps.app.goo.gl/zpQdoTt6tzh8jyaK7"
              target="_blank"
              rel="noopener noreferrer"
              className="placeButton"
            >
              <MapPinned size={18} />
              Apri su Google Maps
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <span>
            © 2026 Al Belvedere di San Nicola Arcella · All rights reserved
          </span>

          <div className="footerBottomLinks">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </footer>

      <div className={`mobileStickyCta ${scrolled ? 'compact' : ''}`}>
        <a href="tel:+393485721282">Chiama</a>

        <a
          href="https://wa.me/393485721282"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <button
        className={`backToTop ${scrolled ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </main>
  );
}