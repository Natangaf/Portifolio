import * as yup from 'yup';

const schemaContact = yup.object().shape({
  name: yup.string().required("Como Vou saber Quem é você,me conta ai"),
  email: yup
    .string()
    .required("Sem seu e-mail nos não vamos conseguir conversar")
    .email("É necessário fornecer um email válido"),
  message: yup.string().required("Me conta sobre o que vamos Conversar"),
});



export type schemaContactDTO = {
  name: string;
  email: string;
  message: string;
};
export default schemaContact;
