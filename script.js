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
    floatingIconsContainer.appendChild(icon);
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

// Combo Builder Functionality
const comboBuilder = {
    services: {
        netflix: { name: 'Netflix 4K Ultra HD', price: 22.90, icon: 'fab fa-netflix' },
        prime: { name: 'Prime Video', price: 8.90, icon: 'fab fa-amazon' },
        hulu: { name: 'Hulu', price: 12.90, icon: 'fab fa-hulu' },
        espn: { name: 'ESPN', price: 9.90, icon: 'fas fa-trophy' },
        youtube: { name: 'YouTube Premium', price: 14.90, icon: 'fab fa-youtube' },
        paramount: { name: 'Paramount+', price: 10.90, icon: 'fas fa-film' },
        viki: { name: 'Viki', price: 7.90, icon: 'fas fa-tv' },
        deezer: { name: 'Deezer Premium', price: 11.90, icon: 'fab fa-deezer' },
        canva: { name: 'Canva Pro', price: 15.90, icon: 'fas fa-palette' },
        crunchyroll: { name: 'Crunchyroll Mega Fan', price: 9.90, icon: 'fas fa-tv' },
        chatgpt: { name: 'ChatGPT Plus', price: 29.90, icon: 'fas fa-robot' },
        disney: { name: 'Disney+ Premium', price: 19.90, icon: 'fas fa-crown' }
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
    
    updateSummary() {
        const selectedServicesContainer = document.getElementById('selected-services');
        const subtotalElement = document.getElementById('subtotal');
        const discountElement = document.getElementById('discount');
        const totalElement = document.getElementById('total');
        const discountPercentageElement = document.getElementById('discount-percentage');
        const finalPriceElement = document.getElementById('final-price');
        const comboBuyBtn = document.getElementById('combo-buy-btn');
        
        // Clear current selection
        selectedServicesContainer.innerHTML = '';
        
        if (this.selectedServices.length === 0) {
            selectedServicesContainer.innerHTML = '<p class="empty-message">Nenhum serviço selecionado ainda</p>';
            this.updateTotals(0, 0, 0, '0%');
            comboBuyBtn.style.opacity = '0.6';
            comboBuyBtn.style.cursor = 'not-allowed';
            comboBuyBtn.href = '#';
            comboBuyBtn.onclick = (e) => e.preventDefault();
            return;
        }
        
        // Add selected services
        this.selectedServices.forEach(serviceId => {
            const service = this.services[serviceId];
            const serviceElement = document.createElement('div');
            serviceElement.className = 'selected-service-item';
            serviceElement.innerHTML = `
                <div class="selected-service-name">
                    <i class="${service.icon}"></i>
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
        
        // Update WhatsApp link
        if (this.selectedServices.length >= 3) {
            const serviceNames = this.selectedServices.map(id => this.services[id].name).join('\n• ');
            const whatsappMessage = `Olá StreamFácil! Gostaria de comprar o seguinte combo:\n\n• ${serviceNames}\n\nQuantidade de serviços: ${this.selectedServices.length}\nSubtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\nDesconto aplicado: ${discountText}\nValor total: R$ ${total.toFixed(2).replace('.', ',')}\n\nPor favor, me envie as informações para pagamento via PIX.`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            comboBuyBtn.href = `https://wa.me/5511962094589?text=${encodedMessage}`;
            comboBuyBtn.style.opacity = '1';
            comboBuyBtn.style.cursor = 'pointer';
            comboBuyBtn.onclick = null;
        } else {
            comboBuyBtn.href = '#';
            comboBuyBtn.style.opacity = '0.6';
            comboBuyBtn.style.cursor = 'not-allowed';
            comboBuyBtn.onclick = (e) => {
                e.preventDefault();
                alert('Selecione pelo menos 3 serviços para habilitar o desconto de combo!');
            };
        }
    },
    
    updateTotals(subtotal, discount, total, discountPercentage) {
        document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        document.getElementById('discount').textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
        document.getElementById('total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        document.getElementById('discount-percentage').textContent = discountPercentage;
        document.getElementById('final-price').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
};

// WhatsApp Tracking
document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', function() {
        const planName = this.getAttribute('href').includes('text=') ? 
                        decodeURIComponent(this.getAttribute('href').split('text=')[1]) : 
                        'Plano Geral';
        console.log(`WhatsApp clicked for: ${planName}`);
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    comboBuilder.init();
});