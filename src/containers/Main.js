import UserManagementInterface from "../Components/UserManagementInterface";
import "../index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  return (
    <div className="Main" class="footer-container">
      <UserManagementInterface />
      <ToastContainer autoClose={1000} />
      {/* Footer */}
      <p className="footer">
        Greekstart Forntend Challenge:- AdminUI &#174; P DHARANI KUMAR | 2023
      </p>
    </div>
  );
}

export default Main;
