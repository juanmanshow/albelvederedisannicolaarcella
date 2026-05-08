'use client';

import { useEffect, useState } from 'react';
import './globals.css';
import Link from 'next/link';
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

const apartments = [
  {
    name: 'Appartamento Superior con balcone',
    text: 'Luminoso, mediterraneo, ideale per vivere San Nicola Arcella tra mare, relax e comfort.',
    features: ['Camera da letto', 'Divano letto', 'Cucina attrezzata', 'Bagno privato', 'Posto auto','Aria Condizionata','Balcone'],
  },
  {
    name: 'Appartamento Superior',
    text: 'Adiacente e appena rinnovato, perfetto per famiglie, coppie o soggiorni con amici.',
    features: ['Camera da letto', 'Divano letto', 'Cucina attrezzata', 'Bagno privato', 'Posto auto','Aria Condizionata'],
  },
];
const placeImages = [
  '/images/san-nicola.jpg',
  '/images/san-nicola2.jpg',
  '/images/Arco di Enea.jpg',
  '/images/centro storico.jpg',
  '/images/golfo.jpg',
  '/images/Qcece.jpg',
  '/images/scalette arcomagno.jpg',
  '/images/Torre Crawford.jpg',
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [placeImageIndex, setPlaceImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
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
    const interval = setInterval(() => {
      setPlaceImageIndex((current) => (current + 1) % placeImages.length);
    }, 7000);
  
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);;
  return (
    <main>
      <header className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menuIsOpen' : ''}`}>
        
      <div className="brand">
        <img
          src={scrolled ? '/images/logo-dark.png' : '/images/logo-white.png'}
          alt="Logo Al Belvedere di San Nicola Arcella"
          className="brandLogo"
        />

        <div className="brandText">
          <span className="brandTitle">Al Belvedere di San Nicola Arcella</span>
        </div>
      </div>


        <nav>
          <a href="#contact">Prenota</a>
          <a href="#apartments">Appartamenti</a>
          <a href="#place">San Nicola Arcella</a>
          <a href="#contact">Recensioni</a>
          <a href="#contact">Contatti</a>
          <a href="#contact">FAQ</a>
        </nav>
        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu">
          <span />
          <span />
        </button>
      </header>
      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Prenota</a>
          <a href="#apartments" onClick={() => setMenuOpen(false)}>Appartamenti</a>
          <a href="#place" onClick={() => setMenuOpen(false)}>San Nicola Arcella</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contatti</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>FAQ</a>
        </div>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">San Nicola Arcella · Riviera dei Cedri</p>
          <h1>Al Belvedere di San Nicola Arcella</h1>
          <p className="subtitle">
            Appartamenti mediterranei, luminosi e accoglienti, per vivere la Calabria tra mare,
             quiete e panorami mozzafiato.
          </p>
          <div className="heroActions">
            <a href="#apartments" className="btn primary">Scopri gli appartamenti</a>
            <a href="#contact" className="btn secondary">Richiedi disponibilità</a>
          </div>
          <p className="directBookingNote">
            Prenota direttamente per ricevere assistenza e condizioni economiche dedicate.
          </p>
        </div>
      </section>

      <section className="intro">
        <p className="sectionLabel">Boutique apartments</p>
        <h2>Una casa al mare pensata per rallentare.</h2>
        <p>
          Al Belvedere nasce per chi cerca un soggiorno semplice ma curato: luce naturale, dettagli
          mediterranei, posizione centrale per immergersi nel fascino autentico di San Nicola Arcella.
        </p>
      </section>

      <section id="apartments" className="apartments">
        <div className="sectionHead">
          <p className="sectionLabel">Stay with us</p>
          <h2>I nostri appartamenti</h2>
        </div>

        <div className="apartmentGrid">
  {apartments.map((apt, index) => (
    <article className="apartmentCard" key={apt.name}>
      <div
        className="apartmentImage"
        style={{
          backgroundImage: `url('/images/apartment-${index + 1}.jpg')`,        }}
      />

      <div className="apartmentContent">
        <p className="apartmentEyebrow">
          Boutique Apartment {index + 1}
        </p>

        <h3>{apt.name}</h3>

        <p className="apartmentText">
          {apt.text}
        </p>

        <div className="featureList">
          {apt.features.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>

        <div className="apartmentActions">
          <a
            href={
              index === 0
                ? '/appartamento-superior-con-balcone'
                : '/appartamento-superior'
            }
            className="discoverLink"
          >
            Scopri l&apos;appartamento
          </a>

          <a href="#contact" className="miniButton">
            Disponibilità
          </a>
        </div>
      </div>
    </article>
  ))}
</div>
      </section>

      <section className="experience">
        <div>
          <p className="sectionLabel">The experience</p>
          <h2>Mare, borghi, tramonti e giornate lente.</h2>
        </div>
        <p>
          Dall’Arcomagno all’Isola di Dino, dalle spiagge della Riviera dei Cedri ai vicoli del borgo:
          ogni giornata può essere diversa, senza perdere quella sensazione di casa.
        </p>
      </section>

      <section id="place" className="place">
      <div className="placeImage">
        {placeImages.map((image, index) => (
          <div
            key={image}
            className={`placeImageSlide ${index === placeImageIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(111, 158, 181, 0.2), rgba(111, 158, 181, 0.2)), url('${image}')`,
            }}
          />
        ))}
      </div>
        <div className="placeText">
          <p className="sectionLabel">Discover</p>
          <h2>San Nicola Arcella</h2>
          <p>
            Uno dei luoghi più suggestivi della costa calabrese, sospeso tra mare, roccia e panorami
            aperti sul Tirreno. Una base ideale per scoprire Arcomagno, Praia a Mare, Scalea e la
            Riviera dei Cedri.
          </p>
          <a href="#contact" className="placeButton">
            Organizza il tuo soggiorno
          </a>
        </div>
      </section>

      <section className="amenities">
        <p className="sectionLabel">Comfort</p>
        <h2>Servizi essenziali, atmosfera curata.</h2>
        <div className="amenityGrid">
          <span>
            <MapPin size={20} />
            Posizione centrale
          </span>
          <span>
            <Car size={20} />
            Posto auto
          </span>
          <span>
            <Snowflake size={20} />
            Aria condizionata
          </span>
          <span>
            <CookingPot size={20} />
            Cucina attrezzata
          </span>
          <span>
            <Bath size={20} />
            Bagno privato
          </span>
          <span>
            <Sofa size={20} />
            Divano letto
          </span>
          <span>
            <Sheet size={20} />
            Biancheria inclusa
          </span>
          <span>
            <Smartphone size={20} />
            Check-In da remoto
          </span>
        </div>

        <div className="amenityStrip">
          <img src="/images/kitchen1.jpg"     alt="Mediterranean kitchen apartment in San Nicola Arcella"
 />
          <img src="/images/bathroom1.jpg" alt="Private bathroom apartment Calabria" />
          <img src="/images/detail1.jpg" alt="Interior design detail Al Belvedere apartment" />
          <img src="/images/balcony1.jpg" alt="Balcony apartment in San Nicola Arcella" />
          <img src="/images/bedroom1.jpg" alt="Bedroom apartment near Arcomagno" />
          <img src="/images/sofa1.jpg" alt="Living room apartment Calabria" />
          <img src="/images/kitchen2.jpg" alt="Equipped kitchen holiday apartment Calabria" />
          <img src="/images/bathroom2.jpg" alt="Modern bathroom Al Belvedere" />
          <img src="/images/detail2.jpg" alt="Mediterranean apartment details" />
          <img src="/images/external_view.jpg" alt="Exterior view San Nicola Arcella apartment" />
          <img src="/images/bedroom2.jpg" alt="Bright bedroom Riviera dei Cedri apartment" />
          <img src="/images/sofa2.jpg" alt="Relax area apartment Calabria"
 />
        </div>
        <div className="galleryCta">
          <a href="#apartments" className="placeButton">
            Scopri gli appartamenti
          </a>
        </div>
        <p className="galleryDirectNote">
          Prenota direttamente per ricevere assistenza e condizioni economiche dedicate.
        </p>
      </section>

      <section className="faq">
        <p className="sectionLabel">FAQ</p>
        <h2>Informazioni utili</h2>
        <details>
          <summary>Dove si trovano gli appartamenti?</summary>
          <p>Gli appartamenti si trovano a San Nicola Arcella, in una posizione strategica e tranquilla, a pochi passi dal centro storico e vicinissimi al celebre Belvedere panoramico che affaccia sul Golfo di Policastro.
          <br /><br />È possibile raggiungere facilmente a piedi ristoranti, bar, piazzette e principali attrazioni del borgo, mantenendo però la comodità di arrivare direttamente in auto sotto casa.
          <br />Gli appartamenti si trovano in un residence riservato e silenzioso, al primo e ultimo piano, ideale per rilassarsi dopo una giornata tra mare e Riviera dei Cedri.</p>
        </details>
        <details>
          <summary>È disponibile il posto auto?</summary>
          <p>Sì, gli appartamenti dispongono di posto auto. Uno dentro il cortile del residence ed uno nel parcheggio pubblico riservato ai residenti. In ogni caso, il parcheggio è incluso nel prezzo.
          <br />  <br /> Dal 1 Giugno al 31 Agosto, sarà necessario comunicare la Targa del proprio veicolo per accedere alla ZTL.
          </p>
        </details>
        <details>
          <summary>È disponibile una navetta per il mare?</summary>
          <p>Sì, durante la stagione estiva è disponibile il servizio navetta comunale che collega il centro e le spiagge di San Nicola Arcella tra cui quelle dell&apos;Arcomagno e Torre Crawford.
          <br />Maggiori informazioni, orari e fermate sono disponibili nella scheda ufficiale del servizio.
          </p>
          <a
            href="https://www.autoservizipreite.it/orari/aut_preite_36.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br /><strong>Consulta orari e fermate della navetta QUI</strong>
          </a>
        </details>
        <details>
          <summary>Cosa è fornito con l’appartamento?</summary>

          <p>
            Gli appartamenti sono forniti di tutto l’essenziale per il soggiorno:
            cucina attrezzata con stoviglie, piatti, bicchieri, posate, pentole e padelle,
            oltre a olio, sale e caffè per le prime necessità.
            <br /><br />

            Sono inoltre inclusi asciugamani e biancheria da letto pulita per ogni ospite:
            un set piccolo, medio e grande di asciugamani e lenzuola complete.
          </p>
        </details>
        <details>
          <summary>Come posso prenotare?</summary>
          <p>Puoi richiedere disponibilità via WhatsApp o email. In seguito integreremo il calendario con Booking e Airbnb.</p>
        </details>
        <details>
          <summary>Gli animali sono ammessi?</summary>
          <p>
            Per preservare comfort, pulizia e tranquillità degli ambienti, al momento gli animali non sono ammessi negli appartamenti.  
            Grazie per la comprensione.
          </p>
        </details>
      </section>

      <section id="contact" className="contact">
        <p className="sectionLabel">Book your stay</p>
        <h2>Richiedi disponibilità</h2>
        <p>Scrivici per date, numero di ospiti e appartamento preferito.</p>
        <div className="heroActions">
          <a
            className="btn phoneBtn"
            href="tel:+393485721282"
          >
            +39 348 572 1282
          </a>

          <a
            className="btn primary whatsappBtn"
            href="https://wa.me/393485721282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="btnSvgIcon"
            />

            WhatsApp
          </a>

          <a
            className="btn phoneBtn"
            href="mailto:giovanniesposito99.ge@gmail.com"
          >
            E-mail
          </a>
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

            <a href="tel:+393485721282">
              +39 348 572 1282
            </a>

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
      
      <div className="mobileStickyCta">
        <a href="tel:+393485721282">
          Chiama
        </a>

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

