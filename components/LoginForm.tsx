import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { LoginStatus } from '../types';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<LoginStatus>(LoginStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      setStatus(LoginStatus.ERROR);
      return;
    }

    setStatus(LoginStatus.LOADING);
    setErrorMessage('');

    // Simulate API call
    setTimeout(() => {
      // Mock validation
      if (email.includes('@') && password.length >= 6) {
        setStatus(LoginStatus.SUCCESS);
        setTimeout(() => {
          onLoginSuccess();
        }, 1000);
      } else {
        setStatus(LoginStatus.ERROR);
        setErrorMessage('Credenciais inválidas. Verifique seus dados.');
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight brand-font mb-3">Login</h2>
        <p className="text-slate-400">
          Bem-vindo de volta. Insira suas credenciais para acessar o painel de vendas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1" htmlFor="email">Email Profissional</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#161b26] border border-slate-700/60 rounded-xl focus:bg-[#1c2230] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-white placeholder-slate-600 font-medium"
              placeholder="ex: gerente@loja.com"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="password">Senha</label>
            <a href="#" className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              Esqueceu a senha?
            </a>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 bg-[#161b26] border border-slate-700/60 rounded-xl focus:bg-[#1c2230] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-white placeholder-slate-600 font-medium"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {status === LoginStatus.ERROR && (
          <div className="flex items-center p-4 text-sm text-red-400 bg-red-900/10 border border-red-900/20 rounded-xl">
            <AlertCircle size={18} className="mr-3 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Action Button */}
        <button
          type="submit"
          disabled={status === LoginStatus.LOADING || status === LoginStatus.SUCCESS}
          className={`
            w-full flex items-center justify-center py-4 px-4 rounded-xl shadow-lg text-sm font-bold text-white uppercase tracking-wide
            transition-all duration-200 transform hover:-translate-y-0.5
            ${status === LoginStatus.SUCCESS 
              ? 'bg-emerald-600 hover:bg-emerald-700' 
              : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/20'}
            disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
          `}
        >
          {status === LoginStatus.LOADING ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verificando...
            </div>
          ) : status === LoginStatus.SUCCESS ? (
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              Sucesso
            </div>
          ) : (
            <div className="flex items-center">
              Entrar na Plataforma
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          )}
        </button>
      </form>

      <div className="mt-8 text-center border-t border-slate-800 pt-6">
        <p className="text-sm text-slate-500">
          Não tem uma conta? <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Solicitar demonstração</a>
        </p>
      </div>
    </div>
  );
};