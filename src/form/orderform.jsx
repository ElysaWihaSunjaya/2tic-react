import { useState } from "react";

export default function OrderForm() {
  const [order, setOrder] = useState({
    OrderID: "",
    CustomerName: "",
    Status: ["Pending"],
    TotalPrice: "",
    OrderDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setOrder({
      ...order,
      Status: value ? [value] : order.Status,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted: ", order);
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Order ID</label>
          <input
            type="text"
            name="OrderID"
            value={order.OrderID}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Customer Name</label>
          <input
            type="text"
            name="CustomerName"
            value={order.CustomerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="Status"
            value={order.Status[0]}
            onChange={handleStatusChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Price</label>
          <input
            type="text"
            name="TotalPrice"
            value={order.TotalPrice}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Order Date</label>
          <input
            type="date"
            name="OrderDate"
            value={order.OrderDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
