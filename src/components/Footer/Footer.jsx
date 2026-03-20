import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code2,
  Sparkles,
  Send,
  CheckCircle,
  ChevronUp,
  Star,
  Award,
  Shield,
  Zap,
  Globe,
  Coffee,
  Rocket,
  Clock,
  Headphones,
  FileText,
  Lock,
  Cookie,
  ShieldCheck,
  ExternalLink,
  Briefcase,
  Users,
  BookOpen,
  HelpCircle,
  Activity,
  Layers,
  Smartphone,
  Laptop,
  ArrowRight,
  ChevronRight,
  Download,
  Apple,
  Facebook,
  Youtube,
  ShoppingCart
} from 'lucide-react';
import { FaTiktok, FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const { scrollY } = useScroll();
  const footerOpacity = useTransform(scrollY, [0, 300], [0, 1]);
  const footerY = useTransform(scrollY, [0, 300], [20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setFormErrors({});
    
    if (!email) {
      setFormErrors({ email: 'O e-mail é obrigatório' });
      return;
    }
    
    if (!validateEmail(email)) {
      setFormErrors({ email: 'Por favor, insira um e-mail válido' });
      return;
    }
    
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
    setFormErrors({});
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const navLinks = [
    { path: '/', label: 'Início', icon: <Zap size={16} /> },
    { path: '/servicos', label: 'Serviços', icon: <Layers size={16} /> },
    { path: '/portfolio', label: 'Portfólio', icon: <Briefcase size={16} /> },
    { path: '/sobre', label: 'Sobre', icon: <Users size={16} /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen size={16} />, badge: 'Novo' },
    { path: '/contato', label: 'Contato', icon: <Mail size={16} /> }
  ];

  const serviceLinks = [
    { name: 'Web Development', path: '/servicos', icon: <Code2 size={16} />, description: 'Sites e sistemas web' },
    { name: 'Mobile Apps', path: '/servicos', icon: <Smartphone size={16} />, description: 'Apps iOS e Android' },
    { name: 'UI/UX Design', path: '/servicos', icon: <Layers size={16} />, description: 'Design de interfaces' },
    { name: 'E-commerce', path: '/servicos', icon: <ShoppingCart size={16} />, description: 'Lojas virtuais' },
    { name: 'SEO Performance', path: '/servicos', icon: <Globe size={16} />, description: 'Otimização e ranking' },
    { name: 'Consultoria', path: '/servicos', icon: <Rocket size={16} />, description: 'Estratégia digital' }
  ];

  const resourceLinks = [
    { name: 'FAQ', path: '/faq', icon: <HelpCircle size={16} /> },
    { name: 'Status', path: '/status', icon: <Activity size={16} />, badge: 'Online' },
    { name: 'Suporte', path: '/suporte', icon: <Headphones size={16} /> }
  ];

  const legalLinks = [
    { name: 'Termos de Uso', path: '/termos', icon: <FileText size={16} /> },
    { name: 'Privacidade', path: '/privacidade', icon: <Lock size={16} /> },
    { name: 'Cookies', path: '/cookies', icon: <Cookie size={16} /> },
    { name: 'LGPD', path: '/lgpd', icon: <ShieldCheck size={16} /> }
  ];

  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/EmannuelMt', label: 'GitHub', color: '#333' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/emannueldev', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaWhatsapp size={18} />, url: 'https://wa.me/5562984317595', label: 'WhatsApp', color: '#25d366' },
    { icon: <FaDiscord size={18} />, url: 'https://discord.com/invite/HsT58yc3UJ', label: 'Discord', color: '#5865f2' }
  ];

  const contacts = [
    { icon: <Mail size={16} />, text: 'emannueldevfullstacksolutions@gmail.com', link: 'mailto:emannueldevfullstacksolutions@gmail.com', description: 'E-mail principal' },
    { icon: <Phone size={16} />, text: '+55 (62) 98431-7595', link: 'tel:+5562984317595', description: 'WhatsApp comercial' },
    { icon: <Headphones size={16} />, text: 'emannueldevfullstacksolutions@gmail.com', link: 'mailto:emannueldevfullstacksolutions@gmail.com', description: 'Suporte técnico' },
    { icon: <MapPin size={16} />, text: 'Anapolis, GO', description: 'Brasil' },
    { icon: <Clock size={16} />, text: 'Seg - Sex, 9h - 18h', description: 'Horário comercial' }
  ];

  const badges = [
    { icon: <Award size={16} />, text: '2 anos', description: 'Experiência no mercado' },
    { icon: <Star size={16} />, text: '50+ projetos', description: 'Entregues com sucesso' },
    { icon: <Heart size={16} />, text: '100% satisfação', description: 'Clientes felizes' },
    { icon: <Rocket size={16} />, text: 'Performance', description: 'Sites otimizados' },
  ];

  return (
    <motion.footer 
      className="footer"
      style={{ opacity: footerOpacity, y: footerY }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-container">
        {/* Main Grid */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-column brand-column">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to="/" className="footer-logo">
                <div className="logo-mark">
                  <Code2 size={28} />
                </div>
                <div className="logo-text">
                  <span className="logo-name">Emannuel<span className="logo-accent">DEV</span></span>
                  <span className="logo-tagline">Desenvolvimento & Design</span>
                </div>
              </Link>
            </motion.div>
            
            <p className="brand-description">
              Transformando ideias em soluções digitais inovadoras com código limpo, 
              design moderno e performance excepcional. Especialista em criar experiências 
              que encantam usuários e impulsionam negócios.
            </p>

            <div className="brand-badges">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="badge-item"
                  whileHover={{ scale: 1.05, y: -2 }}
                  onMouseEnter={() => setActiveTooltip(`badge-${index}`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <span className="badge-icon">{badge.icon}</span>
                  <span className="badge-text">{badge.text}</span>
                  
                  <AnimatePresence>
                    {activeTooltip === `badge-${index}` && (
                      <motion.div 
                        className="badge-tooltip"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        {badge.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-column">
            <h4 className="column-title" onClick={() => toggleAccordion('nav')}>
              <span>Navegação</span>
              <ChevronRight className={`accordion-icon ${activeAccordion === 'nav' ? 'rotated' : ''}`} size={16} />
            </h4>
            
            <ul className={`footer-links ${activeAccordion === 'nav' ? 'active' : ''}`}>
              {navLinks.map((link) => (
                <motion.li 
                  key={link.path}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className={`footer-link ${location.pathname === link.path ? 'active' : ''}`}
                    onMouseEnter={() => setActiveTooltip(link.label)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.label}</span>
                    {link.badge && <span className="link-badge">{link.badge}</span>}
                    
                    <AnimatePresence>
                      {activeTooltip === link.label && (
                        <motion.span 
                          className="link-tooltip"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -5 }}
                        >
                          Ir para {link.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4 className="column-title" onClick={() => toggleAccordion('services')}>
              <span>Serviços</span>
              <ChevronRight className={`accordion-icon ${activeAccordion === 'services' ? 'rotated' : ''}`} size={16} />
            </h4>
            
            <ul className={`footer-links ${activeAccordion === 'services' ? 'active' : ''}`}>
              {serviceLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="footer-link"
                    onMouseEnter={() => setActiveTooltip(link.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                    
                    <AnimatePresence>
                      {activeTooltip === link.name && link.description && (
                        <motion.span 
                          className="link-tooltip"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -5 }}
                        >
                          {link.description}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h4 className="column-title" onClick={() => toggleAccordion('resources')}>
              <span>Recursos</span>
              <ChevronRight className={`accordion-icon ${activeAccordion === 'resources' ? 'rotated' : ''}`} size={16} />
            </h4>
            
            <ul className={`footer-links ${activeAccordion === 'resources' ? 'active' : ''}`}>
              {resourceLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={link.path} className="footer-link">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                    {link.badge && <span className="link-badge success">{link.badge}</span>}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Legal Links */}
            <h4 className="column-title legal-title" onClick={() => toggleAccordion('legal')}>
              <span>Legal</span>
              <ChevronRight className={`accordion-icon ${activeAccordion === 'legal' ? 'rotated' : ''}`} size={16} />
            </h4>
            
            <ul className={`footer-links ${activeAccordion === 'legal' ? 'active' : ''}`}>
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={link.path} className="footer-link">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Newsletter Row */}
        <div className="footer-contact-row">
          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="contact-row-title">Contato</h4>
            <div className="contact-grid">
              {contacts.map((contact, index) => (
                <motion.div 
                  key={index}
                  className="contact-card"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {contact.link ? (
                    <a href={contact.link} className="contact-link">
                      <span className="contact-icon">{contact.icon}</span>
                      <div className="contact-details">
                        <span className="contact-value">{contact.text}</span>
                        {contact.description && (
                          <span className="contact-description">{contact.description}</span>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="contact-info-item">
                      <span className="contact-icon">{contact.icon}</span>
                      <div className="contact-details">
                        <span className="contact-value">{contact.text}</span>
                        {contact.description && (
                          <span className="contact-description">{contact.description}</span>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="contact-row-title">Newsletter</h4>
            <p className="newsletter-description">
              Receba insights exclusivos sobre desenvolvimento, design e tecnologia.
            </p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className={`newsletter-input ${formErrors.email ? 'error' : ''}`}
                  aria-label="E-mail para newsletter"
                />
                <motion.button
                  type="submit"
                  className="newsletter-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Inscrever-se"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              
              <AnimatePresence>
                {formErrors.email && (
                  <motion.div 
                    className="form-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <AlertCircle size={12} />
                    <span>{formErrors.email}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.div 
                    className="subscribe-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle size={14} />
                    <span>Inscrito com sucesso! Bem-vindo(a) à newsletter.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Social & Apps Row */}
        <div className="footer-social-row">
          {/* Social Links */}
          <div className="footer-social">
            <h4 className="social-row-title">Redes Sociais</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <div className="copyright">
              <span>© {year} EmannuelDEV.</span>
              <span className="separator">•</span>
              <span>Todos os direitos reservados.</span>
              <span className="separator">•</span>
              <span>Desenvolvido por EmannuelDEV.</span>
            </div>
            
            <div className="bottom-links">
              <Link to="/termos" className="bottom-link">Termos</Link>
              <span className="separator">•</span>
              <Link to="/privacidade" className="bottom-link">Privacidade</Link>
              <span className="separator">•</span>
              <Link to="/cookies" className="bottom-link">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Voltar ao topo"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
};

export default Footer;