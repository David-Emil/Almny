import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "Student",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      alert("Account created successfully");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <select
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({ ...formData, role: e.target.value })
          }
        >
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
        </select>

        <button className="w-full bg-black text-white p-3 rounded">
          Register
        </button>
      </form>
    </div>
  );
}