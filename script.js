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

// Floating Icons
const floatingIconsContainer = document.querySelector('.floating-icons');
const icons = ['fab fa-spotify', 'fab fa-youtube', 'fab fa-twitch', 'fab fa-xbox', 
               'fab fa-playstation', 'fab fa-apple', 'fab fa-google-play', 'fas fa-film'];

for (let i = 0; i < 12; i++) {
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

// Modal Functionality
const openModalBtn = document.getElementById('open-games-modal');
const closeModalBtn = document.getElementById('close-games-modal');
const modal = document.getElementById('games-modal');

if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
        console.log('Open modal button clicked');
        modal.style.display = 'block';
        filterGames(); // Reapply filter when modal opens
    });

    closeModalBtn.addEventListener('click', () => {
        console.log('Close modal button clicked');
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            console.log('Clicked outside modal');
            modal.style.display = 'none';
        }
    });
} else {
    console.error('Modal elements not found:', {
        openModalBtn: !!openModalBtn,
        closeModalBtn: !!closeModalBtn,
        modal: !!modal
    });
}

// Game Collections Data
const allCollections = [
    { title: '🧙‍♂️ The Witcher Coleção', category: 'RPG', games: ['The Witcher: Enhanced Edition', 'The Witcher 2: Assassins of Kings', 'The Witcher 3: Wild Hunt – Game of the Year Edition', 'GWENT: The Witcher Card Game', 'Thronebreaker: The Witcher Tales'], platform: 'Disponível via Steam.' },
    { title: '🔥 Dark Souls Coleção', category: 'Action', games: ['Dark Souls: Prepare to Die Edition', 'Dark Souls II: Scholar of the First Sin', 'Dark Souls III – Deluxe Edition', 'DARK SOULS III: The Ringed City', 'DARK SOULS III: Ashes of Ariandel'], platform: 'Disponível via Steam.' },
    { title: '🧟‍♂️ Resident Evil Coleção', category: 'Zombie', games: ['Resident Evil 0 HD Remaster', 'Resident Evil (HD Remake)', 'Resident Evil 2 Remake', 'Resident Evil 3 Remake', 'Resident Evil 4 Remake', 'Resident Evil 5', 'Resident Evil 6', 'Resident Evil 7: Biohazard', 'Resident Evil Village'], platform: 'Disponível via Steam.' },
    { title: '⚔️ Assassin\'s Creed Coleção', category: 'Action', games: ['Assassin’s Creed', 'Assassin’s Creed II', 'Assassin’s Creed Brotherhood', 'Assassin’s Creed Revelations', 'Assassin’s Creed III Remastered', 'Assassin’s Creed IV: Black Flag', 'Assassin’s Creed Rogue', 'Assassin’s Creed Unity', 'Assassin’s Creed Origins', 'Assassin’s Creed Odyssey', 'Assassin’s Creed Valhalla'], platform: 'Disponível via Steam e Ubisoft Connect (para alguns títulos).' },
    { title: '🚗 Need for Speed Coleção', category: 'Racing', games: ['Need for Speed: Hot Pursuit Remastered', 'Need for Speed: Most Wanted (2012)', 'Need for Speed: Rivals', 'Need for Speed: Payback', 'Need for Speed: Heat', 'Need for Speed (2016)'], platform: 'Disponível via Steam e EA App (para alguns títulos).' },
    { title: '🧙‍♂️ Hogwarts / Harry Potter Coleção', category: 'Adventure', games: ['Hogwarts Legacy', 'LEGO Harry Potter: Years 1-4', 'LEGO Harry Potter: Years 5-7', 'Harry Potter and the Sorcerer’s Stone (via emulador)', 'Harry Potter and the Chamber of Secrets (via emulador)'], platform: 'Disponível via Steam, exceto jogos clássicos via emulador.' },
    { title: '🔫 Battlefield Coleção', category: 'Shooter', games: ['Battlefield: Bad Company 2', 'Battlefield 3', 'Battlefield 4', 'Battlefield 1', 'Battlefield V', 'Battlefield 2042'], platform: 'Disponível via Steam e EA App.' },
    { title: '🥊 Dragon Ball Coleção', category: 'Fighting', games: ['Dragon Ball Xenoverse', 'Dragon Ball Xenoverse 2', 'Dragon Ball FighterZ', 'Dragon Ball Z: Kakarot', 'Dragon Ball: The Breakers'], platform: 'Disponível via Steam.' },
    { title: '⚔️ Darksiders Coleção', category: 'Action', games: ['Darksiders Warmastered Edition', 'Darksiders II Deathinitive Edition', 'Darksiders III', 'Darksiders Genesis'], platform: 'Disponível via Steam.' },
    { title: '🧟‍♂️ Dying Light / Dead Island Coleção', category: 'Zombie', games: ['Dying Light', 'Dying Light: The Following', 'Dying Light 2 Stay Human', 'Dead Island Definitive Edition', 'Dead Island: Riptide Definitive Edition'], platform: 'Disponível via Steam.' },
    { title: '💥 DOOM Coleção', category: 'Shooter', games: ['DOOM (1993)', 'DOOM II', 'DOOM 3', 'DOOM (2016)', 'DOOM Eternal'], platform: 'Disponível via Steam.' },
    { title: '🧙‍♂️ Middle-earth / Senhor dos Anéis Coleção', category: 'RPG', games: ['LEGO Lord of the Rings', 'Middle-earth: Shadow of Mordor', 'Middle-earth: Shadow of War', 'The Lord of the Rings: Gollum (se disponível)', 'The Lord of the Rings Online (Free to play)'], platform: 'Disponível via Steam, exceto LOTR Online (Free to play).' },
    { title: '🌴 Far Cry Coleção', category: 'Action', games: ['Far Cry 3', 'Far Cry 4', 'Far Cry Primal', 'Far Cry 5', 'Far Cry New Dawn', 'Far Cry 6 (via Ubisoft Connect)'], platform: 'Disponível via Steam e Ubisoft Connect.' },
    { title: '🦇 Batman (Arkham) Coleção', category: 'Superhero', games: ['Batman: Arkham Asylum', 'Batman: Arkham City', 'Batman: Arkham Origins', 'Batman: Arkham Knight'], platform: 'Disponível via Steam.' },
    { title: '⛰️ Tomb Raider Coleção', category: 'Adventure', games: ['Tomb Raider (2013)', 'Rise of the Tomb Raider', 'Shadow of the Tomb Raider'], platform: 'Disponível via Steam.' },
    { title: '🌀 Portal / Half-Life Coleção', category: 'Puzzle', games: ['Portal', 'Portal 2', 'Half-Life', 'Half-Life: Blue Shift', 'Half-Life: Opposing Force', 'Half-Life 2', 'Half-Life 2: Episode One', 'Half-Life 2: Episode Two', 'Half-Life: Alyx'], platform: 'Disponível via Steam.' },
    { title: '🚀 Mass Effect Coleção', category: 'RPG', games: ['Mass Effect', 'Mass Effect 2', 'Mass Effect 3', 'Mass Effect: Andromeda', 'Mass Effect Legendary Edition'], platform: 'Disponível via Steam e EA App.' },
    { title: '🌊 BioShock Coleção', category: 'Action', games: ['BioShock Remastered', 'BioShock 2 Remastered', 'BioShock Infinite', 'BioShock Infinite: Burial at Sea DLC'], platform: 'Disponível via Steam.' },
    { title: '⭐ Star Wars Coleção', category: 'Action', games: ['STAR WARS Jedi: Fallen Order', 'STAR WARS Jedi: Survivor', 'STAR WARS Battlefront II (Classic)', 'STAR WARS Battlefront (2004)', 'LEGO Star Wars: The Skywalker Saga', 'STAR WARS: Knights of the Old Republic', 'STAR WARS: The Force Unleashed I & II'], platform: 'Disponível via Steam e EA App.' },
    { title: '🕒 Life is Strange Coleção', category: 'Adventure', games: ['Life is Strange', 'Life is Strange: Before the Storm', 'Life is Strange 2', 'Life is Strange: True Colors', 'The Awesome Adventures of Captain Spirit'], platform: 'Disponível via Steam.' },
    { title: '🏎️ Forza Coleção', category: 'Racing', games: ['Forza Horizon 3 (via Xbox App)', 'Forza Horizon 4', 'Forza Horizon 5', 'Forza Motorsport (2023)'], platform: 'Disponível via Steam e Xbox App.' },
    { title: '💣 Just Cause Coleção', category: 'Action', games: ['Just Cause', 'Just Cause 2', 'Just Cause 3', 'Just Cause 4'], platform: 'Disponível via Steam.' },
    { title: '📜 Divinity Coleção', category: 'RPG', games: ['Divinity: Original Sin Enhanced Edition', 'Divinity: Original Sin 2 – Definitive Edition', 'Divinity II: Developer’s Cut'], platform: 'Disponível via Steam.' },
    { title: '🧛‍♂️ Vampire: The Masquerade Coleção', category: 'RPG', games: ['Vampire: The Masquerade – Bloodlines', 'Vampire: The Masquerade – Swansong', 'Vampire: The Masquerade – Coteries of New York', 'Vampire: The Masquerade – Shadows of New York'], platform: 'Disponível via Steam.' },
    { title: '⚔️ Mount & Blade Coleção', category: 'Strategy', games: ['Mount & Blade', 'Mount & Blade: Warband', 'Mount & Blade: With Fire & Sword', 'Mount & Blade II: Bannerlord'], platform: 'Disponível via Steam.' },
    { title: '🎮 Grand Theft Auto Coleção', category: 'Action', games: ['Grand Theft Auto III', 'Grand Theft Auto: Vice City', 'Grand Theft Auto: San Andreas', 'Grand Theft Auto IV', 'Grand Theft Auto V'], platform: 'Disponível via Steam.' },
    { title: '🧱 Minecraft Coleção', category: 'Adventure', games: ['Minecraft: Java Edition', 'Minecraft: Bedrock Edition', 'Minecraft Dungeons'], platform: 'Disponível via Microsoft Store e launcher oficial.' },
    { title: '🏹 The Legend of Zelda Coleção', category: 'Adventure', games: ['The Legend of Zelda: Breath of the Wild', 'The Legend of Zelda: Tears of the Kingdom'], platform: 'Disponível via emulador (Nintendo Switch).'},
    { title: '👾 Super Mario Coleção', category: 'Platform', games: ['Super Mario Odyssey', 'Super Mario Bros. Wonder'], platform: 'Disponível via emulador (Nintendo Switch).'}
];

