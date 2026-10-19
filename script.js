/* Termékek adatai: minden termék egy objektum */
var termekek = [
    { id: 1, nev: "Hidratáló arckrém", marka: "CeraVe", ar: 4990, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500", akcio: true },
    { id: 2, nev: "Arctisztító gél", marka: "CeraVe", ar: 3590, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500", akcio: false },
    { id: 3, nev: "Hidratáló arcszérum", marka: "The Ordinary", ar: 4290, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", akcio: true },
    { id: 4, nev: "Folyékony alapozó", marka: "Maybelline", ar: 5290, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214540242-5a2b3d2c2e1b?w=500", akcio: false },
    { id: 5, nev: "Szempillaspirál", marka: "L’Oréal Paris", ar: 3890, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500", akcio: false },
    { id: 6, nev: "Rózsaszín rúzs", marka: "Maybelline", ar: 2990, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: true },
    { id: 7, nev: "Hajápoló sampon", marka: "L’Oréal Paris", ar: 2790, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500", akcio: false },
    { id: 8, nev: "Hajpakolás", marka: "Garnier", ar: 3190, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500", akcio: true },
    { id: 9, nev: "Testápoló krém", marka: "Nivea", ar: 1890, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: false },
    { id: 10, nev: "Kézkrém", marka: "Neutrogena", ar: 1590, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500", akcio: false },
    { id: 11, nev: "Körömápoló olaj", marka: "Essence", ar: 1290, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500", akcio: true },
    { id: 12, nev: "Mályva körömlakk", marka: "Essie", ar: 2490, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500", akcio: false }
];

// A kosár és a kiválasztott kategória változói.
var kosar = [];
var kivalasztottKategoria = "Mind";

// Termékek keresése, szűrése és megjelenítése.
function termekekMegjelenitese() {
    var lista = document.getElementById("termek-lista");
    var keresettSzoveg = document.getElementById("kereso").value.toLowerCase();
    lista.innerHTML = "";

    // A filter csak azokat a termékeket tartja meg, amelyek megfelelnek.
    var szurtTermekek = termekek.filter(function(termek) {
        var megfelelKategoria = kivalasztottKategoria == "Mind" || termek.kategoria == kivalasztottKategoria;
        var megfelelKereses = termek.nev.toLowerCase().includes(keresettSzoveg) || termek.marka.toLowerCase().includes(keresettSzoveg);
        return megfelelKategoria && megfelelKereses;
    });

    // Rendezés ár vagy név szerint.
    var rendezes = document.getElementById("rendezes").value;
    if (rendezes == "olcso") {
        szurtTermekek.sort(function(a, b) { return a.ar - b.ar; });
    }
    if (rendezes == "draga") {
        szurtTermekek.sort(function(a, b) { return b.ar - a.ar; });
    }
    if (rendezes == "nev") {
        szurtTermekek.sort(function(a, b) { return a.nev.localeCompare(b.nev); });
    }

    document.getElementById("talalatok").innerText = "Találatok száma: " + szurtTermekek.length;

    // Ha nincs találat, üzenetet írunk ki.
    if (szurtTermekek.length == 0) {
        lista.innerHTML = '<div class="nincs-talalat">Nincs találat. Próbálj másik keresőszót!</div>';
        return;
    }

    // A for ciklus minden termékhez létrehoz egy kártyát.
    for (var i = 0; i < szurtTermekek.length; i++) {
        var termek = szurtTermekek[i];
        var akcioSzoveg = "";

        if (termek.akcio == true) {
            akcioSzoveg = '<span class="akcio">AKCIÓ</span>';
        }

        var kartya = '<div class="termek-kartya">' +
            akcioSzoveg +
            '<img class="termek-kep" src="' + termek.kep + '" alt="' + termek.nev + '">' +
            '<div class="termek-adatok">' +
            '<div class="marka">' + termek.marka + '</div>' +
            '<h3 class="termek-nev">' + termek.nev + '</h3>' +
            '<div class="ertekeles">★★★★★ 4,8/5</div>' +
            '<div class="ar">' + termek.ar.toLocaleString("hu-HU") + ' Ft</div>' +
            '<button class="kosarba" onclick="kosarbaTesz(' + termek.id + ')">Kosárba teszem</button>' +
            '<button class="kedvenc" onclick="kedvencJelzes()">♡ Kedvencekhez</button>' +
            '</div></div>';

        lista.innerHTML += kartya;
    }
}

// Kategóriaváltás és a gomb aktív jelölése.
function kategoriaValasztas(kategoria, gomb) {
    kivalasztottKategoria = kategoria;
    var gombok = document.getElementsByClassName("kategoria-gomb");

    for (var i = 0; i < gombok.length; i++) {
        gombok[i].classList.remove("aktiv");
    }

    gomb.classList.add("aktiv");
    termekekMegjelenitese();
}

// Egy termék hozzáadása a kosárhoz.
function kosarbaTesz(termekId) {
    var kivalasztottTermek = null;

    for (var i = 0; i < termekek.length; i++) {
        if (termekek[i].id == termekId) {
            kivalasztottTermek = termekek[i];
        }
    }

    if (kivalasztottTermek == null) {
        alert("A termék nem található!");
        return;
    }

    var marBenneVan = false;
    for (var i = 0; i < kosar.length; i++) {
        if (kosar[i].id == termekId) {
            kosar[i].darab = kosar[i].darab + 1;
            marBenneVan = true;
        }
    }

    if (marBenneVan == false) {
        kosar.push({ id: kivalasztottTermek.id, nev: kivalasztottTermek.nev, ar: kivalasztottTermek.ar, darab: 1 });
    }

    kosarDarabFrissitese();
    uzenetKiirasa(kivalasztottTermek.nev + " a kosárba került!");
}

// A kosárban szereplő darabok számolása.
function kosarDarabFrissitese() {
    var osszesDarab = 0;
    for (var i = 0; i < kosar.length; i++) {
        osszesDarab = osszesDarab + kosar[i].darab;
    }
    document.getElementById("kosar-darab").innerText = osszesDarab;
    kosarMegjelenitese();
}

// A kosár tartalmának és végösszegének kiírása.
function kosarMegjelenitese() {
    var tartalom = document.getElementById("kosar-tartalom");
    var vegosszeg = 0;
    tartalom.innerHTML = "";

    if (kosar.length == 0) {
        tartalom.innerHTML = "<p>A kosarad üres.</p>";
        document.getElementById("vegosszeg").innerText = "Végösszeg: 0 Ft";
        return;
    }

    for (var i = 0; i < kosar.length; i++) {
        var termek = kosar[i];
        var reszosszeg = termek.ar * termek.darab;
        vegosszeg = vegosszeg + reszosszeg;

        tartalom.innerHTML += '<div class="kosar-sor"><div><strong>' + termek.nev + '</strong><p>' + termek.darab + ' db × ' + termek.ar.toLocaleString("hu-HU") + ' Ft</p></div><div><strong>' + reszosszeg.toLocaleString("hu-HU") + ' Ft</strong> <button class="torles-gomb" onclick="termekTorlese(' + termek.id + ')">Törlés</button></div></div>';
    }

    document.getElementById("vegosszeg").innerText = "Végösszeg: " + vegosszeg.toLocaleString("hu-HU") + " Ft";
}

// Termék eltávolítása a kosárból.
function termekTorlese(termekId) {
    var ujKosar = [];
    for (var i = 0; i < kosar.length; i++) {
        if (kosar[i].id != termekId) {
            ujKosar.push(kosar[i]);
        }
    }
    kosar = ujKosar;
    kosarDarabFrissitese();
    uzenetKiirasa("A terméket eltávolítottuk a kosárból.");
}

// A kosár teljes ürítése megerősítés után.
function kosarUritese() {
    var valasz = confirm("Biztosan kiüríted a kosarat?");
    if (valasz == true) {
        kosar = [];
        kosarDarabFrissitese();
        uzenetKiirasa("A kosár kiürült.");
    }
}

// A kosár megjelenítése és odagörgetés.
function kosarMegnyitasa() {
    var kosarResz = document.getElementById("kosar-resz");
    kosarResz.style.display = "block";
    kosarMegjelenitese();
    kosarResz.scrollIntoView({ behavior: "smooth" });
}

// Egyszerű kedvenc-visszajelzés.
function kedvencJelzes() {
    alert("A kedvencek funkció jelenleg bemutató változat.");
}

// Üzenet kiírása a weboldalra.
function uzenetKiirasa(szoveg) {
    var uzenet = document.getElementById("uzenet");
    uzenet.innerText = szoveg;
    uzenet.style.display = "block";
}

// Az oldal betöltésekor megjelenítjük a termékeket.
termekekMegjelenitese();
