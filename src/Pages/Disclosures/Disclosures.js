// to translation language
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function DisclosuresPage(props) {
  const [t, i18n] = useTranslation();
  return (
    <>
      <h1>{t("header.Disclosures")}</h1>
    </>
  );
}
export default DisclosuresPage;
