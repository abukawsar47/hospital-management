import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPatient from './Pages/Dashboard/AddPatient';
import Admin from './Pages/Dashboard/Admin';
import AllUser from './Pages/Dashboard/AllUser';
import CreateBranch from './Pages/Dashboard/CreateBranch';
import CreateDoctor from './Pages/Dashboard/CreateDoctor';
import CreateStaff from './Pages/Dashboard/CreateStaff';
import Doctor from './Pages/Dashboard/Doctor';
import MyProfile from './Pages/Dashboard/MyProfile';
import PatientGraph from './Pages/Dashboard/PatientGraph';
import Patients from './Pages/Dashboard/Patients';
import Staff from './Pages/Dashboard/Staff';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto px-12'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='signup' element={<SignUp></SignUp>}></Route>

          <Route path='admin' element={<Admin></Admin>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="allUser" element={<AllUser></AllUser>}></Route>
            <Route path="createBranch" element={<CreateBranch></CreateBranch>}></Route>
            <Route path="createStaff" element={<CreateStaff></CreateStaff>}></Route>
            <Route path="createDoctor" element={<CreateDoctor></CreateDoctor>}></Route>
          </Route>

          <Route path='doctor' element={<Doctor></Doctor>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="patient" element={<Patients></Patients>}></Route>
            <Route path="graph" element={<PatientGraph></PatientGraph>}></Route>
          </Route>

          <Route path='staff' element={<Staff></Staff>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="addpatient" element={<AddPatient></AddPatient>}></Route>
          </Route>

        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
