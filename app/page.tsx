export default function Home() {
  return (
    <main className="bg-[#f5f1e8] text-white">
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-light mb-6">
            Al Belvedere di SNA
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-[#f5f1e8]">
            Un rifugio naturale tra querce, silenzio e luce mediterranea,
            nel cuore autentico della Calabria.
          </p>

          <button className="mt-10 border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
            Scopri la Tenuta
          </button>
        </div>
      </section>
    </main>
  );
}
