export default function Path() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/progress/:progressId"
        element={<OrderList orders={orders} />}
      />
      <Route path="/order/:id" element={<Location orders={orders} />} />
    </Routes>
  );
}
