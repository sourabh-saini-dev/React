import React, { useState, useEffect } from "react";

const Test = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  let res = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") {
    res = [...res].sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    res = [...res].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">
        Search
      
      </h2>

    
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 sm:w-80"
        />

        <select
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Select Sort</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

 
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {res.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h1 className="mb-2 text-xl font-bold text-gray-800">
              {item.title}
            </h1>

            <p className="mb-3 text-2xl font-bold text-green-600">
              {item.price}
            </p>

            <p className="text-sm leading-6 text-gray-600">
              {item.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Category: {item.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;