import * as yup from "yup";

export const userSchemaUser = yup.object().shape({
  email: yup.string().min(1).required(),
});

export const userSchemaPassword = yup.object().shape({
  senha: yup.string().min(6).required(),
});
