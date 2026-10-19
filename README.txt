# Aura Szépségvilág – szétválasztott fájlok

## Fájlok
- `index.html` – az oldal szerkezete és a Tailwind beállítása
- `style.css` – saját CSS-stílusok és animáció
- `script.js` – oldalváltás, kártyák, szűrés, kosár, foglalás és ellenőrzések

## Használat
Tartsd mindhárom fájlt ugyanabban a mappában, majd nyisd meg az `index.html` fájlt böngészőben.
Az oldal Tailwind CSS-t és Font Awesome-ot CDN-ről tölt be, ezért az első betöltéshez internetkapcsolat szükséges.

## A nehezebb JavaScript-részek röviden
1. `renderNailBrands()` és `renderLashes()` – végigmennek az adatokon, kártyákat és legördülő listaelemeket hoznak létre.
2. `renderShop()` – a kiválasztott kategória alapján szűri és megjeleníti a termékeket.
3. `addToCart()` – megkeresi a terméket; ha már a kosárban van, növeli a darabszámát, különben hozzáadja.
4. `renderCartView()` – kirajzolja a kosár tartalmát és kiszámolja az összeget.
5. `isValidName()` / `isValidPhone()` – ellenőrzi a beírt nevet és telefonszámot.
6. `handleNailBookingSubmit()`, `handleLashBookingSubmit()` és `handleCheckoutSubmit()` – megakadályozza az űrlap alapértelmezett elküldését, ellenőrzi az adatokat, majd visszajelzést mutat.

Megjegyzés: ez a projekt böngészőoldali bemutató. A visszaigazoló üzenet önmagában nem küld valódi e-mailt és nem ment foglalást szerverre.
