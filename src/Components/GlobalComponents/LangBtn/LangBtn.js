import React, { useEffect, useState } from "react";
// i18n init
import { useTranslation } from "react-i18next";
// init Navigator to change URL
import { useNavigate } from "react-router";
// BTN Style
import "./LangBtn.css";

function LangBtn() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("en"); // State to save & compare between AR or EN
  const navigate = useNavigate("?language=en"); // Default English

  // function to render page when language Changed
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language, lang]);

  // function to check if browser language English or Arabic
  useEffect(() => {
    window.location.search === "?language=ar"
      ? setLang(i18n.changeLanguage("ar"))
      : setLang(i18n.changeLanguage("en"));
  }, []);

  return (
    <div className="lang-btn">
      {lang === "en" ? (
        <button
          onClick={() => {
            setLang(i18n.changeLanguage("ar"));
            navigate({
              search: "?language=ar",
            });
          }}
        >
          عربي
        </button>
      ) : (
        <button
          onClick={() => {
            setLang(i18n.changeLanguage("en"));
            navigate({
              search: "?language=en",
            });
          }}
        >
          English
        </button>
      )}
    </div>
  );
}

export default LangBtn;
