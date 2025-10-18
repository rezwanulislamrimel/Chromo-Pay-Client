import React from 'react'

const quotes = [
  {name:'Ava R', quote:'Chromo Pay simplified our global payments — fast and dependable.'},
  {name:'Liam P', quote:'Integration took hours, not weeks.'}
]

export default function Testimonials(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h4 className="text-2xl font-bold mb-6 text-center">Trusted by teams worldwide</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((q,i)=>(
            <div key={i} className="p-6 bg-white rounded-xl shadow dark:bg-[#071025]">
              <div className="text-slate-600 dark:text-slate-300">{q.quote}</div>
              <div className="mt-4 font-semibold">{q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
