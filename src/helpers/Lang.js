/**
 * Created by GennadySX on @2020
 */



const lang = localStorage.getItem('lang')

export const Lang = {
    code: lang,
    full: lang === 'EN' ? "English" : "Spanish",
}