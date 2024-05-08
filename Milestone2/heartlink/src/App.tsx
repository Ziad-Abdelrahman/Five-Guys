import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./Welcome/Welcome.tsx";
import SignUp from "./SignUp/SignUp.tsx";
import AdminDashboard from "./Admin/AdminDashboard.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Welcome />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Donor">
        {/* <Route path="Dashboard" element={<DonorDashboard />} />*/}
      </Route>
      <Route path="Organization">
        {/* <Route path="Dashboard" element={<OrganizationDashboard />} />*/}
      </Route>
      <Route path="Admin">
        {/* <Route path="Dashboard" element={<AdminDashboard />} />*/}
      </Route>

      <Route path="test" element={<AdminDashboard />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
