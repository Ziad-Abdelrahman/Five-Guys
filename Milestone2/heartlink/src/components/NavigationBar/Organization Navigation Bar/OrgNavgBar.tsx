import "../NavigationBar.css";
import OrgLeftDiv from "./OrgLeftDiv";
import OrgRightDiv from "./OrgRightDiv";
import NavigationBar from "../NavigationBar.tsx";
import HowToUse from "../../../Welcome/HowToUse.tsx";
const showHowTo = () => {
  var howto = document.getElementById("howto") as HTMLElement;
  howto.style.display = "flex";
};
const howtomsg = (
  <>
    <p>
      As a organization, you can view all the requests you have made. You can
      also create a new request.
    </p>
    <p>
      1. Click on the "View All Posts" button to view all the requests you have
      made.
    </p>
    <p>2. Click on the "Create a New Post" button to create a new request.</p>
    <p>3. You could also specify the Drop-off time. </p>
    <p>4. You can also request for probono. </p>
    <p>
      5. You can also view fulfilled probono requests, and thank them as well.
    </p>
  </>
);
function OrgNavgBar() {
  return (
    <>
      <HowToUse message={howtomsg} id={"howto"} />
      <NavigationBar
        leftDiv={<OrgLeftDiv />}
        rightDiv={<OrgRightDiv help={showHowTo} />}
        dashboard={"/Organization"}
      />
    </>
  );
}

export default OrgNavgBar;
