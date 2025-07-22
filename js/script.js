// Champika Exporters Website JavaScript
// Complete JavaScript functionality for all sections

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavigation();
    initBannerSlider();
    initScrollAnimations();
    initSmoothScrolling();
    initFormHandling();
    initScrollToTop();
    initJobApplications();
    initLoadingAnimations();
});

// =============================================
// HEADER/NAVIGATION FUNCTIONALITY
// =============================================

function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar-custom');
    const registerBtn = document.querySelector('.register-btn');
    const mobileRegisterBtn = document.querySelector('.mobile-register-btn');
    
    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.classList.add('active');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
    
    // Navbar Scroll Effect
    if (navbar) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Register Button Click Handler
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            handleRegistration();
        });
    }
    
    if (mobileRegisterBtn) {
        mobileRegisterBtn.addEventListener('click', function() {
            // Close mobile menu first
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.classList.remove('active');
            handleRegistration();
        });
    }
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Registration Handler
function handleRegistration() {
    const modal = createRegistrationModal();
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function createRegistrationModal() {
    const modal = document.createElement('div');
    modal.className = 'registration-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 opacity-0 transition-opacity duration-300';
    
    // I have added data-modal-target attributes to the buttons
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 transform scale-95 transition-transform duration-300">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800 flex items-center">
                    <i class="fas fa-user-plus text-blue-600 mr-2"></i>
                    Register with Us
                </h3>
                <button class="close-modal text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <p class="text-gray-600 mb-4">Join our platform to access exclusive job opportunities and stay updated with the latest openings.</p>
            
            <div class="space-y-3">
                <button data-modal-target="#modal-seeker-form" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                    <i class="fas fa-user mr-2"></i>
                    Job Seeker Registration
                </button>
                <button data-modal-target="#modal-employer-form" class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 flex items-center justify-center">
                    <i class="fas fa-building mr-2"></i>
                    Employer Registration
                </button>
            </div>
            
            <div class="mt-4 text-center">
                <p class="text-sm text-gray-500">
                    Already have an account? 
                    <a href="#" class="text-blue-600 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    `;
    
    // --- NEW: Add event listeners to the registration buttons ---
    const seekerBtn = modal.querySelector('[data-modal-target="#modal-seeker-form"]');
    const employerBtn = modal.querySelector('[data-modal-target="#modal-employer-form"]');

    seekerBtn.addEventListener('click', () => {
        closeRegistrationModal(modal); // Close this choice modal
        // openModalById('#modal-seeker-form'); // Open the seeker form modal
        jobsekerreg();
    });

    employerBtn.addEventListener('click', () => {
        closeRegistrationModal(modal); // Close this choice modal
        // openModalById('#modal-employer-form'); // Open the employer form modal
        employeereg();
    });


    // Event listeners for closing this modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => closeRegistrationModal(modal));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeRegistrationModal(modal);
        }
    });
    
    return modal;
}


function jobsekerreg() {
    // alert("Hi");
     const modal = document.getElementById('modal-seeker-form');
    
    // modal එක null නොවන බවට ಖಚಿತ කරගන්න
    if (modal) {
        // 'hidden' class එක ඉවත් කර modal එක පෙන්වන්න
        modal.classList.remove('hidden');
    }
}
function employeereg() {
         const modal = document.getElementById('modal-employer-form');
    
    // modal එක null නොවන බවට ಖಚಿತ කරගන්න
    if (modal) {
        // 'hidden' class එක ඉවත් කර modal එක පෙන්වන්න
        modal.classList.remove('hidden');
    }
    // alert("Hui");
    // body...
}


// Close Registration Modal
function closeRegistrationModal(modal) {
    modal.classList.remove('show');
    modal.classList.add('opacity-0');
    
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 300);
}

