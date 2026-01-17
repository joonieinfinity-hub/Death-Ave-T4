
import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { siteData } = useApp();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-red-800 uppercase tracking-widest text-xs font-bold mb-4 block">Inquiries</span>
            <h1 className="text-6xl font-serif mb-8">Reach Out</h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12">
              Interested in a private tasting? Have questions about our current collection? Our team is at your disposal.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                   <Send size={18} className="text-red-900" />
                </div>
                <div>
                   <h4 className="font-serif text-xl mb-1">Email Us</h4>
                   <p className="text-neutral-500 text-sm">General: {siteData.contact.email}</p>
                   <p className="text-neutral-500 text-sm">Tastings: events@deathavewines.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 p-10 border border-neutral-800 industrial-texture">
            {submitted ? (
              <div className="h-full flex flex-center flex-col justify-center items-center text-center space-y-4">
                <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-white text-2xl">✓</div>
                <h3 className="text-2xl font-serif">Message Received</h3>
                <p className="text-neutral-500">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500">Name</label>
                    <input 
                      required
                      className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm focus:border-red-900 outline-none" 
                      onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500">Email</label>
                    <input 
                      required
                      type="email"
                      className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm focus:border-red-900 outline-none" 
                      onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500">Phone (Optional)</label>
                  <input 
                    className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm focus:border-red-900 outline-none" 
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500">Message</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm focus:border-red-900 outline-none" 
                    onChange={(e) => setForm({...form, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="w-full bg-neutral-100 text-black py-4 uppercase text-xs font-bold tracking-widest hover:bg-red-900 hover:text-white transition-all">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
