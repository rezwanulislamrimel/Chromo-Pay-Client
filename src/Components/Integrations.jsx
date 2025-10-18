import React from 'react'

export default function Integrations(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Integrations & API</h4>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Flexible SDKs and a small API surface to get you started fast.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl">
            <div className="text-sm text-slate-500">Server sample</div>
            <pre className="mt-3 rounded p-3 bg-slate-900 text-white text-sm overflow-auto">
{`fetch('/api/charge', {
  method: 'POST',
  body: JSON.stringify({ amount: 1000, currency: 'usd' })
})`}
            </pre>
          </div>

          <div className="p-6 border rounded-xl">
            <div className="text-sm text-slate-500">Client sample</div>
            <pre className="mt-3 rounded p-3 bg-slate-900 text-white text-sm overflow-auto">
{`const res = await chromo.pay({ amount: 1000 })`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
