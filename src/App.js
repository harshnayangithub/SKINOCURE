import { BrowserRouter,Route,Routes } from "react-router-dom";
import Scan from './containers/App.tsx'
import Mainpage from './Mainpage';
import PaymentPage from "./login_page.js";
import Appointment from "./Appointment.js";
import LoginPage from "./login/Registerpage.js";


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>;
      <Route path="Scan" element={<Scan/>}/>;
      <Route path="Payment" element={<PaymentPage/>}/>;
      <Route path="Doctors" element={<Appointment/>}/>;
      <Route path="LoginPage" element={<LoginPage/>}/>;
    </Routes>
    </BrowserRouter>
  )
}
export default App;