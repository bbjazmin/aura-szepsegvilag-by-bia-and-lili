// Tartalékkép hiba esetére
const FALLBACK_IMG = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500";

const termekek = [
    {
        "id": 1,
        "nev": "Hidratáló Arctisztító",
        "marka": "CeraVe",
        "ar": 4290,
        "kategoria": "Arcápolás",
        "kep": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=700",
        "akcio": false,
        "leiras": "Gyengéd tisztítás a mindennapi arcápoláshoz.",
        "leirasBovebb": "Kíméletes arctisztító, amely segít eltávolítani a napi szennyeződéseket, miközben támogatja a bőr komfortérzetét.",
        "használat": "Nedves bőrön habosítsd fel, majd alaposan öblítsd le."
    },
    {
        "id": 2,
        "nev": "Hialuronsavas Hidratáló Szérum",
        "marka": "The Ordinary",
        "ar": 5490,
        "kategoria": "Arcápolás",
        "kep": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=700",
        "akcio": true,
        "leiras": "Könnyű szérum a hidratált, puha bőrért.",
        "leirasBovebb": "Hialuronsavat tartalmazó arcszérum, amely segít megőrizni a bőr nedvességtartalmát és rugalmas érzetét.",
        "használat": "Néhány cseppet vigyél fel tiszta, enyhén nedves arcbőrre, majd használd a hidratálókrémedet."
    },
    {
        "id": 3,
        "nev": "Micellás Arctisztító Víz",
        "marka": "Garnier",
        "ar": 2690,
        "kategoria": "Arcápolás",
        "kep": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
        "akcio": false,
        "leiras": "Sminkeltávolítás egyszerűen és kíméletesen.",
        "leirasBovebb": "Micellás arctisztító a napi szennyeződések és a smink eltávolításához. Praktikus része lehet az esti arcápolási rutinnak.",
        "használat": "Itass át vele egy vattakorongot, majd gyengéden töröld át az arcot."
    },
    {
        "id": 4,
        "nev": "Sky High Szempillaspirál",
        "marka": "Maybelline",
        "ar": 4990,
        "kategoria": "Smink",
        "kep": "https://images.unsplash.com/photo-1631214540242-5a2b3d2c2e1b?w=700",
        "akcio": true,
        "leiras": "Hosszabbnak és hangsúlyosabbnak látszó pillák.",
        "leirasBovebb": "A Sky High szempillaspirál rugalmas keféje segít a pillák szétválasztásában és látványos kiemelésében.",
        "használat": "A pillák tövétől a végek felé haladva, finom mozdulatokkal vidd fel."
    },
    {
        "id": 5,
        "nev": "True Match Folyékony Alapozó",
        "marka": "L'Oréal Paris",
        "ar": 5490,
        "kategoria": "Smink",
        "kep": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=700",
        "akcio": false,
        "leiras": "Természetes hatású, egyenletes fedés.",
        "leirasBovebb": "Könnyed folyékony alapozó, amely segít egységesíteni az arcbőr megjelenését. Több árnyalatban elérhető.",
        "használat": "Kis mennyiséget oszlass el az arcon ecsettel, szivaccsal vagy tiszta ujjakkal."
    },
    {
        "id": 6,
        "nev": "Fényes Ajakolaj",
        "marka": "Essence",
        "ar": 1790,
        "kategoria": "Smink",
        "kep": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=700",
        "akcio": false,
        "leiras": "Ragyogó fény és kellemes viselet az ajkakon.",
        "leirasBovebb": "Könnyed ajakolaj, amely fényes megjelenést kölcsönöz az ajkaknak, és önmagában vagy rúzs fölött is használható.",
        "használat": "Az applikátorral egyenletesen vidd fel az ajkakra."
    },
    {
        "id": 7,
        "nev": "Papaya Hair Food Hajpakolás",
        "marka": "Garnier Fructis",
        "ar": 3490,
        "kategoria": "Hajápolás",
        "kep": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700",
        "akcio": true,
        "leiras": "Tápláló hajpakolás száraz, igénybevett hajra.",
        "leirasBovebb": "Papayás hajpakolás, amely segít puhábbá és könnyebben kezelhetővé tenni a haj hosszát.",
        "használat": "Hajmosás után oszlasd el a hajhosszon, hagyd hatni a csomagoláson jelzett ideig, majd öblítsd le."
    },
    {
        "id": 8,
        "nev": "Extraordinary Oil Hajápoló Olaj",
        "marka": "L'Oréal Paris Elseve",
        "ar": 4290,
        "kategoria": "Hajápolás",
        "kep": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=700",
        "akcio": false,
        "leiras": "Fényesebb, selymesebb tapintású hajért.",
        "leirasBovebb": "Könnyű hajápoló olaj, amely segít megszelídíteni a szálló hajszálakat és ápoltabb megjelenést adni a hajvégeknek.",
        "használat": "Kis mennyiséget dolgozz el a tenyeredben, majd simítsd a hajhosszra és a hajvégekre."
    },
    {
        "id": 9,
        "nev": "Argánolajos Sampon",
        "marka": "OGX",
        "ar": 3990,
        "kategoria": "Hajápolás",
        "kep": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
        "akcio": false,
        "leiras": "Kíméletes hajtisztítás ápoló összetevőkkel.",
        "leirasBovebb": "Argánolajjal készült sampon, amely tisztítja a hajat, és segít puhább tapintásúvá tenni.",
        "használat": "Vidd fel a nedves hajra, habosítsd fel, majd alaposan öblítsd ki."
    },
    {
        "id": 10,
        "nev": "Repair & Care Testápoló",
        "marka": "NIVEA",
        "ar": 2490,
        "kategoria": "Testápolás",
        "kep": "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=700",
        "akcio": true,
        "leiras": "Mindennapi hidratálás a száraz bőr ápolására.",
        "leirasBovebb": "Gazdag állagú testápoló, amely segít puhává és komfortossá tenni a száraz bőrt.",
        "használat": "Fürdés vagy zuhanyzás után masszírozd be a tiszta, száraz bőrbe."
    },
    {
        "id": 11,
        "nev": "Koncentrált Kézkrém",
        "marka": "Neutrogena",
        "ar": 1990,
        "kategoria": "Testápolás",
        "kep": "https://images.unsplash.com/photo-1617897903246-719242758050?w=700",
        "akcio": false,
        "leiras": "Ápolás a száraz, igénybevett kezeknek.",
        "leirasBovebb": "Koncentrált kézkrém, amelyből már kis mennyiség is elegendő a kézfej és az ujjak ápolásához.",
        "használat": "Egy kis mennyiséget masszírozz a tiszta kéz bőrébe, szükség szerint ismételd."
    },
    {
        "id": 12,
        "nev": "Deeply Nourishing Krémtusfürdő",
        "marka": "Dove",
        "ar": 1790,
        "kategoria": "Testápolás",
        "kep": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700",
        "akcio": false,
        "leiras": "Krémes tusfürdő a mindennapi tisztálkodáshoz.",
        "leirasBovebb": "Krémes állagú tusfürdő, amely kellemesen tisztítja a bőrt, és puha érzetet hagy maga után.",
        "használat": "Nedves bőrön habosítsd fel, majd öblítsd le."
    },
    {
        "id": 13,
        "nev": "Ballet Slippers Körömlakk",
        "marka": "essie",
        "ar": 3290,
        "kategoria": "Köröm",
        "kep": "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=700",
        "akcio": true,
        "leiras": "Finom, halvány rózsaszín árnyalat.",
        "leirasBovebb": "Elegáns, visszafogott körömlakkárnyalat, amely jól illik a letisztult, természetes hatású manikűrhöz.",
        "használat": "Tiszta, száraz körömre vigyél fel egy vagy két vékony réteget."
    },
    {
        "id": 14,
        "nev": "Gel Nail Colour Körömlakk",
        "marka": "Essence",
        "ar": 1490,
        "kategoria": "Köröm",
        "kep": "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=700",
        "akcio": false,
        "leiras": "Fényes hatású körömlakk többféle színben.",
        "leirasBovebb": "Könnyen felvihető körömlakk, amellyel egyszerűen készíthetsz színes, ápolt hatású manikűrt.",
        "használat": "Vékony rétegben vidd fel, majd hagyd teljesen megszáradni."
    },
    {
        "id": 15,
        "nev": "Hard as Nails Körömerősítő",
        "marka": "Sally Hansen",
        "ar": 2990,
        "kategoria": "Köröm",
        "kep": "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=700",
        "akcio": false,
        "leiras": "Ápoló alap a természetes körmökhöz.",
        "leirasBovebb": "Körömápoló készítmény, amely segít erősítő réteget képezni a köröm felszínén.",
        "használat": "A termék használati útmutatója szerint vidd fel tiszta, száraz körömre."
    },
    {
        "id": 16,
        "nev": "Cloud Eau de Parfum",
        "marka": "Ariana Grande",
        "ar": 16990,
        "kategoria": "Parfüm",
        "kep": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=700",
        "akcio": true,
        "leiras": "Édes, krémes és légies illatvilág.",
        "leirasBovebb": "Jellegzetes, édeskés illatkompozíció, amely különleges üvegével a parfümgyűjtemény dísze is lehet.",
        "használat": "Kis mennyiséget permetezz a bőrre, a szem és az arc környékét kerülve."
    },
    {
        "id": 17,
        "nev": "Red Temptation Eau de Parfum",
        "marka": "ZARA",
        "ar": 8990,
        "kategoria": "Parfüm",
        "kep": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=700",
        "akcio": false,
        "leiras": "Karakteres, meleg illat elegáns megjelenéssel.",
        "leirasBovebb": "Intenzív, különleges illatvilágú parfüm, amelyet esti alkalmakra és hétköznapi viselethez is választhatsz.",
        "használat": "Permetezd a pulzuspontokra, például a csuklóra vagy a nyak oldalára."
    },
    {
        "id": 18,
        "nev": "Cheirosa 62 Testpermet",
        "marka": "Sol de Janeiro",
        "ar": 9990,
        "kategoria": "Parfüm",
        "kep": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=700",
        "akcio": true,
        "leiras": "Édes, pisztáciás-karamellás illatjegyek.",
        "leirasBovebb": "A Cheirosa 62 jellegzetes, gourmand illatvilágú testpermet, amely frissítő illatrétegként használható.",
        "használat": "Permetezd a testre a kívánt mennyiségben, a szem és az arc környékét kerülve."
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
