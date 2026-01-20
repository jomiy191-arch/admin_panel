import React, { useState } from 'react'

const initialStudents = [
  { id: 1, name: "Ali Karimov", age: 20, group: "Frontend", status: "Active", img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Dilshod Akbarov", age: 22, group: "Backend", status: "Active", img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Malika Ismoilova", age: 19, group: "Design", status: "Active", img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Jasmin Rasulova", age: 21, group: "Frontend", status: "Inactive", img: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Azizbek Qodirov", age: 23, group: "Backend", status: "Active", img: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Shohruh Tursunov", age: 20, group: "Mobile", status: "Active", img: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Diyorbek Sobirov", age: 24, group: "Frontend", status: "Inactive", img: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Nigina Yoqubova", age: 18, group: "Design", status: "Active", img: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Sarvar Xudoyberdiyev", age: 22, group: "Backend", status: "Active", img: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Madina Alimuhamedova", age: 21, group: "Frontend", status: "Active", img: "https://i.pravatar.cc/150?img=10" },
]

const Students = () => {
  const [students, setStudents] = useState(initialStudents)

  // Status toggle funksiyasi
  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "Active" ? "Inactive" : "Active",
            }
          : student
      )
    )
  }

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
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>

                {/* Avatar + Name */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{student.name}</span>
                </td>

                <td className="p-3">{student.age}</td>
                <td className="p-3">{student.group}</td>

                <td className="p-3">
                  <button
                    onClick={() => toggleStatus(student.id)}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    } hover:opacity-80 transition`}
                  >
                    {student.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
