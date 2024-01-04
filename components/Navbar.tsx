import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-40 py-4 md:py-10 flex items-center justify-between absolute z-30">
      <h1 className="text-bold text-2xl bg-gradient-to-r from-dark-pink to-dark-blue font-bold bg-clip-text text-transparent">
        Soapy
      </h1>
      <div className="hidden md:flex items-center gap-10">
        <a href="">Home</a>
        <a href="">Semua Produk</a>
        <button className="flex justify-between gap-4 items-center bg-purple py-2 px-8 rounded-full shadow-xl text-white">
          Beli Sekarang
        </button>
      </div>
      <div className="block md:hidden text-5xl text-dark-blue">
        <IoMenu />
      </div>
    </nav>
  );
}
