import Link from 'next/link';

const gallery = [
  '/images/apartment-2.jpg',
  '/images/bedroom2.jpg',
  '/images/kitchen2.jpg',
  '/images/bathroom2.jpg',
  '/images/sofa2.jpg',
  '/images/detail2.jpg',
];

export default function AppartamentoSuperior() {
  return (
    <main>
      <header className="nav scrolled">
        <Link href="/" className="brand">
          <img
            src="/images/logo-dark.png"
            alt="Logo Al Belvedere di San Nicola Arcella"
            className="brandLogo"
          />
          <div className="brandText">
            <span className="brandTitle">Al Belvedere di San Nicola Arcella</span>
          </div>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/#apartments">Appartamenti</Link>
          <Link href="/#contact">Contatti</Link>
        </nav>
      </header>

      <section className="apartmentPageHero">
        <p className="sectionLabel">Boutique apartment</p>
        <h1>Appartamento Superior</h1>
        <p>
          Un appartamento accogliente e appena rinnovato, perfetto per soggiorni comodi
          nel cuore di San Nicola Arcella.
        </p>

        <div className="heroActions">
          <a href="https://wa.me/393485721282" className="btn primary whatsappBtn">
            WhatsApp
          </a>
          <a href="tel:+393485721282" className="btn phoneBtn">
            +39 348 572 1282
          </a>
        </div>
      </section>

      <section className="apartmentPageGallery">
        {gallery.map((image) => (
          <img key={image} src={image} alt="Appartamento Superior a San Nicola Arcella" />
        ))}
      </section>

      <section className="apartmentPageContent">
        <div>
          <p className="sectionLabel">Details</p>
          <h2>Semplice, curato, funzionale.</h2>
        </div>

        <div className="apartmentPageText">
          <p>
            L’appartamento è ideale per chi cerca una base tranquilla e centrale per vivere
            San Nicola Arcella, il borgo, il Belvedere e la Riviera dei Cedri.
          </p>

          <ul>
            <li>Camera da letto</li>
            <li>Divano letto</li>
            <li>Cucina attrezzata</li>
            <li>Bagno privato</li>
            <li>Posto auto</li>
            <li>Aria condizionata</li>
            <li>Biancheria inclusa</li>
            <li>Check-in da remoto</li>
          </ul>

          <Link href="/#contact" className="placeButton">
            Richiedi disponibilità
          </Link>
        </div>
      </section>
    </main>
  );
}