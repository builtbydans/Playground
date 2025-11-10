export default function ClustersLayout({ children }) {
  return (
    <div style={{ margin: "2rem" }}>
      <nav>
        <a href="/react/clusters">🏠 Clusters Home</a>
      </nav>
      <hr />
      {children}
    </div>
  );
}
