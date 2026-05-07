import './globals.css';

const apartments = [
  {
    name: 'Appartamento Belvedere I',
    text: 'Luminoso, mediterraneo, ideale per vivere San Nicola Arcella tra mare, relax e comfort.',
    features: ['Camera da letto', 'Divano letto', 'Cucina attrezzata', 'Bagno privato', 'Posto auto'],
  },
  {
    name: 'Appartamento Belvedere II',
    text: 'Adiacente e appena rinnovato, perfetto per famiglie, coppie o soggiorni con amici.',
    features: ['Stesso piano', 'Aria condizionata', 'Cucina', 'Bagno privato', 'Comfort moderni'],
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">Al Belvedere</div>
        <nav>
          <a href="#apartments">Appartamenti</a>
          <a href="#place">San Nicola</a>
          <a href="#contact">Contatti</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">San Nicola Arcella · Riviera dei Cedri</p>
          <h1>Al Belvedere di San Nicola Arcella</h1>
          <p className="subtitle">
            Due appartamenti mediterranei, luminosi e accoglienti, per vivere la Calabria tra mare,
            panorama e quiete.
          </p>
          <div className="heroActions">
            <a href="#apartments" className="btn primary">Scopri gli appartamenti</a>
            <a href="#contact" className="btn secondary">Richiedi disponibilità</a>
          </div>
        </div>
      </section>

      <section className="intro">
        <p className="sectionLabel">Boutique apartments</p>
        <h2>Una casa al mare pensata per rallentare.</h2>
        <p>
          Al Belvedere nasce per chi cerca un soggiorno semplice ma curato: luce naturale, dettagli
          mediterranei, posizione comoda e il fascino autentico di San Nicola Arcella.
        </p>
      </section>

      <section id="apartments" className="apartments">
        <div className="sectionHead">
          <p className="sectionLabel">Stay with us</p>
          <h2>I nostri appartamenti</h2>
        </div>

        <div className="cards">
          {apartments.map((apt) => (
            <article className="card" key={apt.name}>
              <div className="cardImage" />
              <div className="cardBody">
                <h3>{apt.name}</h3>
                <p>{apt.text}</p>
                <ul>
                  {apt.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="#contact">Richiedi disponibilità</a>
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
        <div className="placeImage" />
        <div className="placeText">
          <p className="sectionLabel">Discover</p>
          <h2>San Nicola Arcella</h2>
          <p>
            Uno dei luoghi più suggestivi della costa calabrese, sospeso tra mare, roccia e panorami
            aperti sul Tirreno. Una base ideale per scoprire Arcomagno, Praia a Mare, Scalea e la
            Riviera dei Cedri.
          </p>
          <a href="#contact" className="textLink">Organizza il tuo soggiorno</a>
        </div>
      </section>

      <section className="amenities">
        <p className="sectionLabel">Comfort</p>
        <h2>Servizi essenziali, atmosfera curata.</h2>
        <div className="amenityGrid">
          <span>Cucina attrezzata</span>
          <span>Posto auto</span>
          <span>Aria condizionata</span>
          <span>Bagno privato</span>
          <span>Divano letto</span>
          <span>Posizione strategica</span>
        </div>
      </section>

      <section className="faq">
        <p className="sectionLabel">FAQ</p>
        <h2>Informazioni utili</h2>
        <details>
          <summary>Dove si trovano gli appartamenti?</summary>
          <p>A San Nicola Arcella, in posizione comoda per raggiungere mare, borgo e principali attrazioni.</p>
        </details>
        <details>
          <summary>È disponibile il posto auto?</summary>
          <p>Sì, gli appartamenti dispongono di posto auto.</p>
        </details>
        <details>
          <summary>Come posso prenotare?</summary>
          <p>Puoi richiedere disponibilità via WhatsApp o email. In seguito integreremo il calendario con Booking e Airbnb.</p>
        </details>
      </section>

      <section id="contact" className="contact">
        <p className="sectionLabel">Book your stay</p>
        <h2>Richiedi disponibilità</h2>
        <p>Scrivici per date, numero di ospiti e appartamento preferito.</p>
        <div className="heroActions">
          <a className="btn primary" href="https://wa.me/39TUONUMERO">WhatsApp</a>
          <a className="btn secondary" href="mailto:tuaemail@example.com">Email</a>
        </div>
      </section>

      <footer>
        <p>Al Belvedere di San Nicola Arcella · Boutique apartments in Calabria</p>
      </footer>
    </main>
  );
}