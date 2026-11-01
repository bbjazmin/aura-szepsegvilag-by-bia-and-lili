// Tartalékkép, ha egy kép hivatkozása sérülne
const FALLBACK_IMG = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500";

// 54 db egyedi termék tömbje (JSON szerkezet)
const termekek = [
    { id: 1, nev: "Hidratáló Arckrém", marka: "CeraVe", ar: 4990, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500", akcio: true, leiras: "Mélyhidratáló formula hialuronsavval.", leirasBovebb: "Gazdag, nem zsíros állagú krém, amely egész napon át tartó hidratálást biztosít.", használat: "Vidd fel reggel és este a megtisztított arcbőrre." },
    { id: 2, nev: "Gyengéd Arctisztító Gél", marka: "CeraVe", ar: 3590, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500", akcio: false, leiras: "Kíméletes arctisztító normál és száraz bőrre.", leirasBovebb: "Eltávolítja a szennyeződéseket anélkül, hogy kiszárítaná a bőrt.", használat: "Masszírozd be a nedves bőrbe, majd öblítsd le." },
    { id: 3, nev: "Hialuronsav Szérum 2%", marka: "The Ordinary", ar: 4290, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", akcio: true, leiras: "Intenzív hidratálás több molekulamérettel.", leirasBovebb: "Könnyű szérum, amely mélyen feltölti a bőrt nedvességgel.", használat: "Vigyél fel néhány cseppet krém használata előtt." },
    { id: 4, nev: "Folyékony Alapozó SPF 20", marka: "Maybelline", ar: 5290, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214540242-5a2b3d2c2e1b?w=500", akcio: false, leiras: "Hosszan tartó, természetes fedés.", leirasBovebb: "Pehelykönnyű formula, amely egyenletes bőrfelszínt biztosít egész napon át.", használat: "Oszlasd el egyenletesen szivaccsal vagy ecsettel." },
    { id: 5, nev: "Dúsító Szempillaspirál", marka: "L'Oréal Paris", ar: 3890, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500", akcio: false, leiras: "Látványos dúsítás és hosszabbítás.", leirasBovebb: "Különleges keféje minden egyes pillát elér és szétválaszt.", használat: "Vidd fel a pillák tövétől a végekig cikk-cakk mozdulatokkal." },
    { id: 6, nev: "Matt Rózsaszín Rúzs", marka: "Maybelline", ar: 2990, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: true, leiras: "Intenzív szín és tartós matt hatás.", leirasBovebb: "Bársonyos textúrájú ajakrúzs, amely nem szárítja az ajkakat.", használat: "Vidd fel közvetlenül az ajkaidra." }
];

// Dinamikus termékgenerálás az 54 darabhoz
const kategóriák = ["Arcápolás", "Smink", "Hajápolás", "Testápolás", "Köröm", "Parfüm"];
const márkák = ["CeraVe", "The Ordinary", "L'Oréal Paris", "Maybelline", "Nivea", "Neutrogena", "Essence", "Essie", "Chanel", "Dior"];
const kepekByKat = {
    "Arcápolás": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
    "Smink": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
    "Hajápolás": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500",
    "Testápolás": "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500",
    "Köröm": "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500",
    "Parfüm": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500"
};

for (let i = 7; i <= 54; i++) {
    const kat = kategóriák[i % kategóriák.length];
    termekek.push({
        id: i,
        nev: `${kat} Termék ${i}`,
        marka: márkák[i % márkák.length],
        ar: Math.floor(Math.random() * 80 + 15) * 100 + 90,
        kategoria: kat,
        kep: kepekByKat[kat],
        akcio: i % 3 === 0,
        leiras: `Prémium minőségű ${kat.toLowerCase()} készítmény.`,
        leirasBovebb: `Ez a különleges ${kat.toLowerCase()} termék gondosan válogatott összetevőivel biztosítja a ragyogó megjelenést.`,
        használat: "Vidd fel a kívánt felületre, majd gyengéden masszírozd be."
    });
}

// Állapotváltozók
let kosar = [];
let kivalasztottKategoria = "Mind";

// SPA Navigáció (különböző "oldalak" közötti váltás rejtéssel/megjelenítéssel)
function navigalj(viewName) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
    document.getElementById(`view-${viewName}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Katalógus szűrése, rendezése és megjelenítése
function katalogusFrissitese() {
    const grid = document.getElementById("termek-grid");
    const kereses = document.getElementById("kereso-input").value.toLowerCase();
    const rendezes = document.getElementById("rendezes-select").value;

    let szurt = termekek.filter(t => {
        const katMatch = kivalasztottKategoria === "Mind" || t.kategoria === kivalasztottKategoria;
        const searchMatch = t.nev.toLowerCase().includes(kereses) || t.marka.toLowerCase().includes(kereses);
        return katMatch && searchMatch;
    });

    if (rendezes === "olcso") szurt.sort((a, b) => a.ar - b.ar);
    if (rendezes === "draga") szurt.sort((a, b) => b.ar - a.ar);
    if (rendezes === "nev") szurt.sort((a, b) => a.nev.localeCompare(b.nev));

    document.getElementById("talalatok-szama").innerText = `Megjelenítve: ${szurt.length} / ${termekek.length} termék`;

    if (szurt.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">Nincs találat.</p>`;
        return;
    }

    grid.innerHTML = szurt.map(t => `
        <div class="termek-card">
            <img src="${t.kep}" alt="${t.nev}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';" onclick="termekReszletek(${t.id})">
            <div class="card-padding">
                <span class="termek-marka">${t.marka}</span>
                <h3 class="termek-nev" onclick="termekReszletek(${t.id})">${t.nev}</h3>
                <p class="termek-leiras">${t.leiras}</p>
                <div class="card-footer">
                    <span class="termek-ar">${t.ar.toLocaleString('hu-HU')} Ft</span>
                    <button onclick="termekReszletek(${t.id})" class="details-btn">Részletek</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Kategória szűrés gombok kezelése
function kategoriaSzures(kat) {
    kivalasztottKategoria = kat;
    document.querySelectorAll('.kat-btn').forEach(btn => {
        if (btn.innerText.includes(kat) || (kat === 'Mind' && btn.innerText.includes('Összes'))) {
            btn.classList.add('aktiv');
        } else {
            btn.classList.remove('aktiv');
        }
    });
    navigalj('katalogus');
    katalogusFrissitese();
}

// Egyedi termék részletező adatlap megjelenítése
function termekReszletek(id) {
    const termek = termekek.find(t => t.id === id);
    const tartalom = document.getElementById("termek-reszlet-tartalom");

    tartalom.innerHTML = `
        <img src="${termek.kep}" alt="${termek.nev}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';">
        <div class="details-info">
            <span class="termek-marka">${termek.marka} • ${termek.kategoria}</span>
            <h2 style="font-size: 28px; margin: 10px 0;">${termek.nev}</h2>
            <div class="termek-ar" style="font-size: 24px;">${termek.ar.toLocaleString('hu-HU')} Ft</div>
            <p style="margin: 15px 0; line-height: 1.6;">${termek.leirasBovebb}</p>
            <div style="background: var(--primary-light); padding: 15px; border-radius: 10px; margin-top: 15px;">
                <strong>Használati útmutató:</strong>
                <p style="font-size: 13px; margin-top: 5px;">${termek.használat}</p>
            </div>
            <button onclick="kosarbaTesz(${termek.id})" class="add-to-cart-btn">🛒 Kosárba Teszem</button>
        </div>
    `;
    navigalj('reszletek');
}

// Kosár kezelő funkciók
function kosarbaTesz(id) {
    const termek = termekek.find(t => t.id === id);
    const benne = kosar.find(item => item.id === id);
    if (benne) {
        benne.db++;
    } else {
        kosar.push({ ...termek, db: 1 });
    }
    kosarFrissitese();
    alert(`${termek.nev} a kosárba került!`);
}

function kosarFrissitese() {
    const szamlalo = document.getElementById("kosar-szamlalo");
    const kosarLista = document.getElementById("kosar-lista");
    const reszosszegEl = document.getElementById("kosar-reszosszeg");
    const vegosszegEl = document.getElementById("kosar-vegosszeg");

    const osszDb = kosar.reduce((sum, item) => sum + item.db, 0);
    szamlalo.innerText = osszDb;

    if (kosar.length === 0) {
        kosarLista.innerHTML = `<p style="text-align: center; color: #94a3b8; padding: 20px;">A kosarad üres.</p>`;
        reszosszegEl.innerText = "0 Ft";
        vegosszegEl.innerText = "0 Ft";
        return;
    }

    let vegosszeg = 0;
    kosarLista.innerHTML = kosar.map(item => {
        const subtotal = item.ar * item.db;
        vegosszeg += subtotal;
        return `
            <div class="kosar-item">
                <div style="display: flex; gap: 15px; align-items: center;">
                    <img src="${item.kep}" alt="${item.nev}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';">
                    <div>
                        <h4>${item.nev}</h4>
                        <span style="font-size: 12px; color: #64748b;">${item.ar.toLocaleString('hu-HU')} Ft / db</span>
                    </div>
                </div>
                <div>
                    <button onclick="dbValtoztatas(${item.id}, -1)">-</button>
                    <span style="margin: 0 8px; font-weight: bold;">${item.db}</span>
                    <button onclick="dbValtoztatas(${item.id}, 1)">+</button>
                    <span style="margin-left: 15px; font-weight: bold;">${subtotal.toLocaleString('hu-HU')} Ft</span>
                </div>
            </div>
        `;
    }).join('');

    reszosszegEl.innerText = `${vegosszeg.toLocaleString('hu-HU')} Ft`;
    vegosszegEl.innerText = `${vegosszeg.toLocaleString('hu-HU')} Ft`;
}

function dbValtoztatas(id, valtozas) {
    const item = kosar.find(i => i.id === id);
    if (!item) return;
    item.db += valtozas;
    if (item.db <= 0) {
        kosar = kosar.filter(i => i.id !== id);
    }
    kosarFrissitese();
}

function kosarUritese() {
    kosar = [];
    kosarFrissitese();
}

// Első betöltéskor katalógus megjelenítése
katalogusFrissitese();
