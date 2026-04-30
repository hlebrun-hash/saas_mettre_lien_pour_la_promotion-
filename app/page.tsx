"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkIcon, DollarSign, Search, Sparkles, TrendingUp, Users } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [budget, setBudget] = useState(1000);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  const influencers = [
    {
      name: "Elena Rossi",
      niche: "Lifestyle & Travel",
      reach: "120K",
      price: "$850",
      image: "/influencer_1.png",
      match: 98,
    },
    {
      name: "Marcus Tech",
      niche: "Tech & Gadgets",
      reach: "250K",
      price: "$1,200",
      image: "/influencer_2.png",
      match: 94,
    },
    {
      name: "Sophia V.",
      niche: "Fashion & Beauty",
      reach: "85K",
      price: "$600",
      image: "/influencer_3.png",
      match: 91,
    },
  ];

  return (
    <main className="min-h-screen bg-canvas text-ink font-body selection:bg-sunset selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-canvas/80 backdrop-blur-md">
        <div className="text-2xl font-display font-bold tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-sunset rounded-sm flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span>InflueSync</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-sunset transition-colors">Platform</a>
          <a href="#" className="hover:text-sunset transition-colors">Pricing</a>
          <a href="#" className="hover:text-sunset transition-colors">Case Studies</a>
        </nav>
        <button className="bg-ink text-canvas px-6 py-2 rounded-sm text-sm font-medium hover:bg-sunset transition-all duration-300 shadow-soft">
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="text-sunset font-medium uppercase tracking-[0.2em] text-sm mb-4 block">AI-Powered Promotion Discovery</span>
          <h1 className="text-6xl md:text-8xl font-display font-semibold leading-[1.05] tracking-tighter mb-8 max-w-4xl">
            Find the perfect <span className="italic text-ocean">voice</span> for your product.
          </h1>
          <p className="text-lg md:text-xl text-body max-w-2xl mx-auto mb-12">
            Paste your product link and set your budget. Our engine analyzes your niche and matches you with high-converting influencers instantly.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full max-w-3xl bg-surface-light p-8 md:p-10 shadow-floating flex flex-col md:flex-row gap-6 items-end"
        >
          <div className="flex-1 w-full text-left">
            <label className="text-xs font-bold uppercase tracking-widest text-muted mb-2 block">Product Link</label>
            <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
              <input
                type="text"
                placeholder="https://your-product.com/..."
                className="w-full pl-12 pr-4 py-4 bg-surface-sand/50 border-none rounded-sm focus:ring-2 focus:ring-sunset outline-none transition-all"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-48 text-left">
            <label className="text-xs font-bold uppercase tracking-widest text-muted mb-2 block">Budget</label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
              <input
                type="number"
                placeholder="1000"
                className="w-full pl-12 pr-4 py-4 bg-surface-sand/50 border-none rounded-sm focus:ring-2 focus:ring-sunset outline-none transition-all"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
            </div>
          </div>
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !url}
            className="w-full md:w-auto bg-sunset text-white px-10 py-4 rounded-sm font-display font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3"
          >
            {isAnalyzing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <Search className="w-5 h-5" />
              </motion.div>
            ) : (
              <>
                Analyze <Search className="w-5 h-5" />
              </>
            )}
          </button>
        </motion.div>
      </section>

      {/* Analysis State */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-canvas/90 backdrop-blur-xl flex flex-col items-center justify-center p-8"
          >
            <div className="relative w-24 h-24 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 border-4 border-sunset/20 border-t-sunset rounded-full"
              />
              <Sparkles className="absolute inset-0 m-auto text-sunset w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-semibold mb-2">Analyzing Product Niche</h2>
            <p className="text-body animate-pulse text-center">Scanning market data and historical influencer performance...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Section */}
      <AnimatePresence>
        {showResults && (
          <section className="py-20 px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">Best Matches</h2>
                <p className="text-body mt-2">We found 3 high-potential influencers within your <span className="font-bold text-ink">${budget}</span> budget.</p>
              </div>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-ocean/10 text-ocean rounded-sm text-sm font-bold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> High ROI Potential
                </div>
                <div className="px-4 py-2 bg-sunset/10 text-sunset rounded-sm text-sm font-bold flex items-center gap-2">
                  <Users className="w-4 h-4" /> Niche Verified
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {influencers.map((inf, i) => (
                <motion.div
                  key={inf.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-surface-light group relative shadow-soft hover:shadow-floating transition-all duration-500 overflow-hidden"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <Image
                      src={inf.image}
                      alt={inf.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-sunset text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest">
                      {inf.match}% Match
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-ocean mb-2 block">{inf.niche}</span>
                    <h3 className="text-2xl font-display font-semibold mb-4">{inf.name}</h3>
                    <div className="flex justify-between items-center pt-6 border-t border-surface-sand">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted">Reach</p>
                        <p className="text-lg font-bold text-ink">{inf.reach}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest text-muted">Est. Rate</p>
                        <p className="text-lg font-bold text-sunset">{inf.price}</p>
                      </div>
                    </div>
                    <button className="w-full mt-8 py-3 bg-ink text-canvas rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-sunset transition-colors">
                      Contact Influencer
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-20 p-12 bg-surface-sand/30 text-center rounded-none border border-surface-sand"
            >
              <h3 className="text-3xl font-display font-semibold mb-4">Want more precise targeting?</h3>
              <p className="text-body max-w-xl mx-auto mb-8">
                Unlock our Premium Tier to get detailed engagement analytics and direct campaign management tools.
              </p>
              <button className="bg-ocean text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all">
                Upgrade to Pro
              </button>
            </motion.div>
          </section>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-surface-sand bg-surface-sand/10 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-display font-bold tracking-tight mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-sunset rounded-sm flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span>InflueSync</span>
            </div>
            <p className="text-muted max-w-sm">
              The modern way to scale your brand through authentic connections. Powered by AI, driven by results.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-body">
              <li><a href="#" className="hover:text-sunset transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-sunset transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-sunset transition-colors">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-body">
              <li><a href="#" className="hover:text-sunset transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sunset transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-sunset transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-surface-sand flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] text-muted">
          <p>© 2026 InflueSync. All rights reserved.</p>
          <p>Designed with ❤️ for premium brands.</p>
        </div>
      </footer>
    </main>
  );
}
