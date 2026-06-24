import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { StylesContact } from "./style";
import { InputsContact } from "../../components/InputsContact";
import { StyledButtons } from "../../styles/Buttons";
import { Loader } from "../../components/Loader";
import schemaContact, { schemaContactDTO } from "./schemaContact";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

export function Contact() {
  const [send, setSend] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver<schemaContactDTO>(schemaContact),
  });

  const onSubmit = handleSubmit(
    async ({ name, email, message }: schemaContactDTO) => {
      setSend(true);
      const tamplateParams = { from_name: name, message, email };
      try {
        await emailjs.send("service_zfrc958", "template_rx5pyum", tamplateParams, "ptJ1nHgaX-ms2AHkj");
        toast.success("Já, já entro em contato!");
        reset();
      } catch (error) {
        toast.error("Algo deu errado, tenta de novo.");
      } finally {
        setSend(false);
      }
    }
  );

  return (
    <StylesContact>
      <div className="container">
        <section>
          <p className="section-label">Contato</p>
          <h2 className="contact-title">Vamos construir<br />algo juntos?</h2>
          <p className="contact-sub">
            Aberto a projetos freelance, oportunidades e parcerias.
          </p>
          <p className="contact-email">natanga.dev@gmail.com</p>
          <div className="contact-links">
            <a className="c-link" href="https://github.com/Natangaf" target="_blank" rel="noreferrer">GitHub →</a>
            <a className="c-link" href="https://linkedin.com/in/natangaf" target="_blank" rel="noreferrer">LinkedIn →</a>
          </div>
        </section>

        <section>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>
            Enviar mensagem
          </h3>
          <form onSubmit={onSubmit} noValidate>
            <InputsContact titleInput="Nome" label="Seu nome" {...register("name")} />
            <p className="error">{errors.name?.message || " "}</p>

            <InputsContact titleInput="Email" label="Seu email" {...register("email")} />
            <p className="error">{errors.email?.message || " "}</p>

            <InputsContact titleInput="Mensagem" label="Mensagem" {...register("message")} />
            <p className="error">{errors.message?.message || " "}</p>

            <StyledButtons nameButtons="buttonSend">
              {send ? <Loader /> : "Enviar"}
            </StyledButtons>
          </form>
        </section>
      </div>
    </StylesContact>
  );
}
