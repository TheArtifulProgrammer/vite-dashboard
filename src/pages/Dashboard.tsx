export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Add dashboard widgets/cards here */}
        <div className="border rounded-lg p-4 bg-muted">Dashboard Content</div>
      </div>
    </div>
  );
}
