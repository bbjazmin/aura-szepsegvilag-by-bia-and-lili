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
        "nev": "Hialuronsavas Hidratáló Szérum",
        "marka": "The Ordinary",
        "ar": 5490,
        "kategoria": "Arcápolás",
        "kep": "https://static.thcdn.com/productimg/original/14706551-2035064073540467.jpg",
        "akcio": true,
        "leiras": "Hialuronsavas arcszérum B5-provitaminnal a bőr hidratáltságának támogatására.",
        "leirasBovebb": "A The Ordinary Hyaluronic Acid 2% + B5 könnyű, vízbázisú szérum, amely többféle hialuronsav-formát és B5-provitamint tartalmaz. A hialuronsav segít megkötni a nedvességet, így a bőr hidratáltabbnak és teltebbnek tűnhet. Egyszerűen beilleszthető a reggeli vagy esti arcápolási rutinba, hidratálókrém alá rétegezve. Letisztult összetételű, könnyen kombinálható termék a mindennapi bőrápoláshoz.",
        "használat": "Tiszta, enyhén nedves bőrre vigyél fel néhány cseppet, finoman oszlasd el, majd használj hidratálókrémet. Ha irritációt tapasztalsz, hagyd abba a használatát."
    },
    {
        "id": 3,
        "nev": "Micellás Arctisztító Víz",
        "marka": "Garnier",
        "ar": 2690,
        "kategoria": "Arcápolás",
        "kep": "https://cdn11.bigcommerce.com/s-3pw1lrwx2n/images/stencil/1280x1280/products/9109/12068/603084454501__47583.1716535805.jpg?c=1",
        "akcio": false,
        "leiras": "Micellás arctisztító víz, amely segít eltávolítani a sminket és a napi szennyeződéseket.",
        "leirasBovebb": "A Garnier SkinActive Micellás Arctisztító Víz praktikus megoldás a napi arctisztításhoz és sminkeltávolításhoz. Micellái segítenek magukhoz vonzani a bőrön lévő szennyeződéseket és a sminkmaradványokat, így nincs szükség erős dörzsölésre. A klasszikus, rózsaszín kupakos változat érzékeny bőrre is készült. Használható az arc, az ajkak és a szem környékének tisztítására, a szemmel való közvetlen érintkezést kerülve.",
        "használat": "Önts egy keveset vattakorongra, majd finoman töröld át vele az arcot. A szem környékén óvatosan használd, és ha szükséges, öblítsd le."
    },
    {
        "id": 4,
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
        "id": 5,
        "nev": "True Match Folyékony Alapozó",
        "marka": "L'Oréal Paris",
        "ar": 5490,
        "kategoria": "Smink",
        "kep": "https://lilidrogerie.gr/image/cache/catalog/product-upload/3600522862406_1-700x700.jpg",
        "akcio": false,
        "leiras": "Folyékony alapozó természetes hatású fedéssel, többféle árnyalatban.",
        "leirasBovebb": "A L'Oréal Paris True Match alapozó a természetes hatású, egységes arcbőr megjelenését segíti. Folyékony állaga könnyen eldolgozható, ezért ecsettel, sminkszivaccsal vagy tiszta ujjakkal is felvihető. A termékcsalád több árnyalatban érhető el, így fontos a bőrtónushoz leginkább illő változat kiválasztása. Mindennapi sminkhez és alkalmi megjelenéshez is jól beilleszthető.",
        "használat": "Kis mennyiséget tegyél az arc közepére, majd egyenletesen dolgozd el kifelé haladva. A megfelelő árnyalatot természetes fényben érdemes kiválasztani."
    },
    {
        "id": 6,
        "nev": "Fényes Ajakolaj",
        "marka": "Essence",
        "ar": 1790,
        "kategoria": "Smink",
        "kep": "https://s13emagst.akamaized.net/products/78271/78270117/images/res_dcc7775a74ac87f474c987132d2bbbeb.jpg",
        "akcio": false,
        "leiras": "Fényes, enyhén színezett ajakolaj a ragyogó ajkakért.",
        "leirasBovebb": "Az Essence Hydra Kiss Lip Oil könnyed ajakápoló, amely fényes megjelenést ad az ajkaknak. Átlátszó, rózsaszínes csomagolása és praktikus applikátora miatt a táskában is könnyen elfér. Önmagában természetes hatású, fényes ajaksminkként viselhető, de rúzs fölé is felvihető. Ideális választás, ha egy gyorsan használható, ragyogó finishű ajakterméket keresel.",
        "használat": "Az applikátorral vigyél fel egy vékony réteget az ajkakra. Használat előtt és után zárd vissza gondosan a kupakot."
    },
    {
        "id": 7,
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
        "id": 8,
        "nev": "Extraordinary Oil Hajápoló Olaj",
        "marka": "L'Oréal Paris Elseve",
        "ar": 4290,
        "kategoria": "Hajápolás",
        "kep": "https://cdn.dmart.in/images/products/JUL140003752xx3JUL23_5_B.jpg",
        "akcio": false,
        "leiras": "Tápláló hajolaj, amely fényesebb és simább hatást adhat a hajhossznak.",
        "leirasBovebb": "A L'Oréal Paris Elseve Extraordinary Oil hajápoló olaj a haj puhaságának és fényének fokozására szolgál. Könnyű, olajos textúrája segít lesimítani a szálló hajszálakat, és ápoltabb megjelenést adhat a hajvégeknek. Kis mennyiség is elegendő lehet, ezért érdemes fokozatosan adagolni. Hajmosás után vagy száraz hajon is használható a termék saját útmutatójának megfelelően.",
        "használat": "Kis mennyiséget dörzsölj el a tenyeredben, majd oszlasd el a hajhosszon és a hajvégeken. Kerüld a túlzott mennyiséget, hogy a haj ne nehezedjen el."
    },
    {
        "id": 9,
        "nev": "Argánolajos Sampon",
        "marka": "OGX",
        "ar": 3990,
        "kategoria": "Hajápolás",
        "kep": "https://imgwlns.gumlet.io/images/products/367114-1.jpg",
        "akcio": false,
        "leiras": "Argánolajos sampon a haj tisztítására és puhább tapintásáért.",
        "leirasBovebb": "Az OGX Argan Oil of Morocco sampon jellegzetes türkiz flakonban kapható hajápoló termék. Argánolajat tartalmazó formulája a haj tisztítására készült, miközben segíthet puhább, fényesebb érzetet adni a hajnak. A sampon a rendszeres hajmosási rutin részeként használható, különösen akkor, ha a hajadnak extra ápolásra van szüksége. A hajápolás eredménye hajtípustól és a használt termékek kombinációjától is függ.",
        "használat": "Nedves hajra vigyél fel megfelelő mennyiséget, gyengéden habosítsd fel a fejbőrön, majd alaposan öblítsd ki. Szükség esetén ismételd meg."
    },
    {
        "id": 10,
        "nev": "Repair & Care Testápoló",
        "marka": "NIVEA",
        "ar": 2490,
        "kategoria": "Testápolás",
        "kep": "https://pwa-api.eva.ua/img/512/512/resize/3/5/358471_1_1753278237.jpg",
        "akcio": true,
        "leiras": "Gazdag testápoló a száraz bőr mindennapi hidratálásához.",
        "leirasBovebb": "A NIVEA Repair & Care testápoló a száraz és nagyon száraz bőr mindennapi ápolására készült. Krémes állaga könnyen eloszlatható, és segít csökkenteni a bőr száraz, húzódó érzetét. A termékcsalád hidratáló összetevőket, többek között glicerint és panthenolt tartalmazó változatokkal érhető el. Rendszeres használata kellemesen puhává teheti a bőrt.",
        "használat": "Zuhanyzás vagy fürdés után, tiszta és száraz bőrre vidd fel. Gyengéd, körkörös mozdulatokkal masszírozd be, amíg eloszlik."
    },
    {
        "id": 11,
        "nev": "Koncentrált Kézkrém",
        "marka": "Neutrogena",
        "ar": 1990,
        "kategoria": "Testápolás",
        "kep": "https://images.ctfassets.net/hziwb47cmkp3/4Jbp7DfUYiLZcIajWRk8be/41c9507fffe13a5ac0d3b7b42ff6be77/NTG_070501013007_US_NF_Hand_Cream_Fragrance_Free_2OZ_OOB1_600Wx600H.JPEG",
        "akcio": false,
        "leiras": "Koncentrált, glicerines kézkrém a száraz kézfej mindennapi ápolására.",
        "leirasBovebb": "A Neutrogena Norwegian Formula kézkrém koncentrált állagú, ezért már kis mennyiség is elegendő lehet belőle. Glicerint tartalmazó formulája segít ápolni a száraz, igénybevett kézbőrt, a bemutatott változat illatmentes. Praktikus kiszerelése könnyen elfér a táskában, így napközben is kéznél lehet. Különösen hasznos lehet gyakori kézmosás után, amikor a kéz bőre száraznak érződik.",
        "használat": "Egy kis mennyiséget oszlass el a kézfejen és az ujjakon, majd masszírozd be. Szükség szerint, kézmosás után is újra használhatod."
    },
    {
        "id": 12,
        "nev": "Deeply Nourishing Krémtusfürdő",
        "marka": "Dove",
        "ar": 1790,
        "kategoria": "Testápolás",
        "kep": "https://fr.britishessentials.com/cdn/shop/products/DoveDeeplyNourishingBodyWash720ml_1024x1024.jpg?v=1673245548",
        "akcio": false,
        "leiras": "Krémes Dove tusfürdő a mindennapi tisztálkodáshoz és bőrápoláshoz.",
        "leirasBovebb": "A Dove Deeply Nourishing krémtusfürdő selymes, krémes állagú termék a mindennapi zuhanyzáshoz. A formula tisztítja a bőrt, miközben segít megőrizni annak puha, komfortos érzetét. A Dove jellegzetes, letisztult csomagolása könnyen felismerhető, a nagyobb flakon pedig praktikus otthoni használatra. Kellemes választás lehet azoknak, akik a hagyományos tusfürdőknél krémesebb textúrát kedvelik.",
        "használat": "Nedves bőrre vagy fürdőszivacsra tegyél egy kis mennyiséget, habosítsd fel, majd alaposan öblítsd le."
    },
    {
        "id": 13,
        "nev": "Ballet Slippers Körömlakk",
        "marka": "essie",
        "ar": 3290,
        "kategoria": "Köröm",
        "kep": "https://media.ulta.com/i/ulta/2077627?fmt=auto&h=800&w=800",
        "akcio": true,
        "leiras": "Halvány, elegáns rózsaszín körömlakk a letisztult manikűrhöz.",
        "leirasBovebb": "Az essie Ballet Slippers az egyik legismertebb halvány rózsaszín árnyalat, amely finom, visszafogott megjelenést ad a körmöknek. A világos szín önmagában is szép, több vékony rétegben pedig erőteljesebb fedés érhető el. Klasszikus üvegcséje és széles ecsete megkönnyíti a felvitelt. Jó választás lehet hétköznapokra, elegáns alkalmakra vagy francia manikűr alapjaként.",
        "használat": "Tiszta, száraz körmökre vigyél fel egy vékony réteget, majd száradás után szükség esetén ismételd meg. A tartósabb eredményhez használhatsz fedőlakkot."
    },
    {
        "id": 14,
        "nev": "Gel Nail Colour Körömlakk",
        "marka": "Essence",
        "ar": 1490,
        "kategoria": "Köröm",
        "kep": "https://danaperfumerias.com/64559-large_default/essence-gel-nail-polish-esmalte-de-unas.jpg",
        "akcio": false,
        "leiras": "Fényes hatású Essence körömlakk pasztell rózsaszín árnyalatban.",
        "leirasBovebb": "Az Essence The Gel Nail Polish körömlakk a zselés hatású, fényes manikűr megjelenését idézi. A bemutatott pasztell rózsaszín árnyalat finom és könnyen kombinálható, ezért hétköznapi viselethez is illik. A praktikus ecsettel egyszerűen felvihető, a vékony rétegek pedig segítenek az egyenletesebb eredményben. A pontos színárnyalat a képernyő beállításaitól és a fényviszonyoktól eltérhet.",
        "használat": "Vigyél fel egy vékony réteget a tiszta körmökre, majd hagyd megszáradni. Erőteljesebb színhez használj még egy réteget."
    },
    {
        "id": 15,
        "nev": "Hard as Nails Körömerősítő",
        "marka": "Sally Hansen",
        "ar": 2990,
        "kategoria": "Köröm",
        "kep": "https://media.ulta.com/i/ulta/2523167?fmt=auto&h=1080&w=1080",
        "akcio": false,
        "leiras": "Körömerősítő ápoló lakk a természetes körmök mindennapi védelméhez.",
        "leirasBovebb": "A Sally Hansen Advanced Hard as Nails körömerősítő ápoló réteget képez a köröm felszínén. Használható önmagában, vagy a körömápolási rutin részeként, amikor szeretnéd rendezettebbé és ápoltabbá tenni a körmeid megjelenését. A halvány rózsaszín árnyalatú formula és az ecsetes kiszerelés egyszerű felvitelt tesz lehetővé. Mindig kövesd a termék címkéjén szereplő használati gyakoriságot.",
        "használat": "A csomagoláson található útmutató szerint vidd fel tiszta, száraz körömre. A javasolt időközönként frissítsd a réteget."
    },
    {
        "id": 16,
        "nev": "Cloud Eau de Parfum",
        "marka": "Ariana Grande",
        "ar": 16990,
        "kategoria": "Parfüm",
        "kep": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736273799-1705960105-1687362669-ariana-grande-cloud-eau-de-parfum-64931c3273b83.jpg?crop=1xw%3A1xh%3Bcenter%2Ctop&resize=980%3A%2A",
        "akcio": true,
        "leiras": "Édeskés, légies illatkompozíció különleges, felhő formájú üvegben.",
        "leirasBovebb": "Az Ariana Grande Cloud Eau de Parfum nemcsak az illatáról, hanem jellegzetes, felhő formájú üvegéről is ismert. Illatvilágában édes, krémes és lágy jegyek találkoznak, így különleges, könnyen felismerhető karaktert képvisel. Az elegáns, játékos csomagolás miatt ajándéknak vagy parfümgyűjteménybe is mutatós darab. Az illat intenzitása és tartóssága a bőrtípustól és a használat módjától is függ.",
        "használat": "Kis mennyiséget permetezz a csuklóra vagy a nyak oldalára. Ne fújd közvetlenül az arcra vagy a szem környékére."
    },
    {
        "id": 17,
        "nev": "Red Temptation Eau de Parfum",
        "marka": "ZARA",
        "ar": 8990,
        "kategoria": "Parfüm",
        "kep": "https://www.raspiv.md/upfiles/goods-items/0110242999_6_1_1_result.jpg",
        "akcio": false,
        "leiras": "Karakteres, meleg illatú Zara parfüm elegáns, letisztult üvegben.",
        "leirasBovebb": "A ZARA Red Temptation Eau de Parfum modern, karakteres illatvilágú parfüm, amelyet sokan a meleg, édeskés illatjegyei miatt kedvelnek. Letisztult, átlátszó üvege aranyszínű kupakkal elegáns megjelenést kapott. Nappali és esti alkalmakhoz is választható, attól függően, mennyire intenzív illatot szeretnél viselni. A parfümöt érdemes először kis mennyiségben kipróbálni.",
        "használat": "Permetezz egy keveset a pulzuspontokra, például a csuklóra. Kerüld a szemmel és az irritált bőrrel való érintkezést."
    },
    {
        "id": 18,
        "nev": "Cheirosa 62 Testpermet",
        "marka": "Sol de Janeiro",
        "ar": 9990,
        "kategoria": "Parfüm",
        "kep": "https://www.sephora.com/productimages/sku/s1930759-main-zoom.jpg?imwidth=2000",
        "akcio": true,
        "leiras": "A Cheirosa 62 édes, gourmand illatú testpermet a Sol de Janeirótól.",
        "leirasBovebb": "A Sol de Janeiro Cheirosa 62 testpermetet jellegzetes, édes és napfényes illatvilága teszi különlegessé. A pisztáciás és karamellás hangulatú jegyek meleg, desszertszerű karaktert adnak neki. Könnyed testpermetként használható, ha finom illatfelhőt szeretnél magad körül. A narancssárga flakon a márka egyik könnyen felismerhető terméke.",
        "használat": "Permetezd a testre megfelelő távolságból, a szem és az arc környékét elkerülve. Ha érzékeny a bőröd, először kis bőrfelületen próbáld ki."
    }
];

