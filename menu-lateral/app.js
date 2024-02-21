const sideMenuOptions = document.querySelectorAll('.side-menu-option .option');
const activeSideMenuOptions = document.querySelectorAll('.side-menu-option:has(.active).has-submenu');

activeSideMenuOptions.forEach(activeMenuOption => {
    activeMenuOption.classList.add('active');
});

sideMenuOptions.forEach(sideMenuOption => {
    sideMenuOption.addEventListener('click', function(e) {
        e.stopPropagation();

        const parentSideMenuOption = this.parentElement;

        parentSideMenuOption.classList.toggle('active');

        if(!parentSideMenuOption.classList.contains('active')) {
            parentSideMenuOption.querySelectorAll('.active').forEach(active => {
                active.classList.remove('active');
            });
        }
    });
});