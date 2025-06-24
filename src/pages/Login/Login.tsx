import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import useAuth from "@/hooks/use-auth";

const Login = () => {
  const { saveUserData } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[^a-zA-Z0-9]/,
        "Passwords must have at least one non alphanumeric character"
      )
      .matches(/[a-z]/, "Passwords must have at least one lowercase ('a'-'z')")
      .matches(/[A-Z]/, "Passwords must have at least one uppercase ('A'-'Z')")
      .matches(/[0-9]/, "Passwords must have at least one digit ('0'-'9')")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/Auth/login", data);
      localStorage.setItem("token", response.data.token);

      toast.success("Login successful!");
      saveUserData();
      navigate("/", { replace: true });
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Login failed");
      } else {
        toast.error("Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowPassword(!showPassword);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-5 mb-[150px] text-dark-black">
      <h2 className="font-bold text-[28px] leading-[35px] text-dark-black text-center mb-6">
        Login to Your Account
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[92%] sm:w-1/2 mx-auto flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="font-medium leading-6">
            Your email address
          </Label>
          <Input
            className="p-[15px] rounded-[8px] border border-border-input placeholder:leading-6 placeholder:text-dark-blue"
            placeholder="Enter Your Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 relative">
          <Label htmlFor="password" className="font-medium leading-6">
            Password
          </Label>
          <div className="relative">
            <Input
              className="p-[15px] rounded-[8px] border border-border-input placeholder:leading-6 placeholder:text-dark-blue w-full"
              placeholder="Enter Your Password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-blue focus:outline-none"
            >
              <div className="relative cursor-pointer">
                {showPassword ? (
                  <FaEyeSlash
                    className={`transition-opacity duration-300 ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    }`}
                  />
                ) : (
                  <FaEye
                    className={`transition-opacity duration-300 ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}
                {isAnimating && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-6 h-0.5 bg-dark-blue transform origin-center rotate-45 transition-transform duration-300 ${
                        showPassword ? "scale-100" : "scale-0"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className={`px-4 rounded-[8px] text-[14px] leading-[21px] hover:text-dark-white font-bold relative z-10 ${
            isLoading
              ? "after:content-['Loading...'] after:bg-primary-blue/5"
              : "after:content-['Login'] after:bg-primary-blue"
          }  after:opacity-0 hover:after:opacity-100 after:flex after:items-center after:justify-center after:absolute after:w-full after:h-0 after:bottom-0 hover:after:h-full after:rounded-[8px] after:transition-all after:duration-300 after:ease-in-out cursor-pointer`}
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Login"}
        </Button>
        <Link
          to="/register"
          className="text-[14px] leading-[21px] text-dark-blue"
        >
          Don&apos;t have an account? Register Now
        </Link>
      </form>
    </section>
  );
};

export default Login;
