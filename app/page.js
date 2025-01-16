import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import { COI, Parts } from "@/config/COI";
import Link from "next/link";

export default function Home() {
  const data = COI;
  const parts = Parts;
  return (
    <>
      <main className="max-w-[1010px] mx-auto pb-5 px-5">
        <h1 className="text-4xl font-bold text-center mt-8 mb-7">
          IndianConstitution - Articles of Indian Constitution
        </h1>
        <div className="searchdiv mt-5 mb-7 ">
          <Searchbar />
        </div>
        <div className="container mt-7 mx-auto">
          <div id="articles">
            <h2 className="bg-blue-100 py-2 text-blue-700 rounded-md shadow-sm text-3xl font-bold text-center mt-10">
              Top Articles in Indian Constitution
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border mt-5 rounded-md shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link
                    className="text-black"
                    href={`/article/${item.Name.split(" ").join("-")}`}
                  >
                    <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                      Article {item.ArtNo} - {item.Name}
                    </h2>
                    {item.ArtDesc && (
                      <p>{item.ArtDesc.split(" ").slice(0, 20).join(" ")}...</p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div id="parts">
            <h2 className="text-3xl font-bold text-center mt-5 bg-blue-100 py-2 text-blue-700 rounded-md shadow-sm  ">
              Parts in Indian Constitution
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {parts.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border mt-5 rounded-md shadow-md hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                    Part {item.PartNo} - {item.Name}
                  </h2>
                  {item.Articles &&
                    item.Articles.map((article, index) => (
                      <div
                        key={index}
                        className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-md shadow-sm m-1"
                      >
                        Article - {article}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
