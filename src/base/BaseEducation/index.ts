import kenzielogo from "../../assets/icons/kenzielogo.png";
import ada from "../../assets/icons/ada.png";

export const BaseEducation = [
  {
    id: 1,
    img: ada,
    name: "Ada Tech · Santander Coders",
    year: "jun 2024",
    resume: "Trilha Digital | Coders 24 | DevOps",
    descripition:
      "Especialização em Engenharia de DevOps, com foco em práticas modernas de CI/CD e infraestrutura. Git, Linux, AWS (S3, EC2, Lambda), Terraform, Docker e monitoramento.",
    chips: ["AWS", "Docker", "Terraform", "Linux", "CI/CD"],
  },
  {
    id: 2,
    img: kenzielogo,
    name: "Kenzie Academy Brasil",
    year: "jul 2022 – set 2023 · 2.000h",
    resume: "Desenvolvedor Web Full Stack",
    descripition:
      "Formação completa em desenvolvimento web, abrangendo frontend, backend e soft skills. HTML5, CSS3, JavaScript, React, Node.js, Python (Django) e SQL.",
    chips: ["React", "Node.js", "Python", "PostgreSQL", "TypeScript"],
  },
];

export const BaseCertifications = [
  {
    id: 1,
    org: "Kenzie Academy Brasil",
    name: "Certificado de Desenvolvedor Full-Stack",
    url: "https://kenzie.com.br",
  },
  {
    id: 2,
    org: "Kenzie Academy Brasil",
    name: "Certificado Back-end com Python e Django REST Framework",
    url: "https://kenzie.com.br",
  },
];

export const BaseExperience = [
  {
    id: 1,
    current: true,
    period: "set 2025 – presente · 10 meses · Remoto",
    company: "Sudeste Online",
    role: "Software Engineer Pleno",
    description:
      "Desenvolvimento e sustentação do ecossistema AgroReceita. Backend, frontend, mobile e infraestrutura de produção Linux / AWS EC2, PM2, Postfix, Fail2Ban. Automações e robôs em Python.",
    chips: ["Node.js", "React", "Python", "AWS EC2", "Linux"],
  },
  {
    id: 2,
    current: false,
    period: "mar 2025 – set 2025 · 7 meses · Remoto",
    company: "BD Analytics",
    role: "Desenvolvedor Full-Stack Pleno",
    description:
      "Integração com Mercado Livre, Shopee e Bling via APIs. Dashboards, relatório DRE e automação de processos com n8n. Promovido de Junior a Pleno.",
    chips: ["Vue.js", "React", "Node.js", "MongoDB", "n8n"],
  },
  {
    id: 3,
    current: false,
    period: "mai 2024 – mar 2025 · 11 meses",
    company: "Ies Digital Tecnologia Educacional",
    role: "Desenvolvedor Full Stack",
    description:
      "Desenvolvimento e manutenção de aplicações web com PHP, SQL e CodeIgniter, além de React.js no frontend.",
    chips: ["PHP", "CodeIgniter", "React", "SQL"],
  },
  {
    id: 4,
    current: false,
    period: "set 2023 – mai 2024 · 9 meses · Remoto",
    company: "Mestres da Web",
    role: "Estagiário Front-end",
    description:
      "Landing pages, blogs e interfaces personalizadas. Colaboração com equipe de design e desenvolvimento.",
    chips: ["Next.js", "TypeScript", "Strapi", "React"],
  },
];
