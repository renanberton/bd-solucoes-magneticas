// contato-script.js - apenas a parte do accordion

// FAQ Accordion - VERSÃO MELHORADA
const faqPerguntas = document.querySelectorAll('.faq-pergunta');

if (faqPerguntas.length > 0) {
    console.log('FAQ encontrado, inicializando accordion...');
    
    // Adicionar indicador de acessibilidade
    faqPerguntas.forEach(pergunta => {
        pergunta.setAttribute('aria-expanded', 'false');
        pergunta.setAttribute('role', 'button');
        pergunta.setAttribute('tabindex', '0');
        
        // Adicionar suporte para tecla Enter/Space
        pergunta.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros itens
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-pergunta').setAttribute('aria-expanded', 'false');
                }
            });
            
            // Alterna o item atual
            if (!isActive) {
                item.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                
                // Rola suavemente para o item se estiver muito abaixo
                const rect = item.getBoundingClientRect();
                if (rect.bottom > window.innerHeight - 100) {
                    item.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            } else {
                item.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Abrir primeiro item por padrão (opcional)
    // faqPerguntas[0].click();
}