import Link from "next/link";
import logoImg from "/public/logo.svg";
import Image from "next/image";
import { LiaGamepadSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="w-full text-black bg-slate-200 px-2">
    <div className=" max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
      <nav className="flex justify-center items-center gap-4 ">
      
      <Link href="/">
      <Image
      src={logoImg}
      alt="Logo"
      quality={100}
      priority={true}
      className="w-full"
      />
      </Link>
      <Link href="/">
      Games
      </Link>

      <Link href="/">
        Perfil
      </Link>

      <div className="hidden sm:flex justify-center items-center">
        <Link href="/">
        <LiaGamepadSolid size={34} color="#475569" />
        </Link>
      </div>

      </nav>
    </div>
    </header>
  );
}
