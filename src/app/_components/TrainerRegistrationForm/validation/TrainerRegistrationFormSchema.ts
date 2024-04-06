import * as Yup from "yup";

export const TrainerRegistrationFormSchema = Yup.object().shape({
  trainerName: Yup.string()
    .required("Required from 2 to 20 symbols")
    .min(2, "Required from 2 to 20 symbols")
    .max(20, "Required from 2 to 20 symbols"),

  trainerAge: Yup.number()
    .required("Required range from 16-99")
    .min(16, "Required range from 16-99")
    .max(99, "Required range from 16-99"),

  pokemonName: Yup.string().required("Choose something"),
});
