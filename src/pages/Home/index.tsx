import { useSinglePrismicDocument } from "@prismicio/react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export function Home() {
  const [document, { state }] = useSinglePrismicDocument("home");

  return (
    <>
      <NavBar />
      <main className="w-full h-[90vh] flex flex-col gap-2 justify-center items-center text-gray-300 text-center">
        {state == "loading" && (
          <h1 className="text-xl font-bold">Carregando...</h1>
        )}
        {state == "loaded" && document?.data && (
          <section>
            <h1 className="text-xl font-bold">
              {document.data.home_title[0].text}
            </h1>
            <p>{document.data.home_description[0].text}</p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
