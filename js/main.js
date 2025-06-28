'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const bodyContentContainer = document.getElementById('mainContent');

  const sidebarMenuButtons = document.querySelectorAll('.sidebar-menu');
  const sidebarMenuIcons = document.querySelectorAll('.circle');
  const sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item');

  const toggleNavButton = document.getElementById('nav-toggle');
  const sideNav = document.getElementById('default-sidebar');
  const navWidth = 'w-60'; // Define the open width for the sidebar
  const navWidthMobile = 'max-md:w-40'

  const settingsToggleBtn = document.getElementById('settings-toggle');
  const settingsNav = document.getElementById('settings-nav');
  const settingsNavWidth = 'w-50'; // Define the open width for the sidebar
  const settingsNavWidthMobile = 'max-md:w-35';
  const settingsOverlay = document.getElementById('settingsOverlay');

  var flipperStatus = 0;
  var btnDetailsToggleIcon = document.getElementById('btns-details-toggle');
  var btnIconsToggleIcon = document.getElementById('btns-icons-toggle');
  var btnBackTypeToggle = document.getElementById('btns-back-type-toggle');


  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  var themeToggleBtn = document.getElementById('theme-toggle');

  const htmlElement = document.documentElement;

  initTheme();

  btnBackTypeToggle.addEventListener('click', function () {
    if (flipperStatus === 0) {
      flipperStatus = 1;
    } else {
      flipperStatus = 0;
    }
    sidebarMenuItems.forEach(item => {
      if (flipperStatus === 0) {
        btnDetailsToggleIcon.classList.add('hidden');
        btnIconsToggleIcon.classList.remove('hidden');
        item.children[3].classList.remove('hide-flip-card');
        item.children[2].classList.add('hide-flip-card');
      } else {
        btnDetailsToggleIcon.classList.remove('hidden');
        btnIconsToggleIcon.classList.add('hidden');
        item.children[3].classList.add('hide-flip-card');
        item.children[2].classList.remove('hide-flip-card');
      }
    });
  });

  sidebarMenuItems.forEach(item => {
    if (flipperStatus === 0) {
      item.children[3].classList.remove('hide-flip-card');
    } else {
      item.children[2].classList.remove('hide-flip-card');
    }
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

  settingsToggleBtn.addEventListener('click', function () {
    if (settingsNav.classList.contains('w-0')) {
      // If closed, open it: remove 'w-0' and add the open width class
      settingsNav.classList.remove('w-0');
      settingsNav.classList.add(settingsNavWidth);
      settingsNav.classList.add(settingsNavWidthMobile);
      settingsToggleBtn.classList.add('ml-55');
      settingsOverlay.classList.remove('hidden');
    } else {
      // If open, close it: remove the open width class and add 'w-0'
      settingsNav.classList.remove(settingsNavWidth);
      settingsNav.classList.remove(settingsNavWidthMobile);
      settingsNav.classList.add('w-0');
      settingsToggleBtn.classList.remove('ml-55');
    }
    setTimeout(() => {
      settingsOverlay.classList.toggle('opacity-0');
      settingsOverlay.classList.toggle('opacity-30');
    }, 50);
  });

  settingsOverlay.addEventListener('click', function () {
    settingsNav.classList.remove(settingsNavWidth);
    settingsNav.classList.remove(settingsNavWidthMobile);
    settingsNav.classList.add('w-0');
    settingsToggleBtn.classList.remove('ml-55');
    settingsOverlay.classList.add('hidden');
    setTimeout(() => {
      settingsOverlay.classList.toggle('opacity-30');
      settingsOverlay.classList.toggle('opacity-0');
    }, 50);
  });


  if (htmlElement.dataset.theme === 'dark') {
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }

  if (flipperStatus === 0) {
    btnDetailsToggleIcon.classList.remove('hidden');
  } else {
    btnIconsToggleIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', function () {
    // Toggle the theme
    if (htmlElement.dataset.theme === 'dark') {
      htmlElement.dataset.theme = 'light';
      localStorage.setItem('theme', 'light'); // Save the theme preference
      themeToggleDarkIcon.classList.remove('hidden');
      themeToggleLightIcon.classList.add('hidden');
    } else {
      htmlElement.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark'); // Save the theme preference
      themeToggleDarkIcon.classList.add('hidden');
      themeToggleLightIcon.classList.remove('hidden');
    }
  });

  function initTheme() {
    var selectedTheme = localStorage.getItem('theme') || 'light';
    // Initialize the theme based on the data attribute
    if (selectedTheme === 'dark') {
      htmlElement.dataset.theme = 'dark';
    } else {
      htmlElement.dataset.theme = 'light';
    }
  }

  // Initialize the carousel by duplicating items


  // const loadContent = async (contentFile, scriptFile = null) => {
  //   try {
  //     const response = await fetch(contentFile);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const content = await response.text();
  //     bodyContentContainer.innerHTML = content;

  //     // Load JavaScript file if provided
  //     if (scriptFile) {
  //       // Remove any previously loaded scripts to avoid conflicts
  //       const existingScript = document.getElementById('dynamic-script');
  //       if (existingScript) {
  //         existingScript.remove();
  //       }

  //       const script = document.createElement('script');
  //       script.src = scriptFile;
  //       script.type = 'module'; // Or 'text/javascript' if not using modules
  //       script.id = 'dynamic-script'; // Give it an ID to easily remove later
  //       script.onload = () => {
  //         console.log(`Script ${scriptFile} loaded successfully.`);
  //       };
  //       script.onerror = (e) => {
  //         console.error(`Error loading script ${scriptFile}:`, e);
  //       };
  //       document.body.appendChild(script); // Append to body or head
  //     }

  //   } catch (error) {
  //     console.error("Failed to load content:", error);
  //     bodyContentContainer.innerHTML = `<p style="color: red;">Error loading content. Please try again.</p>`;
  //   }
  // };
  sidebarMenuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const contentFile = event.target.dataset.contentFile;
      const scriptFile = event.target.dataset.scriptFile;
      if (contentFile) {
        loadContent(contentFile, scriptFile);
      }
    });
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
