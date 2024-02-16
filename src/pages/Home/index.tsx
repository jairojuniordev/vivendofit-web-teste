import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { HomeCard } from "../../components/HomeCard";

export function Home() {
  const [document] = useAllPrismicDocumentsByType("blog_post", {
    limit: 6,
  });
  document?.map((post) => {
    console.log(post.data);
  });
  return (
    <>
      <NavBar />
      <main className="mt-10 flex items-center justify-center text-gray-300">
        <section className="w-[80%] h-full mb-32 grid place-content-center sm:grid-cols-2 md:grid-cols-3 gap-4">
          {document &&
            document.map((post) => (
              <HomeCard
                title={post.data.post_title[0].text}
                description={post.data.post_description[0].text}
                imageUrl={post.data.post_image.url}
              />
            ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
