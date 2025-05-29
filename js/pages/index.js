'use strict';

import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });

document.addEventListener('DOMContentLoaded', function () {
    const sidebarMenu = document.querySelectorAll('.sidebar-menu');
    const sidebarMenuIcons = document.querySelectorAll('.circle');
    const sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item');
    sidebarMenu.forEach(item => {
      item.addEventListener('click', function () {
        sidebarMenu.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });

      item.addEventListener('mouseenter', function () {
        sidebarMenuIcons.forEach(item2 => item2.classList.remove('hover'));
        this.classList.add('-translate-y-2');
      });

      item.addEventListener('mouseleave', function () {
        sidebarMenuIcons.forEach(item2 => item2.classList.remove('hover'));
        this.classList.remove('-translate-y-2');
      });
    });

      sidebarMenuIcons.forEach(icon => {
        icon.removeEventListener('hover', function () {
        });
      });

      sidebarMenuItems.forEach(item => {
        item.removeEventListener('hover', function () {
        });
      });
});

  
    // const elementsToModify = [
      
    //   {
    //     selector: '.sidebar-menu-item',
    //     classToRemove: 'rounded-lg',
    //     classToAdd: ''
    //   },
      
    // ];

    // elementsToModify.forEach(({ selector, classToRemove, classToAdd }) => {
    //   document.querySelectorAll(selector).forEach(element => {
    //     if (classToRemove) {
    //       classToRemove.split(' ').forEach(className => element.classList.remove(className));
    //     }
    //     if (classToAdd) {
    //       classToAdd.split(' ').forEach(className => element.classList.add(className));
    //     }
    //   });
    // });
