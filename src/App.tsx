import { useSinglePrismicDocument } from "@prismicio/react";
import { NavBar } from "./components/NavBar";

function App() {
  const [document] = useSinglePrismicDocument("home");
  console.log(import.meta.env.VITE_PRISMIC_REPOSITORY);

  return (
    <>
      <NavBar />
      {document?.data && (
        <main className="flex flex-col gap-2 text-gray-300 text-center">
          <h1 className="text-xl font-bold">
            {document.data.home_title[0].text}
          </h1>
          <p>{document.data.home_description[0].text}</p>
        </main>
      )}
    </>
  );
}

export default App;
