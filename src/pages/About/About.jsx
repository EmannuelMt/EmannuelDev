// About.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Server,
  ChevronRight,
  Play,
  CheckCircle2,
  Users,
  Star,
  Send,
  Phone,
  Mail,
  Sparkles,
  Award,
  Target,
  Cpu,
  Hexagon,
  Gauge,
  ExternalLink,
  FileCode,
  Layout,
  Database,
  Cloud,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ChevronDown,
  Briefcase,
  Clock,
  MapPin,
  MessageSquare,
  Layers,
  Palette,
  Rocket,
  ShoppingCart,
  BarChart3,
  Headphones,
  HelpCircle,
  Heart,
  BookOpen,
  Coffee,
  Smile,
  Quote,
  Download,
  Eye,
  UserPlus,
  Calendar,
  Building2,
  TrendingUp,
  Network,
  Blocks,
  Boxes,
  Infinity,
  Hexagon as HexagonIcon,
  Atom,
  Braces,
  Terminal,
  GitBranch,
  Figma,
  PenTool,
  Camera,
  Video,
  Music,
  PenSquare,
  Pen,
  Brush,
  Paintbrush,
  Crop,
  Scissors,
  Ruler,
  Compass,
  Move,
  ZoomIn,
  ZoomOut,
  RotateCw,
  RotateCcw,
  Maximize,
  Minimize,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  BatteryWarning,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  WifiHigh,
  WifiLow,
  WifiZero,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Wrench,
  Hammer,
  Pickaxe,
  Drill,
  Wrench as WrenchIcon,
  Hammer as HammerIcon,
  Pickaxe as PickaxeIcon,
  Drill as DrillIcon,
  
  Brush as BrushIcon,
  Paintbrush as PaintbrushIcon,
  Crop as CropIcon,
  Scissors as ScissorsIcon,
  Ruler as RulerIcon,
  Compass as CompassIcon,
  Move as MoveIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  RotateCw as RotateCwIcon,
  RotateCcw as RotateCcwIcon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from '../../assets/images/Logo/logo.svg';
import heroBackground from '../../assets/images/Logo/logobannerhero.jpg';
import projSuper from '../../assets/images/Home/projSuper.png';
import projDoce from '../../assets/images/Home/projDoce.png';
import projInstituto from '../../assets/images/Home/projInstituto.png';
import projBurge from '../../assets/images/Home/projBurge.png';
import projTransita from '../../assets/images/Home/projTransita.png';
import projEcos from '../../assets/images/Home/projEcos.png';
import myPhoto from '../../assets/images/About/me.jpg';

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
    <div className="about-particles">
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

// Componente de Card de Linguagem
const LanguageCard = React.memo(({ language, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="language-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="language-icon-wrapper">
        <div className="language-icon">{language.icon}</div>
        <motion.div 
          className="language-glow"
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.3 : 0.1
          }}
        />
      </div>
      <h3 className="language-name">{language.name}</h3>
      <p className="language-description">{language.description}</p>
      <div className="language-level">
        <div className="level-bar">
          <motion.div 
            className="level-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${language.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
        <span className="level-text">{language.level}%</span>
      </div>
      <div className="language-projects">
        <span>{language.projects} projetos</span>
        <span className="project-badge">{language.experience} anos</span>
      </div>
    </motion.div>
  );
});

// Componente de Card de Portfólio
const PortfolioCard = React.memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="portfolio-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="portfolio-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="portfolio-image"
          loading="lazy"
        />
        <motion.div 
          className="portfolio-overlay"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="portfolio-tech">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="portfolio-content">
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-description">{project.description}</p>
        <div className="portfolio-meta">
          <span className="portfolio-category">
            <Layers size={14} />
            {project.category}
          </span>
          <span className="portfolio-year">
            <Calendar size={14} />
            {project.year}
          </span>
        </div>
        <div className="portfolio-links">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="portfolio-link"
          >
            <ExternalLink size={14} />
            <span>Demo</span>
          </a>
          <a 
            href={project.code} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="portfolio-link"
          >
            <Github size={14} />
            <span>Código</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
});

// Componente de Card de Habilidade
const SkillCard = React.memo(({ skill, index }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
    <div className="skill-info">
      <span className="skill-name">{skill.name}</span>
      <span className="skill-percentage">{skill.percentage}%</span>
    </div>
    <div className="skill-bar">
      <motion.div 
        className="skill-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 }}
      />
    </div>
  </motion.div>
));

