import React from "react";
// to translation language
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const CorporateGovernancePage = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <h1>{t("header.Corporate Governance")}</h1>
    </>
  );
};

export default CorporateGovernancePage;
