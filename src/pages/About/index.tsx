import { useState } from "react";
import { StyledTypography } from "../../components/baseTypography/style";
import {
  BackCard,
  CardExpertises,
  Expertises,
  FrontCard,
  HeaderExpertises,
  InfoLanguage,
  ListExpertises,
  StylesAbout,
} from "./style";
import { StyledButtons } from "../../styles/Buttons";
import { languages } from "../../base/Languages";
import { frameworks } from "../../base/Frameworks";
import { ImgLanguages } from "../../components/imgLanguages/imgLanguages";
import { BaseTypography } from "../../components/baseTypography";
import dateFormat from "../../utils/formaters/dateFormat";
export function About() {
  const [alterTab, setAltertab] = useState<Boolean>(true);

  const selectTab = () => {
    setAltertab(!alterTab);
  };

  const date = dateFormat("06/2022").split(" ");

  const timeExperience = Number(date[3]) > 6 ? Number(date[0]) + 1 : date[0];

  return (
    <StylesAbout>
      <div className="container">
        <div className="practicingValue">
          <div>
            <StyledTypography
              tag="h2"
              classText="Heading2"
              className="experienceTitle"
            >
              Experiencia
            </StyledTypography>
            <StyledTypography
              tag="p"
              classText="BodyColor"
              className="experienceDescripition"
            >
              Sou um entusiasta Desenvolvedor Full-Stack apaixonado por projetos
              inovadores e pela entrega de soluções de excelência. Minha
              trajetória inclui uma expertise sólida em PHP, HTML5, CSS,
              JavaScript, React, Git, Ruby e APIs, que me capacita a desempenhar
              com destreza no âmbito do Front-End. Adicionalmente, minha
              experiência robusta no Back-End abrange tecnologias como Node.js,
              Python, SQL, PostgreSQL, SQLite3 e C#, contribuindo para a criação
              de sistemas completos e eficientes.{" "}
            </StyledTypography>
          </div>
          <div className="practicingTime">
            <StyledTypography tag="p" classText="Number">
              {timeExperience}
            </StyledTypography>
            <StyledTypography tag="p" classText="Number" className="color">
              .
            </StyledTypography>
          </div>
          <StyledTypography tag="p" classText="Body">
            Anos de pratica
          </StyledTypography>
        </div>
        <Expertises>
          <HeaderExpertises>
            <StyledButtons
              nameButtons="selectTab"
              className={alterTab && "select"}
              onClick={selectTab}
            >
              Conhecimentos
            </StyledButtons>
            <StyledButtons
              nameButtons="selectTab"
              className={!alterTab ? "select" : ""}
              onClick={selectTab}
            >
              FrameWorks
            </StyledButtons>
          </HeaderExpertises>
          <ListExpertises>
            {alterTab
              ? languages.map((language) => {
                  const [flipped, setFlipped] = useState(false);
                  const handleCardFlip = () => {
                    setFlipped(!flipped);
                  };
                  const init = dateFormat(language.init);
                  if (!init) {
                    return null;
                  }
                  return (
                    <CardExpertises
                      key={language.id}
                      onMouseEnter={handleCardFlip}
                      onMouseLeave={handleCardFlip}
                    >
                      <FrontCard flipped={flipped}>
                        <ImgLanguages language={language.logo} />
                        <StyledTypography
                          tag="p"
                          classText="Caption"
                          className="experienceTitle"
                        >
                          {language.name}
                        </StyledTypography>
                      </FrontCard>
                      <BackCard flipped={flipped}>
                        <ImgLanguages language={language.logo} />
                        <InfoLanguage>
                          <StyledTypography
                            tag="p"
                            classText="DescripitionSecundary"
                          >
                            Linguagem :
                          </StyledTypography>{" "}
                          <StyledTypography tag="p" classText="Descripition">
                            {language.name}
                          </StyledTypography>
                        </InfoLanguage>
                        <InfoLanguage>
                          <StyledTypography
                            tag="p"
                            classText="DescripitionSecundary"
                          >
                            Experiencia :
                          </StyledTypography>{" "}
                          <StyledTypography tag="p" classText="Descripition">
                            {init}
                          </StyledTypography>
                        </InfoLanguage>
                        <InfoLanguage>
                          <StyledTypography
                            tag="p"
                            classText="DescripitionSecundary"
                          >
                            Projetos :
                          </StyledTypography>{" "}
                          <StyledTypography tag="p" classText="Descripition">
                            {language.projects}
                          </StyledTypography>
                        </InfoLanguage>
                      </BackCard>
                    </CardExpertises>
                  );
                })
              : frameworks.map((framework) => {
                  const [flipped, setFlipped] = useState(false);
                  const handleCardFlip = () => {
                    setFlipped(!flipped);
                  };
                  const init = dateFormat(framework.init);
                  if (!init) {
                    return null;
                  }
                  return (
                    <CardExpertises
                      key={framework.id}
                      onMouseEnter={handleCardFlip}
                      onMouseLeave={handleCardFlip}
                    >
                      <FrontCard flipped={flipped}>
                        <ImgLanguages language={framework.logo} />
                        <StyledTypography
                          tag="p"
                          classText="Caption"
                          className="experienceTitle"
                        >
                          {framework.name}
                        </StyledTypography>
                      </FrontCard>
                      <BackCard flipped={flipped}>
                        <ImgLanguages language={framework.logo} />
                        <InfoLanguage>
                          <StyledTypography
                            tag="p"
                            classText="DescripitionSecundary"
                          >
                            Linguagem :
                          </StyledTypography>{" "}
                          <StyledTypography tag="p" classText="Descripition">
                            {framework.name}
                          </StyledTypography>
                        </InfoLanguage>
                        <InfoLanguage>
                          <StyledTypography
                            tag="p"
                            classText="DescripitionSecundary"
                          >
                            Experiencia :
                          </StyledTypography>{" "}
                          <StyledTypography tag="p" classText="Descripition">
                            {init}
                          </StyledTypography>
                        </InfoLanguage>
                        <InfoLanguage>
                          <StyledTypography
                            tag="p"
                            classText="DescripitionSecundary"
                          >
                            Projetos :
                          </StyledTypography>{" "}
                          <StyledTypography tag="p" classText="Descripition">
                            {framework.projects}
                          </StyledTypography>
                        </InfoLanguage>
                      </BackCard>
                    </CardExpertises>
                  );
                })}
          </ListExpertises>
        </Expertises>
      </div>
    </StylesAbout>
  );
}
