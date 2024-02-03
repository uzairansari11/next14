export default function Layout({
  children,
  analytics,
  notification,
  revenue,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children}</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          flex: 1,
        }}
      >
        {analytics}
        {revenue}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </div>
  );
}
