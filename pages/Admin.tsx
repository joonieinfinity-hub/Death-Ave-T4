
import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { AdminTab, SitePost, WineProduct } from '../types';
import { LayoutDashboard, FileText, Wine, Search, Users, Settings, Save, RotateCcw, Plus, Trash2, Edit2 } from 'lucide-react';

const Admin: React.FC = () => {
  const { siteData, updateSiteData, resetToDefault } = useApp();
  const [activeTab, setActiveTab] = useState<AdminTab>(AdminTab.OVERVIEW);

  const handleUpdateHero = (field: string, value: string) => {
    updateSiteData({ hero: { ...siteData.hero, [field]: value } });
  };

  const handleUpdateContact = (field: string, value: any) => {
    updateSiteData({ contact: { ...siteData.contact, [field]: value } });
  };

  const addPost = () => {
    const newPost: SitePost = {
      id: Date.now().toString(),
      slug: 'new-post-' + Date.now(),
      title: 'New Article',
      excerpt: 'Short description...',
      content: 'Start writing here...',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2070',
      date: new Date().toISOString().split('T')[0],
      published: false
    };
    updateSiteData({ posts: [...siteData.posts, newPost] });
  };

  const addProduct = () => {
    const newProduct: WineProduct = {
      id: 'p-' + Date.now(),
      name: 'New Wine',
      vintage: '2024',
      type: 'Red',
      origin: 'Region, USA',
      price: 0,
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800',
      description: 'A brief note...',
      isFeatured: false
    };
    updateSiteData({ products: [...siteData.products, newProduct] });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case AdminTab.OVERVIEW:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-900 p-6 border border-neutral-800">
                  <p className="text-xs uppercase text-neutral-500 mb-2">Total Posts</p>
                  <p className="text-3xl font-serif">{siteData.posts.length}</p>
                </div>
                <div className="bg-neutral-900 p-6 border border-neutral-800">
                  <p className="text-xs uppercase text-neutral-500 mb-2">Wine Collection</p>
                  <p className="text-3xl font-serif">{siteData.products.length}</p>
                </div>
                <div className="bg-neutral-900 p-6 border border-neutral-800">
                  <p className="text-xs uppercase text-neutral-500 mb-2">Subscribers</p>
                  <p className="text-3xl font-serif">{siteData.subscribers.length}</p>
                </div>
             </div>
             
             <div className="bg-neutral-900 p-8 border border-neutral-800">
               <h3 className="text-xl font-serif mb-6">Quick Actions</h3>
               <div className="flex gap-4">
                 <button onClick={addPost} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded text-xs uppercase font-bold transition-all">New Post</button>
                 <button onClick={addProduct} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded text-xs uppercase font-bold transition-all">New Wine</button>
                 <button onClick={resetToDefault} className="bg-red-900/20 text-red-500 hover:bg-red-900/40 px-4 py-2 rounded text-xs uppercase font-bold transition-all">Reset Site Content</button>
               </div>
             </div>
          </div>
        );

      case AdminTab.PAGES:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-neutral-900 p-8 border border-neutral-800 space-y-6">
              <h3 className="text-xl font-serif">Home Hero Content</h3>
              <div className="grid gap-4">
                 <div className="space-y-1">
                   <label className="text-[10px] uppercase text-neutral-500">Hero Title</label>
                   <input 
                    className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded" 
                    value={siteData.hero.title}
                    onChange={(e) => handleUpdateHero('title', e.target.value)}
                   />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] uppercase text-neutral-500">Hero Subtitle</label>
                   <textarea 
                    className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded h-24" 
                    value={siteData.hero.subtitle}
                    onChange={(e) => handleUpdateHero('subtitle', e.target.value)}
                   />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] uppercase text-neutral-500">Hero Image URL</label>
                   <input 
                    className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded" 
                    value={siteData.hero.image}
                    onChange={(e) => handleUpdateHero('image', e.target.value)}
                   />
                 </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 border border-neutral-800 space-y-6">
              <h3 className="text-xl font-serif">Philosophy Section</h3>
              <div className="space-y-4">
                <input 
                  className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded" 
                  value={siteData.philosophy.title}
                  onChange={(e) => updateSiteData({ philosophy: { ...siteData.philosophy, title: e.target.value } })}
                />
                <textarea 
                  className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded h-32" 
                  value={siteData.philosophy.content}
                  onChange={(e) => updateSiteData({ philosophy: { ...siteData.philosophy, content: e.target.value } })}
                />
              </div>
            </div>
          </div>
        );

      case AdminTab.PRODUCTS:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-serif">Inventory Manager</h3>
              <button onClick={addProduct} className="bg-red-900 text-white px-4 py-2 text-xs uppercase font-bold rounded flex items-center">
                <Plus size={16} className="mr-2" /> Add Product
              </button>
            </div>
            <div className="grid gap-4">
              {siteData.products.map((p, idx) => (
                <div key={p.id} className="bg-neutral-900 p-4 border border-neutral-800 flex items-center gap-4">
                   <img src={p.image} className="w-16 h-16 object-cover bg-black" />
                   <div className="flex-grow">
                      <input 
                        className="bg-transparent font-serif text-lg w-full outline-none focus:border-b border-red-900" 
                        value={p.name}
                        onChange={(e) => {
                          const updated = [...siteData.products];
                          updated[idx].name = e.target.value;
                          updateSiteData({ products: updated });
                        }}
                      />
                      <p className="text-[10px] uppercase text-neutral-500">{p.origin} • {p.vintage}</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="font-serif text-xl">${p.price}</span>
                      <button className="text-neutral-500 hover:text-red-500">
                        <Trash2 size={18} onClick={() => {
                          updateSiteData({ products: siteData.products.filter(item => item.id !== p.id) });
                        }} />
                      </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );

      case AdminTab.BLOG:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-serif">Article Management</h3>
              <button onClick={addPost} className="bg-neutral-100 text-black px-4 py-2 text-xs uppercase font-bold rounded flex items-center">
                <Plus size={16} className="mr-2" /> New Post
              </button>
            </div>
            <div className="grid gap-6">
               {siteData.posts.map((post, idx) => (
                 <div key={post.id} className="bg-neutral-900 p-6 border border-neutral-800 space-y-4">
                    <div className="flex justify-between items-start">
                      <input 
                        className="bg-transparent text-xl font-serif w-full focus:outline-none"
                        value={post.title}
                        onChange={(e) => {
                          const updated = [...siteData.posts];
                          updated[idx].title = e.target.value;
                          updateSiteData({ posts: updated });
                        }}
                      />
                      <div className="flex gap-2">
                         <button className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${post.published ? 'bg-green-900/20 text-green-500' : 'bg-yellow-900/20 text-yellow-500'}`}
                           onClick={() => {
                             const updated = [...siteData.posts];
                             updated[idx].published = !updated[idx].published;
                             updateSiteData({ posts: updated });
                           }}
                         >
                           {post.published ? 'Published' : 'Draft'}
                         </button>
                         <button className="text-neutral-500 hover:text-red-500" onClick={() => {
                             updateSiteData({ posts: siteData.posts.filter(p => p.id !== post.id) });
                         }}>
                           <Trash2 size={18} />
                         </button>
                      </div>
                    </div>
                    <textarea 
                      className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded h-24"
                      value={post.excerpt}
                      onChange={(e) => {
                        const updated = [...siteData.posts];
                        updated[idx].excerpt = e.target.value;
                        updateSiteData({ posts: updated });
                      }}
                    />
                 </div>
               ))}
            </div>
          </div>
        );

      case AdminTab.SEO:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-serif">SEO & Meta Settings</h3>
            <div className="bg-neutral-900 p-8 border border-neutral-800 space-y-6">
              {Object.entries(siteData.seo).map(([page, config]) => (
                <div key={page} className="space-y-4 border-b border-neutral-800 pb-8 last:border-0 last:pb-0">
                  <h4 className="uppercase tracking-widest text-xs font-bold text-red-800">{page} Page</h4>
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-neutral-500">Meta Title</label>
                      <input 
                        className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded"
                        value={config.title}
                        onChange={(e) => {
                           const newSeo = {...siteData.seo};
                           newSeo[page].title = e.target.value;
                           updateSiteData({ seo: newSeo });
                        }}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase text-neutral-500">Meta Description</label>
                      <textarea 
                        className="w-full bg-neutral-950 border border-neutral-800 p-3 text-sm rounded h-20"
                        value={config.description}
                        onChange={(e) => {
                           const newSeo = {...siteData.seo};
                           newSeo[page].description = e.target.value;
                           updateSiteData({ seo: newSeo });
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case AdminTab.SUBSCRIBERS:
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h3 className="text-2xl font-serif">Mailing List</h3>
            <div className="bg-neutral-900 border border-neutral-800 overflow-hidden">
               <table className="w-full text-left text-sm">
                 <thead>
                    <tr className="bg-neutral-800 text-[10px] uppercase tracking-widest">
                       <th className="p-4">Email Address</th>
                       <th className="p-4">Status</th>
                       <th className="p-4">Actions</th>
                    </tr>
                 </thead>
                 <tbody>
                    {siteData.subscribers.map((email, i) => (
                      <tr key={i} className="border-t border-neutral-800">
                        <td className="p-4">{email}</td>
                        <td className="p-4"><span className="text-green-500">Active</span></td>
                        <td className="p-4">
                          <button 
                            className="text-neutral-500 hover:text-red-500"
                            onClick={() => updateSiteData({ subscribers: siteData.subscribers.filter(e => e !== email) })}
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                 </tbody>
               </table>
               {siteData.subscribers.length === 0 && <p className="p-8 text-center text-neutral-500 italic">No subscribers yet.</p>}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-950 border-r border-neutral-900 p-6 flex flex-col h-screen sticky top-0">
        <div className="mb-12">
          <h1 className="text-xl font-serif tracking-widest uppercase text-red-800">Admin Panel</h1>
          <p className="text-[10px] text-neutral-500 uppercase">Death Ave Wines v1.0</p>
        </div>
        
        <nav className="flex-grow space-y-2">
          {[
            { id: AdminTab.OVERVIEW, icon: LayoutDashboard },
            { id: AdminTab.PAGES, icon: FileText },
            { id: AdminTab.PRODUCTS, icon: Wine },
            { id: AdminTab.BLOG, icon: Edit2 },
            { id: AdminTab.SEO, icon: Search },
            { id: AdminTab.SUBSCRIBERS, icon: Users },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded text-sm transition-all ${
                activeTab === item.id ? 'bg-red-900 text-white shadow-lg' : 'text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900'
              }`}
            >
              <item.icon size={18} />
              <span>{item.id}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-neutral-900 space-y-4">
          <button onClick={() => window.location.href = '/'} className="w-full flex items-center space-x-3 px-4 py-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-200">
            <RotateCcw size={14} />
            <span>View Site</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
           <h2 className="text-4xl font-serif">{activeTab}</h2>
           <button className="flex items-center space-x-2 bg-neutral-100 text-black px-6 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-red-900 hover:text-white transition-all">
             <Save size={14} />
             <span>Publish Changes</span>
           </button>
        </header>

        {renderTabContent()}
      </main>
    </div>
  );
};

export default Admin;
