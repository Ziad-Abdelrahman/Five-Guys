import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./Welcome/Welcome.tsx";
import SignUp from "./SignUp/SignUp.tsx";
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
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
