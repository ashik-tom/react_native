import DateTimePicker from "@mohalla-tech/react-native-date-time-picker";
import React from "react";
import{View,Text} from "react-native";

// import LoginScreen from "./src/Pages/Login/Index.js";
import BottomNavBar from "./src/components/BottomNavBar.js";
import LandingHome from "./src/Pages/Home/Index.js";
import Profile from "./src/Pages/Profile/Index.js";
import DateTimeSelect from "./src/components/DateTimePicker";
import Raisesos from "./src/Pages/BottomSheets/RaiseSOS/Raisesos.js";
import moment from "moment";
import LowerSos from "./src/Pages/BottomSheets/RaiseSOS/LowerSOS/Lowersos.js";
import StepperProgress from "./src/components/StepperProgress.js";
import ProfileCards from "./src/Pages/BottomSheets/RaiseSOS/ProfileCards/ProfileCards.js";
import ProfileStat from "./src/Pages/BottomSheets/RaiseSOS/ProfileStat/ProfileStat";
import Notifications from "./src/Pages/Notifications/Index.js";
import VaccUpdate from "./src/Pages/BottomSheets/RaiseSOS/VaccUpdate/vaccUpdate.js";
import Options from "./src/Pages/BottomSheets/RaiseSOS/Options/Options.js";
import UploadPic from "./src/Pages/BottomSheets/RaiseSOS/UploadPhoto/UploadPic.js";
import WelcomeSnack from "./src/Pages/Snackbars/Welcome/WelcomeSnack.js";
import ProPicUpdateSnack from "./src/Pages/Snackbars/PropicUpdate/PropicUpdate.js";
import VacUpdateSnack from "./src/Pages/Snackbars/VacStatus/VacStatusSnack.js";
import VacPending from "./src/Pages/Alerts/VacPending/VacPending.js";
import Logout from "./src/Pages/Alerts/Logout/Logout.js";
import Sosraised from "./src/Pages/Alerts/SOSRaised/SosRaised.js";
// import LoginScreen from "./src/Pages/Login/Index.js"
export default function App(){
return(
//  <LandingHome/> 
  // <LoginScreen/>
  // <BottomNavBar/>
  // <Profile/>
  // <Raisesos/>
  // <DateTimeSelect/>
  // <LowerSos/>
  // <ProfileCards/>
  // <ProfileStat/>
  // <Notifications/>
  // <VaccUpdate/>
  // <Options/>
  // <UploadPic/>
  // <WelcomeSnack/>
  // <ProPicUpdateSnack/>
  // <VacUpdateSnack/>
  // <VacPending/>
  // <Logout/>
  <Sosraised/>
);
}
