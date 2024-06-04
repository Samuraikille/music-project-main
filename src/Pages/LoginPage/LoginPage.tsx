import { Controller, useForm } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import "./LoginPage.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

interface ISubmitProps {
  username: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  username: yup
    .string()
    .required("Обязательное поле для ввода!"),
  userpassword: yup
    .string()
    .min(6, "Пароль должен содержать как минимум 6 символа!")
    .required("Обязательное поле для ввода!"),
});
export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitProps>({
    resolver: yupResolver(loginFormSchema) 
  });

  const navigate = useNavigate();
  const onLoginSubmit = (data: ISubmitProps) => {
    if (data.username === "Samurai" && data.userpassword === "20051205Samurai") {
      localStorage.setItem("username", data.username);
      localStorage.setItem("userpassword", data.userpassword);
      navigate("/main")
    } else {
      navigate("/registration")
    }
  }
  return (
    <>
      <Header />
      <div className="login">
        <AppHeading headingText={"Войти в Genius"} headingType={"h1"} />
        <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <AppInput
                inputType={"text"}
                inputPlaceholder={"Логин"}
                errorMessage={errors.username?.message}
                isError={errors.username ? true : false}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <AppInput
                inputType={"password"}
                inputPlaceholder={"Пароль"}
                errorMessage={errors.userpassword?.message}
                isError={errors.userpassword ? true : false}
                {...field}
              />
            )}
          />

          <AppButton buttonText={"Войти"} buttonType={"submit"} />
        </form>
        <a href="#">Забыли пароль?</a>
        <RegistrationInfo linkPath="/registration" />
      </div>
    </>
  );
};
