
import React from 'react';
import { useApp } from '../AppContext';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const Destinations: React.FC = () => {
  const { siteData } = useApp();

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449156001935-d28731b95311?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center grayscale opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-serif mb-4">The Shop</h1>
          <p className="text-red-800 uppercase tracking-[0.5em] text-sm">Hudson Yards, NYC</p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
           <div className="space-y-12">
             <div>
               <h2 className="text-4xl font-serif mb-8">Visit Us</h2>
               <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                 Located at the intersection of historic Chelsea and the modern Hudson Yards, our shop is an oasis for those seeking intentionality in their glass.
               </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="p-8 bg-neutral-900/50 border border-neutral-800">
                 <MapPin className="text-red-900 mb-4" />
                 <h4 className="font-serif text-xl mb-2">Location</h4>
                 <p className="text-neutral-500 text-sm">{siteData.contact.address}</p>
               </div>
               <div className="p-8 bg-neutral-900/50 border border-neutral-800">
                 <Clock className="text-red-900 mb-4" />
                 <h4 className="font-serif text-xl mb-2">Hours</h4>
                 <div className="space-y-1">
                   {Object.entries(siteData.contact.hours).map(([day, hours]) => (
                     <div key={day} className="flex justify-between text-xs text-neutral-500 uppercase tracking-tighter">
                       <span>{day}</span>
                       <span>{hours}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>

           <div className="h-[500px] w-full bg-neutral-900 relative group overflow-hidden">
             {/* Placeholder for Map */}
             <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center grayscale">
               <div className="text-center p-8">
                 <MapPin size={48} className="mx-auto mb-4 text-red-900" />
                 <p className="text-neutral-400 uppercase tracking-widest text-xs">Interactive Map Placeholder</p>
                 <p className="text-neutral-600 mt-2 text-[10px]">{siteData.contact.address}</p>
               </div>
             </div>
             {/* Overlay */}
             <div className="absolute inset-0 border-[20px] border-[#0a0a0a] pointer-events-none"></div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950 border-y border-neutral-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl font-serif mb-8">Ready to explore?</h2>
           <p className="text-neutral-500 mb-12">Whether you're looking for a special gift or a new favorite everyday red, our sommelier team is ready to guide you.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-12">
             <div className="flex flex-col items-center">
                <Phone className="text-red-900 mb-4" />
                <span className="text-sm font-bold tracking-widest">{siteData.contact.phone}</span>
             </div>
             <div className="flex flex-col items-center">
                <Mail className="text-red-900 mb-4" />
                <span className="text-sm font-bold tracking-widest">{siteData.contact.email}</span>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
