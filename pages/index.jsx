import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import { BubbleIcon, SaveIcon, HouseIcon } from "@/components/Icons";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function Home() {
  return (
    <Layout>
      <main
        className={`grid  min-h-screen  md:grid-cols-8 gap-2
           items-center justify-between p-2 ${openSans.className}`}
      >
        <div className="hidden md:grid md:col-span-2 md:gap-4">
          <div className="p-4 bg-white rounded">
            <h2 className="font-bold text-xl mb-4">
              DEV Community is a community of 1,681,640 amazing developers
            </h2>
            <p>
              We're a place where coders share, stay up-to-date and grow their
              careers.
            </p>
            <div className="flex flex-col mt-4 gap-2">
              <button className="text-[#3B49DF] p-[7px_15px] border-[#3B49DF] border-[1px] rounded  hover:bg-[#3B49DF] hover:text-white hover:underline">
                <a href="" className="font-medium">
                  Create Acount
                </a>
              </button>
              <button className="hidden md:flex  p-[7px_15px] md:justify-center rounded hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
                <a href="" className="font-medium">
                  Log In
                </a>
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
          <nav></nav>
          <div></div>
          <nav></nav>
          <div></div>
          <div></div>
          <footer></footer>
        </div>
        <div className=" md:grid md:col-span-6 w-full shadow-sm">
          <div className="flex">
            <nav className="flex flex-row my-2">
              <a
                className="p-[12px_8px] font-semibold hover:bg-white hover:text-[#3B49DF] rounded"
                href=""
              >
                Relevant
              </a>
              <a
                className="p-[12px_8px] font-semibold  hover:bg-white hover:text-[#3B49DF] rounded"
                href=""
              >
                Latest
              </a>
              <a
                className="p-[12px_8px] font-semibold  hover:bg-white hover:text-[#3B49DF] rounded"
                href=""
              >
                Top
              </a>
            </nav>
          </div>
          <div className="">
            <article className="bg-white rounded">
              <Image
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcte9o9ck2zu6adselby1.png"
                width={1200}
                height={630}
              />
              <div className="flex flex-col p-4 gap-4">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-[10%] rounded-full">
                    <Image
                      src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F790174%2F0c1ffcb3-fdc2-4960-8db2-fbc726671f46.png"
                      width={90}
                      height={90}
                      className="rounded-full mr-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <a href="" className="text-[14px] font-semibold">
                      Sohini Pattanayak
                    </a>
                    <a href="" className="text-[12px]">
                      Jun 29
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[20px]">
                    Building a Modern Blog with Remix and React Router
                  </h3>
                  <ul className="flex flex-row gap-2 text-sm">
                    <li>#react</li>
                    <li>#remixrun</li>
                    <li>#webdev</li>
                    <li>#javascript</li>
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
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="hidden lg:flex"></div>
      </main>
    </Layout>
  );
}
