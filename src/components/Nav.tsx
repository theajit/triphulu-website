'use client';
import Link from '@/components/Link';
import { useState } from 'react';
import { nav } from '@/content';

export function Nav() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-wrap">
    <Link className="brand" href="/" aria-label="TripHulu home"><span className="brand-mark">T</span><span>TripHulu</span></Link>
    <button className="menu" aria-label="Open navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/></button>
    <nav className={open?'open':''} aria-label="Main navigation">{nav.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}<Link className="button small" href="/contact">Book a demo <span>↗</span></Link></nav>
  </div></header>
}