// Globális állapot
let kosar = [];
let kivalasztottKategoria = "Mind";
let kivalasztottMarka = "Mind";

// SPA Navigáció
function navigalj(viewName) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
    document.getElementById(`view-${viewName}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Katalógus frissítése, szűrése és rendezése
function katalogusFrissitese() {
    const grid = document.getElementById("termek-grid");
    markakGombokFrissitese();
    const kereses = document.getElementById("kereso-input").value.toLowerCase();
    const rendezes = document.getElementById("rendezes-select").value;

    let szurt = termekek.filter(t => {
        const katMatch = kivalasztottKategoria === "Mind" || t.kategoria === kivalasztottKategoria;
        const markaMatch = kivalasztottMarka === "Mind" || t.marka === kivalasztottMarka;
        const searchMatch = t.nev.toLowerCase().includes(kereses) || t.marka.toLowerCase().includes(kereses);
        return katMatch && markaMatch && searchMatch;
    });

    if (rendezes === "olcso") szurt.sort((a, b) => a.ar - b.ar);
    if (rendezes === "draga") szurt.sort((a, b) => b.ar - a.ar);
    if (rendezes === "nev") szurt.sort((a, b) => a.nev.localeCompare(b.nev));

    document.getElementById("talalatok-szama").innerText = `Megjelenítve: ${szurt.length} termék`;

    if (szurt.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">Nincs találat.</p>`;
        return;
    }

    grid.innerHTML = szurt.map(t => `
        <div class="termek-card">
            <img src="${t.kep}" alt="${t.nev}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';" onclick="termekReszletek(${t.id})">
            <div class="card-padding">
                <button class="termek-marka marka-link" data-marka="${t.marka}" onclick="markaSzures(this.dataset.marka)">${t.marka}</button>
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

// Márka szerinti szűrés
function markakGombokFrissitese() {
    const tarolo = document.getElementById('marka-gombok');
    if (!tarolo) return;
    const markak = [...new Set(termekek.map(t => t.marka))].sort((a, b) => a.localeCompare(b, 'hu'));
    tarolo.innerHTML = '';
    const minden = document.createElement('button');
    minden.className = 'marka-btn' + (kivalasztottMarka === 'Mind' ? ' aktiv' : '');
    minden.textContent = 'Minden márka';
    minden.onclick = () => markaSzures('Mind');
    tarolo.appendChild(minden);
    markak.forEach(marka => {
        const gomb = document.createElement('button');
        gomb.className = 'marka-btn' + (kivalasztottMarka === marka ? ' aktiv' : '');
        gomb.textContent = marka;
        gomb.onclick = () => markaSzures(marka);
        tarolo.appendChild(gomb);
    });
}

function markaSzures(marka) {
    kivalasztottMarka = marka;
    kivalasztottKategoria = 'Mind';
    document.querySelectorAll('.kat-btn').forEach(btn => btn.classList.remove('aktiv'));
    const elsoGomb = document.querySelector('.kat-btn');
    if (elsoGomb) elsoGomb.classList.add('aktiv');
    navigalj('katalogus');
    katalogusFrissitese();
}
// Kategória szűrés
function kategoriaSzures(kat) {
    kivalasztottKategoria = kat;
    kivalasztottMarka = "Mind";
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
