// Portfolio.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github,
  ExternalLink,
  CreditCard,
  BookOpen,
  Globe,
  Smartphone,
  Code,
  Server,
  Database,
  Cloud,
  Figma,
  Figma as FigmaIcon,
  Cpu,
  Layout,
  Palette,
  Zap,
  Rocket,
  Award,
  Star,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Calendar,
  Users,
  Clock,
  MapPin,
  Briefcase,
  Building2,
  TrendingUp,
  BarChart3,
  ShoppingCart,
  MessageSquare,
  Mail,
  Phone,
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
  CheckCircle2,
  AlertCircle,
  Info,
  ThumbsUp,
  ThumbsDown,
  Heart,
  Share2,
  Bookmark,
  BookmarkPlus,
  Link2,
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
  Maximize,
  Minimize,
  Camera,
  Video,
  Image,
  FileText,
  FileCode,
  FileJson,
  File,
  Folder,
  FolderOpen,
  FolderTree,
  HardDrive,
  Cpu as CpuIcon,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
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
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import logo from '../../assets/images/Logo/logo.svg';
import heroBackground from '../../assets/images/Logo/logobannerhero.jpg';
import projTransita from '../../assets/images/Home/projTransita.png';
import projDoce from '../../assets/images/Home/projDoce.png';
import projSuper from '../../assets/images/Home/projSuper.png';
import projInstituto from '../../assets/images/Home/projInstituto.png';
import projEcos from '../../assets/images/Home/projEcos.png';
import projBurge from '../../assets/images/Home/projBurge.png';
import projWorship from '../../assets/images/Home/projWorship of Us.png';
import projEmannuel from '../../assets/images/Home/projEmannuel.png';

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
    <div className="portfolio-particles">
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

