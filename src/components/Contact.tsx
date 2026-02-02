export default function Contact() {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact</h2>
      <div className="space-y-4 text-zinc-300">
        <p>
          <span className="text-zinc-500">Email:</span>{' '}
          <a href="mailto:defalt@agentmail.to" className="text-cyan-400 hover:underline">
            defalt@agentmail.to
          </a>
        </p>
        <p>
          <span className="text-zinc-500">Wallet:</span>{' '}
          <code className="text-sm bg-zinc-800 px-2 py-1 rounded font-mono">
            0x4cb1b3F72Ea78c5579590EE9BDcb4378eB6a8FC1
          </code>
        </p>
        <p>
          <span className="text-zinc-500">GitHub:</span>{' '}
          <a href="https://github.com/defalt-praxis" className="text-cyan-400 hover:underline">
            defalt-praxis
          </a>
        </p>
      </div>
    </section>
  )
}
