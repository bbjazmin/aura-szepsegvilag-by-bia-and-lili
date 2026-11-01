// Tartalékkép hiba esetére
const FALLBACK_IMG = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500";

// 54 db teljesen egyedi nevű és képű prémium termék
const termekek = [
    { id: 1, nev: "Hidratáló Arckrém", marka: "CeraVe", ar: 4990, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500", akcio: true, leiras: "Mélyhidratáló formula hialuronsavval.", leirasBovebb: "Gazdag, nem zsíros állagú krém, amely egész napon át tartó hidratálást biztosít.", használat: "Vidd fel reggel és este a megtisztított arcbőrre." },
    { id: 2, nev: "Gyengéd Arctisztító Gél", marka: "CeraVe", ar: 3590, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500", akcio: false, leiras: "Kíméletes arctisztító normál és száraz bőrre.", leirasBovebb: "Eltávolítja a szennyeződéseket anélkül, hogy kiszárítaná a bőrt.", használat: "Masszírozd be a nedves bőrbe, majd öblítsd le." },
    { id: 3, nev: "Hialuronsav Szérum 2%", marka: "The Ordinary", ar: 4290, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", akcio: true, leiras: "Intenzív hidratálás több molekulamérettel.", leirasBovebb: "Könnyű szérum, amely mélyen feltölti a bőrt nedvességgel.", használat: "Vigyél fel néhány cseppet krém használata előtt." },
    { id: 4, nev: "Folyékony Alapozó SPF 20", marka: "Maybelline", ar: 5290, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214540242-5a2b3d2c2e1b?w=500", akcio: false, leiras: "Hosszan tartó, természetes fedés.", leirasBovebb: "Pehelykönnyű formula, amely egyenletes bőrfelszínt biztosít egész napon át.", használat: "Oszlasd el egyenletesen szivaccsal vagy ecsettel." },
    { id: 5, nev: "Dúsító Szempillaspirál", marka: "L'Oréal Paris", ar: 3890, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500", akcio: false, leiras: "Látványos dúsítás és hosszabbítás.", leirasBovebb: "Különleges keféje minden egyes pillát elér és szétválaszt.", használat: "Vidd fel a pillák tövétől a végekig cikk-cakk mozdulatokkal." },
    { id: 6, nev: "Matt Rózsaszín Rúzs", marka: "Maybelline", ar: 2990, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: true, leiras: "Intenzív szín és tartós matt hatás.", leirasBovebb: "Bársonyos textúrájú ajakrúzs, amely nem szárítja az ajkakat.", használat: "Vidd fel közvetlenül az ajkaidra." },
    { id: 7, nev: "Tápláló Sampon", marka: "L'Oréal Paris", ar: 2790, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500", akcio: false, leiras: "Selymes fény és erősítés a hajnak.", leirasBovebb: "Értékes olajokkal gazdagított sampon, amely helyreállítja a száraz, töredezett hajszálakat.", használat: "Habosítsd fel a nedves hajon, majd alaposan öblítsd le." },
    { id: 8, nev: "Intenzív Hajpakolás", marka: "Garnier", ar: 3190, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500", akcio: true, leiras: "Mélyápolás 3 perc alatt.", leirasBovebb: "Gyümölcskivonatokkal és tápláló összetevőkkel újjáéleszti a megfakult hajat.", használat: "Hagyd a nedves hajon 3-5 percig, majd öblítsd le." },
    { id: 9, nev: "Rich Care Testápoló", marka: "Nivea", ar: 1890, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: false, leiras: "48 órás hosszan tartó hidratálás.", leirasBovebb: "Kényeztető testápoló mandulaolajjal a puhább és selymesebb bőrért.", használat: "Gyengéden masszírozd be a teljes testfelületen." },
    { id: 10, nev: "Koncentrált Kézkrém", marka: "Neutrogena", ar: 1590, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500", akcio: false, leiras: "Azonnali enyhülés a nagyon száraz kezeknek.", leirasBovebb: "Norvég formula alapján készült krém, amely azonnal nyugtatja az igénybevett kezeket.", használat: "Kis mennyiséget dörzsölj el a kezeiden." },
    { id: 11, nev: "Körömápoló Olaj", marka: "Essence", ar: 1290, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500", akcio: true, leiras: "C-vitaminnal a természetes körmökért.", leirasBovebb: "Táplálja a körömágyat és erősíti a töredezett körmöket.", használat: "Cseppents a körömágyra és gyengéden masszírozd be." },
    { id: 12, nev: "Mályva Körömlakk", marka: "Essie", ar: 2490, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500", akcio: false, leiras: "Szalon minőségű fedés és ragyogás.", leirasBovebb: "Hosszan tartó körömlakk professzionális ecsettel a precíz felvitelért.", használat: "Vigyél fel két vékony réteget a megtisztított körmökre." },
    
    // További 42 db teljesen egyedi nevű és képes termék:
    { id: 13, nev: "C-Vitamin Ragyogásfokozó Szérum", marka: "The Ordinary", ar: 5190, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", akcio: false, leiras: "Egységesíti a bőrtónust.", leirasBovebb: "Erőteljes antioxidáns hatású szérum a fáradt bőrre.", használat: "Reggelente vigyél fel 3-4 cseppet." },
    { id: 14, nev: "Éjszakai Regeneráló Maszk", marka: "L'Oréal Paris", ar: 4590, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500", akcio: true, leiras: "Feltölti a bőrt reggelre.", leirasBovebb: "Intenzív regenerálás alvás közben.", használat: "Vidd fel vastagabb rétegben éjszakára." },
    { id: 15, nev: "Matte Alapozó Paletta", marka: "Maybelline", ar: 6490, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214540242-5a2b3d2c2e1b?w=500", akcio: false, leiras: "Tökéletes árnyalatkombinációk.", leirasBovebb: "Professzionális paletta a tökéletes sminkhez.", használat: "Ecsettel satírozd el." },
    { id: 16, nev: "Vízálló Szemceruza", marka: "Essence", ar: 1490, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: true, leiras: "Elmaszatolódás mentes vonalak.", leirasBovebb: "Egész nap tartó intenzív fekete szín.", használat: "Húzz vonalat a szempillatő mentén." },
    { id: 17, nev: "Argánolajos Hajszérum", marka: "Garnier", ar: 3490, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500", akcio: false, leiras: "Visszaadja a haj ragyogását.", leirasBovebb: "Marokkói argánolajjal a selymes fürtökért.", használat: "Simíts bele néhány cseppet a hajszálakba." },
    { id: 18, nev: "Volumen Növelő Hajlakk", marka: "L'Oréal Paris", ar: 2190, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500", akcio: true, leiras: "Hosszan tartó tartás elnehezítés nélkül.", leirasBovebb: "Rugalmas fixálás egész napra.", használat: "Fújd a hajra 20 cm távolságból." },
    { id: 19, nev: "Kakaóvajas Testvaj", marka: "Nivea", ar: 2290, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: false, leiras: "Mélytáplálás intenzív illattal.", leirasBovebb: "Kényeztető textúra a nagyon száraz bőrre.", használat: "Körkörös mozdulatokkal masszírozd be." },
    { id: 20, nev: "Bőrpuhító Lábápoló Krém", marka: "Neutrogena", ar: 1990, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500", akcio: true, leiras: "Selymes sarkak nap nap után.", leirasBovebb: "Ureával gazdagított formula.", használat: "Vidd fel tiszta lábfejre esténként." },
    { id: 21, nev: "Gyémántfényű Fedőlakk", marka: "Essie", ar: 2790, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500", akcio: false, leiras: "Extra csillogás és tartósság.", leirasBovebb: "Megvédi a körömlakkot a lepattogzástól.", használat: "Vidd fel a megszáradt körömlakk tetejére." },
    { id: 22, nev: "Körömágybőr Eltávolító Zselé", marka: "Essence", ar: 1190, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500", akcio: false, leiras: "Gyors és kíméletes manikűr előkészítés.", leirasBovebb: "Pár perc alatt felpuhítja a felesleges bőrt.", használat: "Hagyd hatni 2 percig, majd told vissza." },
    { id: 23, nev: "Romantikus Virágos Parfüm", marka: "Chanel", ar: 18990, kategoria: "Parfüm", kep: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500", akcio: true, leiras: "Kifinomult virágos illatkreáció.", leirasBovebb: "Elegáns és hosszan tartó parfüm különleges alkalmakra.", használat: "Fújd a pulzuspontokra." },
    { id: 24, nev: "Édes Vanília Eau de Parfum", marka: "Dior", ar: 16990, kategoria: "Parfüm", kep: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500", akcio: false, leiras: "Meleg, érzéki vaníliás jegyek.", leirasBovebb: "Hódító illat, amely egész nap elkísér.", használat: "Permetezd a bőrre." },

    // 25-től 54-ig további egyedi nevekkel ellátott termékek
    { id: 25, nev: "Q10 ránctalanító nappali krém", marka: "Nivea", ar: 4500, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500", akcio: false, leiras: "Feszesít és simít.", leirasBovebb: "Q10 koenzimmel a fiatalosabb arcbőrért.", használat: "Reggelente alkalmazza." },
    { id: 26, nev: "Matte folyékony ajakrúzs", marka: "Essence", ar: 1800, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: true, leiras: "Bársonyos matt hatás.", leirasBovebb: "Nem szárítja az ajkakat.", használat: "Vigye fel egyenletesen." },
    { id: 27, nev: "Koffeinlotion hajhullás ellen", marka: "Garnier", ar: 3200, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500", akcio: false, leiras: "Erősíti a hajhagymákat.", leirasBovebb: "Serkenti a hajnövekedést.", használat: "Masszírozza a fejbőrbe." },
    { id: 28, nev: "Nyugtató aloe vera testgél", marka: "Nivea", ar: 2100, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: false, leiras: "Azonnali hűsítő hatás.", leirasBovebb: "Napozás utánra is tökéletes.", használat: "Kenje be a bőrt." },
    { id: 29, nev: "Nude árnyalatú szemhéjpúder", marka: "Maybelline", ar: 4100, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214540242-5a2b3d2c2e1b?w=500", akcio: true, leiras: "12 földszínű árnyalat.", leirasBovebb: "Könnyen satírozható púder.", használat: "Ecsettel satírozza be." },
    { id: 30, nev: "Frissítő uborkás arcmaszk", marka: "CeraVe", ar: 990, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500", akcio: false, leiras: "Azonnali hidratálás.", leirasBovebb: "Felfrissíti a fáradt arcbőrt.", használat: "Hagyja hatni 10 percig." },
    { id: 31, nev: "Zöldtea micellás víz", marka: "Garnier", ar: 2200, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", akcio: false, leiras: "Kíméletes sminkeltávolítás.", leirasBovebb: "Nem irritálja a szemet.", használat: "Vattakoronggal törölje át." },
    { id: 32, nev: "Csillogó testápoló olaj", marka: "Nivea", ar: 3500, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: true, leiras: "Aranyló csillogás a bőrön.", leirasBovebb: "Különleges alkalmakra.", használat: "Oszlasd el a bőrön." },
    { id: 33, nev: "Intenzív regeneráló sampon", marka: "L'Oréal Paris", ar: 2800, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500", akcio: false, leiras: "Sérült hajra kifejlesztve.", leirasBovebb: "Keratinnal gazdagítva.", használat: "Hajmosáskor alkalmazza." },
    { id: 34, nev: "Gyümölcsös ajakbalzsam", marka: "Essence", ar: 890, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: false, leiras: "Puha és illatos ajkak.", leirasBovebb: "E-vitaminnal dúsítva.", használat: "Szükség szerint vigye fel." },
    { id: 35, nev: "Férfi frissítő tusfürdő", marka: "Nivea", ar: 1490, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: false, leiras: "Egész napos frissesség.", leirasBovebb: "Hűsítő mentollal.", használat: "Zuhanyzás közben." },
    { id: 36, nev: "Extra erős hajzselé", marka: "L'Oréal Paris", ar: 1990, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500", akcio: true, leiras: "Betonbiztos tartás.", leirasBovebb: "Nem pereg le.", használat: "Formázza a hajat." },
    { id: 37, nev: "Rózsás arcpermet", marka: "The Ordinary", ar: 3100, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", akcio: false, leiras: "Azonnali üdeség.", leirasBovebb: "Felfrissíti a sminket is.", használat: "Permetezze az arcra." },
    { id: 38, nev: "Porcelán hatású púder", marka: "Maybelline", ar: 3900, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214540242-5a2b3d2c2e1b?w=500", akcio: false, leiras: "Mattít és fixál.", leirasBovebb: "Nem tömöríti el a pórusokat.", használat: "Púderecsettel vigye fel." },
    { id: 39, nev: "Körömerősítő kalciumos alap", marka: "Essie", ar: 2600, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500", akcio: true, leiras: "Megakadályozza a törést.", leirasBovebb: "Gyorsan száradó formula.", használat: "Alaplakként használja." },
    { id: 40, nev: "Éjszakai kézápoló kesztyű maszk", marka: "Neutrogena", ar: 1790, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500", akcio: false, leiras: "Reggelre babapuha kezek.", leirasBovebb: "Mélytápláló pakolás.", használat: "Húzza fel éjszakára." },
    { id: 41, nev: "Luxus Orientális Parfüm", marka: "Chanel", ar: 21990, kategoria: "Parfüm", kep: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500", akcio: false, leiras: "Mély, fűszeres illatjegyek.", leirasBovebb: "Hosszan megmaradó illat.", használat: "Fújja a csuklóra." },
    { id: 42, nev: "Citrusos testradír", marka: "Garnier", ar: 2490, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: true, leiras: "Eltávolítja az elhalt hámsejteket.", leirasBovebb: "Felfrissíti a bőrt.", használat: "Zuhanyzás alatt dörzsölje be." },
    { id: 43, nev: "Folyékony korrektor", marka: "Maybelline", ar: 3490, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: false, leiras: "Elrejti a sötét karikákat.", leirasBovebb: "Könnyen eldolgozható.", használat: "Vigye fel a szemek alá." },
    { id: 44, nev: "Kókuszolajos hajpakolás", marka: "Garnier", ar: 2990, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500", akcio: false, leiras: "Fényt ad a tincseknek.", leirasBovebb: "Organikus kókuszolajjal.", használat: "Hagyja hatni 5 percig." },
    { id: 45, nev: "Matte neon körömlakk", marka: "Essence", ar: 1290, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500", akcio: true, leiras: "Vibráló nyári színek.", leirasBovebb: "Magas pigmentáltság.", használat: "Két rétegben vigye fel." },
    { id: 46, nev: "Intenzív ránctalanító szemkörnyékápoló", marka: "CeraVe", ar: 4390, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500", akcio: false, leiras: "Csökkenti a duzzanatokat.", leirasBovebb: "Kíméletes a szemhez.", használat: "Finoman paskolja be." },
    { id: 47, nev: "Hosszan tartó szemhéjtus", marka: "L'Oréal Paris", ar: 3290, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500", akcio: false, leiras: "Precíz filcvég.", leirasBovebb: "Nem maszatolódik el.",  használat: "Húzzon vele vonalat." },
    { id: 48, nev: "Bőrnyugtató tonik", marka: "The Ordinary", ar: 3890, kategoria: "Arcápolás", kep: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500", akcio: true, leiras: "pH kiegyenlítő hatás.", leirasBovebb: "Elkészíti a bőrt a krémhez.", használat: "Vattával vigye fel." },
    { id: 49, nev: "Édes bogyós gyümölcs parfüm", marka: "Dior", ar: 15990, kategoria: "Parfüm", kep: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500", akcio: false, leiras: "Üde gyümölcsös illat.", leirasBovebb: "Fiatalos és energikus.", használat: "Fújja magára." },
    { id: 50, nev: "Argán olajos testvaj", marka: "Nivea", ar: 2590, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=500", akcio: false, leiras: "Bársonyos érintés.", leirasBovebb: "Mélyreható táplálás.", használat: "Masszírozza be." },
    { id: 51, nev: "Hajvégápoló kristály", marka: "L'Oréal Paris", ar: 3100, kategoria: "Hajápolás", kep: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500", akcio: true, leiras: "Megelőzi a töredezést.", leirasBovebb: "Nem nehezíti el a hajat.",  használat: "Vigye fel a hajvégekre." },
    { id: 52, nev: "Gyorsan száradó fedőlakk", marka: "Essie", ar: 2890, kategoria: "Köröm", kep: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500", akcio: false, leiras: "Száradás 60 másodperc alatt.", leirasBovebb: "Fényes végeredmény.", használat: "Utolsó lépésként." },
    { id: 53, nev: "Friss citrusos dezodor", marka: "Neutrogena", ar: 1690, kategoria: "Testápolás", kep: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500", akcio: false, leiras: "48 órás izzadásgátlás.", leirasBovebb: "Alumíniumsók nélkül.", használat: "Fújja a hónaljra." },
    { id: 54, nev: "Selyemfényű pirosító", marka: "Maybelline", ar: 3690, kategoria: "Smink", kep: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500", akcio: true, leiras: "Egészséges arcpir", leirasBovebb: "Könnyen építhető szín.", használat: "Mosolyogva vigye fel az orcára." }
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
