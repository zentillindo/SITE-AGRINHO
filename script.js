// Menu Mobile (Toggle)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    
    // Estilo básico para o menu mobile quando ativo
    if(navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '20px';
        navLinks.style.textAlign = 'center';
    }
});

// Efeito de Scroll no Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = '#fff';
    }
});

// Fechar menu ao clicar em um link (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});