const About = () => {
  const { scrollY } = useScroll();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [showContactModal, setShowContactModal] = useState(false);
  
  const heroRef = useRef(null);
  const languagesRef = useRef(null);
  const portfolioRef = useRef(null);

  // Animações baseadas no scroll
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.98]);
  const heroBlur = useTransform(scrollY, [0, 300], [0, 4]);

  // Dados pessoais
  const personalInfo = {
    name: 'Emannuel Dev',
    role: 'Desenvolvedor Full Stack',
    location: 'São Paulo, Brasil',
    email: 'emannueldevfullstacksolutions@gmail.com',
    phone: '+55 (62 98431-7595',
    bio: 'Sou um desenvolvedor full stack apaixonado por criar soluções digitais inovadoras. Com mais de 5 anos de experiência, já trabalhei em projetos para diversos segmentos, sempre focado em entregar código de qualidade e experiências excepcionais.',
    experience: 1,
    projects: 10,
    clients: 15,
    satisfaction: 98
  };

  // Linguagens e tecnologias
  const languages = [
    {
      name: 'React',
      icon: <Code size={32} />,
      description: 'Desenvolvimento de interfaces modernas e performáticas',
      level: 85,
      projects: 15,
      experience: 1
    },
    {
      name: 'Node.js',
      icon: <Server size={32} />,
      description: 'APIs escaláveis e sistemas back-end robustos',
      level: 50,
      projects: 20,
      experience: 1
    },
    {
      name: 'TypeScript',
      icon: <Braces size={32} />,
      description: 'Código tipado e mais seguro',
      level: 33,
      projects: 2,
      experience: 1
    },
    {
      name: 'Python',
      icon: <Terminal size={32} />,
      description: 'Automação, análise de dados e back-end',
      level: 60,
      projects: 0,
      experience: 1
    },
    {
      name: 'React Native',
      icon: <Smartphone size={32} />,
      description: 'Aplicativos mobile para iOS e Android',
      level: 22,
      projects: 0,
      experience: 1
    },
    {
      name: 'MongoDB',
      icon: <Database size={32} />,
      description: 'Bancos de dados NoSQL escaláveis',
      level: 51,
      projects:0,
      experience: 1
    },
    {
      name: 'PostgreSQL',
      icon: <Database size={32} />,
      description: 'Bancos relacionais e queries otimizadas',
      level: 68,
      projects: 0,
      experience: 1
    },
    {
      name: 'Docker',
      icon: <Blocks size={32} />,
      description: 'Containerização e ambientes isolados',
      level: 25,
      projects: 0,
      experience: 1
    },
    {
      name: 'AWS',
      icon: <Cloud size={32} />,
      description: 'Serviços de cloud e infraestrutura',
      level: 1,
      projects: 0,
      experience: 1
    },
    {
      name: 'Figma',
      icon: <PenTool size={32} />,
      description: 'Design de interfaces e prototipação',
      level: 22,
      projects: 0,
      experience: 1
    },
    {
      name: 'Git',
      icon: <GitBranch size={32} />,
      description: 'Controle de versão e colaboração',
      level:72,
      projects: 15,
      experience:1
    },
    {
      name: 'Tailwind CSS',
      icon: <Paintbrush size={32} />,
      description: 'Estilização rápida e responsiva',
      level: 75,
      projects:3,
      experience: 1
    }
  ];

  // Habilidades
  const skills = [
    { name: 'Front-end Development', percentage: 95 },
    { name: 'Back-end Development', percentage: 90 },
    { name: 'Banco de Dados', percentage: 55 },
    { name: 'DevOps', percentage: 45 },
    { name: 'UI/UX Design', percentage: 70 },
    { name: 'Mobile Development', percentage: 30},
    { name: 'API Design', percentage: 19},
    { name: 'Performance Optimization', percentage: 82 }
  ];

  // Projetos do portfólio
  const portfolio = [
    {
      id: 1,
      title: 'Supermercado Premium',
      category: 'E-commerce',
      description: 'E-commerce completo para um supermercado, com catálogo de produtos, carrinho de compras e sistema de pagamento integrado.',
      image: projSuper,
      technologies: ['Next.js', 'Stripe', 'Prisma'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Doce Encanto',
      category: 'Web',
      description: 'Site institucional para uma confeitaria, com design elegante e responsivo, galeria de produtos e formulário de contato.',
      image: projDoce,
      technologies: ['React Native', 'Node.js', 'Socket.io'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Instituto Financeiro',
      category: 'Sistema Web',
      description: 'Sistema dinaceio para emprestimos bancarios,agricola e pessoal,com dashboard de controle e relatórios financeiros.',
      image: projInstituto,
      technologies: ['React', 'D3.js', 'Django'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'BurgerArtisane',
      category: 'Web',
      description: 'Sistema de delivery para uma hamburgueria artesanal, com cardápio interativo, personalização de pedidos e rastreamento em tempo real..',
      image: projBurge,
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Transita.IA - Plataforma de Logística',
      category: 'Sistema Web',
      description: 'Plataforma de logística com integração de pagamentos, gestão de frotas,multas,motoristas,funcionarios e dashboard administrativo.',
      image: projTransita,
      technologies: ['React', 'Node.js', 'Azure', 'JavaScript'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Ecos da Realidade - Plataforma de Rpg',
      category: 'web',
      description: 'Site web open sorce para comunidade de jogadores de rpg de ordem paranormal,com sistema de criação de personagens,gerenciamento de campanhas e fórum de discussão.',
      image: projEcos,
      technologies: ['React', 'JavaScript', 'Firebase'],
      link: '#',
      github: '#'
    }
  ];

  // Filtros do portfólio
  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'e-commerce', label: 'E-commerce' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web-app', label: 'Web Apps' },
    { id: 'sistema', label: 'Sistemas' },
    { id: 'website', label: 'Websites' },
    { id: 'api', label: 'APIs' }
  ];

  // Filtrar projetos
  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'todos') return portfolio;
    return portfolio.filter(project => 
      project.category.toLowerCase().replace(' ', '-') === activeFilter
    );
  }, [activeFilter, portfolio]);

  // Estatísticas
  const stats = [
    { value: '1', label: 'Anos de experiência', icon: <Calendar size={24} /> },
    { value: '10', label: 'Projetos entregues', icon: <Briefcase size={24} /> },
  ];

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
    <div className="about-page">
      {/* Hero Banner */}
      <section ref={heroRef} className="about-hero" id="hero">
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
            <Sparkles size={16} />
            <span>Sobre Mim</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desenvolvedor <span className="title-gradient">Full Stack</span>
            <br />& Entusiasta de Tecnologia
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transformo ideias em soluções digitais inovadoras, combinando criatividade 
            e tecnologia para criar experiências excepcionais que realmente fazem a diferença.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('sobre')}
            >
              <span>Conheça mais</span>
              <ArrowRight size={20} />
            </button>
            <button 
              className="btn-secondary"
              onClick={() => setShowContactModal(true)}
            >
              <MessageSquare size={18} />
              <span>Entrar em contato</span>
            </button>
          </motion.div>

          <motion.div 
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => scrollToSection('sobre')}
          >
            <span>Conheça mais</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>

        
      </section>

      {/* Sobre Section */}
      <section className="about-section" id="sobre">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-content-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">
                <Heart size={16} />
                Quem Sou
              </span>
              
              <h2 className="section-title">
                Apaixonado por <span className="title-gradient">criar</span>
                <br />soluções digitais
              </h2>

              <div className="about-text">
                <p>
                  Olá! Meu nome é <strong>{personalInfo.name}</strong> e sou um desenvolvedor 
                  full stack com mais de {personalInfo.experience} anos de experiência criando 
                  soluções digitais inovadoras. Minha jornada na programação começou quando 
                  descobri o poder de transformar ideias em realidade através do código.
                </p>
                <p>
                  Ao longo da minha carreira, já trabalhei em mais de {personalInfo.projects} projetos 
                  para {personalInfo.clients} clientes de diversos segmentos, sempre focado em entregar 
                  código de qualidade, performance excepcional e experiências que encantam os usuários.
                </p>
                <p>
                  Acredito que a tecnologia é uma ferramenta poderosa para resolver problemas reais 
                  e criar impacto positivo no mundo. Por isso, estou sempre buscando aprender novas 
                  tecnologias e aprimorar minhas habilidades para oferecer as melhores soluções.
                </p>
              </div>

              <div className="about-info">
                <div className="info-item">
                  <MapPin size={18} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <Mail size={18} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="info-item">
                  <Phone size={18} />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Twitter size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="about-content-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="profile-card">
                <div className="profile-image-wrapper">
                  <img 
                    src={myPhoto} 
                    alt="Foto de Emannuel Dev" 
                    className="profile-photo" 
                  />
                  <div className="profile-glow"></div>
                </div>
                <h3 className="profile-name">{personalInfo.name}</h3>
                <p className="profile-role">{personalInfo.role}</p>
                
                <div className="profile-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="profile-stat">
                      <div className="profile-stat-icon">{stat.icon}</div>
                      <div>
                        <div className="profile-stat-value">{stat.value}</div>
                        <div className="profile-stat-label">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  className="download-cv"
                  onClick={() => window.open('/cv.pdf', '_blank')}
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div 
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skills-title">Minhas Habilidades</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Linguagens Section */}
      <section className="languages-section" id="linguagens" ref={languagesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <Code size={16} />
              Tecnologias
            </span>
            <h2 className="section-title">
              Linguagens & <span className="title-gradient">Ferramentas</span>
            </h2>
            <p className="section-description">
              Tecnologias que domino e utilizo no dia a dia
            </p>
          </motion.div>

          <div className="languages-grid">
            {languages.map((language, index) => (
              <LanguageCard key={index} language={language} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section className="portfolio-section" id="portfolio" ref={portfolioRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <Briefcase size={16} />
              Portfólio
            </span>
            <h2 className="section-title">
              Projetos <span className="title-gradient">recentes</span>
            </h2>
            <p className="section-description">
              Conheça alguns dos projetos que desenvolvi
            </p>
          </motion.div>

          {/* Filtros */}
          <motion.div 
            className="portfolio-filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Grid de Projetos */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="portfolio-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPortfolio.map((project, index) => (
                <PortfolioCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Ver mais */}
          <motion.div 
            className="portfolio-more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://github.com/EmannuelMt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="more-link"
            >
              <Github size={16} />
              <span>Ver mais no GitHub</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="cta-background">
              <div className="cta-gradient"></div>
            </div>

            <div className="cta-content">
              <h2 className="cta-title">
                Vamos <span className="title-gradient">trabalhar</span> juntos?
              </h2>
              <p className="cta-description">
                Estou disponível para novos projetos, freelas ou oportunidades de trabalho. 
                Se você tem uma ideia ou projeto em mente, entre em contato e vamos conversar!
              </p>

              <div className="cta-features">
                <div className="cta-feature">
                  <CheckCircle2 size={18} />
                  <span>Orçamento sem compromisso</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle2 size={18} />
                  <span>Entrega por etapas</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle2 size={18} />
                  <span>Suporte pós-entrega</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle2 size={18} />
                  <span>Código documentado</span>
                </div>
              </div>

              <div className="cta-buttons">
                <button 
                  className="cta-button-primary"
                  onClick={() => setShowContactModal(true)}
                >
                  <MessageSquare size={18} />
                  <span>Entrar em contato</span>
                </button>
                <a 
                  href="mailto:emannueldevfullstacksolutions@gmail.com" 
                  className="cta-button-secondary"
                >
                  <Mail size={18} />
                  <span>emannueldevfullstacksolutions@gmail.com</span>
                </a>
              </div>

              <div className="cta-stats">
                <div className="cta-stat">
                  <span className="cta-stat-value">2+</span>
                  <span className="cta-stat-label">anos</span>
                </div>
                <div className="cta-stat">
                  <span className="cta-stat-value">10</span>
                  <span className="cta-stat-label">projetos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <>
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
            />
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button 
                className="modal-close"
                onClick={() => setShowContactModal(false)}
              >
                <X size={20} />
              </button>
              
              <h3 className="modal-title">Enviar mensagem</h3>
              <p className="modal-subtitle">
                Responderei em até 24 horas
              </p>

              <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Seu nome *" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Seu email *" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Assunto" 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Sua mensagem *" 
                    rows={4}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">
                  <Send size={16} />
                  <span>Enviar mensagem</span>
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;