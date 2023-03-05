// to translation language
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function FinancialReport() {
  const [t, i18n] = useTranslation();

  return (
    <>
      <h1>{t("header.Financial Reports")}</h1>
    </>
  );
}

export default FinancialReport;
