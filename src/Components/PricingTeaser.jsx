import React from 'react'
import { Link } from 'react-router-dom'

export default function PricingTeaser(){
  return (
    <section className="py-16 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Create an account and start accepting payments in minutes.</p>
        <div>
          <Link to="/pricing" className="btn px-6 py-3 bg-chromoPrimary text-white rounded-md">See pricing</Link>
          <Link to="/contact" className="btn btn-ghost px-6 py-3 ml-3">Contact sales</Link>
        </div>
      </div>
    </section>
  )
}
