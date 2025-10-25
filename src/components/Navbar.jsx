import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Gamepad2,
  Medal,
  User,
  Menu,
  X,
  Wallet,
  Globe,
  LogIn
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('navbar.home'), icon: Gamepad2 },
    { path: '/tournaments', label: t('navbar.tournaments'), icon: Trophy },
    { path: '/leaderboard', label: t('navbar.leaderboard'), icon: Medal },
    { path: '/profile', label: t('navbar.profile'), icon: User }
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fa', label: 'فا' },
    { code: 'ar', label: 'العربية' },
    { code: 'tr', label: 'TR' }
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <motion.div
              className="logo-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gamepad2 size={32} />
            </motion.div>
            <div className="logo-text">
              <span className="logo-main">PS5</span>
              <span className="logo-sub">ARENA</span>
            </div>
          </Link>

          <div className="navbar-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                <link.icon size={18} />
                <span>{link.label}</span>
                {location.pathname === link.path && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="navbar-right">
            <motion.div
              className="wallet-display"
              whileHover={{ scale: 1.05 }}
            >
              <Wallet size={20} />
              <div className="wallet-amounts">
                <span className="wallet-amount">$1,234</span>
                <span className="wallet-crypto">0.5 USDT</span>
              </div>
            </motion.div>

            <div className="language-selector">
              <Globe size={18} />
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-dropdown"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
            </div>

            <motion.button
              className="login-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogIn size={18} />
              <span>{t('navbar.login')}</span>
            </motion.button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon size={24} />
                  <span>{link.label}</span>
                </Link>
              ))}

              <div className="mobile-menu-footer">
                <div className="mobile-wallet">
                  <Wallet size={24} />
                  <div>
                    <div>$1,234</div>
                    <div className="mobile-crypto">0.5 USDT</div>
                  </div>
                </div>

                <button className="mobile-login-btn">
                  <LogIn size={20} />
                  <span>{t('navbar.login')}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
