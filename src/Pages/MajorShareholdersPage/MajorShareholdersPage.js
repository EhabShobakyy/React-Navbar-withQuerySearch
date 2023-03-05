import { t } from "i18next";
import { useTranslation } from "react-i18next";
import React from "react";

//Style
import "./MajorShareholdersPage.css";

const MajorShareholdersPage = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <h1>{t("header.Major Shareholders")}</h1>
    </>
  );
};

export default MajorShareholdersPage;
