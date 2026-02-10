// Banco de dados de produtos (em um caso real, isso viria de uma API)
const produtos = {
    1: {
        id: 1,
        nome: "Imãs de Neodímio N52",
        categoria: "Imãs Permanentes",
        categoriaSlug: "permanentes",
        descricao: "Imãs de terras raras com altíssima potência magnética. Ideais para aplicações que exigem força magnética máxima em espaços reduzidos.",
        descricaoDetalhada: "Os imãs de Neodímio N52 são os mais fortes imãs permanentes disponíveis comercialmente. Fabricados com uma liga de Neodímio, Ferro e Boro (NdFeB), oferecem uma densidade de energia magnética excepcionalmente alta.",
        preco: 45.90,
        unidade: "unidade",
        desconto: 39.90,
        badge: "Mais Vendido",
        estoque: "em-estoque",
        avaliacao: 4.7,
        avaliacoesCount: 128,
        icone: "fas fa-magnet",
        especificacoes: {
            "Material": "NdFeB (Neodímio)",
            "Grau": "N52",
            "Força de Campo": "14.800 Gauss",
            "Temperatura Máx.": "80°C",
            "Revestimento": "Níquel-Cobre-Níquel (Ni-Cu-Ni)",
            "Dimensões": "20mm x 10mm x 5mm"
        },
        especificacoesTecnicas: {
            "Material Magnético": "NdFeB (Neodímio-Ferro-Boro)",
            "Grau": "N52 (Máxima energia disponível)",
            "Remanência (Br)": "14.800 Gauss (±3%)",
            "Coercitividade (Hcb)": ">12.000 Oersted",
            "Temperatura Máxima de Trabalho": "80°C (176°F)",
            "Temperatura Curie": "310°C (590°F)",
            "Revestimento": "Níquel-Cobre-Níquel (15-20μm)",
            "Dimensões": "20mm (L) × 10mm (A) × 5mm (E) (±0.1mm)",
            "Peso Aproximado": "7.8 gramas",
            "Força de Tração": "~6.5 kg (em superfície de aço lisa)"
        },
        aplicacoes: [
            {
                icone: "fas fa-industry",
                titulo: "Indústria Automotiva",
                descricao: "Sensores, motores de partida sem escova, fixação de componentes"
            },
            {
                icone: "fas fa-headphones",
                titulo: "Eletrônicos",
                descricao: "Alto-falantes, fones de ouvido, fechamento de capas"
            },
            {
                icone: "fas fa-robot",
                titulo: "Robótica",
                descricao: "Acoplamentos magnéticos, sensores de posição"
            },
            {
                icone: "fas fa-toolbox",
                titulo: "Ferramentas",
                descricao: "Fixadores magnéticos, organização de ferramentas"
            }
        ],
        seguranca: [
            {
                icone: "fas fa-exclamation-triangle",
                titulo: "Precauções no Manuseio",
                descricao: "Estes imãs são extremamente fortes. Mantenha-os longe de crianças e pessoas com marca-passo. Use luvas ao manusear para evitar beliscões."
            },
            {
                icone: "fas fa-ban",
                titulo: "Restrições",
                descricao: "Não exponha a temperaturas acima de 80°C. Não utilize próximo a equipamentos eletrônicos sensíveis, cartões de crédito ou dispositivos médicos implantados."
            },
            {
                icone: "fas fa-box",
                titulo: "Armazenamento",
                descricao: "Armazene em local seco, longe de outros metais. Para evitar que se juntem, mantenha separadores entre os imãs."
            }
        ],
        garantia: "Garantia de 2 anos contra defeitos de fabricação",
        relacionados: [2, 4]
    },
    2: {
        id: 2,
        nome: "Separador Overband Automático",
        categoria: "Separadores Magnéticos",
        categoriaSlug: "separadores",
        descricao: "Separador magnético overband para instalação sobre correias transportadoras. Ideal para separação de materiais ferrosos.",
        descricaoDetalhada: "O Separador Overband Automático é projetado para remover continuamente partículas ferrosas de materiais transportados em correias. Com sistema de autolimpeza e ajuste automático de altura, oferece máxima eficiência na separação magnética.",
        preco: 12500.00,
        unidade: "",
        desconto: null,
        badge: "",
        estoque: "em-estoque",
        avaliacao: 4.5,
        avaliacoesCount: 76,
        icone: "fas fa-filter",
        especificacoes: {
            "Capacidade": "15 ton/h",
            "Alimentação": "220V",
            "Largura da Correia": "600mm",
            "Força do Campo": "8.000 Gauss",
            "Peso": "350 kg",
            "Garantia": "12 meses"
        },
        especificacoesTecnicas: {
            "Tipo": "Overband com autolimpeza",
            "Campo Magnético": "8.000 Gauss (superfície)",
            "Potência": "2.2 kW",
            "Tensão": "220V / 60Hz",
            "Largura Útil": "600 mm",
            "Velocidade da Correia": "Até 3 m/s",
            "Temperatura de Operação": "-10°C a +60°C",
            "Proteção": "IP65",
            "Peso": "350 kg",
            "Dimensões (CxLxA)": "1500 x 800 x 600 mm"
        },
        aplicacoes: [
            {
                icone: "fas fa-recycle",
                titulo: "Reciclagem",
                descricao: "Separação de metais em processos de reciclagem de resíduos"
            },
            {
                icone: "fas fa-seedling",
                titulo: "Agroindústria",
                descricao: "Proteção de equipamentos e separação de impurezas em grãos"
            },
            {
                icone: "fas fa-pills",
                titulo: "Farmacêutica",
                descricao: "Controle de pureza e separação de contaminantes em pós"
            },
            {
                icone: "fas fa-industry",
                titulo: "Siderurgia",
                descricao: "Proteção de britadores e moinhos na indústria siderúrgica"
            }
        ],
        seguranca: [
            {
                icone: "fas fa-plug",
                titulo: "Instalação Elétrica",
                descricao: "Deve ser instalado por profissional qualizado. Desligue a energia antes de qualquer manutenção."
            },
            {
                icone: "fas fa-hard-hat",
                titulo: "Segurança Operacional",
                descricao: "Mantenha áreas de movimentação livres. Use equipamentos de proteção individual durante manutenção."
            },
            {
                icone: "fas fa-temperature-high",
                titulo: "Temperatura",
                descricao: "Não opere acima de 60°C. Em ambientes quentes, verifique regularmente a temperatura do motor."
            }
        ],
        garantia: "Garantia de 12 meses para partes e mão de obra",
        relacionados: [5, 3]
    },
    3: {
        id: 3,
        nome: "Eletroímã de Levantamento",
        categoria: "Eletroímãs",
        categoriaSlug: "eletroimas",
        descricao: "Eletroímã industrial para levantamento de chapas, blocos e sucata ferrosa. Controle preciso de força magnética.",
        descricaoDetalhada: "Eletroímã de levantamento projetado para manipulação segura e eficiente de materiais ferrosos. Com sistema de controle de força magnética ajustável, permite operações precisas em ambientes industriais.",
        preco: 8900.00,
        unidade: "",
        desconto: 8200.00,
        badge: "Promoção",
        estoque: "em-estoque",
        avaliacao: 4.8,
        avaliacoesCount: 54,
        icone: "fas fa-bolt",
        especificacoes: {
            "Capacidade de Carga": "1.500 kg",
            "Potência": "5 kW",
            "Tensão": "380V",
            "Diâmetro": "450 mm",
            "Peso Próprio": "180 kg",
            "Ciclo de Trabalho": "60% ED"
        },
        especificacoesTecnicas: {
            "Tipo": "Eletroímã de levantamento redondo",
            "Capacidade Máxima": "1.500 kg (chapas de aço)",
            "Potência Nominal": "5 kW",
            "Tensão de Operação": "380V / 60Hz",
            "Corrente Nominal": "13.2 A",
            "Diâmetro Externo": "450 mm",
            "Altura Total": "250 mm",
            "Peso": "180 kg",
            "Ciclo de Trabalho": "60% ED (10 min ligado / 6.7 min desligado)",
            "Classe de Isolamento": "F",
            "Grau de Proteção": "IP55"
        },
        aplicacoes: [
            {
                icone: "fas fa-weight-hanging",
                titulo: "Manuseio de Chapas",
                descricao: "Levantamento e movimentação de chapas de aço em linhas de produção"
            },
            {
                icone: "fas fa-recycle",
                titulo: "Sucata Ferrosa",
                descricao: "Manipulação de sucata metálica em centros de reciclagem"
            },
            {
                icone: "fas fa-industry",
                titulo: "Siderurgia",
                descricao: "Movimentação de tarugos e blocos em usinas siderúrgicas"
            },
            {
                icone: "fas fa-warehouse",
                titulo: "Armazenagem",
                descricao: "Empilhamento e organização de materiais ferrosos em depósitos"
            }
        ],
        seguranca: [
            {
                icone: "fas fa-exclamation-triangle",
                titulo: "Carga Suspensa",
                descricao: "Nunca permaneça sob a carga suspensa. Mantenha distância segura durante operações."
            },
            {
                icone: "fas fa-bolt",
                titulo: "Risco Elétrico",
                descricao: "Desenergize completamente antes de qualquer manutenção. Verifique isolamento regularmente."
            },
            {
                icone: "fas fa-temperature-high",
                titulo: "Superaquecimento",
                descricao: "Respeite o ciclo de trabalho especificado para evitar superaquecimento do equipamento."
            }
        ],
        garantia: "Garantia de 18 meses para defeitos de fabricação",
        relacionados: [2, 6]
    },
    4: {
        id: 4,
        nome: "Imãs de Ferrite",
        categoria: "Imãs Permanentes",
        categoriaSlug: "permanentes",
        descricao: "Imãs cerâmicos de baixo custo com excelente resistência à desmagnetização e corrosão. Amplamente utilizados em motores e alto-falantes.",
        descricaoDetalhada: "Imãs de ferrite (cerâmicos) oferecem excelente custo-benefício para aplicações que não exigem força magnética extrema. Com alta resistência à desmagnetização e corrosão, são ideais para uso em ambientes úmidos ou corrosivos.",
        preco: 12.50,
        unidade: "unidade",
        desconto: 10.90,
        badge: "Econômico",
        estoque: "em-estoque",
        avaliacao: 4.3,
        avaliacoesCount: 89,
        icone: "fas fa-dot-circle",
        especificacoes: {
            "Material": "Ferrite (Cerâmico)",
            "Temperatura Máx.": "250°C",
            "Força de Campo": "3.800 Gauss",
            "Resistência": "À corrosão e umidade",
            "Dimensões": "Vários tamanhos",
            "Aplicação": "Motores, alto-falantes"
        },
        especificacoesTecnicas: {
            "Material Magnético": "Ferrite de Bário/Estôncio",
            "Remanência (Br)": "3.800 - 4.200 Gauss",
            "Coercitividade (Hcb)": "2.200 - 2.800 Oersted",
            "Temperatura Máxima de Trabalho": "250°C (482°F)",
            "Temperatura Curie": "450°C (842°F)",
            "Densidade": "4.8 - 5.0 g/cm³",
            "Resistividade Elétrica": "10^4 - 10^6 Ω·cm",
            "Coeficiente de Temperatura": "-0.18 a -0.20 %/°C",
            "Formas Disponíveis": "Blocos, discos, anéis, segmentos",
            "Acabamento": "Sem revestimento ou com zinco/níquel"
        },
        aplicacoes: [
            {
                icone: "fas fa-motorcycle",
                titulo: "Motores",
                descricao: "Motores CC, servomotores, motores de passo"
            },
            {
                icone: "fas fa-volume-up",
                titulo: "Alto-falantes",
                descricao: "Sistemas de áudio, campainhas, buzzers"
            },
            {
                icone: "fas fa-fan",
                titulo: "Ventiladores",
                descricao: "Motores de ventiladores e exaustores"
            },
            {
                icone: "fas fa-door-closed",
                titulo: "Fechaduras",
                descricao: "Fechaduras magnéticas para portas e gabinetes"
            }
        ],
        seguranca: [
            {
                icone: "fas fa-glass",
                titulo: "Fragilidade",
                descricao: "Imãs de ferrite são quebradiços. Evite impactos e não force durante a montagem."
            },
            {
                icone: "fas fa-tint",
                titulo: "Umidade",
                descricao: "Embora resistentes à corrosão, versões não revestidas podem sofrer com umidade prolongada."
            },
            {
                icone: "fas fa-temperature-high",
                titulo: "Temperatura",
                descricao: "Não exponha a choques térmicos bruscos para evitar rachaduras."
            }
        ],
        garantia: "Garantia de 5 anos contra defeitos de fabricação",
        relacionados: [1, 5]
    },
    5: {
        id: 5,
        nome: "Separador de Tambor",
        categoria: "Separadores Magnéticos",
        categoriaSlug: "separadores",
        descricao: "Separador magnético de tambor para processamento a seco ou úmido. Eficiente na remoção de contaminantes ferrosos.",
        descricaoDetalhada: "Separador de tambor magnético para aplicações contínuas em processamento de minerais, areias e outros materiais granulares. Disponível em configurações para operação a seco ou úmido, com diferentes intensidades de campo magnético.",
        preco: 22300.00,
        unidade: "",
        desconto: null,
        badge: "",
        estoque: "sob-encomenda",
        avaliacao: 4.6,
        avaliacoesCount: 42,
        icone: "fas fa-drum",
        especificacoes: {
            "Diâmetro": "600 mm",
            "Comprimento": "1200 mm",
            "Rotação": "45 rpm",
            "Capacidade": "Até 50 ton/h",
            "Tipo": "Tambor magnético permanente",
            "Aplicação": "Seco ou úmido"
        },
        especificacoesTecnicas: {
            "Tipo": "Tambor magnético de ímãs permanentes",
            "Diâmetro do Tambor": "600 mm",
            "Comprimento do Tambor": "1200 mm",
            "Velocidade Rotacional": "20-60 rpm (ajustável)",
            "Capacidade Máxima": "50 ton/h (depende do material)",
            "Campo Magnético na Superfície": "5.000 - 8.000 Gauss",
            "Potência do Motor": "7.5 kW",
            "Tensão": "380V / 60Hz",
            "Peso": "850 kg",
            "Dimensões (CxLxA)": "2500 x 1400 x 1200 mm",
            "Modo de Operação": "Seco ou úmido (configurável)"
        },
        aplicacoes: [
            {
                icone: "fas fa-mountain",
                titulo: "Mineração",
                descricao: "Concentração de minérios ferrosos, purificação de areias"
            },
            {
                icone: "fas fa-industry",
                titulo: "Cerâmica",
                descricao: "Remoção de contaminantes ferrosos em massas cerâmicas"
            },
            {
                icone: "fas fa-vial",
                titulo: "Química",
                descricao: "Purificação de produtos químicos em pó"
            },
            {
                icone: "fas fa-glass-whiskey",
                titulo: "Vidro",
                descricao: "Limpeza de matéria-prima para produção de vidro"
            }
        ],
        seguranca: [
            {
                icone: "fas fa-cogs",
                titulo: "Partes Móveis",
                descricao: "Mantenha distância das partes móveis durante operação. Instale proteções adequadas."
            },
            {
                icone: "fas fa-plug",
                titulo: "Isolamento",
                descricao: "Verifique periodicamente o isolamento elétrico do motor e componentes."
            },
            {
                icone: "fas fa-hard-hat",
                titulo: "Manutenção",
                descricao: "Siga procedimentos de lockout/tagout durante manutenção. Use equipamentos de proteção."
            }
        ],
        garantia: "Garantia de 24 meses para o sistema magnético, 12 meses para componentes mecânicos",
        relacionados: [2, 4]
    },
    6: {
        id: 6,
        nome: "Medidor de Campo Gauss",
        categoria: "Acessórios",
        categoriaSlug: "acessorios",
        descricao: "Medidor portátil de campo magnético com display digital. Precisão de ±2% para medição de fluxo magnético.",
        descricaoDetalhada: "Medidor de campo gauss portátil com sonda transversal para medição precisa de campos magnéticos estáticos e variáveis. Ideal para controle de qualidade, pesquisa e aplicações industriais onde é necessário quantificar a força magnética.",
        preco: 890.00,
        unidade: "",
        desconto: 820.00,
        badge: "Novidade",
        estoque: "em-estoque",
        avaliacao: 4.9,
        avaliacoesCount: 31,
        icone: "fas fa-vial",
        especificacoes: {
            "Faixa de Medição": "0-30k Gauss",
            "Precisão": "±2%",
            "Resolução": "0.1 Gauss",
            "Bateria": "9V (inclusa)",
            "Display": "LCD digital",
            "Conexão": "Sonda removível"
        },
        especificacoesTecnicas: {
            "Faixa de Medição": "0 - 30.000 Gauss (0 - 3 Tesla)",
            "Precisão": "±2% da leitura (faixa principal)",
            "Resolução": "0.1 Gauss (0 - 2.000G), 1 Gauss (2.000 - 30.000G)",
            "Tipo de Campo": "Estático e variável (até 100 Hz)",
            "Sonda": "Transversal, cabo de 1m",
            "Display": "LCD 3.5 dígitos com indicação de polaridade",
            "Bateria": "9V alcalina (vida útil ~100 horas)",
            "Temperatura de Operação": "0°C a 50°C",
            "Dimensões": "160 x 75 x 30 mm",
            "Peso": "250g (com bateria)"
        },
        aplicacoes: [
            {
                icone: "fas fa-clipboard-check",
                titulo: "Controle de Qualidade",
                descricao: "Verificação de força magnética em produtos acabados"
            },
            {
                icone: "fas fa-flask",
                titulo: "Pesquisa",
                descricao: "Medições em laboratórios e desenvolvimento de produtos"
            },
            {
                icone: "fas fa-industry",
                titulo: "Manutenção",
                descricao: "Verificação de campos magnéticos em equipamentos industriais"
            },
            {
                icone: "fas fa-graduation-cap",
                titulo: "Educação",
                descricao: "Demonstrações e experimentos em instituições de ensino"
            }
        ],
        seguranca: [
            {
                icone: "fas fa-exclamation-triangle",
                titulo: "Campo Intenso",
                descricao: "Não exponha o medidor a campos acima de 30k Gauss para evitar danos permanentes."
            },
            {
                icone: "fas fa-temperature-low",
                titulo: "Temperatura",
                descricao: "Não opere fora da faixa de temperatura especificada. Evite exposição direta ao sol."
            },
            {
                icone: "fas fa-battery-full",
                titulo: "Bateria",
                descricao: "Remova a bateria se não for usar por períodos prolongados. Use apenas baterias alcalinas."
            }
        ],
        garantia: "Garantia de 36 meses (incluindo calibração anual)",
        relacionados: [1, 3]
    }
};

