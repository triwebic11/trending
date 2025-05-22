import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CustomerServics from "./pages/CustomerServics.jsx";
import QuestionAnswer from "./pages/QuestionAnswer.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import MasterAgentList from "./pages/agentlist/MasterAgentList.jsx";
import SiteAdminList from "./pages/agentlist/SiteAdminList.jsx";
import SubAdminList from "./pages/agentlist/SubAdminList.jsx";
import SuperAgentList from "./pages/agentlist/SuperAgentList.jsx";
import SuchAgent from "./pages/SuchAgent.jsx";
import Velki from "./pages/site/Velki.jsx";
import Loading from "./pages/Loading.jsx";
import ChatWidget from "./components/Chatwidget.jsx";

import HowToShare from "./pages/HowToShare.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div>
      <Loading />
      <Header />
      <Outlet />
      <Footer />
      <ChatWidget />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },

      { path: "mastteragentlist", element: <MasterAgentList /> },
      { path: "siteadminlist", element: <SiteAdminList /> },
      { path: "subadminlist", element: <SubAdminList /> },
      { path: "superagentlist", element: <SuperAgentList /> },
      { path: "/masteragentlist", element: <MasterAgentList /> },
      { path: "/customerservics", element: <CustomerServics /> },
      { path: "/questionanswer", element: <QuestionAnswer /> },
      { path: "/loading", element: <Loading /> },
      { path: "/velki", element: <Velki /> },
      { path: "/suchagent", element: <SuchAgent /> },

      {
        path: "/howtoshare",
        element: <HowToShare />,
      },

      { path: "*", element: <PageNotFound /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/register", element: <Register /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
