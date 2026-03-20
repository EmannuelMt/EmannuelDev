import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaHome as Home, FaBriefcase as Briefcase, FaInfo as Info, FaCommentAlt as MessageSquare, FaUser as User, FaCog as Settings, FaBell as Bell, FaCheckCircle as CheckCircle2, FaSearch as Search, FaTimes as X, FaSyncAlt as RefreshCw, FaChevronRight as ChevronRight, FaSignOutAlt as LogOut } from 'react-icons/fa';
import { FaBolt as Bolt } from 'react-icons/fa';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchTimeoutRef = useRef(null);
  const searchRef = useRef(null);
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);
  const navbarRef = useRef(null);

  // MOVE THESE DEFINITIONS TO THE TOP - BEFORE ANY FUNCTIONS THAT USE THEM
  const navLinks = useMemo(() => [
    { 
      name: 'Início', 
      path: '/', 
      icon: Home,
      description: 'Página principal'
    },
    { 
      name: 'Serviços', 
      path: '/servicos', 
      icon: Bolt,
      badge: '6',
      description: 'Conheça nossas soluções'
    },
    { 
      name: 'Portfólio', 
      path: '/portfolio', 
      icon: Briefcase,
      description: 'Projetos realizados'
    },
    { 
      name: 'Sobre', 
      path: '/about', 
      icon: Info,
      description: 'Sobre nós'
    },
    { 
      name: 'Contato', 
      path: '/contato', 
      icon: MessageSquare,
      description: 'Entre em contato'
    },
  ], []);

  const userLinks = useMemo(() => [
    { name: 'Meu Perfil', path: '/perfil', icon: User },
    { name: 'Configurações', path: '/configuracoes', icon: Settings },
    { name: 'Notificações', path: '/notificacoes', icon: Bell, badge: notifications },
    { name: 'Favoritos', path: '/favoritos', icon: Heart },
    { name: 'Projetos', path: '/projetos', icon: Briefcase },
  ], [notifications]);

  const notificationsList = useMemo(() => [
    { id: 1, title: 'Novo projeto disponível', time: '5 min atrás', read: false, icon: Briefcase },
    { id: 2, title: 'Mensagem de cliente', time: '1 hora atrás', read: false, icon: MessageSquare },
    { id: 3, title: 'Atualização do sistema', time: '2 horas atrás', read: true, icon: RefreshCw },
    { id: 4, title: 'Orçamento aprovado', time: '1 dia atrás', read: true, icon: CheckCircle2 },
  ], []);

  // NOW define the functions that use navLinks, userLinks, and notificationsList
  const saveHistoryToStorage = useCallback((hist) => {
    try { 
      localStorage.setItem('search_history', JSON.stringify(hist.slice(0, 10))); 
    } catch {}
  }, []);

  const addToHistory = useCallback((q) => {
    const normalized = (q || '').trim();
    if (!normalized) return;
    setSearchHistory(prev => {
      const next = [normalized, ...prev.filter(h => h.toLowerCase() !== normalized.toLowerCase())].slice(0, 10);
      saveHistoryToStorage(next);
      return next;
    });
  }, [saveHistoryToStorage]);

  const clearHistory = useCallback(() => {
    setSearchHistory([]);
    try { 
      localStorage.removeItem('search_history'); 
    } catch {}
  }, []);

  const performSearch = useCallback((q) => {
    const query = (q || '').trim().toLowerCase();
    if (!query) { 
      setSearchResults([]); 
      return; 
    }

    setIsSearching(true);

    // Simula busca em todo o site com delay para mostrar loading
    setTimeout(() => {
      const allData = [
        ...navLinks.map(link => ({
          title: link.name,
          snippet: link.description,
          anchor: link.path,
          icon: link.icon
        })),
        ...userLinks.map(link => ({
          title: link.name,
          snippet: '',
          anchor: link.path,
          icon: link.icon
        })),
        ...notificationsList.map(notif => ({
          title: notif.title,
          snippet: notif.time,
          anchor: '/notificacoes',
          icon: notif.icon
        }))
      ];

      const results = allData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.snippet.toLowerCase().includes(query)
      );

      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  }, [navLinks, userLinks, notificationsList]); // Add dependencies

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    const q = (searchQuery || '').trim();
    if (!q) return;
    addToHistory(q);
    performSearch(q);
  }, [searchQuery, addToHistory, performSearch]);

  const handleResultClick = useCallback((result) => {
    setSearchOpen(false);
    setSearchQuery('');
    
    if (result && result.anchor) {
      const anchor = result.anchor.startsWith('#') ? result.anchor : `#${result.anchor}`;
      const targetPath = location.pathname.split('#')[0] + anchor;
      navigate(targetPath);
      
      setTimeout(() => {
        const id = anchor.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.pathname, navigate]);

  const markAllAsRead = useCallback(() => {
    setNotifications(0);
    setShowNotifications(false);
  }, []);

  const handleLogout = useCallback(() => {
    // Aqui você pode adicionar lógica de logout
  }, []);

  // Animações
  const navItemVariants = {
    hover: { 
      y: -2,
      transition: { type: 'spring', stiffness: 400, damping: 17 }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 500,
        damping: 30,
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.15 }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', damping: 25, stiffness: 200 }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <nav 
        ref={navbarRef}
        className={`navbar ${scrolled ? 'scrolled' : ''} ${atTop ? 'at-top' : ''} ${theme}`}
      >
        <div className="navbar-container">
          
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-container">
              <div className="logo-glow"></div>
            </div>
            <span className="logo-text">Emannuel<span className="logo-accent">DEV</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.name}
                className="nav-item-wrapper"
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                variants={navItemVariants}
                whileHover="hover"
              >
                <Link
                  to={link.path}
                  className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                >
                  <link.icon className="nav-icon" size={18} />
                  <span className="nav-text">{link.name}</span>
                  {link.badge && <span className="nav-badge">{link.badge}</span>}
                  
                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === index && (
                      <motion.div 
                        className="nav-tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                      >
                        {link.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="nav-right">
            {/* Search Button */}
            <motion.button 
              className="nav-icon-button search-toggle"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={18} />
            </motion.button>

            {/* Notifications */}
            <div className="notifications-wrapper" ref={notificationsRef}>
              <motion.button 
                className="nav-icon-button notifications-toggle"
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label="Notificações"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell size={18} />
                {notifications > 0 && (
                  <span className="notification-badge">{notifications}</span>
                )}
              </motion.button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div 
                    className="dropdown-menu notifications-dropdown"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="dropdown-header">
                      <Bell size={16} />
                      <span>Notificações</span>
                      {notifications > 0 && (
                        <button className="mark-read" onClick={markAllAsRead}>
                          Marcar todas
                        </button>
                      )}
                    </div>
                    
                    <div className="notifications-list">
                      {notificationsList.map((notif) => (
                        <div key={notif.id} className={`notification-item ${!notif.read ? 'unread' : ''}`}>
                          <div className="notification-icon">
                            <notif.icon size={14} />
                          </div>
                          <div className="notification-content">
                            <div className="notification-title">{notif.title}</div>
                            <div className="notification-time">{notif.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/notificacoes" className="dropdown-footer">
                      Ver todas
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              className="search-overlay"
              ref={searchRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <form onSubmit={handleSearchSubmit} className="search-form">
                <Search size={20} className="search-icon" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Buscar em todo o site..."
                  value={searchQuery}
                  onChange={(e) => {
                    const v = e.target.value;
                    setSearchQuery(v);
                    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
                    searchTimeoutRef.current = setTimeout(() => performSearch(v), 300);
                  }}
                  className="search-input"
                  autoFocus
                />
                <button type="button" onClick={() => setSearchOpen(false)} className="search-close">
                  <X size={20} />
                </button>

                <div className="search-panel">
                  {searchQuery.trim() === '' ? (
                    <div className="search-history">
                      <div className="search-history-header">
                        <span>Histórico de pesquisa</span>
                        {searchHistory.length > 0 && (
                          <button className="clear-history" onClick={clearHistory}>
                            Limpar
                          </button>
                        )}
                      </div>
                      {searchHistory.length === 0 ? (
                        <div className="search-empty">
                          <Search size={24} />
                          <p>Nenhuma pesquisa recente</p>
                        </div>
                      ) : (
                        <ul className="history-list">
                          {searchHistory.map((h, i) => (
                            <li key={i}>
                              <button 
                                className="history-item"
                                onClick={() => { 
                                  setSearchQuery(h); 
                                  performSearch(h); 
                                  addToHistory(h);
                                }}
                              >
                                <Search size={14} />
                                {h}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div className="search-results">
                      {isSearching ? (
                        <div className="search-loading">
                          <div className="loading-spinner"></div>
                          <p>Buscando...</p>
                        </div>
                      ) : searchResults.length === 0 ? (
                        <div className="search-empty">
                          <AlertCircle size={24} />
                          <p>Nenhum resultado encontrado para "{searchQuery}"</p>
                        </div>
                      ) : (
                        <>
                          <div className="results-header">
                            <span>{searchResults.length} resultados encontrados</span>
                          </div>
                          <ul className="results-list">
                            {searchResults.map((r, i) => (
                              <li key={i} className="search-result-item">
                                {r.anchor ? (
                                  <Link 
                                    to={r.anchor}
                                    className="result-link"
                                    onClick={() => {
                                      setSearchOpen(false);
                                      setSearchQuery('');
                                      addToHistory(searchQuery);
                                    }}
                                  >
                                    <div className="result-icon">
                                      <r.icon size={16} />
                                    </div>
                                    <div className="result-content">
                                      <strong>{r.title}</strong>
                                      <div className="result-snippet">{r.snippet}</div>
                                    </div>
                                  </Link>
                                ) : (
                                  <div className="result-content">
                                    <strong>{r.title}</strong>
                                    <div className="result-snippet">{r.snippet}</div>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mobile-menu-header">
                <Link to="/" className="mobile-logo" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={logo} alt="Logo" className="mobile-logo-img" />
                  <span>DevStudio</span>
                </Link>
                <motion.button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="mobile-close"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="mobile-user">
                <img 
                  src="https://ui-avatars.com/api/?name=Usuario&background=2563EB&color=ffffff&bold=true&size=128" 
                  alt="User"
                  className="mobile-user-avatar"
                />
                <div className="mobile-user-info">
                  <div className="mobile-user-name">Usuário Teste</div>
                  <div className="mobile-user-email">usuario@email.com</div>
                </div>
              </div>

              <div className="mobile-menu-content">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon size={18} />
                    <span>{link.name}</span>
                    {link.badge && <span className="mobile-badge">{link.badge}</span>}
                    <ChevronRight size={16} className="mobile-arrow" />
                  </Link>
                ))}

                <div className="mobile-divider"></div>

                {userLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon size={18} />
                    <span>{link.name}</span>
                    {link.badge > 0 && <span className="mobile-badge">{link.badge}</span>}
                    <ChevronRight size={16} className="mobile-arrow" />
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-footer">
                
                
                <motion.button 
                  className="mobile-logout" 
                  onClick={handleLogout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogOut size={16} />
                  <span>Sair da conta</span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="mobile-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;