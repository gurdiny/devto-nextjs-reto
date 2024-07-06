import { IconBurger, SearchIcon } from "./Icons";
import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getPost } from "@/api";
import Link from "next/link";
export default function Header() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);
  return (
    <header className="shadow bg-white sticky top-0 z-10">
      <nav className="flex flex-row items-center md:p-[0_8px] lg:p-[0_16px] m-auto max-w-[1380px]">
        <div className="p-4 md:hidden">
          <IconBurger />
        </div>
        <Link href="/">
          <Image
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            width={50}
            height={40}
          />
        </Link>
        <div className="hidden md:flex border-[2px] border-[#D4D4D4] rounded p-[1px] mx-[16px] max-w-[680px]">
          <form action="">
            <div className="flex flex-row gap-2">
              <Link href="" className="p-1 ">
                <SearchIcon />
              </Link>
              <input
                id="search-input"
                class="pr-[142px] w-full text-[#D4D4D4]"
                type="text"
                name="q"
                placeholder="Search..."
                autocomplete="off"
                aria-label="Search term"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-row  items-center ml-auto">
          <Link href="" className="p-1 md:hidden">
            <SearchIcon />
          </Link>
          <div
            className={clsx("flex flex-row", {
              hidden: !!token,
            })}
          >
            <button className="hidden md:flex p-[7px_15px] rounded m-2 hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
              <Link href="/login" className="font-medium">
                Log In
              </Link>
            </button>
            <button className="text-[#3B49DF] p-[7px_15px] border-[#3B49DF] border-[1px] rounded m-2 hover:bg-[#3B49DF] hover:text-white hover:underline">
              <Link href="/signup" className="font-semibold">
                Create account
              </Link>
            </button>
          </div>
          <div
            className={clsx("flex flex-row", {
              hidden: !token,
            })}
          >
            <button className="hidden md:flex p-[7px_15px] rounded m-2 hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
              <Link href="/create-post" className="font-medium">
                Create Post
              </Link>
            </button>
            <div className="flex items-center">
              <Image
                className="rounded-full w-[100%]"
                src="https://i.pravatar.cc/70"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
