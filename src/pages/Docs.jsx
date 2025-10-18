import React from 'react'
import { Link } from 'react-router-dom'

export default function Docs(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Developers</h1>
      <p className="text-slate-600 mb-6">Documentation, SDKs, and guides to help your team integrate Chromo Pay.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="#" className="p-6 border rounded-xl hover:shadow">API Reference</Link>
        <Link to="#" className="p-6 border rounded-xl hover:shadow">Quickstarts & SDKs</Link>
      </div>
    </div>
  )
}
