export default function Home(){
  return(
    <main className="min-h-screen bg-white text-grey-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 text-center">
        <div className="mb-6 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
          🌟AI-Powered Interior Design
        </div>
        <h1 className="max-w-4x1 text-5x1 font-bold tracking-tight sm: text-6x1">
        </h1>
        <p className="mt-6 maax-w-2x1 test-lg text-gray-600">
          Upload your room, tell us your budget and style and let
          AI help you transform your space
        </p>
        <div className="mt-8 flex flex-col gap-4 sm: flex-row">
          <button className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover: bg-gray-800">
            Upload Your Room
          </button>
          <button className="rounded-xl border border-grtay-300 px-6 py-3 font-semibold transition hover:bg-gray-50">
            Explore Design
          </button>
        </div>
      </section>
    </main>
  );
}