// Função para obter parâmetros da URL
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        if (pair.length === 2) {
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
    }
    
    return params;
}

// Função para gerar estrelas de avaliação - CORRIGIDA
function gerarEstrelas(produto) {
    let estrelasHTML = '';
    const nota = produto.avaliacao;
    const avaliacoesCount = produto.avaliacoesCount;
    const estrelaCheia = Math.floor(nota);
    const temMeia = nota % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= estrelaCheia) {
            estrelasHTML += '<i class="fas fa-star"></i>';
        } else if (i === estrelaCheia + 1 && temMeia) {
            estrelasHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            estrelasHTML += '<i class="far fa-star"></i>';
        }
    }
    
    estrelasHTML += `<span class="nota">${nota} (${avaliacoesCount} avaliações)</span>`;
    return estrelasHTML;
}

// Função para gerar especificações
function gerarEspecificacoes(especificacoes) {
    let html = '';
    for (const [chave, valor] of Object.entries(especificacoes)) {
        html += `
            <div class="especificacao-item">
                <span class="especificacao-label">${chave}</span>
                <span class="especificacao-valor">${valor}</span>
            </div>
        `;
    }
    return html;
}

// Função para gerar tabela de especificações técnicas
function gerarTabelaEspecificacoes(especificacoes) {
    let html = '<table class="tabela-especificacoes">';
    for (const [chave, valor] of Object.entries(especificacoes)) {
        html += `
            <tr>
                <td>${chave}</td>
                <td>${valor}</td>
            </tr>
        `;
    }
    html += '</table>';
    return html;
}

