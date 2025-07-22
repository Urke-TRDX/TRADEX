import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a23] to-[#020202] text-white font-sans">
      <Head>
        <title>TRADEX</title>
        <meta name="description" content="TRADEX - The Future of Decentralized Trading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-blue-400 drop-shadow-lg">
          TRADEX
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-6">
          Powering the next generation of crypto traders. Decentralized, fast, and future-ready.
        </p>
        <a
          href="#"
          className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg transition"
        >
          Launch App
        </a>
      </main>
    </div>
  )
}