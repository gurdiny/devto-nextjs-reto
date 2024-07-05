import Image from "next/image";
import { createUser } from "@/api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  TwitchIcon,
  MIcon,
} from "@/components/Icons";
import Link from "next/link";

export default function SingUp() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    // console.log("onSubmit");
    try {
      const user = await createUser(
        data.email,
        data.password,
        data.name,
        data.profilePic
      );
      if (user) {
        console.log("este es el usuario", user);
        toast.success("Usuario registrado");
        let autoLog = await login(data.email, data.password);
        console.log(autoLog);
        router.push("/dashboard");
      } else {
        toast.error("Error en el registro");
        setError("root.serverError", {
          type: "manual",
          message: "Error en el registro",
        });
      }
    } catch (error) {
      if (error.message.includes("already exists")) {
        toast.error("El usuario ya existe");
        setError("email", {
          type: "manual",
          message: "El usuario ya existe",
        });
      }
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
              alt="Logo"
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
              <p className="font-semibold">Email</p>
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
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div className="mt-4">
              <p className="font-semibold">Password</p>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerida",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="mt-4">
              <p className="font-semibold">Nombre</p>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El nombre es requerido",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </div>
            <div className="mt-4">
              <p className="font-semibold">Imagen de perfil</p>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="text"
                {...register("profilePic", {
                  required: {
                    value: true,
                    message: "La imagen de perfil es requerida",
                  },
                })}
              />
              {errors.profilePic && (
                <span className="text-red-600">
                  {errors.profilePic.message}
                </span>
              )}
            </div>
            <div className="w-full mt-4">
              <button
                type="submit"
                className="w-full bg-[#3B49DF] p-4 border rounded-lg text-white"
              >
                SignUp
              </button>
            </div>
            {errors.root && errors.root.serverError && (
              <span className="text-red-600">
                {errors.root.serverError.message}
              </span>
            )}
          </form>
          <div className="my-8">
            <p className="italic text-sm text-center mb-4 px-12">
              By signing in, you are agreeing to our privacy policy, terms of
              use and code of conduct.
            </p>
            <hr />
            <p className="text-center mt-4 px-12">
              New to DEV Community?
              <Link href={"/login"} className="text-[#3B49DF]">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
