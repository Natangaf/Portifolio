import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { StylesContact } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
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
      setSend(!send);
      const tamplateParams = {
        from_name: name,
        message: message,
        email,
      };

      try {
        await emailjs.send(
          "service_zfrc958",
          "template_rx5pyum",
          tamplateParams,
          "ptJ1nHgaX-ms2AHkj"
        );
        toast.success("Já, já entro em contato");
        reset();
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado, mas já vamos arrumar");
      } finally {
        setSend(false);
      }
    }
  );

  return (
    <StylesContact>
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
          </StyledTypography>
          <form onSubmit={onSubmit} noValidate>
            <InputsContact
              titleInput="Nome"
              label="Seu nome"
              {...register("name")}
            />
            {errors.name?.message ? (
              <StyledTypography classText="BodyError" className="error" tag="p">
                {errors.name.message}
              </StyledTypography>
            ) : (
              <StyledTypography classText="BodyError" className="error" tag="p">
                {" "}
              </StyledTypography>
            )}
            <InputsContact
              titleInput="Email"
              label="Seu Email"
              {...register("email")}
            />
            {errors.email?.message ? (
              <StyledTypography classText="BodyError" className="error" tag="p">
                {errors.email.message}
              </StyledTypography>
            ) : (
              <StyledTypography classText="BodyError" className="error" tag="p">
                {" "}
              </StyledTypography>
            )}
            <InputsContact
              titleInput="Mensagem"
              label="Mensagem"
              {...register("message")}
            />

            {errors.message?.message ? (
              <StyledTypography classText="BodyError" className="error" tag="p">
                {errors.message?.message}
              </StyledTypography>
            ) : (
              <StyledTypography classText="BodyError" className="error" tag="p">
                {" "}
              </StyledTypography>
            )}
            <StyledButtons nameButtons="buttonSend">
              {send ? <Loader /> : "Enviar"}
            </StyledButtons>
          </form>
        </section>
      </div>
    </StylesContact>
  );
}
