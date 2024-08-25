import styled from "styled-components";
import media from "../../responsividade";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;

    p, a {
      color: #fafafa;
      margin: 10px;
  }


  @media ${media.tablet} {
    
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="links">
        <p>Marcelo dos Santos</p>
        <a href="https://github.com/marcelomdsp">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/marcelo-santos-089471291/">
          <GrLinkedin size={23} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521996553987&text=Ol%C3%A1!">
          <IoLogoWhatsapp size={27} />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
