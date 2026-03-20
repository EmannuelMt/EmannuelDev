import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
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
  Menu,
  X,
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
  Moon,
  Sun
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/images/Logo/logo.svg';
import heroBackground from '../../assets/images/Logo/logobannerhero.jpg';
import aboutPhoto from '../../assets/images/Home/me.jpg';
import projTransita from '../../assets/images/Home/projTransita.png';
import projDoce from '../../assets/images/Home/projDoce.png';
import projSuper from '../../assets/images/Home/projSuper.png';
import projBurger from '../../assets/images/Home/projBurge.png';

// Componente de Partículas Otimizado
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
    <div className="hero-particles">
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

// Componente de Card de Serviço
const ServiceCard = React.memo(({ icon, title, description, features, index }) => (
  <motion.div
    className="service-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <ul className="service-features">
      {features.map((feature, i) => (
        <li key={i} className="service-feature">
          <CheckCircle2 size={16} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
));

// Componente de Card de Portfólio
const PortfolioCard = React.memo(({ project, index }) => (
  <motion.div
    className="portfolio-card"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    <div className="portfolio-image">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="portfolio-overlay">
        <div className="portfolio-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="portfolio-content">
      <h3 className="portfolio-title">{project.title}</h3>
      <p className="portfolio-description">{project.description}</p>
      <div className="portfolio-links">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="portfolio-link">
          <ExternalLink size={16} />
          <span>Demo</span>
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="portfolio-link">
          <Github size={16} />
          <span>Código</span>
        </a>
      </div>
    </div>
  </motion.div>
));

// Componente de Card de Desenvolvimento
const DevCard = React.memo(({ icon, title, description, tools, index }) => (
  <motion.div
    className="dev-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    <div className="dev-icon">{icon}</div>
    <h3 className="dev-title">{title}</h3>
    <p className="dev-description">{description}</p>
    <div className="dev-tools">
      {tools.map((tool, i) => (
        <span key={i} className="dev-tool">{tool}</span>
      ))}
    </div>
  </motion.div>
));

// Componente de Card de Depoimento
const TestimonialCard = React.memo(({ testimonial, index }) => (
  <motion.div
    className="testimonial-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    <div className="testimonial-rating">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
    <p className="testimonial-content">"{testimonial.content}"</p>
    <div className="testimonial-author">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="testimonial-avatar"
        loading="lazy"
      />
      <div>
        <div className="testimonial-name">{testimonial.name}</div>
        <div className="testimonial-role">{testimonial.role}</div>
      </div>
    </div>
    <div className="testimonial-company">{testimonial.company}</div>
  </motion.div>
));

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const heroRef = useRef(null);

  // Animações baseadas no scroll
  const smoothY1 = useSpring(useTransform(scrollY, [0, 500], [0, 150]), { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(useTransform(scrollY, [0, 500], [0, -150]), { stiffness: 100, damping: 30 });
  const heroOpacity = useSpring(useTransform(scrollY, [0, 300], [1, 0.95]), { stiffness: 100, damping: 30 });
  const heroScale = useSpring(useTransform(scrollY, [0, 300], [1, 0.98]), { stiffness: 100, damping: 30 });

  // Dados dos serviços
  const services = useMemo(() => [
    {
      icon: <Code size={32} />,
      title: "Desenvolvimento Web",
      description: "Sites institucionais, landing pages e sistemas web personalizados com as melhores tecnologias.",
      features: ["React/Next.js", "Sites responsivos", "SEO otimizado", "Performance máxima"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência do usuário excepcional.",
      features: ["React Native", "Flutter", "UI/UX otimizado", "Publicação nas lojas"]
    },
    {
      icon: <Server size={32} />,
      title: "Back-end & APIs",
      description: "APIs robustas e escaláveis com arquitetura moderna e segurança avançada.",
      features: ["Node.js", "Python/Django", "Bancos de dados", "Arquitetura REST/GraphQL"]
    },
    {
      icon: <Database size={32} />,
      title: "Banco de Dados",
      description: "Modelagem, otimização e gerenciamento de dados para alta performance.",
      features: ["SQL/NoSQL", "Otimização de queries", "Migração de dados", "Backup automático"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      description: "Infraestrutura na nuvem, deploy automatizado e monitoramento contínuo.",
      features: ["AWS/Azure/GCP", "Docker/Kubernetes", "CI/CD", "Monitoramento 24/7"]
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "E-commerce",
      description: "Lojas virtuais completas com gestão de produtos, pagamentos e entregas.",
      features: ["VTEX", "Shopify", "WooCommerce", "Integrações personalizadas"]
    }
  ], []);

  // Dados do portfólio
  const portfolio = useMemo(() => [
    {
      title: "Transita.IA - Plataforma de Logística",
      description: "Plataforma de logística com integração de pagamentos, gestão de frotas,multas,motoristas,funcionarios e dashboard administrativo.",
      image: projTransita,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "https://transita-ia-versaonova.netlify.app/",
      code: "https://github.com/EmannuelMt/Transita.IA-SIte-Versao-nova"
    },
    {
      title: "Doce Encanto",
      description: "Site de vendas online para uma loja de doces artesanais.",
      image: projDoce,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "https://doceencantoconfeitaria.netlify.app/",
      code: "https://github.com"
    },
    {
      title: "Supermercado Premium",
      description: "E-commerce completo para um supermercado, com catálogo de produtos, carrinho de compras e sistema de pagamento integrado.",
      image: projSuper,
      tech: ["Next.js", "TypeScript", "Chart.js", "Prisma"],
      demo: "https://supermercadopremium.netlify.app/",
      code: "https://github.com"
    },
    {
      title: "BurgerArtisane",
      description: "Sistema de delivery para uma hamburgueria artesanal, com cardápio interativo, personalização de pedidos e rastreamento em tempo real.",
      image: projBurger,
      tech: ["React", "Django", "PostgreSQL", "Redis"],
      demo: "https://burgerartisan.netlify.app/",
      code: "https://github.com"
    }
  ], []);

  // Áreas de desenvolvimento
  const devAreas = useMemo(() => [
    {
      icon: <Layout size={24} />,
      title: "Front-end",
      description: "Interfaces modernas, responsivas e de alta performance.",
      tools: ["React", "Next.js", "TypeScript", "Tailwind", "Vue.js"]
    },
    {
      icon: <Server size={24} />,
      title: "Back-end",
      description: "APIs robustas e sistemas escaláveis.",
      tools: ["Node.js", "Python", "Java", "PHP", "Go"]
    },
    {
      icon: <Database size={24} />,
      title: "Banco de Dados",
      description: "Modelagem e otimização de dados.",
      tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      icon: <Cloud size={24} />,
      title: "DevOps",
      description: "Infraestrutura e automação.",
      tools: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile",
      description: "Apps nativos e híbridos.",
      tools: ["React Native", "Flutter", "iOS", "Android", "Kotlin"]
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Design centrado no usuário.",
      tools: ["Figma", "Adobe XD", "Sketch", "Prototipagem", "Wireframes"]
    }
  ], []);

  // Depoimentos
  const testimonials = useMemo(() => [
    {
      name: "Carlos Eduardo",
      content: "Excelente profissional! Entregou o projeto antes do prazo e com qualidade excepcional. A comunicação foi clara e o código muito bem estruturado.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Carlos+Eduardo&background=2563EB&color=ffffff",
    },
    {
      name: "Fernanda Lima",
      content: "O site superou todas as nossas expectativas. Muito profissional, atencioso com os detalhes e sempre disponível para ajustes.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Fernanda+Lima&background=3B82F6&color=ffffff",
      
    },
    {
      name: "João Pedro",
      content: "Trabalho impecável! O código é limpo, a interface é intuitiva e o desempenho é excelente. Recomendo para qualquer projeto de desenvolvimento.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Joao+Pedro&background=60A5FA&color=ffffff",
    
    },
    {
      name: "Ana Beatriz",
      content: "Comunicação clara, código bem documentado e entregas no prazo. Recomendo fortemente para qualquer projeto!",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Ana+Beatriz&background=93C5FD&color=ffffff",
     
    }
  ], []);



  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('Mensagem enviada com sucesso! Entrarei em contato em até 24 horas.');
  }, [formData]);

  const openVideoModal = useCallback(() => {
    setIsVideoModalOpen(true);
  }, []);

  const closeVideoModal = useCallback(() => {
    setIsVideoModalOpen(false);
  }, []);

  return (
    <div className="home">


      {/* Hero Section */}
      <section ref={heroRef} className="hero" id="home">
        <div className="hero-background">
          <div className="hero-image-overlay"></div>
          <img
            src={heroBackground}
            alt="Hero Background"
            className="hero-background-image"
            loading="eager"
          />
          <div className="hero-gradient-overlay"></div>
          <div className="hero-grid"></div>
          <Particles count={40} />
        </div>

        <motion.div
          className="hero-content"
          style={{
            opacity: heroOpacity,
            scale: heroScale
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            <Sparkles size={16} />
            <span>Desenvolvedor Full Stack</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformando ideias em
            <br />
            <span className="hero-title-gradient">soluções digitais</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Desenvolvimento web, mobile e sistemas personalizados com tecnologia de ponta,
            design excepcional e foco em resultados para o seu negócio.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollToSection('contato')}
            >
              <span>Iniciar Projeto</span>
              <ArrowRight size={20} />
              <div className="btn-glow"></div>
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection('portfolio')}
            >
              <Play size={18} />
              <span>Ver Portfólio</span>
            </button>
          </motion.div>

          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            onClick={() => scrollToSection('sobre')}
          >
            <span>Role para explorar</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>



        <motion.div
          className="hero-scroll"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="hero-scroll-line"></div>
        </motion.div>
      </section>

      {/* Sobre Section */}
      <section className="about" id="sobre">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">
                <Users size={16} />
                Sobre Mim
              </span>

              <h2 className="section-title">
                Desenvolvedor <span className="section-title-gradient">Full Stack</span>
              </h2>

              <p className="about-description">
                Sou desenvolvedor full stack, apaixonado por tecnologia e por transformar ideias em projetos reais. Gosto de pegar uma ideia simples e construir algo que realmente funcione, tenha impacto e resolva problemas de verdade.
              </p>

              <p className="about-description">
                Trabalho com tecnologias modernas no front-end e back-end, sempre focado em criar aplicações rápidas, bem estruturadas e com uma boa experiência para quem usa. Pra mim, código não é só fazer funcionar  é fazer funcionar bem, bonito e organizado.

                Cada projeto que desenvolvo recebe atenção aos detalhes, porque acredito que são os pequenos ajustes que fazem um produto se destacar de verdade.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4>Foco em Resultados</h4>
                    <p>Desenvolvimento orientado a objetivos de negócio</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h4>Tecnologia Atualizada</h4>
                    <p>Sempre utilizando o que há de mais moderno</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4>Comunicação Clara</h4>
                    <p>Transparência em todas as etapas do projeto</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4>Código Seguro</h4>
                    <p>Boas práticas e segurança desde o início</p>
                  </div>
                </div>
              </div>

              <div className="about-stats-mini">
                <div className="about-stat-item">
                  <span className="about-stat-value">2</span>
                  <span className="about-stat-label">anos</span>
                </div>
                <div className="about-stat-item">
                  <span className="about-stat-value">10+</span>
                  <span className="about-stat-label">projetos</span>
                </div>

              </div>

              <div className="about-tech">
                <span className="tech-tag-large">React</span>
                <span className="tech-tag-large">Node.js</span>
                <span className="tech-tag-large">TypeScript</span>
                <span className="tech-tag-large">Python</span>
                <span className="tech-tag-large">Next.js</span>
                <span className="tech-tag-large">MongoDB</span>
                <span className="tech-tag-large">JavaScript</span>
                <span className="tech-tag-large">PHP</span>
              </div>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-image-container">
                <div className="about-image-glow"></div>
                <div className="about-image-placeholder">
                  <img src={aboutPhoto} alt="Foto do desenvolvedor" className="about-photo" loading="lazy" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section className="portfolio" id="portfolio">
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
              Projetos <span className="section-title-gradient">recentes</span>
            </h2>
            <p className="section-description">
              Conheça alguns dos projetos que desenvolvi para clientes de diversos segmentos
            </p>
          </motion.div>

          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <PortfolioCard key={index} project={project} index={index} />
            ))}
          </div>

          <motion.div
            className="portfolio-more"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://github.com/EmannuelMt" target="_blank" rel="noopener noreferrer" className="more-link">
              <Github size={16} />
              <span>Ver mais no GitHub</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Desenvolvimento Section */}
      <section className="development" id="desenvolvimento">
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
              Desenvolvimento
            </span>
            <h2 className="section-title">
              Áreas de <span className="section-title-gradient">especialização</span>
            </h2>
            <p className="section-description">
              Domínio em diversas tecnologias e stacks para atender às suas necessidades
            </p>
          </motion.div>

          <div className="dev-grid">
            {devAreas.map((area, index) => (
              <DevCard key={index} {...area} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="services" id="servicos">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <Rocket size={16} />
              Serviços
            </span>
            <h2 className="section-title">
              Soluções <span className="section-title-gradient">completas</span>
            </h2>
            <p className="section-description">
              Do planejamento à entrega, ofereço serviços completos de desenvolvimento
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <MessageSquare size={16} />
              Depoimentos
            </span>
            <h2 className="section-title">
              O que meus <span className="section-title-gradient">clientes</span> dizem
            </h2>
            <p className="section-description">
              Feedbacks reais de quem já transformou suas ideias em realidade com meu trabalho
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="cta-background">
              <div className="cta-gradient"></div>
            </div>

            <div className="cta-content">
              <h2 className="cta-title">
                Vamos tirar sua ideia do <span className="cta-title-gradient">papel</span>?
              </h2>
              <p className="cta-description">
                Transforme seu projeto em realidade com um desenvolvimento de qualidade,
                dentro do prazo e com suporte contínuo. Entre em contato para um orçamento sem compromisso.
              </p>

              <div className="cta-features">
                <div className="cta-feature">
                  <CheckCircle2 size={20} />
                  <span>Orçamento sem compromisso</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle2 size={20} />
                  <span>Entrega por etapas</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle2 size={20} />
                  <span>Suporte pós-entrega</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle2 size={20} />
                  <span>Código documentado</span>
                </div>
              </div>

              <div className="cta-buttons">
                <button
                  className="cta-button-primary"
                  onClick={() => scrollToSection('contato')}
                >
                  <span>Solicitar orçamento</span>
                  <ChevronRight size={24} />
                </button>
                <button
                  className="cta-button-secondary"
                  onClick={openVideoModal}
                >
                  <span>Como trabalho</span>
                  <Play size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="video-modal-close" onClick={closeVideoModal}>
                <X size={24} />
              </button>
              <div className="video-modal-iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/demo-video-id"
                  title="Como Trabalho"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section className="contact" id="contato">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">
                <Mail size={16} />
                Contato
              </span>

              <h2 className="contact-title">
                Vamos <span className="section-title-gradient">conversar</span>
              </h2>

              <p className="contact-description">
                Estou disponível para novos projetos, parcerias ou apenas para trocar
                uma ideia sobre tecnologia. Entre em contato e vamos criar algo incrível juntos!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Telefone / WhatsApp</h4>
                    <p>+55 (62) 98431-7595</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>emannueldevfullstacksolutions@gmail.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4>Horário de Atendimento</h4>
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 12h</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Localização</h4>
                    <p>Anapolis - GO</p>
                    <p>Disponível para trabalho remoto</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Redes Sociais</h4>
                <div className="social-links">
                  <a href="https://github.com/EmannuelMt" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github size={20} />
                  </a>
                  <a href="https://www.instagram.com/emannuel_mt/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-form-card">
                <h3 className="form-title">Envie sua mensagem</h3>
                <p className="form-subtitle">Respondo em até 24 horas úteis</p>

                <form className="form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Nome completo *"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Email *"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="Empresa"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Telefone *"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      className="form-select"
                      required
                    >
                      <option value="" disabled>Selecione o assunto *</option>
                      <option value="orcamento">Orçamento</option>
                      <option value="duvida">Dúvida técnica</option>
                      <option value="parceria">Parceria</option>
                      <option value="suporte">Suporte</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={4}
                      placeholder="Descreva seu projeto ou necessidade... *"
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit">
                    <span>Enviar mensagem</span>
                    <Send size={18} />
                  </button>

                  <div className="form-footer">
                    <Shield size={14} />
                    <span>Seus dados estão seguros. Não enviaremos spam.</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;