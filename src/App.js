import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schemas/registerSchema";
import clsx from "clsx";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //handling image uplaod
  const [image, setImage] = useState();
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submit = (data) => {
    const userInfo = { ...data, avatar: image };
    console.log(userInfo);
  };

  return (
    <React.Fragment>
      <div className="App">
        <div className="container-fluid p-0">
          <h2 className="py-2 text-center bg-dark text-light">
            React Hook Form
          </h2>
        </div>

        <div className="containe">
          <form
            className="w-75 mx-auto border p-3"
            onSubmit={handleSubmit(submit)}
          >
            <h6 className="text-center my-2">Register Form</h6>
            <div className="row">
              <div className="mb-3 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="firstName" className="form-label">
                  Prénom
                </label>
                <input
                  type="text"
                  className={clsx(
                    "form-control",
                    errors.firstName ? "is-invalid" : ""
                  )}
                  id="firstName"
                  {...register("firstName")}
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="mb-3 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="lastName" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className={clsx(
                    "form-control",
                    errors.lastName ? "is-invalid" : ""
                  )}
                  id="lastName"
                  {...register("lastName")}
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
              <div className="mb-3 col-md-6 col-sm-12 col-xs-12">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  defaultValue={12}
                  className={clsx(
                    "form-control",
                    errors.age ? "is-invalid" : ""
                  )}
                  id="age"
                  {...register("age")}
                />
                <div className="invalid-feedback">{errors.age?.message}</div>
              </div>
              <div className="mb-3 col-md-6 col-xs-12 col-sm-12">
                <label htmlFor="dob" className="form-label">
                  Date de naissance:
                </label>
                <input
                  type="date"
                  className={clsx(
                    "form-control",
                    errors.dob ? "is-invalid" : ""
                  )}
                  id="dob"
                  {...register("dob")}
                />
                <div className="invalid-feedback">{errors.dob?.message}</div>
              </div>
              <div className="mb-3 col-md-6 col-xm-12 col-xs-12 mt-4">
                <label htmlFor="sex" className="form-label mr-5">
                  Sex :
                </label>
                <div className="form-check form-check-inline mx-3">
                  <input
                    className={clsx(
                      "form-check-input",
                      errors.sex ? "is-invalid" : ""
                    )}
                    type="radio"
                    name="inlineRadioOptions"
                    id="male"
                    value="male"
                    {...register("sex")}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Homme
                  </label>
                </div>
                <div className="form-check form-check-inline mx-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="female"
                    value="female"
                    {...register("sex")}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Femme
                  </label>
                </div>
              </div>
              <div className="mb-3 col-md-6 col-xm-12 col-xs-12">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select className="form-select" {...register("country")}>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Canada">Canada</option>
                  <option value="England">England</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={clsx(
                    "form-control",
                    errors.email ? "is-invalid" : ""
                  )}
                  id="email"
                  {...register("email")}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="mb-3 col-md-6 col-cm-12 col-xs-12">
                <label htmlFor="password" className="form-label">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className={clsx(
                    "form-control",
                    errors.password ? "is-invalid" : ""
                  )}
                  {...register("password")}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="mb-3 col-md-6 col-cm-12 col-xs-12">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={clsx(
                    "form-control",
                    errors.confirmPassword ? "is-invalid" : ""
                  )}
                  {...register("confirmPassword")}
                />
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="avatar">
                  Avatar
                </label>

                <input
                  type="file"
                  id="avatar"
                  className={clsx(
                    "form-control",
                    errors.avatar ? "is-invalid" : ""
                  )}
                  accept=".jpg, .jpeg, .png"
                  {...register("avatar")}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.avatar?.message}</div>
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  className={clsx(
                    "form-check-input mr-5",
                    errors.acceptTerms ? "is-invalid" : ""
                  )}
                  id="acceptTerms"
                  {...register("acceptTerms")}
                />
                <label htmlFor="acceptTerms" className="form-label mx-3">
                  Accept terms
                </label>
                <div className="invalid-feedback">
                  {errors.acceptTerms?.message}
                </div>
              </div>
              <div className="mt-2 text-end">
                <button className="btn btn-danger  mx-5" type="submit">
                  Submit
                </button>
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => reset()}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
