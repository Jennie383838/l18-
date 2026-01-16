import featImg from "public\Republic Poly Logo.png";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Students at Republic Polytechnic School of Infocomm"
      />

      <h1>{title}</h1>

      <p>
        Welcome to the <strong>Republic Polytechnic School of Infocomm</strong> Course Enrolment Portal.
        Explore our full‑time diplomas, view the modules offered within each programme,
        and register your interest in the courses you’re passionate about.
      </p>

      <p>
        This portal uses React and React Router to provide a dynamic experience
        for navigating diplomas and submitting course enrolments. Select a
        diploma below to get started or visit the Register page to enrol in a
        course.
      </p>

      <p>
        Republic Polytechnic delivers industry‑focused infocomm programmes that
        empower students with practical skills and real‑world learning
        experiences. Discover the range of diplomas and modules available at
        RP School of Infocomm.
      </p>
    </div>
  );
}
