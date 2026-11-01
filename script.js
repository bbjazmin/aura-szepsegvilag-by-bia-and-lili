// Tartalékkép hiba esetére
const FALLBACK_IMG = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500";

const termekek = [
    {
        "id": 1,
        "nev": "Hidratáló Arctisztító",
        "marka": "CeraVe",
        "ar": 4290,
        "kategoria": "Arcápolás",
        "kep": "https://g-image.beautyamora.com/BSCFCVE00004/BSCFCVE00004-001-20240306.jpg",
        "akcio": false,
        "leiras": "Krémes, gyengéd arctisztító normál és száraz bőrre, amely tisztítás közben a hidratáltság megőrzésére is figyel.",
        "leirasBovebb": "A CeraVe Hidratáló Arctisztító mindennapi használatra készült, különösen normál és száraz bőrre. Krémes, nem habzó állaga segít eltávolítani a szennyeződéseket anélkül, hogy a bőr tisztítás után kellemetlenül feszülő érzetű lenne. Ceramidokat és hialuronsavat tartalmazó formulája támogatja a bőr természetes védőrétegét és nedvességtartalmát. Arcra és testre is használható, így praktikus része lehet a napi bőrápolási rutinnak.",
        "használat": "Nedvesítsd be az arcod, gyengéden masszírozd a bőrbe a tisztítót, majd langyos vízzel öblítsd le. Kerüld a szem közvetlen környékét."
    },
    {
        "id": 2,
        "nev": "Sky High Szempillaspirál",
        "marka": "Maybelline",
        "ar": 4990,
        "kategoria": "Smink",
        "kep": "https://licilasicdn.s3.amazonaws.com/public/product_images/43863/gallery/original/932618297.jpg",
        "akcio": true,
        "leiras": "A Sky High spirál segít látványosan kiemelni és szétválasztani a szempillákat.",
        "leirasBovebb": "A Maybelline Lash Sensational Sky High szempillaspirál jellegzetes, rózsaszín tubusáról és rugalmas keféjéről ismert. A kialakítás célja, hogy a rövidebb pillákat is könnyebben elérje, miközben hosszabbnak és hangsúlyosabbnak látszó pillasort készíthetsz vele. Rétegezhető, ezért visszafogottabb nappali vagy erőteljesebb sminkhez is használható. A végeredmény a felvitt rétegek számától és a természetes pilláktól is függ.",
        "használat": "A kefét a pillák tövétől a végek felé húzd végig. Ha erősebb hatást szeretnél, az első réteg száradása után vigyél fel még egy vékony réteget."
    },
    {
        "id": 3,
        "nev": "Papaya Hair Food Hajpakolás",
        "marka": "Garnier Fructis",
        "ar": 3490,
        "kategoria": "Hajápolás",
        "kep": "https://www.hebe.com/on/demandware.static/-/Sites-PL_Master_Catalog/default/dwbc7dc32a/images/hi-res/485681_maska_na_poskozene_vlasy_400_ml__1_9705560_p.png",
        "akcio": true,
        "leiras": "Papayás hajpakolás, amely segít ápolni a száraz, igénybevett hajhosszt.",
        "leirasBovebb": "A Garnier Fructis Hair Food Papaya hajpakolás a száraz és sérültnek tűnő haj ápolására készült. Krémes állaga könnyen eloszlatható a hajhosszon, papayás illata pedig kellemesebbé teszi a hajápolási rutint. Hajpakolásként használva segít puhább tapintásúvá és könnyebben kifésülhetővé tenni a tincseket. A termékcsalád többféle módon is használható, ezért mindig igazodj a csomagoláson feltüntetett útmutatóhoz.",
        "használat": "Hajmosás után oszlasd el a nedves hajhosszon, hagyd hatni a csomagoláson jelzett ideig, majd alaposan öblítsd le. A hajtövekre csak akkor vidd fel, ha a termék útmutatója ezt javasolja."
    },
    {
        "id": 4,
        "nev": "Cloud Eau de Parfum",
        "marka": "Ariana Grande",
        "ar": 16990,
        "kategoria": "Parfüm",
        "kep": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736273799-1705960105-1687362669-ariana-grande-cloud-eau-de-parfum-64931c3273b83.jpg?crop=1xw%3A1xh%3Bcenter%2Ctop&resize=980%3A%2A",
        "akcio": true,
        "leiras": "Édeskés, légies illatkompozíció különleges, felhő formájú üvegben.",
        "leirasBovebb": "Az Ariana Grande Cloud Eau de Parfum nemcsak az illatáról, hanem jellegzetes, felhő formájú üvegéről is ismert. Illatvilágában édes, krémes és lágy jegyek találkoznak, így különleges, könnyen felismerhető karaktert képvisel. Az elegáns, játékos csomagolás miatt ajándéknak vagy parfümgyűjteménybe is mutatós darab. Az illat intenzitása és tartóssága a bőrtípustól és a használat módjától is függ.",
        "használat": "Kis mennyiséget permetezz a csuklóra vagy a nyak oldalára. Ne fújd közvetlenül az arcra vagy a szem környékére."
    }
];

// Globális állapot
let kosar = [];
let kivalasztottKategoria = "Mind";

// SPA Navigáció
function navigalj(viewName) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
    document.getElementById(`view-${viewName}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Katalógus frissítése, szűrése és rendezése
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

// Kategória szűrés
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

// Részletek nézet
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

// Kosár logika
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

// Kezdő inicializálás
katalogusFrissitese();
