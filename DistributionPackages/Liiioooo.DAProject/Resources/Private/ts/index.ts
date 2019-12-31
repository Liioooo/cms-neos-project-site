const scrollToTopButton = document.getElementById('scroll-to-top-btn');

window.onscroll = () => {
    if (!scrollToTopButton) return;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
        document.documentElement.scrollTo({
            behavior: "smooth",
            top: 0
        });
    });
}


const languageSelect = document.getElementById('lang-select');
const languageSelectCurrLang = document.getElementById('current-lang');
const languageSelectList = document.getElementById('lang-select-list');

document.addEventListener('click', e => {
    if(!languageSelect.contains(e.target as HTMLElement)) {
        languageSelectList.style.display = 'none';
    }
});
languageSelectCurrLang.addEventListener('click', () => {
    languageSelectList.style.display = 'block';
});
