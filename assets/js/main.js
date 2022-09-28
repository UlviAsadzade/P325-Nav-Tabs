
const tabNavigations = Array.from(document.querySelectorAll('.tabs-navigation li'));
const tabContents = Array.from(document.querySelectorAll('.tabs-contents .tab-content'));
const clearActives = () => {
    tabNavigations.forEach(tabNavigation => {
        tabNavigation.classList.remove('active');
    });
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
}
tabNavigations.forEach(tabNavigation => {
    tabNavigation.onclick = function () {
        clearActives();
        const targetId = tabNavigation.getAttribute('data-id') //home
        const targetContent = document.getElementById(targetId);
        tabNavigation.classList.add('active');
        targetContent.classList.add('active');
    }
});

