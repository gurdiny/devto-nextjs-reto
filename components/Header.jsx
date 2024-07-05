import { IconBurger, SearchIcon } from "./Icons";
import Image from "next/image";
export default function Header() {
  return (
    <header className="shadow bg-white sticky top-0 z-10">
      <nav className="flex flex-row items-center md:p-[0_8px] lg:p-[0_16px] m-auto max-w-[1380px]">
        <div className="p-4 md:hidden">
          <IconBurger />
        </div>
        <a href="/">
          <Image
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            width={50}
            height={40}
          />
        </a>
        <div className="hidden md:flex border-[2px] border-[#D4D4D4] rounded p-[1px] mx-[16px] max-w-[680px]">
          <form action="">
            <div className="flex flex-row gap-2">
              <a href="" className="p-1 ">
                <SearchIcon />
              </a>
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
          <a href="" className="p-1 md:hidden">
            <SearchIcon />
          </a>
          <div className="flex flex-row">
            <button className="hidden md:flex  p-[7px_15px]  rounded m-2 hover:bg-[#EBECFC] hover:text-[#3B49DF] hover:underline">
              <a href="/login" className="font-medium">
                Log In
              </a>
            </button>
            <button className="text-[#3B49DF] p-[7px_15px] border-[#3B49DF] border-[1px] rounded m-2 hover:bg-[#3B49DF] hover:text-white hover:underline">
              <a href="/singup" className="font-semibold">
                Create acount
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
