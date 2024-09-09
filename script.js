document.addEventListener('DOMContentLoaded', function () {
    let cart = [];
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const paymentModal = document.getElementById('payment-modal');
    const closeButtons = document.querySelectorAll('.close');
    const checkoutButton = document.getElementById('checkout-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    // Función para alternar la visibilidad del menú móvil
    window.toggleMenu = function () {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    };

    // Cerrar el menú al seleccionar una opción o hacer clic fuera del menú
    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        }
    });

    // Añadir al carrito
    window.addToCart = function (name, price) {
        const item = { name, price };
        cart.push(item);
        updateCart();
        showCartModal();
    };

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            cartItems.innerHTML += `
                <li>
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                </li>
            `;
        });
        cartTotal.innerHTML = `$${total.toFixed(2)}`;
        document.getElementById('cart-count').textContent = cart.length;
    }

    function showCartModal() {
        cartModal.style.display = 'block';
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.modal').style.display = 'none';
        });
    });

    checkoutButton.addEventListener('click', function () {
        cartModal.style.display = 'none';
        paymentModal.style.display = 'block';
    });

    document.getElementById('payment-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Pago realizado con éxito. ¡Gracias por tu compra!');
        paymentModal.style.display = 'none';
        cart = [];
        updateCart();
    });

    window.closeModal = function (modalId) {
        document.getElementById(modalId).style.display = 'none';
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const isAuthenticated = localStorage.getItem('authenticated');
//     if (!isAuthenticated) {
//         window.location.href = 'login.html'; // Redirige a la página de login si no está autenticado
//     }
// });

// document.getElementById('logout-button').addEventListener('click', function () {
//     localStorage.removeItem('authenticated');
//     window.location.href = 'login.html'; // Redirige a la página de login
// });