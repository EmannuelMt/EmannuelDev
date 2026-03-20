// Contact.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Star,
  Users,
  Globe,
  Database,
  Shield,
  Heart,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Linkedin,
  Instagram,
  Github,
  ExternalLink,
  Calendar,
  User,
  FileText,
  Download,
  Upload,
  Image,
  Paperclip,
  Smile,
  ThumbsUp,
  X,
  Building2,
  Briefcase,
  Award,
  Target,
  Zap,
  Cpu,
  Network,
  Globe2,
  ShieldCheck,
  MessageCircle,
  PhoneCall,
  LifeBuoy,
  CreditCard,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contato.css';
import logo from '../../assets/images/Logo/logo.svg';
import heroBackground from '../../assets/images/Logo/logobannerhero.jpg';

// Componente de Partículas
const Particles = React.memo(({ count = 30 }) => {
  const particles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      xMove: (Math.random() - 0.5) * 200,
      yMove: (Math.random() - 0.5) * 200
    })), [count]
  );

  return (
    <div className="contact-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          animate={{
            x: [0, particle.xMove, 0],
            y: [0, particle.yMove, 0],
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: 100000,
            repeatType: "loop",
            ease: "easeInOut",
            delay: particle.delay
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
});

// Componente de Card de Contato
const ContactCard = React.memo(({ info, index }) => {
  const [copied, setCopied] = useState(null);

  const handleCopy = useCallback((text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  return (
    <motion.div
      className="contact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="contact-card-icon">{info.icon}</div>
      <h3 className="contact-card-title">{info.title}</h3>
      <p className="contact-card-description">{info.description}</p>
      
      <div className="contact-card-items">
        {info.items.map((item, idx) => (
          <div key={idx} className="contact-card-item">
            <span className="item-label">{item.label}:</span>
            <div className="item-value-wrapper">
              {item.link ? (
                <a 
                  href={item.link} 
                  className="item-value"
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span className="item-value">{item.value}</span>
              )}
              {item.link?.includes('mailto:') && (
                <button 
                  className="copy-button"
                  onClick={() => handleCopy(item.value, `email-${index}-${idx}`)}
                  title="Copiar e-mail"
                >
                  {copied === `email-${index}-${idx}` ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

// Componente de Canal de Suporte
const SupportChannel = React.memo(({ channel, index }) => (
  <motion.a
    href={channel.link}
    className="support-channel-card"
    target={channel.external ? '_blank' : undefined}
    rel={channel.external ? 'noopener noreferrer' : undefined}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="channel-icon" style={{ background: `linear-gradient(135deg, ${channel.color}20, ${channel.color}40)` }}>
      {channel.icon}
    </div>
    <div className="channel-content">
      <h3 className="channel-title">{channel.title}</h3>
      <p className="channel-description">{channel.description}</p>
      <span className="channel-response">
        <Clock size={12} />
        {channel.responseTime}
      </span>
    </div>
    <div className="channel-arrow">
      <ArrowRight size={16} />
    </div>
  </motion.a>
));

// Componente de FAQ Item
const FAQItem = React.memo(({ faq, index, isOpen, onToggle }) => (
  <motion.div 
    className={`faq-item ${isOpen ? 'open' : ''}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <button 
      className="faq-question"
      onClick={() => onToggle(index)}
    >
      <div className="faq-question-content">
        <span className="faq-icon">{faq.icon}</span>
        <h3>{faq.question}</h3>
      </div>
      <motion.div 
        className="faq-toggle"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="faq-answer"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>{faq.answer}</p>
          {faq.link && (
            <Link to={faq.link} className="faq-link">
              Saiba mais
              <ArrowRight size={14} />
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
));

const Contact = () => {
  const { scrollY } = useScroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    department: 'geral'
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('geral');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const supportRef = useRef(null);
  const faqRef = useRef(null);

  // Animações baseadas no scroll
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.98]);

  // Dados de contato
  const contactInfo = useMemo(() => [
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      description: 'Disponível 24/7 para emergências',
      items: [
        { label: 'Comercial', value: '+55 (62) 98431-7595', link: 'tel:+5562984317595' },
        { label: 'WhatsApp', value: '+55 (62) 98431-7595', link: 'https://wa.me/5562984317595' }
      ]
    },
    {
      icon: <Mail size={24} />,
      title: 'E-mail',
      description: 'Respondemos em até 2 horas',
      items: [
        { label: 'Geral', value: 'emannueldevfullstacksolutions@gmail.com', link: 'mailto:emannueldevfullstacksolutions@gmail.com' }
      ]
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      description: 'Baseado em Anápolis, GO, Brasil',
      items: [
        { label: 'Cidade', value: 'Anápolis, GO, Brasil' }
      ]
    }
  ], []);

  // Departamentos
  const departments = useMemo(() => [
    { id: 'geral', label: 'Geral', description: 'Assuntos gerais' },
    { id: 'orcamento', label: 'Orçamento', description: 'Solicitar orçamento' },
    { id: 'suporte', label: 'Suporte', description: 'Ajuda técnica' },
    { id: 'parcerias', label: 'Parcerias', description: 'Tornar-se parceiro' },
    { id: 'freela', label: 'Freela', description: 'Projetos freelance' },
    { id: 'outros', label: 'Outros', description: 'Outros assuntos' }
  ], []);

  // Canais de suporte
  const supportChannels = useMemo(() => [
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      description: 'Atendimento rápido via WhatsApp',
      responseTime: 'Resposta em minutos',
      link: 'https://wa.me/5562984317595',
      color: '#2563EB',
      external: true
    },
    {
      icon: <Mail size={24} />,
      title: 'E-mail',
      description: 'Envie suas dúvidas por e-mail',
      responseTime: 'Resposta em até 24h',
      link: 'mailto:emannueldevfullstacksolutions@gmail.com',
      color: '#3B82F6',
      external: true
    },
    {
      icon: <PhoneCall size={24} />,
      title: 'Telefone',
      description: 'Ligação direta',
      responseTime: 'Disponível comercial',
      link: 'tel:+5562984317595',
      color: '#60A5FA',
      external: true
    },
    {
      icon: <LifeBuoy size={24} />,
      title: 'Base de Conhecimento',
      description: 'Artigos e tutoriais',
      responseTime: 'Autoatendimento 24/7',
      link: '/ajuda',
      color: '#93C5FD',
      external: false
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Chat Online',
      description: 'Converse agora mesmo',
      responseTime: 'Resposta imediata',
      link: '/chat',
      color: '#BFDBFE',
      external: false
    },
    {
      icon: <Headphones size={24} />,
      title: 'Suporte Técnico',
      description: 'Ajuda especializada',
      responseTime: 'Atendimento prioritário',
      link: '/suporte',
      color: '#DBEAFE',
      external: false
    }
  ], []);

  // FAQ
  const faqs = useMemo(() => ({
    geral: [
      {
        icon: <HelpCircle size={20} />,
        question: 'Como posso solicitar um orçamento?',
        answer: 'Você pode solicitar um orçamento preenchendo o formulário de contato acima ou enviando um e-mail para vendas@devstudio.com com detalhes do seu projeto. Responderei em até 24 horas.'
      },
      {
        icon: <CreditCard size={20} />,
        question: 'Quais são as formas de pagamento?',
        answer: 'Aceito pagamentos via PIX, transferência bancária, cartão de crédito (através de link de pagamento) e PayPal. Para projetos maiores, é possível parcelar.'
      },
      {
        icon: <Clock size={20} />,
        question: 'Quanto tempo leva para desenvolver um projeto?',
        answer: 'O prazo varia conforme a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto sistemas mais complexos podem levar de 2 a 6 meses. Forneço um cronograma detalhado antes de iniciar.'
      },
      {
        icon: <Shield size={20} />,
        question: 'Como funciona o suporte pós-entrega?',
        answer: 'Ofereço 30 dias de suporte gratuito para correção de bugs e ajustes menores. Após esse período, é possível contratar planos de manutenção contínua.'
      }
    ],
    tecnico: [
      {
        icon: <Cpu size={20} />,
        question: 'Quais tecnologias você utiliza?',
        answer: 'Trabalho principalmente com React, Next.js, Node.js, TypeScript, Python e diversas outras tecnologias modernas. Para projetos mobile, utilizo React Native ou Flutter.'
      },
      {
        icon: <Database size={20} />,
        question: 'Como é feita a hospedagem?',
        answer: 'Posso auxiliar na hospedagem em plataformas como Vercel, Netlify, AWS, Google Cloud, ou em servidores tradicionais. Ofereço orientação sobre a melhor opção para cada projeto.'
      },
      {
        icon: <ShieldCheck size={20} />,
        question: 'Como é garantida a segurança do projeto?',
        answer: 'Sigo as melhores práticas de segurança, incluindo validação de inputs, proteção contra ataques comuns (XSS, CSRF), criptografia de dados sensíveis e uso de HTTPS.'
      }
    ]
  }), []);

  // Redes sociais
  const socialLinks = useMemo(() => [
    { icon: <Github size={20} />, link: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, link: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, link: 'https://twitter.com', label: 'Twitter' }
  ], []);

  // Validação do formulário
  const validateForm = useCallback(() => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'E-mail inválido';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Telefone é obrigatório';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    }
    
    return errors;
  }, [formData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  }, [formErrors]);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 5 * 1024 * 1024) {
        setSelectedFile(file);
      } else {
        alert('Arquivo muito grande. Tamanho máximo: 5MB');
      }
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus({
        type: 'error',
        message: 'Por favor, preencha todos os campos obrigatórios.'
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    // Simular envio
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        department: 'geral'
      });
      setSelectedFile(null);
      setIsSubmitting(false);
    }, 1500);
  }, [formData, validateForm]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section ref={heroRef} className="contact-hero" id="hero">
        <div className="hero-background">
          <img src={heroBackground} alt="Hero Background" className="hero-image" />
          <div className="hero-overlay"></div>
          <div className="hero-gradient"></div>
          <Particles count={40} />
        </div>

        <motion.div 
          className="hero-content"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            <MessageSquare size={16} />
            <span>Contato</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vamos <span className="title-gradient">conversar</span>
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Estou disponível para novos projetos, parcerias ou apenas para trocar uma ideia. 
            Entre em contato e vamos criar algo incrível juntos!
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('form')}
            >
              <span>Enviar mensagem</span>
              <Send size={20} />
            </button>
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('suporte')}
            >
              <Headphones size={18} />
              <span>Canais de suporte</span>
            </button>
          </motion.div>

          <motion.div 
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => scrollToSection('contato')}
          >
            <span>Conheça os canais</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>

        
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section" id="contato">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <Mail size={16} />
              Informações
            </span>
            <h2 className="section-title">
              Formas de <span className="title-gradient">contato</span>
            </h2>
            <p className="section-description">
              Escolha a melhor forma de entrar em contato comigo
            </p>
          </motion.div>

          <div className="contact-cards-grid">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} info={info} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="form" ref={formRef}>
        <div className="container">
          <div className="form-grid">
            <motion.div 
              className="form-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">
                <Send size={16} />
                Envie uma mensagem
              </span>
              
              <h2 className="section-title">
                Vamos <span className="title-gradient">trabalhar</span> juntos?
              </h2>
              
              <p className="section-description left">
                Preencha o formulário ao lado com detalhes sobre seu projeto ou dúvida. 
                Responderei o mais breve possível, geralmente em até 24 horas.
              </p>

              <div className="form-features">
                <div className="form-feature">
                  <CheckCircle2 size={18} />
                  <span>Orçamento sem compromisso</span>
                </div>
                <div className="form-feature">
                  <CheckCircle2 size={18} />
                  <span>Resposta em até 24h</span>
                </div>
                <div className="form-feature">
                  <CheckCircle2 size={18} />
                  <span>Consultoria gratuita</span>
                </div>
                <div className="form-feature">
                  <CheckCircle2 size={18} />
                  <span>Suporte pós-projeto</span>
                </div>
              </div>

              <div className="social-links">
                <h4>Redes Sociais</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome *</label>
                    <div className="input-wrapper">
                      <User size={16} className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${formErrors.name ? 'error' : ''}`}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    {formErrors.name && (
                      <span className="error-message">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <div className="input-wrapper">
                      <Mail size={16} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${formErrors.email ? 'error' : ''}`}
                        placeholder="seu@email.com"
                      />
                    </div>
                    {formErrors.email && (
                      <span className="error-message">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefone *</label>
                    <div className="input-wrapper">
                      <Phone size={16} className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`form-input ${formErrors.phone ? 'error' : ''}`}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="error-message">{formErrors.phone}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Empresa</label>
                    <div className="input-wrapper">
                      <Building2 size={16} className="input-icon" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="department">Assunto</label>
                  <div className="select-wrapper">
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {dept.label} - {dept.description}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="select-arrow" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Título</label>
                  <div className="input-wrapper">
                    <MessageSquare size={16} className="input-icon" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Título da mensagem"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                    rows={5}
                    placeholder="Descreva seu projeto, dúvida ou necessidade..."
                  />
                  {formErrors.message && (
                    <span className="error-message">{formErrors.message}</span>
                  )}
                </div>

                <div className="form-group file-group">
                  <label htmlFor="file" className="file-label">
                    <Paperclip size={16} />
                    <span>Anexar arquivo (opcional, max. 5MB)</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="file-input"
                    accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                  />
                  {selectedFile && (
                    <div className="selected-file">
                      <FileText size={14} />
                      <span>{selectedFile.name}</span>
                      <button 
                        type="button" 
                        onClick={() => setSelectedFile(null)}
                        className="remove-file"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>

                <AnimatePresence>
                  {formStatus && (
                    <motion.div 
                      className={`form-status ${formStatus.type}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {formStatus.type === 'success' ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <AlertCircle size={18} />
                      )}
                      <span>{formStatus.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar mensagem</span>
                    </>
                  )}
                </button>

                <p className="form-disclaimer">
                  Seus dados estão seguros. Não enviarei spam.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="support-channels-section" id="suporte" ref={supportRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <Headphones size={16} />
              Canais de Atendimento
            </span>
            <h2 className="section-title">
              Escolha o <span className="title-gradient">canal</span> que preferir
            </h2>
            <p className="section-description">
              Ofereço múltiplas formas de contato para sua conveniência
            </p>
          </motion.div>

          <div className="support-channels-grid">
            {supportChannels.map((channel, index) => (
              <SupportChannel key={index} channel={channel} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq" ref={faqRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <HelpCircle size={16} />
              FAQ
            </span>
            <h2 className="section-title">
              Perguntas <span className="title-gradient">frequentes</span>
            </h2>
            <p className="section-description">
              Tire suas dúvidas antes de entrar em contato
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <div className="faq-categories">
            {Object.keys(faqs).map((category) => (
              <button
                key={category}
                className={`category-btn ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {category === 'geral' && 'Geral'}
                {category === 'tecnico' && 'Técnico'}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="faq-list">
            {faqs[activeTab]?.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openFaqIndex === index}
                onToggle={setOpenFaqIndex}
              />
            ))}
          </div>

          {/* FAQ Contact */}
          <motion.div 
            className="faq-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="faq-contact-icon">
              <HelpCircle size={24} />
            </div>
            <div className="faq-contact-content">
              <h3>Não encontrou o que procurava?</h3>
              <p>Entre em contato diretamente que responderei suas dúvidas.</p>
            </div>
            <button 
              className="faq-contact-button"
              onClick={() => scrollToSection('form')}
            >
              <span>Enviar mensagem</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="final-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">
              Pronto para começar <span className="title-gradient">seu projeto</span>?
            </h2>
            <p className="cta-description">
              Vamos transformar sua ideia em realidade com um desenvolvimento de qualidade.
            </p>
            <div className="cta-buttons">
              <button 
                className="cta-button-primary"
                onClick={() => scrollToSection('form')}
              >
                <span>Solicitar orçamento</span>
                <ArrowRight size={18} />
              </button>
              <a 
                href="mailto:emannueldevfullstacksolutions@gmail.com" 
                className="cta-button-secondary"
              >
                <Mail size={18} />
                <span>emannueldevfullstacksolutions@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;