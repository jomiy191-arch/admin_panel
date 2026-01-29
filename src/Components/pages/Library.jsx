import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Library = () => {
  const { searchTerm } = useOutletContext();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/library.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Library</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Book</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((book, i) => (
              <tr key={book.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {book.title}
                </td>
                <td className="p-3">{book.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
