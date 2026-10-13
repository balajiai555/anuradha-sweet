// Main Application Script for Anuradha Sweet & Restaurant
// WhatsApp Hotline: 9609657777

const STORE_WHATSAPP = "919609657777"; // International format for wa.me
let currentCategory = "all";
let searchQuery = "";
let cart = [];

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderCategoryPills();
  renderMenu();
  setupEventListeners();
  updateCartUI();
});

// Load cart from LocalStorage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("anuradha_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load cart", e);
    cart = [];
  }
}

// Save cart to LocalStorage
function saveCartToStorage() {
  try {
    localStorage.setItem("anuradha_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart", e);
  }
}

// Render Category Filter Pills
function renderCategoryPills() {
  const container = document.getElementById("categoryPillsContainer");
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map(cat => `
    <button class="btn-filter-pill ${cat.id === currentCategory ? 'active' : ''}" data-cat-id="${cat.id}">
      <i class="fa-solid ${cat.icon}"></i>
      ${cat.name}
    </button>
  `).join("");

  container.querySelectorAll(".btn-filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategory = btn.getAttribute("data-cat-id");
      container.querySelectorAll(".btn-filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu();
    });
  });
}

// Render Menu Cards
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const countIndicator = document.getElementById("menuItemCount");
  if (!grid) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (countIndicator) {
    countIndicator.innerText = `Showing ${filtered.length} delicious item${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="p-5 bg-white rounded-4 shadow-sm border border-warning">
          <i class="fa-solid fa-cookie-bite fa-3x text-warning mb-3"></i>
          <h4 class="text-danger fw-bold">No sweets or dishes found</h4>
          <p class="text-muted">Try searching with a different term or select another category.</p>
          <button class="btn btn-gold mt-2" onclick="resetFilters()">View All Items</button>
        </div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const defaultOption = item.options[0];
    return `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="product-card" data-item-id="${item.id}">
          <div class="product-img-container">
            <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'">
            ${item.badge ? `<span class="badge-item">${item.badge}</span>` : ''}
            <div class="veg-icon" title="100% Pure Vegetarian"></div>
          </div>
          <div class="product-body">
            <h3 class="product-title">${item.name}</h3>
            <p class="product-desc">${item.description}</p>
            
            <div class="weight-selector">
              <label class="form-label small text-muted mb-1 fw-bold">Select Portion / Weight:</label>
              <select class="form-select option-select" data-item-id="${item.id}">
                ${item.options.map((opt, idx) => `
                  <option value="${idx}" data-price="${opt.price}">${opt.label} — ₹${opt.price}</option>
                `).join('')}
              </select>
            </div>

            <div class="product-footer">
              <div class="product-price" id="price-display-${item.id}">
                ₹${defaultOption.price}
              </div>
              <div class="product-actions">
                <button class="btn-add-cart" onclick="handleAddToCart('${item.id}')" title="Add to Cart">
                  <i class="fa-solid fa-plus"></i> Add
                </button>
                <button class="btn-quick-wa" onclick="handleQuickWhatsAppOrder('${item.id}')" title="Order directly on WhatsApp">
                  <i class="fa-brands fa-whatsapp"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach change listener for option select dropdowns
  grid.querySelectorAll(".option-select").forEach(select => {
    select.addEventListener("change", (e) => {
      const itemId = e.target.getAttribute("data-item-id");
      const selectedOption = e.target.selectedOptions[0];
      const price = selectedOption.getAttribute("data-price");
      const priceDisplay = document.getElementById(`price-display-${itemId}`);
      if (priceDisplay) {
        priceDisplay.innerText = `₹${price}`;
      }
    });
  });
}

function resetFilters() {
  currentCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  renderCategoryPills();
  renderMenu();
}

// Add Item to Cart
function handleAddToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const card = document.querySelector(`.product-card[data-item-id="${itemId}"]`);
  const select = card ? card.querySelector(".option-select") : null;
  const optIndex = select ? parseInt(select.value, 10) : 0;
  const option = item.options[optIndex] || item.options[0];

  const cartItemId = `${item.id}-${option.label.replace(/\s+/g, '')}`;
  const existing = cart.find(ci => ci.cartItemId === cartItemId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      cartItemId: cartItemId,
      id: item.id,
      name: item.name,
      optionLabel: option.label,
      price: option.price,
      image: item.image,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added ${item.name} (${option.label}) to cart!`);
}

// Update Cart UI (Badges, Drawer)
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update navbar & floating badges
  const navBadge = document.getElementById("navCartCount");
  const floatBadge = document.getElementById("floatCartCount");
  if (navBadge) navBadge.innerText = totalItems;
  if (floatBadge) floatBadge.innerText = totalItems;

  // Render Drawer list
  const container = document.getElementById("cartItemsContainer");
  const totalAmountElem = document.getElementById("cartTotalAmount");
  const checkoutBtn = document.getElementById("btnProceedCheckout");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="fa-solid fa-basket-shopping fa-3x text-muted mb-3" style="opacity: 0.4;"></i>
        <h5 class="text-secondary fw-bold">Your cart is empty</h5>
        <p class="small text-muted">Add some pure desi ghee sweets or restaurant meals to start ordering!</p>
      </div>
    `;
    if (totalAmountElem) totalAmountElem.innerText = "₹0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;
  if (totalAmountElem) totalAmountElem.innerText = `₹${totalPrice.toLocaleString('en-IN')}`;

  container.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=150&q=80'">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-portion">${item.optionLabel} • ₹${item.price} each</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="cart-qty-btn" onclick="updateItemQuantity('${item.cartItemId}', -1)">-</button>
        <span class="cart-qty-val">${item.quantity}</span>
        <button class="cart-qty-btn" onclick="updateItemQuantity('${item.cartItemId}', 1)">+</button>
      </div>
      <button class="btn btn-link text-danger p-0 ms-2" onclick="removeCartItem('${item.cartItemId}')" title="Remove item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");
}

