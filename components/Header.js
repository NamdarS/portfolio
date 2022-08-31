export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Namdar Sadiq</h1>
      </div>
      <div className="links-row">
        <a className="links" href="mailto: namdarsadiq@gmail.com">
          Email
        </a>
        <a
          className="links"
          href="https://www.linkedin.com/in/namdarsadiq/"
          target="blank"
        >
          LinkedIn
        </a>
        <a className="links" href="https://github.com/namdars" target="blank">
          Github
        </a>
        <a className="links" href="/resume.pdf" target="blank">
          Resume
        </a>
      </div>
    </div>
  );
}
