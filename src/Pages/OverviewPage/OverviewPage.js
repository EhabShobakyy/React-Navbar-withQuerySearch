// to translation language
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const OverviewPage = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <h1>{t("header.Overview")}</h1>
    </>
  );
};
export default OverviewPage;
