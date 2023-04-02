import "./privacy.css";

function Privacy({ name, phone, github }) {
  return (
    <section>
      <h2 className="name">privacy</h2>
      <p>name: {name}</p>
      <p>phone: {phone}</p>
      <p>github: {github}</p>
    </section>
  );
}

export default Privacy;
