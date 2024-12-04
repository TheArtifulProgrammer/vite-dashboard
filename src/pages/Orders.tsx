export default function Orders() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Add orders widgets/cards here */}
        <div className="border rounded-lg p-4 bg-muted">Orders Content</div>
      </div>
    </div>
  );
}