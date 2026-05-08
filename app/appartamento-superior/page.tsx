import Link from 'next/link';

export default function AppartamentoSuperior() {
  return (
    <main>
      <section className="apartmentPageHero">
        <p className="sectionLabel">Boutique apartment</p>
        <h1>Appartamento Superior</h1>
        <p>
          Pagina in aggiornamento. A breve saranno disponibili foto, dettagli e servizi
          dell’appartamento.
        </p>

        <div className="heroActions">
          <Link href="/" className="btn phoneBtn">
            Torna alla home
          </Link>

          <Link href="/#contact" className="btn primary">
            Richiedi disponibilità
          </Link>
        </div>
      </section>
    </main>
  );
}