import React from 'react';
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import CareArtical from './pages/dashboard/CareArtical';
import HealthRecord from './pages/dashboard/HealthRecord';
import Shelter from './pages/dashboard/Shelter';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import PetOwnerRegister from "./pages/auth/PetOwnerRegister"
import ShelterRegister from './pages/auth/ShelterRegister';
import VeterinarianRegister from './pages/auth/VeterinarianRegister';
import PetProfiles from "./pages/PetProfiles"
import AddPet from "./pages/AddPet"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/dashboard/Dashboard"
import Users from "./pages/dashboard/Users"
import Product from "./pages/dashboard/Product"
import AddProduct from "./pages/dashboard/AddProduct"
import UpdateProduct from "./pages/dashboard/UpdateProduct"
import Orders from "./pages/dashboard/Orders"
import Pet from "./pages/dashboard/Pet"
import PetAdd from "./pages/dashboard/PetAdd"
import UpdatePet from "./pages/dashboard/UpdatePet"
import Appointment from "./pages/dashboard/Appointment"
import AddAppointment from "./pages/dashboard/AddAppointment"
import Profile from "./pages/dashboard/Profile"
import UpdateAppointment from "./pages/dashboard/UpdateAppointment"
import NotFound from "./pages/NotFound"
import AppContextProvider from './context/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/auth/Login"
import OwnerAppointment from './pages/dashboard/OwnerAppointment';
import VetAppointment from './pages/dashboard/VetAppointment';
import AddCareArticle from './pages/dashboard/AddCareArticle';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/owner-register" element={<PetOwnerRegister />} />
          <Route path="/shelter-register" element={<ShelterRegister />} />
          <Route path="/veterinarian-register" element={<VeterinarianRegister />} />

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pet-profiles" element={<PetProfiles />} />
          {/* <Route path="/add-pet" element={<AddPet />} /> */}

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/products" element={<Product />} />
          <Route path="/dashboard/addproduct" element={<AddProduct />} />
          <Route path="/dashboard/updateproduct/:id" element={<UpdateProduct />} />

          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/pet" element={<Pet />} />
          <Route path="/dashboard/addpet" element={<PetAdd />} />
          {/* <Route path="/dashboard/addpet" element={<AddPet />} /> */}
          <Route path="/dashboard/updatepet/:id" element={<UpdatePet />} />

          <Route path="/dashboard/appointment" element={<Appointment />} />
          <Route path="/dashboard/ownerAppointment" element={<OwnerAppointment />} />
          <Route path="/dashboard/vetAppointment" element={<VetAppointment />} />

          <Route path='/dashboard/addappointment' element={<AddAppointment />} />

          <Route path='/dashboard/profile' element={<Profile />} />
          <Route path='/dashboard/notification' element={<Notification />} />
          <Route path="/dashboard/careartical" element={<CareArtical />} />
          <Route path='/dashboard/addArticle' element={<AddCareArticle />} />
          <Route path="/dashboard/healthrecord" element={<HealthRecord />} />
          <Route path="/dashboard/Shelter" element={<Shelter />} />


          <Route path='/dashboard/updateappointment/:id' element={<UpdateAppointment />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