// Função para gerar aplicações
function gerarAplicacoes(aplicacoes) {
    let html = '<div class="aplicacoes-lista-detalhe">';
    aplicacoes.forEach(app => {
        html += `
            <div class="aplicacao-item-detalhe">
                <i class="${app.icone}"></i>
                <h4>${app.titulo}</h4>
                <p>${app.descricao}</p>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

// Função para gerar alertas de segurança
function gerarSeguranca(alertas) {
    let html = '<div class="alertas-seguranca">';
    alertas.forEach(alerta => {
        html += `
            <div class="alerta">
                <i class="${alerta.icone}"></i>
                <div>
                    <h4>${alerta.titulo}</h4>
                    <p>${alerta.descricao}</p>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

// Função para gerar miniaturas
function gerarMiniaturas(produto) {
    // Miniaturas padrão baseadas na categoria
    const miniaturasPorCategoria = {
        'permanentes': ['fas fa-magnet', 'fas fa-ruler-combined', 'fas fa-weight', 'fas fa-box-open'],
        'separadores': ['fas fa-filter', 'fas fa-cogs', 'fas fa-industry', 'fas fa-tachometer-alt'],
        'eletroimas': ['fas fa-bolt', 'fas fa-plug', 'fas fa-sliders-h', 'fas fa-hard-hat'],
        'acessorios': ['fas fa-vial', 'fas fa-tachometer-alt', 'fas fa-battery-full', 'fas fa-tools']
    };
    
    let html = '';
    const miniaturas = miniaturasPorCategoria[produto.categoriaSlug] || ['fas fa-magnet', 'fas fa-info-circle', 'fas fa-cogs', 'fas fa-box'];
    
    miniaturas.forEach((icone, index) => {
        const activeClass = index === 0 ? 'active' : '';
        html += `
            <div class="miniatura ${activeClass}" data-icone="${icone}">
                <i class="${icone}"></i>
            </div>
        `;
    });
    
    return html;
}

// Função para gerar produtos relacionados
function gerarProdutosRelacionados(idsRelacionados) {
    let html = '';
    idsRelacionados.forEach(id => {
        const produto = produtos[id];
        if (produto) {
            html += `
                <div class="produto-relacionado">
                    <div class="relacionado-imagem">
                        <i class="${produto.icone}"></i>
                    </div>
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao.substring(0, 80)}...</p>
                    <div class="relacionado-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
                    <a href="produto-detalhado.html?id=${produto.id}&categoria=${produto.categoriaSlug}" class="btn btn-outline">Ver Produto</a>
                </div>
            `;
        }
    });
    return html;
}

// Função para carregar o produto
function carregarProduto(produtoId) {
    const produto = produtos[produtoId];
    
    if (!produto) {
        // Produto não encontrado
        document.getElementById('loading').innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-exclamation-triangle"></i>
                <h2>Produto não encontrado</h2>
                <p>O produto solicitado não está disponível.</p>
                <a href="produtos.html" class="btn btn-primary">Voltar para Produtos</a>
            </div>
        `;
        return;
    }
    
    // Atualizar título da página
    document.title = `${produto.nome} - MagneticTech`;
    
    // Atualizar breadcrumb
    document.getElementById('categoriaAtual').textContent = produto.categoria;
    document.getElementById('produtoNome').textContent = produto.nome;
    
    // Atualizar informações básicas
    document.getElementById('produtoTitulo').textContent = produto.nome;
    document.getElementById('produtoCategoria').textContent = produto.categoria;
    document.getElementById('produtoDescricao').textContent = produto.descricao;
    
    // Badge
    const badgeElement = document.getElementById('produtoBadge');
    if (produto.badge) {
        badgeElement.textContent = produto.badge;
        badgeElement.style.display = 'block';
    } else {
        badgeElement.style.display = 'none';
    }
    
    // Estoque
    const estoqueElement = document.getElementById('produtoEstoque');
    if (produto.estoque === 'em-estoque') {
        estoqueElement.innerHTML = '<i class="fas fa-check-circle"></i> Em estoque';
        estoqueElement.style.color = 'var(--success)';
    } else if (produto.estoque === 'sob-encomenda') {
        estoqueElement.innerHTML = '<i class="fas fa-clock"></i> Sob encomenda';
        estoqueElement.style.color = 'var(--warning)';
    } else {
        estoqueElement.innerHTML = '<i class="fas fa-times-circle"></i> Indisponível';
        estoqueElement.style.color = 'var(--danger)';
    }
    
    // Avaliação - CORRIGIDO
    document.getElementById('produtoAvaliacao').innerHTML = gerarEstrelas(produto);
    
    // Preço
    document.getElementById('produtoPreco').textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    document.getElementById('produtoUnidade').textContent = produto.unidade ? produto.unidade : '';
    
    // Desconto
    const descontoElement = document.getElementById('produtoDesconto');
    if (produto.desconto) {
        descontoElement.textContent = `ou R$ ${produto.desconto.toFixed(2).replace('.', ',')} à vista`;
        descontoElement.style.display = 'block';
    } else {
        descontoElement.style.display = 'none';
    }
    
    // Especificações
    document.getElementById('produtoEspecificacoes').innerHTML = gerarEspecificacoes(produto.especificacoes);
    
    // Garantia
    document.getElementById('produtoGarantia').textContent = produto.garantia;
    
    // Ícone principal
    document.getElementById('produtoIconePrincipal').innerHTML = `<i class="${produto.icone}"></i>`;
    
    // Miniaturas
    document.getElementById('produtoMiniaturas').innerHTML = gerarMiniaturas(produto);
    
    // Conteúdo das abas
    document.getElementById('descricao').innerHTML = `
        <h3>Descrição Completa</h3>
        <p>${produto.descricaoDetalhada}</p>
        
        <h4>Características Principais:</h4>
        <ul>
            ${Object.values(produto.especificacoes).map(esp => `<li>${esp}</li>`).join('')}
        </ul>
        
        <h4>Benefícios:</h4>
        <p>Este produto oferece soluções eficientes para suas necessidades magnéticas, com qualidade garantida e suporte técnico especializado.</p>
    `;
    
    document.getElementById('especificacoes').innerHTML = `
        <h3>Especificações Técnicas Completas</h3>
        ${gerarTabelaEspecificacoes(produto.especificacoesTecnicas)}
    `;
    
    document.getElementById('aplicacoes').innerHTML = `
        <h3>Aplicações Comuns</h3>
        ${gerarAplicacoes(produto.aplicacoes)}
    `;
    
    document.getElementById('seguranca').innerHTML = `
        <h3>Informações de Segurança</h3>
        ${gerarSeguranca(produto.seguranca)}
    `;
    
    // Produtos relacionados
    document.getElementById('produtosRelacionados').innerHTML = gerarProdutosRelacionados(produto.relacionados);
    
    // Mostrar conteúdo e esconder loading
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('produtoConteudo').style.display = 'block';
    }, 500);
}

// Função principal
document.addEventListener('DOMContentLoaded', function() {
    // Obter ID do produto da URL
    const params = getUrlParams();
    const produtoId = params.id;
    
    // Se não houver ID na URL, verificar se estamos na página "Produto em Destaque"
    // e carregar um produto aleatório ou específico
    if (!params.id && window.location.pathname.includes('produto-detalhado.html')) {
        // Carregar produto 1 como exemplo
        carregarProduto(1);
    } else {
        carregarProduto(parseInt(produtoId));
    }
    
    // Configurar eventos para miniaturas
    document.addEventListener('click', function(e) {
        if (e.target.closest('.miniatura')) {
            const miniatura = e.target.closest('.miniatura');
            const icone = miniatura.getAttribute('data-icone');
            
            // Remover active de todas as miniaturas
            document.querySelectorAll('.miniatura').forEach(m => {
                m.classList.remove('active');
            });
            
            // Adicionar active à miniatura clicada
            miniatura.classList.add('active');
            
            // Atualizar ícone principal
            document.getElementById('produtoIconePrincipal').innerHTML = `<i class="${icone}"></i>`;
        }
    });
    
    // Sistema de abas
    const abaLinks = document.querySelectorAll('.aba-link');
    const abaConteudos = document.querySelectorAll('.aba-conteudo');
    
    abaLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetAba = this.getAttribute('data-aba');
            
            // Remove active class from all tabs
            abaLinks.forEach(l => l.classList.remove('active'));
            abaConteudos.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(targetAba).classList.add('active');
        });
    });
    
    // Controle de quantidade
    const diminuirBtn = document.getElementById('diminuir');
    const aumentarBtn = document.getElementById('aumentar');
    const quantidadeInput = document.getElementById('quantidade');
    
    if (diminuirBtn && aumentarBtn && quantidadeInput) {
        diminuirBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantidadeInput.value);
            if (currentValue > 1) {
                quantidadeInput.value = currentValue - 1;
            }
        });
        
        aumentarBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantidadeInput.value);
            if (currentValue < 100) {
                quantidadeInput.value = currentValue + 1;
            }
        });
        
        quantidadeInput.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (isNaN(value) || value < 1) this.value = 1;
            if (value > 100) this.value = 100;
        });
    }
    
    // Botão de compra
    const comprarBtn = document.querySelector('.btn-comprar');
    if (comprarBtn) {
        comprarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const quantidade = document.getElementById('quantidade').value;
            const produtoNome = document.getElementById('produtoTitulo').textContent;
            
            alert(`Adicionado ao carrinho: ${quantidade} unidade(s) do produto "${produtoNome}"`);
        });
    }
    
    // Botão de orçamento
    const orcamentoBtn = document.getElementById('btnOrcamento');
    if (orcamentoBtn) {
        orcamentoBtn.addEventListener('click', function() {
            const produtoNome = document.getElementById('produtoTitulo').textContent;
            const produtoId = params.id || 1;
            
            // Redirecionar para a página de contato com informações do produto
            window.location.href = `contato.html?produto=${encodeURIComponent(produtoNome)}&id=${produtoId}`;
        });
    }
});

