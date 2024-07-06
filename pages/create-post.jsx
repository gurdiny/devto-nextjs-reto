import Image from "next/image";
import { TwitterIcon } from "@/components/Icons";
import { createPost } from "@/api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreatePost() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log("Onsubmit");
    try {
      const post = await createPost(
        data.name,
        data.image,
        data.body,
        data.user
      );
      if (post) {
        toast.success("Post registrado");
        router.push("/");
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
    <main className="grid min-h-screen grid-cols-custom-layout gap-4 p-4 grid-flow-row m-auto max-w-[1380px] ">
      <div className="hidden md:flex justify-end">
        <Link href="/">
          <Image
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            width={50}
            height={40}
            className="mb-4"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 justify-between h-14 items-center">
          <div>Create Post</div>
          <div className="flex flex-row gap-4">
            <p>Edit</p>
            <p>Preview</p>
          </div>
        </div>
        <div>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white p-4 rounded-lg">
              <div className="mt-4">
                <p className="font-semibold">Image</p>
                <input
                  className="w-full mt-2 p-2 border rounded-lg"
                  type="text"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "El correo del usuario es requerido",
                    },
                  })}
                />
                {errors.image && (
                  <span className="text-red-600">{errors.image.message}</span>
                )}
              </div>
              <div className="mt-4">
                <p className="font-semibold">Titulo</p>
                <input
                  className="w-full mt-2 p-2 border rounded-lg"
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "La contraseña es requerida",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="mt-4">
                <p className="font-semibold">Contenido</p>
                <input
                  className="w-full mt-2 p-2 border rounded-lg"
                  type="text"
                  {...register("body", {
                    required: {
                      value: true,
                      message: "El Contenido es requerido es requerido",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.body.message}</span>
                )}
              </div>
              <div className="mt-4"></div>
              <p className="font-semibold">Id User</p>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="text"
                {...register("user", {
                  required: {
                    value: true,
                    message: "El id del usuario es requerido",
                  },
                })}
              />
              {errors.profilePic && (
                <span className="text-red-600">{errors.user.message}</span>
              )}
            </div>
            <div className="w-full flex flex-row mt-4 gap-4">
              <button
                type="submit"
                className="w-[20%] bg-[#3B49DF] p-2 border rounded-lg text-white"
              >
                Publish
              </button>
              {/* <button className="w-[20%] p-2 rounded-lg text-gray">
                Save Draft
              </button> */}
            </div>
            {errors.root && errors.root.serverError && (
              <span className="text-red-600">
                {errors.root.serverError.message}
              </span>
            )}
          </form>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center">
        <h3 className="font-bold">Writing a Greate Post Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit quod saepe, natus incidunt nam non minima? Est
          ea, fugit voluptatum, repudiandae mollitia eius possimus perspiciatis
          perferendis assumenda ducimus inventore.
        </p>
      </div>
    </main>
  );
}
