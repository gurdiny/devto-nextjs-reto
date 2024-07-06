import Image from "next/image";
import Layout from "@/components/Layout";
import {
  BubbleIcon,
  SaveIcon,
  HouseIcon,
  TwitterIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  TwitchIcon,
  MIcon,
  PodcastIcon,
  VideosIcon,
  TagsIcon,
  LigthIcon,
  BagsIcon,
  HeartColoIcon,
  CupIcon,
  SparksIcon,
  ContactIcon,
  DevToIcon,
  GuidesIcon,
  SofwareIcon,
} from "@/components/Icons";
import { getPost, deletePost } from "@/api";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost()
      .then((post) => {
        setPosts(post);
      })
      .catch((error) => {
        toast.error("error al obtener los productos");
        console.error("[getAllProducts error]", error);
      });
  }, []);

  // const handleDelete = async () => {
  //   try {
  //     const deletedPost = await deletePost(posts.id);
  //     console.log("Post eliminado:", deletedPost);
  //     // Aquí puedes actualizar el estado o hacer algo después de eliminar el post
  //   } catch (error) {
  //     console.error("Error al eliminar el post:", error);
  //   }
  // };
  return (
    <Layout>
      <main className="grid min-h-screen grid-cols-custom-layout gap-4 p-4 grid-flow-row m-auto max-w-[1380px]">
        <div className="hidden md:block ">
          <div className="p-4 bg-white rounded shadow-sm">
            <h2 className="font-bold text-xl mb-4">
              DEV Community is a community of 1,681,640 amazing developers
            </h2>
            <p>
              Were a place where coders share, stay up-to-date and grow their
              careers.
            </p>
            <div className="flex flex-col mt-4 gap-2">
              <button className="text-[#3B49DF] p-[7px_15px] border-[#3B49DF] border-[1px] rounded  hover:bg-[#3B49DF] hover:text-white hover:underline">
                <Link href="" className="font-medium">
                  Create Acount
                </Link>
              </button>
              <button className="hidden md:flex  p-[7px_15px] md:justify-center rounded hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="" className="font-medium">
                  Log In
                </Link>
              </button>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col">
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <HouseIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <PodcastIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <VideosIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <TagsIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <LigthIcon />
                </span>
                <span className="">Home</span>
              </li>
              {/* <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <BagsIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <HeartColoIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <CupIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <SparksIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <ContactIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <DevToIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <GuidesIcon />
                </span>
                <span className="">Home</span>
              </li> */}
              {/* <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <SofwareIcon />
                </span>
                <span className="">Home</span>
              </li> */}
            </ul>
          </nav>
          <nav>
            <h3 className="font-bold px-2">Others</h3>
            <ul className="flex flex-col">
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <HouseIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <HouseIcon />
                </span>
                <span className="">Home</span>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <span className="">
                  <HouseIcon />
                </span>
                <span className="">Home</span>
              </li>
            </ul>
          </nav>

          <div className="flex flex-row px-4">
            <Link className="p-2" href="">
              <TwitterIcon />
            </Link>
            <Link className="p-2" href="">
              <FacebookIcon />
            </Link>
            <Link className="p-2" href="">
              <GitHubIcon />
            </Link>
            <Link className="p-2" href="">
              <InstagramIcon />
            </Link>
            <Link className="p-2" href="">
              <TwitchIcon />
            </Link>
            <Link className="p-2" href="">
              <MIcon />
            </Link>
          </div>
          <nav className="">
            <h3 className="font-bold px-2">Popular Tags</h3>
            <ul className="flex flex-col max-h-[42vh] overflow-y-auto">
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
              <li className="flex gap-1 py-2 px-4 rounded-md hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <Link href="">#webdev</Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 bg-white rounded md:max-h-[60vh] md:overflow-y-auto lg:max-h-none shadow-sm ">
            <p>
              <Image
                className="rounded-md mb-4"
                width={350}
                height={350}
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
              />
            </p>
            <h2 className="font-bold text-xl mb-4">
              Life is too short to browse without{" "}
              <span className="underline text-[#3B49DF]"> dark mode.</span>
            </h2>
            <p>
              Were a place where coders share, stay up-to-date and grow their
              careers.
            </p>
          </div>
          <footer className="px-4">
            <p className="mb-4 text-[12px]">
              DEV Community A constructive and inclusive social network for
              software developers. With you every step of your journey.{" "}
            </p>

            <p className="mb-4 text-[12px]">
              Built on Forem — the open source software that powers DEV and
              other inclusive communities.{" "}
            </p>

            <p className="mb-4 text-[12px]">
              Made with love and Ruby on Rails. DEV Community © 2016 - 2024.{" "}
            </p>
          </footer>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <nav className="flex flex-row my-2">
              <Link
                className="p-[12px_8px] font-semibold hover:bg-white hover:text-[#3B49DF] rounded"
                href=""
              >
                Relevant
              </Link>
              <Link
                className="p-[12px_8px] font-semibold  hover:bg-white hover:text-[#3B49DF] rounded"
                href=""
              >
                Latest
              </Link>
              <Link
                className="p-[12px_8px] font-semibold  hover:bg-white hover:text-[#3B49DF] rounded"
                href=""
              >
                Top
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            {posts.map((post, idx) => {
              return (
                <article
                  className="bg-white rounded-lg"
                  key={`post-${post._id}`}
                >
                  <Link href={`/post/${post._id}`}>
                    <Image
                      src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcte9o9ck2zu6adselby1.png"
                      width={1200}
                      height={630}
                    />
                  </Link>
                  <div>
                    <div className="flex flex-col p-4 gap-4">
                      <div className="flex flex-row items-center gap-2">
                        <div className="w-[10%] rounded-full items-center justify-center">
                          <Image
                            src={post.user.profilePic}
                            width={90}
                            height={90}
                            className="rounded-full mr-2 lg:w-8/12 "
                          />
                        </div>
                        <div className="flex flex-col">
                          <Link
                            href={`/post/${post._id}`}
                            className="text-[14px] font-semibold"
                          >
                            {post.user.name}
                          </Link>
                          <Link href="" className="text-[12px]">
                            {Date(post.user.createdAt)}
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-[20px]">
                          <Link href={`/post/${post._id}`}>{post.name}</Link>
                        </h3>
                        <ul className="flex flex-row gap-2 text-sm">
                          <li className="hover:bg-[#55276523] rounded-md p-1">
                            <span className="text-[#562765]">#</span>react
                          </li>
                          <li className="hover:bg-[#f7de1e23] rounded-md p-1">
                            <span className="text-[#f7df1e]">#</span>remixrun
                          </li>
                          <li className="hover:bg-[#84cef923] rounded-md p-1">
                            <span className="text-[#84CEF9]">#</span>webdev
                          </li>
                          <li className="hover:bg-[#0b0b0b23] rounded-md p-1">
                            <span className="text-[#0B0B0B]">#</span>javascript
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center justify-center gap-2">
                          <div className="flex flex-row items-center justify-center">
                            <span className="flex flex-row">
                              <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px]">
                                <Image
                                  width={18}
                                  height={18}
                                  src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                />
                              </span>
                              <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ml-[-10px]">
                                <Image
                                  width={18}
                                  height={18}
                                  src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                />
                              </span>
                              <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ml-[-10px]">
                                <Image
                                  width={18}
                                  height={18}
                                  src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                />
                              </span>
                              <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ml-[-10px]">
                                <Image
                                  width={18}
                                  height={18}
                                  src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                />
                              </span>
                              <span className="rounded-full bg-gray-100 w-7 h-7 items-center justify-center flex border-white border-[1px] ml-[-10px]">
                                <Image
                                  width={24}
                                  height={24}
                                  src=" https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                />
                              </span>
                            </span>
                            <span className="text-sm">6</span>
                          </div>
                          <div>
                            <BubbleIcon />
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div>
                            <span className="text-[12px]">3 min read</span>
                          </div>
                          <div>
                            <SaveIcon />
                          </div>
                          {/* <button onClick={handleDelete}>🧨Delete</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex  lg:flex-col ">
          <div className=" bg-white rounded shadow-sm mb-4">
            <div className="p-4 border-b-[.5px] border-gray-100">
              <h2 className="font-bold text-xl ">#discuss</h2>
              <p className="text-[10px] text-[#575757]">
                Discussion threads targeting the whole community
              </p>
            </div>
            <div className="flex flex-col">
              {posts.map((postList1, idx) => {
                return (
                  <Link
                    key={`post-${idx * 5}`}
                    className="p-4 border-b-[.5px] border-gray-100 hover:text-[#3B49DF]"
                    href={`/post/${postList1._id}`}
                  >
                    {postList1.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className=" bg-white rounded shadow-sm mb-4">
            <div className="p-4 border-b-[.5px] border-gray-100">
              <h2 className="font-bold text-xl ">#watercooler</h2>
              <p className="text-[10px]  text-[#575757]">
                Light, and off-topic conversation.
              </p>
              <div className="flex flex-col">
                {posts.map((post, idx) => {
                  return (
                    <Link
                      key={`post-${idx * 10}`}
                      className="py-4 border-b-[.5px] border-gray-100 hover:text-[#3B49DF]"
                      href={`/post/${post._id}`}
                    >
                      {post.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold my-4">trending guides/resources</h4>
            <div className="flex flex-col">
              {posts.map((post, idx) => {
                return (
                  <Link
                    key={`post-${idx * 15}`}
                    className="p-4 border-b-[.5px] border-gray-100 hover:bg-white hover:text-[#3B49DF]"
                    href={`/post/${post._id}`}
                  >
                    {post.name} hola
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
