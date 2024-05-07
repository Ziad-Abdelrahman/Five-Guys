import { useLoaderData, useParams } from "react-router-dom";
import DonationParent from "../../components/DonationQuantity/DonationParent.tsx";

function RequestQuantity() {
  const { id } = useParams();

  const clothesData = useLoaderData() as any;
  return (
    <DonationParent
      id={id}
      type={clothesData.description}
      maxValue={clothesData.quantity}
    />
  );
}

// @ts-ignore
const RequestLoader = async ({ params }) => {
  var { id } = params;
  const res = await fetch("http://localhost:4000/Requests_Data/" + id);
  return res.json();
};

export { RequestLoader, RequestQuantity };
