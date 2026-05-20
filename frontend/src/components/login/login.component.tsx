import AuthLayout from "../auth/AuthLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import SSInput from "../ui-component/ss-input/ss-input";
import SSButton from "../ui-component/ss-button/ss-button";
import { useState } from "react";
import { useLoginUserMutation, useGoogleLoginMutation } from "../../redux/apis/auth.api";
import { storeUserInfo } from "../../services/auth.service";
import RedirectComponent from "../redirect.component";
import toast, { Toaster } from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";

type Inputs = {
  email: string;
  password: string;
};

const LoginComponent = () => {
  const [loginUser] = useLoginUserMutation();
  const [googleLogin] = useGoogleLoginMutation();
  const { register, handleSubmit } = useForm<Inputs>();
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsBusy(true);
    try {
      const res = await loginUser({ ...data }).unwrap();
      if (res.data.accessToken) {
        toast.success("User logged in successfully!");
        storeUserInfo({ accessToken: res.data.accessToken });
        setIsLoggedIn(true);
      }
    } catch (err: unknown) {
      console.log("error: ", err);
<<<<<<< HEAD
      toast.error("Login failed. Please check your credentials.");
=======
      toast.error("Failed to login. Please check your credentials.");
>>>>>>> upstream/main
    } finally {
      setIsBusy(false);
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse: any) => {
    setIsBusy(true);
    try {
      const res = await googleLogin({ token: credentialResponse.credential }).unwrap();
      if (res.data.accessToken) {
        toast.success("User logged in successfully with Google!");
        storeUserInfo({ accessToken: res.data.accessToken });
        setIsLoggedIn(true);
      }
    } catch (err: unknown) {
      console.log("Google login error: ", err);
      toast.error("Failed to login with Google. Please try again.");
    } finally {
      setIsBusy(false);
    }
  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");
    toast.error("Google login failed. Please try again.");
  };

  if (isLoggedIn) {
    return <RedirectComponent defaultPath="/" />;
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center relative overflow-hidden px-4">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex w-full max-w-md flex-col justify-center py-12 relative z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
          <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-sm">
            STORY SPARK AI
          </h2>
        </div>

        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 sm:p-10 shadow-2xl">
          <h3 className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-200">
            Welcome Back
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <SSInput
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter your email"
              required={true}
              icon="fas fa-envelope"
              register={register}
            />
            <SSInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required={true}
              icon="fas fa-lock"
              register={register}
            />
            <SSButton text="Sign In" type="submit" isLoading={isBusy} />
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-800 text-slate-400">OR</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => toast.error("Google login coming soon!")}
            className="mt-6 w-full bg-slate-700/50 border border-slate-600 font-medium py-2.5 hover:bg-slate-600 transition-colors flex items-center justify-center gap-3 rounded-lg text-slate-200 shadow-sm cursor-pointer"
          >
            <i className="fa-brands fa-google text-blue-400 text-lg"></i>
            Login with Google
          </button>

          <p className="mt-8 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Sign up for free
            </a>
          </p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
=======
    <>
      <AuthLayout
  title="Welcome Back"
  subtitle="Login to continue your storytelling journey."
>
  <div className="w-full space-y-6">
    
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-700"></div>
      </div>

      <div className="relative flex justify-center text-sm">
        <span className="px-4 text-gray-400 font-semibold">
          LOGIN WITH EMAIL
        </span>
      </div>
    </div>

    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <SSInput
        label="Email *"
        name="email"
        type="email"
        placeholder="Enter your email"
        required={true}
        icon="fas fa-envelope"
        register={register}
      />

      <SSInput
        label="Password *"
        name="password"
        type="password"
        placeholder="Enter your password"
        required={true}
        icon="fas fa-lock"
        register={register}
      />

      <SSButton text="Sign In" type="submit" isLoading={isBusy} />
    </form>

    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-700"></div>
      </div>

      <div className="relative flex justify-center text-sm">
        <span className="px-4 text-gray-400">OR</span>
      </div>
    </div>

    <div className="w-full flex justify-center">
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginError}
      />
    </div>

    <div className="text-center text-sm text-indigo-600">
      <div className="space-y-2">
        <a
          href="/signup"
          className="block text-custom hover:underline"
        >
          Create a new account
        </a>
      </div>
    </div>
  </div>
</AuthLayout>
    </>
>>>>>>> upstream/main
  );
};

export default LoginComponent;
