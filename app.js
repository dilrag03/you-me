// --- PRODUCT DATA WITH REAL-WORLD IMAGES (UNSPLASH) ---
const products = [
    { id: 1, name: "Nike Air Force 1 '07", brand: "Nike", category: "Sneakers", price: 8495, isNew: true, imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Adidas Ultraboost Light", brand: "Adidas", category: "Sneakers", price: 16999, isNew: false, imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Jordan 4 Military Blue", brand: "Jordan", category: "Sneakers", price: 18395, isNew: true, imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Supreme Box Logo Tee", brand: "Supreme", category: "Streetwear", price: 12000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Stone Island Soft Shell", brand: "Stone Island", category: "Streetwear", price: 45000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "Levi's 501 Original", brand: "Levi's", category: "Streetwear", price: 4500, isNew: false, imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" },
    { id: 7, name: "A.P.C. Daniela Tote", brand: "A.P.C.", category: "Luxury", price: 14000, isNew: true, imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop" },
    { id: 8, name: "Off-White OOO Sneaker", brand: "Off-White", category: "Sneakers", price: 48000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=800&auto=format&fit=crop" },
    { id: 9, name: "Gucci Ace Sneaker", brand: "Gucci", category: "Luxury", price: 65000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop" },
    { id: 10, name: "Prada Re-Nylon Shirt", brand: "Prada", category: "Luxury", price: 85000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" },
    { id: 11, name: "Rolex Submariner Date", brand: "Rolex", category: "Luxury", price: 850000, isNew: true, imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" },
    { id: 12, name: "New Balance 990v6", brand: "New Balance", category: "Sneakers", price: 20000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop" },
    { id: 13, name: "Arc'teryx Beta LT", brand: "Arc'teryx", category: "Streetwear", price: 35000, isNew: true, imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop" },
    { id: 14, name: "Balenciaga Triple S", brand: "Balenciaga", category: "Luxury", price: 82000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1584735174965-48c48d4daf27?q=80&w=800&auto=format&fit=crop" },
    { id: 15, name: "Carhartt WIP Detroit", brand: "Carhartt", category: "Streetwear", price: 18000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1578587018452-892bace94f12?q=80&w=800&auto=format&fit=crop" },
    { id: 16, name: "Yeezy Boost 350 V2", brand: "Yeezy", category: "Sneakers", price: 22000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop" },
    { id: 17, name: "LV Keepall Bandoulière", brand: "Louis Vuitton", category: "Luxury", price: 210000, isNew: true, imageUrl: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop" },
    { id: 18, name: "FOG Essentials Hoodie", brand: "Fear of God", category: "Streetwear", price: 15000, isNew: false, imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
];

// --- ENRICH PRODUCT DATA ---
products.forEach(p => {
    p.images = [
        p.imageUrl,
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop", // Angle 2
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop"  // Angle 3
    ];
    p.description = `Experience unparalleled style and comfort with the ${p.name} by ${p.brand}. Crafted with premium materials and designed for the modern lifestyle, this exclusive piece is a must-have.`;
    p.rewardPoints = Math.floor(p.price / 100);
    p.reviews = [
        { user: "Aesthetic_God", rating: 5, comment: "Absolutely stunning piece. The quality is unmatched." },
        { user: "Minimal_Vibe", rating: 4, comment: "Great design and perfect fit." },
        { user: "FashionKilla", rating: 5, comment: "Grail status acquired." }
    ];
});


// --- STATE ---
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentSort = 'featured';

// --- DOM ELEMENTS ---
const productGrid = document.getElementById('product-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartIconBtn = document.getElementById('cart-icon-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartBadge = document.getElementById('cart-badge');
const wishlistBtn = document.getElementById('wishlist-btn');
const wishlistBadge = document.getElementById('wishlist-badge');
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutBtn = document.getElementById('close-checkout-btn');
const checkoutModalTotal = document.getElementById('checkout-modal-total');
const checkoutForm = document.getElementById('checkout-form');
const toastContainer = document.getElementById('toast-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');

// --- NEW DOM ELEMENTS ---
const productModal = document.getElementById('product-modal');
const productModalContent = document.getElementById('product-modal-content');
const closeProductModalBtn = document.getElementById('close-product-modal-btn');
const modalMainImg = document.getElementById('modal-main-img');
const modalThumbnails = document.getElementById('modal-thumbnails');
const modalBrand = document.getElementById('modal-brand');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalReviews = document.getElementById('modal-reviews');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
const modalWishlistBtn = document.getElementById('modal-wishlist-btn');

const pincodeInput = document.getElementById('pincode-input');
const checkPincodeBtn = document.getElementById('check-pincode-btn');
const pincodeResult = document.getElementById('pincode-result');

const checkoutPaymentState = document.getElementById('checkout-payment-state');
const checkoutSuccessState = document.getElementById('checkout-success-state');
const successRewardPoints = document.getElementById('success-reward-points');
const continueShoppingBtn = document.getElementById('continue-shopping-btn');

// --- FORMATTER ---
const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};

// --- RENDER LOGIC ---
function renderProducts() {
    let filtered = products;
    
    // Apply Filter
    if(currentFilter !== 'all') {
        filtered = products.filter(p => p.category === currentFilter);
    }
    
    // Apply Sort
    if(currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
    }

    productGrid.innerHTML = '';
    
    filtered.forEach((product, index) => {
        const isWishlisted = wishlist.includes(product.id);
        const card = document.createElement('div');
        
        card.className = 'product-card animate-flow3d group relative scroll-hidden flex flex-col';
        card.style.transitionDelay = `${(index % 3) * 100}ms`;
        
        card.innerHTML = `
            <div onclick="openProductModal(${product.id})" class="img-container relative h-[400px] mb-8 bg-gray1 overflow-hidden cursor-pointer">
                ${product.isNew ? '<span class="absolute top-6 left-6 text-dark text-[9px] font-semibold tracking-[0.2em] uppercase bg-white px-3 py-1.5 z-20">Just In</span>' : ''}
                
                <button onclick="toggleWishlist(${product.id}, event)" class="absolute top-6 right-6 z-20 heart-icon ${isWishlisted ? 'active' : ''} text-dark hover:scale-110 transition-transform duration-300 drop-shadow-md">
                    <svg class="w-5 h-5" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>

                <!-- Real World Image -->
                <img src="${product.imageUrl}" alt="${product.name}" class="product-img w-full h-full object-cover filter contrast-125 brightness-95 pointer-events-none" />
                
                <div class="absolute inset-0 bg-dark opacity-0 group-hover:opacity-10 transition duration-500 z-10 pointer-events-none"></div>
                
                <!-- Quick Add Button -->
                <button onclick="addToCart(${product.id}, event)" class="quick-add-btn absolute bottom-0 left-0 right-0 py-5 bg-dark text-white font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-blacktext transition-colors duration-300 z-20 flex justify-center items-center gap-3">
                    Add to Bag
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"></path></svg>
                </button>
            </div>
            
            <div class="relative z-10 flex flex-col justify-between pointer-events-none text-center px-4">
                <span class="text-[9px] text-graytext font-semibold tracking-[0.3em] uppercase mb-3">${product.brand}</span>
                <h3 class="text-sm font-sans font-medium text-dark tracking-wide mb-3">${product.name}</h3>
                <span class="text-sm font-serif italic text-graytext">${formatINR(product.price)}</span>
            </div>
        `;
        
        productGrid.appendChild(card);

        // 3D Tilt Effect applied specifically to the image container
        const imgContainer = card.querySelector('.img-container');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Subtle rotation calculation
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            imgContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            imgContainer.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

    initScrollAnimations();
}

// --- INTERACTION LOGIC ---

// Filters
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => {
            b.classList.remove('text-dark', 'border-dark');
            b.classList.add('text-graytext', 'border-transparent');
        });
        e.target.classList.remove('text-graytext', 'border-transparent');
        e.target.classList.add('text-dark', 'border-dark');
        
        currentFilter = e.target.dataset.filter;
        renderProducts();
    });
});

// Sort
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
});

// Wishlist
function toggleWishlist(id, event) {
    event.stopPropagation();
    const index = wishlist.indexOf(id);
    if(index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from Wishlist', 'info');
    } else {
        wishlist.push(id);
        showToast('Saved to Wishlist', 'info');
    }
    
    if(wishlist.length > 0) {
        wishlistBadge.textContent = wishlist.length;
        wishlistBadge.classList.remove('hidden');
    } else {
        wishlistBadge.classList.add('hidden');
    }
    
    const btn = event.currentTarget;
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => btn.style.transform = 'scale(1)', 200);
    
    renderProducts(); 
}

// Cart Functionality
function addToCart(productId, event) {
    if (event) {
        event.stopPropagation();
    }
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`Added ${product.name} to Bag`, 'info');
    
    const icon = document.querySelector('#cart-icon-btn svg');
    icon.style.transform = 'scale(1.2)';
    setTimeout(() => icon.style.transform = 'scale(1)', 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }

    if (cart.length === 0) {
        emptyCartMsg.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        cartItemsContainer.appendChild(emptyCartMsg);
        checkoutBtn.disabled = true;
    } else {
        emptyCartMsg.style.display = 'none';
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'flex items-center space-x-6 pb-6 border-b border-gray1 last:border-0';
            cartItemEl.innerHTML = `
                <div class="w-20 h-24 bg-gray1 flex items-center justify-center overflow-hidden">
                    <img src="${item.imageUrl}" class="w-full h-full object-cover filter contrast-125" />
                </div>
                <div class="flex-1">
                    <h4 class="text-xs font-semibold text-dark mb-1 tracking-wide">${item.name}</h4>
                    <div class="text-[11px] text-graytext font-serif italic mb-2">${formatINR(item.price)}</div>
                    <div class="text-[9px] font-medium tracking-[0.2em] uppercase text-graytext">QTY: ${item.quantity}</div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-graytext hover:text-dark transition p-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });
        checkoutBtn.disabled = false;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalEl.textContent = formatINR(total);
    checkoutModalTotal.textContent = formatINR(total);
}

// Sidebar & Modal Toggles
cartIconBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('translate-x-full');
});

closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
});

checkoutBtn.addEventListener('click', () => {
    if(cart.length > 0) {
        cartSidebar.classList.add('translate-x-full');
        checkoutModal.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('checkout-content').classList.remove('scale-95', 'opacity-0');
            document.getElementById('checkout-content').classList.add('scale-100', 'opacity-100');
        }, 10);
    }
});

closeCheckoutBtn.addEventListener('click', closeCheckout);

function closeCheckout() {
    document.getElementById('checkout-content').classList.remove('scale-100', 'opacity-100');
    document.getElementById('checkout-content').classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        checkoutModal.classList.add('hidden');
    }, 500);
}

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Calculate total reward points
    const totalPoints = cart.reduce((sum, item) => sum + (item.rewardPoints * item.quantity), 0);
    successRewardPoints.textContent = `+${totalPoints} Points`;
    
    // Transition to success state
    checkoutPaymentState.classList.add('hidden');
    checkoutSuccessState.classList.remove('hidden');
    checkoutSuccessState.classList.add('flex');
    
    // Empty cart behind the scenes
    cart = [];
    updateCartUI();
});

// Continue shopping resets modal
continueShoppingBtn.addEventListener('click', () => {
    closeCheckout();
    setTimeout(() => {
        checkoutSuccessState.classList.add('hidden');
        checkoutSuccessState.classList.remove('flex');
        checkoutPaymentState.classList.remove('hidden');
        checkoutForm.reset();
    }, 500);
});

// Minimalist Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    
    toast.className = `bg-dark text-white px-8 py-4 shadow-2xl transform translate-y-10 opacity-0 transition-all duration-500 flex items-center space-x-4 border border-dark text-[10px] font-bold tracking-[0.2em] uppercase`;
    toast.innerHTML = `<span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// --- PRODUCT MODAL LOGIC ---
let currentProductInModal = null;

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentProductInModal = product;

    // Populate data
    modalMainImg.src = product.images[0];
    modalBrand.textContent = product.brand;
    modalName.textContent = product.name;
    modalPrice.textContent = formatINR(product.price);
    modalDesc.textContent = product.description;

    // Populate thumbnails
    modalThumbnails.innerHTML = '';
    product.images.forEach((imgUrl, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgUrl;
        thumb.className = `w-20 h-24 object-cover filter contrast-125 cursor-pointer border-2 transition-colors ${index === 0 ? 'border-dark' : 'border-transparent hover:border-gray2'}`;
        thumb.onclick = () => {
            modalMainImg.style.opacity = '0';
            setTimeout(() => {
                modalMainImg.src = imgUrl;
                modalMainImg.style.opacity = '1';
            }, 150);
            Array.from(modalThumbnails.children).forEach(c => c.classList.replace('border-dark', 'border-transparent'));
            thumb.classList.replace('border-transparent', 'border-dark');
            thumb.classList.remove('hover:border-gray2');
        };
        modalThumbnails.appendChild(thumb);
    });

    // Populate reviews
    modalReviews.innerHTML = '';
    product.reviews.forEach(review => {
        const rDiv = document.createElement('div');
        rDiv.className = 'border-b border-gray1 pb-4 last:border-0';
        rDiv.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-dark">${review.user}</span>
                <div class="flex text-dark">
                    ${Array(review.rating).fill('<svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
                </div>
            </div>
            <p class="text-[11px] text-graytext italic">${review.comment}</p>
        `;
        modalReviews.appendChild(rDiv);
    });

    // Reset Pincode state
    pincodeInput.value = '';
    pincodeResult.classList.add('hidden');

    // Show modal
    productModal.classList.remove('hidden');
    setTimeout(() => {
        productModalContent.classList.remove('scale-95', 'opacity-0');
        productModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeProductModal() {
    productModalContent.classList.remove('scale-100', 'opacity-100');
    productModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        productModal.classList.add('hidden');
        currentProductInModal = null;
    }, 500);
}

closeProductModalBtn.addEventListener('click', closeProductModal);

// Add to Cart from Modal
modalAddToCartBtn.addEventListener('click', () => {
    if(currentProductInModal) {
        addToCart(currentProductInModal.id, null);
        closeProductModal();
    }
});

// Wishlist from Modal
modalWishlistBtn.addEventListener('click', (e) => {
    if(currentProductInModal) {
        toggleWishlist(currentProductInModal.id, e);
        // Toggle icon visually
        const svg = modalWishlistBtn.querySelector('svg');
        const isWishlisted = wishlist.includes(currentProductInModal.id);
        svg.setAttribute('fill', isWishlisted ? 'currentColor' : 'none');
    }
});

// Pincode logic
checkPincodeBtn.addEventListener('click', () => {
    const code = pincodeInput.value.trim();
    pincodeResult.classList.remove('hidden', 'text-dark', 'text-red-500');
    
    if(code.length === 6 && !isNaN(code)) {
        pincodeResult.textContent = "Delivery available within 2-3 business days.";
        pincodeResult.classList.add('text-dark');
    } else {
        pincodeResult.textContent = "Please enter a valid 6-digit pincode.";
        pincodeResult.classList.add('text-red-500');
    }
});

// --- SCROLL ANIMATIONS ---
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-hidden').forEach(el => {
        observer.observe(el);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    initScrollAnimations();
    
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/95');
            nav.classList.remove('bg-white/90');
        } else {
            nav.classList.remove('bg-white/95');
            nav.classList.add('bg-white/90');
        }
    });
});

// Expose functions globally for inline HTML handlers
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
window.removeFromCart = removeFromCart;
window.closeCheckout = closeCheckout;
window.openProductModal = openProductModal;
