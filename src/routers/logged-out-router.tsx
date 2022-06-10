import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  password: string;
}

const LoggedOutRouter: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit = () => {
    const { email, password } = getValues();
    console.log(email);
  };

  const onInvalid = () => {};
  console.log(errors.email);
  return (
    <div>
      <h1>logged Out</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <input
            {...register("email", {
              required: "This is required",
              pattern: /^[A-Za-z0-9._%+-]+@gmail.com$/,
            })}
            name="email"
            type="email"
            placeholder="email"
          />
          {errors.email?.message && (
            <span className="font-bold text-red-600">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div>
          <input
            {...register("password", {
              required: "This is required",
            })}
            name="password"
            type="password"
            placeholder="password"
          />
          {errors.password?.message && <span>{errors.password?.message}</span>}
        </div>
        <button className="bg-yellow-300 text-white">Submit</button>
      </form>
    </div>
  );
};

export default LoggedOutRouter;
