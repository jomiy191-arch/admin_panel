import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Students = () => {
  const { searchTerm } = useOutletContext();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/students.json")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Students</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Student</th>
              <th className="p-3">Age</th>
              <th className="p-3">Group</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {s.name}
                </td>
                <td className="p-3">{s.age}</td>
                <td className="p-3">{s.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
