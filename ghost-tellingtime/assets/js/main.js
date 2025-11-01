/**
 * Telling Time Ghost Theme
 * Main JavaScript
 */

(function() {
    'use strict';

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.toggle-menu');
    const menuSidebar = document.getElementById('menu-sidebar');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (menuToggle && menuSidebar) {
        menuToggle.addEventListener('click', function() {
            menuSidebar.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = menuSidebar.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Search Toggle
    const searchToggles = document.querySelectorAll('.toggle-search');
    const searchSidebar = document.getElementById('search-sidebar');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');

    searchToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            searchSidebar.classList.toggle('active');
            searchOverlay.classList.toggle('active');
            document.body.style.overflow = searchSidebar.classList.contains('active') ? 'hidden' : '';

            // Focus on search input
            if (searchSidebar.classList.contains('active')) {
                const searchInput = searchSidebar.querySelector('input[type="search"]');
                if (searchInput) {
                    setTimeout(function() {
                        searchInput.focus();
                    }, 300);
                }
            }
        });
    });

    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchSidebar.classList.remove('active');
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close sidebars when clicking overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            menuSidebar.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', function() {
            searchSidebar.classList.remove('active');
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.goto-top');

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Responsive Navigation
    function handleResize() {
        if (window.innerWidth >= 768) {
            // Close mobile menu on resize to desktop
            if (menuSidebar) {
                menuSidebar.classList.remove('active');
            }
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
            }
            if (searchSidebar) {
                searchSidebar.classList.remove('active');
            }
            if (searchOverlay) {
                searchOverlay.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }

    window.addEventListener('resize', handleResize);

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // Escape key closes sidebars
        if (e.key === 'Escape') {
            if (menuSidebar && menuSidebar.classList.contains('active')) {
                menuSidebar.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (searchSidebar && searchSidebar.classList.contains('active')) {
                searchSidebar.classList.remove('active');
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Add loading class to images for fade-in effect
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
        }
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

})();
