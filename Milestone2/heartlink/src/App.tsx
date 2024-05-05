import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./Welcome/Welcome.tsx";
import SignUp from "./SignUp/SignUp.tsx";
import Toys from "./Donation Posts/Toys Donation Webpages/Toys.tsx";
import ToysPt2 from "./Donation Posts/Toys Donation Webpages/ToysPt2.tsx";
import Stationary from "./Donation Posts/Stationary Webpages/Stationary.tsx";
import CreatePost from "./Donation Posts/createPost/CreatePost.tsx";
import Medication from "./Donation Posts/Medication Webpages/Medication.tsx";
import MedicationPt2 from "./Donation Posts/Medication Webpages/MedicationPt2.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Welcome />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Donor">
        {/* <Route path="Dashboard" element={<DonorDashboard />} />*/}
      </Route>
      <Route path="Organization">
        <Route path="CreateAPost">
          <Route index element={<CreatePost />} />
          <Route path="Toys">
            <Route path="1" element={<Toys />} />
            <Route path="2" element={<ToysPt2 />} />
          </Route>
          <Route path="Staitonary" element={<Stationary />} />
          <Route path="Medication">
            <Route path="1" element={<Medication />} />
            <Route path="2" element={<MedicationPt2 />} />
          </Route>
        </Route>
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
