export default function Customers() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Add customers widgets/cards here */}
        <div className="border rounded-lg p-4 bg-muted">Customers Content</div>
      </div>
    </div>
  );
}