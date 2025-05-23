import { useState } from "react";
import orderData from "../data.json";

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  
  const _searchTerm = searchTerm.toLowerCase();
  const _selectedTag = selectedTag.toLowerCase();
  const _selectedStatus = selectedStatus.toLowerCase();

  const filteredOrders = orderData.filter((order) => {
    const matchesSearch =
      order.CustomerName.toLowerCase().includes(_searchTerm) ||
      order.Email.toLowerCase().includes(_searchTerm) ||
      order.Phone.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? order.Loyalty.some(tag => tag.toLowerCase().includes(_selectedTag)) : true;
    const matchesStatus = selectedStatus ? order.Status.some(status => status.toLowerCase().includes(_selectedStatus)) : true;

    return matchesSearch && matchesTag && matchesStatus;
  });

  const allStatuses = [
    ...new Set(orderData.flatMap((order) => order.Status)),
  ];

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search order..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        name="selectedStatus"
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Statuses</option>
        {allStatuses.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
      {filteredOrders.map((order, index) => (
        <div key={index} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold text-gray-800">Customer Name: {order.CustomerName}</h2>
          <p className="text-gray-600">Status: {order.Status.join(", ")}</p>
          <p className="text-gray-600">Order Date: {order.OrderDate}</p>
          <p className="text-gray-600">Total Price: {order.TotalPrice}</p>
        </div>
      ))}
    </div>
  );
}
