import Navbar from "@/components/Navbar";
import { products } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-screen flex flex-col gap-10 justify-center items-center px-6 md:px-40 py-6">
        <h1 className="text-center text-4xl md:text-7xl text-dark-blue font-bold">
          Sabun terbaik <br />
          Pakaian dan Piring Anda
        </h1>
        {/* <div className="flex gap-6">
          <button className="flex justify-between gap-4 items-center bg-purple py-2 px-8 rounded-full shadow-xl text-white">
            Produk
          </button>
          <button className="flex justify-between gap-4 items-center bg-purple py-2 px-8 rounded-full shadow-xl text-white">
            Beli Sekarang
          </button>
        </div> */}
      </main>
      <section className="bg-white w-full px-40 py-6">
        {products.map((product, i) => (
          <div className="w-full flex justify-between" key={i}>
            <Image
              src={product.img}
              width={500}
              height={500}
              alt="Produk 1"
              className="rounded-xl"
            />
            <div>
              <h1>{product.title}</h1>
              <p>{product.netto}</p>
              <p>{product.price}</p>
              <button className="flex justify-between gap-4 items-center bg-purple py-2 px-8 rounded-full shadow-xl text-white">
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
