import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const _searchTerm = searchTerm.toLowerCase();
    const _selectedTag = selectedTag.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework)=>{
        const matchesSearch=
        framework.title
            .toLowerCase()
            .includes(_searchTerm) ||
        framework.category
            .toLowerCase()
            .includes(_searchTerm);

        const matchesTag = selectedTag ?framework.tags.includes(selectedTag) : true;

        return matchesSearch && matchesTag;
    })
    const allTags = [
        ...new Set (frameworkData.flatMap((framework)=>framework.tags)),
    ];
    return(
        <div className="p-8">
            <input 
                type="text" 
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <select 
                name="selectedTag" 
                onChange={(e)=>setSelectedTag(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4">
                    <option value="">All Tags</option>
                        {allTags.map((tag, index) => (
                            <option key={index} value={tag}>
                                {tag}
                            </option>
                    ))}
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
                {filteredFrameworks.map((item, index) => (
                <div key={item.id} className="bg-pink-200 p-4 border rounded shadow">
                    <h2 className="text-lg font-bold text-gray-800"><center>{item.title}</center></h2>
                    <p className="text-gray-600">Category: {item.category}</p>
                    <p className="text-gray-600">Description: {item.description}</p>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Diskon: {item.discountPercentage}%</p>
                    <p className="text-gray-600">Rating: {item.rating}</p>
                    <p className="text-gray-600">Stok: {item.stock}</p>
                    <p className="text-gray-600">Brand: {item.brand}</p>
                    <p className="text-gray-600">
                        Dimensions: {item.dimensions.width} x {item.dimensions.height} x {item.dimensions.depth} mm
                    </p>
            <div className="mt-2">
                {item.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    ))}
</div>

        </div>
    )
}