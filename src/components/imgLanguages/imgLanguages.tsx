import react from "../../assets/icons/iconPrograms/react.svg"
import html5 from "../../assets/icons/iconPrograms/html5.svg"
import css from "../../assets/icons/iconPrograms/css.svg"
import javascript from "../../assets/icons/iconPrograms/javascript.svg"
import typescript from "../../assets/icons/iconPrograms/typescript.svg"
import django from "../../assets/icons/iconPrograms/django.svg"
import express from "../../assets/icons/iconPrograms/express.svg"
import TypeORM from "../../assets/icons/iconPrograms/TypeORM.png"
import Jest from "../../assets/icons/iconPrograms/Jest.svg"
import python from "../../assets/icons/iconPrograms/python.svg"
import sqlite from "../../assets/icons/iconPrograms/sqlite.svg"
import pytest from "../../assets/icons/iconPrograms/pytest.svg"
import csharp from "../../assets/icons/iconPrograms/csharp.svg"
import postgresql from "../../assets/icons/iconPrograms/postgresql.svg"
import nextjs from "../../assets/icons/iconPrograms/nextjs.svg"
import php from "../../assets/icons/iconPrograms/php.svg"
import springboot from "../../assets/icons/iconPrograms/springboot.svg"
import { iImgLanguages } from "../../interface";

export function ImgLanguages({ language }: iImgLanguages) {
    return (
        <>
            {language === "html5" && <img src={html5} alt={language} />}
            {language === "css" && <img src={css} alt={language} />}
            {language === "javascript" && <img src={javascript} alt={language} />}
            {language === "Python" && <img src={python} alt={language} />}
            {language === "php" && <img src={php} alt={language} />}
            {language === "C#" && <img src={csharp} alt={language} />}
            {language === "next.js" && <img src={nextjs} alt={language} />}
            {language === "react" && <img src={react} alt={language} />}
            {language === "typescript" && <img src={typescript} alt={language} />}
            {language === "Express.js" && <img src={express} alt={language} />}
            {language === "Jest" && <img src={Jest} alt={language} />}
            {language === "Django" && <img src={django} alt={language} />}
            {language === "Sqlite3" && <img src={sqlite} alt={language} />}
            {language === "Pytest" && <img src={pytest} alt={language} />}
            {language === "Postgresql" && <img src={postgresql} alt={language} />}
            {language === "TypeORM" && <img src={TypeORM} alt={language} />}
            {language === "springboot" && <img src={springboot} alt={language} />}
           
        </>
    )
}