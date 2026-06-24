import { useState } from "react";
import {
  StylesAbout, Container, SectionLabel, SectionTitle,
  AboutGrid, BioText, SkillsGrid, SkillChip, SkillName, SkillLevel,
} from "./style";
import { ImgLanguages } from "../../components/imgLanguages/imgLanguages";
import { languages } from "../../base/Languages";
import { frameworks, infra } from "../../base/Frameworks";

type Tab = "lang" | "fw" | "infra";

const tabs: { key: Tab; label: string }[] = [
  { key: "lang",  label: "Linguagens"  },
  { key: "fw",    label: "Frameworks"  },
  { key: "infra", label: "Infra"       },
];

export function About() {
  const [tab, setTab] = useState<Tab>("lang");
  const list = tab === "lang" ? languages : tab === "fw" ? frameworks : infra;

  return (
    <StylesAbout>
      <Container>
        <div>
          <SectionLabel>Sobre</SectionLabel>
          <SectionTitle>Quem é o natanga?</SectionTitle>
          <AboutGrid>
            <BioText>
              Software Engineer Pleno na <strong>Sudeste Online</strong>, onde faço parte
              do time de desenvolvimento do <strong>Grupo Sudeste</strong> — atuando em
              múltiplos sistemas: <strong>AgroReceita</strong>, <strong>Softficha</strong> e{" "}
              <strong>Planteio</strong> (agente de IA autônomo e escalável).<br /><br />
              Trabalho tanto na camada de código — soluções escaláveis e seguras — quanto
              na <em>infraestrutura dos servidores</em>, garantindo estabilidade, performance
              e segurança em ambientes de produção.<br /><br />
              Minha atuação envolve backend, frontend, mobile, administração de servidores
              Linux (AWS EC2), automações em Python e definição técnica de soluções.
              Acredito que engenharia de software vai além de programar: é{" "}
              <em>entender o problema e automatizar o que pode ser automatizado</em>.
            </BioText>

            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "7px 16px",
                      borderRadius: 5,
                      border: "1px solid var(--border)",
                      cursor: "pointer",
                      background: tab === t.key ? "#fff" : "transparent",
                      color: tab === t.key ? "#6d28d9" : "var(--text-subtle)",
                      transition: "all 0.15s",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <SkillsGrid>
                {list.map((item) => (
                  <SkillChip key={item.id + item.name}>
                    <div style={{ width: 28, height: 28, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ImgLanguages language={item.logo} />
                    </div>
                    <SkillName>{item.name}</SkillName>
                  </SkillChip>
                ))}
              </SkillsGrid>
            </div>
          </AboutGrid>
        </div>
      </Container>
    </StylesAbout>
  );
}
