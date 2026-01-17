
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../AppContext';
import { Menu, X, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  if (isAdmin) return null;

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-neutral-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 group">
            <span className="text-2xl font-serif tracking-widest uppercase transition-colors group-hover:text-red-800">
              Death <span className="text-red-800 group-hover:text-neutral-100">Ave</span> Wines
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs uppercase tracking-widest transition-colors hover:text-red-800 ${
                  location.pathname === item.path ? 'text-red-800 font-bold' : 'text-neutral-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/admin" className="px-4 py-2 border border-neutral-700 text-[10px] uppercase tracking-widest hover:bg-neutral-100 hover:text-black transition-all">
              Staff Only
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-neutral-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-[#0a0a0a] border-b border-neutral-800 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-serif tracking-wide hover:bg-neutral-900"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-red-800 font-bold">Admin Portal</Link>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  const { siteData } = useApp();
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-[#0a0a0a] border-t border-neutral-900 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-serif tracking-widest uppercase">
            Death Ave Wines
          </h3>
          <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
            Nurturing a healthier relationship with spirits through low-intervention, consciously crafted wines in New York City.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-500 hover:text-red-800 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-neutral-500 hover:text-red-800 transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-neutral-400">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors">Tastings</Link></li>
            <li><Link to="/destinations" className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors">Find Us</Link></li>
            <li><Link to="/blog" className="text-sm text-neutral-500 hover:text-neutral-100 transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-neutral-400">Visit Us</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 text-sm text-neutral-500">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>{siteData.contact.address}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-neutral-500">
              <Phone size={16} className="flex-shrink-0" />
              <span>{siteData.contact.phone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-neutral-400">Newsletter</h4>
          <p className="text-sm text-neutral-500">Join our mailing list for private tasting invites.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Email address"
              className="bg-neutral-900 border border-neutral-800 px-4 py-2 text-sm w-full focus:outline-none focus:border-red-800"
            />
            <button className="bg-neutral-100 text-black px-4 py-2 text-xs uppercase font-bold tracking-tighter hover:bg-red-800 hover:text-white transition-all">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 uppercase tracking-widest">
        <p>&copy; 2024 Death Ave Wines. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
