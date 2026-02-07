// script.js

// Menu responsivo
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Animação do campo magnético
function animateMagneticField() {
    const fieldLines = document.querySelector('.field-lines');
    if (fieldLines) {
        let angle = 0;
        
        function updateField() {
            angle += 0.5;
            const x = Math.sin(angle * Math.PI / 180) * 5;
            const y = Math.cos(angle * Math.PI / 180) * 5;
            fieldLines.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(updateField);
        }
        
        updateField();
    }
}

// Inicializar animação quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    animateMagneticField();
    
    // Adicionar classe ativa ao menu baseado na URL
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Efeito de rolagem suave para links internos
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

