import { useEffect, useState } from "react";
import api from "../api/axios";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Almny Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {course.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {course.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">
                ${course.price}
              </span>

              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}