// Banner Section JavaScript
function initBannerSlider() {
    const bannerSection = document.querySelector('.banner-section');
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    const progressBar = document.querySelector('.banner-progress-bar');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (!bannerSection || slides.length === 0) return;
    
    let currentSlide = 0;
    let isTransitioning = false;
    let autoSlideInterval;
    let progressInterval;
    const slideDuration = 6000; // 6 seconds per slide
    const progressUpdateInterval = 60; // Update progress every 60ms
    
    // Initialize banner
    function initBanner() {
        bannerSection.classList.add('loaded');
        showSlide(0);
        startAutoSlide();
        initBannerEvents();
    }
    
    // Show specific slide
    function showSlide(index) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentSlide = index;
        
        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                setTimeout(() => {
                    slide.classList.add('active');
                }, 50);
            }
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
        
        // Reset progress bar
        resetProgressBar();
        
        // Allow next transition after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 1500);
        
        // Trigger text animations
        triggerTextAnimations(index);
    }
    
    // Trigger text animations for active slide
    // function triggerTextAnimations(slideIndex) {
    //     const activeSlide = slides[slideIndex];
    //     const textElements = activeSlide.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in-up');
        
    //     textElements.forEach((element, index) => {
    //         element.style.animation = 'none';
    //         element.offsetHeight; // Trigger reflow
    //         element.style.animation = null;
    //     });
    // }
    
    // Next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // Previous slide
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // Start auto slide
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, slideDuration);
        startProgressBar();
    }
    
    // Stop auto slide
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        stopProgressBar();
    }
    
    // Start progress bar
    function startProgressBar() {
        if (!progressBar) return;
        
        stopProgressBar();
        progressBar.style.width = '0%';
        
        let progress = 0;
        const increment = 100 / (slideDuration / progressUpdateInterval);
        
        progressInterval = setInterval(() => {
            progress += increment;
            progressBar.style.width = Math.min(progress, 100) + '%';
            
            if (progress >= 100) {
                stopProgressBar();
            }
        }, progressUpdateInterval);
    }
    
    // Stop progress bar
    function stopProgressBar() {
        if (progressInterval) {
            clearInterval(progressInterval);
        }
    }
    
    // Reset progress bar
    function resetProgressBar() {
        stopProgressBar();
        if (progressBar) {
            progressBar.style.width = '0%';
        }
        setTimeout(startProgressBar, 100);
    }
    
    // Initialize banner events
    function initBannerEvents() {
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (currentSlide !== index) {
                    showSlide(index);
                    startAutoSlide(); // Restart auto slide
                }
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                startAutoSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                startAutoSlide();
            }
        });
        
        // Pause on hover
        bannerSection.addEventListener('mouseenter', stopAutoSlide);
        bannerSection.addEventListener('mouseleave', startAutoSlide);
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        bannerSection.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        bannerSection.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left - next slide
                } else {
                    prevSlide(); // Swipe right - previous slide
                }
                startAutoSlide();
            }
        }
        
        // Scroll indicator click
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
        
        // Banner button events
        const exploreBtn = bannerSection.querySelector('.banner-btn-primary');
        const watchBtn = bannerSection.querySelector('.banner-btn-secondary');
        
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                const jobsSection = document.querySelector('#jobs');
                if (jobsSection) {
                    jobsSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
        
        if (watchBtn) {
            watchBtn.addEventListener('click', () => {
                // Handle watch story action (could open modal, video, etc.)
                showMessage('Watch Our Story feature coming soon!', 'info');
            });
        }
    }
    
    // Visibility change handling (pause when tab is not active)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    });
    
    // Initialize everything
    initBanner();
    
    // Preload images for better performance
    preloadBannerImages();
}

// Preload banner images
function preloadBannerImages() {
    const imageUrls = ['images/2.png', 'images/3.png'];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.onload = () => {
            console.log(`Banner image loaded: ${url}`);
        };
        img.onerror = () => {
            console.warn(`Failed to load banner image: ${url}`);
        };
        img.src = url;
    });
}

