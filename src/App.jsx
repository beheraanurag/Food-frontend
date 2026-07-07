import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Contactpage from "./pages/Contactpage";
import BookTable from "./components/Booktable";
import LoginPage from "./pages/Loginpage";
import Register from "./pages/Register";
import OurMenu from "./pages/OurMenu";
import ProtectedRoutes from "./ProtectedRoute";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./admin/AdminPanel";
import AdminFood from "./admin/AdminFood";
import AdminFoodAdd from "./admin/AdminFoodAdd";
import FoodeUpdatePage from "./admin/FoodeUpdatePage";
import OurFoods from "./pages/OurFoods";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import OrderSucess from "./pages/OrderSucess";
import Table from "./admin/Table"
import AdminContact from "./admin/AdminContact";

function Layout() {
  const isAdminRoue = location.pathname.startsWith("/admin");
  return (
    <>

      {!isAdminRoue && <Navbar />}
      <div style={{ marginTop: isAdminRoue ? "0px" : "80px" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<Servicepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/our-menu" element={<OurMenu />} />
          <Route path="/our-foods" element={<OurFoods />} />
          <Route path="/details/:id" element={<FoodDetailsPage />} />
          <Route path="/order-sucess" element={<OrderSucess />} />

          <Route path="/admin" element={<ProtectedRoutes />}>
            <Route path="" element={<AdminPanel />}>
              <Route
                path="dashboard"
                element={<Dashboard />}
              />
              <Route
                path="food"
                element={<AdminFood />}
              />
              <Route
                path="add"
                element={<AdminFoodAdd />}
              />
              <Route
                path="update/:id"
                element={<FoodeUpdatePage />}
              />
               <Route
                path="table"
                element={<Table />}
              />
               <Route
                path="contact"
                element={<AdminContact/>}
              />
            </Route>
          </Route>
        </Routes>
      </div>
      {!isAdminRoue && <Footer />}

    </>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App