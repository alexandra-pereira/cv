/*
* this function is for google translate at the index page
* */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

window.onload = function() {
    googleTranslateElementInit();
};