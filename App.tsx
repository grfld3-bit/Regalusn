import React, { useState } from 'react';
import { 
  Menu, X, Star, Zap, Search, 
  ChevronLeft, ChevronRight, Settings, Cpu, 
  Globe, Hexagon, Send, ArrowRight, Crown, Gem, ShieldCheck, Headset,
  MousePointer2, Wallet, Key, CheckCircle, CreditCard, Smartphone
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      {/* Background Grid & Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Desktop Menu (Left) */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              <a href="#system" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">System</a>
              <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#packages" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Packages</a>
              <a href="#guide" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Guide</a>
            </div>

            {/* Logo (Center) */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer justify-center flex-1">
              <motion.div 
                className="text-amber-400"
                animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Crown size={28} className="fill-amber-400/20" />
              </motion.div>
              <span className="font-bold text-xl tracking-wide text-white">REGAL</span>
            </div>

            {/* Desktop Actions (Right) */}
            <div className="hidden md:flex items-center justify-end gap-4 flex-1">
              <a href="#contact" className="border border-white/20 hover:bg-white/10 text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
                Top-Up Balance
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/5 py-6 px-4 flex flex-col gap-5 shadow-2xl">
            <a href="#system" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-amber-400">System</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-amber-400">Features</a>
            <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-amber-400">Packages</a>
            <a href="#guide" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-amber-400">Guide</a>
            <div className="h-px bg-white/10 my-2"></div>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="border border-white/20 text-white px-5 py-3 rounded-full text-center font-medium">
              Top-Up Balance
            </a>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Text */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold tracking-widest uppercase mb-8">
                  <Zap size={14} className="fill-amber-400" /> V12.0 Production Live
                </div>
                <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                  Regal Username<br />
                  Tracker<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">V12.0 Live</span>
                </h1>
                
                <p className="text-lg text-gray-400 mb-16 max-w-md leading-relaxed">
                  High-speed assets at your fingertips. Secure premium Telegram usernames with our automated sharding engine and multi-chain payments.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-medium text-white">50</span>
                    <Star size={16} className="text-amber-400 fill-amber-400 mb-1" />
                  </div>
                  <div className="text-sm text-gray-400 leading-tight">
                    Coins per<br />Generation.
                  </div>
                </div>
              </div>

              {/* Hero Visuals */}
              <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
                {/* Main Abstract Image */}
                <div className="relative w-full h-full max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                    alt="Abstract Luxury Tech" 
                    className="w-full h-full object-cover rounded-3xl opacity-60 mix-blend-luminosity"
                    style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)' }}
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 right-0 bg-white rounded-2xl p-4 shadow-2xl shadow-violet-500/20 w-40 transform rotate-3 animate-pulse">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold text-gray-900">Speed<br/>Rate</span>
                      <ArrowRight size={14} className="text-violet-600" />
                    </div>
                    <div className="flex justify-center mb-2">
                      <Cpu size={24} className="text-violet-600" />
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-violet-600">3,500</div>
                      <div className="text-[10px] text-gray-500 uppercase">Checks / Min</div>
                    </div>
                  </div>

                  {/* Pills */}
                  <div className="absolute bottom-20 right-10 flex flex-col items-end gap-3">
                    <div className="flex gap-3">
                      <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white flex items-center gap-2">
                        <Search size={12} className="text-amber-400" /> Username tracking
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white">
                        V12.0 Engine
                      </div>
                      <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white">
                        Sticky IP Audit
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-white px-4 py-2 rounded-full text-xs font-medium text-gray-900 flex items-center gap-2 shadow-lg shadow-white/10">
                        <Star size={12} className="text-violet-600 fill-violet-600" /> XTR Payments
                      </div>
                    </div>
                    <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white">
                      Sharding 5 Jalur
                    </div>
                  </div>

                  {/* Start Tracking Button */}
                  <div className="absolute bottom-10 left-10">
                    <button className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 hover:bg-white/10 px-6 py-3 rounded-full text-sm font-medium text-white flex items-center gap-3 transition-all">
                      <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                        <ArrowRight size={14} className="text-gray-900" />
                      </div>
                      Start Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Stats Section */}
        <section id="system" className="py-24 border-y border-white/5 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center mb-6">
                  <Cpu size={20} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">V12.0 Sharding Engine</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Process up to 3,500 checks per minute with our advanced 5-route parallel sharding architecture.
                </p>
              </div>
              
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center mb-6">
                  <ShieldCheck size={20} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">Sticky IP & Audit</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Advanced session management with 24-hour sticky IPs and automated session recovery to prevent rate limits.
                </p>
              </div>
              
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center mb-6">
                  <Star size={20} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">Telegram Stars (XTR)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Seamlessly top up your balance using native Telegram Stars for instant, frictionless access to our tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 relative overflow-hidden">
          {/* Glowing Background Bars */}
          <div className="absolute inset-0 flex justify-center gap-20 opacity-30 pointer-events-none">
            <div className="w-32 h-full bg-gradient-to-t from-violet-600 via-transparent to-transparent blur-3xl"></div>
            <div className="w-32 h-full bg-gradient-to-t from-amber-400 via-transparent to-transparent blur-3xl"></div>
            <div className="w-32 h-full bg-gradient-to-t from-violet-600 via-transparent to-transparent blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">[ CAPABILITIES ]</div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Luxury XTR<br/>Production Live</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Secure your dream username with our high-speed tracking queue and automated workers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:bg-[#111] transition-colors">
                <h3 className="text-xl font-medium text-white mb-4">Real-Time Generation</h3>
                <p className="text-gray-400 text-sm mb-12 leading-relaxed">
                  Input a 4-10 letter keyword and watch our workers scan and secure available usernames instantly.
                </p>
                <div className="h-32 border border-white/5 rounded-xl bg-[#050505] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent)]"></div>
                  <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center border border-violet-500/30">
                    <Search size={20} className="text-violet-400" />
                  </div>
                  {/* Mock Chart */}
                  <div className="absolute right-4 bottom-4 flex items-end gap-1 opacity-50">
                    <div className="w-1 h-4 bg-amber-400"></div>
                    <div className="w-1 h-6 bg-amber-400"></div>
                    <div className="w-1 h-3 bg-amber-400"></div>
                    <div className="w-1 h-8 bg-amber-400"></div>
                    <div className="w-1 h-5 bg-amber-400"></div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:bg-[#111] transition-colors">
                <h3 className="text-xl font-medium text-white mb-4">XTR & TON Payments</h3>
                <p className="text-gray-400 text-sm mb-12 leading-relaxed">
                  Fully integrated with Telegram's latest XTR payment system and TON blockchain. Generate premium assets for just 50 Coins.
                </p>
                <div className="h-32 border border-white/5 rounded-xl bg-[#050505] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent)]"></div>
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 transform rotate-45">
                    <Star size={20} className="text-amber-400 -rotate-45 fill-amber-400" />
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:bg-[#111] transition-colors">
                <h3 className="text-xl font-medium text-white mb-4">Automated Queue</h3>
                <p className="text-gray-400 text-sm mb-12 leading-relaxed">
                  Keywords are processed in the background. Get notified the moment a premium asset becomes available.
                </p>
                <div className="h-32 border border-white/5 rounded-xl bg-[#050505] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent)]"></div>
                  <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    <Settings size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-24 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">[ ARCHITECTURE ]</div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Evolution of Regal</h2>
            <p className="text-gray-400 mb-16">Constantly upgrading to maintain the highest speed in the market.</p>

            <div className="relative">
              {/* Large Versions */}
              <div className="flex items-baseline gap-8 overflow-x-auto pb-8 scrollbar-hide">
                <div className="text-8xl md:text-9xl font-light text-amber-400 tracking-tighter">V12.0</div>
                <div className="text-8xl md:text-9xl font-light text-white/10 tracking-tighter">V11.0</div>
                <div className="text-8xl md:text-9xl font-light text-white/10 tracking-tighter">V10.0</div>
                <div className="text-8xl md:text-9xl font-light text-white/10 tracking-tighter">V9.0</div>
              </div>

              {/* Timeline Line */}
              <div className="absolute top-[60%] left-0 w-full h-px bg-white/10"></div>
              <div className="absolute top-[60%] left-0 w-1/4 h-px bg-amber-400"></div>

              {/* Content */}
              <div className="mt-12 max-w-xl">
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Regal V12.0 introduces Sticky IP Auditing and 5-route Sharding, maximizing our ability to secure high-value Telegram assets before anyone else. With session recovery loops and automated proxy rotation, downtime is a thing of the past.
                </p>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                    <ChevronLeft size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 hover:bg-amber-500 transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">[ PRICING ]</div>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Top-Up Packages</h2>
                <p className="text-gray-400">Choose your preferred payment method. 50 Coins per generation.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Stars Package */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-amber-400/30 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <Star size={20} className="text-amber-400 fill-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Telegram Stars</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">100 Coins</span>
                    <span className="text-white font-medium">100 Stars</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">250 Coins</span>
                    <span className="text-white font-medium">250 Stars</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">500 Coins</span>
                    <span className="text-white font-medium">500 Stars</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">1000 Coins</span>
                    <span className="text-white font-medium">1000 Stars</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all">
                  Pay with XTR
                </button>
              </div>

              {/* IDR QRIS Package */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 border-amber-400/20 shadow-2xl shadow-amber-400/5 hover:border-amber-400/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-400 text-gray-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Automated
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <Gem size={20} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">IDR QRIS</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">50 Coins</span>
                    <span className="text-white font-medium">Rp 15.000</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">100 Coins</span>
                    <span className="text-white font-medium">Rp 30.000</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">300 Coins</span>
                    <span className="text-white font-medium">Rp 50.000</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-amber-400 text-gray-900 text-sm font-bold hover:bg-amber-500 transition-all">
                  Pay with QRIS
                </button>
              </div>

              {/* TON Package */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-amber-400/30 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <Globe size={20} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">TON Blockchain</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">100 Coins</span>
                    <span className="text-white font-medium">1.2 TON</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">200 Coins</span>
                    <span className="text-white font-medium">2.4 TON</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-gray-400">500 Coins</span>
                    <span className="text-white font-medium">6.0 TON</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all">
                  Pay with TON
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="py-32 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* How to Use */}
              <div>
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">[ TUTORIAL ]</div>
                <h2 className="text-4xl font-medium text-white mb-12">How to Use</h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Start the Bot</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Open Regal Username Tracker on Telegram and click the /start command to initialize your session.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Enter Keyword</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Send a keyword (4-10 letters) to the bot. Our sharding engine will immediately start scanning for available variations.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Secure Your Asset</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Once a list of available usernames appears, click to copy and claim it on Telegram before anyone else.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Deposit */}
              <div>
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">[ PAYMENTS ]</div>
                <h2 className="text-4xl font-medium text-white mb-12">How to Deposit</h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center">
                      <Wallet size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Choose Method</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Navigate to the Deposit menu and select your preferred method: Stars, QRIS, or TON.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center">
                      <CreditCard size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Complete Payment</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Follow the instructions for your chosen method. Stars and QRIS are processed automatically via our V12.0 API.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center">
                      <CheckCircle size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Instant Balance</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Your balance will be updated instantly. You can now start generating high-speed assets immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Large Icon */}
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 text-white opacity-90">
                <Crown className="w-full h-full text-white/10" />
              </div>
              
              {/* CTA Content */}
              <div className="flex-1 max-w-xl text-center md:text-left">
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">[ START GENERATING ]</div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Secure Your Assets Today</h2>
                <p className="text-gray-400 mb-10">Join Regal Username Tracker and leverage our V12.0 engine to find the best Telegram usernames.</p>
                <button className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 hover:bg-white/10 px-8 py-4 rounded-full text-sm font-medium text-white flex items-center gap-3 transition-all mx-auto md:mx-0">
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center">
                    <ArrowRight size={14} className="text-gray-900" />
                  </div>
                  Start Generate (50 COIN)
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <motion.div 
                  className="text-amber-400"
                  animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Crown size={24} className="fill-amber-400/20" />
                </motion.div>
                <span className="font-bold text-xl tracking-wide text-white">REGAL</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
                High-speed assets at your fingertips. The ultimate Telegram username tracker powered by V12.0 Sharding Technology.
              </p>
            </div>
            
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white font-bold mb-5 text-lg">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#system" className="hover:text-amber-400 transition-colors">System Architecture</a></li>
                <li><a href="#features" className="hover:text-amber-400 transition-colors">Features</a></li>
                <li><a href="#packages" className="hover:text-amber-400 transition-colors">XTR Packages</a></li>
                <li><a href="#guide" className="hover:text-amber-400 transition-colors">User Guide</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-5 text-lg">Connect</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://t.me/regalcs1" className="hover:text-amber-400 transition-colors flex items-center gap-2"><Send size={16}/> @regalcs1</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2"><Globe size={16}/> Regal Network</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
            <p>© 2026 Regal Username Tracker. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
