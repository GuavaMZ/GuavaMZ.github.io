'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const sidebarMenu = document.querySelectorAll('.sidebar-menu');
  const sidebarMenuIcons = document.querySelectorAll('.circle');
  const sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item');

  const toggleNavButton = document.getElementById('nav-toggle');
  const sideNav = document.getElementById('default-sidebar');
  const mainContent = document.getElementById('mainContent');
  const navWidth = 'w-60'; // Define the open width for the sidebar
  const navWidthMobile = 'max-md:w-40'
  const mainContentMargin = 'ml-60'; // Define the margin for main content

  const flipperStatus = 0;

  sidebarMenuItems.forEach(item => {
    if (flipperStatus === 0) {
      item.children[3].classList.remove('hide-flip-card');
    }
  });

  document.querySelectorAll('.flipper').forEach(flipper => {
    flipper.addEventListener('mouseover', function () {

    });
  });

  toggleNavButton.addEventListener('click', function () {
    if (sideNav.classList.contains('w-0')) {
      // If closed, open it: remove 'w-0' and add the open width class
      sideNav.classList.remove('w-0');
      sideNav.classList.add(navWidth);
      sideNav.classList.add(navWidthMobile);
    } else {
      // If open, close it: remove the open width class and add 'w-0'
      sideNav.classList.remove(navWidth);
      sideNav.classList.remove(navWidthMobile);
      sideNav.classList.add('w-0');
    }
  });

  // sidebarMenu.forEach(item => {
  //   item.addEventListener('click', function () {
  //     sidebarMenu.forEach(item => item.classList.remove('active'));
  //     this.classList.add('active');
  //   });

  //   item.addEventListener('mouseenter', function () {
  //     sidebarMenuIcons.forEach(item2 => item2.classList.remove('hover'));
  //     this.classList.add('-translate-y-2');
  //   });

  //   item.addEventListener('mouseleave', function () {
  //     sidebarMenuIcons.forEach(item2 => item2.classList.remove('hover'));
  //     this.classList.remove('-translate-y-2');
  //   });
  // });
});
