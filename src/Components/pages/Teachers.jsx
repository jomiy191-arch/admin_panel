import React, { useState } from 'react'

const initialTeachers = [
  { id: 1, name: "Otabek Rahmonov", subject: "Mathematics", status: "Active", img: "https://i.pravatar.cc/150?img=11" },
  { id: 2, name: "Dilnoza Karimova", subject: "English", status: "Active", img: "https://i.pravatar.cc/150?img=12" },
  { id: 3, name: "Javlon Ismoilov", subject: "Physics", status: "Inactive", img: "https://i.pravatar.cc/150?img=13" },
  { id: 4, name: "Madina Qodirova", subject: "Chemistry", status: "Active", img: "https://i.pravatar.cc/150?img=14" },
  { id: 5, name: "Sardor Tursunov", subject: "Biology", status: "Active", img: "https://i.pravatar.cc/150?img=15" },
  { id: 6, name: "Zarina Abdullayeva", subject: "History", status: "Active", img: "https://i.pravatar.cc/150?img=16" },
  { id: 7, name: "Rustam Jo‘rayev", subject: "Computer Science", status: "Inactive", img: "https://i.pravatar.cc/150?img=17" },
  { id: 8, name: "Nigora Xudoyberdiyeva", subject: "Geography", status: "Active", img: "https://i.pravatar.cc/150?img=18" },
  { id: 9, name: "Akmal Sobirov", subject: "Economics", status: "Active", img: "https://i.pravatar.cc/150?img=19" },
  { id: 10, name: "Shahnoza Yo‘ldasheva", subject: "Literature", status: "Active", img: "https://i.pravatar.cc/150?img=20" },
]

const Teachers = () => {
  const [teachers, setTeachers] = useState(initialTeachers)

  // Status toggle funksiyasi
  const toggleStatus = (id) => {
    setTeachers((prev) =>
      prev.map((teacher) =>
        teacher.id === id
          ? {
              ...teacher,
              status: teacher.status === "Active" ? "Inactive" : "Active",
            }
          : teacher
      )
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Teachers</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Teacher</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={teacher.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{teacher.name}</span>
                </td>

                <td className="p-3">{teacher.subject}</td>

                <td className="p-3">
                  <button
                    onClick={() => toggleStatus(teacher.id)}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      teacher.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    } hover:opacity-80 transition`}
                  >
                    {teacher.status}
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

export default Teachers
