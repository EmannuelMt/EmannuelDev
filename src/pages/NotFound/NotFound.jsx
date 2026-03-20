import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  AlertCircle, 
  ArrowLeft, 
  RefreshCw, 
  Code,
  Mail, 
  Phone, 
  MessageSquare,
  MapPin,
  Clock,
  ChevronRight,
  Shield,
  AlertTriangle,
  Compass,
  Rocket,
  Sparkles,
  Heart,
  Coffee,
  Globe,
  Award,
  Star,
  Navigation,
  HelpCircle,
  Send,
  Zap,
  Github,
  Linkedin,
  Instagram,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const contactChannels = [
    { 
      icon: <Mail size={18} />, 
      title: 'E-mail', 
      description: 'emannueldevfullstacksolutions@gmail.com',
      action: 'Enviar mensagem',
      link: 'mailto:emannueldevfullstacksolutions@gmail.com',
      color: 'var(--blue-800)'
    },
    { 
      icon: <Phone size={18} />, 
      title: 'Telefone', 
      description: '(62) 9 8431-7595',
      action: 'Ligar agora',
      link: 'tel:+556298431-7595',
      color: 'var(--blue-700)'
    },
    { 
      icon: <MessageSquare size={18} />, 
      title: 'WhatsApp', 
      description: 'Atendimento rápido',
      action: 'Iniciar conversa',
      link: 'https://wa.me/5562984317595',
      color: 'var(--blue-600)'
    },
    { 
      icon: <Terminal size={18} />, 
      title: 'Discord', 
      description: 'Comunidade Dev',
      action: 'Entrar no servidor',
      link: 'https://discord.gg/qCGJEGQxvS',
      color: 'var(--blue-500)'
    }
  ];

  const quickLinks = [
    { name: 'Início', path: '/', icon: Home, description: 'Voltar à página principal', color: 'var(--blue-800)' },
    { name: 'Serviços', path: '/servicos', icon: Code, description: 'Soluções de desenvolvimento', color: 'var(--blue-700)' },
    { name: 'Portfólio', path: '/portfolio', icon: Rocket, description: 'Projetos realizados', color: 'var(--blue-600)' },
    { name: 'Contato', path: '/contato', icon: Mail, description: 'Fale com a equipe', color: 'var(--blue-500)' },
  ];

  const techStacks = [
    { name: 'React/Next.js', icon: <Code size={14} /> },
    { name: 'Node.js', icon: <Server size={14} /> },
    { name: 'Python/Django', icon: <Database size={14} /> },
    { name: 'Mobile', icon: <Smartphone size={14} /> },
    { name: 'Cloud/AWS', icon: <Cloud size={14} /> },
    { name: 'UI/UX', icon: <Monitor size={14} /> },
  ];

  const helpfulTips = [
    'Verifique se o endereço foi digitado corretamente',
    'Use o menu de navegação para encontrar o que procura',
    'Nossos canais de atendimento estão sempre disponíveis',
    'Tente acessar a página inicial e navegar a partir de lá',
    'Você pode usar a busca para encontrar projetos específicos'
  ];

  const socialLinks = [
    { icon: <Github size={18} />, link: 'https://github.com/EmannuelMt', label: 'GitHub' },
    { icon: <Linkedin size={18} />, link: 'https://linkedin.com/in/emannuelmt', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, link: 'https://instagram.com/emannuel_mt', label: 'Instagram' }
  ];

  return (
    <div className="not-found">
      {/* Background Elements */}
      <div className="not-found-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
        
        {/* Floating Code Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-code"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 16}px`,
              fontFamily: 'monospace'
            }}
          >
            {'{ }'}
          </motion.div>
        ))}

        {/* Floating Numbers */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`num-${i}`}
            className="floating-number"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              rotate: [0, 360],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
            }}
          >
            404
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="not-found-container">
        {/* Logo */}
        <motion.div 
          className="logo-wrapper"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <Link to="/" className="logo-link">
            <div className="logo-mark">
              <Code size={32} />
            </div>
            <div className="logo-text">
              <span className="logo-name">Dev<span className="logo-accent">Studio</span></span>
              <span className="logo-tagline">Soluções em Desenvolvimento</span>
            </div>
          </Link>
        </motion.div>

        {/* Error Card */}
        <motion.div 
          className="error-card glass-effect"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`
          }}
        >
          {/* Status Code */}
          <div className="error-code-wrapper">
            <motion.div 
              className="error-code"
              animate={{ 
                rotate: [0, 3, -3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="code-4">4</span>
              <motion.span 
                className="code-0"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                0
              </motion.span>
              <span className="code-4">4</span>
            </motion.div>
            
            <div className="error-status">
              <AlertTriangle size={20} />
              <span>Página não encontrada</span>
            </div>
          </div>

          {/* Message */}
          <motion.div 
            className="message-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="greeting">
              <span className="greeting-text">Oops! Parece que essa rota não existe...</span>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="greeting-emoji"
              >
                😕
              </motion.div>
            </div>

            <p className="message-main">
              A página que você está procurando pode ter sido removida, ter seu nome alterado 
              ou estar temporariamente indisponível. Nossa equipe de desenvolvimento já foi 
              notificada sobre este acesso.
            </p>

            <p className="message-secondary">
              Enquanto isso, que tal explorar nossos serviços de desenvolvimento ou entrar em 
              contato com nossa equipe? Estamos prontos para criar soluções incríveis para você!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="action-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              onClick={() => navigate(-1)}
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={18} />
              <span>Voltar</span>
            </motion.button>

            <motion.button
              onClick={handleRefresh}
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              <RefreshCw size={18} className={isLoading ? 'spinning' : ''} />
              <span>{isLoading ? 'Atualizando...' : 'Tentar novamente'}</span>
            </motion.button>

            <Link to="/" className="btn-home">
              <Home size={18} />
              <span>Início</span>
            </Link>
          </motion.div>

          {/* Auto Redirect Info */}
          <motion.div 
            className="redirect-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="redirect-progress">
              <motion.div 
                className="progress-bar"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 30, ease: 'linear' }}
              />
            </div>
            <div className="redirect-text">
              <Clock size={14} />
              <span>
                {countdown > 0 
                  ? `Redirecionando para a página inicial em ${countdown}s` 
                  : 'Redirecionando agora...'}
              </span>
            </div>
          </motion.div>

          {/* Helpful Tip */}
          <motion.div 
            className="helpful-tip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <HelpCircle size={14} />
            <span>Dica: {helpfulTips[Math.floor(Math.random() * helpfulTips.length)]}</span>
          </motion.div>
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div 
          className="tech-stack"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="tech-stack-content">
            <span className="tech-stack-label">Tecnologias que dominamos:</span>
            <div className="tech-stack-items">
              {techStacks.map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-stack-item"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  {tech.icon}
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Channels */}
        <motion.div 
          className="contact-channels"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="channels-title">
            <Code size={18} />
            <span>Canais de Contato</span>
          </h3>

          <p className="channels-description">
            Precisa de ajuda com um projeto? Nossa equipe está pronta para atender você.
          </p>

          <div className="channels-grid">
            {contactChannels.map((channel, index) => (
              <motion.a
                key={index}
                href={channel.link}
                className="channel-card glass-effect"
                style={{ '--channel-color': channel.color }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: 'spring', stiffness: 400 }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <div className="channel-icon-wrapper">
                  {channel.icon}
                </div>
                <div className="channel-info">
                  <h4>{channel.title}</h4>
                  <p>{channel.description}</p>
                  <span className="channel-action">
                    {channel.action}
                    <Send size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="quick-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="quick-links-title">Navegação Rápida</h3>
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
              >
                <Link to={link.path} className="quick-link glass-effect">
                  <div className="quick-link-icon">
                    <link.icon size={16} />
                  </div>
                  <div className="quick-link-content">
                    <span className="quick-link-name">{link.name}</span>
                    <small className="quick-link-desc">{link.description}</small>
                  </div>
                  <ChevronRight size={14} className="link-arrow" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="social-links-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link glass-effect"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="not-found-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="footer-content">
            <div className="footer-section">
              <Shield size={14} />
              <span>Desenvolvimento seguro • Código limpo • Boas práticas</span>
            </div>
            
            <div className="footer-section">
              <Clock size={14} />
              <span>Suporte técnico • Horário comercial</span>
            </div>
            
            <div className="footer-section">
              <MapPin size={14} />
              <span>São Paulo • Brasil</span>
            </div>
          </div>

          <div className="footer-made-with">
            <span>Feito com</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={12} className="heart-icon" />
            </motion.div>
            <span>e</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Coffee size={12} className="coffee-icon" />
            </motion.div>
            <span>• DevStudio © {new Date().getFullYear()}</span>
          </div>

          <div className="footer-badges">
            <span className="badge glass-effect">
              <Award size={10} />
              React Specialist
            </span>
            <span className="badge glass-effect">
              <Star size={10} />
              Full Stack
            </span>
            <span className="badge glass-effect">
              <Terminal size={10} />
              Clean Code
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;