// ========== DADOS COMPLETOS DOS PLANOS ==========
const allPlansData = {
    'Netflix Premium': [
        { name: 'Netflix Premium', duration: '1 Mês', price: '15,90', desc: 'Com anúncios', features: ['Catálogo completo', 'Com anúncios', 'Perfil pessoal', 'Login na hora'] },
        { name: 'Tela Netflix Premium', duration: '2 Meses', price: '34,90', desc: 'Economia de 10%', features: ['2 meses de acesso', 'Renovação manual', 'Suporte 24/7', 'Entrega automática'] },
        { name: 'Tela Netflix Premium', duration: '3 Meses', price: '49,90', desc: 'Economia de 15%', features: ['3 meses de acesso', 'Melhor custo-benefício', 'Entrega automática', 'Login separado'] }
    ],
    'Netflix 4K': [
        { name: 'Netflix 4K', duration: '1 Mês', price: '29,90', desc: 'Sem anúncios', features: ['4K Ultra HD', 'Sem anúncios', '4 telas simultâneas', 'Catálogo completo'] }
    ],
    'Netflix 4K Anual': [
        { name: 'Tela Netflix 4K', duration: '12 Meses', price: '119,90', desc: 'Pagamento único', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 58%', '4K Ultra HD'] }
    ],
    'Disney+ Premium': [
        { name: 'Tela Disney Premium', duration: '1 Mês', price: '19,90', desc: 'Acesso completo', features: ['4K Ultra HD', 'Conteúdo exclusivo', 'Marvel e Star Wars', '4 telas'] },
        { name: 'Tela Disney Premium', duration: '3 Meses', price: '49,90', desc: 'Economia de 17%', features: ['3 meses de acesso', 'Todos benefícios', 'Renovação fácil', 'Suporte'] },
        { name: 'Tela Disney Premium', duration: '12 Meses', price: '89,90', desc: 'Anual - Melhor oferta', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 33%', '4K Ultra HD'] }
    ],
    'HBO MAX': [
        { name: 'Tela HBO MAX', duration: '1 Mês', price: '19,90', desc: 'Acesso individual', features: ['Séries HBO', 'Filmes Warner', 'Conteúdo Max Original', 'Multiplataforma'] },
        { name: 'Tela HBO MAX', duration: '2 Meses', price: '34,90', desc: 'Economia de 13%', features: ['2 meses de acesso', 'Todos conteúdos', 'Entrega automática', 'Suporte'] },
        { name: 'Tela HBO MAX', duration: '3 Meses', price: '49,90', desc: 'Economia de 17%', features: ['3 meses de acesso', 'Melhor custo-benefício', 'Suporte 24/7', 'Renovação fácil'] },
        { name: 'Tela HBO MAX', duration: '12 Meses', price: '79,90', desc: 'Pagamento único', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 33%', 'Todas vantagens'] }
    ],
    'YouTube Premium': [
        { name: 'YouTube Premium', duration: '1 Mês', price: '18,90', desc: 'Individual', features: ['Sem anúncios', 'YouTube Music', 'Downloads offline', 'Reprodução background'] },
        { name: 'YouTube Premium', duration: '2 Meses', price: '34,90', desc: 'Economia de 8%', features: ['2 meses de acesso', 'Todos benefícios', 'Playlists ilimitadas', 'Suporte'] },
        { name: 'YouTube Premium', duration: '3 Meses', price: '49,90', desc: 'Economia de 12%', features: ['3 meses de acesso', 'Melhor oferta', 'Suporte prioritário', 'Entrega rápida'] },
        { name: 'YouTube Premium', duration: '12 Meses', price: '89,90', desc: 'Anual - Excelente', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 58%', 'Todas vantagens'] }
    ],
    'Prime Video Premium': [
        { name: 'Tela Prime Video Premium', duration: '1 Mês', price: '14,90', desc: 'Acesso completo', features: ['Full HD + 4K', 'Conteúdo exclusivo', '3 telas simultâneas', 'Entrega automática'] },
        { name: 'Tela Prime Video Premium', duration: '3 Meses', price: '39,90', desc: 'Economia de 11%', features: ['3 meses de acesso', 'Todos conteúdos', 'Renovação fácil', 'Suporte'] },
        { name: 'Tela Prime Video Premium', duration: '12 Meses', price: '69,90', desc: 'Pagamento único', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 42%', 'Todas vantagens'] }
    ],
    'Spotify Premium': [
        { name: 'Spotify Premium', duration: '1 Mês', price: '14,90', desc: 'Individual', features: ['Sem anúncios', 'Downloads offline', 'Qualidade alta', 'Playlists ilimitadas'] },
        { name: 'Spotify Premium', duration: '2 Meses', price: '29,90', desc: 'Economia de 7%', features: ['2 meses de acesso', 'Para 2 pessoas', 'Contas separadas', 'Custo-benefício'] },
        { name: 'Spotify Premium', duration: '3 Meses', price: '39,90', desc: 'Economia de 10%', features: ['3 meses de acesso', 'Todos benefícios', 'Playlists ilimitadas', 'Entrega rápida'] },
        { name: 'Spotify Premium', duration: '6 Meses', price: '69,90', desc: 'Super promoção', features: ['6 meses de acesso', 'Promoção especial', 'Brinde exclusivo', 'Suporte 24/7'] }
    ],
    'Game Pass Ultimate': [
        { name: 'Game Pass Ultimate', duration: '1 Mês', price: '69,90', desc: 'Promoção', features: ['Jogos day one', 'EA Play incluso', 'Multiplataforma', 'Cloud gaming'] },
        { name: 'Game Pass Ultimate', duration: '2 Meses', price: '99,90', desc: 'Economia de 29%', features: ['2 meses de acesso', 'Descontos especiais', 'Jogos mensais', 'Suporte'] },
        { name: 'Game Pass Ultimate', duration: '3 Meses', price: '129,90', desc: 'Economia de 38%', features: ['3 meses de acesso', 'Melhor oferta', 'Suporte 24/7', 'Renovação fácil'] },
        { name: 'Game Pass Ultimate', duration: '6 Meses', price: '199,90', desc: 'Super promoção', features: ['6 meses de acesso', 'Pagamento único', 'Economia de 52%', 'Todas vantagens'] },
        { name: 'Game Pass Ultimate', duration: '12 Meses', price: '299,90', desc: 'Anual - Melhor', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 58%', 'Todas vantagens'] }
    ],
    'Canva Pro': [
        { name: 'Canva Pro', duration: '1 Mês', price: '24,90', desc: 'Todos recursos', features: ['100GB armazenamento', 'Imagens premium', 'Time de trabalho', 'Exportação premium'] },
        { name: 'Canva Pro', duration: '2 Meses', price: '34,90', desc: 'Economia de 30%', features: ['2 meses de acesso', 'Todos recursos', 'Suporte prioritário', 'Entrega rápida'] },
        { name: 'Canva Pro', duration: '6 Meses', price: '69,90', desc: 'Super economia', features: ['6 meses de acesso', 'Pagamento único', 'Economia de 53%', 'Todas vantagens'] },
        { name: 'Canva Pro', duration: '12 Meses', price: '99,90', desc: 'Anual - Excelente', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 60%', 'Todas vantagens'] }
    ],
    'Paramount Plus': [
        { name: 'Tela Paramount Plus', duration: '1 Mês', price: '14,90', desc: 'Acesso completo', features: ['Catálogo completo', 'Séries exclusivas', 'Filmes Paramount', 'Multiplataforma'] },
        { name: 'Tela Paramount Plus', duration: '2 Meses', price: '29,90', desc: 'Economia de 25%', features: ['2 meses de acesso', 'Todos conteúdos', 'Entrega automática', 'Suporte'] },
        { name: 'Tela Paramount Plus', duration: '12 Meses', price: '69,90', desc: 'Anual - Melhor', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 52%', 'Todas vantagens'] }
    ],
    'Crunchyroll': [
        { name: 'Tela Crunchyroll', duration: '1 Mês', price: '12,90', desc: 'Mega Fan', features: ['Animes simultâneos', 'Sem anúncios', 'Simulcast', 'Offline viewing'] },
        { name: 'Tela Crunchyroll', duration: '2 Meses', price: '22,90', desc: 'Economia de 11%', features: ['2 meses de acesso', 'Prioridade suporte', 'Todos animes', 'Entrega rápida'] },
        { name: 'Tela Crunchyroll', duration: '12 Meses', price: '69,90', desc: 'Anual - Excelente', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 47%', 'Todas vantagens'] }
    ],
    'Deezer Premium': [
        { name: 'Deezer Premium Individual', duration: '1 Mês', price: '14,90', desc: '73 milhões de músicas', features: ['Sem anúncios', 'Downloads offline', 'Áudio de alta qualidade', 'Playlists'] },
        { name: 'Deezer Premium Duo', duration: '1 Mês', price: '19,90', desc: 'Para 2 pessoas', features: ['2 contas separadas', 'Playlists individuais', 'Custo-benefício', 'Suporte'] },
        { name: 'Deezer Família', duration: '1 Mês', price: '29,90', desc: 'Até 6 pessoas', features: ['6 contas familiares', 'Controle parental', 'Economia familiar', 'Todas vantagens'] },
        { name: 'Deezer Premium', duration: '12 Meses', price: '79,90', desc: 'Anual - Promo', features: ['12 meses de acesso', 'Pagamento único', 'Economia de 47%', 'Todas vantagens'] }
    ],
    'Globoplay': [
        { name: 'Globoplay', duration: '1 Mês', price: '17,90', desc: 'Acesso completo', features: ['Conteúdo Globo', 'Novelas e séries', 'Esportes ao vivo', 'Jornalismo'] },
        { name: 'Globoplay 4K', duration: '12 Meses', price: '79,90', desc: 'Anual - 4K', features: ['12 meses de acesso', '4K Ultra HD', 'Pagamento único', 'Economia de 63%'] }
    ],
    'UFC Fight Pass': [
        { name: 'Tela UFC Fight Pass', duration: '1 Mês', price: '19,90', desc: 'Eventos ao vivo', features: ['Lutas exclusivas', 'Conteúdo original', 'Arquivo completo', 'Multiplataforma'] }
    ],
    'Premiere Play': [
        { name: 'Premiere Play', duration: '1 Mês', price: '29,90', desc: 'Futebol ao vivo', features: ['Jogos do Brasileirão', 'Copa do Brasil', 'Estaduais', 'Transmissão HD'] }
    ],
    'Telecine Play': [
        { name: 'Telecine Play', duration: '1 Mês', price: '22,90', desc: 'Cinema em casa', features: ['Lançamentos em casa', 'Catálogo completo', 'Canais temáticos', 'Multiplataforma'] }
    ],
    'PSN Plus Deluxe': [
        { name: 'PS Plus Deluxe', duration: '1 Mês', price: '49,90', desc: 'Jogos mensais', features: ['Jogos grátis mensais', 'Descontos exclusivos', 'Armazenamento cloud', 'Multiplayer online'] },
        { name: 'PS Plus Deluxe', duration: '2 Meses', price: '69,90', desc: 'Economia de 30%', features: ['2 meses de acesso', 'Catálogo de jogos', 'Suporte', 'Entrega rápida'] },
        { name: 'PS Plus Deluxe', duration: '3 Meses', price: '89,90', desc: 'Economia de 40%', features: ['3 meses de acesso', 'Melhor oferta', 'Suporte prioritário', 'Todas vantagens'] }
    ],
    'Hulu': [
        { name: 'Hulu', duration: '1 Mês', price: '26,76', desc: 'Catálogo completo', features: ['Séries exclusivas', 'Suporte 24/7', 'Entrega automática', 'Multiplataforma'] }
    ],
    'ESPN': [
        { name: 'ESPN', duration: '1 Mês', price: '26,76', desc: 'Esportes ao vivo', features: ['Eventos esportivos', 'Transmissões exclusivas', 'Multiplataforma', 'Replays completos'] }
    ],
    'TNT Sports': [
        { name: 'TNT Sports', duration: '1 Mês', price: '17,96', desc: 'Esportes premium', features: ['Eventos esportivos', 'Transmissões exclusivas', 'Multiplataforma', 'Suporte 24/7'] }
    ],
    'Apple TV+': [
        { name: 'Apple TV+', duration: '1 Mês', price: '11,96', desc: 'Conteúdo Apple', features: ['Conteúdo Apple Original', '4K Dolby Vision', '6 telas simultâneas', 'Família compartilhada'] }
    ],
    'Star+': [
        { name: 'Star+', duration: '1 Mês', price: '16,36', desc: 'Filmes e séries', features: ['Conteúdo exclusivo', 'Full HD', 'Multiplataforma', 'Entrega automática'] }
    ],
    'PlayPlus': [
        { name: 'PlayPlus', duration: '1 Mês', price: '7,56', desc: 'Catálogo diversificado', features: ['Séries exclusivas', '3 telas simultâneas', 'Suporte 24/7', 'Entrega rápida'] }
    ],
    'Viki': [
        { name: 'Viki', duration: '1 Mês', price: '10,40', desc: 'Dramas asiáticos', features: ['Legendas em português', 'Sem anúncios', 'Catálogo completo', 'Multiplataforma'] }
    ],
    'ChatGPT Plus': [
        { name: 'ChatGPT Plus', duration: '1 Mês', price: '40,00', desc: 'Acesso ao GPT-4', features: ['Respostas prioritárias', 'Plugins exclusivos', 'Suporte avançado', 'Todas vantagens'] }
    ]
};

// ========== FILTRO DE PLANOS ==========
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card[data-category]');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona active no botão clicado
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            // Filtra os cards
            serviceCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                } else {
                    const categories = card.dataset.category.split(' ');
                    if (categories.includes(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
                
                // Adiciona animação
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'float-up 0.8s ease forwards';
                }, 10);
            });
        });
    });

    // ========== MODAL DE PLANOS ==========
    const plansModal = document.getElementById('plansModal');
    const closeModal = document.getElementById('closeModal');
    const modalBuyBtn = document.getElementById('modalBuyBtn');
    const selectedPlanSummary = document.getElementById('selectedPlanSummary');
    const selectedPlanText = document.getElementById('selectedPlanText');
    const selectedPrice = document.getElementById('selectedPrice');
    const modalServiceName = document.getElementById('modalServiceName');
    const plansContainer = document.getElementById('plansContainer');

    // Variável para armazenar plano selecionado
    let selectedPlan = null;
    let currentService = '';

    // Abrir modal
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
            currentService = button.dataset.service;
            modalServiceName.textContent = currentService;
            selectedPlan = null;
            
            // Limpar seleção anterior
            selectedPlanSummary.style.display = 'none';
            modalBuyBtn.style.display = 'none';
            
            // Carregar planos para este serviço
            loadPlans(currentService);
            
            // Mostrar modal
            plansModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Fechar modal
    closeModal.addEventListener('click', () => {
        plansModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Fechar modal clicando fora
    plansModal.addEventListener('click', (e) => {
        if (e.target === plansModal) {
            plansModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Carregar planos no modal
    function loadPlans(serviceName) {
        plansContainer.innerHTML = '';
        const plans = allPlansData[serviceName] || [];
        
        if (plans.length === 0) {
            plansContainer.innerHTML = `
                <div class="plan-option" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <h3 style="color: var(--light); margin-bottom: 1rem;">Nenhum plano disponível</h3>
                    <p style="color: var(--gray);">Entre em contato pelo WhatsApp para verificar disponibilidade.</p>
                    <a href="https://wa.me/5511962094589?text=Olá%20EASYSTREAM!%0A%0AGostaria%20de%20saber%20sobre%20planos%20para%20${encodeURIComponent(serviceName)}" 
                       class="select-plan-btn" target="_blank" style="margin-top: 1.5rem;">
                        <i class="fab fa-whatsapp"></i> Consultar no WhatsApp
                    </a>
                </div>
            `;
            return;
        }
        
        plans.forEach((plan, index) => {
            const planElement = document.createElement('div');
            planElement.className = 'plan-option';
            planElement.dataset.planIndex = index;
            
            // Verificar se é anual para adicionar badge
            const isAnnual = plan.duration.includes('12') || plan.duration.includes('Anual');
            const badge = isAnnual ? '<span class="badge badge-new">Melhor Oferta</span>' : '';
            
            planElement.innerHTML = `
                ${badge}
                <div class="plan-header">
                    <div>
                        <h3 class="plan-title">${plan.name}</h3>
                        <div class="plan-duration">${plan.duration}</div>
                    </div>
                    <div class="plan-price">R$ ${plan.price}</div>
                </div>
                <p class="plan-description">${plan.desc}</p>
                <ul class="plan-features">
                    ${plan.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <button class="select-plan-btn" onclick="selectPlan(${index})">
                    Selecionar Plano
                </button>
            `;
            
            plansContainer.appendChild(planElement);
        });
    }

    // Selecionar plano (função global)
    window.selectPlan = function(planIndex) {
        // Remover seleção anterior
        document.querySelectorAll('.plan-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Adicionar seleção atual
        document.querySelector(`.plan-option[data-plan-index="${planIndex}"]`).classList.add('selected');
        
        const plans = allPlansData[currentService];
        selectedPlan = plans[planIndex];
        
        // Atualizar resumo
        selectedPlanText.textContent = `${selectedPlan.name} - ${selectedPlan.duration} - R$ ${selectedPlan.price}`;
        selectedPrice.textContent = `R$ ${selectedPlan.price}`;
        
        // Mostrar botão de compra
        selectedPlanSummary.style.display = 'block';
        modalBuyBtn.style.display = 'flex';
        
        // Rolar para baixo
        modalBuyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // Configurar botão de compra
    modalBuyBtn.addEventListener('click', () => {
        if (!selectedPlan) return;
        
        const message = `Olá EASYSTREAM!%0A%0AGostaria de comprar o plano:%0A%0A📺 ${currentService}%0A📋 ${selectedPlan.name}%0A📅 ${selectedPlan.duration}%0A💰 Valor: R$ ${selectedPlan.price}%0A%0APor favor, me envie as informações para pagamento via PIX.`;
        
        window.open(`https://wa.me/5511962094589?text=${message}`, '_blank');
    });
});