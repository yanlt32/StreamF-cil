// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Floating Icons Animation
const floatingIconsContainer = document.querySelector('.floating-icons');
const icons = ['fab fa-youtube', 'fab fa-amazon', 'fab fa-netflix', 'fab fa-hulu', 
               'fab fa-deezer', 'fas fa-film', 'fas fa-tv', 'fas fa-palette', 'fas fa-robot'];

for (let i = 0; i < 10; i++) {
    const icon = document.createElement('i');
    icon.className = icons[Math.floor(Math.random() * icons.length)] + ' floating-icon';
    icon.style.top = `${Math.random() * 100}%`;
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.fontSize = `${Math.random() * 1 + 1.5}rem`;
    icon.style.animationDuration = `${Math.random() * 10 + 10}s`;
    icon.style.animationDelay = `${Math.random() * 5}s`;
    if (floatingIconsContainer) {
        floatingIconsContainer.appendChild(icon);
    }
}

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-float');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.animate-float').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ========== COMBO BUILDER ==========
const comboBuilder = {
    services: {
        netflix: { name: 'Netflix 4K', price: 29.90, icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        'netflix-promo': { name: 'Netflix Premium', price: 15.90, icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        startplus: { name: 'Star+', price: 16.36, icon: 'logo/start.png' },
        playplus: { name: 'PlayPlus', price: 7.56, icon: 'logo/play.png' },
        prime: { name: 'Prime Video', price: 14.90, icon: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
        hulu: { name: 'Hulu', price: 26.76, icon: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Hulu_logo_%282014%29.svg' },
        espn: { name: 'ESPN', price: 26.76, icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg' },
        tntsports: { name: 'TNT Sports', price: 17.96, icon: 'logo/tnt.png' },
        youtube: { name: 'YouTube Premium', price: 18.90, icon: 'logo/you.png' },
        disney: { name: 'Disney+', price: 19.90, icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
        hbo: { name: 'HBO Max', price: 19.90, icon: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
        paramount: { name: 'Paramount+', price: 14.90, icon: 'logo/para.png' },
        crunchyroll: { name: 'Crunchyroll', price: 12.90, icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png' },
        spotify: { name: 'Spotify Premium', price: 14.90, icon: 'fab fa-spotify' },
        deezer: { name: 'Deezer Premium', price: 14.90, icon: 'logo/dee.png' },
        canva: { name: 'Canva Pro', price: 24.90, icon: 'logo/canva.png' },
        viki: { name: 'Viki', price: 10.40, icon: 'fas fa-globe-asia' },
        apple: { name: 'Apple TV+', price: 11.96, icon: 'fab fa-apple' },
        globoplay: { name: 'Globoplay', price: 17.90, icon: 'fas fa-globe-americas' },
        ufc: { name: 'UFC Fight Pass', price: 19.90, icon: 'fas fa-fist-raised' },
        premiere: { name: 'Premiere Play', price: 29.90, icon: 'fas fa-futbol' },
        telecine: { name: 'Telecine Play', price: 22.90, icon: 'fas fa-film' },
        psn: { name: 'PSN Plus Deluxe', price: 49.90, icon: 'fab fa-playstation' },
        gamepass: { name: 'Game Pass Ultimate', price: 69.90, icon: 'fas fa-gamepad' },
        chatgpt: { name: 'ChatGPT Plus', price: 40.00, icon: 'fas fa-robot' }
    },
    
    selectedServices: [],
    
    init() {
        this.setupEventListeners();
        this.updateSummary();
    },
    
    setupEventListeners() {
        // Checkbox listeners
        document.querySelectorAll('.combo-service-item input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const serviceId = e.target.closest('.combo-service-item').dataset.service;
                this.toggleService(serviceId, e.target.checked);
            });
        });
        
        // Select All button
        document.getElementById('select-all')?.addEventListener('click', () => {
            document.querySelectorAll('.combo-service-item input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = true;
                const serviceId = checkbox.closest('.combo-service-item').dataset.service;
                if (!this.selectedServices.includes(serviceId)) {
                    this.selectedServices.push(serviceId);
                }
            });
            this.updateSummary();
        });
        
        // Clear All button
        document.getElementById('clear-all')?.addEventListener('click', () => {
            document.querySelectorAll('.combo-service-item input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = false;
            });
            this.selectedServices = [];
            this.updateSummary();
        });
        
        // Combo Buy Button
        document.getElementById('combo-buy-btn')?.addEventListener('click', (e) => {
            this.handleComboPurchase(e);
        });
    },
    
    toggleService(serviceId, isSelected) {
        if (isSelected && !this.selectedServices.includes(serviceId)) {
            this.selectedServices.push(serviceId);
        } else if (!isSelected) {
            this.selectedServices = this.selectedServices.filter(id => id !== serviceId);
        }
        this.updateSummary();
    },
    
    calculateDiscount(quantity) {
        if (quantity >= 5) return 0.20; // 20% OFF
        if (quantity >= 4) return 0.15; // 15% OFF
        if (quantity >= 3) return 0.10; // 10% OFF
        return 0; // No discount
    },
    
    handleComboPurchase(e) {
        if (this.selectedServices.length < 3) {
            e.preventDefault();
            alert('Selecione pelo menos 3 serviços para habilitar o desconto de combo!');
            return;
        }
        
        // Calculate totals
        const subtotal = this.selectedServices.reduce((sum, serviceId) => {
            return sum + this.services[serviceId].price;
        }, 0);
        
        const discountPercentage = this.calculateDiscount(this.selectedServices.length);
        const discount = subtotal * discountPercentage;
        const total = subtotal - discount;
        const discountText = `${(discountPercentage * 100).toFixed(0)}%`;
        
        // Create WhatsApp message with emojis
        const serviceNames = this.selectedServices.map(id => this.services[id].name).join('\n• ');
        const whatsappMessage = `🎬 Olá EASYSTREAM!\n\nGostaria de comprar o seguinte combo:\n\n• ${serviceNames}\n\n📊 RESUMO DO PEDIDO:\n📦 Quantidade de serviços: ${this.selectedServices.length}\n💰 Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n🎁 Desconto aplicado: ${discountText}\n💵 Valor total: R$ ${total.toFixed(2).replace('.', ',')}\n\nPor favor, me envie as informações para pagamento via PIX.`;
        
        // Open WhatsApp
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/5511962094589?text=${encodedMessage}`, '_blank');
    },
    
    updateSummary() {
        const selectedServicesContainer = document.getElementById('selected-services');
        const comboBuyBtn = document.getElementById('combo-buy-btn');
        
        // Clear current selection
        if (selectedServicesContainer) {
            selectedServicesContainer.innerHTML = '';
        }
        
        if (this.selectedServices.length === 0) {
            selectedServicesContainer.innerHTML = '<p class="empty-message">Nenhum serviço selecionado ainda</p>';
            this.updateTotals(0, 0, 0, '0%');
            if (comboBuyBtn) {
                comboBuyBtn.disabled = true;
                comboBuyBtn.style.opacity = '0.6';
                comboBuyBtn.style.cursor = 'not-allowed';
            }
            return;
        }
        
        // Add selected services
        this.selectedServices.forEach(serviceId => {
            const service = this.services[serviceId];
            const serviceElement = document.createElement('div');
            serviceElement.className = 'selected-service-item';
            
            let iconHTML = '';
            if (service.icon.startsWith('http')) {
                iconHTML = `<img src="${service.icon}" alt="${service.name}" class="service-icon">`;
            } else if (service.icon.startsWith('fab') || service.icon.startsWith('fas')) {
                iconHTML = `<i class="${service.icon}"></i>`;
            } else {
                iconHTML = `<img src="${service.icon}" alt="${service.name}" class="service-icon">`;
            }
            
            serviceElement.innerHTML = `
                <div class="selected-service-name">
                    ${iconHTML}
                    ${service.name}
                </div>
                <div class="selected-service-price">
                    R$ ${service.price.toFixed(2).replace('.', ',')}
                </div>
            `;
            selectedServicesContainer.appendChild(serviceElement);
        });
        
        // Calculate totals
        const subtotal = this.selectedServices.reduce((sum, serviceId) => {
            return sum + this.services[serviceId].price;
        }, 0);
        
        const discountPercentage = this.calculateDiscount(this.selectedServices.length);
        const discount = subtotal * discountPercentage;
        const total = subtotal - discount;
        const discountText = `${(discountPercentage * 100).toFixed(0)}%`;
        
        this.updateTotals(subtotal, discount, total, discountText);
        
        // Update button state
        if (comboBuyBtn) {
            if (this.selectedServices.length >= 3) {
                comboBuyBtn.disabled = false;
                comboBuyBtn.style.opacity = '1';
                comboBuyBtn.style.cursor = 'pointer';
            } else {
                comboBuyBtn.disabled = true;
                comboBuyBtn.style.opacity = '0.6';
                comboBuyBtn.style.cursor = 'not-allowed';
            }
        }
    },
    
    updateTotals(subtotal, discount, total, discountPercentage) {
        const subtotalElement = document.getElementById('subtotal');
        const discountElement = document.getElementById('discount');
        const totalElement = document.getElementById('total');
        const discountPercentageElement = document.getElementById('discount-percentage');
        const finalPriceElement = document.getElementById('final-price');
        
        if (subtotalElement) subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        if (discountElement) discountElement.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
        if (totalElement) totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        if (discountPercentageElement) discountPercentageElement.textContent = discountPercentage;
        if (finalPriceElement) finalPriceElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
};

// ========== SEARCH FUNCTIONALITY ==========
const searchFunctionality = {
    init() {
        const searchInput = document.getElementById('streamSearch');
        const clearSearch = document.getElementById('clearSearch');
        const searchResults = document.getElementById('searchResults');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();
                
                if (searchTerm.length === 0) {
                    searchResults.classList.remove('active');
                    searchResults.innerHTML = '';
                    return;
                }
                
                this.performSearch(searchTerm);
            });
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const searchTerm = e.target.value.toLowerCase().trim();
                    if (searchTerm.length > 0) {
                        this.performSearch(searchTerm);
                    }
                }
            });
        }
        
        if (clearSearch) {
            clearSearch.addEventListener('click', () => {
                searchInput.value = '';
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
            });
        }
    },
    
    performSearch(searchTerm) {
        const searchResults = document.getElementById('searchResults');
        const serviceCards = document.querySelectorAll('.service-card[data-service]');
        let foundResults = false;
        
        searchResults.innerHTML = '';
        
        serviceCards.forEach(card => {
            const serviceName = card.getAttribute('data-service').toLowerCase();
            const cardTitle = card.querySelector('.service-card-header h3')?.textContent.toLowerCase() || '';
            const cardPrice = card.querySelector('.service-price')?.textContent.toLowerCase() || '';
            
            if (serviceName.includes(searchTerm) || 
                cardTitle.includes(searchTerm) || 
                cardPrice.includes(searchTerm)) {
                
                foundResults = true;
                this.addSearchResult(card, searchResults);
            }
        });
        
        if (foundResults) {
            searchResults.classList.add('active');
        } else {
            searchResults.innerHTML = '<div class="no-results">Nenhum serviço encontrado. Tente outro termo.</div>';
            searchResults.classList.add('active');
        }
    },
    
    addSearchResult(card, container) {
        const serviceName = card.querySelector('.service-card-header h3')?.textContent || 'Serviço';
        const servicePrice = card.querySelector('.service-price')?.textContent || '';
        const serviceLogo = card.querySelector('.service-logo')?.src || '';
        const serviceIcon = card.querySelector('.service-card-header i');
        const serviceBtn = card.querySelector('.service-btn');
        
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        let logoHTML = '';
        if (serviceLogo && !serviceLogo.includes('undefined')) {
            logoHTML = `<img src="${serviceLogo}" alt="${serviceName}">`;
        } else if (serviceIcon) {
            const iconClass = serviceIcon.className;
            logoHTML = `<i class="${iconClass}"></i>`;
        }
        
        resultItem.innerHTML = `
            ${logoHTML}
            <div>
                <h4>${serviceName}</h4>
                <p>${servicePrice}</p>
            </div>
        `;
        
        resultItem.addEventListener('click', () => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'float-up 0.8s ease forwards';
            }, 10);
            
            // Add highlight effect
            card.style.boxShadow = '0 0 0 3px var(--secondary)';
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 2000);
            
            // Close search results
            document.getElementById('searchResults').classList.remove('active');
            document.getElementById('streamSearch').value = '';
        });
        
        container.appendChild(resultItem);
    }
};

// ========== FILTRO DE PLANOS ==========
const plansFilter = {
    init() {
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
    }
};

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

// ========== MODAL DE PLANOS ==========
const modalFunctionality = {
    init() {
        const plansModal = document.getElementById('plansModal');
        const closeModal = document.getElementById('closeModal');
        const modalBuyBtn = document.getElementById('modalBuyBtn');
        const selectedPlanSummary = document.getElementById('selectedPlanSummary');
        const selectedPlanText = document.getElementById('selectedPlanText');
        const selectedPrice = document.getElementById('selectedPrice');
        const modalServiceName = document.getElementById('modalServiceName');
        const plansContainer = document.getElementById('plansContainer');

        // Variável para armazenar plano selecionado
        this.selectedPlan = null;
        this.currentService = '';

        // Abrir modal
        document.querySelectorAll('.open-modal').forEach(button => {
            button.addEventListener('click', () => {
                this.currentService = button.dataset.service;
                modalServiceName.textContent = this.currentService;
                this.selectedPlan = null;
                
                // Limpar seleção anterior
                selectedPlanSummary.style.display = 'none';
                modalBuyBtn.style.display = 'none';
                
                // Carregar planos para este serviço
                this.loadPlans(this.currentService);
                
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

        // Configurar botão de compra
        modalBuyBtn.addEventListener('click', () => {
            if (!this.selectedPlan) return;
            
            // Create WhatsApp message with emojis
            const message = `🎬 Olá EASYSTREAM!%0A%0AGostaria de comprar o plano:%0A%0A📺 ${this.currentService}%0A📋 ${this.selectedPlan.name}%0A📅 ${this.selectedPlan.duration}%0A💰 Valor: R$ ${this.selectedPlan.price}%0A%0APor favor, me envie as informações para pagamento via PIX.`;
            
            window.open(`https://wa.me/5511962094589?text=${message}`, '_blank');
        });

        // Expor função selectPlan para uso global
        window.selectPlan = this.selectPlan.bind(this);
    },

    loadPlans(serviceName) {
        const plansContainer = document.getElementById('plansContainer');
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
        
        plansContainer.innerHTML = '';
        
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
    },

    selectPlan(planIndex) {
        const selectedPlanSummary = document.getElementById('selectedPlanSummary');
        const selectedPlanText = document.getElementById('selectedPlanText');
        const selectedPrice = document.getElementById('selectedPrice');
        const modalBuyBtn = document.getElementById('modalBuyBtn');
        
        // Remover seleção anterior
        document.querySelectorAll('.plan-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Adicionar seleção atual
        document.querySelector(`.plan-option[data-plan-index="${planIndex}"]`).classList.add('selected');
        
        const plans = allPlansData[this.currentService];
        this.selectedPlan = plans[planIndex];
        
        // Atualizar resumo
        selectedPlanText.textContent = `${this.selectedPlan.name} - ${this.selectedPlan.duration} - R$ ${this.selectedPlan.price}`;
        selectedPrice.textContent = `R$ ${this.selectedPlan.price}`;
        
        // Mostrar botão de compra
        selectedPlanSummary.style.display = 'block';
        modalBuyBtn.style.display = 'flex';
        
        // Rolar para baixo
        modalBuyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    comboBuilder.init();
    searchFunctionality.init();
    plansFilter.init();
    modalFunctionality.init();
    
    // Ativar scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});