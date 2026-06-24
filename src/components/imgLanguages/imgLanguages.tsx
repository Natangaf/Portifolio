import TypeORM from "../../assets/icons/iconPrograms/TypeORM.png"
import { iImgLanguages } from "../../interface";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const iconMap: Record<string, string> = {
  html5:        `${BASE}/html5/html5-plain.svg`,
  css:          `${BASE}/css3/css3-plain.svg`,
  javascript:   `${BASE}/javascript/javascript-plain.svg`,
  Python:       `${BASE}/python/python-plain.svg`,
  php:          `${BASE}/php/php-plain.svg`,
  "C#":         `${BASE}/csharp/csharp-plain.svg`,
  react:        `${BASE}/react/react-original.svg`,
  typescript:   `${BASE}/typescript/typescript-plain.svg`,
  nodejs:       `${BASE}/nodejs/nodejs-plain.svg`,
  "Express.js": `${BASE}/express/express-original-wordmark.svg`,
  vuejs:        `${BASE}/vuejs/vuejs-plain.svg`,
  "next.js":    `${BASE}/nextjs/nextjs-plain.svg`,
  Django:       `${BASE}/django/django-plain.svg`,
  springboot:   `${BASE}/spring/spring-original.svg`,
  docker:       `${BASE}/docker/docker-plain.svg`,
  aws:          `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  git:          `${BASE}/git/git-plain.svg`,
  mongodb:      `${BASE}/mongodb/mongodb-plain.svg`,
  Postgresql:   `${BASE}/postgresql/postgresql-plain.svg`,
  Jest:         `${BASE}/jest/jest-plain.svg`,
  linux:        `${BASE}/linux/linux-plain.svg`,
  Sqlite3:      `${BASE}/sqlite/sqlite-plain.svg`,
  Pytest:       `${BASE}/pytest/pytest-plain.svg`,
};

export function ImgLanguages({ language }: iImgLanguages) {
  if (language === "TypeORM") {
    return <img src={TypeORM} alt="TypeORM" />;
  }
  const src = iconMap[language];
  if (!src) return null;
  return <img src={src} alt={language} />;
}
