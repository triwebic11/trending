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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchAgentByPhone from "./pages/CardPages/SearchAgentByPhone.jsx";
import HowToBeAgent from "./pages/CardPages/HowToBeAgent.jsx";
import VelkiSite from "./pages/CardPages/VelkiSite.jsx";
import RulesAndRegulationForOpenAccount from "./pages/CardPages/RulesAndRegulationForOpenAccount.jsx";

import HowToOpenAccount from "./pages/CardPages/HowToOpenAccount.jsx";
import UserRegister from "./pages/user/UserRegister.jsx";
import UserLogin from "./pages/user/UserLogin.jsx";

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
      { path: "/suchagent", element: <SearchAgentByPhone /> },
      { path: "/searchagentbyphone", element: <SearchAgentByPhone /> },
      { path: "/howtobeagent", element: <HowToBeAgent /> },
      { path: "/velkisite", element: <VelkiSite /> },
      {
        path: "/rulestoopenaccount",
        element: <RulesAndRegulationForOpenAccount />,
      },

      { path: "/howtoopen", element: <HowToOpenAccount /> },
      { path: "/siteadminlist", element: <SiteAdminList /> },

      {
        path: "/howtoshare",
        element: <HowToShare />,
      },

      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
  { path: "/login", element: <UserLogin /> },
  { path: "/admin-login", element: <LoginPage /> },
  { path: "/dashboard", element: <Dashboard /> },
 
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
