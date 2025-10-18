import React from 'react'

export default function Dashboard(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-bold mb-6">Dashboard (Demo)</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="chromo-card p-6">
          <div className="text-sm text-slate-400">Net volume</div>
          <div className="text-2xl font-semibold">US$2,512,300</div>
        </div>
        <div className="chromo-card p-6">
          <div className="text-sm text-slate-400">Available</div>
          <div className="text-2xl font-semibold">US$643,200</div>
        </div>
        <div className="chromo-card p-6">
          <div className="text-sm text-slate-400">Payouts</div>
          <div className="text-2xl font-semibold">US$112,300</div>
        </div>
      </div>
    </div>
  )
}
