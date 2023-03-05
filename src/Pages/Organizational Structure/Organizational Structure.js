import React, { useEffect, useState } from "react";

// to translation language
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function OrganizationalStructurePage() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <h1>{t("header.Major Shareholders")}</h1>
    </>
  );
}

export default OrganizationalStructurePage;
