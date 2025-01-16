"use client";
import { COI } from "@/config/COI";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = COI;

  const filteredData = data.filter(
    (item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ArtNo.toString().includes(searchTerm)
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Search Articles</h2>
      <AiOutlineSearch className="absolute ml-2 text-2xl mt-2" />
      <input
        type="text"
        placeholder="Type to Search Articles..."
        className="w-full p-2 pl-10 placeholder-black border border-gray-800 rounded-md shadow-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>
              <Link
                className="text-black"
                href={`article//${item.Name.split(" ").join("-")}`}
              >
                Article {item.ArtNo} - {item.Name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
