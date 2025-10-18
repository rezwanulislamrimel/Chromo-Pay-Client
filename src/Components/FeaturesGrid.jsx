import React from 'react'

const items = [
  {title:'Checkout', desc:'Pre-built payment form.'},
  {title:'Elements', desc:'UI components for payments.'},
  {title:'Billing', desc:'Subscription tools.'},
  {title:'Radar', desc:'Fraud detection.'},
  {title:'Terminal', desc:'In-person payments.'},
  {title:'Connect', desc:'Marketplace tools.'},
  {title:'Issuing', desc:'Create and manage cards.'},
  {title:'Atlas', desc:'Start and scale your company.'}
]

export default function FeaturesGrid(){
  return (
    <section className="py-16 bg-slate-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx)=>(
            <div key={idx} className="p-6 bg-white rounded-xl shadow dark:bg-[#071025]">
              <div className="text-lg font-semibold">{it.title}</div>
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{it.desc}</div>
              <div className="mt-4"><button className="text-sm underline">Explore</button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
