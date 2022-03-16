//schema validation for the register page
import * as yup from "yup";

//schema validation
const schema = yup
  .object({
    firstName: yup.string().required("Le prénom est requis.").min(4),
    lastName: yup
      .string()
      .required("Le nom est requis.")
      .min(5, "Le nom doit contenir plus que cinq caractères.")
      .max(12, "Le nom ne doit pas contenir plus que douze caractères."),
    age: yup
      .number("L'àge doit ètre un nombre.")
      .required("L'àge est requis.")
      .min(12, "L'àge doit ètre plus que 12 .")
      .max(80, "L'àge doit ètre mois que 80."),
    dob: yup
      .string()
      .required("La date de naissance est requis.")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "La date de naissance doit ètre valide au format  YYYY-MM-DD"
      ),
    email: yup.string().email().required("L'email est requis."),
    password: yup
      .string()
      .required("Le mot de passe est requis.")
      .min(6, "Le mot de passe doit contenir au moins plus que 5 caracrtères.")
      .max(15, "Le mot de passe ne doit pas dépasser 15 caractères."),
    confirmPassword: yup
      .string()
      .required("Tu doit confirmer le mot de passe.")
      .oneOf(
        [yup.ref("password"), null],
        "Password and confirm password does not match."
      ),
    sex: yup.string().required("Le sex de l'utilisateur est requis"),
    avatar: yup
      .mixed()
      .test("required", "L'image est requis.", (value) => {
        return value && value.length;
      })
      .test("fileSize", "L'image est trop lourde.", (value, context) => {
        return value && value[0] && value[0].size <= 200000;
      })
      .test("type", "On supporte que les extensions d'images jpg,jpeg et png.", function (value) {
        return value && value[0] && (value[0].type === "image/png" || value[0].type==="image/jpeg" || value[0].type==="image/jpg");
      }),
    acceptTerms: yup.bool().oneOf([true], "Vous dever cochez pour poursuivre."),
  })
  .required();

export default schema;
