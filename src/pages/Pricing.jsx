import React from 'react'

export default function Pricing(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="text-slate-600 mb-8">Clear pricing, no surprises. Start small and scale when you need to.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Pay as you go</h3>
          <p className="text-sm text-slate-500 mt-2">Simple card processing and core tools.</p>
          <div className="mt-4"><button className="btn bg-chromoPrimary text-white">Get started</button></div>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Scale</h3>
          <p className="text-sm text-slate-500 mt-2">Advanced features for growing businesses.</p>
          <div className="mt-4"><button className="btn btn-outline">Contact sales</button></div>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Enterprise</h3>
          <p className="text-sm text-slate-500 mt-2">Custom plans and SLAs.</p>
          <div className="mt-4"><button className="btn btn-ghost">Request demo</button></div>
        </div>
      </div>
    </div>
  )
}
