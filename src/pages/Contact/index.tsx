import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { StylesContact } from "./style";
import { StyledTypography } from "../../components/baseTypography/style";
import { InputsContact } from "../../components/InputsContact";
import { StyledButtons } from "../../styles/Buttons";
import { schemaContact } from './schemaContact';
import { FormValues } from "../../interface";
import { Loader } from "../../components/Loader";

export function Contact() {
    const [send, setSend] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormValues>({
        mode: "onBlur",
        resolver: yupResolver(schemaContact)
    });

    const onSubmit = handleSubmit(async ({ name, email, message }:FormValues) => {
        setSend(!send)
        const tamplateParams = {
            from_name: name,
            message: message,
            email
        }

        try {
            await emailjs.send("service_zfrc958", "template_rx5pyum", tamplateParams, "ptJ1nHgaX-ms2AHkj")
            toast.success("Já, já entro em contato")
            reset()
        } catch (error) {
            console.log(error);
            toast.error("Algo deu errado, mas já vamos arrumar")
        } finally {
            setSend(false)
        }
    });


    return (
        <StylesContact

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
                    <form onSubmit={onSubmit} noValidate>
                        <InputsContact name="Nome" label="Seu nome" register={register("name")} />
                        {errors.name?.message ?
                            <StyledTypography classText="BodyError" className="error" tag="p">
                                {errors.name.message}
                            </StyledTypography>
                            : <StyledTypography classText="BodyError" className="error" tag="p">
                            </StyledTypography>}
                        <InputsContact name="Email" label="Seu Email" register={register("email")} />
                        {errors.email?.message ?
                            <StyledTypography classText="BodyError" className="error" tag="p">
                                {errors.email.message}
                            </StyledTypography>
                            : <StyledTypography classText="BodyError" className="error" tag="p">
                            </StyledTypography>}
                        <InputsContact name="Mensagem" label="Mensagem" register={register("message")} />
                        {errors.message?.message ?
                            <StyledTypography classText="BodyError" className="error" tag="p">
                                {errors.message?.message}
                            </StyledTypography>
                            : <StyledTypography classText="BodyError" className="error" tag="p">
                            </StyledTypography>}
                        <StyledButtons nameButtons="buttonSend">
                            {send ? <Loader /> : "Enviar"}
                        </StyledButtons>
                    </form>
                </section>
            </div>
        </StylesContact >
    )
}