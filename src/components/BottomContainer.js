import { VscSearch } from "react-icons/vsc";
import { AiFillWindows } from "react-icons/ai";
import { FaDesktop, FaVolumeUp } from "react-icons/fa";
import { WiCelsius } from "react-icons/wi";
import { IoChevronUpOutline } from "react-icons/io5"
import { BiMessageAlt } from "react-icons/bi";

import chrome from "../assets/img/chrome.png";
import cutting from "../assets/img/cutting.png";
import firefox from "../assets/img/firefox.png";
import folder from "../assets/img/folder.png";
import microsoft from "../assets/img/microsoft.png";
import whatsapp from "../assets/img/whatsapp.png";
import moon from "../assets/img/moon.png";


const BottomContainer = () => {
  return (
    <>
      <div className="bottomContainer">
        <div className="bottomContainerLeft">
          <ul className="bottomContainerLeftList">
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems0">
              <AiFillWindows />

            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems1">
              <div className="searchContainer">
                <VscSearch />
                <input
                  type="text"
                  className="search"
                  placeholder="Type here to search"
                />
              </div>
            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems2">
              <img src={folder} alt="folder" />
            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems3">
              <img src={chrome} alt="chrome" />
            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems4">
              <img src={cutting} alt="cutting" />
            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems5">
              <img src={microsoft} alt="microsoft" />

            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems6">

              <img src={firefox} alt="firefox" />

            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems7">
              <img src={chrome} alt="chrome" />
            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems8">
              <img src={chrome} alt="chrome" />
            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems9">
              <img src={whatsapp} alt="whatsapp" />

            </li>
            <li className="bottomContainerLeftListItems bottomContainerLeftListItems10">
              <img src={chrome} alt="chrome" />
            </li>
          </ul>
        </div>

        <div className="bottomContainerRight">

          <ul className="bottomContainerRightList">
            <li className="bottomContainerRightListItems bottomContainerRightListItems1">
              <img src={moon} alt="moon" />
            </li>
            <li className="bottomContainerRightListItems bottomContainerRightListItems2">
              27
              <span>
                <WiCelsius />
              </span>
            </li>
            <li className="bottomContainerRightListItems bottomContainerRightListItems3">
              <IoChevronUpOutline />
            </li>
            <li className="bottomContainerRightListItems bottomContainerRightListItems4">
              <FaDesktop />

            </li>
            <li className="bottomContainerRightListItems bottomContainerRightListItems5">
              <FaVolumeUp />
            </li>
            <li className="bottomContainerRightListItems bottomContainerRightListItems6">
              ENG
            </li>
            <li className="bottomContainerRightListItems bottomContainerRightListItems7">
              <p>2:23 PM</p>
              <p>02-Oct-22</p>
            </li>
            <li className="bottomContainerRightListItems bottomContainerRightListItems8">
              <BiMessageAlt />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomContainer;
