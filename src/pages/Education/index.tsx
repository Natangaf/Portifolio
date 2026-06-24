import sudesteImg  from "../../assets/icons/companies/sudeste.webp";
import mestresImg   from "../../assets/icons/companies/mestres.ico";
import iesImg       from "../../assets/icons/companies/iesdigital.png";
import bdImg        from "../../assets/icons/companies/bdanalytics.ico";
import adaImg       from "../../assets/icons/ada.png";
import kenzieImg    from "../../assets/icons/kenzielogo.png";

import {
  StylesEducation,
  EduContainer,
  EduHeader,
  EduLabel,
  EduTitle,
  EduGrid,
  EduCol,
  ColLabel,
  TlItem,
  TlOrgRow,
  TlOrgLogo,
  TlPeriod,
  TlOrg,
  TlRole,
  TlDesc,
  TlChips,
  TlChip,
  BadgeCurrent,
} from "./style";

export function Education() {
  return (
    <StylesEducation>
      <EduContainer>
        <EduHeader>
          <EduLabel>Trajetória</EduLabel>
          <EduTitle>Formação & <em>Experiência</em></EduTitle>
        </EduHeader>

        <EduGrid>
          {/* ── FORMAÇÃO ── */}
          <EduCol>
            <ColLabel>🎓 Formação</ColLabel>

            <TlItem>
              <TlPeriod>jun 2024</TlPeriod>
              <TlOrgRow><TlOrgLogo src={adaImg} alt="Ada Tech" /><TlOrg>Ada Tech · Santander Coders</TlOrg></TlOrgRow>
              <TlRole>Trilha Digital | Coders 24 | DevOps</TlRole>
              <TlDesc>
                Especialização em Engenharia de DevOps, com foco em práticas modernas de
                CI/CD e infraestrutura. Git, Linux, AWS (S3, EC2, Lambda), Terraform,
                Docker e monitoramento.
              </TlDesc>
              <TlChips>
                <TlChip>AWS</TlChip>
                <TlChip>Docker</TlChip>
                <TlChip>Terraform</TlChip>
                <TlChip>Linux</TlChip>
                <TlChip>CI/CD</TlChip>
              </TlChips>
            </TlItem>

            <TlItem>
              <TlPeriod>jul 2022 – set 2023 · 2.000h</TlPeriod>
              <TlOrgRow><TlOrgLogo src={kenzieImg} alt="Kenzie Academy" /><TlOrg>Kenzie Academy Brasil</TlOrg></TlOrgRow>
              <TlRole>Desenvolvedor Web Full Stack</TlRole>
              <TlDesc>
                Formação completa em desenvolvimento web, abrangendo frontend, backend e
                soft skills. HTML5, CSS3, JavaScript, React, Node.js, Python (Django) e SQL.
              </TlDesc>
              <TlChips>
                <TlChip>React</TlChip>
                <TlChip>Node.js</TlChip>
                <TlChip>Python</TlChip>
                <TlChip>PostgreSQL</TlChip>
                <TlChip>TypeScript</TlChip>
              </TlChips>
            </TlItem>

            <ColLabel style={{ marginTop: 32 }}>🏅 Certificações</ColLabel>

            <TlItem>
              <TlOrg>Kenzie Academy Brasil</TlOrg>
              <TlRole>Certificado de Desenvolvedor Full-Stack</TlRole>
            </TlItem>

            <TlItem>
              <TlOrg>Kenzie Academy Brasil</TlOrg>
              <TlRole>Certificado Back-end com Python e Django REST Framework</TlRole>
            </TlItem>
          </EduCol>

          {/* ── EXPERIÊNCIA ── */}
          <EduCol>
            <ColLabel>💼 Experiência</ColLabel>

            <TlItem>
              <BadgeCurrent>Atual</BadgeCurrent>
              <TlPeriod>set 2025 – presente · 10 meses · Remoto</TlPeriod>
              <TlOrgRow><TlOrgLogo src={sudesteImg} alt="Sudeste Online" /><TlOrg>Sudeste Online</TlOrg></TlOrgRow>
              <TlRole>Software Engineer Pleno</TlRole>
              <TlDesc>
                Desenvolvimento e sustentação do ecossistema AgroReceita. Backend,
                frontend, mobile e infraestrutura de produção Linux / AWS EC2, PM2,
                Postfix, Fail2Ban. Automações e robôs em Python.
              </TlDesc>
              <TlChips>
                <TlChip>Node.js</TlChip>
                <TlChip>React</TlChip>
                <TlChip>Python</TlChip>
                <TlChip>AWS EC2</TlChip>
                <TlChip>Linux</TlChip>
              </TlChips>
            </TlItem>

            <TlItem>
              <TlPeriod>mar 2025 – set 2025 · 7 meses · Remoto</TlPeriod>
              <TlOrgRow><TlOrgLogo src={bdImg} alt="BD Analytics" /><TlOrg>BD Analytics</TlOrg></TlOrgRow>
              <TlRole>Desenvolvedor Full-Stack Pleno</TlRole>
              <TlDesc>
                Integração com Mercado Livre, Shopee e Bling via APIs. Dashboards,
                relatório DRE e automação de processos com n8n. Promovido de Junior a
                Pleno.
              </TlDesc>
              <TlChips>
                <TlChip>Vue.js</TlChip>
                <TlChip>React</TlChip>
                <TlChip>Node.js</TlChip>
                <TlChip>MongoDB</TlChip>
                <TlChip>n8n</TlChip>
              </TlChips>
            </TlItem>

            <TlItem>
              <TlPeriod>mai 2024 – mar 2025 · 11 meses</TlPeriod>
              <TlOrgRow><TlOrgLogo src={iesImg} alt="Ies Digital" /><TlOrg>Ies Digital Tecnologia Educacional</TlOrg></TlOrgRow>
              <TlRole>Desenvolvedor Full Stack</TlRole>
              <TlDesc>
                Desenvolvimento e manutenção de aplicações web com PHP, SQL e
                CodeIgniter, além de React.js no frontend.
              </TlDesc>
              <TlChips>
                <TlChip>PHP</TlChip>
                <TlChip>CodeIgniter</TlChip>
                <TlChip>React</TlChip>
                <TlChip>SQL</TlChip>
              </TlChips>
            </TlItem>

            <TlItem>
              <TlPeriod>set 2023 – mai 2024 · 9 meses · Remoto</TlPeriod>
              <TlOrgRow><TlOrgLogo src={mestresImg} alt="Mestres da Web" /><TlOrg>Mestres da Web</TlOrg></TlOrgRow>
              <TlRole>Estagiário Front-end</TlRole>
              <TlDesc>
                Landing pages, blogs e interfaces personalizadas. Colaboração com equipe
                de design e desenvolvimento.
              </TlDesc>
              <TlChips>
                <TlChip>Next.js</TlChip>
                <TlChip>TypeScript</TlChip>
                <TlChip>Strapi</TlChip>
                <TlChip>React</TlChip>
              </TlChips>
            </TlItem>
          </EduCol>
        </EduGrid>
      </EduContainer>
    </StylesEducation>
  );
}
