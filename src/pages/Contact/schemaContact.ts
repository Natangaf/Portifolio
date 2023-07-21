import * as yup from "yup";
import { FormValues } from "../../interface";

export const schemaContact = yup.object().shape({
    name: yup.string().required("Como Vou saber Quem é você,me conta ai"),
    email: yup.string().required("Sem seu e-mail nos não vamos conseguir conversar").email("É necessário fornecer um email válido"),
    message: yup.string().required("Me conta sobre o que vamos Conversar")
}) as yup.ObjectSchema<FormValues, object>;
