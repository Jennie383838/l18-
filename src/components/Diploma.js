import { useParams, Link, Outlet } from "react-router-dom";

const modulesData = {
  DIT: [
    { id: "FSD", name: "Full Stack Development" },
    { id: "UX", name: "User Experience Design" }
  ],
  DISM: [
    { id: "CEH", name: "Ethical Hacking" },
    { id: "DF", name: "Digital Forensics" }
  ]
};

function Diploma() {
  const { diplomaId } = useParams();
  const modules = modulesData[diplomaId] || [];

  return (
    <div>
      <h3>Modules</h3>
      {modules.map(m => (
        <p key={m.id}>
          <Link to={m.id}>{m.name}</Link>
        </p>
      ))}
      <Outlet />
    </div>
  );
}

export default Diploma;
