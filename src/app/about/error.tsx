
'use client'
export default function ErrorBoundary({ error }: { error: Error }) {
    console.log(error," from component")
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
}
