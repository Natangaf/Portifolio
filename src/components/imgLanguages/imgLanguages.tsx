import react from "../../assets/icons/iconPrograms/react.svg"
import html5 from "../../assets/icons/iconPrograms/html5.svg"
import css from "../../assets/icons/iconPrograms/css.svg"
import javascript from "../../assets/icons/iconPrograms/javascript.svg"
import typescript from "../../assets/icons/iconPrograms/typescript.svg"
import { iImgLanguages } from "../../interface";

export function ImgLanguages({ language }: iImgLanguages) {
    return (
        <>
            {language === "react" && <img src={react} alt={language} />}
            {language === "html5" && <img src={html5} alt={language} />}
            {language === "css" && <img src={css} alt={language} />}
            {language === "javascript" && <img src={javascript} alt={language} />}
            {language === "typescript" && <img src={typescript} alt={language} />}
        </>
    )
}