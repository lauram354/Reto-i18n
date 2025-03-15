import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";
import 'bootstrap/dist/css/bootstrap.min.css';

let initLocale = "en";
if (navigator.language === "es-ES"){
    initLocale = "es-ES"
}

function loadMessages(initLocale){
    switch (initLocale){
        case "en":
            return localeEnMessages;
        case "es-ES":
            return localeEsMessages;
        default:
            return localeEnMessages;
    }

}

ReactDOM.render(
    <IntlProvider locale={initLocale} messages={loadMessages(initLocale)}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
