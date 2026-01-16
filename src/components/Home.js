export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/Republic_Polytechnic_Logo.jpg"
        alt="Republic Polytechnic Logo"
      />

      <h1>{title}</h1>

      <p>
        Welcome to the <strong>Republic Polytechnic School of Infocomm</strong>{" "}
        Course Enrolment Portal.
      </p>

      <p>
        Explore our full-time diplomas, view the modules offered within each
        programme, and register your interest in the courses you’re passionate
        about.
      </p>

      <p>
        This portal uses React and React Router to provide a dynamic experience
        for navigating diplomas and submitting course enrolments.
      </p>

      <p>
        Republic Polytechnic delivers industry-focused infocomm programmes that
        empower students with practical skills and real-world learning
        experiences.
      </p>
    </div>
  );
}
