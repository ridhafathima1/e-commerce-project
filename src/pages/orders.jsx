import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "../components/navbar";
function Orders() {
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      axios
        .get("http://localhost:3000/orders")
        .then((res) => res.data),
  });
  if (isLoading) {
    return (
      <div className="min-h-screen bg-pink-50">
        <Navbar />
        <div className="flex justify-center py-20">
          <p className="text-pink-600 font-semibold">
            Loading orders...
          </p>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="min-h-screen bg-pink-50">
        <Navbar />
        <div className="flex justify-center py-20">
          <p className="text-red-500">
            Failed to load orders.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-pink-50">
     <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-bold">
          My Orders
        </h1>
        {orders.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white py-20 text-center">
            <p className="text-gray-500">
              You haven't placed any orders yet.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl bg-white p-6 shadow">
                <div className="flex justify-between">
                  <h2 className="font-semibold">
                    Order #{order.id}
                  </h2>
                  <span className="text-pink-600">
                    {order.status}
                  </span>
                </div>
                <p className="mt-3">
                  Total: ₹{order.total}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {new Date(order.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Orders;