import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("Red30 Tech");

  const submitHandler = e => {
    e.preventDefault();

    navigate("/confirmation", {
      state: {
        name: name,
        email: email,
        course: course
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

