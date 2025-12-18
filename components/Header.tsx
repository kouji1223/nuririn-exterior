import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PaintBucket, Menu, X, UserCog, LogIn } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary-500 text-white p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
            <PaintBucket size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">
            NuRiRiN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/craftsman-login" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
            <UserCog size={16} />
            職人の方はこちら
          </Link>
          <Link to="/login" className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
            <LogIn size={16} />
            ユーザーログイン
          </Link>
          {isHome && (
            <Link 
              to="/quote" 
              className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md transition-all transform hover:scale-105"
            >
              無料見積もり依頼
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg absolute w-full">
           <Link 
             to="/quote" 
             className="block w-full text-center bg-primary-500 text-white px-4 py-3 rounded-lg font-bold"
             onClick={() => setIsOpen(false)}
           >
            無料見積もり依頼
          </Link>
          <Link 
            to="/craftsman-login" 
            className="block text-gray-600 font-medium py-2 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            職人の方はこちら
          </Link>
          <Link 
            to="/login" 
            className="block text-gray-600 font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            マイページログイン
          </Link>
        </div>
      )}
    </header>
  );
};