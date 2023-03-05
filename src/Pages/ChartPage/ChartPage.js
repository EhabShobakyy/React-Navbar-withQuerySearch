// to translation language
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const ChartPage = () => {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <h1>{t("header.Chart")}</h1>
    </div>
  );
};

export default ChartPage;
