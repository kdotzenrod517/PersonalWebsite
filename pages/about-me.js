import CustomButton from "@components/CustomButton";
import styled from "styled-components";

const SpecialLink = styled.a`
  a:link {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
    text-decoration: none;
  }

  a:active {
    color: white;
    text-decoration: none;
  }

  a:hover {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/squiggle.svg");
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 20%;
    border-bottom: 0;
    padding-bottom: 0.3em;
    text-decoration: none;
  }
`;

const AboutMePage = () => {
  return (
    <div
      className="AboutMe"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <CustomButton>
        <SpecialLink>
          <a
            // style={{ color: "#FFF", textDecoration: "none" }}
            href="/files/resume.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </SpecialLink>
      </CustomButton>
    </div>
  );
};

export default AboutMePage;