// Enhanced banner section initialization
function initEnhancedBanner() {
    // Add parallax effect to banner images
    const bannerImages = document.querySelectorAll('.banner-image img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        bannerImages.forEach(img => {
            const yPos = -(scrolled * parallaxSpeed);
            img.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.05)`;
        });
    });
    
    // Add animation to floating elements
    const floatingElements = document.querySelectorAll('.floating-icon');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            element.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 1000));
    });
}

// Initialize enhanced banner on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initEnhancedBanner, 1000);
});

// =============================================
// SCROLL ANIMATIONS
// =============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.fade-in-up, .slide-in');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in, .hover-lift');
    animatedElements.forEach(el => observer.observe(el));
}

function initLoadingAnimations() {
    // Add loading animation to page
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    
    elementsToAnimate.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

// =============================================
// SMOOTH SCROLLING
// =============================================

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// About Section JavaScript
function initAboutSection() {
    initCounterAnimation();
    initImageLazyLoading();
    initAboutInteractions();
    initScrollTriggers();
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with commas for large numbers
        const formattedNumber = Math.floor(current).toLocaleString();
        if (formattedNumber==46) {
            element.textContent = formattedNumber;
        }else{
            element.textContent = formattedNumber+"+";
        }
    }, 16);

    // Add completion animation
    setTimeout(() => {
        element.classList.add('animate-pulse');
        setTimeout(() => {
            element.classList.remove('animate-pulse');
        }, 600);
    }, duration);
}

// Image Lazy Loading with Animation
function initImageLazyLoading() {
    const images = document.querySelectorAll('.about-image');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        img.setAttribute('data-loaded', 'false');
        imageObserver.observe(img);
    });
}

function loadImage(img) {
    const src = img.getAttribute('src');
    const newImg = new Image();
    
    newImg.onload = () => {
        img.setAttribute('data-loaded', 'true');
        img.style.opacity = '0';
        img.src = src;
        
        // Fade in animation
        setTimeout(() => {
            img.style.transition = 'opacity 0.5s ease';
            img.style.opacity = '1';
        }, 50);
    };
    
    newImg.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        img.setAttribute('data-loaded', 'error');
        // Set placeholder or default image
        img.style.background = 'linear-gradient(135deg, #e2e8f0, #cbd5e1)';
    };
    
    newImg.src = src;
}

// About Section Interactions
function initAboutInteractions() {
    const aboutCards = document.querySelectorAll('.about-card');
    const ctaButtons = document.querySelectorAll('.cta-btn-primary, .cta-btn-secondary');

    // About card hover effects
    aboutCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '10';
            
            // Add subtle animation to other cards
            aboutCards.forEach((otherCard, otherIndex) => {
                if (otherIndex !== index) {
                    otherCard.style.transform = 'scale(0.95)';
                    otherCard.style.opacity = '0.8';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '1';
            
            // Reset other cards
            aboutCards.forEach(otherCard => {
                otherCard.style.transform = 'scale(1)';
                otherCard.style.opacity = '1';
            });
        });

        // Add click animation
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });

    // CTA button interactions
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleCTAClick(e.target);
        });

        // Add ripple effect on click
        button.addEventListener('click', (e) => {
            createRippleEffect(e, button);
        });
    });
}

function handleCTAClick(button) {
    const buttonText = button.textContent.trim();
    
    if (buttonText.includes('Join as Candidate')) {
        // Scroll to contact form or open registration modal
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        showMessage('Ready to join us? Please fill out the contact form below!', 'info');
    } else if (buttonText.includes('Partner with Us')) {
        // Handle employer partnership
        handleRegistration(); // Reuse registration modal
    }
}

function createRippleEffect(event, button) {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Scroll Triggers for Enhanced Animations
function initScrollTriggers() {
    const aboutSection = document.querySelector('.about-section');
    const decorationElements = document.querySelectorAll('.decoration-circle, .decoration-dots');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Check if section is in view
        if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
            const progress = (scrolled + windowHeight - sectionTop) / (sectionHeight + windowHeight);
            
            // Animate decoration elements based on scroll
            decorationElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.2);
                const yOffset = (progress - 0.5) * 100 * speed;
                element.style.transform = `translateY(${yOffset}px)`;
            });
        }
    });
}

// Enhanced About Section Animations
function initEnhancedAboutAnimations() {
    // Animation function removed - no animations applied
}

// Dynamic CSS styles removed

// Parallax effect for background elements
function initAboutParallax() {
   const decorationElements = document.querySelectorAll('.decoration-circle');
   
   window.addEventListener('scroll', () => {
       const scrolled = window.pageYOffset;
       const rate = scrolled * -0.3;
       
       decorationElements.forEach((element, index) => {
           const speed = 0.5 + (index * 0.2);
           element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
       });
   });
}

// Image preloading for better performance
function preloadAboutImages() {
   const imageUrls = ['images/about_1.png', 'images/about_2.png', 'images/about_3.png'];
   
   imageUrls.forEach(url => {
       const img = new Image();
       img.onload = () => {
           console.log(`About image preloaded: ${url}`);
       };
       img.onerror = () => {
           console.warn(`Failed to preload about image: ${url}`);
       };
       img.src = url;
   });
}

// Intersection Observer for stats animation
function initStatsAnimation() {
   const statsContainer = document.querySelector('.stats-container');
   
   const statsObserver = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('animate-stats');
               // Trigger counter animations
               const counters = entry.target.querySelectorAll('.counter');
               counters.forEach((counter, index) => {
                   setTimeout(() => {
                       animateCounter(counter);
                   }, index * 200);
               });
               statsObserver.unobserve(entry.target);
           }
       });
   }, { threshold: 0.3 });

   if (statsContainer) {
       statsObserver.observe(statsContainer);
   }
}

// Character-level text animations removed
function initTextAnimations() {
   // Text animation function disabled
}

// Mouse movement parallax effect
function initMouseParallax() {
   const aboutSection = document.querySelector('.about-section');
   const parallaxElements = document.querySelectorAll('.about-icon, .decoration-circle');
   
   aboutSection.addEventListener('mousemove', (e) => {
       const rect = aboutSection.getBoundingClientRect();
       const x = e.clientX - rect.left;
       const y = e.clientY - rect.top;
       const centerX = rect.width / 2;
       const centerY = rect.height / 2;
       
       const moveX = (x - centerX) / centerX;
       const moveY = (y - centerY) / centerY;
       
       parallaxElements.forEach((element, index) => {
           const speed = 0.02 + (index * 0.01);
           const translateX = moveX * 20 * speed;
           const translateY = moveY * 20 * speed;
           
           element.style.transform += ` translate(${translateX}px, ${translateY}px)`;
       });
   });
   
   aboutSection.addEventListener('mouseleave', () => {
       parallaxElements.forEach(element => {
           element.style.transform = element.style.transform.replace(/translate\([^)]*\)/g, '');
       });
   });
}

// Performance optimization
function optimizeAboutSection() {
   // Use requestAnimationFrame for smooth animations
   let ticking = false;
   
   function updateAnimations() {
       // Batch DOM updates here
       ticking = false;
   }
   
   function requestTick() {
       if (!ticking) {
           requestAnimationFrame(updateAnimations);
           ticking = true;
       }
   }
   
   // Debounce scroll events
   let scrollTimeout;
   window.addEventListener('scroll', () => {
       if (scrollTimeout) {
           clearTimeout(scrollTimeout);
       }
       scrollTimeout = setTimeout(requestTick, 10);
   });
}

// Initialize all about section functionality
function initCompleteAboutSection() {
   // Core functionality only
   initAboutSection();
   initStatsAnimation();
   
   // All enhanced animations disabled
   // initEnhancedAboutAnimations(); - disabled
   // initTextAnimations(); - disabled
   // initAboutParallax(); - disabled
   // initMouseParallax(); - disabled
   
   // Error handling
   try {
       // Additional initialization code
       console.log('About section initialized successfully (animations disabled)');
   } catch (error) {
       console.error('Error initializing about section:', error);
   }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
   setTimeout(initCompleteAboutSection, 500);
});

// Export functions for external use
window.AboutSection = {
   init: initCompleteAboutSection,
   animateCounter,
   createRippleEffect,
   preloadImages: preloadAboutImages
};






// =============================================
// FORM HANDLING
// =============================================

function initFormHandling() {
    const enquiryForm = document.getElementById('enquiry-form');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
        
        // Real-time validation
        const inputs = enquiryForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    }
}

// Form Submission Handler
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate form
    if (!validateForm(form)) {
        showMessage('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Simulate success
        showMessage('Thank you for your enquiry! We will contact you soon.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // You can add actual form submission logic here
        console.log('Form data:', data);
        
    }, 2000);
}

// Form Validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Field Validation
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        }
    }
    
    // Show/hide error
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

// Show Field Error
function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-red-600 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear Field Error
function clearFieldError(field) {
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// =============================================
// MESSAGE SYSTEM
// =============================================

function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.alert-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `alert-message fixed top-4 right-4 p-4 rounded-lg z-50 max-w-sm transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-600 text-white' : 
        type === 'error' ? 'bg-red-600 text-white' : 
        'bg-blue-600 text-white'
    }`;
    
    messageDiv.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' : 
                type === 'error' ? 'fa-exclamation-circle' : 
                'fa-info-circle'
            } mr-2"></i>
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.transform = 'translateX(100%)';
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }
    }, 5000);
}

// =============================================
// SCROLL TO TOP BUTTON
// =============================================

function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 opacity-0 invisible transform scale-90';
    scrollBtn.id = 'scroll-to-top';
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.remove('opacity-0', 'invisible', 'scale-90');
            scrollBtn.classList.add('opacity-100', 'visible', 'scale-100');
        } else {
            scrollBtn.classList.add('opacity-0', 'invisible', 'scale-90');
            scrollBtn.classList.remove('opacity-100', 'visible', 'scale-100');
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============================================
// JOB APPLICATION SYSTEM
// =============================================

function initJobApplications() {
    // Use event delegation for dynamically added buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.job-apply-btn') || e.target.closest('.job-apply-btn')) {
            e.preventDefault();
            
            const button = e.target.matches('.job-apply-btn') ? e.target : e.target.closest('.job-apply-btn');
            const jobCard = button.closest('.bg-white, .job-card');
            
            if (jobCard) {
                const jobTitle = jobCard.querySelector('h3')?.textContent || 'Position';
                const jobLocation = jobCard.querySelector('.bg-blue-100, .job-location')?.textContent || 'Location';
                
                handleJobApplication(jobTitle, jobLocation);
            }
        }
    });
}

// Job Application Handler
function handleJobApplication(jobTitle, location) {
    const modal = createJobApplicationModal(jobTitle, location);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Create Job Application Modal
function createJobApplicationModal(jobTitle, location) {
    const modal = document.createElement('div');
    modal.className = 'job-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 opacity-0 transition-opacity duration-300';
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 transform scale-95 transition-transform duration-300">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800">Apply for ${jobTitle}</h3>
                <button class="close-modal text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="mb-4">
                <p class="text-gray-600">Position: <strong>${jobTitle}</strong></p>
                <p class="text-gray-600">Location: <strong>${location}</strong></p>
            </div>
            
            <form class="job-application-form">
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input type="text" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2">Email *</label>
                    <input type="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium mb-2">Phone *</label>
                    <input type="tel" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 font-medium mb-2">Experience (years)</label>
                    <select name="experience" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5+">5+ years</option>
                    </select>
                </div>
                
                <div class="flex space-x-3">
                    <button type="submit" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                        Submit Application
                    </button>
                    <button type="button" class="close-modal flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    // Add modal event listeners
    const closeButtons = modal.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => closeModal(modal));
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Handle form submission
    const form = modal.querySelector('.job-application-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleJobApplicationSubmission(form, jobTitle, location, modal);
    });
    
    return modal;
}

// Close Modal
function closeModal(modal) {
    modal.classList.remove('show');
    modal.classList.add('opacity-0');
    
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 300);
}

// Handle Job Application Submission
function handleJobApplicationSubmission(form, jobTitle, location, modal) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.jobTitle = jobTitle;
    data.location = location;
    
    // Validate form
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
    submitBtn.disabled = true;
    
    // Simulate submission
    setTimeout(() => {
        showMessage(`Application for ${jobTitle} submitted successfully! We will contact you soon.`, 'success');
        closeModal(modal);
        
        // You can add actual submission logic here
        console.log('Job application data:', data);
        
    }, 1500);
}

// =============================================
// UTILITY FUNCTIONS
// =============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// =============================================
// MODAL STYLES (Added via JavaScript)
// =============================================

const modalStyles = `
.job-modal.show,
.registration-modal.show {
    opacity: 1;
}

.job-modal.show > div,
.registration-modal.show > div {
    transform: scale(1);
}

.loading {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.field-error {
    animation: fadeInUp 0.3s ease;
}

.alert-message {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// =============================================
// EXPORT FUNCTIONS FOR EXTERNAL USE
// =============================================

window.ChampikaWebsite = {
    showMessage,
    handleJobApplication,
    validateForm,
    handleRegistration,
    initBannerSlider,
    initScrollAnimations
};