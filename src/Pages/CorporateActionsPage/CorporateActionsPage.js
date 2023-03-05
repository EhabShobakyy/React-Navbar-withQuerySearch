import React from "react";
// to translation language
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const CorporateActionsPage = () => {
  const [t, i18n] = useTranslation();
  return <h1>{t("header.Corporate Actions")}</h1>;
};

export default CorporateActionsPage;