// Modify item quantity
function updateItemQuantity(cartItemId, delta) {
  const itemIndex = cart.findIndex(ci => ci.cartItemId === cartItemId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  saveCartToStorage();
  updateCartUI();
}

// Remove item completely
function removeCartItem(cartItemId) {
  cart = cart.filter(ci => ci.cartItemId !== cartItemId);
  saveCartToStorage();
  updateCartUI();
}

// Clear Entire Cart
function clearCart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    saveCartToStorage();
    updateCartUI();
  }
}

// Direct WhatsApp order for single item
function handleQuickWhatsAppOrder(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const card = document.querySelector(`.product-card[data-item-id="${itemId}"]`);
  const select = card ? card.querySelector(".option-select") : null;
  const optIndex = select ? parseInt(select.value, 10) : 0;
  const option = item.options[optIndex] || item.options[0];

  const msg = 
`Namaste Anuradha Sweet & Restaurant! 🪔
I would like to order:

*Item:* ${item.name}
*Portion / Size:* ${option.label}
*Price:* ₹${option.price}
*Quantity:* 1

Please let me know availability and delivery/pickup details!`;

  const waUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
}

// Complete Cart WhatsApp Checkout
function submitWhatsAppOrder(event) {
  event.preventDefault();
  if (cart.length === 0) return;

  const name = document.getElementById("orderCustomerName")?.value.trim() || "Guest Customer";
  const phone = document.getElementById("orderCustomerPhone")?.value.trim() || "";
  const orderType = document.getElementById("orderTypeSelect")?.value || "Delivery";
  const address = document.getElementById("orderAddress")?.value.trim() || "Kaptanganj Local Area";
  const note = document.getElementById("orderNote")?.value.trim() || "";

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let itemsList = cart.map((item, index) => {
    return `${index + 1}. *${item.name}* (${item.optionLabel})\n   Qty: ${item.quantity} x ₹${item.price} = ₹${item.quantity * item.price}`;
  }).join("\n\n");

  let msg = 
`*NEW ORDER — ANURADHA SWEET & RESTAURANT* 🪔
_Kaptanganj, Kushinagar_
----------------------------------
*Order Details:*
${itemsList}

----------------------------------
*Grand Total:* ₹${totalAmount.toLocaleString('en-IN')}
----------------------------------
*Customer Information:*
• *Name:* ${name}
• *Phone:* ${phone || 'Same as WhatsApp'}
• *Order Type:* ${orderType}
• *Address / Details:* ${address}
${note ? `• *Special Note:* ${note}` : ''}
----------------------------------
_Kindly confirm this order and share preparation/delivery time._`;

  const waUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");

  // Close modal and offcanvas
  const modalElem = document.getElementById("checkoutModal");
  if (modalElem) {
    const modalInstance = bootstrap.Modal.getInstance(modalElem);
    if (modalInstance) modalInstance.hide();
  }
}

// Show Toast Notification
function showToast(message) {
  const toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) return;

  const toastId = `toast-${Date.now()}`;
  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center text-white toast-custom border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="fa-solid fa-circle-check text-warning"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML("beforeend", toastHtml);
  const toastElement = document.getElementById(toastId);
  if (toastElement) {
    const bsToast = new bootstrap.Toast(toastElement, { delay: 3000 });
    bsToast.show();
    toastElement.addEventListener("hidden.bs.toast", () => toastElement.remove());
  }
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });
  }

  const checkoutForm = document.getElementById("checkoutOrderForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", submitWhatsAppOrder);
  }

  // Explicitly initialize Hero Carousel with automatic 5s cycling
  const heroCarouselElem = document.getElementById("heroCarousel");
  if (heroCarouselElem && typeof bootstrap !== "undefined") {
    const heroCarousel = new bootstrap.Carousel(heroCarouselElem, {
      interval: 5000,
      ride: "carousel",
      pause: false,
      wrap: true,
      touch: true
    });
    heroCarousel.cycle();
  }
}
