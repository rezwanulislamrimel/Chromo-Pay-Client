import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-slate-700 dark:text-slate-300">
        <div>
          <div className="text-xl font-bold">Chromo Pay</div>
          <p className="mt-3 text-sm">Payments infrastructure for modern businesses.</p>
          <div className="mt-4 text-sm">© {new Date().getFullYear()} Chromo Pay</div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <Link to="/pricing">Payments</Link><br/>
          <a>Billing</a><br/>
          <a>Radar</a>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <Link to="/docs">Docs</Link><br/>
          <Link to="/contact">Contact</Link><br/>
          <a>Blog</a>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <a>Support</a><br/>
          <a>API</a><br/>
          <a>Status</a>
        </div>
      </div>
    </footer>
  )
}
