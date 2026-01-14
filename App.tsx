import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { SmartSupport } from './components/SmartSupport';
import { LayoutDashboard, Store, ShoppingCart, LogOut, TrendingUp, Wallet, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0f111a] text-slate-100 flex flex-col items-center justify-center p-4">
        <div className="bg-[#161b26] p-10 rounded-3xl shadow-2xl border border-slate-800 max-w-lg w-full text-center">
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-4 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <Store size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 brand-font">Bem-vindo, Lojista!</h1>
          <p className="text-slate-400 mb-10 text-lg">Seu painel de controle está pronto.</p>
          
          <div className="grid grid-cols-2 gap-5 mb-10">
            <div className="p-6 bg-[#0f111a] rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group hover:bg-[#131620]">
              <LayoutDashboard className="mx-auto mb-3 text-slate-500 group-hover:text-indigo-400 transition-colors" size={28} />
              <span className="text-sm font-semibold text-slate-300 group-hover:text-white">Dashboard</span>
            </div>
            <div className="p-6 bg-[#0f111a] rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer group hover:bg-[#131620]">
              <ShoppingCart className="mx-auto mb-3 text-slate-500 group-hover:text-indigo-400 transition-colors" size={28} />
              <span className="text-sm font-semibold text-slate-300 group-hover:text-white">Vendas</span>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center justify-center w-full py-3.5 px-4 border border-slate-700 rounded-xl shadow-sm text-sm font-semibold text-slate-300 bg-transparent hover:bg-slate-800 hover:text-white focus:outline-none transition-colors"
          >
            <LogOut size={18} className="mr-2" />
            Sair do Sistema
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex bg-[#0f111a] relative overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-0"></div>

      {/* Left Side: Impact Visual */}
      <div className="hidden lg:flex w-1/2 relative z-10 flex-col justify-center items-center p-12 overflow-hidden bg-gradient-to-br from-[#111827] to-[#0B0F19]">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-lg w-full relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-900/20">
              <Store size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white brand-font">Luk<span className="text-indigo-400">PDV</span></span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-extrabold text-white leading-[1.15] mb-6 brand-font">
            Inteligência real para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">negócio</span>
          </h1>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-md">
            Gerencie estoque, fiscal e financeiro com a robustez que sua empresa precisa e a simplicidade que você merece.
          </p>

          {/* Visual Element: CSS Dashboard Preview (Static, Lightweight) */}
          <div className="relative w-full aspect-[16/9] bg-[#1a202e] rounded-xl border border-slate-700/50 shadow-2xl p-4 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">
            {/* Mock Header */}
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700/50 pb-4">
               <div className="w-8 h-8 rounded-full bg-slate-700"></div>
               <div className="h-2 w-24 bg-slate-700 rounded"></div>
               <div className="ml-auto h-8 w-24 bg-indigo-600/20 rounded-lg"></div>
            </div>
            {/* Mock Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
               <div className="bg-[#0f111a] p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between mb-2">
                     <div className="h-2 w-12 bg-slate-600 rounded"></div>
                     <TrendingUp size={14} className="text-green-500" />
                  </div>
                  <div className="h-6 w-20 bg-slate-500 rounded mb-1"></div>
                  <div className="h-2 w-10 bg-green-900/50 rounded"></div>
               </div>
               <div className="bg-[#0f111a] p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between mb-2">
                     <div className="h-2 w-12 bg-slate-600 rounded"></div>
                     <Wallet size={14} className="text-indigo-500" />
                  </div>
                  <div className="h-6 w-20 bg-slate-500 rounded mb-1"></div>
               </div>
               <div className="bg-[#0f111a] p-3 rounded-lg border border-slate-800">
                 <div className="h-full flex items-center justify-center">
                    <div className="h-8 w-8 bg-slate-800 rounded-full"></div>
                 </div>
               </div>
            </div>
            {/* Mock Graph */}
            <div className="bg-[#0f111a] rounded-lg border border-slate-800 h-24 w-full flex items-end gap-2 px-4 pb-2">
                <div className="w-full bg-indigo-900/30 h-[40%] rounded-t"></div>
                <div className="w-full bg-indigo-900/50 h-[70%] rounded-t"></div>
                <div className="w-full bg-indigo-600 h-[55%] rounded-t relative shadow-[0_0_10px_rgba(79,70,229,0.3)]"></div>
                <div className="w-full bg-indigo-900/40 h-[85%] rounded-t"></div>
                <div className="w-full bg-indigo-900/20 h-[60%] rounded-t"></div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Sistema Operante v2.4
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10 border-l border-white/5">
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>

      <SmartSupport />
    </div>
  );
};

export default App;