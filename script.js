// 1. OLDALVÁLTÁS – megjeleníti a kiválasztott oldalt

        function switchPage(pageId) {

            document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));

            const target = document.getElementById('page-' + pageId);

            if (target) {

                target.classList.add('active');

                window.scrollTo({ top: 0, behavior: 'smooth' });

            }

            // Update nav active states

            document.querySelectorAll('.nav-link').forEach(link => {

                if (link.getAttribute('data-target') === pageId) {

                    link.classList.add('text-aura-600', 'font-bold');

                } else {

                    link.classList.remove('text-aura-600', 'font-bold');

                }

            });

        }

        // 2. MOBIL MENÜ – lenyitás és bezárás

        function toggleMobileMenu() {

            const menu = document.getElementById('mobile-menu');

            menu.classList.toggle('hidden');

        }

        // 3. ADATOK – a 10 műkörmös márka

        const nailBrands = [

            { id: 1, name: "Crystal Nails", technique: "Porcelán & Zselés Építés", price: "9 500 Ft", desc: "Professzionális alapanyagok, rendkívüli tartósság és prémium szalonminőség.", image: "https://placehold.co/600x400/eeb0d7/2a1222?text=Crystal+Nails" },

            { id: 2, name: "Marilyn Nails", technique: "Gél Lakk & Babyboomer", price: "7 900 Ft", desc: "Trendi színek, tökéletes terülés és ragyogó fények a tökéletes körmökért.", image: "https://placehold.co/600x400/fae8f3/2a1222?text=Marilyn+Nails" },

            { id: 3, name: "Perfect Nails", technique: "Builder Gel Erősítés", price: "8 500 Ft", desc: "Erősített saját köröm manikűr sablonos építéssel és modern díszítésekkel.", image: "https://placehold.co/600x400/f5d3e8/2a1222?text=Perfect+Nails" },

            { id: 4, name: "BrillBird", technique: "Luxus Ombre & Nail Art", price: "10 200 Ft", desc: "Exkluzív díszítőelemek, egyedi kézi festések és tartós zselés műköröm.", image: "https://placehold.co/600x400/e07ab9/ffffff?text=BrillBird" },

            { id: 5, name: "LacGel", technique: "3 Step Gél Lakk Technika", price: "6 900 Ft", desc: "Rugalmas és tartós gél lakk rendszer hatalmas színválasztékkal.", image: "https://placehold.co/600x400/cf4f9e/ffffff?text=LacGel" },

            { id: 6, name: "Canni", technique: "Hibrid Alapozás & Színek", price: "5 900 Ft", desc: "Kíméletes és tartós hibrid lakk technika természetes körmökre.", image: "https://placehold.co/600x400/b83482/ffffff?text=Canni" },

            { id: 7, name: "Moyra", technique: "Stamping & Műköröm", price: "7 500 Ft", desc: "Különleges nyomdázási technikák és professzionális zselék.", image: "https://placehold.co/600x400/9b266a/ffffff?text=Moyra" },

            { id: 8, name: "2M Beauty", technique: "Szakmai Zselé Rendszer", price: "8 200 Ft", desc: "Könnyen reszelhető, erős tartású zselék extrém formákhoz is.", image: "https://placehold.co/600x400/802157/ffffff?text=2M+Beauty" },

            { id: 9, name: "Rosalind", technique: "Quick Extension Gel", price: "6 500 Ft", desc: "Gyors építő zselé technika kezdőknek és haladóknak.", image: "https://placehold.co/600x400/6a1d48/ffffff?text=Rosalind" },

            { id: 10, name: "Venalisa", technique: "Diamond Shine Lakk", price: "6 800 Ft", desc: "Csillogó, gyémántfényű fedőlakkok és tartós gél lakkok.", image: "https://placehold.co/600x400/eeb0d7/2a1222?text=Venalisa" }

        ];

        // 4. ADATOK – műszempilla-technikák

        const lashTechniques = [

            { id: '1d', name: "1D Klasszikus Szempilla", price: "7 900 Ft", desc: "Természetes hatás, szálankénti technika minden saját szálra.", image: "https://placehold.co/600x400/f5d3e8/2a1222?text=1D+Klasszikus" },

            { id: '2d', name: "2D Dupla Szempilla", price: "8 900 Ft", desc: "Kicsit dúsabb, de még mindig finom és elegáns megjelenés.", image: "https://placehold.co/600x400/fae8f3/2a1222?text=2D+Szempilla" },

            { id: '3d', name: "3D Volume Szempilla", price: "9 900 Ft", desc: "A legnépszerűbb dúsabb hatású szempilla építési technika.", image: "https://placehold.co/600x400/eeb0d7/2a1222?text=3D+Volume" },

            { id: '4d', name: "4D Volume Szempilla", price: "10 900 Ft", desc: "Telt, sűrű és látványos tekintetet biztosító pilla.", image: "https://placehold.co/600x400/e07ab9/ffffff?text=4D+Volume" },

            { id: '5d', name: "5D Dús Volume", price: "11 900 Ft", desc: "Drámaiabb, sötétebb hatású szempillatő sűrűséggel.", image: "https://placehold.co/600x400/cf4f9e/ffffff?text=5D+Volume" },

            { id: '6d', name: "6D Orosz Volume", price: "12 900 Ft", desc: "Russian Volume technika a maximális tömörségért.", image: "https://placehold.co/600x400/b83482/ffffff?text=6D+Volume" },

            { id: 'mega', name: "Mega Volume Szempilla", price: "14 900 Ft", desc: "Extrém sűrűség, pihe-könnyű pillák a maximális színpadi hatásért.", image: "https://placehold.co/600x400/802157/ffffff?text=Mega+Volume" }

        ];

        // 5. ADATOK – webshoptermékek

        const shopProducts = [

            { id: 1, name: "Aura Lila Ragyogás Arckrém", category: "szepseg", price: 5400, image: "https://placehold.co/400x300/eeb0d7/2a1222?text=Arckrém" },

            { id: 2, name: "Crystal Nails Gél Lakk Készlet", category: "korom", price: 8900, image: "https://placehold.co/400x300/fae8f3/2a1222?text=Gél+Lakk+Szett" },

            { id: 3, name: "Marilyn Nails Builder Zselé", category: "korom", price: 4500, image: "https://placehold.co/400x300/f5d3e8/2a1222?text=Builder+Zselé" },

            { id: 4, name: "3D Műszempilla Kezdő Szett", category: "pilla", price: 7500, image: "https://placehold.co/400x300/e07ab9/ffffff?text=Pilla+Szett" },

            { id: 5, name: "C-Vitaminos Arcszérum", category: "szepseg", price: 6800, image: "https://placehold.co/400x300/cf4f9e/ffffff?text=Arcszérum" },

            { id: 6, name: "Sensitive Szempillaragasztó", category: "pilla", price: 4200, image: "https://placehold.co/400x300/802157/ffffff?text=Ragasztó" }

        ];

        let cart = [];

        // 6. KÁRTYÁK KÉSZÍTÉSE – műkörmös márkák és foglalási lista

        function renderNailBrands() {

            const grid = document.getElementById('nail-brands-grid');

            const select = document.getElementById('nail-technique-select');

            grid.innerHTML = '';

            select.innerHTML = '<option value="">Válassz a 10 márka közül...</option>';

            nailBrands.forEach(b => {

                // Grid card

                const card = document.createElement('div');

                card.className = "bg-white rounded-3xl shadow-md overflow-hidden border border-aura-100 flex flex-col justify-between";

                card.innerHTML = `

                    <div>

                        <img src="${b.image}" alt="${b.name}" class="w-full h-44 object-cover">

                        <div class="p-6">

                            <span class="text-xs font-semibold text-aura-600 uppercase tracking-wider">${b.technique}</span>

                            <h3 class="text-xl font-bold text-aura-dark mt-1 mb-2">${b.name}</h3>

                            <p class="text-gray-600 text-sm mb-4">${b.desc}</p>

                            <span class="text-lg font-bold text-aura-700">${b.price}</span>

                        </div>

                    </div>

                `;

                grid.appendChild(card);

                // Select option

                const opt = document.createElement('option');

                opt.value = b.name + ' - ' + b.technique;

                opt.innerText = `${b.name} (${b.technique}) - ${b.price}`;

                select.appendChild(opt);

            });

        }

        // 7. KÁRTYÁK KÉSZÍTÉSE – műszempilla-technikák

        function renderLashes() {

            const grid = document.getElementById('lash-grid');

            const select = document.getElementById('lash-technique-select');

            grid.innerHTML = '';

            select.innerHTML = '<option value="">Válassz szempilla technikát...</option>';

            lashTechniques.forEach(l => {

                const card = document.createElement('div');

                card.className = "bg-white rounded-3xl shadow-md overflow-hidden border border-aura-100 flex flex-col justify-between";

                card.innerHTML = `

                    <div>

                        <img src="${l.image}" alt="${l.name}" class="w-full h-40 object-cover">

                        <div class="p-5">

                            <h3 class="text-lg font-bold text-aura-dark mb-1">${l.name}</h3>

                            <p class="text-gray-600 text-xs mb-3">${l.desc}</p>

                            <span class="text-base font-bold text-aura-700">${l.price}</span>

                        </div>

                    </div>

                `;

                grid.appendChild(card);

                const opt = document.createElement('option');

                opt.value = l.name;

                opt.innerText = `${l.name} - ${l.price}`;

                select.appendChild(opt);

            });

        }

        // 8. WEBSHOP – termékkártyák megjelenítése

        function renderShop(filter = 'all') {

            const grid = document.getElementById('shop-products-grid');

            grid.innerHTML = '';

            const filtered = filter === 'all' ? shopProducts : shopProducts.filter(p => p.category === filter);

            filtered.forEach(p => {

                const card = document.createElement('div');

                card.className = "bg-white rounded-3xl shadow-md overflow-hidden border border-aura-100 flex flex-col justify-between";

                card.innerHTML = `

                    <div>

                        <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover">

                        <div class="p-6">

                            <span class="text-xs font-semibold text-aura-600 uppercase tracking-wider">${p.category.toUpperCase()}</span>

                            <h3 class="text-lg font-bold text-aura-dark mt-1 mb-2">${p.name}</h3>

                            <span class="text-lg font-bold text-aura-700">${p.price.toLocaleString()} Ft</span>

                        </div>

                    </div>

                    <div class="p-6 pt-0">

                        <button onclick="addToCart(${p.id})" class="w-full bg-aura-600 hover:bg-aura-700 text-white font-medium py-3 rounded-xl transition flex items-center justify-center space-x-2">

                            <i class="fa-solid fa-cart-plus"></i>

                            <span>Kosárba teszem</span>

                        </button>

                    </div>

                `;

                grid.appendChild(card);

            });

        }

        function filterShop(category, clickedButton) {

            document.querySelectorAll('.shop-filter-btn').forEach(btn => {

                btn.classList.remove('bg-aura-600', 'text-white');

                btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-200');

            });

            clickedButton.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-200');

            clickedButton.classList.add('bg-aura-600', 'text-white');

            renderShop(category);

        }

        // 9. KOSÁR – hozzáadás, darabszám, megjelenítés és törlés

        function addToCart(productId) {

            const product = shopProducts.find(p => p.id === productId);

            const existing = cart.find(i => i.id === productId);

            if (existing) {

                existing.qty += 1;

            } else {

                cart.push({ ...product, qty: 1 });

            }

            updateCartBadge();

            showNotification(`${product.name} a kosárba került!`);

        }

        function updateCartBadge() {

            const total = cart.reduce((sum, item) => sum + item.qty, 0);

            document.getElementById('cart-badge').innerText = total;

            renderCartView();

        }

        function renderCartView() {

            const container = document.getElementById('cart-items-list');

            const wrapper = document.getElementById('checkout-form-wrapper');

            const successMsg = document.getElementById('order-success-msg');

            successMsg.classList.add('hidden');

            container.innerHTML = '';

            if (cart.length === 0) {

                container.innerHTML = `<p class="text-center text-gray-500 py-8">A kosarad jelenleg üres.</p>`;

                wrapper.classList.add('hidden');

                return;

            }

            wrapper.classList.remove('hidden');

            let totalSum = 0;

            cart.forEach((item, index) => {

                totalSum += item.price * item.qty;

                const row = document.createElement('div');

                row.className = "flex items-center justify-between bg-gray-50 p-4 rounded-2xl";

                row.innerHTML = `

                    <div class="flex items-center space-x-4">

                        <img src="${item.image}" class="w-14 h-14 object-cover rounded-xl">

                        <div>

                            <h4 class="font-bold text-aura-dark text-sm">${item.name}</h4>

                            <p class="text-xs text-gray-500">${item.price.toLocaleString()} Ft x ${item.qty}</p>

                        </div>

                    </div>

                    <div class="flex items-center space-x-4">

                        <span class="font-bold text-aura-700">${(item.price * item.qty).toLocaleString()} Ft</span>

                        <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 p-2"><i class="fa-solid fa-trash"></i></button>

                    </div>

                `;

                container.appendChild(row);

            });

            const totalRow = document.createElement('div');

            totalRow.className = "flex justify-between items-center pt-4 border-t border-gray-200 font-bold text-lg text-aura-dark";

            totalRow.innerHTML = `<span>Összesen:</span><span class="text-aura-700">${totalSum.toLocaleString()} Ft</span>`;

            container.appendChild(totalRow);

        }

        function removeFromCart(index) {

            cart.splice(index, 1);

            updateCartBadge();

        }

        function resetCart() {

            cart = [];

            updateCartBadge();

        }

        // 10. ELLENŐRZÉS – név és telefonszám

        function isValidName(name) {

            return /^[a-zA-ZÁÉÍÓÖŐÚÜŰáéíóöőúüű\s]+$/.test(name.trim());

        }

        function isValidPhone(phone) {

            const clean = phone.replace(/\s+/g, '');

            return (clean.startsWith('06') || clean.startsWith('+36')) && clean.length >= 11;

        }

        // Nail booking submit

        function handleNailBookingSubmit(event) {

            event.preventDefault();

            const name = document.getElementById('nail-name').value;

            const phone = document.getElementById('nail-phone').value;

            const tech = document.getElementById('nail-technique-select').value;

            const date = document.getElementById('nail-date').value;

            const time = document.getElementById('nail-time').value;

            let hasErr = false;

            const nameErr = document.getElementById('nail-name-err');

            if (!isValidName(name)) { nameErr.classList.remove('hidden'); hasErr = true; } else { nameErr.classList.add('hidden'); }

            const phoneErr = document.getElementById('nail-phone-err');

            if (!isValidPhone(phone)) { phoneErr.classList.remove('hidden'); hasErr = true; } else { phoneErr.classList.add('hidden'); }

            if (hasErr) return;

            const box = document.getElementById('nail-success-msg');

            document.getElementById('nail-success-text').innerText = `Köszönjük, ${name}! Sikeresen lefoglaltad a következőt: ${tech} időpontra: ${date} (${time}). Telefonszám: ${phone}`;

            box.classList.remove('hidden');

            document.getElementById('nail-booking-form').reset();

        }

        // Lash booking submit

        function handleLashBookingSubmit(event) {

            event.preventDefault();

            const name = document.getElementById('lash-name').value;

            const phone = document.getElementById('lash-phone').value;

            const tech = document.getElementById('lash-technique-select').value;

            const date = document.getElementById('lash-date').value;

            const time = document.getElementById('lash-time').value;

            let hasErr = false;

            const nameErr = document.getElementById('lash-name-err');

            if (!isValidName(name)) { nameErr.classList.remove('hidden'); hasErr = true; } else { nameErr.classList.add('hidden'); }

            const phoneErr = document.getElementById('lash-phone-err');

            if (!isValidPhone(phone)) { phoneErr.classList.remove('hidden'); hasErr = true; } else { phoneErr.classList.add('hidden'); }

            if (hasErr) return;

            const box = document.getElementById('lash-success-msg');

            document.getElementById('lash-success-text').innerText = `Köszönjük, ${name}! Sikeresen lefoglaltad a következőt: ${tech} időpontra: ${date} (${time}). Telefonszám: ${phone}`;

            box.classList.remove('hidden');

            document.getElementById('lash-booking-form').reset();

        }

        // 13. MEGRENDELÉS – adatok ellenőrzése és visszajelzés

        function handleCheckoutSubmit(event) {

            event.preventDefault();

            const name = document.getElementById('order-name').value;

            const phone = document.getElementById('order-phone').value;

            const email = document.getElementById('order-email').value;

            const address = document.getElementById('order-address').value;

            let hasErr = false;

            const nameErr = document.getElementById('order-name-err');

            if (!isValidName(name)) { nameErr.classList.remove('hidden'); hasErr = true; } else { nameErr.classList.add('hidden'); }

            const phoneErr = document.getElementById('order-phone-err');

            if (!isValidPhone(phone)) { phoneErr.classList.remove('hidden'); hasErr = true; } else { phoneErr.classList.add('hidden'); }

            if (hasErr) return;

            document.getElementById('cart-items-list').classList.add('hidden');

            document.getElementById('checkout-form-wrapper').classList.add('hidden');

            const successBox = document.getElementById('order-success-msg');

            document.getElementById('order-success-text').innerText = `Kedves ${name}! Rendelésed sikeresen rögzítettük. Cím: ${address}. Az e-mail értesítést elküldtük ide: ${email}.`;

            successBox.classList.remove('hidden');

        }

        function showNotification(msg) {

            const n = document.createElement('div');

            n.className = "fixed bottom-5 right-5 bg-aura-dark text-white px-6 py-3 rounded-2xl shadow-xl z-50 flex items-center space-x-3";

            n.innerHTML = `<i class="fa-solid fa-check text-aura-400"></i><span>${msg}</span>`;

            document.body.appendChild(n);

            setTimeout(() => n.remove(), 3000);

        }

        // 14. INDÍTÁS – az adatok megjelenítése az oldal betöltésekor

        window.onload = function() {

            renderNailBrands();

            renderLashes();

            renderShop('all');

        }
