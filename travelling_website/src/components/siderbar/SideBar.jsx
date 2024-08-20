import SideBarOptions from "../sidebar_options/SiderBarOptions";
import logo from "./../../images/Logo.png";
const SideBar = () => {
  return (
<>
  <div className="sideBar_container min-h-[100vh] bg-[#605bff] w-[249px] relative">

     <div className="logo_container flex  text-white h-[25px] w-[176.72px] justify-evenly items-center absolute top-[22px] left-[23px] ">
        <img src={logo} alt="logo_icon" />
        <p className="logo_text text-[23px] font-sans font-semibold">Travelacco</p>
     </div>
     <SideBarOptions/>
  </div>
</>
  );
};

export default SideBar;


