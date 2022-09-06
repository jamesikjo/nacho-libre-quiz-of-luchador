import nachoHeader from "../../assets/images/nacho_header.png";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <div
          className="nav-links"
          style={{ margin: "1.25rem 0rem", textAlign: "right" }}
        >
          <a href="/" style={{ paddingRight: "1.5rem" }}>
            Start Over
          </a>
        </div>
      </nav>
      <img
        src={nachoHeader}
        alt="header logo"
        style={{ width: 260, margin: "auto", display: "block" }}
      />
    </header>
  );
};

export default MainHeader;
