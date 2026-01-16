import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Example list of courses (could also come from modulesData)
const courses = [
  "Programming Fundamentals I",
  "Software Development Process",
  "AI Essentials and Innovations",
  "Ethical Hacking",
  "Digital Forensics"
];

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState(courses[0]); // default to first course

  const submitHandler = e => {
    e.preventDefault();

    // Navigate to confirmation page with state
    navigate("/confirmation", {
      state: {
        name,
        email,
        course
      }
    });
  };

  return (
    <form onSubmit={submitHandler} className="container">
      <h2>Course Registration</h2>

      <label>
        Name:
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Select Course:
        <select value={course} onChange={e => setCourse(e.target.value)}>
          {courses.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
