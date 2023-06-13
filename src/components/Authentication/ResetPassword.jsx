import { TextField } from "../Form";
import { resetPasswordSchema } from "../Form/schemaValidation";
import { Button } from "../UI";
import { useFormik } from "formik";

export default function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values)=>{
        console.log(values);
    }
  });
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center font-inter rounded-[4rem] px-2 md:px-8">
      <p>Provide your email</p>
      <form onSubmit={formik.handleSubmit} className="w-[80%] flex flex-col gap-2">
        <TextField
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          label={"Email"}
          id={"email"}
          placeholder="Email"
          errorMsg={formik.errors.email}
        />
        <div className="h-[3rem]">
        <Button type={"submit"} value={"Reset"}/>
        </div>
      </form>
    </div>
  );
}
