import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import { toggleTheme } from '../utils/theme'
import { Sun, Moon } from 'lucide-react'

export default function Header(){
//   const location = useLocation()
  const [dark, setDark] = useState(() => {
    try {
      const s = localStorage.getItem('chromo-theme')
      if (s) return s === 'dark'
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch { return false }
  })

  useEffect(() => {
    toggleTheme(dark ? 'dark' : 'light')
  }, [dark])

  const nav = [
    {name:'Home', to:'/'},
    {name:'Docs', to:'/docs'},
    {name:'Pricing', to:'/pricing'},
    {name:'Contact', to:'/contact'}
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 dark:bg-[#071025]/70 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md" style={{background:'linear-gradient(90deg,#6c5ce7,#00d4ff)'}} />
          <div className="font-extrabold">Chromo<span className="font-bold">Pay</span></div>
        </Link>

        <nav className="hidden lg:flex gap-6 text-sm">
          {nav.map(i => (
            <NavLink key={i.to} to={i.to} className={({isActive})=>isActive ? 'underline' : ''}>
              {i.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={()=>setDark(d=>!d)}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link to="/dashboard" className="btn btn-sm">Dashboard</Link>
          <Link to="/contact" className="btn btn-sm bg-chromoPrimary text-white">Get started</Link>
        </div>
      </div>
    </header>
  )
}
