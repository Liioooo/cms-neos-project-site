var scrollToTopButton=document.getElementById("scroll-to-top-btn");window.onscroll=function(){scrollToTopButton&&(document.body.scrollTop>200||document.documentElement.scrollTop>200?scrollToTopButton.style.display="block":scrollToTopButton.style.display="none")},scrollToTopButton&&scrollToTopButton.addEventListener("click",(function(){document.documentElement.scrollTo({behavior:"smooth",top:0})}));var languageSelect=document.getElementById("lang-select"),languageSelectCurrLang=document.getElementById("current-lang"),languageSelectList=document.getElementById("lang-select-list");document.addEventListener("click",(function(e){languageSelect.contains(e.target)||(languageSelectList.style.display="none")})),languageSelectCurrLang.addEventListener("click",(function(){languageSelectList.style.display="block"}));