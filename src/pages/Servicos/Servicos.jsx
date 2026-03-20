// Services.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Code,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Server,
  Database,
  Cloud,
  Layout,
  Palette,
  Rocket,
  ShoppingCart,
  BarChart3,
  BarChart2,
  Headphones,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Info,
  ThumbsUp,
  Star,
  Sparkles,
  Award,
  Target,
  Cpu,
  Network,
  Blocks,
  Boxes,
  Infinity,
  Hexagon,
  Gauge,
  Wind,
  Recycle,
  Factory,
  ScanLine,
  Route,
  LocateFixed,
  Package,
  Coins,
  CreditCard,
  Gift,
  Plus,
  Minus,
  Clock,
  Calendar,
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  Globe2,
  ShieldCheck,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Download,
  Upload,
  RefreshCw,
  Filter,
  X,
  Check,
  Copy,
  Edit,
  Trash2,
  MoreHorizontal,
  MoreVertical,
  Settings,
  Layers,
  Grid,
  List,
  SortAsc,
  SortDesc,
  Search,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Camera,
  Video,
  Send,
  Image,
  FileText,
  FileCode,
  FileJson,
  File,
  Folder,
  FolderOpen,
  HardDrive,
  GitBranch,
  GitCommit,
  GitMerge,
  Terminal,
  Command,
  Brackets,
  Braces,
  Code2,
  Pencil,
  PenTool,
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
  Activity,
  Heart,
  BookOpen,
  MessageSquare,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Link2,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Servicos.css';
import logo from '../../assets/images/Logo/logo.svg';
import heroBackground from '../../assets/images/Logo/logobannerhero.jpg';
import projSuper from '../../assets/images/Home/projSuper.png';
import projDoce from '../../assets/images/Home/projDoce.png';
import projInstituto from '../../assets/images/Home/projInstituto.png';
import projBurge from '../../assets/images/Home/projBurge.png';
import projTransita from '../../assets/images/Home/projTransita.png';
import projEcos from '../../assets/images/Home/projEcos.png';

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
    <div className="services-particles">
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
            repeat: Infinity,
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