// Load More Functionality
const gamesList = document.getElementById('game-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
let visibleCollections = 5; // Initial number of collections to show

function loadMoreGames() {
    const existingTitles = Array.from(document.querySelectorAll('.game-collection .collection-title')).map(title => title.textContent);
    const collectionsToAdd = allCollections.slice(existingTitles.length, existingTitles.length + 5);

    collectionsToAdd.forEach(collection => {
        if (!existingTitles.includes(collection.title)) {
            const div = document.createElement('div');
            div.className = 'game-collection';
            div.setAttribute('data-category', collection.category);
            div.innerHTML = `
                <h3 class="collection-title"><i class="fas fa-gamepad"></i> ${collection.title}</h3>
                <ul class="game-items">
                    ${collection.games.map(game => `<li class="game-item">${game}</li>`).join('')}
                </ul>
                <p>${collection.platform}</p>
            `;
            gamesList.appendChild(div);
        }
    });

    // Show/hide load more button
    loadMoreBtn.style.display = existingTitles.length + collectionsToAdd.length >= allCollections.length ? 'none' : 'block';
    filterGames(); // Reapply filter after adding new collections
}

// Search and Filter Functionality
const searchInput = document.getElementById('game-search');
const categorySelect = document.getElementById('game-category');

function filterGames() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value.toLowerCase();
    const gameCollections = document.querySelectorAll('.game-collection');

    gameCollections.forEach(collection => {
        const title = collection.querySelector('.collection-title').textContent.toLowerCase();
        const gameItems = collection.querySelectorAll('.game-item');
        const category = collection.getAttribute('data-category').toLowerCase();
        let matchFound = false;

        // Check if title, game items, or category match the search term
        if (title.includes(searchTerm) || category.includes(searchTerm)) {
            matchFound = true;
        } else {
            gameItems.forEach(item => {
                if (item.textContent.toLowerCase().includes(searchTerm)) {
                    matchFound = true;
                }
            });
        }

        // Check category filter
        const categoryMatch = selectedCategory === 'all' || category === selectedCategory;

        // Show or hide collection based on search and category
        collection.style.display = (matchFound || searchTerm === '') && categoryMatch ? 'block' : 'none';
    });
}

// Add event listeners
if (searchInput && categorySelect) {
    searchInput.addEventListener('input', filterGames);
    categorySelect.addEventListener('change', filterGames);
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreGames);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load initial collections
    const initialCollections = allCollections.slice(0, visibleCollections);
    initialCollections.forEach(collection => {
        const div = document.createElement('div');
        div.className = 'game-collection';
        div.setAttribute('data-category', collection.category);
        div.innerHTML = `
            <h3 class="collection-title"><i class="fas fa-gamepad"></i> ${collection.title}</h3>
            <ul class="game-items">
                ${collection.games.map(game => `<li class="game-item">${game}</li>`).join('')}
            </ul>
            <p>${collection.platform}</p>
        `;
        gamesList.appendChild(div);
    });

    // Apply filter on load
    filterGames();
});