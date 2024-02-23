const sideMenu = document.querySelector('.side-menu');
const sideMenuOptions = document.querySelectorAll('.side-menu-option .option');
const activeSideMenuOptions = document.querySelectorAll('.side-menu-option:has(.active).has-submenu');
const burgerMenu = document.querySelector('.menu');
const sideMenuBody = document.querySelector('.side-menu-body');

sideMenuBody.addEventListener('mouseenter', changeOnSideMenuBodyHover);
sideMenuBody.addEventListener('mouseleave', changeOnSideMenuBodyHover);
burgerMenu.addEventListener('click', () => sideMenu.classList.toggle('active-side-menu')); 

// Agregar la clase active a las opciones que son padres de la opción activa
activeSideMenuOptions.forEach(activeMenuOption => activeMenuOption.classList.add('active'));

sideMenuOptions.forEach(sideMenuOption => {
    sideMenuOption.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const parentSideMenuOption = this.parentElement;
        
        // Remover clase active a los que son single-option
        if(parentSideMenuOption.classList.contains('single-option')) {
            const activeOptions = document.querySelectorAll('.side-menu-option.single-option.active');
            
            activeOptions.forEach(activeOption => activeOption?.classList.remove('active'));
        }
        
        parentSideMenuOption.classList.toggle('active');
        
        // Si el padre no tiene la clase active y los hijos si, remover la clase active de los hijos
        if(!parentSideMenuOption.classList.contains('active')) {
            const activeChildren = parentSideMenuOption.querySelectorAll('.active');

            activeChildren.forEach(activeChild => activeChild.classList.remove('active'));
        }
    });
});

// Funciones
function changeOnSideMenuBodyHover(e) {
    if(sideMenu.classList.contains('active-side-menu')) {
        e.target.classList.toggle('side-menu-hover');
    }
}