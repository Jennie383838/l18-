import { Link, Outlet } from "react-router-dom";

const diplomas = [
  { id: "DIT", name: "Diploma in Information Technology" },
  { id: "DISM", name: "Diploma in Infocomm Security Management" }
];

function Diplomas() {
  return (
    <div>
      <h2>Diplomas</h2>
      {diplomas.map(d => (
        <p key={d.id}>
          <Link to={d.id}>{d.name}</Link>
        </p>
      ))}
      <Outlet />
    </div>
  );
}

export default Diplomas;
