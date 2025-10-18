import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Contact sales</h1>
      <p className="text-slate-600 mb-6">Tell us about your business and we’ll help you get started.</p>

      <form className="grid gap-4">
        <input className="input input-bordered w-full" placeholder="Company name" />
        <input className="input input-bordered w-full" placeholder="Work email" />
        <select className="select select-bordered w-full">
          <option>Startup</option>
          <option>SMB</option>
          <option>Enterprise</option>
        </select>
        <textarea className="textarea textarea-bordered" placeholder="Brief message" />
        <div><button className="btn btn-primary bg-chromoPrimary border-none text-white">Send</button></div>
      </form>
    </div>
  )
}
