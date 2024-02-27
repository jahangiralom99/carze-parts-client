import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Router/Route.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#e6e7ee]">
    <AuthProvider>
    <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </div>
);
