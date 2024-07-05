import Image from "next/image";
import {
  TwitterIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  TwitchIcon,
  MIcon,
} from "@/components/Icons";
import { login } from "@/api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.email, data.password);
      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Usuario Registrado");
        router.push("/");
      } else {
        toast.error("Usuario o Contraseña incorrectos");
        setError("root.credentials", {
          type: "manual",
          message: "Credenciales indvalidas",
        });
      }
    } catch (error) {
      toast.error("Error al iniciar sesion");
    }
  }

  return (
    <main className="flex flex-col min-h-screen align-middle items-center justify-center p-2 lg:p-4 lg:gap-4 w-full bg-white">
      <section className="md:w-[640px] p-8">
        <div className="flex flex-col items-center gap-4 bg-white ">
          <a href="/">
            <Image
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              width={50}
              height={40}
              className="mb-4"
            />
          </a>
          <h1 className="font-bold text-3xl text-center">
            Join the DEV Community
          </h1>
          <p className="text-[#404040] text-center">
            DEV Community is a community of 1,683,678 amazing developers
          </p>
        </div>
        <div className="w-full mt-12">
          <a className="grid grid-cols-10 mt-4 p-4 border rounded-lg" href="">
            <p className="col-span-1">
              <TwitterIcon />
            </p>
            <p className="col-span-9 text-center"> Continue with Apple</p>
          </a>
          <a className="grid grid-cols-10 mt-4 p-4 border rounded-lg" href="">
            <p className="col-span-1">
              <FacebookIcon />
            </p>
            <p className="col-span-9 text-center"> Continue with Facebook</p>
          </a>
          <a className="grid grid-cols-10 mt-4 p-4 border rounded-lg" href="">
            <p className="col-span-1">
              <GitHubIcon />
            </p>
            <p className="col-span-9 text-center"> Continue with GitHub</p>
          </a>
          <a className="grid grid-cols-10 mt-4 p-4 border rounded-lg" href="">
            <p className="col-span-1">
              <InstagramIcon />
            </p>
            <p className="col-span-9 text-center"> Continue with Instagram</p>
          </a>
          <a className="grid grid-cols-10 mt-4 p-4 border rounded-lg" href="">
            <p className="col-span-1">
              <TwitchIcon />
            </p>
            <p className="col-span-9 text-center"> Continue with Twitch</p>
          </a>
          <a className="grid grid-cols-10 mt-4 p-4 border rounded-lg" href="">
            <p className="col-span-1">
              <MIcon />
            </p>
            <p className="col-span-9 text-center"> Continue with Fosstodon</p>
          </a>
        </div>
        <div className="my-8">
          <p className="text-center">OR</p>
        </div>
        <div>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <p className="font-semibold">Emial</p>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo del usuario es requerido",
                  },
                })}
              />
            </div>
            <div className="mt-4">
              <p className="font-semibold">Password</p>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerido",
                  },
                })}
              />
            </div>
            <div className="w-full mt-4">
              <button className="w-full bg-[#3B49DF] p-4 border rounded-lg text-white">
                Log In
              </button>
            </div>
          </form>
          <div className="my-8 ">
            <p className="italic text-sm text-center mb-4 px-12">
              By signing in, you are agreeing to our
              <a href="" className="text-[#3B49DF]">
                {" "}
                privacy policy, terms of use
              </a>{" "}
              and
              <a href="" className="text-[#3B49DF]">
                {" "}
                code of conduct
              </a>
              .
            </p>
            <hr />
            <p className=" text text-center mt-4 px-12">
              New to DEV Community?{" "}
              <Link href={"/singup"} className="text-[#3B49DF]">
                Create account.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
