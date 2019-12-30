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
