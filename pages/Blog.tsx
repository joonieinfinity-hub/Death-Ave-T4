
import React from 'react';
import { useApp } from '../AppContext';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { siteData } = useApp();

  return (
    <div className="pt-20">
      <section className="py-24 bg-neutral-950 text-center">
        <h1 className="text-6xl font-serif mb-4">The Journal</h1>
        <p className="text-neutral-500 uppercase tracking-[0.5em] text-sm">Updates from the cellar</p>
      </section>

      <section className="py-24 bg-[#0a0a0a] px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {siteData.posts.filter(p => p.published).map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-video mb-6 overflow-hidden bg-neutral-900 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-widest text-neutral-400 flex items-center">
                   <Calendar size={12} className="mr-2" /> {post.date}
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-red-800 transition-colors">{post.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold border-b border-neutral-700 pb-1 hover:border-red-900 transition-colors">
                Read Article <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
