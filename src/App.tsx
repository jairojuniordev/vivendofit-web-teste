import {
  useAllPrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";
import { NavBar } from "./components/NavBar";

function App() {
  // const [posts, { state }] = useAllPrismicDocumentsByType("blog_post", {
  //   orderings: {
  //     field: "document.first_publication_date",
  //     direction: "desc",
  //   },
  // });

  const [document, { state }] = useSinglePrismicDocument("home");

  return (
    <>
      <NavBar />
      {state == "loading" && (
        <main className="flex flex-col gap-2 text-gray-300 text-center">
          <h1 className="text-xl font-bold">Carregando...</h1>
        </main>
      )}
      {state == "loaded" && document?.data && (
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
