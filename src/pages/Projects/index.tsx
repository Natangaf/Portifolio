import { useState } from "react";
import { StylesProjects } from "./style";
import { useNavigate } from "react-router-dom";
import { ProjectsListFront } from "../../base/ProjectsListFront";
import { ProjectsListBack } from "../../base/ProjectsListBack";

export function Projects() {
  const [tab, setTab] = useState<"front" | "back">("front");
  const navigate = useNavigate();

  const list = tab === "front" ? ProjectsListFront : ProjectsListBack;

  return (
    <StylesProjects>
      <div className="proj-container">
        <div className="proj-header">
          <p className="proj-label">Portfólio</p>
          <h2 className="proj-title">Projetos</h2>
          <p className="proj-sub">Uma seleção de projetos front-end e back-end.</p>
        </div>

        <div className="proj-tabs">
          <button
            className={`proj-tab${tab === "front" ? " active" : ""}`}
            onClick={() => setTab("front")}
          >
            Front-end
          </button>
          <button
            className={`proj-tab${tab === "back" ? " active" : ""}`}
            onClick={() => setTab("back")}
          >
            Back-end
          </button>
        </div>

        <div className="proj-grid">
          {list.map((project) => (
            <div
              className="proj-card"
              key={project.id + project.name}
              onClick={() => navigate(`/ProjectsFront`, { state: { project } })}
            >
              <img
                className="proj-card-img"
                src={project.background}
                alt={project.name}
              />
              <div className="proj-card-body">
                <div className="proj-card-name">{project.name}</div>
                <p className="proj-card-desc">{project.description}</p>
                <div className="proj-card-chips">
                  {project.usedLanguages?.map((lang: string) => (
                    <span className="proj-card-chip" key={lang}>{lang}</span>
                  ))}
                </div>
                <div className="proj-card-links">
                  {project.linkRepo && (
                    <a
                      className="proj-card-link"
                      href={project.linkRepo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub →
                    </a>
                  )}
                  {project.linkSite && (
                    <a
                      className="proj-card-link"
                      href={project.linkSite}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StylesProjects>
  );
}
