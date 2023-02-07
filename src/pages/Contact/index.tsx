import  { useContext } from "react"
import { StylesContact } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { InputsContact } from "../../components/InputsContact";
import { StyledButtons } from "../../styles/Buttons";
import { ProjectContext } from "../../context/ProjectContext";

export function Contact() {
    const { slide  } = useContext(ProjectContext)
   
    return (
        <StylesContact
            variants={slide}
            animate="mostrar"
            initial="inicial"
            exit="esconder"
            transition={{
                type: "just"
            }}
        >
            <div className="container">
                <section>
                    <StyledTypography classText="Heading2" tag="h2">
                        Contato
                    </StyledTypography>
                    <StyledTypography classText="BodyColor" tag="p">
                        natanf1ernandes@gmail.com
                    </StyledTypography>
                </section>
                <section>
                    <StyledTypography classText="Body" tag="h2">
                        Vamos tomar um café e <span>bater papo comigo</span>
                    </StyledTypography >
                    <form >
                        <InputsContact name="Nome" label="Seu nome" />
                        <InputsContact name="Email" label="Seu Email" />
                        <InputsContact name="Mensagem" label="Mensagem" />
                        <StyledButtons nameButtons="buttonSend">Enviar</StyledButtons>
                    </form>
                </section>
            </div>
        </StylesContact >
    )
}