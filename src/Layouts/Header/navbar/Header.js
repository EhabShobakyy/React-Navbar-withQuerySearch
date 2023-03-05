import React from "react";
// Routing init
import { NavLink } from "react-router-dom";
// Extra Logo Image
import extraLogo from "../../../Assets/extraLogo.png";
// Style
import "./header.css";
// Language Button
import LangBtn from "../../../Components/GlobalComponents/LangBtn/LangBtn";
// language init
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t] = useTranslation();
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click); // Toggle NavBar
  const Close = () => setClick(false); // Close Icon

  return (
    <div className="main-nav">
      <div className="container-md">
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container col-12">
            <div className="extra-logo col-2">
              <NavLink className="nav-link" to="/">
                <img src={extraLogo} alt="Extra Logo" />
              </NavLink>
            </div>
            <ul
              className={click ? "nav-menu active col-10" : "nav-menu col-10"}
            >
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "bi bi-x-circle" : "bi bi-list"}></i>
              </div>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{ pathname: "/", search: `${window.location.search}` }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Overview")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/profile",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Profile")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/chart",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Chart")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/OrganizationalStructurePage",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Organizational Structure")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/majorShareholders",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Major Shareholders")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/FinancialRatiosPage",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.FinancialRatios")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/corporateGovernance",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Corporate Governance")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/projects",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Projects")}{" "}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to={{
                    pathname: "/DisclosuresPage",
                    search: `${window.location.search}`,
                  }}
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  {t("header.Disclosures")}
                </NavLink>
              </li>

              <li>
                <div
                  activeClassName="active"
                  className="nav-links nav-item lang-btn"
                  onClick={click ? handleClick : null}
                >
                  <LangBtn />
                </div>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "" : "bi bi-list"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
