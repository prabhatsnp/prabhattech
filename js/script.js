document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation
    const typed = new Typed('.typing-text', {
        strings: ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1500,
        loop: true
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    
    function setActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = [];
    
    // Sample project data (you can replace this with your actual projects)
    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 2,
            title: 'Mobile Banking App',
            category: 'app',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 3,
            title: 'Analytics Dashboard',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 4,
            title: 'Creative Portfolio',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 5,
            title: 'Fitness Tracker App',
            category: 'app',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 6,
            title: 'Brand Identity Design',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 7,
            title: 'Restaurant Website',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 8,
            title: 'Social Media App',
            category: 'app',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 9,
            title: 'UI Kit Design',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        },
        {
            id: 10,
            title: 'Printer Repairing Service',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&h=500&fit=crop',
            demo: '#',
            code: '#'
        }
    ];
    
    // Initialize projects
    function initProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        
        if (projectsGrid) {
            projectsGrid.innerHTML = '';
            
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = `project-item`;
                projectElement.setAttribute('data-category', project.category);
                
                projectElement.innerHTML = `
                    <div class="project-img">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-content">
                        <span class="project-category">${project.category}</span>
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-links">
                            <a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            <a href="${project.code}" target="_blank"><i class="fab fa-github"></i> View Code</a>
                        </div>
                    </div>
                `;
                
                projectsGrid.appendChild(projectElement);
                projectItems.push(projectElement);
            });
        }
    }
    
    // Filter projects
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Initialize projects on page load
    initProjects();
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Here you would typically send the email to your server
                console.log('Newsletter subscription:', email);
                
                // Show success message
                alert('Thank you for subscribing to my newsletter!');
                
                // Reset form
                this.reset();
            }
        });
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check on page load
    animateOnScroll();
});
