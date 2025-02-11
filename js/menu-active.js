// menu-active.js

// vanilla js - change class


document.getElementById('menu-button').onclick = function() { 
    this.classList.toggle('active');
    document.getElementsByTagName('header')[0].classList.toggle('active');
    //document.getElementsByClassName('[class*="submenu"]')[0].classList.remove('open');
	document.getElementsByClassName('submenu')[0].classList.remove('open');
    // document.getElementsByClassName('wp-block-navigation-submenu')[0].classList.remove('open');
    document.body.classList.toggle('no_scroll'); // Add 'no_scroll' class to body
	

	// Select all 'ul' elements and remove the 'open' class from each
	const ulElements = document.querySelectorAll('ul');
	ulElements.forEach(function(ul) {
		ul.classList.remove('open');
	});

	

}

// Add 'active' class to menu-item when it is clicked
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(menuItem) {
    const menuLink = menuItem.querySelector('.menu-link');
    if (menuLink) {
        menuLink.addEventListener('click', function() {
            // Remove 'active' class from any element that currently has it
            const activeElement = document.querySelector('.menu-item.active');
            if (activeElement) {
                activeElement.classList.remove('active');
            }
            // Add 'active' class to the parent menu item
            menuItem.classList.add('active');
        });
    }
});
