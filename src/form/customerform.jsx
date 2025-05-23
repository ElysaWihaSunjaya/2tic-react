import { useState } from "react";

export default function CustomerForm() {
  const [order, setOrder] = useState({
    CustomerID: "",
    CustomerName: "",
    Email: "",
    Phone: "",
    Loyalty: ["Bronze"], 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleLoyaltyChange = (e) => {
    const { value } = e.target;
    setOrder({
      ...order,
      Loyalty: value ? [value] : order.Loyalty,
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
          <label className="block text-sm font-medium text-gray-700">Customer ID</label>
          <input
            type="text"
            name="CustomerID"
            value={order.CustomerID}
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
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="Email"
            value={order.Email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="Phone"
            value={order.Phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Loyalty Level</label>
          <select
            name="Loyalty"
            value={order.Loyalty[0]}
            onChange={handleLoyaltyChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
          </select>
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
