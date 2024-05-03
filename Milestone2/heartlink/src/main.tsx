import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./components/Search/Search.tsx";
import AllDonationRequests from "./Donation Requests Page/AllDonationRequests.tsx";
import ClothesRequests from "./Donation Requests Page/ClothesRequests.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClothesRequests />
  </React.StrictMode>,
);
