/**
 * app.js
 * Handles DOM manipulation, rendering, and logic based on data.js
 */

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    // 1. Populate Global Static Data
    document.title = `${businessConfig.brandName} | Authentic Maharashtrian Food`;
    document.getElementById("brand-name-display").innerText = businessConfig.brandName;
    
    const callBtn = document.getElementById("call-now-btn");
    callBtn.href = `tel:${businessConfig.phone.replace(/\s+/g, '')}`;

    // Update Footer Information dynamically
    document.getElementById("footer-brand-name").innerText = businessConfig.brandName;
    document.getElementById("footer-area").innerText = businessConfig.area;
    document.getElementById("footer-address").innerText = businessConfig.address;
    document.getElementById("footer-timings").innerText = businessConfig.timings;
    document.getElementById("footer-fssai").innerText = businessConfig.fssai;
    
    // Set current year in footer
    document.getElementById("current-year").innerText = new Date().getFullYear();

    // 2. Inject Local SEO Schema (JSON-LD)
    injectLocalSeoSchema();

    // 3. Render Menu Subsystem
    renderCategoryPills();
    
    // Default load: Set first category as active
    if (businessConfig.menu.length > 0) {
        renderMenu(businessConfig.menu[0].category);
    }
}

function renderCategoryPills() {
    const container = document.getElementById("category-filters");
    container.innerHTML = ""; // Clean shell

    businessConfig.menu.forEach((menuObj, index) => {
        const btn = document.createElement("button");
        btn.className = `cat-pill ${index === 0 ? "active" : ""}`;
        btn.innerText = menuObj.category;
        
        btn.addEventListener("click", () => {
            // Manage Active State
            document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            
            // Render specific grid
            renderMenu(menuObj.category);
        });

        container.appendChild(btn);
    });
}

function renderMenu(categoryName) {
    const grid = document.getElementById("menu-grid");
    
    // Quick trick to re-trigger the CSS animation
    grid.style.animation = 'none';
    grid.offsetHeight; /* trigger reflow */
    grid.style.animation = null; 

    grid.innerHTML = ""; // Clear existing cards

    const targetCategory = businessConfig.menu.find(cat => cat.category === categoryName);
    
    if (!targetCategory || targetCategory.items.length === 0) {
        grid.innerHTML = "<p>No items found for this category.</p>";
        return;
    }

    // Official WhatsApp SVG Icon String
    const waIconSvg = `
        <svg class="wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
    `;

    targetCategory.items.forEach(item => {
        const dietClass = item.isVeg ? "diet-veg" : "diet-nonveg";
        const dietTitle = item.isVeg ? "Vegetarian" : "Non-Vegetarian";

        const card = document.createElement("article");
        card.className = "menu-card";

        card.innerHTML = `
            <div class="card-img-wrap">
                <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="300">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="diet-badge ${dietClass}" title="${dietTitle}"></span>
                </div>
                <p class="card-desc">${item.description}</p>
                <div class="card-footer">
                    <span class="card-price">${item.price}</span>
                    <button class="btn btn-whatsapp" onclick="orderItem('${item.name}')">
                        ${waIconSvg}
                        <span>Order Now</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Global scope function for onclick attribute dynamically created
window.orderItem = function(itemName) {
    const waUrl = generateWaLink(itemName);
    window.open(waUrl, '_blank');
};

function generateWaLink(itemName) {
    const baseUrl = `https://wa.me/${businessConfig.whatsappNumber}`;
    const text = `Hi ${businessConfig.brandName}, I would like to order: ${itemName}. Please let me know the availability!`;
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
}

function injectLocalSeoSchema() {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        "name": businessConfig.brandName,
        "image": "https://placehold.co/800x600/E05275/FFFDF9?text=Brand+Image",
        "telephone": businessConfig.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kalyan West",
            "addressLocality": "Kalyan",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "servesCuisine": "Maharashtrian",
        "priceRange": "₹"
    };

    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
}