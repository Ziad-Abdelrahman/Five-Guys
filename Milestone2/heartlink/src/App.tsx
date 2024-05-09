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
import ClothesRequests from "./Donation Requests Page/ClothesRequests.tsx";
import {
  RequestLoader,
  RequestQuantity,
} from "./Donation Requests Page/Data_Extractor/RequestQuantity.tsx";
import MedicalRequests from "./Donation Requests Page/MedicalRequests.tsx";
import CreateMedicalPostPt2 from "./Medical Posts/CreateMedicalPostPt2.tsx";
import CreateMedicalPost from "./Medical Posts/CreateMedicalPost.tsx";
import ProBonos from "./Probonos/ProBonos.tsx";
import CreateTeachingPost from "./Teaching Posts/CreateTeachingPost.tsx";
import OrganizationAccountInfo from "./OrganizationAccountInfo/OrganizationAccountInfo.tsx";
import EditOrganizationAccountInfo from "./OrganizationAccountInfo/EditOrganizationAccountInfo.tsx";
import UpdatedOrganizationInfo from "./OrganizationAccountInfo/UpdatedOrganizationInfo.tsx";
import DeleteDonors from "./Admin/Donors/DeleteDonors.tsx";
import PendingDonors from "./Admin/Donors/PendingDonors.tsx";
import DeleteOrganizations from "./Admin/Organizations/DeleteOrganizations.tsx";
import PendingOrganizations from "./Admin/Organizations/PendingOrganizations.tsx";
import ChangePass from "./Admin/change password/ChangePass.tsx";
import AdminDashboard from "./Admin/AdminDashboard.tsx";
import DonorDashboard from "./DonorDashboard/DonorDashboard.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Welcome />} />
      <Route path="Signup" element={<SignUp />} />
      <Route path="Donor">
        <Route index element={<DonorDashboard />} />
        <Route
          path="Quantity/:id"
          element={<RequestQuantity />}
          loader={RequestLoader}
        />
        <Route path={"ClothesDonation"} element={<ClothesRequests />} />
        <Route path={"MedicalRequests"} element={<MedicalRequests />} />
      </Route>
      {/* <Route path="Dashboard" element={<RecipientDashboard />} />*/}
      <Route path="Organization">
        <Route index element={<OrganizationDashboard />} />
        <Route
          path="ViewPosts"
          element={<ViewDonationPostsWebpage />}
          loader={AllDataLoader}
        />
        <Route path="EditPost">
          <Route
            path="cont/:id"
            element={<EditorPt2 />}
            loader={EditorLoader}
          />
          <Route path=":id" element={<Editor />} loader={EditorLoader} />
        </Route>
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
        <Route path="CreateMedicalRequest">
          <Route path="1" element={<CreateMedicalPost />} />
          <Route path="2" element={<CreateMedicalPostPt2 />} />
        </Route>
        <Route path="CreateTeachingPost" element={<CreateTeachingPost />} />
        <Route path="FulfilledProboPosts" element={<ProBonos />} />
        <Route path={"AccountInfo"}>
          <Route index element={<OrganizationAccountInfo />} />
          <Route path={"Edit"} element={<EditOrganizationAccountInfo />} />
          <Route path={"Updated"} element={<UpdatedOrganizationInfo />} />
        </Route>
      </Route>
      <Route path="Admin">
        <Route index element={<AdminDashboard />} />
        <Route path="ViewDonors" element={<DeleteDonors />} />
        <Route path="ViewOrganizations" element={<DeleteOrganizations />} />
        <Route path="DonorSubmissions" element={<PendingDonors />} />
        <Route
          path="OrganizationSubmissions"
          element={<PendingOrganizations />}
        />
        <Route path="ChangePass" element={<ChangePass />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
