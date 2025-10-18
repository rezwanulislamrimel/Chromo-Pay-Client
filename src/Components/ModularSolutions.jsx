import React from 'react'

const data = [
  {title:'Payments', desc:'Accept cards and wallets worldwide.'},
  {title:'Billing', desc:'Subscriptions and invoicing.'},
  {title:'Connect', desc:'Marketplace payouts & partners.'},
  {title:'Radar', desc:'Built-in fraud protection.'}
]

export default function ModularSolutions(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">A modular platform for every business</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">Pick the products you need and integrate quickly.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((c,i)=>(
            <div key={i} className="p-6 border rounded-xl hover:shadow transition">
              <div className="font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{c.desc}</p>
              <div className="mt-4"><button className="text-sm underline">Learn more</button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
