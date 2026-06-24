import { Link } from "react-router-dom";
import { FullpageContext, Slide } from "@ap.cx/react-fullpage";
import { StylesMe } from "./style";
import eu from "../../assets/img/perfil/eu.png";

const START_DATE = new Date("2022-07-01");
const yearsOfExp = Math.ceil(
  (Date.now() - START_DATE.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
);

export function Me() {
  return (
    <StylesMe
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid-overlay" />
      <div className="blob blob-a" />
      <div className="blob blob-b" />

      <div className="container">
        <div className="hero-grid">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-eyebrow">Software Engineer Pleno · Remoto · Arujá, SP</div>
            <h1 className="hero-title">
              Sistemas<br />
              que <span className="outline">simplesmente</span><br />
              <span className="accent">funcionam.</span>
            </h1>
            <p className="hero-body">
              Full-stack &amp; infraestrutura. Backend, APIs, automação em Python e
              servidores Linux/AWS estáveis em produção.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num">{yearsOfExp}+</div>
                <div className="stat-label">anos de exp.</div>
              </div>
              <div className="stat">
                <div className="stat-num">10+</div>
                <div className="stat-label">techs em prod.</div>
              </div>
              <div className="stat">
                <div className="stat-num">24/7</div>
                <div className="stat-label">monitoramento & automação</div>
              </div>
            </div>

            <div className="hero-actions">
              <FullpageContext.Consumer>
                {(ctx: Slide) => (
                  <button
                    className="btn-fill"
                    onClick={() => ctx.goto(ctx.slides[1], true)}
                  >
                    Sobre mim →
                  </button>
                )}
              </FullpageContext.Consumer>
              <Link className="btn-outline" to="/Curriculum">Ver currículo</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="photo-card">
              <div className="photo-inner">
                <img src={eu} alt="Natã Fernandes" />
              </div>
              <span className="sticker sticker-code">{'{ code }'}</span>
              <span className="sticker sticker-online">
                <i /> online
              </span>
            </div>
          </div>

        </div>
      </div>
    </StylesMe>
  );
}
