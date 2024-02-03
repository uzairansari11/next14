export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>hello i am from react nested layout</p>

      {children}
    </div>
  );
}
