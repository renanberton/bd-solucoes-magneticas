// produtos-script.js - Filtragem de produtos por categoria

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const productItems = document.querySelectorAll('.produto-item');
    
    // Função para filtrar produtos
    function filtrarProdutos(categoria) {
        productItems.forEach(item => {
            const itemCategoria = item.getAttribute('data-category');
            
            if (categoria === 'todos' || itemCategoria === categoria) {
                // Mostrar produto
                item.style.display = 'block';
                
                // Adicionar animação de fade in
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                // Esconder produto com animação
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
        
        // Atualizar contador (opcional)
        atualizarContadorProdutos(categoria);
    }
    
    // Função para atualizar contador de produtos (opcional)
    function atualizarContadorProdutos(categoria) {
        const produtosVisiveis = categoria === 'todos' 
            ? productItems.length 
            : document.querySelectorAll(`.produto-item[data-category="${categoria}"]`).length;
        
        // Você pode adicionar um contador na página se quiser
        const contadorElement = document.querySelector('.contador-produtos');
        if (!contadorElement) {
            // Criar contador se não existir
            const filtrosContainer = document.querySelector('.filtros-container');
            if (filtrosContainer) {
                const novoContador = document.createElement('div');
                novoContador.className = 'contador-produtos';
                filtrosContainer.appendChild(novoContador);
            }
        }
        
        const contador = document.querySelector('.contador-produtos');
        if (contador) {
            contador.textContent = `${produtosVisiveis} produto${produtosVisiveis !== 1 ? 's' : ''} encontrado${produtosVisiveis !== 1 ? 's' : ''}`;
        }
    }
    
    // Adicionar eventos aos botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Obter categoria do filtro
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar produtos
            filtrarProdutos(filterValue);
            
            // Adicionar histórico de navegação (opcional)
            history.pushState({filter: filterValue}, '', `?categoria=${filterValue}`);
        });
    });
    
    // Verificar se há filtro na URL ao carregar a página
    function verificarFiltroURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const categoriaURL = urlParams.get('categoria');
        
        if (categoriaURL) {
            // Encontrar e ativar o botão correspondente
            const botaoCorrespondente = Array.from(filterButtons).find(
                btn => btn.getAttribute('data-filter') === categoriaURL
            );
            
            if (botaoCorrespondente) {
                // Remover active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adicionar active ao botão correspondente
                botaoCorrespondente.classList.add('active');
                
                // Aplicar filtro
                filtrarProdutos(categoriaURL);
            }
        }
    }
    
    // Verificar filtro da URL ao carregar
    verificarFiltroURL();
    
    // Lidar com botão voltar/avançar do navegador
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.filter) {
            // Remover active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ativar botão correspondente
            const botaoCorrespondente = Array.from(filterButtons).find(
                btn => btn.getAttribute('data-filter') === event.state.filter
            );
            
            if (botaoCorrespondente) {
                botaoCorrespondente.classList.add('active');
            }
            
            // Aplicar filtro
            filtrarProdutos(event.state.filter);
        }
    });
    
    // Adicionar estilos CSS dinamicamente para animações
    if (!document.querySelector('#produtos-animacoes')) {
        const style = document.createElement('style');
        style.id = 'produtos-animacoes';
        style.textContent = `
            .produto-item {
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            .contador-produtos {
                margin-top: 10px;
                font-size: 0.9rem;
                color: var(--gray);
                font-weight: 500;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Inicializar contador
    atualizarContadorProdutos('todos');
});