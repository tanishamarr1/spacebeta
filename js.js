  const CONFIG = {
            whatsapp: '+18696610914', 
            formspreeId: 'xaqnloen', 
            email: 'spaceworldwidee@gmail.com' 
        };

       
        const PRODUCTS = [
            {
                id: 1,
                name: 'ORBIT VISION TEE',
                price: 45.00,
                image: '/spacebeta/files/space1.webp',
                description: 'Premium cotton blend',
                featured: true
            },
            {
                id: 2,
                name: 'SPACE CORE TEE',
                price: 48.00,
                image: '/spacebeta/public/space2.webp',
                description: 'Limited edition'
            },
            {
                id: 3,
                name: 'INTERSTELLAR LEGENDS TEE',
                price: 42.00,
                image: '/spacebeta/public/space3.webp',
                description: 'Oversized fit'
            },
            {
                id: 4,
                name: 'SPACE STATEMENT TEE',
                price: 45.00,
                image: '/spacebeta/public/space4.webp',
                description: 'Essential piece'
            },
            {
                id: 5,
                name: 'COSMIC RENAISSANCE TEE',
                price: 50.00,
                image: '/spacebeta/public/space5.webp',
                description: 'Premium quality'
            },
            {
                id: 6,
                name: 'VOID CLASSIC',
                price: 44.00,
                image: '/spacebeta/public/space1.webp',
                description: 'Comfort fit'
            }
        ];

       
        function createStars() {
            const container = document.getElementById('stars-container');
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.top = Math.random() * 100 + '%';
                star.style.left = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = Math.random() * 3 + 2 + 's';
                container.appendChild(star);
            }
        }

       
        function renderProducts() {
            const container = document.getElementById('products-container');
            container.innerHTML = PRODUCTS.map(product => `
                <div class="product-card bg-white/5 backdrop-blur-sm overflow-hidden border border-white/10 hover:border-white/30">
                    <div class="relative aspect-[3/4] overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy">
                        ${product.featured ? '<div class="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-bold tracking-wider">FEATURED</div>' : ''}
                    </div>
                    <div class="p-6 space-y-4">
                        <div>
                            <h3 class="text-xl font-bold tracking-wider mb-1">${product.name}</h3>
                            <p class="text-gray-400 text-sm">${product.description}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold">${product.price.toFixed(2)}</span>
                        </div>
                        <button onclick="buyWhatsApp('${product.name}', ${product.price})" class="w-full bg-white text-black py-3 font-semibold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            BUY ON WHATSAPP
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        
        function buyWhatsApp(name, price) {
            const message = `Hola! Estoy interesado en el producto: ${name} - ${price.toFixed(2)}`;
            window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        }

       
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            menu.classList.toggle('active');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }

        // Enviar formulario de contacto
        async function submitContactForm() {
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();
            const btn = document.getElementById('submit-btn');
            const status = document.getElementById('form-status');

            // Validación
            if (!name || !email || !message) {
                status.innerHTML = '<p class="text-red-400">Por favor completa todos los campos</p>';
                setTimeout(() => status.innerHTML = '', 3000);
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                status.innerHTML = '<p class="text-red-400">Por favor ingresa un email válido</p>';
                setTimeout(() => status.innerHTML = '', 3000);
                return;
            }

            btn.disabled = true;
            btn.innerHTML = 'SENDING...';
            status.innerHTML = '';

            try {
                const response = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                });

                if (response.ok) {
                    status.innerHTML = '<p class="text-green-400 font-semibold">✓ Message sent successfully!</p>';
                    document.getElementById('contact-name').value = '';
                    document.getElementById('contact-email').value = '';
                    document.getElementById('contact-message').value = '';
                    setTimeout(() => status.innerHTML = '', 5000);
                } else {
                    throw new Error('Failed to send');
                }
            } catch (error) {
                status.innerHTML = '<p class="text-red-400">Error sending message. Please try WhatsApp.</p>';
                setTimeout(() => status.innerHTML = '', 5000);
            } finally {
                btn.disabled = false;
                btn.innerHTML = `SEND MESSAGE
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>`;
            }
        }

        // Efecto scroll en navbar
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                navbar.style.backdropFilter = 'blur(16px)';
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = 'none';
            }
        });

        // Event listener para botón de menú móvil
        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

        // Cerrar menú móvil al hacer clic fuera
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('mobile-menu');
            const btn = document.getElementById('mobile-menu-btn');
            if (menu.classList.contains('active') && !menu.contains(e.target) && !btn.contains(e.target)) {
                toggleMobileMenu();
            }
        });

        // Enter en formulario
        document.getElementById('contact-message').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                submitContactForm();
            }
        });

        // ==================== INICIALIZACIÓN ====================
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            renderProducts();
            console.log('🚀 SPACE Landing Page loaded successfully!');
        });