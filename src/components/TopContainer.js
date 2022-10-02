import folder from "../assets/img/folder.png";
import desktop_computer from "../assets/img/desktop-computer.png";
import firefox from "../assets/img/firefox.png";
import microsoft from "../assets/img/microsoft.png";
import whatsapp from "../assets/img/whatsapp.png";
const TopContainer = () => {
    return (
      <>
        <div className="topContainer">
          <div className="desktops-icons">
          <img src={folder} alt="folder"/>
          <img src={desktop_computer} alt="desktop_computer"/>
          <img src={microsoft} alt="microsoft"/>
          <img src={firefox} alt="firefox"/>
          <img src={whatsapp} alt="whatsapp"/>
          </div>
        </div>
      </>
    );
  };
  
  export default TopContainer;
  