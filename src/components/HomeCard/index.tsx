export function HomeCard(props: {
  imageUrl: string;
  title: string;
  description: string;
}) {
  return (
    <article className="bg-gray-800 max-w-[350px] max-h-[500px] rounded flex flex-col gap-2 p-4 overflow-hidden">
      <div className="w-full flex justify-center">
        <img className="w-full" src={props.imageUrl} alt="" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
}
