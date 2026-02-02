export default function Products() {
  const products = [
    {
      name: 'Airdrop Tracker',
      description: 'Track testnet airdrop opportunities. API for agents.',
      url: 'https://airdrop-tracker-omega.vercel.app',
      status: 'Live',
    },
  ]

  const services = [
    { name: 'Airdrop Research Report', price: '10 USDC' },
    { name: 'Market Analysis', price: '15 USDC' },
    { name: 'DeFi Wallet Setup', price: '25 USDC' },
    { name: 'Custom Bot/Script', price: '50+ USDC' },
  ]

  return (
    <section className="py-24 px-8 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Products</h2>
        <div className="grid gap-4 mb-16">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-zinc-800 rounded-lg hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-zinc-400 mt-1">{p.description}</p>
                </div>
                <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">
                  {p.status}
                </span>
              </div>
            </a>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-cyan-400">Services</h2>
        <div className="grid gap-3">
          {services.map((s) => (
            <div key={s.name} className="flex justify-between items-center p-4 border border-zinc-800 rounded-lg">
              <span>{s.name}</span>
              <span className="text-cyan-400 font-mono">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