// Componente de Card de Serviço Principal
const MainServiceCard = React.memo(({ service, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`main-service-card ${service.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {service.featured && (
        <div className="service-featured-badge">
          <Sparkles size={14} />
          <span>Mais Popular</span>
        </div>
      )}

      <div className="service-card-header">
        <div className="service-icon-wrapper">
          <div className="service-icon">{service.icon}</div>
          <motion.div 
            className="service-icon-glow"
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.3 : 0.1
            }}
          />
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>

      <div className="service-card-body">
        {/* Tecnologias */}
        <div className="service-tech">
          <h4>Tecnologias</h4>
          <div className="tech-icons">
            {service.technologies.slice(0, 6).map((tech, idx) => (
              <div key={idx} className="tech-icon-item" title={tech.name}>
                {tech.icon}
              </div>
            ))}
            {service.technologies.length > 6 && (
              <div className="tech-icon-item more">
                +{service.technologies.length - 6}
              </div>
            )}
          </div>
        </div>

        {/* Benefícios */}
        <div className="service-benefits">
          <h4>Benefícios</h4>
          <ul className="benefits-list">
            {service.benefits.slice(0, 4).map((benefit, idx) => (
              <li key={idx}>
                <CheckCircle2 size={14} className="benefit-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Métricas */}
        <div className="service-metrics">
          {service.metrics.map((metric, idx) => (
            <div key={idx} className="metric-item">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="service-card-footer">
        <div className="service-price">
          <span className="price-label">A partir de</span>
          <span className="price-value">{service.price}</span>
        </div>
        <button 
          className="service-details-btn"
          onClick={() => onViewDetails(service)}
        >
          <span>Ver detalhes</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
});

// Componente de Card de Serviço Secundário
const SecondaryServiceCard = React.memo(({ service, index }) => {
  return (
    <motion.div
      className="secondary-service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <div className="secondary-icon">{service.icon}</div>
      <h3 className="secondary-title">{service.title}</h3>
      <p className="secondary-description">{service.description}</p>
      <Link to={service.link} className="secondary-link">
        <span>Saiba mais</span>
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
});

// Componente de Card de Processo
const ProcessCard = React.memo(({ process, index }) => {
  return (
    <motion.div
      className="process-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="process-number">{index + 1}</div>
      <div className="process-icon">{process.icon}</div>
      <h3 className="process-title">{process.title}</h3>
      <p className="process-description">{process.description}</p>
      <div className="process-duration">
        <Clock size={14} />
        <span>{process.duration}</span>
      </div>
    </motion.div>
  );
});

// Componente de Card de Tecnologia
const TechCard = React.memo(({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="tech-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="tech-card-inner">
        <div className="tech-card-icon">{tech.icon}</div>
        <h4 className="tech-card-name">{tech.name}</h4>
        <p className="tech-card-category">{tech.category}</p>
        
        <motion.div 
          className="tech-card-hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <p className="tech-card-description">{tech.description}</p>
          <span className="tech-card-experience">{tech.experience} anos de experiência</span>
        </motion.div>
      </div>
    </motion.div>
  );
});

// Componente de Card de Case
const CaseCard = React.memo(({ case: caseItem, index }) => {
  return (
    <motion.div
      className="case-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="case-image">
        <img src={caseItem.image} alt={caseItem.title} />
        <div className="case-overlay">
          <span className="case-category">{caseItem.category}</span>
        </div>
      </div>
      <div className="case-content">
        <h3 className="case-title">{caseItem.title}</h3>
        <p className="case-description">{caseItem.description}</p>
        <div className="case-metrics">
          <div className="case-metric">
            <span className="metric-value">{caseItem.result}</span>
            <span className="metric-label">Resultado</span>
          </div>
          <div className="case-metric">
            <span className="metric-value">{caseItem.time}</span>
            <span className="metric-label">Prazo</span>
          </div>
        </div>
        <Link to={`/cases/${caseItem.id}`} className="case-link">
          <span>Ver case completo</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
});

// Componente de Modal de Detalhes do Serviço
const ServiceModal = React.memo(({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="service-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="service-modal"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-content">
          {/* Cabeçalho */}
          <div className="modal-header">
            <div className="modal-header-icon">{service.icon}</div>
            <div className="modal-header-text">
              <h2 className="modal-title">{service.title}</h2>
              <p className="modal-description">{service.longDescription || service.description}</p>
            </div>
          </div>

          {/* Preço e CTA */}
          <div className="modal-price-section">
            <div className="modal-price">
              <span className="price-label">Investimento</span>
              <span className="price-value">{service.price}</span>
            </div>
            <Link to="/contato" className="modal-cta">
              <span>Solicitar orçamento</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid de Detalhes */}
          <div className="modal-details-grid">
            {/* O que está incluso */}
            <div className="modal-detail-section">
              <h3>O que está incluso</h3>
              <ul className="modal-features">
                {service.features?.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="feature-check" />
                    <div>
                      <strong>{feature.name}</strong>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tecnologias */}
            <div className="modal-detail-section">
              <h3>Tecnologias Utilizadas</h3>
              <div className="modal-tech-grid">
                {service.technologies?.map((tech, idx) => (
                  <div key={idx} className="modal-tech-item">
                    <div className="tech-icon">{tech.icon}</div>
                    <div className="tech-info">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-purpose">{tech.purpose}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div className="modal-detail-section">
              <h3>Benefícios</h3>
              <ul className="modal-benefits">
                {service.benefits?.map((benefit, idx) => (
                  <li key={idx}>
                    <Zap size={14} className="benefit-icon" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Entregáveis */}
            <div className="modal-detail-section">
              <h3>Entregáveis</h3>
              <ul className="modal-deliverables">
                {service.deliverables?.map((deliverable, idx) => (
                  <li key={idx}>
                    <Check size={14} className="deliverable-check" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>

            {/* Processo */}
            <div className="modal-detail-section full-width">
              <h3>Processo de Desenvolvimento</h3>
              <div className="modal-process">
                {service.process?.map((step, idx) => (
                  <div key={idx} className="process-step">
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                      <span className="step-duration">{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projetos Relacionados */}
            {service.relatedProjects && service.relatedProjects.length > 0 && (
              <div className="modal-detail-section full-width">
                <h3>Projetos Relacionados</h3>
                <div className="modal-related">
                  {service.relatedProjects.map((project, idx) => (
                    <Link key={idx} to={`/portfolio/${project.id}`} className="related-project">
                      <img src={project.image} alt={project.title} />
                      <div className="related-info">
                        <span className="related-title">{project.title}</span>
                        <span className="related-category">{project.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {service.faq && service.faq.length > 0 && (
              <div className="modal-detail-section full-width">
                <h3>Perguntas Frequentes</h3>
                <div className="modal-faq">
                  {service.faq.map((item, idx) => (
                    <div key={idx} className="faq-item">
                      <h4>{item.question}</h4>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

const Services = () => {
  const { scrollY } = useScroll();
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [techFilter, setTechFilter] = useState('');
  
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const casesRef = useRef(null);

  // Animações baseadas no scroll
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.98]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Contact form submitted:', data);
      // Simulação de envio — o backend pode ser integrado aqui
      alert('Mensagem enviada (simulada) — obrigado!');
      form.reset();
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Dados dos serviços principais
  const mainServices = useMemo(() => [
    {
      id: 'web-dev',
      title: 'Desenvolvimento Web',
      description: 'Criação de sites, sistemas web e e-commerces completos, com foco em performance e experiência do usuário.',
      longDescription: 'Desenvolvemos soluções web personalizadas que combinam design moderno, tecnologia de ponta e estratégias de SEO para maximizar resultados. Desde landing pages até plataformas complexas, entregamos produtos que encantam usuários e geram negócios.',
      icon: <Code size={32} />,
      price: 'R$ 5.000',
      featured: true,
      technologies: [
        { name: 'React', icon: <Code size={16} />, purpose: 'Interface do usuário' },
        { name: 'Next.js', icon: <Code size={16} />, purpose: 'Framework SSR' },
        { name: 'Node.js', icon: <Server size={16} />, purpose: 'Backend API' },
        { name: 'TypeScript', icon: <Braces size={16} />, purpose: 'Tipagem estática' },
        { name: 'MongoDB', icon: <Database size={16} />, purpose: 'Banco de dados' },
        { name: 'PostgreSQL', icon: <Database size={16} />, purpose: 'Banco relacional' },
        { name: 'Tailwind CSS', icon: <Brush size={16} />, purpose: 'Estilização' },
        { name: 'Framer Motion', icon: <Zap size={16} />, purpose: 'Animações' },
        { name: 'GraphQL', icon: <Network size={16} />, purpose: 'API queries' },
        { name: 'Docker', icon: <Boxes size={16} />, purpose: 'Containerização' }
      ],
      benefits: [
        'Sites responsivos e otimizados',
        'Alta performance e SEO',
        'Experiência do usuário premium',
        'Código limpo e documentado',
        'Suporte pós-lançamento',
        'Escalabilidade garantida'
      ],
      features: [
        { 
          name: 'Design Responsivo', 
          description: 'Layout adaptado para todos os dispositivos (mobile, tablet, desktop)' 
        },
        { 
          name: 'Otimização SEO', 
          description: 'Estrutura otimizada para mecanismos de busca' 
        },
        { 
          name: 'Performance', 
          description: 'Carregamento rápido com técnicas de otimização' 
        },
        { 
          name: 'Dashboard Administrativo', 
          description: 'Painel para gerenciar conteúdo e configurações' 
        },
        { 
          name: 'Integrações', 
          description: 'Conexão com APIs, pagamentos e serviços externos' 
        },
        { 
          name: 'Segurança', 
          description: 'Proteção contra ataques e vulnerabilidades' 
        }
      ],
      deliverables: [
        'Código fonte completo',
        'Documentação técnica',
        'Manual do usuário',
        'Backup do banco de dados',
        'Arquivos de configuração',
        'Guia de deploy'
      ],
      process: [
        {
          title: 'Descoberta',
          description: 'Entendemos suas necessidades, objetivos e público-alvo',
          duration: '1-2 semanas'
        },
        {
          title: 'Design',
          description: 'Criamos wireframes e protótipos de alta fidelidade',
          duration: '2-3 semanas'
        },
        {
          title: 'Desenvolvimento',
          description: 'Codificamos o projeto com as melhores práticas',
          duration: '4-8 semanas'
        },
        {
          title: 'Testes',
          description: 'Realizamos testes completos de funcionalidade e performance',
          duration: '1-2 semanas'
        },
        {
          title: 'Lançamento',
          description: 'Fazemos o deploy e acompanhamos os primeiros dias',
          duration: '1 semana'
        },
        {
          title: 'Suporte',
          description: 'Oferecemos suporte contínuo e manutenção',
          duration: 'Contínuo'
        }
      ],
      metrics: [
        { value: '50+', label: 'Projetos' },
        { value: '98%', label: 'Satisfação' },
        { value: '2x', label: 'Performance' },
        { value: '24/7', label: 'Suporte' }
      ],
      relatedProjects: [
        { id: 1, title: 'E-commerce Fashion', image: 'https://images.unsplash.com/photo-1523206481342-59c2a1a9a5c8?w=100', category: 'E-commerce' },
        { id: 3, title: 'Dashboard Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100', category: 'Dashboard' }
      ],
      faq: [
        {
          question: 'Quanto tempo leva para desenvolver um site?',
          answer: 'O prazo varia conforme a complexidade. Um site institucional simples pode levar de 4 a 6 semanas, enquanto um e-commerce completo pode levar de 3 a 6 meses.'
        },
        {
          question: 'Vocês oferecem suporte após o lançamento?',
          answer: 'Sim, oferecemos 30 dias de suporte gratuito para correções e ajustes. Após esse período, você pode contratar planos de manutenção contínua.'
        }
      ]
    },
    {
      id: 'mobile-dev',
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de apps nativos e híbridos para iOS e Android, com experiência do usuário excepcional.',
      longDescription: 'Criamos aplicativos mobile que encantam usuários e impulsionam negócios. Utilizamos as melhores tecnologias para garantir performance, usabilidade e escalabilidade em todas as plataformas.',
      icon: <Smartphone size={32} />,
      price: 'R$ 8.000',
      featured: false,
      technologies: [
        { name: 'React Native', icon: <Smartphone size={16} />, purpose: 'Framework mobile' },
        { name: 'Flutter', icon: <Smartphone size={16} />, purpose: 'Framework mobile' },
        { name: 'Swift', icon: <Code size={16} />, purpose: 'iOS nativo' },
        { name: 'Kotlin', icon: <Code size={16} />, purpose: 'Android nativo' },
        { name: 'Firebase', icon: <Cloud size={16} />, purpose: 'Backend e push' },
        { name: 'Redux', icon: <Layers size={16} />, purpose: 'Gerenciamento de estado' }
      ],
      benefits: [
        'Experiência nativa em ambas plataformas',
        'Performance otimizada',
        'Notificações push',
        'Modo offline',
        'Atualizações automáticas',
        'Publicação nas lojas'
      ],
      features: [
        { name: 'UI/UX Nativo', description: 'Interface adaptada para iOS e Android' },
        { name: 'Push Notifications', description: 'Notificações em tempo real' },
        { name: 'Offline First', description: 'Funciona sem internet' },
        { name: 'Biometria', description: 'Login com digital/face' },
        { name: 'Geolocalização', description: 'Integração com mapas' },
        { name: 'Câmera e Mídia', description: 'Captura e edição de mídia' }
      ],
      deliverables: [
        'Código fonte',
        'APK e IPA',
        'Assets e ícones',
        'Documentação',
        'Instruções de publicação',
        'Certificados e keys'
      ],
      process: [
        {
          title: 'Planejamento',
          description: 'Definição de funcionalidades e fluxos',
          duration: '1-2 semanas'
        },
        {
          title: 'UI/UX Design',
          description: 'Design de interfaces mobile',
          duration: '2-3 semanas'
        },
        {
          title: 'Desenvolvimento',
          description: 'Codificação do app',
          duration: '6-10 semanas'
        },
        {
          title: 'Testes',
          description: 'Testes em dispositivos reais',
          duration: '2-3 semanas'
        },
        {
          title: 'Publicação',
          description: 'Submissão às lojas',
          duration: '1-2 semanas'
        }
      ],
      metrics: [
        { value: '20+', label: 'Apps' },
        { value: '4.8', label: 'Rating' },
        { value: '500k+', label: 'Downloads' },
        { value: '99%', label: 'Estabilidade' }
      ],
      relatedProjects: [
        { id: 2, title: 'App Delivery', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100', category: 'Delivery' },
        { id: 7, title: 'App Fitness', image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=100', category: 'Saúde' }
      ],
      faq: [
        {
          question: 'Vocês desenvolvem para iOS e Android?',
          answer: 'Sim, desenvolvemos para ambas as plataformas, seja com tecnologia híbrida (React Native/Flutter) ou nativa (Swift/Kotlin), conforme sua necessidade.'
        },
        {
          question: 'Como funciona a publicação nas lojas?',
          answer: 'Cuidamos de todo o processo de publicação, incluindo preparação dos assets, configuração das contas de desenvolvedor e submissão às lojas.'
        }
      ]
    },
    {
      id: 'backend-dev',
      title: 'Back-end & APIs',
      description: 'Construção de APIs robustas e escaláveis, sistemas de alta performance e arquitetura de microsserviços.',
      longDescription: 'Desenvolvemos a espinha dorsal do seu sistema: APIs rápidas, seguras e escaláveis. Projetamos arquiteturas que suportam milhões de requisições e garantem a integridade dos seus dados.',
      icon: <Server size={32} />,
      price: 'R$ 6.000',
      featured: false,
      technologies: [
        { name: 'Node.js', icon: <Server size={16} />, purpose: 'Runtime JavaScript' },
        { name: 'Python', icon: <Terminal size={16} />, purpose: 'Linguagem versátil' },
        { name: 'Java', icon: <Code size={16} />, purpose: 'Enterprise' },
        { name: 'Go', icon: <Code size={16} />, purpose: 'Alta performance' },
        { name: 'PostgreSQL', icon: <Database size={16} />, purpose: 'Banco relacional' },
        { name: 'MongoDB', icon: <Database size={16} />, purpose: 'Banco NoSQL' },
        { name: 'Redis', icon: <Database size={16} />, purpose: 'Cache' },
        { name: 'Elasticsearch', icon: <Search size={16} />, purpose: 'Busca' },
        { name: 'Docker', icon: <Boxes size={16} />, purpose: 'Containerização' },
        { name: 'Kubernetes', icon: <Blocks size={16} />, purpose: 'Orquestração' },
        { name: 'AWS', icon: <Cloud size={16} />, purpose: 'Cloud' },
        { name: 'GraphQL', icon: <Network size={16} />, purpose: 'API moderna' }
      ],
      benefits: [
        'APIs rápidas e escaláveis',
        'Alta disponibilidade',
        'Segurança avançada',
        'Documentação automática',
        'Testes automatizados',
        'Monitoramento contínuo'
      ],
      features: [
        { name: 'RESTful API', description: 'APIs seguindo padrões REST' },
        { name: 'GraphQL', description: 'Queries flexíveis e eficientes' },
        { name: 'Autenticação JWT', description: 'Sistema seguro de autenticação' },
        { name: 'Rate Limiting', description: 'Controle de requisições' },
        { name: 'Cache', description: 'Redis para alta performance' },
        { name: 'WebSockets', description: 'Comunicação em tempo real' }
      ],
      deliverables: [
        'API documentada (Swagger)',
        'Código fonte',
        'Testes automatizados',
        'Configuração de deploy',
        'Monitoramento',
        'Backups automáticos'
      ],
      process: [
        {
          title: 'Arquitetura',
          description: 'Definição da arquitetura do sistema',
          duration: '1-2 semanas'
        },
        {
          title: 'Modelagem',
          description: 'Modelagem do banco de dados',
          duration: '1 semana'
        },
        {
          title: 'Desenvolvimento',
          description: 'Implementação das APIs',
          duration: '4-8 semanas'
        },
        {
          title: 'Testes',
          description: 'Testes de integração e carga',
          duration: '1-2 semanas'
        },
        {
          title: 'Deploy',
          description: 'Configuração de infraestrutura',
          duration: '1 semana'
        }
      ],
      metrics: [
        { value: '100ms', label: 'Latência' },
        { value: '99.99%', label: 'Uptime' },
        { value: '1M+', label: 'Req/dia' },
        { value: '50+', label: 'Endpoints' }
      ],
      relatedProjects: [
        { id: 6, title: 'API de Pagamentos', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100', category: 'API' }
      ],
      faq: [
        {
          question: 'Qual a diferença entre REST e GraphQL?',
          answer: 'REST é mais tradicional e simples, enquanto GraphQL oferece mais flexibilidade nas consultas. Escolhemos a melhor opção para seu caso.'
        },
        {
          question: 'Como garantem a segurança da API?',
          answer: 'Implementamos autenticação robusta, validação de inputs, rate limiting, HTTPS e monitoramento constante contra ataques.'
        }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Infraestrutura na nuvem, CI/CD, containerização e monitoramento para aplicações escaláveis e resilientes.',
      longDescription: 'Automatizamos e otimizamos toda a infraestrutura do seu projeto, garantindo deploy contínuo, alta disponibilidade e custos controlados. Sua aplicação sempre no ar e performando.',
      icon: <Cloud size={32} />,
      price: 'R$ 4.000',
      featured: false,
      technologies: [
        { name: 'AWS', icon: <Cloud size={16} />, purpose: 'Cloud provider' },
        { name: 'Azure', icon: <Cloud size={16} />, purpose: 'Cloud provider' },
        { name: 'Google Cloud', icon: <Cloud size={16} />, purpose: 'Cloud provider' },
        { name: 'Docker', icon: <Boxes size={16} />, purpose: 'Containerização' },
        { name: 'Kubernetes', icon: <Blocks size={16} />, purpose: 'Orquestração' },
        { name: 'Jenkins', icon: <Settings size={16} />, purpose: 'CI/CD' },
        { name: 'GitHub Actions', icon: <GitBranch size={16} />, purpose: 'CI/CD' },
        { name: 'Terraform', icon: <Code size={16} />, purpose: 'Infra as Code' },
        { name: 'Ansible', icon: <Settings size={16} />, purpose: 'Automação' },
        { name: 'Prometheus', icon: <Activity size={16} />, purpose: 'Monitoramento' },
        { name: 'Grafana', icon: <BarChart3 size={16} />, purpose: 'Dashboards' }
      ],
      benefits: [
        'Deploy automatizado',
        'Escalabilidade automática',
        'Alta disponibilidade',
        'Redução de custos',
        'Monitoramento 24/7',
        'Recuperação de desastres'
      ],
      features: [
        { name: 'CI/CD Pipeline', description: 'Integração e deploy contínuos' },
        { name: 'Containerização', description: 'Ambientes isolados com Docker' },
        { name: 'Orquestração', description: 'Gerenciamento com Kubernetes' },
        { name: 'Infra as Code', description: 'Infraestrutura versionada' },
        { name: 'Auto-scaling', description: 'Escala automática' },
        { name: 'Backup Automático', description: 'Backups recorrentes' }
      ],
      deliverables: [
        'Infraestrutura configurada',
        'Pipelines de CI/CD',
        'Scripts de automação',
        'Dashboards de monitoramento',
        'Alertas configurados',
        'Documentação técnica'
      ],
      process: [
        {
          title: 'Diagnóstico',
          description: 'Análise da infraestrutura atual',
          duration: '1 semana'
        },
        {
          title: 'Planejamento',
          description: 'Definição da arquitetura cloud',
          duration: '1 semana'
        },
        {
          title: 'Implementação',
          description: 'Configuração e automação',
          duration: '2-4 semanas'
        },
        {
          title: 'Migração',
          description: 'Migração de dados e aplicações',
          duration: '1-2 semanas'
        },
        {
          title: 'Otimização',
          description: 'Ajustes de performance e custos',
          duration: 'Contínuo'
        }
      ],
      metrics: [
        { value: '99.99%', label: 'Uptime' },
        { value: '30%', label: 'Redução de custos' },
        { value: '5min', label: 'Tempo de deploy' },
        { value: '24/7', label: 'Monitoramento' }
      ],
      relatedProjects: [
        { id: 6, title: 'API de Pagamentos', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100', category: 'API' }
      ],
      faq: [
        {
          question: 'Qual a diferença entre os provedores cloud?',
          answer: 'AWS, Azure e GCP têm características diferentes. Analisamos seu caso para recomendar o melhor custo-benefício.'
        },
        {
          question: 'Como funciona o monitoramento?',
          answer: 'Configuramos alertas proativos para CPU, memória, disco e erros. Você recebe notificações antes que problemas afetem seus usuários.'
        }
      ]
    },
    {
      id: 'database',
      title: 'Banco de Dados',
      description: 'Modelagem, otimização e gerenciamento de bancos de dados relacionais e NoSQL para alta performance.',
      longDescription: 'Projetamos a estrutura de dados ideal para sua aplicação, garantindo integridade, performance e escalabilidade. Otimizamos consultas e gerenciamos todo o ciclo de vida dos dados.',
      icon: <Database size={32} />,
      price: 'R$ 3.500',
      featured: false,
      technologies: [
        { name: 'PostgreSQL', icon: <Database size={16} />, purpose: 'Banco relacional' },
        { name: 'MySQL', icon: <Database size={16} />, purpose: 'Banco relacional' },
        { name: 'MongoDB', icon: <Database size={16} />, purpose: 'NoSQL' },
        { name: 'Redis', icon: <Database size={16} />, purpose: 'Cache' },
        { name: 'Elasticsearch', icon: <Search size={16} />, purpose: 'Busca' },
        { name: 'Cassandra', icon: <Database size={16} />, purpose: 'Distribuído' },
        { name: 'DynamoDB', icon: <Database size={16} />, purpose: 'AWS NoSQL' },
        { name: 'Firebase', icon: <Cloud size={16} />, purpose: 'Realtime' }
      ],
      benefits: [
        'Modelagem otimizada',
        'Consultas rápidas',
        'Integridade referencial',
        'Backups automáticos',
        'Replicação de dados',
        'Alta disponibilidade'
      ],
      features: [
        { name: 'Modelagem de Dados', description: 'Estrutura otimizada para seu negócio' },
        { name: 'Otimização de Queries', description: 'Índices e consultas eficientes' },
        { name: 'Replicação', description: 'Dados sincronizados' },
        { name: 'Backup & Recovery', description: 'Proteção contra perda' },
        { name: 'Migração de Dados', description: 'Migração segura' },
        { name: 'Performance Tuning', description: 'Ajustes de performance' }
      ],
      deliverables: [
        'Modelo de dados',
        'Scripts SQL',
        'Configurações otimizadas',
        'Plano de backup',
        'Documentação',
        'Guias de consulta'
      ],
      process: [
        {
          title: 'Análise',
          description: 'Levantamento de requisitos',
          duration: '1 semana'
        },
        {
          title: 'Modelagem',
          description: 'Criação do modelo conceitual',
          duration: '1-2 semanas'
        },
        {
          title: 'Implementação',
          description: 'Criação das estruturas',
          duration: '1-2 semanas'
        },
        {
          title: 'Otimização',
          description: 'Ajustes de performance',
          duration: '1 semana'
        },
        {
          title: 'Migração',
          description: 'Migração de dados existentes',
          duration: '1-2 semanas'
        }
      ],
      metrics: [
        { value: '50ms', label: 'Query time' },
        { value: '100%', label: 'Integridade' },
        { value: '1TB+', label: 'Capacidade' },
        { value: '24/7', label: 'Backup' }
      ],
      faq: [
        {
          question: 'SQL ou NoSQL: qual escolher?',
          answer: 'Depende do seu caso. SQL é melhor para dados relacionais e transações; NoSQL para alta escalabilidade e dados não estruturados.'
        },
        {
          question: 'Como funciona o backup?',
          answer: 'Configuramos backups automáticos diários com retenção configurável e teste de restauração periódico.'
        }
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Lojas virtuais completas com gestão de produtos, carrinho, pagamentos, estoque e integrações.',
           longDescription: 'Criamos lojas virtuais profissionais que convertem visitantes em clientes. Integração com principais meios de pagamento, sistemas de gestão, cálculo automático de frete, emissão de notas fiscais e muito mais.',
      features: [
        'Catálogo de produtos com filtros avançados',
        'Carrinho de compras persistente',
        'Checkout otimizado e seguro',
        'Integração com PagSeguro, Stripe e Mercado Pago',
        'Gestão de estoque em tempo real',
        'Cupons de desconto e promoções',
        'Avaliações e comentários de clientes',
        'Painel administrativo completo'
      ],
      technologies: ['React/Next.js', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis', 'Docker'],
      icon: 'ShoppingCart',
      gradient: 'from-blue-900 to-blue-800',
      image: '/images/services/ecommerce.jpg',
      stats: {
        projects: '45+',
        satisfaction: '98%'
      }
    },
    {
      id: 'mobile',
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android com performance nativa e experiência fluida.',
      longDescription: 'Desenvolvemos aplicativos mobile de alta performance para iOS e Android, desde apps institucionais até soluções complexas com funcionalidades avançadas como geolocalização, realidade aumentada e integração com hardware.',
      features: [
        'Apps nativos (Swift/Kotlin) e híbridos (React Native)',
        'UI/UX design centrado no usuário',
        'Notificações push',
        'Sincronização offline',
        'Integração com APIs REST/GraphQL',
        'Biometria e autenticação segura',
        'Publicação nas lojas (App Store e Google Play)',
        'Monitoramento e analytics'
      ],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux'],
      icon: 'Smartphone',
      gradient: 'from-blue-800 to-blue-700',
      image: '/images/services/mobile.jpg',
      stats: {
        projects: '30+',
        satisfaction: '96%'
      }
    },
    {
      id: 'sistemas',
      title: 'Sistemas Web',
      description: 'Sistemas corporativos personalizados, ERPs, dashboards e plataformas de gestão sob medida.',
      longDescription: 'Criamos sistemas web robustos e escaláveis para otimizar processos do seu negócio. Desenvolvemos desde CRMs e ERPs até plataformas educacionais e marketplaces com foco em usabilidade e segurança.',
      features: [
        'Sistemas personalizados para seu negócio',
        'Dashboards interativos com gráficos em tempo real',
        'Gestão de usuários e permissões',
        'Relatórios avançados e exportação de dados',
        'Integração com sistemas legados',
        'Alta disponibilidade e escalabilidade',
        'Backup automático e recuperação de desastres',
        'Suporte e manutenção contínua'
      ],
      technologies: ['React/Angular', 'Node.js', 'Python/Django', 'PostgreSQL', 'AWS', 'Docker'],
      icon: 'Code2',
      gradient: 'from-blue-700 to-blue-600',
      image: '/images/services/sistemas.jpg',
      stats: {
        projects: '50+',
        satisfaction: '99%'
      }
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'Design de interfaces modernas, experiência do usuário intuitiva e prototipagem interativa.',
      longDescription: 'Criamos experiências digitais memoráveis que encantam usuários e impulsionam resultados. Nosso processo de design combina pesquisa, prototipagem e testes para garantir interfaces intuitivas e visualmente impressionantes.',
      features: [
        'Pesquisa com usuários e análise de concorrência',
        'Wireframes e protótipos interativos',
        'Design system personalizado',
        'Testes de usabilidade',
        'Animações e microinterações',
        'Design responsivo e acessível',
        'Identidade visual consistente',
        'Entregáveis prontos para desenvolvimento'
      ],
      technologies: ['Figma', 'Adobe XD', 'Principle', 'Framer', 'Sketch', 'InVision'],
      icon: 'PenTool',
      gradient: 'from-blue-600 to-blue-500',
      image: '/images/services/design.jpg',
      stats: {
        projects: '60+',
        satisfaction: '100%'
      }
    },
    {
      id: 'seo',
      title: 'SEO & Performance',
      description: 'Otimização para mecanismos de busca, melhores práticas de performance e análise de dados.',
      longDescription: 'Aumentamos a visibilidade do seu negócio nos mecanismos de busca e garantimos que seu site carregue rapidamente em qualquer dispositivo. Nossa abordagem combina estratégias de SEO com otimizações técnicas de performance.',
      features: [
        'Auditoria completa de SEO técnico',
        'Pesquisa e otimização de palavras-chave',
        'Estratégia de link building',
        'Otimização de imagens e assets',
        'Lazy loading e code splitting',
        'Melhores práticas Core Web Vitals',
        'Integração com Google Analytics e Search Console',
        'Relatórios mensais de performance'
      ],
      technologies: ['Lighthouse', 'Ahrefs', 'SEMrush', 'Google Analytics', 'GTmetrix', 'Screaming Frog'],
      icon: 'BarChart2',
      gradient: 'from-blue-500 to-blue-400',
      image: '/images/services/seo.jpg',
      stats: {
        projects: '35+',
        satisfaction: '97%'
      }
    },
    {
      id: 'consultoria',
      title: 'Consultoria Tech',
      description: 'Consultoria especializada em tecnologia, arquitetura de software e transformação digital.',
      longDescription: 'Ajudamos sua empresa a tomar as melhores decisões tecnológicas. Nossa consultoria caiu desde a definição de arquitetura de software até a implementação de práticas ágeis e transformação digital do seu negócio.',
      features: [
        'Análise de requisitos e viabilidade técnica',
        'Definição de arquitetura e stack tecnológica',
        'Code review e otimização de código',
        'Implementação de CI/CD e DevOps',
        'Estratégia de migração para cloud',
        'Mentoria para equipes de desenvolvimento',
        'Segurança da informação e boas práticas',
        'Transformação digital e inovação'
      ],
      technologies: ['AWS/Azure', 'Kubernetes', 'Terraform', 'Jenkins', 'SonarQube', 'Prometheus'],
      icon: 'Briefcase',
      gradient: 'from-blue-900 to-blue-600',
      image: '/images/services/consultoria.jpg',
      stats: {
        projects: '25+',
        satisfaction: '100%'
      }
    }
  ], []);

  const portfolioItems = [
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

  return (
    <div className="App" data-theme="dark">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            alt="Hero Background" 
            className="hero-background-image"
          />
          <div className="hero-image-overlay"></div>
          <div className="hero-gradient-overlay"></div>
          <div className="hero-grid"></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  animation: `pulse ${Math.random() * 4 + 2}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        <div className="hero-logo-right">
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} />
            <span>Excelência em Desenvolvimento</span>
          </div>
          
          <h1 className="hero-title">
            Transformamos ideias em
            <br />
            <span className="hero-title-gradient">soluções digitais</span>
          </h1>
          
          <p className="hero-description">
            Desenvolvemos produtos digitais de alta performance que impulsionam negócios 
            e encantam usuários. Da concepção à implementação, entregamos excelência.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Iniciar Projeto
              <ArrowRight size={18} />
              <span className="btn-glow"></span>
            </button>
            <button className="btn-secondary" onClick={() => {}}>
              <Play size={18} />
              Ver Apresentação
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Briefcase size={20} />
              </div>
              <div>
                <div className="hero-stat-value">200+</div>
                <div className="hero-stat-label">Projetos Entregues</div>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Users size={20} />
              </div>
              <div>
                <div className="hero-stat-value">50+</div>
                <div className="hero-stat-label">Clientes</div>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Award size={20} />
              </div>
              <div>
                <div className="hero-stat-value">5+</div>
                <div className="hero-stat-label">Anos de Mercado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Scroll</span>
          <ChevronDown size={16} />
        </div>

        <div className="hero-scroll">
          <span>Explore</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="section-badge">
                <Info size={14} />
                <span>Sobre Nós</span>
              </div>
              
              <h2 className="section-title">
                Somos especialistas em{' '}
                <span className="section-title-gradient">transformação digital</span>
              </h2>
              
              <p className="about-description">
                Com mais de 5 anos de experiência no mercado, ajudamos empresas de todos os 
                portes a criar soluções digitais inovadoras que geram resultados reais. 
                Nossa equipe é formada por desenvolvedores, designers e estrategistas 
                apaixonados por tecnologia.
              </p>
              
              <p className="about-description">
                Acreditamos que a tecnologia deve ser uma aliada nos negócios, por isso 
                criamos produtos com foco em usabilidade, performance e escalabilidade. 
                Cada projeto é único e recebe atenção especial em todas as etapas.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4>Entregas Rápidas</h4>
                    <p>Metodologias ágeis para entregar valor mais rápido</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4>Código Seguro</h4>
                    <p>Boas práticas e testes automatizados</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4>Escalabilidade</h4>
                    <p>Arquitetura preparada para crescer</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4>Design Centrado</h4>
                    <p>UX/UI focado na experiência do usuário</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="about-image-container">
                <div className="about-image-glow"></div>
                <div className="about-image-placeholder">
                  <Code2 size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-badge">
            <Package size={14} />
            <span>Serviços</span>
          </div>
          
          <h2 className="section-title">
            Soluções completas para o{' '}
            <span className="section-title-gradient">seu negócio</span>
          </h2>
          
          <p className="section-description">
            Oferecemos um ecossistema completo de serviços digitais para transformar 
            sua ideia em realidade, sempre com as melhores tecnologias do mercado.
          </p>

          <div className="services-grid">
            {(mainServices || []).map((service, index) => (
              <div key={service.id || index} className="service-card">
                <div className="service-icon">
                  {service.icon && typeof service.icon !== 'string' ? (
                    service.icon
                  ) : (
                    <>
                      {service.icon === 'ShoppingCart' && <ShoppingCart size={32} />}
                      {service.icon === 'Smartphone' && <Smartphone size={32} />}
                      {service.icon === 'Code2' && <Code2 size={32} />}
                      {service.icon === 'PenTool' && <PenTool size={32} />}
                      {service.icon === 'BarChart2' && <BarChart2 size={32} />}
                      {service.icon === 'Briefcase' && <Briefcase size={32} />}
                    </>
                  )}
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {(service.features || []).slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <Check size={16} />
                      <span>{feature?.name || feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="development">
        <div className="container">
          <div className="section-badge">
            <Code size={14} />
            <span>Tecnologias</span>
          </div>
          
          <h2 className="section-title">
            Stack moderna e{' '}
            <span className="section-title-gradient">escalável</span>
          </h2>
          
          <p className="section-description">
            Utilizamos as melhores tecnologias do mercado para garantir performance, 
            segurança e escalabilidade em todos os projetos.
          </p>

          <div className="dev-grid">
            <div className="dev-card">
              <div className="dev-icon">
                <Code2 size={28} />
              </div>
              <h3 className="dev-title">Front-end</h3>
              <p className="dev-description">
                Interfaces modernas e responsivas com React, Next.js e Vue.js
              </p>
              <div className="dev-tools">
                <span className="dev-tool">React</span>
                <span className="dev-tool">Next.js</span>
                <span className="dev-tool">TypeScript</span>
                <span className="dev-tool">Tailwind</span>
                <span className="dev-tool">Vue.js</span>
              </div>
            </div>

            <div className="dev-card">
              <div className="dev-icon">
                <Server size={28} />
              </div>
              <h3 className="dev-title">Back-end</h3>
              <p className="dev-description">
                APIs robustas e escaláveis com Node.js, Python e Java
              </p>
              <div className="dev-tools">
                <span className="dev-tool">Node.js</span>
                <span className="dev-tool">Python</span>
                <span className="dev-tool">Django</span>
                <span className="dev-tool">Spring</span>
                <span className="dev-tool">GraphQL</span>
              </div>
            </div>

            <div className="dev-card">
              <div className="dev-icon">
                <Database size={28} />
              </div>
              <h3 className="dev-title">Banco de Dados</h3>
              <p className="dev-description">
                Gerenciamento eficiente de dados com SQL e NoSQL
              </p>
              <div className="dev-tools">
                <span className="dev-tool">PostgreSQL</span>
                <span className="dev-tool">MongoDB</span>
                <span className="dev-tool">Redis</span>
                <span className="dev-tool">MySQL</span>
                <span className="dev-tool">Firebase</span>
              </div>
            </div>

            <div className="dev-card">
              <div className="dev-icon">
                <Cloud size={28} />
              </div>
              <h3 className="dev-title">DevOps & Cloud</h3>
              <p className="dev-description">
                Infraestrutura escalável e automação com cloud computing
              </p>
              <div className="dev-tools">
                <span className="dev-tool">AWS</span>
                <span className="dev-tool">Docker</span>
                <span className="dev-tool">Kubernetes</span>
                <span className="dev-tool">CI/CD</span>
                <span className="dev-tool">Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-badge">
            <Grid size={14} />
            <span>Portfólio</span>
          </div>
          
          <h2 className="section-title">
            Projetos que{' '}
            <span className="section-title-gradient">entregamos</span>
          </h2>
          
          <p className="section-description">
            Conheça alguns dos projetos desenvolvidos para nossos clientes. 
            Cada um deles representa um desafio único e uma solução personalizada.
          </p>

          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-tech">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="portfolio-content">
                  <span className="portfolio-category">{item.category}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                  
                  <div className="portfolio-links">
                    <a href={item.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      <span>Ver Projeto</span>
                    </a>
                    <a href={item.github} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-more">
            <a href="#" className="more-link">
              <span>Ver todos os projetos</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-background">
              <div className="cta-gradient"></div>
            </div>
            
            <div className="cta-content">
              <h2 className="cta-title">
                Pronto para dar o próximo passo?
                <br />
                <span className="cta-title-gradient">Vamos construir algo incrível juntos</span>
              </h2>
              
              <p className="cta-description">
                Transforme sua ideia em realidade com quem entende de tecnologia. 
                Entre em contato e descubra como podemos ajudar seu negócio a crescer.
              </p>
              
              <div className="cta-features">
                <div className="cta-feature">
                  <Clock size={18} />
                  <span>Atendimento ágil</span>
                </div>
                <div className="cta-feature">
                  <Headphones size={18} />
                  <span>Suporte dedicado</span>
                </div>
                <div className="cta-feature">
                  <Award size={18} />
                  <span>Garantia de qualidade</span>
                </div>
              </div>
              
              <div className="cta-buttons">
                <button className="cta-button-primary" onClick={() => scrollToSection('contact')}>
                  Iniciar Projeto
                  <ArrowRight size={18} />
                </button>
                <button className="cta-button-secondary">
                  Ver Portfólio
                  <Briefcase size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-badge">
                <Mail size={14} />
                <span>Contato</span>
              </div>
              
              <h2 className="contact-title">Vamos conversar</h2>
              
              <p className="contact-description">
                Estamos prontos para ouvir sua ideia e transformá-la em um projeto de sucesso. 
                Entre em contato pelos canais abaixo ou preencha o formulário.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>emannueldevfullstacksolutions@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4>Telefone / WhatsApp</h4>
                    <p>+55 (62) 98431-7595</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4>Endereço</h4>
                    <p>Av. Paulista, 1000 - São Paulo/SP</p>
                    <p>CEP: 01310-100</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-social">
                <h4>Redes Sociais</h4>
                <div className="social-links">
                  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <div className="contact-form-card">
                <h3 className="form-title">Envie uma mensagem</h3>
                <p className="form-subtitle">
                  Responderemos em até 24 horas
                </p>
                
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <input
                    type="text"
                    name="company"
                    placeholder="Empresa (opcional)"
                    className="form-input"
                  />
                  
                  <select name="service" className="form-select" required>
                    <option value="">Selecione um serviço</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="mobile">App Mobile</option>
                    <option value="sistemas">Sistema Web</option>
                    <option value="design">UI/UX Design</option>
                    <option value="seo">SEO & Performance</option>
                    <option value="consultoria">Consultoria</option>
                  </select>
                  
                  <textarea
                    name="message"
                    placeholder="Conte-nos sobre seu projeto..."
                    className="form-textarea"
                    rows="5"
                    required
                  ></textarea>
                  
                  <button type="submit" className="form-submit">
                    <Send size={18} />
                    <span>Enviar Mensagem</span>
                  </button>
                  
                  <div className="form-footer">
                    <Lock size={14} />
                    <span>Seus dados estão seguros. Não fazemos spam.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;