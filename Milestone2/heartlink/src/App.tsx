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
import BloodDonation from "./Donation Posts/Blood Donation Webpages/BloodDonation.tsx";
import Clothes from "./Donation Posts/Clothes Donation Webpages/Clothes.tsx";
import ClothesPt2 from "./Donation Posts/Clothes Donation Webpages/ClothesPt2.tsx";
import Food from "./Donation Posts/Food Donation Webpages/Food.tsx";
import BooksPt2 from "./Donation Posts/Book Donation Webpages/BooksPt2.tsx";
import Books from "./Donation Posts/Book Donation Webpages/Books.tsx";
import MedicalEquipment from "./Donation Posts/Medical Equipment Webpages/MedicalEquipment.tsx";
import MedicalEquipmentPt2 from "./Donation Posts/Medical Equipment Webpages/MedicalEquipmentPt2.tsx";
import MedicalTools from "./Donation Posts/Medical Tools Webpages/MedicalTools.tsx";
import MedicalToolsPt2 from "./Donation Posts/Medical Tools Webpages/MedicalToolstPt2.tsx";
import OrganizationDashboard from "./Organization/OrganizationDashboard.tsx";
import {
  Editor,
  EditorLoader,
} from "./View Donation Posts/Edit Donation Posts/Editor.tsx";
import {
  ViewDonationPostsWebpage,
  AllDataLoader,
} from "./View Donation Posts/ViewDonationPostsWebpage.tsx";
import EditorPt2 from "./View Donation Posts/Edit Donation Posts/EditorPt2.tsx";
import OrgNavgBar from "./components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Welcome />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Donor">
        {/* <Route path="Dashboard" element={<DonorDashboard />} />*/}
      </Route>
      {/* <Route path="Dashboard" element={<RecipientDashboard />} />*/}
      <Route path="Organization">
        <Route path="CreateAPost">
          <Route index element={<CreatePost />} />
          <Route path="BloodDonation" element={<BloodDonation />} />
          <Route path="Clothes">
            <Route path="1" element={<Clothes />} />
            <Route path="2" element={<ClothesPt2 />} />
          </Route>
          <Route path="Food" element={<Food />} />
          <Route path="Books">
            <Route path="1" element={<Books />} />
            <Route path="2" element={<BooksPt2 />} />
          </Route>
          <Route path="Stationary" element={<Stationary />} />
          <Route path="Toys">
            <Route path="1" element={<Toys />} />
            <Route path="2" element={<ToysPt2 />} />
          </Route>
          <Route path="Medication">
            <Route path="1" element={<Medication />} />
            <Route path="2" element={<MedicationPt2 />} />
          </Route>
          <Route path="MedicalEquipment">
            <Route path="1" element={<MedicalEquipment />} />
            <Route path="2" element={<MedicalEquipmentPt2 />} />
          </Route>
          <Route path="MedicalTools">
            <Route path="1" element={<MedicalTools />} />
            <Route path="2" element={<MedicalToolsPt2 />} />
          </Route>
        </Route>
        {/* <Route path="Dashboard" element={<OrganizationDashboard />} />*/}
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
