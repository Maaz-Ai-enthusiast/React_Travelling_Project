
import { MdDashboard } from 'react-icons/md';
import { BiLogoMagento } from "react-icons/bi";
import { LiaSubscriptSolid } from "react-icons/lia";
import { AiOutlineTransaction } from "react-icons/ai";
import { CiBank } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import SubOptions from '../sideBar_subOptions/SubOptions';

const SideBarOptions = () => {
  return (
    <div className="h-[372px] w-[249px] absolute top-[120px] ">
   <SubOptions op="Dashboard" icon={MdDashboard}/>
   <SubOptions op="Agencies" icon={BiLogoMagento }/>
   <SubOptions op="Subscription" icon={LiaSubscriptSolid}/>
   <SubOptions op="Trasaction" icon={ AiOutlineTransaction }/>
   <SubOptions op="Bank" icon={CiBank}/>
   <SubOptions op="Notification" icon={ IoIosNotifications }/>
    </div>
  );
};

export default SideBarOptions;
