import { useState } from "react";
import customerData from "../data.json";

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  
  const _searchTerm = searchTerm.toLowerCase();
  const _selectedTag = selectedTag.toLowerCase();
  const _selectedStatus = selectedStatus.toLowerCase();

  const filteredCustomers = customerData.filter((customer) => {
    const matchesSearch =
      customer.CustomerName.toLowerCase().includes(_searchTerm) ||
      customer.Email.toLowerCase().includes(_searchTerm) ||
      customer.Phone.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? customer.Loyalty.some(tag => tag.toLowerCase().includes(_selectedTag)) : true;
    const matchesStatus = selectedStatus ? customer.Status.some(status => status.toLowerCase().includes(_selectedStatus)) : true;

    return matchesSearch && matchesTag && matchesStatus;
  });

  const allTags = [
    ...new Set(customerData.flatMap((customer) => customer.Loyalty)),
  ];

  const allStatuses = [
    ...new Set(customerData.flatMap((customer) => customer.Status)),
  ];

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search customer..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        name="selectedTag"
        onChange={(e) => setSelectedTag(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Loyalty Levels</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {filteredCustomers.map((customer, index) => (
        <div key={index} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold text-gray-800">Customer Name: {customer.CustomerName}</h2>
          <p className="text-gray-600">Email: {customer.Email}</p>
          <p className="text-gray-600">Phone:{customer.Phone}</p>
          <p className="text-gray-600">Loyalty Level: {customer.Loyalty.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