// Componente de Card de Projeto Detalhado
const ProjectCard = React.memo(({ project, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Imagem do Projeto */}
      <div className="project-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image"
          loading="lazy"
        />
        
        {/* Overlay com ações rápidas */}
        <motion.div 
          className="project-overlay"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="overlay-actions">
            <button 
              className="action-btn"
              onClick={() => window.open(project.demo, '_blank')}
              title="Ver demo"
            >
              <ExternalLink size={16} />
            </button>
            <button 
              className="action-btn"
              onClick={() => window.open(project.code, '_blank')}
              title="Ver código"
            >
              <Github size={16} />
            </button>
            <button 
              className="action-btn"
              onClick={() => onViewDetails(project)}
              title="Ver detalhes"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </motion.div>

        {/* Badges */}
        <div className="project-badges">
          {project.featured && (
            <span className="badge featured">
              <Sparkles size={12} />
              Destaque
            </span>
          )}
          {project.status === 'em-andamento' && (
            <span className="badge in-progress">
              <RefreshCw size={12} />
              Em andamento
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo do Projeto */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        {/* Tecnologias */}
        <div className="project-tech">
          {(project.technologies || []).slice(0, 5).map((tech, idx) => (
            <span key={idx} className="tech-tag" title={tech.name}>
              {tech.icon}
              <span>{tech.name}</span>
            </span>
          ))}
          {(project.technologies || []).length > 5 && (
            <span className="tech-tag more">
              +{(project.technologies || []).length - 5}
            </span>
          )}
        </div>

        {/* Métricas do Projeto */}
        <div className="project-metrics">
          <div className="metric">
            <Calendar size={14} />
            <span>{project.year}</span>
          </div>
          <div className="metric">
            <Clock size={14} />
            <span>{project.duration}</span>
          </div>
          <div className="metric">
            <Users size={14} />
            <span>{project.team} membros</span>
          </div>
          <div className="metric">
            <BarChart3 size={14} />
            <span>{project.complexity}</span>
          </div>
        </div>

        {/* Categorias */}
        <div className="project-categories">
          {(project.categories || []).map((cat, idx) => (
            <span key={idx} className="category-tag">
              {cat}
            </span>
          ))}
        </div>

        {/* Cliente/Parceiro */}
        {project.client && (
          <div className="project-client">
            <Building2 size={14} />
            <span>{project.client}</span>
          </div>
        )}

        {/* Botão Ver Mais */}
        <button 
          className="project-expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? 'Ver menos' : 'Ver detalhes'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Detalhes Expandidos */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="project-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="details-grid">
                {/* Funcionalidades */}
                <div className="details-section">
                  <h4>Funcionalidades Principais</h4>
                  <ul className="features-list">
                    {(project.features || []).map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desafios e Soluções */}
                <div className="details-section">
                  <h4>Desafios e Soluções</h4>
                  <div className="challenge-item">
                    <p className="challenge-title">Desafio:</p>
                    <p className="challenge-text">{project.challenge}</p>
                  </div>
                  <div className="solution-item">
                    <p className="solution-title">Solução:</p>
                    <p className="solution-text">{project.solution}</p>
                  </div>
                </div>

                {/* Resultados */}
                <div className="details-section">
                  <h4>Resultados</h4>
                  <div className="results-stats">
                    {(project.results || []).map((result, idx) => (
                      <div key={idx} className="result-item">
                        <span className="result-value">{result.value}</span>
                        <span className="result-label">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links Adicionais */}
                <div className="details-section">
                  <h4>Links do Projeto</h4>
                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Globe size={14} />
                        <span>Demo Online</span>
                      </a>
                    )}
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={14} />
                        <span>Código Fonte</span>
                      </a>
                    )}
                    {project.documentation && (
                      <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FileText size={14} />
                        <span>Documentação</span>
                      </a>
                    )}
                    {project.caseStudy && (
                      <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FileText size={14} />
                        <span>Case Study</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Tecnologias Detalhadas */}
                <div className="details-section full-width">
                  <h4>Tecnologias Utilizadas</h4>
                  <div className="tech-grid">
                    {(project.technologies || []).map((tech, idx) => (
                      <div key={idx} className="tech-item">
                        <div className="tech-icon-wrapper">
                          {tech.icon}
                        </div>
                        <div className="tech-info">
                          <span className="tech-name">{tech.name}</span>
                          <span className="tech-purpose">{tech.purpose}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

// Componente de Modal de Detalhes
const ProjectModal = React.memo(({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="project-modal"
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
          {/* Cabeçalho do Modal */}
          <div className="modal-header">
            <img src={project.image} alt={project.title} className="modal-image" />
            <div className="modal-header-content">
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-description">{project.description}</p>
              
              <div className="modal-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{project.duration}</span>
                </div>
                <div className="meta-item">
                  <Users size={16} />
                  <span>{project.team} membros</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo do Modal */}
          <div className="modal-body">
            {/* Tecnologias */}
            <div className="modal-section">
              <h3>Tecnologias Utilizadas</h3>
              <div className="modal-tech-grid">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="modal-tech-item">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Funcionalidades */}
            <div className="modal-section">
              <h3>Funcionalidades</h3>
              <ul className="modal-features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desafio e Solução */}
            <div className="modal-section">
              <h3>Desafio</h3>
              <p>{project.challenge}</p>
            </div>

            <div className="modal-section">
              <h3>Solução</h3>
              <p>{project.solution}</p>
            </div>

            {/* Resultados */}
            <div className="modal-section">
              <h3>Resultados</h3>
              <div className="modal-results">
                {project.results.map((result, idx) => (
                  <div key={idx} className="modal-result">
                    <span className="result-value">{result.value}</span>
                    <span className="result-label">{result.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="modal-section">
              <h3>Links</h3>
              <div className="modal-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <Globe size={16} />
                    Demo Online
                  </a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <Github size={16} />
                    Código Fonte
                  </a>
                )}
                {project.caseStudy && (
                  <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <FileText size={16} />
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

// Componente de Filtros
const ProjectFilters = React.memo(({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="project-filters">
      <button
        className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
        onClick={() => onFilterChange('todos')}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
          onClick={() => onFilterChange(category.id)}
        >
          {category.icon && <category.icon size={14} />}
          {category.name}
        </button>
      ))}
    </div>
  );
});

// Componente de Estatísticas
const ProjectStats = React.memo(({ projects }) => {
  const stats = useMemo(() => ({
    total: projects.length,
    technologies: [...new Set(projects.flatMap(p => p.technologies.map(t => t.name)))].length,
    clients: [...new Set(projects.filter(p => p.client).map(p => p.client))].length,
    years: [...new Set(projects.map(p => p.year))].length
  }), [projects]);

  return (
    <div className="project-stats">
      <div className="stat-item">
        <span className="stat-value">{stats.total}</span>
        <span className="stat-label">Projetos</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{stats.technologies}+</span>
        <span className="stat-label">Tecnologias</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{stats.clients}</span>
        <span className="stat-label">Clientes</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{stats.years}</span>
        <span className="stat-label">Anos</span>
      </div>
    </div>
  );
});

const Portfolio = () => {
  const { scrollY } = useScroll();
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'list'
  const [searchQuery, setSearchQuery] = useState('');
  
  const heroRef = useRef(null);
  const projectsRef = useRef(null);

  // Animações baseadas no scroll
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.98]);

  // Dados dos projetos - Versão detalhada
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Transita.IA - Plataforma de Logística',
      description: 'Plataforma de logística com integração de pagamentos, gestão de frotas,multas,motoristas,funcionarios e dashboard administrativo.',
      longDescription: 'Desenvolvimento de uma plataforma de logística completa para uma empresa de transporte. O projeto incluiu integração com múltiplos meios de pagamento, sistema de gestão de frotas,motorista,funcioanrios e multas  em tempo real, dashboard administrativo personalizado e otimização para SEO.',
      image: projTransita,
      technologies: [
        { name: 'React', icon: <Code size={16} />, purpose: 'Interface do usuário' },
        { name: 'React', icon: <Code size={16} />, purpose: 'Framework e SSR' },
        { name: 'Node.js', icon: <Server size={16} />, purpose: 'Backend API' },
        { name: 'Azure', icon: <Database size={16} />, purpose: 'Banco de dados' },
        { name: 'Stripe', icon: <CreditCard size={16} />, purpose: 'Pagamentos' },
        { name: 'Redis', icon: <Database size={16} />, purpose: 'Cache' },
        { name: 'CSS', icon: <Brush size={16} />, purpose: 'Estilização' },
        { name: 'JavaScript', icon: <Braces size={16} />, purpose: 'Tipagem' }
      ],
      categories: ['E-commerce', 'Web App', 'Dashboard'],
      features: [
        'Registro e login de usuários',
        'Dashboard para motoristas e administradores',
        'Consulta de Multas em tempo real',
        'Relatórios de desempenho e eficiência',
        'Registro de frotas e veículos',
        'Registro de motoristas e funcionários',
        'Filtragem avançada de dados',
        'Financeiro com integração de pagamentos'
      ],
      challenge: 'O principal desafio esta sendo achar investidores que acreditem no projeto e queiram investir para o desenvolvimento do mesmo, pois é um projeto complexo e de grande porte, mas estou buscando parcerias para conseguir desenvolver o projeto.',
      solution: 'Estou focando em desenvolver um MVP (Produto Mínimo Viável) para apresentar a potenciais investidores e parceiros, mostrando o valor e o potencial do projeto. Além disso, estou participando de eventos de networking e buscando mentores que possam me ajudar a refinar a proposta e encontrar as conexões certas.',
      results: [
        { value: 'Em desenvolvimento', label: 'Status do projeto' }
      ],
      year: '2025',
      duration: 'Desenvolvimento ',
      team: 2,
      complexity: 'Alta',
      demo: 'https://transita-ia-versaonova.netlify.app/',
      code: 'https://github.com/EmannuelMt/Transita.IA-SIte-Versao-nova',
      featured: true,
      status: 'Desenvolvimento'
    },
    {
      id: 2,
      title: 'Doce Encanto',
      description: 'Site institucional para uma confeitaria, com design elegante e responsivo, galeria de produtos e formulário de contato..',
      longDescription: 'Desenvolvimento de um site institucional para uma confeitaria, com design elegante e responsivo, galeria de produtos e formulário de contato.',
      image: projDoce,
      technologies: [
        { name: 'React', icon: <Code size={16} />, purpose: 'Interface do usuário' },
        { name: 'Node.js', icon: <Server size={16} />, purpose: 'Backend API' },
        { name: 'Firebase', icon: <Cloud size={16} />, purpose: 'Realtime & Push' },
        { name: 'Realdatabase', icon: <Database size={16} />, purpose: 'Banco de dados' },
        { name: 'Google Maps', icon: <MapPin size={16} />, purpose: 'Geolocalização' },
        { name: 'Socket.io', icon: <Zap size={16} />, purpose: 'Comunicação real-time' },
        { name: 'Redux', icon: <Layers size={16} />, purpose: 'Gerenciamento de estado' }
      ],
      categories: ['Institucional', 'E-commerce', 'Web App','Delivery'],
      features: [
        'Delivery em tempo real com geolocalização',
        'Encomenda personalizada',
        'Notificações em tempo real',
        'Sistema de avaliações',
        'Múltiplos métodos de pagamento',
        'Histórico de pedidos',
        'Favoritos e busca',
        'Modo offline'
      ],
      challenge: 'Garantir a sincronização em tempo real das localizações e status dos pedidos, mesmo com conexões instáveis de internet, foi o maior desafio.',
      solution: 'Atuamlmente o site contem so a parte instituciional e frontend, estou buscando parcerias para desenvolver a parte de backend e integrar as funcionalidades de delivery em tempo real, geolocalização e comunicação em tempo real.',
      results: [
        { value: '10k+', label: 'Downloads' },
        { value: '4.8', label: 'Rating na Play Store' },
        { value: '30%', label: 'Crescimento mensal' },
        { value: '1k+', label: 'Pedidos/dia' }
      ],
      year: '2025',
      duration: '1 semana',
      team: 1,
      complexity: 'Alta',
      demo: 'https://doceencantoconfeitaria.netlify.app/',
      featured: true,
      status: 'concluido'
    },
    {
      id: 3,
      title: 'Supermercado Premium',
      description: 'E-commerce completo para um supermercado, com catálogo de produtos, carrinho de compras e sistema de pagamento integrado.',
      longDescription: 'E-commerce completo para um supermercado, com catálogo de produtos, carrinho de compras e sistema de pagamento integrado. O projeto incluiu integração com múltiplos meios de pagamento, sistema de gestão de estoque em tempo real, dashboard administrativo personalizado e otimização para SEO.',
      image: projSuper,
      technologies: [
        { name: 'Next.js', icon: <Code size={16} />, purpose: 'Framework' },
        { name: 'TypeScript', icon: <Braces size={16} />, purpose: 'Tipagem' },
        { name: 'Chart.js', icon: <BarChart3 size={16} />, purpose: 'Gráficos' },
        { name: 'Prisma', icon: <Database size={16} />, purpose: 'ORM' },
        { name: 'PostgreSQL', icon: <Database size={16} />, purpose: 'Banco de dados' },
        { name: 'FirebaseAuth', icon: <Lock size={16} />, purpose: 'Autenticação' }
      ],
      categories: ['Dashboard', 'Analytics', 'Web App'],
      features: [
        'Gráficos interativos e responsivos',
        'Exportação em PDF/Excel/CSV',
        'Relatórios personalizáveis',
        'Filtros avançados',
        'Autenticação com múltiplos providers',
        'Controle de permissões',
        'Dashboard em tempo real',
        'Alertas e notificações'
      ],
      challenge: 'Criar uma expreincia de usuario fluida com aparencia de apalicatico mobile, mesmo com grandes volumes de dados e gráficos complexos, foi o maior desafio do projeto.',
      solution: 'O site contem apenas a parte de frontend, estou buscando parcerias para desenvolver a parte de backend e integrar as funcionalidades de gráficos interativos, exportação de relatórios e autenticação com múltiplos providers.',
      results: [
        { value: '50k+', label: 'Usuários ativos' },
        { value: '4.5', label: 'Rating na App Store' },
        { value: '20%', label: 'Crescimento mensal' },
        { value: '500+', label: 'Pedidos/dia' }
      ],
      year: '2023',
      duration: '3 meses',
      team: 2,
      complexity: 'Média',
      demo: 'https://supermercadopremium.netlify.app/',
      code: 'https://github.com/username/dashboard',
      featured: false,
      status: 'concluido'
    },
    {
      id: 4,
      title: 'Instituto Financeiro',
      description: 'Sistema dinâmico para empréstimos bancários, agrícolas e pessoais, com dashboard de controle e relatórios financeiros.',
      longDescription: 'Desenvolvimento de um sistema completo para um instituto financeiro, com foco em empréstimos bancários, agrícolas e pessoais. O projeto incluiu dashboard de controle para administradores, relatórios financeiros detalhados e integração com sistemas de crédito e análise de risco.',
      image: projInstituto,
      technologies: [
        { name: 'React', icon: <Code size={16} />, purpose: 'Frontend' },
        { name: 'Django', icon: <Server size={16} />, purpose: 'Backend' },
        { name: 'PostgreSQL', icon: <Database size={16} />, purpose: 'Banco de dados' },
        { name: 'Redis', icon: <Database size={16} />, purpose: 'Cache' },
        { name: 'Docker', icon: <Cloud size={16} />, purpose: 'Containerização' },
        { name: 'Celery', icon: <Zap size={16} />, purpose: 'Tarefas assíncronas' }
      ],
      categories: ['ERP', 'Sistema', 'Gestão'],
      features: [
        'Módulo de vendas e PDV',
        'Controle de estoque',
        'Gestão financeira',
        'RH e folha de pagamento',
        'Relatórios gerenciais',
        'Dashboard executivo',
        'Gestão de contratos',
        'Nota fiscal eletrônica'
      ],
      challenge: 'Fazer um site institucional voltado para o setor financeiro, com funcionalidades complexas e integração com sistemas de crédito e análise de risco, foi o maior desafio do projeto.',
      solution: 'o site tem apenas a parte de frontend, estou buscando parcerias para desenvolver a parte de backend e integrar as funcionalidades de dashboard de controle, relatórios financeiros e integração com sistemas de crédito e análise de risco.',
      results: [
        { value: '100+', label: 'Usuários ativos' },
        { value: '4.7', label: 'Rating dos usuários' },
        { value: '15%', label: 'Crescimento mensal' },
        { value: '200+', label: 'Empréstimos processados/mês' }
      ],
      year: '2025',
      duration: '1 semana',
      team: 5,
      complexity: 'Alta',
     
      demo: 'http://instituto-financeiro.netlify.app/',
      code: 'https://github.com/EmannuelMt/Instituto-Financeiro',
      featured: false,
      status: 'concluido'
    },
    {
      id: 5,
      title: 'Ecos da Realidade - Plataforma de Rpg',
      description: 'Site web open sorce para comunidade de jogadores de rpg de ordem paranormal,com sistema de criação de personagens,gerenciamento de campanhas e fórum de discussão.',
      longDescription: 'Landing page moderna e responsiva para uma startup de tecnologia, com foco em conversão e experiência do usuário.',
      image: projEcos,
      technologies: [
        { name: 'React', icon: <Code size={16} />, purpose: 'Framework' },
        { name: 'Node.js', icon: <Code size={16} />, purpose: 'SSR/SSG' },
        { name: 'Framer Motion', icon: <Zap size={16} />, purpose: 'Animações' },
        { name: ' CSS', icon: <Brush size={16} />, purpose: 'Estilização' },
        { name: 'Vercel', icon: <Cloud size={16} />, purpose: 'Deploy' }
      ],
      categories: ['Website', 'Rpg', 'Comunidade'],
      features: [
        'Design moderno e responsivo',
        'Animações suaves e interativas',
        'Formulário de contato otimizado',
      ],
      challenge: 'O maior esta sendo criar uma experiencia de usuário envolvente e voltada para comomunidade de jogadores de rpg, com funcionalidades específicas para criação de personagens, gerenciamento de campanhas e fórum de discussão.',
      solution: 'Estou focando em desenvolver um MVP (Produto Mínimo Viável) para apresentar a potenciais investidores e parceiros, mostrando o valor e o potencial do projeto. Além disso, estou participando de eventos de networking e buscando mentores que possam me ajudar a refinar a proposta e encontrar as conexões certas.',
      results: [
        { value: '30%', label: 'Aumento na conversão' },
        { value: '50%', label: 'Redução na taxa de rejeição' },
        { value: '20%', label: 'Aumento no tempo médio no site' },
        { value: '4.9', label: 'Avaliação dos usuários' }
      ],
      year: '2025',
      duration: 'Desenvolvimento',
      team: 1,
      complexity: 'Alta',
      client: 'TechStart',
      demo: 'https://demo-landing.com',
      code: 'https://github.com/username/landing',
      featured: false,
      status: 'em-andamento'
    },
    {
      id: 6,
      title: 'BurgerArtisane',
      description: ' Sistema de delivery para uma hamburgueria artesanal, com cardápio interativo, personalização de pedidos e rastreamento em tempo real.',
      longDescription: 'Desenvolvimento de um sistema de delivery completo para uma hamburgueria artesanal, com cardápio interativo, personalização de pedidos e rastreamento em tempo real. O projeto incluiu integração com sistemas de pagamento, dashboard administrativo para gestão de pedidos e otimização para SEO.',
      image: projBurge,
      technologies: [
        { name: 'Node.js', icon: <Server size={16} />, purpose: 'Runtime' },
        { name: 'Express', icon: <Server size={16} />, purpose: 'Framework' },
        { name: 'PostgreSQL', icon: <Database size={16} />, purpose: 'Banco de dados' },
        { name: 'Redis', icon: <Database size={16} />, purpose: 'Cache' },
        { name: 'Docker', icon: <Cloud size={16} />, purpose: 'Container' },
        { name: 'Jest', icon: <Check size={16} />, purpose: 'Testes' }
      ],
      categories: ['E-commerce', 'Web App', 'Pagamentos'],
      features: [
        'Múltiplos gateways de pagamento',
        'Sistema de antifraude',
        'Webhooks para notificações',
        'Dashboard de transações',
        'Relatórios financeiros',
        'Split de pagamentos',
        'Recorrência e assinaturas',
        'API documentada (Swagger)'
      ],
      challenge: 'Garantir alta disponibilidade e segurança em um sistema de pagamentos, com integração de múltiplos gateways e proteção contra fraudes, foi o maior desafio do projeto.',
      solution: 'O site contem apenas a parte de frontend, estou buscando parcerias para desenvolver a parte de backend e integrar as funcionalidades de múltiplos gateways de pagamento, sistema de antifraude e dashboard de transações.',
      results: [
        { value: '99.99%', label: 'Uptime' },
        { value: '50ms', label: 'Latência média' },
        { value: '5+', label: 'Gateways integrados' },
        { value: '1M+', label: 'Transações/mês' }
      ],
      year: '2023',
      duration: '3 dias',
      team: 3,
      complexity: 'Alta',
      client: 'FinTech Solutions',
      demo: 'https://burgerartisan.netlify.app/',
      featured: true,
      status: 'concluido'
    },
    {
      id: 7,
      title: 'Worship of Us - Site pessoal',
      description: 'Site instucional pra salvar momentos com a minha namorada,com fotos,videos e depoimentos.',
      longDescription: 'Site pessoal para compartilhar momentos especiais com a minha namorada, incluindo fotos, vídeos e depoimentos.',
      image: projWorship,
      technologies: [
        { name: 'React', icon: <Code size={16} />, purpose: 'Frontend' },
        { name: 'Node.js', icon: <Server size={16} />, purpose: 'Backend' },
        { name: 'MongoDB', icon: <Database size={16} />, purpose: 'Banco de dados' },
        { name: 'AWS S3', icon: <Cloud size={16} />, purpose: 'Armazenamento' },
        { name: 'Video.js', icon: <Video size={16} />, purpose: 'Player de vídeo' }
      ],
      categories: ['Website', 'Streaming', 'Pessoal'],
      features: [
        'Streaming de vídeos',
        'Sistema de matrículas',
        'Certificados automáticos',
        'Quizzes e avaliações',
        'Gamificação',
        'Comunidade e fórum',
        'Progresso do aluno',
        'Relatórios de aprendizagem'
      ],
      challenge: 'Garantir playback suave de vídeos mesmo em conexões lentas, com adaptação automática de qualidade.',
      solution: 'Utilizamos HLS para streaming adaptativo e AWS CloudFront para distribuição de conteúdo. Implementamos pré-carregamento inteligente de vídeos.',
      results: [
        { value: '5k+', label: 'Alunos ativos' },
        { value: '200+', label: 'Cursos' },
        { value: '95%', label: 'Taxa de conclusão' },
        { value: '4.8', label: 'Avaliação' }
      ],
      year: '2025',
      duration: 'desenvolvimento',
      team: 4,
      complexity: 'Alta',
      demo: 'https://demo-cursos.com',
      code: 'https://github.com/username/ead-platform',
      featured: false,
      status: 'em-andamento'
    },
    {
      id: 8,
      title: 'Portfólio Pessoal',
      description: 'Meu site pessoal para mostrar meus projetos, habilidades e experiências profissionais.',
      longDescription: 'Desenvolvimento de um site pessoal para mostrar meus projetos, habilidades e experiências profissionais. O site inclui uma seção de portfólio detalhada, blog para compartilhar conhecimentos e um formulário de contato.',
      image: projEmannuel,
      technologies: [
        { name: 'React', icon: <Code size={16} />, purpose: 'Frontend' },
        { name: 'Framer Motion', icon: <Code size={16} />, purpose: 'Animações' },
        { name: 'React Icons', icon: <Code size={16} />, purpose: 'Ícones' },
        { name: 'Css', icon: <Cloud size={16} />, purpose: 'Css' },
        {name: 'JavaScript', icon: <Code size={16} />, purpose: 'Linguagem de programação' },
        { name: 'Netlify', icon: <Cloud size={16} />, purpose: 'Deploy' }
      ],
      categories: ['Website', 'Portfólio', 'Pessoal'],
      features: [
        'Design moderno e responsivo',
        'Animações suaves e interativas',
        'Seção de portfólio detalhada',
        'Blog para compartilhar conhecimentos',
        'Formulário de contato funcional',
        'Otimização para SEO',
        'Integração com redes sociais',
        'Deploy contínuo com Netlify'
      ],
      challenge: 'Criar um site pessoal que seja ao mesmo tempo um portfólio profissional e um espaço para compartilhar conhecimentos, com um design moderno e interativo.',
      solution: 'Utilizei React para criar uma interface dinâmica e responsiva, Framer Motion para animações suaves e React Icons para uma variedade de ícones. O site foi otimizado para SEO e implementado com deploy contínuo usando Netlify.',
      results: [
        { value: '2k+', label: 'Visitas' },
        { value: '50+', label: 'Contatos recebidos' },
        { value: '4.9', label: 'Avaliação dos visitantes' },
        { value: '20+', label: 'Oportunidades de trabalho' }
      ],
      year: '2025',
      duration: '1 mês',
      team: 1,
      complexity: 'Média',
      demo: 'https://emannuelmt.netlify.app/',
      code: '',
      featured: true,
      status: 'concluido' 
    },
   
  ], []);

  // Função auxiliar para ícones de categoria
  const getCategoryIcon = (category) => {
    const icons = {
      'E-commerce': ShoppingCart,
      'Mobile': Smartphone,
      'Dashboard': BarChart3,
      'Analytics': TrendingUp,
      'ERP': Building2,
      'Website': Globe,
      'Landing Page': Layout,
      'Corporativo': Building2,
      'API': Server,
      'Backend': Database,
      'Pagamentos': CreditCard,
      'Educação': BookOpen,
      'Plataforma': Layout,
      'Streaming': Video,
      'Saúde': Heart,
      'Fitness': Zap,
      'Web App': Globe,
      'Real-time': Zap,
      'Sistema': Cpu,
      'Gestão': Briefcase
    };
    return icons[category] || Code;
  };

  // Categorias para filtros
  const categories = useMemo(() => {
    const cats = new Set();
    projects.forEach(project => {
      (project.categories || []).forEach(cat => cats.add(cat));
    });
    return Array.from(cats).map(cat => ({
      id: cat.toLowerCase().replace(/\s+/g, '-'),
      name: cat,
      icon: getCategoryIcon(cat)
    }));
  }, [projects]);

  // Filtrar projetos
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Filtro por categoria
      if (activeFilter !== 'todos') {
        const categoryMatch = (project.categories || []).some(
          cat => cat.toLowerCase().replace(/\s+/g, '-') === activeFilter
        );
        if (!categoryMatch) return false;
      }

      // Filtro por busca
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some(tech => tech.name.toLowerCase().includes(query)) ||
          project.client?.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [projects, activeFilter, searchQuery]);

  // Projetos em destaque
  const featuredProjects = useMemo(() => {
    return projects.filter(p => p.featured);
  }, [projects]);

  const handleViewDetails = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

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
    <div className="portfolio-page">
      {/* Hero Banner */}
      <section ref={heroRef} className="portfolio-hero" id="hero">
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
            <Briefcase size={16} />
            <span>Portfólio</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Projetos que <span className="title-gradient">transformam</span>
            <br />ideias em realidade
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Conheça alguns dos projetos que desenvolvi, desde sites institucionais 
            até sistemas complexos e aplicativos mobile.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('projetos')}
            >
              <span>Ver projetos</span>
              <ArrowRight size={20} />
            </button>
            <Link to="/contato" className="btn-secondary">
              <MessageSquare size={18} />
              <span>Iniciar projeto</span>
            </Link>
          </motion.div>

          <motion.div 
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => scrollToSection('projetos')}
          >
            <span>Conheça meu trabalho</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>

        
      </section>

      {/* Estatísticas */}
      <section className="stats-section">
        <div className="container">
          <ProjectStats projects={projects} />
        </div>
      </section>

      {/* Projetos em Destaque */}
      {featuredProjects.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">
                <Sparkles size={16} />
                Destaques
              </span>
              <h2 className="section-title">
                Projetos em <span className="title-gradient">destaque</span>
              </h2>
            </motion.div>

            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Todos os Projetos */}
      <section className="projects-section" id="projetos" ref={projectsRef}>
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
              Portfólio Completo
            </span>
            <h2 className="section-title">
              Todos os <span className="title-gradient">projetos</span>
            </h2>
            <p className="section-description">
              Explore minha trajetória através dos projetos desenvolvidos ao longo dos anos
            </p>
          </motion.div>

          {/* Barra de ferramentas */}
          <div className="projects-toolbar">
            {/* Busca */}
            <div className="search-wrapper">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Visualização */}
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Visualização em grade"
              >
                <Grid size={16} />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="Visualização em lista"
              >
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Filtros */}
          <ProjectFilters
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Grid de Projetos */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${activeFilter}-${viewMode}-${searchQuery}`}
              className={`projects-grid ${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onViewDetails={handleViewDetails}
                  />
                ))
              ) : (
                <div className="no-results">
                  <AlertCircle size={48} />
                  <h3>Nenhum projeto encontrado</h3>
                  <p>Tente ajustar os filtros ou termos de busca</p>
                  <button 
                    className="reset-filters"
                    onClick={() => {
                      setActiveFilter('todos');
                      setSearchQuery('');
                    }}
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Resultados encontrados */}
          {filteredProjects.length > 0 && (
            <div className="results-info">
              <span>{filteredProjects.length} projetos encontrados</span>
            </div>
          )}
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
            <div className="cta-content">
              <h2 className="cta-title">
                Vamos criar algo <span className="title-gradient">incrível</span> juntos?
              </h2>
              <p className="cta-description">
                Se você tem um projeto em mente ou quer discutir uma ideia, entre em contato. 
                Será um prazer ajudar a transformar sua visão em realidade.
              </p>
              <div className="cta-buttons">
                <Link to="/contato" className="cta-button-primary">
                  <span>Iniciar conversa</span>
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button-secondary"
                >
                  <Github size={18} />
                  <span>Ver GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de Detalhes */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;