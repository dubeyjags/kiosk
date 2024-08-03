import { Outlet } from "react-router-dom";
import {Header} from "../../components/index";

function LayoutWithHeader() {
  return (
    <>
      <div className="container">
        <Header />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default LayoutWithHeader;
