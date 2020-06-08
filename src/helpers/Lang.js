/**
 * Created by GennadySX on @2020
 */
import {language} from "../json/language";


const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : "EN"

export const Lang = {
    code: lang,
    full: lang === 'EN' ? "English" : "Spanish",
    get: (val) => language[lang.toLowerCase()][val]
}