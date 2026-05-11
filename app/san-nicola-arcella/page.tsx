'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Waves,
  Mountain,
  Utensils,
  Sun,
  Camera,
  MapPinned,
} from 'lucide-react';

export default function SanNicolaArcellaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileApartmentsOpen, setMobileApartmentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

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
        <Link href="/" className="brand">
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
        </Link>

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

          <Link href="/san-nicola-arcella">San Nicola Arcella</Link>
          <Link href="/#reviews">Recensioni</Link>
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

        <div className="mobileApartmentsMenu">
          <button
            className="mobileApartmentsTrigger"
            onClick={() => setMobileApartmentsOpen(!mobileApartmentsOpen)}
          >
            Appartamenti
          </button>

          <div className={`mobileApartmentsLinks ${mobileApartmentsOpen ? 'open' : ''}`}>
            <Link
              href="/appartamento-superior-con-balcone"
              onClick={() => setMenuOpen(false)}
            >
              Superior con balcone
            </Link>

            <Link
              href="/appartamento-superior"
              onClick={() => setMenuOpen(false)}
            >
              Superior
            </Link>
          </div>
        </div>

        <Link href="/san-nicola-arcella" onClick={() => setMenuOpen(false)}>
          San Nicola Arcella
        </Link>

        <Link href="/#reviews" onClick={() => setMenuOpen(false)}>
          Recensioni
        </Link>

        <Link href="/#contact" onClick={() => setMenuOpen(false)}>
          Contatti
        </Link>

        <Link href="/#faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>
      </div>

      <section className="placePageHero">
        <div
          className="placePageHeroImage"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23,55,70,0.38), rgba(23,55,70,0.38)), url('/images/san-nicola.jpg')",
          }}
        />

        <div className="placePageHeroContent">
          <p className="sectionLabel">Riviera dei Cedri</p>

          <h1>San Nicola Arcella</h1>

          <p>
            Uno dei borghi più suggestivi della Calabria tirrenica,
            sospeso tra scogliere, mare cristallino e tramonti sul Golfo di Policastro.
          </p>

          <div className="heroActions">
            <Link href="/#apartments" className="btn primary">
              Scopri gli appartamenti
            </Link>

            <Link href="/#contact" className="btn secondary">
              Richiedi disponibilità
            </Link>
          </div>
        </div>
      </section>

      <section className="placeIntro">
        <p className="sectionLabel">Discover Calabria</p>

        <h2>Tra mare, roccia e panorami mozzafiato.</h2>

        <p>
          San Nicola Arcella è uno dei luoghi simbolo della Riviera dei Cedri,
          celebre per il suo centro storico panoramico, il Belvedere,
          l’Arcomagno e le spiagge incastonate tra le scogliere.
        </p>

        <p>
          Situato tra Praia a Mare e Scalea, è una meta ideale per chi cerca
          mare, relax, escursioni, tramonti e autentica atmosfera mediterranea.
        </p>
      </section>

      <section className="placeHighlights">
        <div className="highlightCard">
          <Waves size={28} />
          <h3>Arcomagno</h3>
          <p>
            La spiaggia simbolo di San Nicola Arcella, raggiungibile via mare
            o tramite il sentiero panoramico scavato nella roccia.
          </p>
        </div>

        <div className="highlightCard">
          <Mountain size={28} />
          <h3>Belvedere</h3>
          <p>
            Uno dei punti panoramici più belli della Calabria, con vista aperta
            sul Tirreno e sull’Isola di Dino.
          </p>
        </div>

        <div className="highlightCard">
          <Sun size={28} />
          <h3>Spiagge e mare</h3>
          <p>
            Acqua cristallina, calette rocciose, tramonti sul mare e paesaggi
            naturali unici lungo tutta la costa.
          </p>
        </div>
      </section>

      <section className="placeEditorialSection">
        <div className="placeTextBlock">
          <p className="sectionLabel">Cosa vedere</p>

          <h2>Il centro storico di San Nicola Arcella</h2>

          <p>
            Vicoli, piazzette, scorci sul mare e atmosfere autentiche:
            il centro storico conserva ancora l’anima del borgo mediterraneo.
          </p>

          <p>
            Passeggiando tra le stradine si incontrano ristoranti, piccoli locali,
            terrazze panoramiche e punti fotografici affacciati sul Golfo di Policastro.
          </p>
        </div>

        <div
          className="placeSideImage"
          style={{
            backgroundImage: "url('/images/centro storico.jpg')",
          }}
        />
      </section>

      <section className="placeEditorialSection reverse">
        <div
          className="placeSideImage"
          style={{
            backgroundImage: "url('/images/arcomagno1.jpg')",
          }}
        />

        <div className="placeTextBlock">
          <p className="sectionLabel">Natura</p>

          <h2>L’Arcomagno</h2>

          <p>
            Considerato uno dei luoghi più spettacolari della Calabria,
            l’Arcomagno è una piccola baia naturale dominata da un enorme arco roccioso.
          </p>

          <p>
            Il mare turchese, la spiaggia nascosta e la luce del tramonto
            rendono questo luogo una delle esperienze più iconiche della Riviera dei Cedri.
          </p>
        </div>
      </section>

      <section className="placeInfo">
        <p className="sectionLabel">Informazioni utili</p>

        <h2>Organizzare il soggiorno</h2>

        <div className="infoGrid">
          <div>
            <MapPin size={22} />
            <h3>Dove si trova</h3>
            <p>
              San Nicola Arcella si trova sulla costa tirrenica della Calabria,
              tra Praia a Mare e Scalea.
            </p>
          </div>

          <div>
            <Camera size={22} />
            <h3>Periodo migliore</h3>
            <p>
              Da maggio a settembre per il mare. Giugno e settembre offrono
              clima ideale e meno affollamento.
            </p>
          </div>

          <div>
            <Utensils size={22} />
            <h3>Cucina locale</h3>
            <p>
              Pesce, cucina mediterranea, cedro calabrese, prodotti tipici
              e ristoranti vista mare.
            </p>
          </div>
        </div>
      </section>

      <section className="placeFaq">
        <p className="sectionLabel">FAQ</p>

        <h2>Domande frequenti su San Nicola Arcella</h2>

        <details>
          <summary>Come si raggiunge l’Arcomagno?</summary>
          <p>
            L’Arcomagno può essere raggiunto a piedi tramite sentiero panoramico
            oppure via mare tramite escursioni in barca o pedalò.
          </p>
        </details>

        <details>
          <summary>San Nicola Arcella è adatta alle famiglie?</summary>
          <p>
            Sì, il borgo e le spiagge della zona sono ideali sia per coppie
            sia per famiglie in cerca di relax e mare.
          </p>
        </details>

        <details>
          <summary>Quanto dista da Praia a Mare e Scalea?</summary>
          <p>
            San Nicola Arcella dista pochi minuti in auto sia da Praia a Mare
            sia da Scalea, rendendo semplice visitare tutta la Riviera dei Cedri.
          </p>
        </details>
      </section>

      <section className="placeCta">
        <p className="sectionLabel">Stay in San Nicola Arcella</p>

        <h2>Vivi la Riviera dei Cedri</h2>

        <p>
          Scopri gli appartamenti Al Belvedere di San Nicola Arcella
          e organizza il tuo soggiorno tra mare, relax e panorami unici.
        </p>

        <div className="heroActions">
          <Link href="/#apartments" className="btn primary">
            Scopri gli appartamenti
          </Link>

          <Link href="/#contact" className="btn secondary">
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

      <div className={`mobileStickyCta ${scrolled ? 'visible' : ''}`}>
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