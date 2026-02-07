// No contato-script.js, adicione no início do DOMContentLoaded:

// Verificar se há parâmetros de produto na URL
const urlParams = new URLSearchParams(window.location.search);
const produtoParam = urlParams.get('produto');
const produtoIdParam = urlParams.get('id');

if (produtoParam && produtoIdParam) {
    // Preencher automaticamente o assunto e mensagem
    const assuntoSelect = document.getElementById('assunto');
    const mensagemTextarea = document.getElementById('mensagem');
    
    if (assuntoSelect) {
        assuntoSelect.value = 'orcamento';
    }
    
    if (mensagemTextarea) {
        mensagemTextarea.value = `Gostaria de solicitar um orçamento para o produto: ${produtoParam} (ID: ${produtoIdParam}).\n\nPor favor, envie informações sobre preço, prazo de entrega e condições de pagamento.\n\nAtenciosamente,\n[Seu Nome]`;
    }
}


// Funcionalidades da página de contato
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const formContato = document.getElementById('formContato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulação de envio
            const enviarBtn = document.querySelector('.btn-enviar');
            const originalText = enviarBtn.innerHTML;
            
            enviarBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            enviarBtn.disabled = true;
            
            // Simula tempo de processamento
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
                enviarBtn.innerHTML = originalText;
                enviarBtn.disabled = false;
            }, 2000);
        });
    }
    
    // FAQ Accordion
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');
    
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const item = this.parentElement;
            
            // Fecha todos os outros itens
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alterna o item atual
            item.classList.toggle('active');
        });
    });
    
    // Máscara de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
});