// Routing Init
import { BrowserRouter, Route, Routes } from "react-router-dom";
// i18n init
import "./i18n";
import { useTranslation } from "react-i18next";
// Style App
import "./App.css";
// Page Init
import OverviewPage from "./Pages/OverviewPage/OverviewPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ChartPage from "./Pages/ChartPage/ChartPage";
import OrganizationalStructurePage from "./Pages/Organizational Structure/Organizational Structure";
import MajorShareholdersPage from "./Pages/MajorShareholdersPage/MajorShareholdersPage";
import FinancialReport from "./Pages/FinancialReportPage/FinancialReports";
import CorporateGovernancePage from "./Pages/CorporateGovernancePage/CorporateGovernancePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import DisclosuresPage from "./Pages/Disclosures/Disclosures.js";
import FinancialRatiosPage from "./Pages/FinancialRatiosPage/FinancialRatiosPage";
// init navBar
import Header from "./Layouts/Header/navbar/Header";
import { useEffect, useState } from "react";

function App() {
  const [t, i18n] = useTranslation();

  return (
    <div
      className="App"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route
            path="/majorShareholders"
            element={<MajorShareholdersPage />}
          />
          <Route
            path="/corporateGovernance"
            element={<CorporateGovernancePage />}
          />
          <Route
            path="/OrganizationalStructurePage"
            element={<OrganizationalStructurePage />}
          />

          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/FinancialRatiosPage"
            element={<FinancialRatiosPage />}
          />
          <Route path="/FinancialReport" element={<FinancialReport />} />
          <Route path="/DisclosuresPage" element={<DisclosuresPage />} />
          <Route
            path="/DisclosuresPage/:individualID"
            exact
            element={<DisclosuresPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
