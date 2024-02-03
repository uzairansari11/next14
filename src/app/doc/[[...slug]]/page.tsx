export default function Slug({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  return (
    <div>
      {params?.slug?.length ? (
        params?.slug?.map((slug, index) => {
          return <p key={index}>Doc Page {slug}</p>;
        })
      ) : (
        <h1>DOC Home page</h1>
      )}
    </div>
  );
}
