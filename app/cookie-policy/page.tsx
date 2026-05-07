import Link from 'next/link';

export default function CookiePolicyPage() {
    return (
        <>
        <header className="nav scrolled">
            <Link href="/" className="brand">

                <img
                src="/images/logo-dark.png"
                alt="Al Belvedere"
                className="brandLogo"
                />

                <div className="brandText">
                <span className="brandTitle">
                    Al Belvedere di San Nicola Arcella
                </span>
                </div>

            </Link>

            </header>
      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '140px 24px 100px',
          lineHeight: 1.8,
          color: '#223238',
        }}
      >
        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontSize: '13px',
            marginBottom: '18px',
          }}
        >
          Cookie Policy
        </p>
  
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '64px',
            lineHeight: 1,
            marginBottom: '42px',
          }}
        >
          Informativa Cookie
        </h1>
  
        <p>
          La presente Cookie Policy descrive l’utilizzo dei cookie da parte del
          sito web “Al Belvedere di San Nicola Arcella”.
        </p>
  
        <p>
          Questa informativa è resa ai sensi del Regolamento UE 2016/679 (GDPR)
          e della normativa italiana applicabile in materia di protezione dei
          dati personali.
        </p>
  
        <h2 style={sectionTitle}>1. Cosa sono i cookie</h2>
  
        <p>
          I cookie sono piccoli file di testo che i siti web inviano al dispositivo
          dell’utente durante la navigazione. I cookie vengono memorizzati dal
          browser e possono essere riletti dal sito durante visite successive.
        </p>
  
        <p>
          I cookie possono essere tecnici, statistici o di profilazione, a seconda
          della loro funzione.
        </p>
  
        <h2 style={sectionTitle}>2. Cookie utilizzati da questo sito</h2>
  
        <p>
          Questo sito utilizza esclusivamente cookie tecnici necessari al corretto
          funzionamento del sito e alla sicurezza della navigazione.
        </p>
  
        <p>
          Alla data attuale non vengono utilizzati:
        </p>
  
        <ul style={listStyle}>
          <li>cookie di profilazione;</li>
          <li>cookie pubblicitari;</li>
          <li>strumenti di remarketing;</li>
          <li>servizi di analytics o tracciamento statistico;</li>
          <li>cookie di terze parti per finalità marketing.</li>
        </ul>
  
        <h2 style={sectionTitle}>3. Cookie tecnici</h2>
  
        <p>
          I cookie tecnici sono necessari per garantire il corretto funzionamento
          del sito, la sicurezza della navigazione e l’erogazione dei servizi
          richiesti dall’utente.
        </p>
  
        <p>
          Per l’utilizzo di tali cookie non è richiesto il consenso preventivo
          dell’utente.
        </p>
  
        <h2 style={sectionTitle}>4. Hosting e infrastruttura tecnica</h2>
  
        <p>
          Il sito può utilizzare servizi tecnici e infrastrutturali forniti da
          provider di hosting e CDN che, per motivi di sicurezza e prestazioni,
          possono generare cookie tecnici strettamente necessari.
        </p>
  
        <h2 style={sectionTitle}>5. Gestione dei cookie</h2>
  
        <p>
          L’utente può gestire, limitare o disabilitare i cookie direttamente
          tramite le impostazioni del proprio browser.
        </p>
  
        <p>
          La disattivazione dei cookie tecnici potrebbe compromettere il corretto
          funzionamento del sito.
        </p>
  
        <h2 style={sectionTitle}>6. Modifiche alla presente Cookie Policy</h2>
  
        <p>
          La presente Cookie Policy può essere aggiornata o modificata in qualsiasi
          momento, anche in relazione a modifiche normative o all’introduzione di
          nuovi servizi sul sito.
        </p>
  
        <p style={{ marginTop: '54px', opacity: 0.6 }}>
          Ultimo aggiornamento: Maggio 2026
        </p>
      </main>
     </>);
  }
  
  const sectionTitle = {
    fontFamily: 'Georgia, serif',
    fontSize: '34px',
    marginTop: '54px',
    marginBottom: '18px',
  };
  
  const listStyle = {
    paddingLeft: '22px',
    marginTop: '12px',
  };