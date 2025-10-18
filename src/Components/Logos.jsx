import React from 'react'

export default function Logos(){
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6">
        {new Array(8).fill(0).map((_,i)=>(
          <div key={i} className="w-28 h-8 bg-slate-100 rounded dark:bg-slate-800" />
        ))}
      </div>
    </section>
  )
}
