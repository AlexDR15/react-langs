import detectBrowserLanguage from 'detect-browser-language'

/* LANGUAGE FILES */
import * as Spanish from './langFiles/es';
import * as English from './langFiles/en';
/* END LANGUAGE FILES */

let lang = null;
let userLang = detectBrowserLanguage().substr(0, 2);
let msgLang = "UNDEFINED";

/* EACH CASE IS A LANGUAGE IDENTIFIED BY ITS ISO 2 DIGITS CODE */
switch (userLang){
    case "es":
        lang = Spanish;
        msgLang = "Español";
    break;
    case "en":
        lang = English;
        msgLang = "English";
    break;
    default:
        lang = Spanish;
        msgLang = "Idioma por defecto (no se ha podido determinar el idioma de su navegador o no tenemos dicha traducción): Español";
    break;
}

console.log("Choosen Language: "+msgLang);

export default lang;