// src/i18n.js
import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      navbar: {
        nav_item_title0: "UNIVERSITET",
        nav_item_title1: "TALABALAR",
        nav_item_title2: "YANGILIKLAR VA MEDIA",
        nav_item_title3: "ELEKTRON KUTUBXONA",
        nav_item_title4: "ILMIY JURNALLAR",
        nav_item_title5: "ALOQA",
        nav_item1: "Kirish so'zi",
        nav_item2: "Kampuslar",
        nav_item3: "Biz bilan bog'lanis",
        nav_item4: "Yo'nalishlar",
        nav_item5: "Akademik taqvim",
        nav_item6: "YANGILIKLAR VA MEDIA",
        nav_item7: "Rektorat",
        nav_item8: "Fakultet",
        nav_item9: "Yangiliklar",
        nav_item10: "Media",
        nav_item11: "Fakultet",
        nav_item12: "Hamkor jurnallar",
        nav_item13: "Ilmiy axborotnomalar",
        btn: "Qabul 2025",
      },
      rektor: {
        title: "Rektor",
        text: "Buxoro xalqaro universiteti rektori, Xalqaro psixologiya fanlar akademiyasinig vitse-prezidenti, pixologiya fanlar doktori, professor.",
        contact1: "Elektron pochta manzili:",
        day: "Dushanba-shanba",
        contact2: "Telefon raqam:",
        contact3: "Qabul kunlari:",
        info: "Dushanba-shanba",
        sobirova:
          "Xalqaro psixologiya fanlar akademiyasinig haqiqiy a'zosi, pixologiya fanlar doktori, professor.",
        content:
          "Baratov Sharif Ramazanovich Buxoro xalqaro universiteti rektori 1960-yil 22-martda Oʼzbekiston Respublikasi, Buxoro viloyati, Kogon tumani Talicha qishlogʼida tugʼilgan. U 1977-yilda Kogon tumanidagi 7-umumtaʼlim maktabini, 1983-yilda esa Buxoro davlat pedagogika institutini imtiyozli diplom bilan tugatib, shu institutning Psixologiya kafedrasi oʼqituvchisi sifatida ishga qabul qilingan.",
        content1: `1985-1987-yillarda Moskvadagi Umumiy va pedagogik
                                                        psixologiya institutining ilmiy tadqiqotchisi, 1987-1990-yillarda
                                                        shu institutning aspiranturasida oʼqib, 1990-yilda nomzodlik
                                                        dissertatsiyasini himoya qilgan
                                                        1991-2021-yillarda Buxoro davlat universitetida
                                                        Psixologiya kafedrasi oʼqituvchisi, kafedra mudiri, fakultet
                                                        dekani, ilmiy ishlar prorektori lavozimlarida samarali faoliyat
                                                        koʼrsatgan. Shu orada bir muddat (2002-2006 y.y) viloyat
                                                        hokimining tavsiyasiga koʼra, Respublika Maʼnaviyat va maʼrifat
                                                        markazi Buxoro viloyat boʼlimi rahbari lavozimida ham ishlagan.`,
        content2: `2021-yildan hozirgi kunga kadar Buxoro xalqaro
                                                        universiteti taʼsischisi va rektori sifatida faoliyat yuritib
                                                        kelmoqda.`,
      },

      statistic: {
        title1: "Kafedralar soni:",
        title2: "Ta'lim yo'nalishlari:",
        title2_text1: "Bakalavr",
        title2_text2: "Magistrtatura",
        title2_text3: "Doktorantura",
        title3: "Ilmiy salohiyat (%):",
      },
      contract: {
        title: "Ilmiy hamkorlik",
      },
      litsenziya: {
        title1: "Litsenziyalangan ta'lim",
        text1:
          "Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat inspeksiyasi tomonidan 2021-yil 29-oktabr kuni 0037-raqamli litsenziya Buxoro psixologiya va xorijiy tillar institutiga oliy ta’lim xizmatlarini ko’rsatish uchun va O'zbekiston Respublikasi oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan 2024-yil 16-maydan 277162-raqamli litsenziya bilan yangi yo'nalishlarga ruxsat berilgan",
        title2: "Oliy ta'limdan keyingi ta'lim",
        text2: "DOKTORANTURA",
      },
      yutuq: {
        title: "Institut yutuqlari",
      },
      professor: {
        title: "Professor o'qituvchilar jamoasi",
      },
      kampus: {
        header: "KAMPUSLAR",
        title: "Institutimiz kampuslari",
        bn1: "BIRINCHI KAMPUS",
        bn1_text:
          "Buxoro viloyati Kogon tumani B.Naqshband M.F.Y Abay ko'chasi 20-uy.",
        bn2: "IKKINCHI KAMPUS",
        bn2_text:
          "Buxoro shahri Sitorayi Mohi-Xosa MFY G'ijduvon ko'chasi 250-uy",
        bn3: "UCHINCHI KAMPUS",
        bn3_text:
          "Buxoro shahri Sitorayi Mohi-Xosa MFY G'ijduvon ko'chasi 250-uy.",
        bn4: "TALABALAR YOTOQXONASI",
        bn4_text:
          "Buxoro viloyati Kogon tumani B.Naqshband M.F.Y Abay ko'chasi 20-uy",

        td1: "Umumiy maydoni",
        td2: "3 ga",
        td3: "Bloklar soni",
        td4: "5 ta",
        td5: "Auditoriyalar",
        td6: "40 ta",
        td7: "Parkovka",
        td8: "250 ta auto",
        td9: "Yotoqxona",
        td10: "300 o'rinli",
        td11: "Eko-zona",
        td12: "mavjud",
      },
      diplom: {
        title: "Talabalarimizga davlat namunasidagi diplomlar topshirildi",
        text: "2023-yil 19-iyun sanasida 19 nafar, 2024-yil 5-avgust sanasida 40 nafar magistratura mutaxasisligi muvaffaqiyatli bitirganlarga QR kodli diplomlar topshirildi.",
      },
      salohiyat: {
        title: `"Buxoro Xalqaro Universiteti" ilmiy salohiyat ko'rsatkichi`,
        text: `"Buxoro Xalqaro Universiteti" 2021-2024 yillardagi ilmiy salohiyat ko'rsatkichi. Bugungi kunda institutimiz ilmiy salohiyati 61% ni tashkil qiladi.`,
        graf_title1: "Ilmiy Salohiyat va Natijalar",
        graf_title2: "Natijalar (soni)",
        graf_title3: "2021-2024-yillar oralig'i",
      },
      gallery: {
        title: "Galereya",
        tab_btn1: "Foto galereya",
        tab_btn2: "Video galereya",
      },
      directions: {
        title: "Ta'lim yo'nalishlari",
        descr:
          "Oliygohimizning ta'lim yo'nalishlari bilan quyidagi jadval orqali tanishib chiqishingiz mumkin",
        tab_btn1: "Kunduzgi ta'lim",
        tab_btn2: "Sirtqi ta'lim",
        tab_btn3: "Kechki ta'lim",
        tab_btn4: "Magistratura",
        tab_btn5: "Masofaviy",
        th1: "Yo'nalish",
        th2: "Ta'lim davomiyligi",
        th3: "Qabul",
        th4: "Kvota",
        th5: "Shartnoma summasi",

        // kunduzgi bakalavr
        th1_td1: "60310900 – Psixologiya (faoliyat turlari bo’yicha)",
        th1_td2: "60111800 – Xorijiy til va adabiyoti (tillar bo’yicha)",
        th1_td3: "60112600 – Maktabgacha va boshlang'ich ta'limda xorijiy til",
        th1_td4: "60310100 – Iqtisodiyot (tarmoqlar va sohalar bo’yicha)",
        th1_td5: "60111400 – O’zbek tili va adabiyoti",
        th1_td6: "60220300 – Tarix (mamlakatlar va yo'nalishlar bo’yicha)",
        th1_td7: "60111300 – Musiqa ta'limi",
        th1_td8: "60110200 – Maktabgacha ta`lim",
        th1_td9: "60110500 – Boshlang'ich ta`lim",
        th1_td10: "60112200 – Jismoniy madaniyat",
        th1_td11:
          "60112100 – Milly g’oya, ma’naviyat asoslari va huquq ta’limi",
        th1_td12:
          "60610100 – Kompyuter ilmlari va dasturlash texnologiyalari (yo’nalishlar bo’yicha)",
        th1_td13: "61010400 – Turizm (faoliyat yo’nalishlari bo’yicha)",
        th1_td14: "60110400 – Defektologiya (faoliyat turlari bo’yicha)",

        th1_tda1: "4 yil",
        th1_tda2: "4 yil",
        th1_tda3: "4 yil",
        th1_tda4: "4 yil",
        th1_tda5: "4 yil",
        th1_tda6: "4 yil",
        th1_tda7: "3 yil",
        th1_tda8: "3 yil",
        th1_tda9: "4 yil",
        th1_tda10: "3 yil",
        th1_tda11: "4 yil",
        th1_tda12: "4 yil",
        th1_tda13: "4 yil",
        th1_tda14: "4 yil",

        // sirtqi
        th1_td15: "60310900 – Psixologiya (faoliyat turlari bo’yicha)",
        th1_td16: "60112600 – Maktabgacha va boshlang'ich ta'limda xorijiy til",
        th1_td17: "60310100 – Iqtisodiyot (tarmoqlar va sohalar bo’yicha)",
        th1_td18: "60220300 – Tarix (mamlakatlar va yo'nalishlar bo’yicha)",
        th1_td19: "60110500 – Boshlang'ich ta`lim",
        th1_td20: "60111300 – Musiqa ta'limi",
        th1_td21: "60112200 – Jismoniy madaniyat",
        th1_td22:
          "60112100 – Milly g’oya, ma’naviyat asoslari va huquq ta’limi",
        th1_td23:
          "60610100 – Kompyuter ilmlari va dasturlash texnologiyalari (yo’nalishlar bo’yicha)",
        th1_td24: "61010400 – Turizm (faoliyat yo’nalishlari bo’yicha)",
        th1_td25: "60110400 – Defektologiya (faoliyat turlari bo’yicha)",
        th1_td26: "61110400 – O'zbek tili va adabiyoti",

        th1_tda15: "5 yil",
        th1_tda16: "5 yil",
        th1_tda17: "5 yil",
        th1_tda18: "5 yil",
        th1_tda19: "5 yil",
        th1_tda20: "5 yil",
        th1_tda21: "5 yil",
        th1_tda22: "5 yil",
        th1_tda23: "5 yil",
        th1_tda24: "5 yil",
        th1_tda25: "5 yil",
        th1_tda26: "5 yil",
        th1_tda27: "5 yil",

        // kechki talim uzb
        th1_td28: "60110500 – Boshlang'ich ta`lim",
        th1_td29: "60111300 – Musiqa ta'limi",
        th1_td30: "60111400 – O’zbek tili va adabiyoti",
        th1_td31: "60112200 – Jismoniy madaniyat",
        th1_td32: "60111800 – Xorijiy til va adabiyoti (tillar bo’yicha)",
        th1_tda28: "5 yil",
        th1_tda29: "5 yil",
        th1_tda30: "5 yil",
        th1_tda31: "5 yil",
        th1_tda32: "5 yil",
        // Magistr

        th1_td33: "70310901 – Psixologiya (faoliyat turlari bo’yicha)",
        th1_td34: "70310102 – Iqtisodiyot (tarmoqlar va sohalar bo’yicha)",
        th1_td35:
          "70110501 – Ta’lim va tarbiya nazariyasi va metodikasi (boshlang’ich ta’lim)",
        th1_td36: "70111301 – Musiqa ta’limi va san’at",
        th1_td37:
          "70112201 – Jismoniy tarbiya va sport mashg’ulotlari nazariyasi va metodikasi",
        th1_td38:
          "70110101 – Pedagogika nazariyasi va tarixi (faoliyat turi bo’yicha)",
        th1_td39: "70111401 – O’zbek tili va adabiyoti",
        th1_td40: "70230101 – Lingvistika (tillar bo’yicha)",

        th1_tda33: "2 yil",
        th1_tda34: "2 yil",
        th1_tda35: "2 yil",
        th1_tda36: "2 yil",
        th1_tda37: "2 yil",
        th1_tda38: "2 yil",
        th1_tda39: "2 yil",
        th1_tda40: "2 yil",

        th1_td41: "60310300 - Psixologiya",
        th1_td42: "60410100 - Iqtisodiyot",
        th1_td43: "60110700 - O'zbek tili va adabiyoti",
        th1_td44: "60110200 - Maktabgacha ta'lim",
        th1_td45: "60110400 - Boshlang'ich ta'lim",
        th1_td46:
          "60111100 - Milly g'oya, ma'naviyat asoslari va huquq ta'limi",
        th1_td47: "61010400 - Logistika",
        th1_td48: "60540100 - Matematika",
        th1_td49: "60110800 - Ona tili va adabiyoti (Rus tili)",

        th1_tda41: "4 yil",
        th1_tda42: "4 yil",
        th1_tda43: "4 yil",
        th1_tda44: "3 yil",
        th1_tda45: "5 yil",
        th1_tda46: "4 yil",
        th1_tda47: "4 yil",
        th1_tda48: "4 yil",
        th1_tda49: "4 yil",

        th2_addition: " yil",
        th3_addition1: "tugadi",
        th3_addition2: "faol",
        th5_addition: "{count} so'm",
      },
      content: {
        title: "Foydali ma'lumotlar",
        text: "Bu nafaqat talabalar hayoti markazi, balki turli madaniyatlar kesishmasi hamda umrboqiy do`stlar orttiriladigan dargoh. ",
        card1: "Hemis platformasi",
        card2: "E-kutubxona",
        card3: "Shartnoma olish",
        card4: "Dars jadvali",
        card5: "Taklif va shikoyatlar",
        card6: "Talabalar yotoqxonasi",
      },
      footer: {
        adress1:
          "Buxoro viloyati Kogon tumani B.Naqshband MFY Abay ko'chasi 20-uy",
        adress2:
          "Buxoro shahri Sitorayi Mohi-Xosa MFY G'ijduvon ko'chasi 250-uy",
        title: "Ijtimoiy sahifalar",
        copyright:
          "Mualliflik huquqi © 2024. BIU. Barcha huquqlar himoyalangan",
      },
      modal: {
        title: "Ma'lumotlaringiz va savollaringizni kiriting",
        label1: "F.I.O",
        label2: "Telefon raqamingiz",
        label3: "Xabar",
        btn: "Yuborish",
        placeholder1: "Ism Familya",
        placeholder2: "Telefon raqamingiz",
      },
      welcome_speech: {
        title: "Kirish so'zi",
        descr: "Oliygoh ta`sischisi B SH.R. ",
        title1:
          "Buxoro psixologiya va xorijiy tillar institutiga xush kelibsiz!",
        title2:
          '"Buxoro psixologiya va xorijiy tillar instituti" tasischisi va rektori Baratov Sharif Ramazonovich',

        text1:
          " O’zbekiston Respublikasi \n" +
          "Prezidenti Sh.M.Mirziyoyevning 2021 yil 21-22 yanvar kunlari Buxoro \n" +
          "viloyatiga tashrifi davomida va Xalq deputatlari viloyat kengashining \n" +
          "navbatdan tashqari sessiyasida bergan topshiriqlari ijrosini ta’minlash \n" +
          "bo’yicha shakllantirilgan 4-sonli bayonnomaning 98-bandiga asosan tashkil \n" +
          "etilgan.\n" +
          "Buxoro psixologiya va xorijiy tillar instituti O’zbekiston Respublikasi Vazirlar \n" +
          "Mahkamasi huzuridagi ta’lim sifatini nazorat qilish davlat inspeksiyasi \n" +
          "tomonidan taqdim etilgan №432747-sonli litsenziyasi asosida faoliyat \n" +
          "yuritmoqda. ( Insitut 2021-yildan tashkil etilgan)\n",
      },
      contact: {
        title: "Biz bilan bog`lanish",

        title2: "Buxoro psixologiya va xorijiy tillar instituti",
        descr2:
          " Buxoro psixologiya va xorijiy tillar instituti– adolatli, haqqoniy, jamiyatga foydali, global kadrlar maskani. ",
        linkTitle1: "Telefon 1",
        linkTitle2: "Telefon 2",
        linkTitle3: "Telegram",
        linkTitle4: "Facebook",
        linkTitle5: "Youtube",
        linkTitle6: "Instagram",
        linkTitle7: "Vebsayt",
      },
      news: {
        title: "Yangiliklar",
        header: "YANGILIKLAR",
        readMore: "Batafsil",
        allNewsBtn: "Barcha Yangiliklar",
      },
      rektorat: {
        rector: "BARATOV SHARIF RAMAZONOVICH",
        pro_rector1: "Sobirova Dilafruz Abduroziqovna",
        pro_rector2: "Barotov Xumoyin Sharifovich",
        pro_rector3: "Muxtorov Erkin Mustafoyevich",

        title: "Institut tarkibiy tuzilmasi",
        header: "Rektor",
        text: "BUXORO XALQARO UNIVERSITETI REKTORI, XALQARO PSIXOLOGIYA FANLARI AKADEMIYASINING VITSE-PREZIDENTI. PSIXOLOGIYA FANLARI DOKTORI, PROFESSOR.",
        contact1: "Elektron pochta manzili:",
        contact2: "Telefon raqam:",
        contact3: "Qabul kunlari:",
        title1: "Prorektor",
        text1: "Ilmiy ishlar va innovatsiyalar bo'yicha prorektor",
        rank1:
          "Xalqaro psixologiya fanlari akademiyasining haqiqiy a'zosi, psixologiya fanlari doktori, professor.",
        title2: "Prorektor",
        text2:
          "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha prorektor",
        rank2: "",

        title3: "Prorektor",
        text3: "O'quv ishlari bo'yicha prorektor",
        rank3: "",
        group: "Professor o'qituvchilar jamoasi",
      },
      campus: {
        title: "Oliygohimiz kampuslari",
        text: "Bu nafaqat talabalar hayoti markazi, balki turli madaniyatlar kesishmasi hamda umrboqiy do`stlar orttiriladigan dargoh.  ",
        card_title1: "Shartnoma olish",
        card_title2: "Hemis platformasi",
        card_title3: "Dars jadvali",
        card_title4: "E-kutubxona",
        card_title5: "Taklif va shikoyatlar",
        card_title6: "Talabalar yotoqxonasi",
        card_title7: "Sport klublari",
        card_title8: "Yashil dam olish hududi",
        card_title9: "Shinam kafeteriya",
        card_title10: "Konferensiyalar zali",
        card_link1: "xaritani ochish",
        card_link2: "student.zarmeduniver.com",
        card_link3: "3D tur",
        card_link4: "library.zarmeduniver.com",
        card_link5: "ariza berish",
        card_link6: "ariza berish",
        card_link7: "ariza berish",
        card_link8: "hudud xaritasi",
        card_link9: "menyu",
        card_link10: "tadbir buyurtma qilish",
        tab1: "Buxoro kampus",
        tab2: "Samarqand kampus",
      },
      academic: {
        title: "Akademik taqvim",
        card1_title: " O`quv jarayoni grafigi ",
        card2_title: " O`quv jarayonini tashkil qilish ",
        card3_title: " Bayramlar",
        table1_tr1_td1: "O`quv yili",
        table1_tr1_td2: "2023/2024",
        table1_tr2_td1: "Modullar soni",
        table1_tr2_td2: " ta modul",
        table1_tr3_td1: "Sessiyalar",
        table1_tr3_td2: " ta sessiya",
        table1_tr4_td1: "O`quv kunlari",
        table1_tr4_td2: " kun",
        table1_tr5_td1: "Sessiya kunlari",
        table1_tr5_td2: " kun",
        table2_th1: "Modul",
        table2_th2: "Muddat",
        table2_th3: "Sessiya",
        table2_th4: "Meyk-up",
        table2_th5: "Ta'tillar",
        table2_th1_td1: "1 - semestr",
        table2_th1_td2: "2 - semestr",
        table3_tr1_td1: "O`qituvchi va murabbiylar kuni",
        table3_tr1_td2: "	1 - oktyabr ",
        table3_tr1_td3: "dam olish kuni",
        table3_tr2_td1: "Kreditga kirish haftaligi",
        table3_tr2_td2: "10 - 15-oktyabr",
        table3_tr2_td3: "Ish kunlari",
        table3_tr3_td1: "Yangi Yil",
        table3_tr3_td2: "	31-dekabr - 3-yanvar",
        table3_tr3_td3: "dam olish kunlari",
        table3_tr4_td1: "Xalqaro xotin-qizlar kuni",
        table3_tr4_td2: "	8 - mart",
        table3_tr4_td3: "dam olish kuni",
        table3_tr5_td1: "Navro`z",
        table3_tr5_td2: "	21 - mart",
        table3_tr5_td3: "dam olish kuni",
        table3_tr6_td1: "Xotira va qadrlash kuni",
        table3_tr6_td2: "9 - may",
        table3_tr6_td3: "dam olish kuni",
        table3_tr7_td1: "Mustaqillik kuni",
        table3_tr7_td2: "1 - sentyabr",
        table3_tr7_td3: "dam olish kuni",
        qr_card_text:
          "«2023/2024 o`quv yili uchun Akademik kalendarni tasdiqlash to`g`risida» ma`muriyat buyrug`i.",
        qr_b1: "Registratsiya",
        qr_b2: "Sana",
      },
      science: {
        title: "Ilmiy Jurnallar",
        header: "ILMIY JURNALLAR",
      },
      campuses: {
        title: "Kampuslar",
        descr: "Universitetning Buxoro va Samarqand kampuslari mavjud ",
        tab1_btn: "Buxoro",
        tab2_btn: "Samarqand",
        card_title1: "Buxoro kampusi loyihasi",
        card_title2: "Samarqand kampusi loyihasi",
        card_item1: "Umumiy maydoni",
        card_item2: "Bloklar soni",
        card_item3: "Auditoriyalar",
        card_item4: "Parkovka",
        card_item5: "Yotoqxona",
        card_item6: "Eko-zona",
        title_secondary: "Kampus xaritasi",
        map_item1: "Asosiy kampus",
        map_item2: "Faollar zali ostidagi blok",
        map_item3: "Sportzal ostidagi blok",
        map_item4: "Tibbiy korpus (qurilmoqda)",
        map_item5: "Rektorat binosi (qurilmoqda)",
        map_item6: "Avtomobil turargohi",
        map_item7: "Eko-zonalar",
        data1: " ga",
        data2: " ta",
        data3: " ta",
        data4: " ta auto",
        data5: "o'rinli",
        data6: "mavjud",
      },
      purpose: {
        title: "Maqsad, Vazifa, Qadriyat",
        card1_title: "Maqsad",
        card1_text:
          "ZARMED Universiti o`zining bilim va malakasi orqali insoniyat taraqiyotiga mahalliy,milliy va global miqyosida hissa qo`shishga intiluvchi salohiyatli kadrlar tayyorlashni o`z oldiga maqsad qilib qo`ygan.",
        card2_title: "Vazifa",
        card2_text:
          "Biz 2030-yilga qadar, O`rta Osiyodagi eng oldi o`quv muassasi bo`lishni o`z oldimizga maqsad qilib qo`yganmiz. Bizning vazifamiz shiddat bilan o`zgarib borayotgan zamon va Yangi O`zbekiston talablariga javob bera oladigan dolzarb va moslashuvchan o`quv dasturlarini o`z vaqtida taqdim etish ",
        card3_title: "Fidoiylik",
        card3_text:
          "Qattiy ish etikasi va mukammalikga bo`lgan intilishimizda aks etadi.",
        card4_title: " Ijodkorlik ",
        card4_text:
          "Yangi g`oyalar, intelektual qiziqish, tavvakal qilishga bo`lgan xohish va tadbirkorlik ruhimizda namoyon bo`ladi.",
        card5_title: "Moslashuvchanlik",
        card5_text:
          "Hozirgi shiddat bilan rivojlanoyotgan zamonda o`zgarishlarga moslashuvchanigimizda namoyon bo`ladi.",
        card6_title: "Halollik",
        card6_text:
          "Shaxsiy va kasbiy xulq-atvorda eng yuqori axloqiy me’yorlarga sodiqligimiz, boshqaruv va biz qilayotgan barcha ishlarda shaffoflik va mas’uliyatga sodiqligimizda namoyon bo’ladi",
        card7_title: "Hamkorlik",
        card7_text:
          "Jamiyat, sanoat, davlat va eng muhimi, talabalarimiz bilan hamkorlikdagi ishimizda aks etadi.",
      },
      symbols: {
        title: "Ramzlar",
        btn: "yuklab olish {name}",
        title1: "Aylana yozuv",
        text1: "Universitet nomi",
        title2: "Quyosh",
        text2: "logotipda chiqayotgan quyosh tasvirlangan",
        title3: "Qanotli Bars",
        text3:
          "Samarqand shahri haqidagi afsonalarda ko`p tilga olinadi.Shaharning ramzlaridan biri",
        title4: "Kitob",
        text4:
          "Ilm-fan ramzi. Har qanday universitet logotipining ajralmas qismlaridan biri.",
        title5: "Madrasa portali",
        text5: "Logotipni sharqona ruh bilan boyitadi.",
        title6: "Sakkiz qirrali yulduz",
        text6: "Sharq va Islomning ramzlaridan biri",
        text7: "Universitet tashkil etilgan yil",
        title_madhiya1: "Universitet madhiyasi",
        title_madhiya2: "Madhiya matni",
      },
      exam: {
        title: "Imtihon namunalari",
        card1_title: "Kontrakt bo`yicha imtihonlar ",
        card2_title: "Grantga kirish uchun imtihon namunalari ",
        card1_item1: "Kirish kuni – 1",
        card1_item2: "Biologiya Mart – 2024",
        card1_item3: "Kimyo Mart – 2024",
        card1_item4: "Matematika Fevral – 2024",
        card2_item1: "Kirish kuni – 1",
        card2_item2: "Biologiya Mart – 2024",
        card2_item3: "Kimyo Mart – 2024",
        card2_item4: "Matematika Fevral – 2024",
      },
      faculties: {
        title: "Fakultetlar",
        descr: "Bakalavriat (BSc) 2023/2024 o`quv yili ",
      },
      batafsil: { title: "BATAFSIL" },
      partnership: {
        title: "Institutimiz hamkorliklari",
      },
      statistics: {
        title: "Buxoro shahridagi BXU universiteti - bu …",
        text1: "FAKULTETLARI",
        text2: "BITIRUVCHILAR",
        text3: "BAKALAVRIAT TALABALARI",
        text4: "MAHALLIY PROFESSOR-O'QITUVCHILAR",
        text5: "MAGISTRATURA TALABALARI",
        text6: "TALABALAR TURAR JOYI",
        text7: "O'QUV BINOLARI",
        text8: "BXU TAYYORLOV KURSLARI TINGLOVCHILARI",
        text9: "XORIJIY PROFESSOR-O'QITUVCHILAR",
        text10: "BXU TAYYORLOV KURSLARI O'QITUVCHILARI",
        text11: "BXU Mikroavtobuslar",
      },
      university: {
        name: "UNIVERSITET",
        title: "Universitet Haqida",
        about: {
          title: "BXU haqida",
          rectorAddress: "Rektor murojati",
          goals: "Maqsadimiz",
          qualitySystem: "Sifat menjmenti tizimi",
          facts: "Raqamlar va faktlar",
          codeOfConduct: "Odob-axloq kodeksi",
          directions: "Ta'lim yo'nalishlari",
          partnership: "Xalqaro hamkorlik",
          scientificactivity: "Ilmiy faoliyat",
        },
        rectorOffice: {
          title: "Rektor Ofisi",
          rector: "Rektor",
          viceRectors: "Prorektorlar",
          managers: "Menejerlar",
          staff: "Xodimlar",
          departmentHeads: "Bo'lim boshliqlari",
          professors: "Professorlar",
          socie: "SOCIE (Axborot Texnologiyalari Fakulteti)",
          sbl: "SBL (Biznes va logistika fakulteti)",
          ge: "GE (Umumiy ta'lim)",
        },
        students: {
          title: "TALABALAR",
          association: "Talabalar Assotsiatsiyasi",
          support: "Talabalarni qo'llab-quvvatlash markazi",
          library: "Axbarot resurs markazi",
          dormitory: "Yotoqxona",
          timetable: "O'quv yili jadvali",
          successful: "Muvaffaqiyatli talabalar",
          distance: "Masofaviy ta'lim",
        },
        infrastructure: {
          title: "Infratuzilma",
          dataCenter: "Ma'lumotlar markazi",
          printing: "Tipografiya",
          buildings: "Binolar",
          gym: "Sportzal",
          dormitory: "Yotoqxona",
          conferenceHall: "Konferents-zal",
          innovationCenter: "Innovatsiya markazi",
          transferOffice: "Transfer offis",
          cyberLab: "Kibersecurity laboratoriyasi",
          classrooms: "O'quv xonalari",
          stadium: "Stadion",
          publicOffer: "Ommaviy oferta",
          sponsorship: "Homiylik",
          researchCenters: "Axbarot resurs markazi",
          ecozone: "Yashil universitet",
        },
        symbols: {
          title: "Universitet Ramzlari",
          emblem: "BXU Ramzi va timsoli",
        },
        apply: {
          title: "Apply to Inha University in Tashkent",
          button: "Apply",
        },
        visit: {
          title: "Plan a visit to Inha University in Tashkent",
          button: "Contact us",
        },
      },
      support: {
        title: "Talabalarni qo'llab-quvvatlash markazi",
        description:
          "Talabalarning o'sishi va rivojlanishi uchun xizmat ko'rsatuvchi markaz",
        description1:
          "Talabalar bilan ishlash bo'limi - talabalarning o'sishi va rivojlanishi uchun xizmat ko'rsatadigan, talabalar muvaffaqiyatga erishishida qo'llab-quvvatlaydigan bo'lim.",
        description2:
          "Bizning bo'limda siz quyidagi xizmatlardan foydalanishingiz mumkin:",
        services: "Talabalar uchun xizmatlar",
        service1: "Ma'lumotnoma",
        service2: "(harbiy xizmat va boshqa joylar uchun)",
        service3: "ID kartani tiklash uchun",
        service4: "Imtihonlarga tayyorlanish",
        service5: "Talabalar muammolarini hal qilishda yordam berish",
        more: "Batafsil ma'lumot",
        support: "Karyera markazi",
        support1: "Ishga joylash xizmati",
        support2: "Malaka olishga joylashtirish",
        support3: "Arizani yuborish",
        description3: "Tadbir xizmatlari",
        content: "Tadbir tashkil etish masalalari",
        content1: "Sayohat tashkil etish",
        content2: "Tadbirga yozilish",
        content3: "Yordam kerakmi?",
        content4:
          "Agar sizda qo'shimcha savollar bo'lsa yoki yordam kerak bo'lsa, biz bilan bog'laning",
        content5: "Bog'lanish",
      },
      aboutUniversity: {
        title: "BUXORO XALQARO UNIVERSITETI HAQIDA QISQACHA MA`LUMOT",
        description1:
          "Prezidentimiz SH.M. Mirziyoyevning 2021 - yil 21-22 yanvar kunlari Buxoro viloyatiga tashrifi davomida va Xalq deputatlari viloyat Kengashining navbatdagi tashqari sessiyasida bergan topshiriqlari bo'yicha 4 - sonli bayonining 98 - bandiga asosan tashkil etilgan. ",
        description2:
          "Oliygoximizda bugungi kunda 3 ta kampus umumiy hisobda 6000 o`rinli o`quv binosi hamda 420 o`rinli talabalar yotoqxonasi mavjud. Bizda jami 16 ta bakalavr, 8 ta magistratura hamda 6 ta ta`lim shakli bo`yicha DOKTORANTURA (Psixologiya, Filologiya, Pedagogika fanlari bo'yicha) mavjud.",
        description3:
          '2021 yildan buyon "Raqamli ta`lim texnologiyalarini rivojlantirish markazi" bilan tuzilgan shartnoma asosan talabalarimiz hisoboti "HEMIS" platformasida olib boriladi. Hozir kunda 3 marotaba Magistratuta ta`limy o`nalishini bitirgan talabalarga diplomlar taqdim etildi.',
        description4:
          "Oliygohimiz 4 yil davomida yuqori natijalarga ya'ni talabalar soni oshganligi, o'quv binolari ko'payganligi, talim sifati jahon talablariga javob bera olishi, ilmiy salohiyat 69 % ga yetganligi, ta'lim yo'nalishlar soni 24 ga yetganligi, oliy ta'limdan keyingi ta'lim xizmatlarini ko'rsatish uchun litsenziyaga ega bo'lganligi psixologiya bo'yicha ilmiy kengash tashkil qilinganligi, xalqaro ilmiy jurnallar muallifligini qo'lga kiritganligi tufayli 2025 yilning 28 mart kunidan boshlab oliygoh nomi BUXORO XALQARO UNIVERSITETI nomiga O'zbekiston Respublikasi Vazirlar Mahkamasining tegishli litsenziyasiga asosan o'zgartirildi.",
      },
      association: {
        title: "O'zbekiston yoshlar ittifoqi",
        name: "BARAKAYEV XUMOYUN MIRZO ILXOMOVICH",
        description1:
          'Universitet "O`zbekiston yoshlar ittifoqi" BT yetakchisi',
        title1:
          "O'ZBEKISTON YOSHLAR ITTIFOQINING BUXORO XALQARO UNIVERSITETIDAGI BOSHLANG'ICH TASHKILOTINING MAQSAD VA VAZIFALARI",
        title1_description:
          "Boshlang'ich tashkilotning asosiy maqsadi, ta'lim muassasalarida yoshlarning ta'lim-tarbiya olishi uchun munosib sharoit yaratib berishga ko'maklashish, yoshlarning huquq va manfaatlarini himoya qilish hamda har tomonlama barkamol shaxslar bo'lib yetishishiga munosib hissa qo'shishdan iborat.",
        title2:
          "Boshlang'ich tashkilot o'z oldiga quyidagi vazifalarni qo'yadi:",
        title2_list1:
          "yosh avlodni ona Vatanga muxabbat va sadoqat ruhida tarbiyalash, ularning ongiga milliy istiqlol g'oyasi, milliy qadriyatlar, diniy bag'rikenglik, millatlararo totuvlik va oilaviy qadriyatlarni chuqur singdirish;",
        title2_list2:
          "yoshlarga O'zbekiston Respublikasi Konstitutsiyasi va qonunlarida belgilangan fuqarolik huquq va burchlarini anglatish, ularga mamlakatda amalga oshirilayotgan demokratik va huquqiy islohotlarni mazmun-mohiyatini tushuntirish;",
        title2_list3:
          "oliy ta'lim muassasasi yoshlarining muammolari, ta'lim sifati, fanlarni o'zlashtirish darajasi, davomati, darsliklar va kutubxonadan foydalanish darajasini o'rganib borish, yoshlar murojaatlarini ko'rib chiqish va hal etishga ko'maklashish;",
        title2_list4:
          "yoshlarning chuqur bilim olishi, chet tillarini o'rganishi va zamonaviy axborot kommunikatsiya texnologiyalarini puxta egallashi hamda ularni kasb-hunarga yo'naltirishga qaratilgan chora tadbirlarni amalga oshirish;",
        title2_list5:
          "iste'dodli yoshlarni kashf etish, ularni har tomonlama qo'llab-quvvatlash va rag'batlantirishga qaratilgan ishlarni amalga oshirish, intellektual va ijodiy qobilyatlarini rivojlantirishga ko'maklashadigan klub va to'garaklar faoliyatini tashkil etish;",
        title2_list6:
          "imkoniyati cheklangan hamda maxsus ehtiyojli yoshlarning inklyuziv ta'lim olishi uchun qulay sharoit yaratishga qaratilgan ishlarni qo'llab-quvvatlash;",
        title2_list7:
          "notinch oila farzandlari, tarbiyasi o'g'ir va nosog'lom muhitga tushib qolgan yoshlarni jamiyatga ijtimoiy moslashuvi hamda darslarni muntazam qoldirib kelayotgan talabalarni ta'lim jarayoniga qaytarish, qizlar o'rtasida erta nikohlarning oldini olish bo'yicha tizimli ishlar olib borish;",
        title2_list8:
          "yoshlar o'rtasida jinoyatchilik va huquqbuzarlikning oldini olishga qaratilgan huquqiy-tarbiyaviy ishlarni amalga oshirish;",
        title2_list9:
          "yoshlar o'rtasida kitobxonlikni keng targ'ib qilish, ularning kitobga bo'lgan muhabbatini oshirish va kitobxonlik madaniyatini rivojlantirish;",
        title2_list10:
          'yoshlarda "ommaviy madaniyat" niqobi ostidagi zararli illatlar, axborot hurujlari, diniy aqidaparastlik, missionerlik va ekstremistik g`oyalarga qarshi mafkuraviy immunitetni shakllantirish;',
        title2_list11:
          "oliy ta'lim muassasasi yoshlar o'rtasida yoshlar turizmini rivojlantirish, ularni o'zlari yashayotgan hududdagi tarixiy obidalar, muqaddas qadamjolar, muzeylar, teatrlar, mustaqillik davrida barpo etilgan inshootlarga tashrifini uyushtirish;",
        title2_list12:
          "yoshlar, ayniqsa qiz bolalar o'rtasida sportni keng targ'ib etish, ularning sportga bo'lgan qiziqishini qo'llab quvvatlash va turli sport musoboqalarida ishtirok etishi uchun zarur sharoitlarni yaratib berish;",
        title2_list13:
          "yoshlarga tibbiy madaniyat, xususan, kasalliklardan himoyalanish yo'llarini keng tushuntirishga qaratilgan targ'ibot tadbirlarini tashkil etish;",
        title2_list14:
          "yoshlar o'rtasida ekologiya atrof muhitni muhofaza qilish, tabiiy resurslardan oqilona foydalanishni targ'ib qilish orqali ularda ekologik madaniyatni yuksaltirish, ekologik tashabbuslarni qo'llab-quvvatlash;",
        title3: "YOSHLAR ITTIFOQIGA A'ZOLIKKA QABUL QILISH",
        title3_head:
          "Yoshlar Ittifoqiga yuridik va jismoniy shaxslar ushbu Ustavda belgilangan tartibda a'zo bo'lishlari mumkin:",
        title3_list1:
          "Ittifoqning maqsadini qo'llab-quvvatlash istagini bildirgan,14 yoshga to'lgan va 30 yoshdan oshmagan O'zbekiston Respublikasining fuqarolari va O'zbekiston Respublikasida muntazam yashab kelayotgan fuqaroligi bo'lmagan jismoniy shaxslar Ittifoqning a'zosi bo'lishi mumkin.",
        title3_list2:
          "Ittifoqning jismoniy shaxs bo'lgan a'zosi Ittifoqning rahbar organlariga saylangan taqdirda unga nisbatan ushbu Ustavning 4.2. bandida ko'zda tutilgan yoshga oid cheklov qo'llanilmaydi.",
        title3_list3:
          "Jismoniy shaxslarni Ittifoqqa a'zolikka qabul qilish va chiqish Ittifoq boshlang'ich tashkilotining Umumiy yig'ilishi tomonidan, shuningdek boshlang'ich tashkilot Kengashining yig'ilishi (boshlang'ich tashkilotda Kengash shakllantirilgan taqdirda) tomonidan amalga oshiriladi.",
        title3_list4:
          "Jismoniy shaxslarni Boshlang'ich tashkilot tegishli rahbar organining a'zolikka qabul qilish va chiqish to'g'risidagi qarori yakuniy hisoblanadi va Ittifoqning yuqori organlari tomonidan tasdiqlanishi talab qilinmaydi.",
        title3_list5:
          "Yoshlar sohasidagi nodavlat notijorat tashkilotlari va yoshlar sohasiga oid korxona, muassasa va tashkilotlar hamda ta'sis hujjatlari Ittifoqning Ustav maqsadlari, vazifalari va dasturiy hujjatlariga zid bo'lmagan boshqa yuridik shaxslar Ittifoqqa a'zo bo'lishi mumkin.Yuridik va jismoniy shaxslar Ittifoqqa a'zolikka qabul qilinishi uchun tegishli mazmundagi arizani taqdim etadilar.",
        title3_list6:
          "Yuridik shaxslar Ittifoq a'zoligiga Ittifoqning mahalliy yoki hududiy kengashlari yig'ilishi qarori asosida qabul qilinadi va chiqariladi.",
        title3_list7:
          "Jismoniy shaxslarning Ittifoqqa a'zoligi quyidagi hollarda bekor qilinishi mumkin: Ittifoq a'zosi arizasiga ko'ra;",
        title3_list8:
          "Ittifoq a'zosining yoshi 30 yoshdan oshgach (Ittifoqning saylanadigan organlariga saylangan shaxslar bundan istisno);",
        title3_list9:
          "Ittifoq a'zosi tomonidan ushbu Ustavga va O'zbekiston Respublikasi qonun hujjatlariga zid bo'lgan xatti-harakatlarga yo'l qo'yilganda;",
        title3_list10: "Ittifoqning faoliyati tugatilganda.",
        title3_list11:
          "Jismoniy shaxslarni Ittifoq a'zoligidan chiqarish to'g'risidagi qaror boshlang'ich tashkilotning Umumiy yig'ilishi yoki boshlang'ich tashkilot Kengashi tomonidan qabul qilinadi.",
        title4: "ITTIFOQ A'ZOLARINING HUQUQLARI:",
        title4_list1:
          "umumiy yig'ilishlar, konferensiyalar, Qurultoy, Ittifoqning rahbar organlari yig'ilishlari va Ittifoqning bosma davriy nashrlarida masalalarni muhokama qilish chog'ida o'z fikrini erkin ifoda etish;",
        title4_list2:
          "shaxsan yoki o'z vakili orqali Ittifoqning saylanadigan organlari qarorlarini ishlab chiqishda ishtirok etish;",
        title4_list3:
          "Ittifoqning saylanadigan rahbar organlari va nazorat-taftish organlariga saylash va saylanish;",
        title4_list4:
          "Ittifoq organlari faoliyati to'g'risida ma'lumotlar olish, o'zlariga taalluqli bo'lgan masalalarni muhokama qilishda Ittifoq organlari faoliyatida ishtirok etish va fikr bildirish;",
        title4_list5:
          "Ittifoq faoliyatida Ustav va Dastur doirasida ishtirok etish, Ittifoqning har qanday rahbar organiga ariza va takliflar bilan murojaat etish.",
        title5: "ITTIFOQ A'ZOLARINING ASOSIY MAJBURIYATLARI:",
        title5_list1:
          "Ittifoqning Ustav maqsadlarini amalga oshirishda qatnashish;",
        title5_list2:
          "yoshlar o'rtasida va jamiyatda Ittifoqning ta'siri va nufuzini oshirish;",
        title5_list3:
          "Ittifoq rahbar organlari, boshlang'ich tashkilotlarning umumiy yig'ilishlari, shuningdek, Kengashi yig'ilishlari qarorlarini bajarish;",
        title5_list4:
          "Ittifoqning boshlang'ich tashkiloti faoliyatida faol qatnashish.",
        title6: "BOSHLANG'ICH TASHKILOT FAOLIYATINING ASOSIY YO'NALISHLARI:",
        title6_description:
          "O'zbekiston yoshlar ittifoqining Buxoro Xalqaro Universitetidagi boshlang'ich tashkiloti o'z safiga 2311 nafar talaba-yoshlarni birlashtirgan bo'lib, amaldagi me'yoriy-huquqiy hujjatlarga binoan talaba-yoshlarni ijtimoiy himoyalash, ularning taklif va istaklarini o'rganish, mustaqil hayotdagi ilk qadamlarida ko'maklashish, o'qishdan bo'sh vaqtlarini ko'ngilli, mazmunli tashkil etish hamda Yoshlar ittifoqi atrofida birlashtirish bilan birga, ularda komil inson fazilatlarini tarbiyalash, yoshlarning dunyoqarashini bunyodkor g'oyalar bilan oziqlantirish, intellektual mulkka egalik tuyg'usini shakllantirish, tashabbus va yangiliklarini qo'llab-quvvatlash va talaba-yoshlarni Yoshlar ittifoqi atrofida birlashtirishdan iborat.",
        title7:
          "O'zbekiston yoshlar ittifoqining Buxoro xalqaro universitetidagi boshlang'ich tashkiloti Kengashi 13 nafar a'zodan iborat bo'lib, Kengash tarkibi:",
        title7_list1: " O'zbekiston yoshlar ittifoqi IBT Yoshlar yetakchisi",
        title7_list2: "Yoshlar yetakchisining birinchi o'rinbosari",
        title7_list3:
          "Faol va iqtidorli yoshlar bilan ishlash yo'nalishi yetakchisi",
        title7_list4:
          "Tashabbus va yoshlar tadbirkorligi yo'nalishi yetakchisi",
        title7_list5:
          "Ta'lim jarayoni sifatini monitoring qilish yo'nalishi yetakchisi",
        title7_list6:
          "Muddatli harbiy xizmatni o'tab, o'qishga qabul qilingan talabalar bilan ishlash yo'nalishi yetakchisi",
        title7_list7:
          "Yoshlar yetakchisining ma'naviy ma'rifiy ishlar bo'yicha o'rinbosari",
        title7_list8:
          "Ma'naviy-ma'rifiy ishlar va yoshlar turizmi yo'nalishi yetakchisi",
        title7_list9: "Sport, salomatlik yo'nalishi yetakchisi",
        title7_list10:
          "Ijtimoiy himoyaga muhtoj va imkoniyat cheklangan talabalar bilan ishlash yo'nalishi yetakchisi",
        title7_list11: "Tashkiliy-nazorat va kadrlar yo'nalishi yetakchisi",
        title7_list12: "Matbuot kotibi, yoshlar media guruhi rahbari",
        title7_list13:
          "Talabalar murojaatlari bilan ishlash yo'nalishi yetakchisi jamoatchilik asosida faoliyat ko'rsatmoqda.",
        title8:
          "O'zbekiston yoshlar ittifoqining Buxoro xalqaro universitetidagi boshlang'ich tashkiloti qoshida quyidagi to'garak hamda klublar tashkil etilgan:",
        title8_list1: '"Vatan posbonlar" jamoat tuzilmasi',
        title8_list2: '"Xumo" talabalar teatr-studiyasi',
        title8_list3: '"Zakovat" intellectual klubi',
        title8_list4: '"Quvnoqlar va zukkolar" klubi',
        title8_list5: '"BXU press today" jurnalistlar kulubi',
        title8_list6: '"Munozara" klubi',
        title8_list7: '"Yosh ijodkorlar" to`garagi',
        title8_list8: '"Chempionlar" klubi',
        title8_list9: '"Siyosatchilar" to`garagi',
        title8_list10: '"Tafakkur" intellektual to`garagi',
      },
      scientificactivity: {
        title: `2025-yil 12-fevraldagi O'zbekiston Respublikasi Oliy attestatsiya 
              komissiyasi Prezidiumining 367-sonli buyrug'i asosida, "XXI asr
              psixologiyasi" xalqaro kongressi materiallari asosida tayyorlangan
              ilmiy maqolalar to'plami, Psixologiya va xorijiy tillar instituti
              hamda Xalqaro psixologik fanlar akademiyasi (MAPN) tomonidan
              2025-yil 16-18 mart kunlari o'tkazilgan kongress asosida
              tayyorlanib, xorijiy ilmiy nashrlar ro'yxatiga kiritildi.`,
        title1: `Ilmiy faoliyat`,
        title2: "Diplomalar va Ilmiy Ishlar",
        title3: "Haydarov Shaxriyor Shuxrat o‘g‘li",
        title4: "Rasmlar",
        title5: "Diplomalar",
        title6:
          "Kelajakdagi muhandislarning psixologik salomatligini shakllantirishda pedagogik va psixologik omillar",
        title7: "Jalolov Tursunbek Sadriddinovich",
        title8:
          "SPSS dasturi orqali olingan ma'lumotlarni qayta ishlashning pedagogik va psixologik asoslari",
        title9:
          "2023–2024 yillarda institut o‘qituvchilariga berilgan fan doktori diplomlari",
        title10: "Mustaqil tadqiqotchi F.I.O",
        title11: "Dissertatsiya mavzusi",
        title12: "Ikromova Sitora Akbarovna",
        title13:
          "O‘smirlarda destruktiv axborotga nisbatan mafkuraviy immunitetni shakllantirishning ijtimoiy-psixologik omillari",
        title14: "Barotov Xumoyun Sharifovich",
        title15:
          "Sportchi o‘smirlarga psixologik yordam ko‘rsatish amaliyotini takomillashtirishning ilmiy-amaliy mexanizmlari",
        title16: "Abdullayev Amrilla Nasullayevich",
        title17:
          "Harbiy ta’lim fakulteti kursantlarida pedagogik muloqot omillarini shakllantirishning psixologik determinantlari",
        title18: "Narzullayeva Salomatbonu Nasullayevna",
        title19:
          "Hamshiralarda professional kompetentlik omillarini shakllantirishning ijtimoiy-psixologik determinantlari",
      },
      researchcenters: {
        content: "BUXORO XALQARO UNIVERSITETINING",
        content1: "Axborot-Resurs markazi",
        content2: "Milliy kutubxona bilan hamkorlik",
        content3:
          "Professor-o'qituvchilar va talabalar elektron adabiyotlardan bemalol foydalanish imkoniyati",
        content4: "Zamonaviy resurslar",
        content5:
          "Bosma, elektron hamda QR-kodli barcha yo'nalishlar uchun o'quv adabiyotlar",
        content6: "Markaz imkoniyatlari",
        content7: "Milliy kutubxona hamkorligi",
        content8:
          "Alisher Navoiy nomidagi O'zbekiston Milliy kutubxonasi bilan shartnoma imzolangan.",
        content9: "Zamonaviy resurslar",
        content10: "Bosma, elektron hamda QR-kodli o'quv adabiyotlar mavjud.",
        content11: "Keng fond",
        content12:
          "Dissertatsiyalar, badiiy adabiyotlar, o'quv qo'llanma va darsliklar.",
        content13: "Kitobxonlar uchun musobaqalar",
        content14:
          "Har chorakda \"Eng yaxshi kitobxon\" nominatsiyasi bo'yicha musobaqalar o'tkaziladi.",
        content15: "Markaz fotolari",
        content16: "Axborot-resurs markazi interyeri",
        content17: "Axborot-resurs markaziTalabalar uchun ish joylari",
      },
      partneruniversity: {
        title: "Xalqaro Konferensiya 2025",
        text: "Memorandum imzolash marosimi 2023",
        text1: "Universitetlar hamkorligi shartnomasi",
        text2: "Xalqaro hamkorlik",
        text3: "Ta'lim almashinuvi dasturi",
        text4: "Akademik hamkorlik shartnomasi",
        text5: `
        Buxoro psixologiya va xorijiy tillar instituti tomonidan
                    2025 yilning 16-mart kuni "PSIXOLOGIYA FANLARI BO'YICHA
                    XALQARO KONFRENSIYA" bo'lib o'tdi.
        `,
        text6: `
        Ushbu konfrensiyada O'zbekiston Respublikasida faoliyat olib
                    borayotgan malakali mutaxasislar, ilmiy darajalarga ega
                    bo'lgan professor-o'qituvchilar (DSc, PhD) o'z chiqishlarida
                    Psixologiya fanida so'ngi ilmiy yangiliklar, takliflar va
                    kelgusida dolzarb mavzular haqida ma'ruzalar o'qishdi.
        `,
        text7: `
        Konfrensiyada xorij olimlari ham o'z chiqishlarida,
                    Psixologiya fanlari o'sishida O'zbekiston psixolog olimlari
                    hissalari haqida, qolaversa xalqaro universitetlar bilan
                    doimiy hamkorlik masalalari bo'yicha o'z takliflarini
                    bildirishdi.
        `,
        text8: " Xalqaro Hamkorlik: Anqara Yildirim Boyazid Universiteti bilan",
        text9:
          "Turkiya va O'zbekiston universitetlari o'rtasidagi strategik hamkorlik",
        text10: "Professor Qosimov Ali Asqarxonning Tashrifi",
        text11: `
        Turkiyaning Anqara Yildirim Boyazid universiteti
                          professori, xalqaro hamkorlik bo'yicha yetakchi
                          mutaxassis Qosimov Ali Asqarxon Aslamxon o'g'li Buxoro
                          xalqaro universitetiga tashrif buyurdi.
        `,
        text12: `Mehmon universitetimizda yaratilgan zamonaviy
                          sharoitlar bilan tanishdi va "Psixologiya"
                          magistratura mutaxassisligi talabalariga "Din
                          psixologiyasi" mavzusida maxsus ma'ruza qildi.`,
        text13: "Imzolangan Kelishuvlar",
        text14: " Strategik hamkorlik memorandumi",
        text15: "O'qituvchilar almashinuvi dasturi",
        text16: " Qo'shma ilmiy tadqiqotlar olib borish",
        text17: "Professor Qosimov talabalar bilan suhbat",
        text18: "Kelajakdagi Hamkorlik Rejalari",
        text19: `Ikki universitet o'rtasida qo'shma magistratura
                      dasturlarini ishlab chiqish, xalqaro konferensiyalar
                      tashkil etish va ilmiy jurnallar chop etish
                      rejalashtirilmoqda.`,
        text20: "Xalqaro Konferensiya 2024",
        text21:
          "2024 yilda Samarqand Davlat Universitetida nufuzli xalqaro konferensiya bo'lib o'tdi.",
        text22: `Ushbu konferensiyada dunyoning 40 dan ortiq mamlakatlarining
                    oliygohlaridan tashrif buyurgan psixolog olimlarining
                    ma'ruzalari tinglandi.`,
        text23: `Ushbu ma'ruzalarda so'nggi yillarda psixologiya sohasidagi
                    ilmiy yangiliklar, tajribalar, jurnallar va kitoblar haqida
                    ma'lumotlar bilan bo'lishildi.`,
        text24: `O'zbekistonlik psixolog olimlar ham konferensiyada ishtirok
                    etishdi. Ushbu konferensiyadan ko'zlangan asosiy maqsad
                    O'zbekistonda psixologiyaning rivojlanishi va jamiyatimizga
                    yetuk mutaxassislar tayyorlash borasida bir nechta xalqaro
                    memorandumlar imzolandi.`,
        text25: `BUXORO XALQARO UNIVERSITETI rektori boshchiligidagi
                    delegatsiya Turkiyaning eng nufuzli oliy ta’lim muassasalari
                    bilan xalqaro hamkorlik yo’llarini ochish bo’yicha xalqaro
                    konferensiya bo'lib o'tdi.`,
        text26: "Ushbu tashrifda bir necha xalqaro aloqalar yo’lga qo’yildi.",
        text27: `
        Masalan Rossiya Federatsiyasi oliygohlarida BUXORO XALQARO
                    UNIVERSITETI professor-o’qituvchilarining malaka oshirish
                    amaliyoti qolaversa Xalqaro kredit-modul talablariga ko’ra
                    talaba almashinuvi va qo’shma dasturga oid loyihalar
                    to’g’risida tegishli hujjatlar imzolandi.`,
        text28: `
        BUXORO XALQARO UNIVERSITETI rektori boshchiligidagi
                    delegatsiya Qozoqistonning eng nufuzli oliy ta’lim
                    muassasalari bilan xalqaro hamkorlik yo’llarini ochish
                    bo’yicha xalqaro konferensiya bo'lib o'tdi.`,
        text29: "Ushbu tashrifda bir necha xalqaro aloqalar yo’lga qo’yildi.",
        text30: `Masalan Qozoqistonning oliygohlarida BUXORO XALQARO
                    UNIVERSITETI professor-o’qituvchilarinning malaka oshirish
                    amaliyoti qolaversa Xalqaro kredit-modul talablariga ko’ra
                    talaba almashinuvi va qo’shma dasturga oid loyihalar
                    to’g’risida tegishli hujjatlar imzolandi.`,
        text31: "Xalqaro Konferensiya",
        text32: `BUXORO XALQARO UNIVERSITETI rektori boshchiligidagi
                    delegatsiya Rossiya Federatsiyasining eng nufuzli oliy
                    ta’lim muassasalari bilan xalqaro hamkorlik yo’llarini ochis
                    bo’yicha tashrif buyurishdi.`,
        text33: `Ushbu konfrensiyada O'zbekiston Respublikasida faoliyat olib
                    borayotgan malakali mutaxasislar, ilmiy darajalarga ega
                    bo'lgan professor-o'qituvchilar (DSc, PhD) o'z chiqishlarida
                    Psixologiya fanida so'ngi ilmiy yangiliklar, takliflar va
                    kelgusida dolzarb mavzular haqida ma'ruzalar o'qishdi.`,
        text34: `Konfrensiyada xorij olimlari ham o'z chiqishlarida,
                    Psixologiya fanlari o'sishida O'zbekiston psixolog olimlari
                    hissalari haqida, qolaversa xalqaro universitetlar bilan
                    doimiy hamkorlik masalalari bo'yicha o'z takliflarini
                    bildirishdi.`,
        text35: "Memorandumlarimiz",
        text36: "Hamkorlik fotolavhalari",
        text37: "Memorandum hujjatlari",
        text38: "Yuklab olish",
      },
      headstaff: {
        title: "Bo'lim boshliqlari",
        staffMembers: [
          {
            name: "Barotov Shuxrat Sharipovich",
            position: "Ish boshqaruvchi",
            phone: "+998 99 773 17 37",
            email: "shuxrat.barotov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Niyazov Fazliddin Sayfitdinovich",
            position: "Rektor maslahatchisi",
            phone: "+998 90 711 96 97",
            email: "fazliddin.niyazov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Ochilova Dildora Toshpulatovna",
            position: "Reja-moliya bo'limi boshlig'i",
            phone: "+998 88 855 20 12",
            email: "dildora.ochilova@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Nusratov Farruxmirzo Furqat o'g'li",
            position: "Iqtisodchi",
            phone: "+998 94 217 11 12",
            email: "farruxmirzo.nusratov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Qurbonov O'ktam Radjabovich",
            position: "O'quv va magistratura bo'limi boshlig'i",
            phone: "+998 93 809 66 05",
            email: "oktam.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Haydarov Shahriyor Shuxrat o'g'li",
            position:
              "Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi boshlig'i",
            phone: "+998 90 635 96 16",
            email: "shahriyor.haydarov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Qo'yliyev Ulug'bek Ravshanovich",
            position: "Sirtqi bo'lim boshlig'i",
            phone: "+998 94 322 57 75",
            email: "ulugbek.qoyliyev@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Usmonova Surayyo Muxitdinovna",
            position:
              "Ilmiy-tadqiqotlar, innovatsiyalar va ilmiy-pedagogik kadrlar tayyorlash sektori boshlig'i",
            phone: "+998 93 651 30 10",
            email: "surayyo.usmonova@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Jo'rayev Uchqun Yusuf o'g'li",
            position: "Registrator ofisi boshlig'i",
            phone: "+998 99 708 78 04",
            email: "uchqun.jorayev@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Normurodov Olmos Dilshod o'g'li",
            position:
              "Ta'lim sifatini nazorat qilish bo'limi boshlig'i o'rinbosari",
            phone: "+998 94 025 15 29",
            email: "olmos.normurodov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Karimov Behruz Ibrohimbekovich",
            position: "Marketing va talabalar amaliyoti bo'limi boshlig'i",
            phone: "+998 90 635 56 58",
            email: "behruz.karimov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Raxmatov Nurbek Erkinovich",
            position:
              "Psixologiya va xorijiy tillar fakulteti dekan o'rinbosari",
            phone: "+998 90 710 64 46",
            email: "nurbek.raxmatov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Xalilov Bekzod Jobir o'g'li",
            position:
              "Oliy ta'lim jarayonlarini boshqarish (HEMIS) axborot tizimi mas'ul xodimi",
            phone: "+998 94 771 01 24",
            email: "bekzod.xalilov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Baratova Dilafruz Sharifovna",
            position: "Psixologiya kafedrasi mudiri",
            phone: "+998 94 445 36 66",
            email: "dilafruz.baratova@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Qurbonov Abdujalil Maxmutovich",
            position: "Filologiya kafedrasi mudiri",
            phone: "+998 93 476 06 75",
            email: "abdujalil.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
          {
            name: "Kurbanov Baxodir Samatovich",
            position: "Pedagogika va umumiy fanlar kafedrasi mudiri",
            phone: "+998 99 707 36 50",
            email: "baxodir.kurbanov@university.edu",
            workHours: "9:00 - 18:00 (Dushanba-Juma)",
          },
        ],
      },
      goals: {
        text: "Bizning maqsadlarimiz",
        text1: `
        Maqsadimiz - zamonaviy dunyoning rivojlanishiga mos keladigan,
                  bilimdon, barkamol, ijodiy va ma'naviy jihatdan mustahkam
                  yoshlarni tarbiyalash, ularni kelajakda mamlakatimiz va jahon
                  rivojida faol ishtirok etadigan mutaxassislar sifatida
                  shakllantirish.`,
        text2: "Malakali mutaxassislar",
        text3: `Psixologiya sohasida zamonaviy bilimlar, amaliy
                      ko'nikmalar va innovatsion yondashuvlar asosida yuqori
                      darajada mutaxassislar yetishtirish.`,
        text4: "Ta'lim sifatini oshirish",
        text5: `Respublikamiz Prezidenti tomonidan ta'lim sohasida
                      qo'yilgan ustuvor vazifalarga mos ravishda xalqaro
                      standartlardagi ta'lim metodikalarini joriy etish.`,
        text6: "Psixologiyani rivojlantirish",
        text7: `Jamiyatning turli qatlamlarida psixologik xizmatlarni
                    kengaytirish, shaxsiy va professional rivojlanishga
                    ko'maklashish. Har bir talabaning qobiliyatini aniqlash,
                    ularga shaxsiy va kasbiy yo'nalishlarda yordam berish.`,
        text8: "Oliy Maqsadlarimiz",
        text9: "Xalqaro hamkorlik",
        text10: ` Jahonning TOP-1000 universitetlari bilan qo'shma
                        dasturlar, ikki tomonlama diplomlar va talabalar
                        almashinuvini yo'lga qo'yish. Chet el universitetlari va
                        tadqiqot markazlari bilan hamkorlikda malaka oshirish.`,
        text11: "Ta'lim eksporti",
        text12: `O'zbekistonni mintaqaviy ta'lim markaziga aylantirish,
                        xorijiy talabalarni jalb qilish. Xalqaro reytinglarda
                        o'rin egallash va O'zbekistonning ta'lim sohasidagi
                        obro'sini oshirish.`,
        text13: "Innovatsion ta'lim",
        text14: `Zamonaviy texnologiyalar (AI, virtual laboratoriyalar,
                        onlayn ta'lim platformalari) orqali ta'lim sifatini
                        yaxshilash. Amaliyotga yo'naltirilgan ta'lim tizimini
                        joriy etish, talabalarni ish bozorining talablariga
                        tayyorlash.`,
        text15: "Xulosa",
        text16: `Biz ishonamizki, yoshlarni bilim, fidoyilik va vatanparvarlik
                  ruhida tarbiyalash orqali kelajakda O'zbekistonni rivojlangan
                  davlatlar qatoriga olib chiqish mumkin. Har bir talaba – bu
                  mamlakatimizning kelajagi, shu bois ularga berilayotgan har
                  bir daqiqa, har bir bilim nihoyatda muhimdir.`,
      },
      conferenceHall: {
        title: "BUXORO XALQARO UNIVERSITETINING KONFRENSIYA ZALI",
        description:
          "Jami 300 o'ringa mo'ljallangan bo'lib bu yerda ma-naviy-ma'rigiy tadbirlar, konsert dasturlari hamda turli xildagi anjumanlarni o'tkazish uchun barcha sharoitlar yaratilgan.",
        image1: "300 o'rinli konferensiya zali",
        image2: "Zalning ichki ko'rinishi",
        image3: "Zamonaviy texnika",
      },
      contactUs: {
        contactCard: {
          title1: "Buxoro shahridagi BXU",
          title2: "Kogon shaharidagi BXU",
          address1:
            "Buxoro shahri Sitorayi Mohi-Xosa MFY G'ijduvon ko'chasi 250-uy",
          address2:
            "Buxoro viloyati Kogon tumani B.Naqshband MFY Abay ko'chasi 20-uy",
          address_label: "Manzil",
          telefon_label: "Telefon",
          fax_label: "Faks",
          website_label: "Veb-sayt",
        },
        title: "BXU bilan bog'lanish",
        header:
          "Buxoro shahridagi BXU rahbariyati va ma'muriyatining qabul jadvali",
        header1: `Buxoro shahridagi BXU faoliyati yuzasidan jismoniy va yuridik
        shaxslarning takliflari va shikoyatlari`,
        header2:
          "elektron manzili yoki maxsus shakl orqali yuborilishi mumkin. Shuningdek jadvalga binoan, jismoniy va yuridik shaxslar shaxsiy tayinlanish jarayonida universitetning ma'muriyati bilan bog'liq masalalarni muhokama qilishlari mumkin.",
        header3: "Rektor maslahatchisi Niyazov Fazliddin Sayfitdinovich",
        table_section1: "F.I.SH",
        table_section2: "Lavozimi",
        table_section3: "Qabul vaqti",
        table_section4: "Qabul kuni",
        table_section5: "Telefon raqami",
        days: "Dushanba - Juma",
        ourAddress: "Bizning manzil",
        ourAddress1: "Buxoro shahridagi BXU universiteti joylashgan manzil",
        ourAddress2:
          "Manzil: Buxoro shahri Sitorayi Mohi-Xosa MFY G'ijduvon ko'chasi 250-uy",
        ourAddress3: "Kattalashtirish uchun Google Maps-da ochish",
        staffList: [
          {
            id: 1,
            fio: "Barotov Xumoyin Sharifovich",
            lavozimi:
              "Yoshlar masalalari va ma‘naviy-ma‘rifiy ishlar bo‘yicha prorektor",
            telefon: "+998 91 447 05 04",
          },
          {
            id: 2,
            fio: "Sobirova Dilafruz Abduroziqovna",
            lavozimi: "Ilmiy ishlar va innovatsiyalar bo‘yicha prorektor",
            telefon: "+998 91 831 25 11",
          },
          {
            id: 3,
            fio: "Muxtorov Erkin Mustafoyevich",
            lavozimi: "O‘quv ishlari bo‘yicha prorektor",
            telefon: "+998 91 243 17 14",
          },
          {
            id: 4,
            fio: "Barotov Shuxrat Sharipovich",
            lavozimi: "Ish boshqaruvchi",
            telefon: "+998 99 773 17 37",
          },
          {
            id: 5,
            fio: "Niyazov Fazliddin Sayfitdinovich",
            lavozimi: "Rektor maslahatchisi",
            telefon: "+998 90 711 96 97",
          },
          {
            id: 6,
            fio: "Ochilova Dildora Toshpulatovna",
            lavozimi: "Reja-moliya bo’limi boshlig’i",
            telefon: "+998 88 855 20 12",
          },
          {
            id: 7,
            fio: "Nusratov Farruxmirzo Furqat o’g’li",
            lavozimi: "Iqtisodchi",
            telefon: "+998 94 217 11 12",
          },
          {
            id: 8,
            fio: "Qurbonov O‘ktam Radjabovich",
            lavozimi: "O‘quv va magistratura bo‘limi boshlig‘i",
            telefon: "+998 93 809 66 05",
          },
          {
            id: 9,
            fio: "Haydarov Shahriyor Shuxrat o‘g‘li",
            lavozimi:
              "Yoshlar bilan ishlash, ma’naviyat va ma’rifat bo‘limi boshlig'i",
            telefon: "+998 90 635 96 16",
          },
          {
            id: 10,
            fio: "Qo’yliyev Ulug’bek Ravshanovich",
            lavozimi: "Sirtqi bo’lim boshlig’i",
            telefon: "+998 94 322 57 75",
          },
          {
            id: 11,
            fio: "Usmonova Surayyo Muxitdinovna",
            lavozimi:
              "Ilmiy-tadqiqotlar, innovatsiyalar va ilmiy-pedagogik kadrlar tayyorlash sektori boshlig’i",
            telefon: "+998 93 651 30 10",
          },
          {
            id: 12,
            fio: "Jo‘rayev Uchqun Yusuf o‘g‘li",
            lavozimi: "Registrator ofisi boshlig‘i",
            telefon: "+998 99 708 78 04",
          },
          {
            id: 13,
            fio: "Normurodov Olmos Dilshod o‘g‘li",
            lavozimi:
              "Ta’lim sifatini nazorat qilish bo’limi boshlig’i o'rinbosari",
            telefon: "+998 94 025 15 29",
          },
          {
            id: 14,
            fio: "Karimov Behruz Ibrohimbekovich",
            lavozimi: "Marketing va talabalar amaliyoti bo‘limi boshlig‘i",
            telefon: "+998 90 635 56 58",
          },
          {
            id: 15,
            fio: "Rаxmаtov Nurbek Erkinovich",
            lavozimi:
              "Psixologiya va xorijiy tillar fakulteti dekan o‘rinbosari",
            telefon: "+998 90 710 64 46",
          },
          {
            id: 16,
            fio: "Xalilov Bekzod Jobir o‘g‘li",
            lavozimi:
              "Oliy ta’lim jarayonlarini boshqarish (HEMIS) axborot tizimi mas’ul xodimi",
            telefon: "+998 94 771 01 24",
          },
          {
            id: 17,
            fio: "Baratova Dilafruz Sharifovna",
            lavozimi: "Psixologiya kafedrasi mudiri",
            telefon: "+998 94 445 36 66",
          },
          {
            id: 18,
            fio: "Qurbonov Abdujalil Maxmutovich",
            lavozimi: "Filologiya kafedrasi mudiri",
            telefon: "+998 93 476 06 75",
          },
          {
            id: 19,
            fio: "Kurbanov Baxodir Samatovich",
            lavozimi: "Pedagogika va umumiy fanlar kafedrasi mudiri",
            telefon: "+998 99 707 36 50",
          },
        ],
      },
      distance: {
        title: "Masofaviy Ta'lim Tizimi",
        description1: "Buxoro Xalqaro Universitetida Masofaviy Ta'lim",
        description2: `Buxoro Xalqaro Universitetida bugungi kunda zamon talablariga
        ko'ra masofaviy ta'lim ham yo'lga qo'yilgan. Bu esa korxona va
        tashkilotlarda ishlaydigan talabgorlar uchun juda ham qulay.`,
        description3: `Masofaviy ta'lim bo'yicha universitetda barcha shart-sharoitlar
        yaratilgan bo'lib, qolaversa professor-o'qituvchilarning
        videoyozuv darslari juda yuqori sifatda olingan.`,
        list_head: "Mavjud Masofaviy Ta'lim Yo'nalishlari",
        list_body1: "Milliy g'oya, ma'naviyat asoslari va huquq ta'limi",
        list_body2: "Psixologiya",
        list_body3: "Iqtisodiyot",
        list_body4: "Boshlang'ich ta'lim",
        list_body5: "Maktabgacha ta'lim",
        list_body6: "O'zbek tili va adabiyoti",
        list_body7: "Logistika (transport va boshqa sohalar bo'yicha)",
        list_body8: "Ona tili va adabiyoti",
        list_body9: "Matematika",
        body1: "Qo'shimcha ma'lumot:",
        body2: `Masofaviy ta'lim dasturiga yozilish uchun universitetning rasmiy
        veb-sayti yoki talabalar ishlari bo'limiga murojaat qilishingiz
        mumkin.`,
      },
      dormitory: {
        title: "BUXORO XALQARO UNIVERSITETI TALABALAR TURAR JOYI",
        description: `Universitetimizda talabalar uchun qulay va zamonaviy turar joylar
        taqdim etiladi. Turar joy binolarida barcha qulayliklar yaratilgan
        bo'lib, talabalarimiz xavfsiz va qulay sharoitda yashashlari uchun
        barcha shart-sharoitlar mavjud.`,
        list1: "Har bir xonada 2-3 kishi uchun joy",
        list2: "Oshxona va yuvinish xonalari",
        list3: "24/7 xavfsizlik va WiFi tarmog'i",
        list4: "O'qish va dam olish zallari",
        joy1: "Turar joy binosi tashqi ko'rinishi",
        joy2: "Qulay yotoq xonalari",
        joy3: "O'qish uchun maxsus joy",
        joy4: "Dam olish zali",
        rules: "Turar joy qoidalari:",
        rule1: "Har bir talaba toza va tartibli bo'lishi shart",
        rule2: "23:00 dan keyin shovqin qilish taqiqlanadi",
        rule3: "Mehmonlarni ro'yxatdan o'tkazish majburiy",
        rule4: "Oylik to'lovlar vaqtida amalga oshirilishi kerak",
      },
      ecozone: {
        apple: "Olma",
        cherry: "Gilos",
        apricot: "O'rik",
        peach: "Shaftoli",
        pear: "Nok",
        juniper: "Archa",
        text: "Buxoro Xalqaro Universiteti yashil makon daraxtlari",
        text1:
          "Ekilgan daraxt turlari va ularning taqsimoti bo'yicha statistik ma'lumotlar",
        text2: "Universitet hududidagi daraxtlar",
        text3: "Jami ko'chatlar",
        text4: "CO₂ yutilishi",
        text5: "650 tonna/yil",
        text6: "Havo tozalash",
        text7: "3,500 m³/kun",
        text8: "Daraxt turlari",
        text9: "Barcha daraxt turlari bo'yicha batafsil ma'lumot",
        text10: "Daraxt turi",
        text11: "Soni",
        text12: "Foiz",
        text13: "Rasm",
        text14: "Grafik",
        text15: "Ekologik Ta'sir",
        text16: "Iqlim o'zgarishiga qarshi kurash",
        text17: "Daraxtlar yiliga 650 tonna CO₂ ni yutadi",
        text18: "Havoni tozalash",
        text19: "Kuniga 3,500 m³ toza havo ishlab chiqaradi",
        text20: "Biodiversitetni qo'llab-quvvatlash",
        text21: "10+ turdagi qushlar va hasharotlar uchun yashash muhiti",
        text22: "ta",
      },
      korusel: {
        title: "Yangiliklar",
        text: `Talabalarimizga davlat namunasidagi`,
        t: " diplomlar topshirildi.",
        text1: ` 2023-yil 19-iyun sanasida 19 nafar,
                     
                    `,
        t1: "2024-yil 5-avgust sanasida 40 nafar",
        t2: "magistratura mutaxasisligi muvaffaqiyatli",
        t3: "bitirganlarga QR kodli diplomlar topshirildi.",
        text2: `Ta'lim sifatini oshirish - Yangi`,
        t4: " O'zbekiston taraqqiyotining yakka-yu ",
        t5: "yagona to'g'ri yo'lidir",
        text3: "Shavkat Mirziyoyev",
        text4: "O'zbekiston Respublikasi Prezidenti",
        text5: `Universitetimiz tomonidan`,
        t6: "2025-yilning 16-mart kuni",
        text6: "❝ PSIXOLOGIYA FANLARI BO’YICHA XALQARO KONFRENSIYA❝",
        text7: "bo’lib o’tdi.",
      },
    },
  },
  ru: {
    translation: {
      support: {
        title: "Центр поддержки студентов",
        description:
          "Центр, предоставляющий услуги для роста и развития студентов",
        description1:
          "Отдел работы с студентами - это подразделение, предоставляющее услуги для роста и развития студентов, поддерживающее их в достижении успеха.",
        description2:
          "В нашем отделе вы можете воспользоваться следующими услугами:",
        services: "Услуги для студентов",
        service1: "Справочная информация",
        service2: "(для военной службы и других мест)",
        service3: "Восстановление ID карты",
        service4: "Подготовка к экзаменам",
        service5: "Помощь в решении проблем студентов",
        more: "Подробнее",
        support: "Центр карьеры",
        support1: "Услуги по трудоустройству",
        support2: "Помощь в размещении для получения квалификации",
        support3: "Отправка заявки",
        description3: "Услуги по организации мероприятий",
        content: "Вопросы организации мероприятий",
        content1: "Организация путешествий",
        content2: "Регистрация на мероприятие",
        content3: "Нужна помощь?",
        content4:
          "Если у вас есть дополнительные вопросы или вам нужна помощь, свяжитесь с нами",
        content5: "Контакты",
      },

      navbar: {
        nav_item_title0: "Общая информация",
        nav_item_title1: "Достижения института",
        nav_item_title2: "Партнёрства",
        nav_item_title3: "Электронная библиотека",
        nav_item_title4: "Научные журналы",
        nav_item_title5: "Контакт",
        nav_item1: "Вступительное слово",
        nav_item2: "Кампусы",
        nav_item3: "Связаться с нами",
        nav_item4: "Направления",
        nav_item5: "Академический календарь",
        nav_item6: "Новости",
        nav_item7: "Ректорат",
        nav_item8: "Факультеты",
        nav_item9: "Новости",
        nav_item10: "Медиа",
        nav_item11: "Факультет",
        nav_item12: "Партнёрские журналы",
        nav_item13: "Научные информационные бюллетени",
        btn: "Приём 2025",
      },
      rektor: {
        title: "Ректор",
        text: "Ректор Бухарского международного университета, вице-президент Международной академии психологических наук, доктор психологических наук, профессор.",
        contact1: "Электронная почта:",
        day: "Понедельник-суббота",
        contact2: "Телефонный номер:",
        contact3: "Дни приема:",
        info: "Понедельник-суббота",
        sobirova:
          "Действительный член Международной академии психологических наук, доктор психологических наук, профессор.",
        content:
          "Шариф Рамазанович Баратов, ректор Бухарского международного университета, родился 22 марта 1960 года в селе Талича, Коганский район, Бухарская область, Республика Узбекистан. В 1977 году окончил среднюю школу №7 в Коганском районе, а в 1983 году с отличием окончил Бухарский государственный педагогический институт и был принят на работу преподавателем кафедры психологии того же института.",
        content1:
          "С 1985 по 1987 год был научным сотрудником Института общей и педагогической психологии в Москве. С 1987 по 1990 год обучался в аспирантуре того же института и в 1990 году защитил кандидатскую диссертацию. С 1991 по 2021 год работал в Бухарском государственном университете на должностях преподавателя, заведующего кафедрой психологии, декана факультета и проректора по научной работе. В этот период также некоторое время (2002-2006 гг.) по рекомендации областного хокима занимал должность руководителя Бухарского областного отделения Республиканского центра духовности и просвещения.",
        content2:
          "С 2021 года по настоящее время является основателем и ректором Бухарского международного университета.",
      },
      statistic: {
        title1: "Количество кафедр:",
        title2: "Направления обучения:",
        title2_text1: "Бакалавриат",
        title2_text2: "Магистратура",
        title2_text3: "Аспирантура",
        title3: "Научный потенциал (%):",
      },
      contract: {
        title: "Научное сотрудничество",
      },
      litsenziya: {
        title1: "Лицензированное образование",
        text1:
          "29 октября 2021 года Государственная инспекция по контролю за качеством образования при Кабинете Министров Узбекистана выдала Бухарскому институту психологии и иностранных языков лицензию номер 0037 на предоставление высших образовательных услуг, а Министерство высшего образования, науки и инноваций Республики Узбекистан выдало лицензию номер 277162 на новые направления с 16 мая 2024 года.",
        title2: "Послевузовское образование",
        text2: "ДОКТОРАНТУРА",
      },
      yutuq: {
        title: "Достижения института",
      },
      professor: {
        title: "Преподавательский состав",
      },
      kampus: {
        header: "КАМПУСЫ",
        title: "Кампусы нашего института",
        bn1: "ПЕРВЫЙ КАМПУС",
        bn1_text:
          "Бухарская область, Каганский район, улица Абая 20, Б.Накшбанд М.Ф.У.",
        bn2: "ВТОРОЙ КАМПУС",
        bn2_text:
          "Город Бухара, Ситораи Мохи-Хоса, Гиждуванская улица, 250 дом.",
        bn3: "ТРЕТИЙ КАМПУС",
        bn3_text:
          "Город Бухара, Ситораи Мохи-Хоса, Гиждуванская улица, 250 дом.",
        bn4: "СТУДЕНЧЕСКОЕ ОБЩЕЖИТИЕ",
        bn4_text:
          "Бухарская область, Каганский район, улица Абая 20, Б.Накшбанд М.Ф.У.",
        td1: "Общая площадь",
        td2: "3 га",
        td3: "Количество блоков",
        td4: "5 блоков",
        td5: "Аудиторий",
        td6: "40 аудиторий",
        td7: "Парковка",
        td8: "250 мест для авто",
        td9: "Общежитие",
        td10: "300 мест",
        td11: "Эко-зона",
        td12: "есть",
      },
      diplom: {
        title: "Студентам выданы дипломы государственного образца",
        text: "19 июня 2023 года 19 магистрантам и 5 августа 2024 года 40 магистрантам были вручены дипломы с QR-кодом.",
      },
      salohiyat: {
        title: `"Научный потенциал Бухарский Международный Университет"`,
        text: `"Показатель научного потенциала Бухарский Международный Университет за 2021–2024 годы. В настоящее время научный потенциал нашего института составляет 61%.`,
        graf_title1: "Научный потенциал и результаты",
        graf_title2: "Результаты (кол-во)",
        graf_title3: "Период 2021–2024 гг.",
      }
      ,

      gallery: {
        title: "Галерея",
        tab_btn1: "Фотогалерея",
        tab_btn2: "Видеогалерея",
      },
      directions: {
        title: "Направления образования",
        descr:
          "Вы можете ознакомиться с направлениями образования нашего университета через следующую таблицу",
        tab_btn1: "Очное образование",
        tab_btn2: "Заочное образование",
        tab_btn3: "Вечернее образование",
        tab_btn4: "Магистратура",
        tab_btn5: "Удаленное обучение",
        th1: "Направление",
        th2: "Продолжительность обучения",
        th3: "Прием",
        th4: "Квота",
        th5: "Сумма контракта",

        // kunduzgi bakalavr
        th1_td1: "60310900 – Психология (по видам деятельности)",
        th1_td2: "60111800 – Иностранный язык и литература (по языкам)",
        th1_td3:
          "60112600 – Иностранный язык в дошкольном и начальном образовании",
        th1_td4: "60310100 – Экономика (по отраслям и сферам)",
        th1_td5: "60111400 – Узбекский язык и литература",
        th1_td6: "60220300 – История (по странам и направлениям)",
        th1_td7: "60111300 – Музыкальное образование",
        th1_td8: "60110200 – Дошкольное образование",
        th1_td9: "60110500 – Начальное образование",
        th1_td10: "60112200 – Физическая культура",
        th1_td11:
          "60112100 – Национальная идея, основы духовности и правового образования",
        th1_td12:
          "60610100 – Компьютерные науки и технологии программирования (по направлениям)",
        th1_td13: "61010400 – Туризм (по направлениям деятельности)",
        th1_td14: "60110400 – Дефектология (по видам деятельности)",

        th1_tda1: "4 года",
        th1_tda2: "4 года",
        th1_tda3: "4 года",
        th1_tda4: "4 года",
        th1_tda5: "4 года",
        th1_tda6: "4 года",
        th1_tda7: "3 года",
        th1_tda8: "3 года",
        th1_tda9: "4 года",
        th1_tda10: "3 года",
        th1_tda11: "4 года",
        th1_tda12: "4 года",
        th1_tda13: "4 года",
        th1_tda14: "4 года",

        // sirtqi
        th1_td15: "60310900 – Психология (по видам деятельности)",
        th1_td16:
          "60112600 – Иностранный язык в дошкольном и начальном образовании",
        th1_td17: "60310100 – Экономика (по отраслям и сферам)",
        th1_td18: "60220300 – История (по странам и направлениям)",
        th1_td19: "60110500 – Начальное образование",
        th1_td20: "60111300 – Музыкальное образование",
        th1_td21: "60112200 – Физическая культура",
        th1_td22:
          "60112100 – Национальная идея, основы духовности и правового образования",
        th1_td23:
          "60610100 – Компьютерные науки и технологии программирования (по направлениям)",
        th1_td24: "61010400 – Туризм (по направлениям деятельности)",
        th1_td25: "60110400 – Дефектология (по видам деятельности)",
        th1_td26: "61110400 – Узбекский язык и литература",

        th1_tda15: "5 лет",
        th1_tda16: "5 лет",
        th1_tda17: "5 лет",
        th1_tda18: "5 лет",
        th1_tda19: "5 лет",
        th1_tda20: "5 лет",
        th1_tda21: "5 лет",
        th1_tda22: "5 лет",
        th1_tda23: "5 лет",
        th1_tda24: "5 лет",
        th1_tda25: "5 лет",
        th1_tda26: "5 лет",
        th1_tda27: "5 лет",

        // kechki talim uzb
        th1_td28: "60110500 – Начальное образование",
        th1_td29: "60111300 – Музыкальное образование",
        th1_td30: "60111400 – Узбекский язык и литература",
        th1_td31: "60112200 – Физическая культура",
        th1_td32: "60111800 – Иностранный язык и литература (по языкам)",
        th1_tda28: "5 лет",
        th1_tda29: "5 лет",
        th1_tda30: "5 лет",
        th1_tda31: "5 лет",
        th1_tda32: "5 лет",

        // Magistr
        th1_td33: "70310901 – Психология (по видам деятельности)",
        th1_td34: "70310102 – Экономика (по отраслям и сферам)",
        th1_td35:
          "70110501 – Теория и методика образования и воспитания (начальное образование)",
        th1_td36: "70111301 – Музыкальное образование и искусство",
        th1_td37:
          "70112201 – Теория и методика физической культуры и спортивных занятий",
        th1_td38:
          "70110101 – Теория и история педагогики (по виду деятельности)",
        th1_td39: "70111401 – Узбекский язык и литература",
        th1_td40: "70230101 – Лингвистика (по языкам)",

        th1_tda33: "2 года",
        th1_tda34: "2 года",
        th1_tda35: "2 года",
        th1_tda36: "2 года",
        th1_tda37: "2 года",
        th1_tda38: "2 года",
        th1_tda39: "2 года",
        th1_tda40: "2 года",

        th1_td41: "60310300 - Психология",
        th1_td42: "60410100 - Экономика",
        th1_td43: "60110700 - Узбекский язык и литература",
        th1_td44: "60110200 - Дошкольное образование",
        th1_td45: "60110400 - Начальное образование",
        th1_td46:
          "60111100 - Национальная идея, основы духовности и правового образования",
        th1_td47: "61010400 - Логистика",
        th1_td48: "60540100 - Математика",
        th1_td49: "60110800 - Родной язык и литература (Русский язык)",

        th1_tda41: "4 года",
        th1_tda42: "4 года",
        th1_tda43: "4 года",
        th1_tda44: "3 года",
        th1_tda45: "5 лет",
        th1_tda46: "4 года",
        th1_tda47: "4 года",
        th1_tda48: "4 года",
        th1_tda49: "4 года",

        th2_addition: " лет",
        th3_addition1: "завершено",
        th3_addition2: "активно",
        th5_addition: "{count} сум",
      },

      content: {
        title: "Полезная информация",
        text: "Это не только центр жизни студентов, но и пересечение различных культур, а также место для нахождения друзей на всю жизнь.",
        card1: "Платформа Hemis",
        card2: "Электронная библиотека",
        card3: "Получение контракта",
        card4: "Расписание занятий",
        card5: "Предложения и жалобы",
        card6: "Студенческое общежитие",
      },
      footer: {
        adress1:
          "Бухарская область, Когонский район, Б.Накшбанд МФЙ, улица Абая, дом 20",
        adress2:
          "Город Бухара, Ситораи Мохи-Хоса МФЙ, улица Гидждувон, дом 250",
        title: "Социальные страницы",
        copyright: "Авторские права © 2024. BuxPXTI. Все права защищены",
      },
      modal: {
        title: "Введите ваши данные и вопросы",
        label1: "Ф.И.О",
        label2: "Ваш номер телефона",
        label3: "Сообщение",
        btn: "Отправить",
        placeholder1: "Фамилия и имя",
        placeholder2: "Ваш номер телефона",
      },
      welcome_speech: {
        title: "Приветственное слово",
        descr: "Учредитель университета Б.Ш.Р.",
        title1:
          "Добро пожаловать в Бухарский институт психологии и иностранных языков!",
        title2:
          'Учредитель и ректор "Бухарского института психологии и иностранных языков" Баротов Шариф Рамазанович',
        text1:
          "В соответствии с пунктом 98 протокола №4, сформированного в ходе визита Президента Республики Узбекистан Ш.М.Мирзиёева в Бухарскую область 21-22 января 2021 года, а также по итогам внеочередной сессии Совета народных депутатов области и выполнению указаний, данный институт был организован.\n" +
          "Бухарский институт психологии и иностранных языков осуществляет свою деятельность на основании лицензии №432747, выданной Государственной инспекцией по контролю за качеством образования при Кабинете Министров Республики Узбекистан. (Институт был основан в 2021 году)",
      },
      contact: {
        title: "Свяжитесь с нами",
        title2: "Бухарский институт психологии и иностранных языков",
        descr2:
          "Бухарский институт психологии и иностранных языков – справедливый, честный, полезный для общества центр подготовки глобальных кадров.",
        linkTitle1: "Телефон 1",
        linkTitle2: "Телефон 2",
        linkTitle3: "Telegram",
        linkTitle4: "Facebook",
        linkTitle5: "Youtube",
        linkTitle6: "Instagram",
        linkTitle7: "Вебсайт",
      },
      news: {
        title: "Последние новости",
        header: "НОВОСТИ",
        readMore: "Подробнее",
        allNewsBtn: "Все новости",
      },
      rektorat: {
        rector: "БАРАТОВ ШАРИФ РАМАЗОНОВИЧ",
        pro_rector1: "Собирова Дилафруз Абдурозиковна",
        pro_rector2: "Баратов Хумоин Шарифович",
        pro_rector3: "Мухторов Эркин Мустафаевич",

        title: "Организационная структура института",
        header: "Ректор",
        text: "РЕКТОР БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА, ВИЦЕ-ПРЕЗИДЕНТ МЕЖДУНАРОДНОЙ АКАДЕМИИ ПСИХОЛОГИЧЕСКИХ НАУК. ДОКТОР ПСИХОЛОГИЧЕСКИХ НАУК, ПРОФЕССОР.",
        contact1: "Электронная почта:",
        contact2: "Телефонный номер:",
        contact3: "Дни приема:",
        title1: "Проректор",
        text1: "Проректор по научной работе и инновациям",
        rank1:
          "Действительный член Международной академии психологических наук, доктор психологических наук, профессор.",
        title2: "Проректор",
        text2: "Проректор по делам молодежи и духовно-просветительской работе",
        rank2: "",

        title3: "Проректор",
        text3: "Проректор по учебной работе",
        rank3: "",
        group: "Профессорско-преподавательский состав",
      },
      campus: {
        title: "Кампусы нашего университета",
        text: "Это не только центр студенческой жизни, но и пересечение различных культур и место, где заводятся дружбы на всю жизнь.",
        card_title1: "Получение контракта",
        card_title2: "Платформа Hemis",
        card_title3: "Расписание занятий",
        card_title4: "Электронная библиотека",
        card_title5: "Предложения и жалобы",
        card_title6: "Студенческое общежитие",
        card_title7: "Спортивные клубы",
        card_title8: "Зеленая зона отдыха",
        card_title9: "Уютная кафетерия",
        card_title10: "Конференц-зал",
        card_link1: "Открыть карту",
        card_link2: "student.zarmeduniver.com",
        card_link3: "3D тур",
        card_link4: "library.zarmeduniver.com",
        card_link5: "Подать заявку",
        card_link6: "Подать заявку",
        card_link7: "Подать заявку",
        card_link8: "Карта территории",
        card_link9: "Меню",
        card_link10: "Заказать мероприятие",
        tab1: "Бухарский кампус",
        tab2: "Самаркандский кампус",
      },
      academic: {
        title: "Академический календарь",
        card1_title: "График учебного процесса",
        card2_title: "Организация учебного процесса",
        card3_title: "Праздники",
        table1_tr1_td1: "Учебный год",
        table1_tr1_td2: "2023/2024",
        table1_tr2_td1: "Количество модулей",
        table1_tr2_td2: " модуля",
        table1_tr3_td1: "Сессии",
        table1_tr3_td2: " сессии",
        table1_tr4_td1: "Учебные дни",
        table1_tr4_td2: " дни",
        table1_tr5_td1: "Дни сессии",
        table1_tr5_td2: " дни",
        table2_th1: "Модуль",
        table2_th2: "Срок",
        table2_th3: "Сессия",
        table2_th4: "Мейк-ап",
        table2_th5: "Каникулы",
        table2_th1_td1: "1 - семестр",
        table2_th1_td2: "2 - семестр",
        table3_tr1_td1: "День преподавателя и наставника",
        table3_tr1_td2: "1 октября",
        table3_tr1_td3: "выходной день",
        table3_tr2_td1: "Неделя по вступлению в кредит",
        table3_tr2_td2: "10 - 15 октября",
        table3_tr2_td3: "рабочие дни",
        table3_tr3_td1: "Новый год",
        table3_tr3_td2: "31 декабря - 3 января",
        table3_tr3_td3: "выходные дни",
        table3_tr4_td1: "Международный женский день",
        table3_tr4_td2: "8 марта",
        table3_tr4_td3: "выходной день",
        table3_tr5_td1: "Навруз",
        table3_tr5_td2: "21 марта",
        table3_tr5_td3: "выходной день",
        table3_tr6_td1: "День памяти и уважения",
        table3_tr6_td2: "9 мая",
        table3_tr6_td3: "выходной день",
        table3_tr7_td1: "День независимости",
        table3_tr7_td2: "1 сентября",
        table3_tr7_td3: "выходной день",
        qr_card_text:
          "Приказ администрации «О подтверждении академического календаря на 2023/2024 учебный год».",
        qr_b1: "Регистрация",
        qr_b2: "Дата",
      },
      science: {
        title: "Научные журналы",
        header: "НАУЧНЫЕ ЖУРНАЛЫ",
      },
      campuses: {
        title: "Кампусы",
        descr: "Университет имеет кампусы в Бухаре и Самарканде",
        tab1_btn: "Бухара",
        tab2_btn: "Самарканд",
        card_title1: "Проект кампуса Бухары",
        card_title2: "Проект кампуса Самарканда",
        card_item1: "Общая площадь",
        card_item2: "Количество блоков",
        card_item3: "Аудитории",
        card_item4: "Парковка",
        card_item5: "Общежитие",
        card_item6: "Эко-зона",
        title_secondary: "Карта кампуса",
        map_item1: "Основной кампус",
        map_item2: "Блок под активными зонами",
        map_item3: "Блок под спортзалом",
        map_item4: "Медицинский корпус (строится)",
        map_item5: "Здание ректората (строится)",
        map_item6: "Автостоянка",
        map_item7: "Эко-зоны",
        data1: " м²",
        data2: " блоков",
        data3: " аудитории",
        data4: " авто мест",
        data5: "место",
        data6: "доступно",
      },
      purpose: {
        title: "Цель, Задачи, Ценности",
        card1_title: "Цель",
        card1_text:
          "ZARMED Университет ставит своей целью подготовку квалифицированных кадров, которые через свои знания и навыки будут вносить вклад в развитие человечества на местном, национальном и глобальном уровнях.",
        card2_title: "Задача",
        card2_text:
          "Наша задача - стать ведущим учебным заведением в Центральной Азии к 2030 году. Мы стремимся предоставлять актуальные и гибкие учебные программы, которые соответствуют требованиям времени и новому Узбекистану.",
        card3_title: "Преданность",
        card3_text:
          "Это отражается в нашей жесткой трудовой этике и стремлении к совершенству.",
        card4_title: "Творчество",
        card4_text:
          "Это проявляется в наших новых идеях, интеллектуальном интересе, желании рисковать и предпринимательском духе.",
        card5_title: "Гибкость",
        card5_text:
          "Это проявляется в нашей способности адаптироваться к изменениям в быстро развивающемся мире.",
        card6_title: "Честность",
        card6_text:
          "Мы проявляем преданность высшим моральным стандартам в личном и профессиональном поведении, а также в управлении и всех наших действиях через прозрачность и ответственность.",
        card7_title: "Сотрудничество",
        card7_text:
          "Это отражается в нашей работе с обществом, промышленностью, государством и, что самое важное, с нашими студентами.",
      },
      symbols: {
        title: "Символы",
        btn: "Скачать {name}",
        title1: "Круглая надпись",
        text1: "Название университета",
        title2: "Солнце",
        text2: "Изображение восходящего солнца на логотипе",
        title3: "Крылатый Барс",
        text3:
          "Это символ города Самарканда, который часто упоминается в городских легендах.",
        title4: "Книга",
        text4: "Символ науки. Неотъемлемая часть любого логотипа университета.",
        title5: "Мадраса портал",
        text5: "Дополняет логотип восточным духом.",
        title6: "Восьмиугольная звезда",
        text6: "Символ Востока и Ислама",
        text7: "Год основания университета",
        title_madhiya1: "Гимн университета",
        title_madhiya2: "Текст гимна",
      },
      exam: {
        title: "Примеры экзаменов",
        card1_title: "Экзамены по контракту",
        card2_title: "Примеры экзаменов для получения гранта",
        card1_item1: "Дата вступления – 1",
        card1_item2: "Биология март – 2024",
        card1_item3: "Химия март – 2024",
        card1_item4: "Математика февраль – 2024",
        card2_item1: "Дата вступления – 1",
        card2_item2: "Биология март – 2024",
        card2_item3: "Химия март – 2024",
        card2_item4: "Математика февраль – 2024",
      },
      faculties: {
        title: "Факультеты",
        descr: "Бакалавриат (BSc) 2023/2024 учебный год",
      },

      batafsil: {
        title: "ДЕТАЛИ",
      },
      partnership: {
        title: "Партнёрства нашего института",
      },
      statistics: {
        title: "Университет БМУ в городе Бухара — это …",
        text1: "ФАКУЛЬТЕТЫ",
        text2: "ВЫПУСКНИКИ",
        text3: "СТУДЕНТЫ БАКАЛАВРИАТА",
        text4: "МЕСТНЫЕ ПРЕПОДАВАТЕЛИ",
        text5: "МАГИСТРАНТЫ",
        text6: "СТУДЕНЧЕСКИЕ ОБЩЕЖИТИЯ",
        text7: "УЧЕБНЫЕ КОРПУСА",
        text8: "СЛУШАТЕЛИ ПОДГОТОВИТЕЛЬНЫХ КУРСОВ БМУ",
        text9: "ИНОСТРАННЫЕ ПРЕПОДАВАТЕЛИ",
        text10: "ПРЕПОДАВАТЕЛИ ПОДГОТОВИТЕЛЬНЫХ КУРСОВ БМУ",
        text11: "МИКРОАВТОБУСЫ БМУ",
      },
      university: {
        name: "УНИВЕРСИТЕТ",
        title: "О Университете",
        about: {
          title: "О БМУ",
          rectorAddress: "Обращение ректора",
          goals: "Наша цель",
          qualitySystem: "Система управления качеством",
          facts: "Цифры и факты",
          codeOfConduct: "Кодекс поведения",
          directions: "Направления образования",
          partnership: "Международное сотрудничество",
          scientificactivity: "Научная деятельность",
        },
        rectorOffice: {
          title: "Ректорат",
          rector: "Ректор",
          viceRectors: "Проректоры",
          managers: "Менеджеры",
          staff: "Сотрудники",
          departmentHeads: "Руководители подразделений",
          professors: "Профессора",
          socie: "SOCIE (Факультет информационных технологий)",
          sbl: "SBL (Факультет бизнеса и логистики)",
          ge: "GE (Общее образование)",
        },
        students: {
          title: "СТУДЕНТЫ",
          association: "Ассоциация студентов",
          support: "Центр поддержки студентов",
          library: "Информационный ресурсный центр",
          dormitory: "Общежитие",
          timetable: "Расписание учебного года",
          successful: "Успешные студенты",
          distance: "Дистанционное обучение",
        },
        infrastructure: {
          title: "Инфраструктура",
          dataCenter: "Центр обработки данных",
          printing: "Типография",
          buildings: "Здания",
          gym: "Спортивный зал",
          dormitory: "Общежитие",
          conferenceHall: "Конференц-зал",
          innovationCenter: "Инновационный центр",
          transferOffice: "Офис перевода",
          cyberLab: "Лаборатория кибербезопасности",
          classrooms: "Учебные классы",
          stadium: "Стадион",
          publicOffer: "Общественное предложение",
          sponsorship: "Спонсорство",
          researchCenters: "Исследовательские центры",
          ecozone: "Зеленый университет",
        },
        symbols: {
          title: "Символы Университета",
          emblem: "Эмблема и символ БМУ",
        },
        apply: {
          title: "Подача заявления в Инха университет в Ташкенте",
          button: "Подача заявки",
        },
        visit: {
          title: "Запланируйте визит в Инха университет в Ташкенте",
          button: "Связаться с нами",
        },
      },
      aboutUniversity: {
        title: "КРАТКАЯ ИНФОРМАЦИЯ О БУХАРСКОМ МЕЖДУНАРОДНОМ УНИВЕРСИТЕТЕ",
        description1:
          "В ходе визита Президента Ш.М. Мирзиёева в Бухарскую область 21-22 января 2021 года и на очередной внеочередной сессии Совета депутатов народных в настоящее время был дан указ о создании университета в соответствии с пунктом 98 протокола №4.",
        description2:
          "На данный момент в нашем университете есть 3 кампуса, общий учебный корпус на 6000 мест и общежитие на 420 мест. У нас есть 16 бакалаврских, 8 магистерских программ и 6 докторских программ по направлениям психология, филология, педагогика.",
        description3:
          "С 2021 года в рамках соглашения с Центром развития цифровых образовательных технологий, отчеты студентов ведутся на платформе «HEMIS». На сегодняшний день дипломы были вручены студентам, завершившим магистратуру трижды.",
        description4:
          "За 4 года наш университет достиг высоких результатов: увеличилось количество студентов, выросло количество учебных корпусов, качество образования соответствует международным стандартам, научный потенциал составил 69%, количество образовательных направлений возросло до 24, университет получил лицензию на предоставление послевузовского образования, был создан научный совет по психологии, а также достигнуты успехи в международных научных журналах. На основании соответствующей лицензии Кабинета Министров Республики Узбекистан, с 28 марта 2025 года университет был переименован в БУХАРСКИЙ МЕЖДУНАРОДНЫЙ УНИВЕРСИТЕТ.",
      },
      association: {
        title: "Союз молодежи Узбекистана",
        name: "БАРАКАЕВ ХУМОЮН МИРЗО ИЛХОМОВИЧ",
        description1:
          'Руководитель Университета "Союз молодежи Узбекистана" НО',
        title1:
          "ЦЕЛИ И ЗАДАЧИ НАЧАЛЬНОЙ ОРГАНИЗАЦИИ СОЮЗА МОЛОДЕЖИ УЗБЕКИСТАНА В БУХАРСКОМ МЕЖДУНАРОДНОМ УНИВЕРСИТЕТЕ",
        title1_description:
          "Основная цель начальной организации — содействовать созданию условий для получения образования и воспитания молодежи в учебных заведениях, защищать их права и интересы, а также способствовать формированию гармонично развитых личностей.",
        title2: "Начальная организация ставит перед собой следующие задачи:",
        title2_list1:
          "Воспитание молодежи в духе любви и преданности Родине, углубленное усвоение национальной идеи независимости, национальных ценностей, религиозной терпимости, межнационального согласия и семейных ценностей;",
        title2_list2:
          "Объяснение молодежи их гражданских прав и обязанностей, установленных Конституцией и законами Республики Узбекистан, разъяснение сущности демократических и правовых реформ, проводимых в стране;",
        title2_list3:
          "Изучение проблем молодежи в высших учебных заведениях, качества образования, уровня усвоения наук, посещаемости, использования учебников и библиотек, рассмотрение и содействие в решении обращений молодежи;",
        title2_list4:
          "Мероприятия, направленные на углубленное обучение молодежи, изучение иностранных языков и освоение современных информационно-коммуникационных технологий, а также на их профессиональную ориентацию;",
        title2_list5:
          "Выявление талантливой молодежи, поддержка и мотивация их развития, создание клубов и кружков, способствующих развитию интеллектуальных и творческих способностей;",
        title2_list6:
          "Поддержка работы по созданию удобных условий для инклюзивного образования молодежи с ограниченными возможностями и специальными потребностями;",
        title2_list7:
          "Работа с детьми из неблагополучных семей, социальной адаптации молодежи, вернувшейся в общество, а также возвращение студентов, регулярно пропускающих занятия, в образовательный процесс, предотвращение ранних браков среди девушек;",
        title2_list8:
          "Проведение правовых и воспитательных мероприятий, направленных на профилактику преступности и правонарушений среди молодежи;",
        title2_list9:
          "Широкое пропагандирование чтения среди молодежи, увеличение любви к книгам и развитие культуры чтения;",
        title2_list10:
          'Формирование идеологического иммунитета против вредных явлений под маской "массовой культуры", информационных атак, религиозного фанатизма, миссионерства и экстремистских идей;',
        title2_list11:
          "Развитие молодежного туризма, организация посещений исторических памятников, святых мест, музеев, театров и построек, возведенных в период независимости;",
        title2_list12:
          "Широкая пропаганда спорта среди молодежи, создание условий для участия девушек в спортивных соревнованиях;",
        title2_list13:
          "Организация пропагандистских мероприятий, направленных на распространение медицинской культуры и профилактику заболеваний;",
        title2_list14:
          "Повышение экологической культуры через пропаганду охраны окружающей среды и рациональное использование природных ресурсов;",
        title3: "ПРИЕМ В СОЮЗ МОЛОДЕЖИ",
        title3_head:
          "Юридические и физические лица могут стать членами Союза в соответствии с порядком, установленным этим Уставом:",
        title3_list1:
          "Граждане Республики Узбекистан, достигшие 14 лет и не старше 30 лет, а также иностранные граждане, проживающие на постоянной основе в Узбекистане, могут стать членами Союза, выразив намерение поддерживать его цели.",
        title3_list2:
          "Член Союза, являющийся физическим лицом, не подлежит возрастным ограничениям, предусмотренным пунктом 4.2 Устава, если он выбран в руководящий орган Союза.",
        title3_list3:
          "Прием и выход физических лиц из Союза осуществляется на Общем собрании начальной организации, а также на заседании Совета начальной организации (если таковой сформирован).",
        title3_list4:
          "Решение о приеме и выходе физических лиц из начальной организации является окончательным и не требует подтверждения высшими органами Союза.",
        title3_list5:
          "Юридические лица, а также организации и предприятия в области молодежной политики, не противоречащие целям, задачам и программным документам Союза, могут стать его членами. Юридические и физические лица подают соответствующее заявление для вступления в Союз.",
        title3_list6:
          "Юридические лица принимаются в Союз на основании решения собрания местных или территориальных советов Союза.",
        title3_list7:
          "Членство физического лица в Союзе может быть прекращено в следующих случаях: по заявлению члена Союза;",
        title3_list8:
          "Когда возраст члена Союза превышает 30 лет (кроме выбранных на выборные органы Союза);",
        title3_list9:
          "Когда член Союза совершает действия, противоречащие этому Уставу и законодательству Республики Узбекистан;",
        title3_list10: "Когда деятельность Союза прекращается.",
        title3_list11:
          "Решение о выходе физического лица из Союза принимается Общим собранием начальной организации или Советом начальной организации.",
        title4: "ПРАВА ЧЛЕНОВ СОЮЗА",
        title4_list1:
          "Свободно выражать свое мнение при обсуждении вопросов на общих собраниях, конференциях, съездах, заседаниях руководящих органов Союза и в его печатных изданиях;",
        title4_list2:
          "Участвовать в разработке решений выборных органов Союза лично или через представителя;",
        title4_list3: "Избирать и быть избранными в выборные органы Союза;",
        title4_list4:
          "Получать информацию о деятельности органов Союза, участвовать в обсуждении вопросов, касающихся их, и высказывать свое мнение;",
        title4_list5:
          "Участвовать в деятельности Союза в рамках Устава и Программы, обращаться с предложениями и заявлениями к любому руководящему органу Союза.",
        title5: "ОСНОВНЫЕ ОБЯЗАННОСТИ ЧЛЕНОВ СОЮЗА",
        title5_list1:
          "Участвовать в реализации целей Союза, указанных в Уставе;",
        title5_list2:
          "Повышать влияние и авторитет Союза среди молодежи и в обществе;",
        title5_list3:
          "Исполнять решения руководящих органов Союза, общие собрания начальных организаций и заседания Совета;",
        title5_list4:
          "Активно участвовать в деятельности начальной организации Союза.",
        title6: "ОСНОВНЫЕ НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ НАЧАЛЬНОЙ ОРГАНИЗАЦИИ",
        title6_description:
          "Начальная организация Союза молодежи Узбекистана в Бухарском международном университете объединяет 2311 студентов, и ее деятельность направлена на социальную защиту студентов, изучение их предложений и пожеланий, помощь в адаптации к независимой жизни, организацию досуга и развитие личности, формирование у студентов чувства интеллектуальной собственности и поддержку их инициатив.",
        title7:
          "Совет начальной организации Союза молодежи Узбекистана в Бухарском международном университете состоит из 13 человек, состав Совета:",
        title7_list1: "Руководитель Союза молодежи Узбекистана IBT",
        title7_list2: "Первый заместитель руководителя Союза молодежи",
        title7_list3:
          "Руководитель направления работы с активной и талантливой молодежью",
        title7_list4:
          "Руководитель направления инициатив и молодежного предпринимательства",
        title7_list5:
          "Руководитель направления мониторинга качества образования",
        title7_list6:
          "Руководитель направления работы с учащимися, прошедшими срочную военную службу",
        title7_list7: "Заместитель руководителя по духовно-нравственной работе",
        title7_list8:
          "Руководитель направления духовно-нравственной работы и молодежного туризма",
        title7_list9: "Руководитель направления спорта и здоровья",
        title7_list10:
          "Руководитель направления работы с нуждающимися и ограниченными в возможностях студентами",
        title7_list11:
          "Руководитель организационно-контрольного и кадрового направления",
        title7_list12: "Пресс-секретарь, руководитель молодежной медиа-группы",
        title7_list13:
          "Руководитель направления работы с обращениями студентов, работающий на общественных началах.",
        title8:
          "Следующие кружки и клубы были организованы при начальной организации Союза молодежи Узбекистана в Бухарском международном университете:",
        title8_list1: '"Ватан посбонлари" общественная организация',
        title8_list2: '"Хумо" студенческий театр-студия',
        title8_list3: '"Заковат" интеллектуальный клуб',
        title8_list4: '"Кувноқар ва зукколар" клуб',
        title8_list5: '"БМУ press today" клуб журналистов',
        title8_list6: '"Мунозара" клуб',
        title8_list7: '"Ёш ижодкорлар" кружок',
        title8_list8: '"Чемпионлар" клуб',
        title8_list9: '"Сиёсатчилар" кружок',
        title8_list10: '"Таффаккур" интеллектуальный кружок',
      },
      scientificactivity: {
        title: `According to the decree No. 367 of the Presidium of the Higher Attestation Commission 
              of the Republic of Uzbekistan dated February 12, 2025, a collection of scientific articles 
              prepared based on materials from the "Psychology of the XXI Century" international congress, 
              organized by the Institute of Psychology and Foreign Languages and the International Academy 
              of Psychological Sciences (MAPN) on March 16-18, 2025, was included in the list of foreign 
              scientific publications.`,
        title1: `Scientific Activity`,
        title2: "Diplomas and Scientific Works",
        title3: "Haydarov Shakhriyor Shukhratovich",
        title4: "Photos",
        title5: "Diplomas",
        title6:
          "Pedagogical and psychological factors in shaping the psychological well-being of future engineers",
        title7: "Jalolov Tursunbek Sadriddinovich",
        title8:
          "Pedagogical and psychological foundations of data processing using SPSS software",
        title9: "PhD diplomas awarded to institute teachers in 2023–2024",
        title10: "Independent Researcher Full Name",
        title11: "Dissertation Topic",
        title12: "Ikromova Sitora Akbarovna",
        title13:
          "Socio-psychological factors in forming ideological immunity against destructive information among adolescents",
        title14: "Barotov Khumoyun Sharifovich",
        title15:
          "Scientific-practical mechanisms for improving psychological assistance practices for adolescent athletes",
        title16: "Abdullayev Amrilla Nasullayevich",
        title17:
          "Psychological determinants of forming pedagogical communication factors among military education faculty cadets",
        title18: "Narzullayeva Salomatbonu Nasullayevna",
        title19:
          "Socio-psychological determinants of forming professional competence factors among nurses",
      },
      scientificactivity: {
        title: `Согласно постановлению № 367 Президиума Высшей аттестационной комиссии 
              Республики Узбекистан от 12 февраля 2025 года, сборник научных статей, 
              подготовленный на материалах международного конгресса "Психология XXI века", 
              организованного Институтом психологии и иностранных языков и Международной 
              академией психологических наук (МАПН) 16-18 марта 2025 года, был включен 
              в список иностранных научных изданий.`,
        title1: `Научная деятельность`,
        title2: "Дипломы и Научные работы",
        title3: "Хайдаров Шахриёр Шухратович",
        title4: "Фотографии",
        title5: "Дипломы",
        title6:
          "Педагогические и психологические факторы формирования психологического благополучия будущих инженеров",
        title7: "Джалолов Турсунбек Садриддинович",
        title8:
          "Педагогические и психологические основы обработки данных с помощью программы SPSS",
        title9:
          "Дипломы PhD, выданные преподавателям института в 2023–2024 годах",
        title10: "Независимый исследователь Ф.И.О.",
        title11: "Тема диссертации",
        title12: "Икромова Ситора Акбаровна",
        title13:
          "Социально-психологические факторы формирования идеологического иммунитета к деструктивной информации у подростков",
        title14: "Баратов Хумоюн Шарифович",
        title15:
          "Научно-практические механизмы совершенствования психологической помощи спортсменам-подросткам",
        title16: "Абдуллаев Амрилла Насуллаевич",
        title17:
          "Психологические детерминанты формирования факторов педагогического общения у курсантов военного факультета",
        title18: "Нарзуллаева Саломатбону Насуллаевна",
        title19:
          "Социально-психологические детерминанты формирования факторов профессиональной компетентности у медсестер",
      },
      researchcenters: {
        content: "БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА",
        content1: "Информационно-ресурсный центр",
        content2: "Сотрудничество с Национальной библиотекой",
        content3:
          "Профессора, преподаватели и студенты имеют свободный доступ к электронным ресурсам",
        content4: "Современные ресурсы",
        content5:
          "Печатные, электронные и QR-кодированные учебники по всем направлениям",
        content6: "Возможности центра",
        content7: "Партнерство с Национальной библиотекой",
        content8:
          "Подписано соглашение о сотрудничестве с Национальной библиотекой Узбекистана имени Алишера Навои.",
        content9: "Современные ресурсы",
        content10:
          "Доступны печатные, электронные и QR-кодированные учебные материалы.",
        content11: "Обширный фонд",
        content12:
          "Диссертации, художественная литература, учебные пособия и учебники.",
        content13: "Конкурсы для читателей",
        content14:
          "Ежеквартально проводятся конкурсы на звание «Лучший читатель».",
        content15: "Фотографии центра",
        content16: "Интерьер информационно-ресурсного центра",
        content17:
          "Информационно-ресурсный центр | Рабочие места для студентов",
      },
      partneruniversity: {
        title: "Международная конференция 2025",
        text: "Церемония подписания меморандума 2023",
        text1: "Договор о сотрудничестве между университетами",
        text2: "Международное сотрудничество",
        text3: "Программа обмена в сфере образования",
        text4: "Договор об академическом сотрудничестве",
        text5: `
        16 марта 2025 года Бухарский институт психологии и иностранных языков провел  
        "МЕЖДУНАРОДНУЮ КОНФЕРЕНЦИЮ ПО ПСИХОЛОГИЧЕСКИМ НАУКАМ".
        `,
        text6: `
        На этой конференции квалифицированные специалисты, работающие в Республике Узбекистан,  
        преподаватели с научными степенями (DSc, PhD) представили доклады о последних научных  
        достижениях, предложениях и актуальных темах в области психологии.
        `,
        text7: `
        Иностранные ученые также выступили с докладами, в которых поделились своими предложениями  
        о вкладе узбекских психологов в развитие психологических наук и вопросах постоянного  
        сотрудничества с международными университетами.
        `,
        text8:
          "Международное сотрудничество: с Университетом Анкары Йылдырым Беязыт",
        text9:
          "Стратегическое сотрудничество между университетами Турции и Узбекистана",
        text10: "Визит профессора Косимова Али Аскархона",
        text11: `
        Профессор Университета Анкары Йылдырым Беязыт (Турция), ведущий специалист по международному  
        сотрудничеству Косимов Али Аскархон Асламхон угли посетил Бухарский международный университет.
        `,
        text12: `Гость ознакомился с современными условиями, созданными в нашем университете,  
        и провел специальную лекцию на тему "Психология религии" для магистрантов направления "Психология".`,
        text13: "Подписанные соглашения",
        text14: "Меморандум о стратегическом сотрудничестве",
        text15: "Программа обмена преподавателями",
        text16: "Совместные научные исследования",
        text17: "Беседа профессора Косимова со студентами",
        text18: "Планы будущего сотрудничества",
        text19: `Запланирована разработка совместных магистерских программ между двумя университетами,  
        организация международных конференций и публикация научных журналов.`,
        text20: "Международная конференция 2024",
        text21:
          "В 2024 году в Самаркандском государственном университете прошла престижная международная конференция.",
        text22: `На этой конференции были заслушаны доклады психологов из более чем 40 стран мира.`,
        text23: `В докладах обсуждались последние научные достижения, опыт, публикации и книги в области психологии.`,
        text24: `Узбекские психологи также приняли участие в конференции. Основной целью конференции было  
        развитие психологии в Узбекистане и подготовка квалифицированных специалистов для общества.  
        Было подписано несколько международных меморандумов.`,
        text25: `Делегация под руководством ректора БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА  
        провела международную конференцию по налаживанию сотрудничества с ведущими вузами Турции.`,
        text26:
          "В ходе этого визита были установлены несколько международных связей.",
        text27: `Например, были подписаны документы о повышении квалификации преподавателей  
        БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА в вузах Российской Федерации,  
        обмене студентами по международной кредитно-модульной системе и совместных программах.`,
        text28: `Делегация под руководством ректора БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА  
        провела международную конференцию по налаживанию сотрудничества с ведущими вузами Казахстана.`,
        text29:
          "В ходе этого визита были установлены несколько международных связей.",
        text30: `Например, были подписаны документы о повышении квалификации преподавателей  
        БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА в вузах Казахстана,  
        обмене студентами по международной кредитно-модульной системе и совместных программах.`,
        text31: "Международная конференция",
        text32: `Делегация под руководством ректора БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА  
        посетила ведущие вузы Российской Федерации для налаживания международного сотрудничества.`,
        text33: `На этой конференции квалифицированные специалисты, работающие в Республике Узбекистан,  
        преподаватели с научными степенями (DSc, PhD) представили доклады о последних научных  
        достижениях, предложениях и актуальных темах в области психологии.`,
        text34: `Иностранные ученые также выступили с докладами, в которых поделились своими предложениями  
        о вкладе узбекских психологов в развитие психологических наук и вопросах постоянного  
        сотрудничества с международными университетами.`,
        text35: "Наши меморандумы",
        text36: "Фотографии сотрудничества",
        text37: "Документы меморандумов",
        text38: "Скачать",
      },
      headstaff: {
        title: "Руководители отделов",
        staffMembers: [
          {
            name: "Баратов Шухрат Шарипович",
            position: "Управляющий делами",
            phone: "+998 99 773 17 37",
            email: "shuxrat.barotov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Ниязов Фазлиддин Сайфитдинович",
            position: "Советник ректора",
            phone: "+998 90 711 96 97",
            email: "fazliddin.niyazov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Очилова Дилдора Тошпулатовна",
            position: "Начальник планово-финансового отдела",
            phone: "+998 88 855 20 12",
            email: "dildora.ochilova@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Нусратов Фаррухмирзо Фуркат угли",
            position: "Экономист",
            phone: "+998 94 217 11 12",
            email: "farruxmirzo.nusratov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Курбанов Октам Раджабович",
            position: "Начальник учебного отдела и магистратуры",
            phone: "+998 93 809 66 05",
            email: "oktam.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Хайдаров Шахриёр Шухрат угли",
            position:
              "Начальник отдела по работе с молодёжью, духовности и просвещения",
            phone: "+998 90 635 96 16",
            email: "shahriyor.haydarov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Койлиев Улугбек Равшанович",
            position: "Начальник заочного отделения",
            phone: "+998 94 322 57 75",
            email: "ulugbek.qoyliyev@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Усманова Сурайё Мухитдиновна",
            position:
              "Начальник сектора научных исследований, инноваций и подготовки научно-педагогических кадров",
            phone: "+998 93 651 30 10",
            email: "surayyo.usmonova@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Джураев Учкун Юсуф угли",
            position: "Начальник регистраторского офиса",
            phone: "+998 99 708 78 04",
            email: "uchqun.jorayev@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Нормуродов Олмос Дилшод угли",
            position:
              "Заместитель начальника отдела контроля качества образования",
            phone: "+998 94 025 15 29",
            email: "olmos.normurodov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Каримов Бехруз Ибрагимбекович",
            position: "Начальник отдела маркетинга и практики студентов",
            phone: "+998 90 635 56 58",
            email: "behruz.karimov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Рахматов Нурбек Эркинович",
            position:
              "Заместитель декана факультета психологии и иностранных языков",
            phone: "+998 90 710 64 46",
            email: "nurbek.raxmatov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Халилов Бекзод Жобир угли",
            position:
              "Ответственный сотрудник информационной системы управления процессами высшего образования (HEMIS)",
            phone: "+998 94 771 01 24",
            email: "bekzod.xalilov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Баратова Дилафруз Шарифовна",
            position: "Заведующая кафедрой психологии",
            phone: "+998 94 445 36 66",
            email: "dilafruz.baratova@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Курбанов Абдужалил Махмутович",
            position: "Заведующий кафедрой филологии",
            phone: "+998 93 476 06 75",
            email: "abdujalil.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
          {
            name: "Курбанов Баходир Саматович",
            position: "Заведующий кафедрой педагогики и общих наук",
            phone: "+998 99 707 36 50",
            email: "baxodir.kurbanov@university.edu",
            workHours: "9:00 - 18:00 (Понедельник-Пятница)",
          },
        ],
      },
      goals: {
        text: "Наши цели",
        text1: `
        Наша цель - воспитание современной, образованной, всесторонне развитой, 
                творческой и духовно зрелой молодежи, соответствующей развитию 
                современного мира, формирование их как специалистов, которые будут 
                активно участвовать в будущем развитии нашей страны и мира.`,
        text2: "Квалифицированные специалисты",
        text3: `Подготовка высококвалифицированных специалистов в области психологии 
                    на основе современных знаний, практических навыков и инновационных подходов.`,
        text4: "Повышение качества образования",
        text5: `Внедрение образовательных методик международного стандарта в 
                    соответствии с приоритетными задачами, поставленными Президентом 
                    нашей Республики в сфере образования.`,
        text6: "Развитие психологии",
        text7: `Расширение психологических услуг в различных слоях общества, 
                  содействие личному и профессиональному развитию. Выявление 
                  способностей каждого студента, помощь им в личностном и 
                  профессиональном становлении.`,
        text8: "Наши высшие цели",
        text9: "Международное сотрудничество",
        text10: `Реализация совместных программ с университетами из TOP-1000 мира, 
                      программ двойных дипломов и студенческих обменов. Повышение 
                      квалификации в сотрудничестве с зарубежными университетами и 
                      исследовательскими центрами.`,
        text11: "Экспорт образования",
        text12: `Превращение Узбекистана в региональный образовательный центр, 
                      привлечение иностранных студентов. Занятие позиций в 
                      международных рейтингах и повышение престижа Узбекистана 
                      в сфере образования.`,
        text13: "Инновационное образование",
        text14: `Улучшение качества образования через современные технологии 
                      (ИИ, виртуальные лаборатории, онлайн-платформы). Внедрение 
                      практико-ориентированной системы образования, подготовка 
                      студентов к требованиям рынка труда.`,
        text15: "Заключение",
        text16: `Мы верим, что воспитание молодежи в духе знаний, преданности и 
                патриотизма позволит вывести Узбекистан в число развитых стран 
                в будущем. Каждый студент - это будущее нашей страны, поэтому 
                каждая минута, каждое знание, данное им, чрезвычайно важны.`,
      },
      classrooms: {
        title: "КЛАССНЫЕ КОМНАТЫ БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА",
        description:
          "Всего 60 учебных аудиторий, оснащенных камерами наблюдения, Wi-Fi, в каждой комнате есть SMART телевизор размером 65 дюймов, современные компьютеры, а также отдельные камеры для Zoom. Эти устройства направлены на повышение качества образования.",
        gallery: "Общий вид учебной аудитории",
        gallery1: "Оснащено современным оборудованием",
        gallery2: "Оснащено SMART телевизором",
        gallery3: "Удобные условия для обучения",
      },
      conferenceHall: {
        title: "КОНФЕРЕНЦ-ЗАЛ БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА",
        description:
          "Конференц-зал рассчитан на 300 мест, здесь созданы все условия для проведения образовательных, культурных мероприятий, концертных программ и различных типов конференций.",
        image1: "Конференц-зал на 300 мест",
        image2: "Внутренний вид зала",
        image3: "Современное оборудование",
      },
      contactUs: {
        contactCard: {
          title1: "Бухарский город БМУ",
          title2: "Город Когон БМУ",
          address1:
            "Город Бухара, Ситоройи Мохи-Хоса СГМ, улица Гиждувон, дом 250",
          address2:
            "Бухарская область, район Когон, Б.Накшбанд СГМ, улица Абай, дом 20",
          address_label: "Адрес",
          telefon_label: "Телефон",
          fax_label: "Факс",
          website_label: "Веб-сайт",
        },
        title: "Связаться с БМУ",
        header: "График приема руководства и администрации БМУ в городе Бухара",
        header1:
          "Предложения и жалобы физических и юридических лиц по вопросам деятельности БМУ в городе Бухара",
        header2:
          "Могут быть отправлены по электронному адресу или через специальную форму. Также в соответствии с графиком, физические и юридические лица могут обсуждать вопросы, связанные с администрацией университета в процессе личных назначений.",
        header3: "Советник ректора Ниязов Фазлуддин Саидович",
        table_section1: "Ф.И.О.",
        table_section2: "Должность",
        table_section3: "Время приема",
        table_section4: "День приема",
        table_section5: "Телефонный номер",
        days: "Понедельник - Пятница",
        ourAddress: "Наш адрес",
        ourAddress1: "Адрес расположения университета БМУ в городе Бухара",
        ourAddress2:
          "Адрес: Город Бухара, Ситоройи Мохи-Хоса СГМ, улица Гиждувон, дом 250",
        ourAddress3: "Открыть в Google Maps для увеличения",
        staffList: [
          {
            id: 1,
            fio: "Баротов Хумойин Шарифович",
            lavozimi:
              "Проректор по молодежной политике и духовно-нравственным вопросам",
            telefon: "+998 91 447 05 04",
          },
          {
            id: 2,
            fio: "Собирова Дилафруз Абдуразиковна",
            lavozimi: "Проректор по научной работе и инновациям",
            telefon: "+998 91 831 25 11",
          },
          {
            id: 3,
            fio: "Мухторов Эркин Мустафоевич",
            lavozimi: "Проректор по учебной работе",
            telefon: "+998 91 243 17 14",
          },
          {
            id: 4,
            fio: "Баротов Шухрат Шарипович",
            lavozimi: "Руководитель по работе",
            telefon: "+998 99 773 17 37",
          },
          {
            id: 5,
            fio: "Ниязов Фазлуддин Саидович",
            lavozimi: "Советник ректора",
            telefon: "+998 90 711 96 97",
          },
          {
            id: 6,
            fio: "Очилова Дилдора Тошпулатовна",
            lavozimi: "Начальник отдела планирования и финансов",
            telefon: "+998 88 855 20 12",
          },
          {
            id: 7,
            fio: "Нусратов Фаррухмирзо Фуркатович",
            lavozimi: "Экономист",
            telefon: "+998 94 217 11 12",
          },
          {
            id: 8,
            fio: "Курбонов Октам Раджабович",
            lavozimi: "Руководитель отдела обучения и магистратуры",
            telefon: "+998 93 809 66 05",
          },
          {
            id: 9,
            fio: "Хайдаров Шахрийор Шухратович",
            lavozimi:
              "Руководитель отдела по работе с молодежью, духовности и образования",
            telefon: "+998 90 635 96 16",
          },
          {
            id: 10,
            fio: "Куйлов Улугбек Равшанбекович",
            lavozimi: "Руководитель внешнего отдела",
            telefon: "+998 94 322 57 75",
          },
          {
            id: 11,
            fio: "Усмонова Сурайё Мухитдиновна",
            lavozimi:
              "Руководитель сектора научных исследований, инноваций и подготовки научно-педагогических кадров",
            telefon: "+998 93 651 30 10",
          },
          {
            id: 12,
            fio: "Джураев Учкун Юсуфович",
            lavozimi: "Руководитель регистратора",
            telefon: "+998 99 708 78 04",
          },
          {
            id: 13,
            fio: "Нормуродов Алмос Дилшодович",
            lavozimi:
              "Заместитель руководителя отдела контроля качества образования",
            telefon: "+998 94 025 15 29",
          },
          {
            id: 14,
            fio: "Каримов Бехруз Иброхимбекович",
            lavozimi: "Руководитель отдела маркетинга и практики студентов",
            telefon: "+998 90 635 56 58",
          },
          {
            id: 15,
            fio: "Рахматов Нурбек Эркинбекович",
            lavozimi:
              "Заместитель декана факультета психологии и иностранных языков",
            telefon: "+998 90 710 64 46",
          },
          {
            id: 16,
            fio: "Халилов Бекзод Джобирович",
            lavozimi:
              "Ответственный сотрудник информационной системы управления высшим образованием (HEMIS)",
            telefon: "+998 94 771 01 24",
          },
          {
            id: 17,
            fio: "Барадова Дилафруз Шарифовна",
            lavozimi: "Заведующий кафедрой психологии",
            telefon: "+998 94 445 36 66",
          },
          {
            id: 18,
            fio: "Курбонов Абдужалил Махмудович",
            lavozimi: "Заведующий кафедрой филологии",
            telefon: "+998 93 476 06 75",
          },
          {
            id: 19,
            fio: "Курбанов Баходир Саматович",
            lavozimi: "Заведующий кафедрой педагогики и общих наук",
            telefon: "+998 99 707 36 50",
          },
        ],
      },
      distance: {
        title: "Система дистанционного образования",
        description1:
          "Дистанционное образование в Бухарском международном университете",
        description2:
          "В Бухарском международном университете на сегодняшний день внедрена система дистанционного образования, что является очень удобным для соискателей, работающих в компаниях и организациях.",
        description3:
          "Для дистанционного образования в университете созданы все условия, а также видеозаписи уроков профессоров и преподавателей имеют высокое качество.",
        list_head: "Доступные направления дистанционного образования",
        list_body1:
          "Национальная идея, основы духовности и правовое образование",
        list_body2: "Психология",
        list_body3: "Экономика",
        list_body4: "Начальное образование",
        list_body5: "Дошкольное образование",
        list_body6: "Узбекский язык и литература",
        list_body7: "Логистика (транспорт и другие области)",
        list_body8: "Родной язык и литература",
        list_body9: "Математика",
        body1: "Дополнительная информация:",
        body2:
          "Для записи на программу дистанционного образования можно обратиться на официальный сайт университета или в отдел по работе с учащимися.",
      },
      dormitory: {
        title: "СТУДЕНЧЕСКОЕ ОБЩЕЖИТИЕ БУХАРСКОГО МЕЖДУНАРОДНОГО УНИВЕРСИТЕТА",
        description:
          "В нашем университете предоставляются удобные и современные места для проживания студентов. В общежитиях созданы все удобства, и имеются все условия для безопасного и комфортного проживания студентов.",
        list1: "Каждая комната рассчитана на 2-3 человека",
        list2: "Кухня и ванные комнаты",
        list3: "Круглосуточная охрана и WiFi сеть",
        list4: "Учебные и досуговые залы",
        joy1: "Внешний вид общежития",
        joy2: "Удобные спальные комнаты",
        joy3: "Специальные места для учебы",
        joy4: "Зал для отдыха",
        rules: "Правила проживания в общежитии:",
        rule1: "Каждый студент обязан поддерживать чистоту и порядок",
        rule2: "Запрещается шуметь после 23:00",
        rule3: "Регистрация гостей обязательна",
        rule4: "Ежемесячные платежи должны осуществляться вовремя",
      },
      ecozone: {
        apple: "Яблоня",
        cherry: "Вишня",
        apricot: "Абрикос",
        peach: "Персик",
        pear: "Груша",
        juniper: "Можжевельник",
        text: "Зеленые зоны Бухарского международного университета",
        text1:
          "Статистические данные по посаженным деревьям и их распределению",
        text2: "Деревья на территории университета",
        text3: "Общее количество саженцев",
        text4: "Поглощение CO₂",
        text5: "650 тонн/год",
        text6: "Очистка воздуха",
        text7: "3,500 м³/день",
        text8: "Виды деревьев",
        text9: "Подробная информация о всех видах деревьев",
        text10: "Вид дерева",
        text11: "Количество",
        text12: "Процент",
        text13: "Изображение",
        text14: "График",
        text15: "Экологическое воздействие",
        text16: "Борьба с изменением климата",
        text17: "Деревья поглощают 650 тонн CO₂ в год",
        text18: "Очистка воздуха",
        text19: "Производят 3,500 м³ чистого воздуха в день",
        text20: "Поддержка биоразнообразия",
        text21: "Среда обитания для более 10 видов птиц и насекомых",
        text22: "шт",
      },
      korusel: {
        title: "Новости",
        text: `Нашим студентам были вручены дипломы государственного образца.`,
        t: "Дипломы были вручены.",
        text1: `19 июня 2023 года 19 человек,`,
        t1: "5 августа 2024 года 40 человек",
        t2: "выпускников магистратуры успешно",
        t3: "получили дипломы с QR-кодом.",
        text2: `Повышение качества образования - это новый`,
        t4: "единственный правильный путь для развития Узбекистана",
        t5: "Шавкат Мирзиёев",
        text3: "Президент Республики Узбекистан",
        text4: `Наш университет провел`,
        t6: "16 марта 2025 года",
        text5: "Cо стороны нашего университета",
        text6: "❝ МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ ПО ПСИХОЛОГИИ ❝",
        text7: "состоялась.",
      },
    },
  },
  en: {
    translation: {
      support: {
        title: "Student Support Center",
        description:
          "A center providing services for the growth and development of students",
        description1:
          "The student affairs department is a division that provides services for the growth and development of students, supporting them in achieving success.",
        description2:
          "In our department, you can take advantage of the following services:",
        services: "Services for students",
        service1: "Information",
        service2: "(for military service and other places)",
        service3: "ID card restoration",
        service4: "Exam preparation",
        service5: "Assistance in resolving student issues",
        more: "More details",
        support: "Career Center",
        support1: "Employment services",
        support2: "Placement for qualification acquisition",
        support3: "Submit an application",
        description3: "Event services",
        content: "Event organization matters",
        content1: "Organizing trips",
        content2: "Event registration",
        content3: "Need help?",
        content4:
          "If you have additional questions or need assistance, contact us",
        content5: "Contact",
      },

      navbar: {
        nav_item_title0: "General Information",
        nav_item_title1: "Institute Achievements",
        nav_item_title2: "Partnerships",
        nav_item_title3: "Electronic Library",
        nav_item_title4: "Scientific Journals",
        nav_item_title5: "Contact",
        nav_item1: "Welcome speech",
        nav_item2: "Campuses",
        nav_item3: "Contact Us",
        nav_item4: "Departments",
        nav_item5: "Academic Calendar",
        nav_item6: "News",
        nav_item7: "Rectorate",
        nav_item8: "Faculty",
        nav_item9: "News",
        nav_item10: "Media",
        nav_item11: "Faculty",
        nav_item12: "Partner Journals",
        nav_item13: "Scientific Bulletins",
        btn: "Admission 2025",
      },
      rektor: {
        title: "Rector",
        text: "Rector of Bukhara International University, Vice-President of the International Academy of Psychological Sciences, Doctor of Psychological Sciences, Professor.",
        contact1: "Email address:",
        day: "Monday-Saturday",
        contact2: "Phone number:",
        contact3: "Reception days:",
        info: "Monday-Saturday",
        sobirova:
          "Full member of the International Academy of Psychological Sciences, Doctor of Psychological Sciences, Professor.",
        content:
          "Sharif Ramazanovich Baratov, Rector of Bukhara International University, was born on March 22, 1960, in the village of Talicha, Kogon district, Bukhara region, Republic of Uzbekistan. In 1977, he graduated from Secondary School No. 7 in Kogon district, and in 1983, he graduated with honors from Bukhara State Pedagogical Institute and was hired as a teacher at the Department of Psychology of the same institute.",
        content1:
          "From 1985 to 1987, he was a researcher at the Institute of General and Pedagogical Psychology in Moscow. From 1987 to 1990, he studied at the graduate school of the same institute and defended his candidate's dissertation in 1990. From 1991 to 2021, he worked effectively at Bukhara State University as a teacher, head of the Department of Psychology, dean of the faculty, and vice-rector for scientific work. During this time, he also served as the head of the Bukhara regional branch of the Republican Center for Spirituality and Enlightenment (2002-2006) on the recommendation of the regional governor.",
        content2:
          "Since 2021, he has been serving as the founder and rector of Bukhara International University.",
      },
      statistic: {
        title1: "Number of Departments:",
        title2: "Educational Directions:",
        title2_text1: "Bachelor's Degree",
        title2_text2: "Master's Degree",
        title2_text3: "Doctoral Degree",
        title3: "Scientific Potential (%):",
      },
      contract: {
        title: "Scientific Cooperation",
      },
      litsenziya: {
        title1: "Licensed Education",
        text1:
          "On October 29, 2021, the State Inspectorate for Quality Control in Education under the Cabinet of Ministers issued License No. 0037 to Bukhara Institute of Psychology and Foreign Languages for providing higher education services. Additionally, on May 16, 2024, the Ministry of Higher Education, Science, and Innovation of the Republic of Uzbekistan granted License No. 277162 for new programs.",
        title2: "Postgraduate Education",
        text2: "DOCTORAL PROGRAM",
      },
      yutuq: {
        title: "Institute Achievements",
      },
      professor: {
        title: "Team of Professors and Teachers",
      },
      kampus: {
        header: "CAMPUSES",
        title: "Our Institute's Campuses",
        bn1: "FIRST CAMPUS",
        bn1_text:
          "Bukhara region, Kogon district, B. Naqshband M.F.Y, Abay Street, house 20.",
        bn2: "SECOND CAMPUS",
        bn2_text:
          "Bukhara city, Sitorayi Mohi-Xosa MFY, G'ijduvon Street, house 250.",
        bn3: "THIRD CAMPUS",
        bn3_text:
          "Bukhara city, Sitorayi Mohi-Xosa MFY, G'ijduvon Street, house 250.",
        bn4: "STUDENT DORMITORY",
        bn4_text:
          "Bukhara region, Kogon district, B. Naqshband M.F.Y, Abay Street, house 20.",

        td1: "Total area",
        td2: "3 hectares",
        td3: "Number of blocks",
        td4: "5 blocks",
        td5: "Classrooms",
        td6: "40 rooms",
        td7: "Parking",
        td8: "250 cars",
        td9: "Dormitory",
        td10: "300 beds",
        td11: "Eco-zone",
        td12: "available",
      },
      diplom: {
        title: "State-Standard Diplomas Presented to Our Students",
        text: "On June 19, 2023, diplomas with QR codes were awarded to 19 graduates, and on August 5, 2024, to 40 master's degree specialists who successfully completed their studies.",
      },
      salohiyat: {
        title: `"Scientific Potential of Bukhara International University"`,
        text: `"Scientific potential indicator of Bukhara International University for the years 2021–2024. Currently, the scientific potential of our institute is 61%.`,
        graf_title1: "Scientific Potential and Results",
        graf_title2: "Results (quantity)",
        graf_title3: "Period: 2021–2024",
      }
      ,
      gallery: {
        title: "Gallery",
        tab_btn1: "Photo Gallery",
        tab_btn2: "Video Gallery",
      },
      directions: {
        title: "Educational Programs",
        descr:
          "You can explore the educational programs of our university through the table below.",
        tab_btn1: "Daytime Education",
        tab_btn2: "Part-Time Education",
        tab_btn3: "Evening Education",
        tab_btn4: "Master's Degree",
        tab_btn5: "Distance Learning",
        th1: "Program",
        th2: "Duration of Education",
        th3: "Admission",
        th4: "Quota",
        th5: "Tuition Fee",

        // Full-time bachelor's
        th1_td1: "60310900 – Psychology (by types of activity)",
        th1_td2: "60111800 – Foreign Language and Literature (by languages)",
        th1_td3:
          "60112600 – Foreign Language in Preschool and Primary Education",
        th1_td4: "60310100 – Economics (by sectors and fields)",
        th1_td5: "60111400 – Uzbek Language and Literature",
        th1_td6: "60220300 – History (by countries and directions)",
        th1_td7: "60111300 – Music Education",
        th1_td8: "60110200 – Preschool Education",
        th1_td9: "60110500 – Primary Education",
        th1_td10: "60112200 – Physical Education",
        th1_td11: "60112100 – National Idea, Spirituality, and Legal Education",
        th1_td12:
          "60610100 – Computer Science and Programming Technologies (by directions)",
        th1_td13: "61010400 – Tourism (by activity areas)",
        th1_td14: "60110400 – Defectology (by types of activity)",

        th1_tda1: "4 years",
        th1_tda2: "4 years",
        th1_tda3: "4 years",
        th1_tda4: "4 years",
        th1_tda5: "4 years",
        th1_tda6: "4 years",
        th1_tda7: "3 years",
        th1_tda8: "3 years",
        th1_tda9: "4 years",
        th1_tda10: "3 years",
        th1_tda11: "4 years",
        th1_tda12: "4 years",
        th1_tda13: "4 years",
        th1_tda14: "4 years",

        // Part-time
        th1_td15: "60310900 – Psychology (by types of activity)",
        th1_td16:
          "60112600 – Foreign Language in Preschool and Primary Education",
        th1_td17: "60310100 – Economics (by sectors and fields)",
        th1_td18: "60220300 – History (by countries and directions)",
        th1_td19: "60110500 – Primary Education",
        th1_td20: "60111300 – Music Education",
        th1_td21: "60112200 – Physical Education",
        th1_td22: "60112100 – National Idea, Spirituality, and Legal Education",
        th1_td23:
          "60610100 – Computer Science and Programming Technologies (by directions)",
        th1_td24: "61010400 – Tourism (by activity areas)",
        th1_td25: "60110400 – Defectology (by types of activity)",
        th1_td26: "61110400 – Uzbek Language and Literature",

        th1_tda15: "5 years",
        th1_tda16: "5 years",
        th1_tda17: "5 years",
        th1_tda18: "5 years",
        th1_tda19: "5 years",
        th1_tda20: "5 years",
        th1_tda21: "5 years",
        th1_tda22: "5 years",
        th1_tda23: "5 years",
        th1_tda24: "5 years",
        th1_tda25: "5 years",
        th1_tda26: "5 years",
        th1_tda27: "5 years",

        // Evening education
        th1_td28: "60110500 – Primary Education",
        th1_td29: "60111300 – Music Education",
        th1_td30: "60111400 – Uzbek Language and Literature",
        th1_td31: "60112200 – Physical Education",
        th1_td32: "60111800 – Foreign Language and Literature (by languages)",
        th1_tda28: "5 years",
        th1_tda29: "5 years",
        th1_tda30: "5 years",
        th1_tda31: "5 years",
        th1_tda32: "5 years",

        // Master's Degree

        th1_td33: "70310901 – Psychology (by types of activity)",
        th1_td34: "70310102 – Economics (by sectors and fields)",
        th1_td35:
          "70110501 – Theory and Methodology of Education and Training (Primary Education)",
        th1_td36: "70111301 – Music Education and Art",
        th1_td37:
          "70112201 – Theory and Methodology of Physical Education and Sports",
        th1_td38:
          "70110101 – Theory and History of Pedagogy (by type of activity)",
        th1_td39: "70111401 – Uzbek Language and Literature",
        th1_td40: "70230101 – Linguistics (by languages)",

        th1_tda33: "2 years",
        th1_tda34: "2 years",
        th1_tda35: "2 years",
        th1_tda36: "2 years",
        th1_tda37: "2 years",
        th1_tda38: "2 years",
        th1_tda39: "2 years",
        th1_tda40: "2 years",

        th1_td41: "60310300 - Psychology",
        th1_td42: "60410100 - Economics",
        th1_td43: "60110700 - Uzbek Language and Literature",
        th1_td44: "60110200 - Preschool Education",
        th1_td45: "60110400 - Primary Education",
        th1_td46: "60111100 - National Idea, Spirituality, and Legal Education",
        th1_td47: "61010400 - Logistics",
        th1_td48: "60540100 - Mathematics",
        th1_td49:
          "60110800 - Native Language and Literature (Russian Language)",

        th1_tda41: "4 years",
        th1_tda42: "4 years",
        th1_tda43: "4 years",
        th1_tda44: "3 years",
        th1_tda45: "5 years",
        th1_tda46: "4 years",
        th1_tda47: "4 years",
        th1_tda48: "4 years",
        th1_tda49: "4 years",

        th2_addition: " years",
        th3_addition1: "completed",
        th3_addition2: "active",
        th5_addition: "{count} UZS",
      },
      content: {
        title: "Useful Information",
        text: "This is not only a center for student life but also a crossroads of various cultures and a place to make lifelong friends.",
        card1: "Hemis Platform",
        card2: "E-Library",
        card3: "Contract Acquisition",
        card4: "Class Schedule",
        card5: "Suggestions and Complaints",
        card6: "Student Dormitory",
      },
      footer: {
        address1:
          "Bukhara region, Kogon district, B. Naqshband MFY, Abay Street, House 20",
        address2:
          "Bukhara city, Sitorai Mohi-Xosa MFY, Gijduvon Street, House 250",
        title: "Social Media Pages",
        copyright:
          "Copyright © 2024. Bukhara Institute of Psychology and Foreign Languages. All rights reserved.",
      },
      modal: {
        title: "Enter your details and questions",
        label1: "Full Name",
        label2: "Your Phone Number",
        label3: "Message",
        btn: "Send",
        placeholder1: "Full Name",
        placeholder2: "Your Phone Number",
      },
      welcome_speech: {
        title: "Welcome Speech",
        descr: "Founder of the University B SH.R.",
        title1:
          "Welcome to Bukhara Institute of Psychology and Foreign Languages!",
        title2:
          '"Bukhara Institute of Psychology and Foreign Languages" Founder and Rector Sharif Ramazonovich Baratov',

        text1:
          "During the visit of the President of the Republic of Uzbekistan, Sh.M. Mirziyoyev, to Bukhara region on January 21-22, 2021, and in accordance with the instructions given at the extraordinary session of the People's Deputies Regional Council, the institute was established under paragraph 98 of the Protocol No. 4.\n" +
          "The Bukhara Institute of Psychology and Foreign Languages operates based on the license No. 432747 issued by the State Inspection for Education Quality Control under the Cabinet of Ministers of the Republic of Uzbekistan. (The Institute was established in 2021)",
      },
      contact: {
        title: "Contact Us",

        title2: "Bukhara Institute of Psychology and Foreign Languages",
        descr2:
          "Bukhara Institute of Psychology and Foreign Languages is a place of justice, fairness, and global professionals, serving society's needs.",
        linkTitle1: "Phone 1",
        linkTitle2: "Phone 2",
        linkTitle3: "Telegram",
        linkTitle4: "Facebook",
        linkTitle5: "Youtube",
        linkTitle6: "Instagram",
        linkTitle7: "Website",
      },
      news: {
        title: "Latest News",
        header: "NEWS",
        readMore: "Read More",
        allNewsBtn: "All News",
      },
      rektorat: {
        rector: "BARATOV SHARIF RAMAZONOVICH",
        pro_rector1: "Sobirova Dilafruz Abduroziqovna",
        pro_rector2: "Barotov Khumoyin Sharifovich",
        pro_rector3: "Mukhtorov Erkin Mustafoyevich",

        title: "Organizational structure of the institute",
        header: "Rector",
        text: "RECTOR OF BUKHARA INTERNATIONAL UNIVERSITY, VICE-PRESIDENT OF THE INTERNATIONAL ACADEMY OF PSYCHOLOGICAL SCIENCES. DOCTOR OF PSYCHOLOGICAL SCIENCES, PROFESSOR.",
        contact1: "Email address:",
        contact2: "Phone number:",
        contact3: "Reception days:",
        title1: "Vice-Rector",
        text1: "Vice-Rector for Research and Innovation",
        rank1:
          "Full member of the International Academy of Psychological Sciences, Doctor of Psychological Sciences, Professor.",
        title2: "Vice-Rector",
        text2: "Vice-Rector for Youth Affairs and Spiritual-Educational Work",
        rank2: "",

        title3: "Vice-Rector",
        text3: "Vice-Rector for Academic Affairs",
        rank3: "",
        group: "Professors and teachers team",
      },
      campus: {
        title: "Our University Campuses",
        text: "This is not only the center of student life, but also a crossroads of various cultures and a place where lifelong friendships are made.",
        card_title1: "Contract Acquisition",
        card_title2: "Hemis Platform",
        card_title3: "Class Schedule",
        card_title4: "E-Library",
        card_title5: "Suggestions and Complaints",
        card_title6: "Student Dormitory",
        card_title7: "Sports Clubs",
        card_title8: "Green Recreation Area",
        card_title9: "Cozy Cafeteria",
        card_title10: "Conference Hall",
        card_link1: "Open map",
        card_link2: "student.zarmeduniver.com",
        card_link3: "3D Tour",
        card_link4: "library.zarmeduniver.com",
        card_link5: "Submit application",
        card_link6: "Submit application",
        card_link7: "Submit application",
        card_link8: "Area map",
        card_link9: "Menu",
        card_link10: "Order event",
        tab1: "Bukhara Campus",
        tab2: "Samarkand Campus",
      },
      academic: {
        title: "Academic Calendar",
        card1_title: "Educational Process Schedule",
        card2_title: "Organizing the Educational Process",
        card3_title: "Holidays",
        table1_tr1_td1: "Academic Year",
        table1_tr1_td2: "2023/2024",
        table1_tr2_td1: "Number of Modules",
        table1_tr2_td2: " modules",
        table1_tr3_td1: "Sessions",
        table1_tr3_td2: " sessions",
        table1_tr4_td1: "Educational Days",
        table1_tr4_td2: " days",
        table1_tr5_td1: "Session Days",
        table1_tr5_td2: " days",
        table2_th1: "Module",
        table2_th2: "Duration",
        table2_th3: "Session",
        table2_th4: "Make-up",
        table2_th5: "Holidays",
        table2_th1_td1: "1st semester",
        table2_th1_td2: "2nd semester",
        table3_tr1_td1: "Teacher and Mentor Day",
        table3_tr1_td2: "October 1",
        table3_tr1_td3: "day off",
        table3_tr2_td1: "Credit Access Week",
        table3_tr2_td2: "October 10 - 15",
        table3_tr2_td3: "Workdays",
        table3_tr3_td1: "New Year",
        table3_tr3_td2: "December 31 - January 3",
        table3_tr3_td3: "days off",
        table3_tr4_td1: "International Women's Day",
        table3_tr4_td2: "March 8",
        table3_tr4_td3: "day off",
        table3_tr5_td1: "Navruz",
        table3_tr5_td2: "March 21",
        table3_tr5_td3: "day off",
        table3_tr6_td1: "Memory and Honor Day",
        table3_tr6_td2: "May 9",
        table3_tr6_td3: "day off",
        table3_tr7_td1: "Independence Day",
        table3_tr7_td2: "September 1",
        table3_tr7_td3: "day off",
        qr_card_text:
          "The administration decree on 'Approval of the Academic Calendar for the 2023/2024 academic year'.",
        qr_b1: "Registration",
        qr_b2: "Date",
      },
      science: {
        title: "Scientific Journals",
        header: "SCIENTIFIC JOURNALS",
      },
      campuses: {
        title: "Campuses",
        descr: "The university has campuses in Bukhara and Samarkand.",
        tab1_btn: "Bukhara",
        tab2_btn: "Samarkand",
        card_title1: "Bukhara Campus Project",
        card_title2: "Samarkand Campus Project",
        card_item1: "Total area",
        card_item2: "Number of blocks",
        card_item3: "Auditoriums",
        card_item4: "Parking",
        card_item5: "Dormitory",
        card_item6: "Eco-zone",
        title_secondary: "Campus Map",
        map_item1: "Main campus",
        map_item2: "Block under the activity hall",
        map_item3: "Block under the gym",
        map_item4: "Medical building (under construction)",
        map_item5: "Rectory building (under construction)",
        map_item6: "Car parking",
        map_item7: "Eco-zones",
        data1: "to",
        data2: "items",
        data3: "items",
        data4: "auto",
        data5: "seats",
        data6: "available",
      },
      purpose: {
        title: "Purpose, Mission, Values",
        card1_title: "Purpose",
        card1_text:
          "ZARMED University aims to prepare highly qualified professionals who contribute to the development of humanity at local, national, and global levels with their knowledge and skills.",
        card2_title: "Mission",
        card2_text:
          "Our goal is to become the leading educational institution in Central Asia by 2030. Our mission is to provide relevant and adaptable educational programs that meet the needs of the rapidly changing world and the demands of New Uzbekistan.",
        card3_title: "Commitment",
        card3_text:
          "Our commitment is reflected in our strict work ethics and pursuit of excellence.",
        card4_title: "Creativity",
        card4_text:
          "It is manifested in our new ideas, intellectual curiosity, willingness to take risks, and entrepreneurial spirit.",
        card5_title: "Flexibility",
        card5_text:
          "It is demonstrated in our ability to adapt to the rapid changes in today's fast-developing world.",
        card6_title: "Honesty",
        card6_text:
          "It is reflected in our adherence to the highest moral standards in personal and professional behavior, as well as in our transparency and responsibility in management and all our actions.",
        card7_title: "Collaboration",
        card7_text:
          "It is evident in our collaborative work with society, industry, the government, and most importantly, our students.",
      },
      symbols: {
        title: "Symbols",
        btn: "Download {name}",
        title1: "Circular text",
        text1: "University name",
        title2: "Sun",
        text2: "The sun depicted in the logo",
        title3: "Winged Bars",
        text3:
          "Frequently mentioned in legends about Samarkand. One of the city's symbols.",
        title4: "Book",
        text4:
          "A symbol of knowledge. An inseparable part of any university logo.",
        title5: "Madrasah Portal",
        text5: "Enriches the logo with an Eastern spirit.",
        title6: "Eight-pointed Star",
        text6: "One of the symbols of the East and Islam.",
        text7: "Year the university was established",
        title_madhiya1: "University Anthem",
        title_madhiya2: "Anthem Text",
      },
      exam: {
        title: "Exam Samples",
        card1_title: "Exams for Contract",
        card2_title: "Exams for Entrance to Grants",
        card1_item1: "Entrance date – 1",
        card1_item2: "Biology March – 2024",
        card1_item3: "Chemistry March – 2024",
        card1_item4: "Mathematics February – 2024",
        card2_item1: "Entrance date – 1",
        card2_item2: "Biology March – 2024",
        card2_item3: "Chemistry March – 2024",
        card2_item4: "Mathematics February – 2024",
      },
      faculties: {
        title: "Faculties",
        descr: "Bachelor's degree (BSc) for the 2023/2024 academic year",
      },

      batafsil: {
        title: "DETAILS",
      },
      partnership: {
        title: "Our Institute's Partnerships",
      },
      statistics: {
        title: "BIU in the city of Bukhara is …",
        text1: "FACULTIES",
        text2: "GRADUATES",
        text3: "BACHELOR STUDENTS",
        text4: "LOCAL PROFESSORS",
        text5: "MASTER’S STUDENTS",
        text6: "STUDENT DORMITORIES",
        text7: "ACADEMIC BUILDINGS",
        text8: "BIU PREPARATORY COURSE STUDENTS",
        text9: "INTERNATIONAL PROFESSORS",
        text10: "BIU PREPARATORY COURSE INSTRUCTORS",
        text11: "BIU MINIBUSES",
      },

      university: {
        name: "UNIVERSITY",
        title: "About the University",
        about: {
          title: "About BIU",
          rectorAddress: "Rector's Address",
          goals: "Our Goals",
          qualitySystem: "Quality Management System",
          facts: "Numbers and Facts",
          codeOfConduct: "Code of Conduct",
          directions: "Education Directions",
          partnership: "International Cooperation",
          scientificactivity: "Scientific Activity",
        },
        rectorOffice: {
          title: "Rector's Office",
          rector: "Rector",
          viceRectors: "Vice Rectors",
          managers: "Managers",
          staff: "Staff",
          departmentHeads: "Department Heads",
          professors: "Professors",
          socie: "SOCIE (Faculty of Information Technologies)",
          sbl: "SBL (Faculty of Business and Logistics)",
          ge: "GE (General Education)",
        },
        students: {
          title: "STUDENTS",
          association: "Student Association",
          support: "Student Support Center",
          library: " Information Resource Center",
          dormitory: "Dormitory",
          timetable: "Academic Year Timetable",
          successful: "Successful Students",
          distance: "Distance Education",
        },
        infrastructure: {
          title: "Infrastructure",
          dataCenter: "Data Center",
          printing: "Printing House",
          buildings: "Buildings",
          gym: "Gym",
          dormitory: "Dormitory",
          conferenceHall: "Conference Hall",
          innovationCenter: "Innovation Center",
          transferOffice: "Transfer Office",
          cyberLab: "Cybersecurity Laboratory",
          classrooms: "Classrooms",
          stadium: "Stadium",
          publicOffer: "Public Offer",
          sponsorship: "Sponsorship",
          researchCenters: "Research Centers",
          ecozone: "Green University",
        },
        symbols: {
          title: "University Symbols",
          emblem: "BIU Emblem and Symbol",
        },
        apply: {
          title: "Apply to Inha University in Tashkent",
          button: "Apply",
        },
        visit: {
          title: "Plan a visit to Inha University in Tashkent",
          button: "Contact us",
        },
      },
      aboutUniversity: {
        title: "BRIEF INFORMATION ABOUT BUKHARA INTERNATIONAL UNIVERSITY",
        description1:
          "The university was established according to the instructions of President Sh.M. Mirziyoyev during his visit to Bukhara region on January 21-22, 2021, and in accordance with item 98 of protocol No. 4 at the extraordinary session of the regional council of people's deputies.",
        description2:
          "Currently, our university has 3 campuses, a general educational building with a capacity of 6000 students, and a dormitory for 420 students. We offer 16 bachelor's programs, 8 master's programs, and 6 doctoral programs in Psychology, Philology, and Pedagogy.",
        description3:
          "Since 2021, based on the agreement with the Center for the Development of Digital Educational Technologies, student reports have been managed on the 'HEMIS' platform. To date, diplomas have been awarded to students who have completed the master's degree three times.",
        description4:
          "In just 4 years, our university has achieved high results: the number of students has increased, the number of educational buildings has grown, the quality of education meets international standards, the scientific potential has reached 69%, the number of educational fields has grown to 24, the university has received a license to offer postgraduate education, a scientific council in psychology has been established, and international scientific journal authorship has been attained. Based on the relevant license from the Cabinet of Ministers of the Republic of Uzbekistan, starting from March 28, 2025, the university was renamed BUKHARA INTERNATIONAL UNIVERSITY.",
      },
      association: {
        title: "Uzbekistan Youth Union",
        name: "BARAKAYEV KHUMOYUN MIRZO ILKHOMOVICH",
        description1: 'Leader of the "Uzbekistan Youth Union" BT University',
        title1:
          "GOALS AND OBJECTIVES OF THE PRIMARY ORGANIZATION OF THE UZBEKISTAN YOUTH UNION AT BUKHARA INTERNATIONAL UNIVERSITY",
        title1_description:
          "The main goal of the primary organization is to help create favorable conditions for youth education and upbringing at educational institutions, protect their rights and interests, and contribute to the development of well-rounded individuals.",
        title2: "The primary organization sets the following tasks:",
        title2_list1:
          "To educate the younger generation in the spirit of love and loyalty to the homeland, deeply instilling the idea of national independence, national values, religious tolerance, interethnic harmony, and family values;",
        title2_list2:
          "To explain the civil rights and duties of youth, as defined in the Constitution and laws of Uzbekistan, and to clarify the essence of democratic and legal reforms being implemented in the country;",
        title2_list3:
          "To study the problems of youth at higher educational institutions, including the quality of education, the level of knowledge, attendance, and library usage, and to assist in resolving student appeals;",
        title2_list4:
          "To implement activities aimed at deepening the knowledge of youth, studying foreign languages, mastering modern information and communication technologies, and guiding them in career orientation;",
        title2_list5:
          "To discover talented youth, support and motivate their intellectual and creative development, and organize clubs and circles to enhance their abilities;",
        title2_list6:
          "To support efforts in creating favorable conditions for inclusive education of youth with disabilities and special needs;",
        title2_list7:
          "To work with children from troubled families, assist with social reintegration, return students with poor attendance to the educational process, and prevent early marriages among girls;",
        title2_list8:
          "To carry out legal and educational work aimed at preventing crime and violations among youth;",
        title2_list9:
          "To promote reading among youth, increase their love for books, and foster a culture of reading;",
        title2_list10:
          'To form an ideological immunity against harmful phenomena disguised as "mass culture", informational attacks, religious fanaticism, missionary work, and extremist ideologies;',
        title2_list11:
          "To develop youth tourism, organizing visits to historical landmarks, holy places, museums, theaters, and monuments built during the period of independence;",
        title2_list12:
          "To promote sports among youth, creating conditions for the participation of girls in sports competitions;",
        title2_list13:
          "To organize outreach activities aimed at spreading medical culture and preventing diseases;",
        title2_list14:
          "To increase environmental awareness through the promotion of environmental protection and rational use of natural resources;",
        title3: "MEMBERSHIP IN THE YOUTH UNION",
        title3_head:
          "Legal and physical entities can become members of the Union according to the procedures established by this Charter:",
        title3_list1:
          "Citizens of the Republic of Uzbekistan who are 14 to 30 years old, as well as foreign citizens residing permanently in Uzbekistan, can become members of the Union by expressing their intention to support its goals.",
        title3_list2:
          "A physical person member of the Union has no age restrictions specified in clause 4.2 of the Charter if they are elected to a governing body of the Union.",
        title3_list3:
          "Admission and exit of physical persons from the Union is carried out at the General Meeting of the primary organization and at the Council meeting of the primary organization (if such a council exists).",
        title3_list4:
          "Decisions regarding the admission and exit of physical persons are final and do not require confirmation from higher Union bodies.",
        title3_list5:
          "Legal entities and organizations in the field of youth policy, in accordance with the goals, tasks, and program documents of the Union, can become members of the Union. Legal and physical entities must submit a relevant application for membership.",
        title3_list6:
          "Legal entities are admitted to the Union based on the decision of the local or territorial councils of the Union.",
        title3_list7:
          "Membership of a physical person in the Union may be terminated in the following cases: upon the person's request;",
        title3_list8:
          "When the age of a member exceeds 30 years (except for those elected to governing bodies);",
        title3_list9:
          "When a member violates the Charter or the laws of the Republic of Uzbekistan;",
        title3_list10: "When the Union ceases its activities.",
        title3_list11:
          "A decision to leave the Union is made at the General Meeting or the Council meeting of the primary organization.",
        title4: "RIGHTS OF MEMBERS",
        title4_list1:
          "To freely express their opinions at general meetings, conferences, congresses, sessions of governing bodies, and in Union publications;",
        title4_list2:
          "To participate in the development of decisions by the Union's governing bodies either personally or through a representative;",
        title4_list3:
          "To elect and be elected to the governing bodies of the Union;",
        title4_list4:
          "To receive information about the activities of the Union bodies, participate in discussions on matters concerning them, and express their views;",
        title4_list5:
          "To participate in the activities of the Union in accordance with its Charter and Program, and to submit proposals and appeals to any of its governing bodies.",
        title5: "MAIN OBLIGATIONS OF MEMBERS",
        title5_list1:
          "To participate in achieving the goals of the Union as outlined in the Charter;",
        title5_list2:
          "To enhance the influence and authority of the Union among youth and society;",
        title5_list3:
          "To comply with decisions of the governing bodies of the Union, general meetings, and the Council sessions;",
        title5_list4:
          "To actively participate in the activities of the primary Union organization.",
        title6: "MAIN DIRECTIONS OF ACTIVITY OF THE PRIMARY ORGANIZATION",
        title6_description:
          "The primary organization of the Uzbekistan Youth Union at Bukhara International University includes 2311 students, and its activities aim at social protection, addressing their proposals and wishes, assisting in adapting to independent life, organizing leisure activities, and personality development, fostering intellectual property awareness, and supporting student initiatives.",
        title7:
          "The Council of the Primary Organization of the Uzbekistan Youth Union at Bukhara International University consists of 13 people. The Council composition is as follows:",
        title7_list1: "Leader of the Uzbekistan Youth Union IBT",
        title7_list2: "First Deputy Leader of the Youth Union",
        title7_list3: "Leader of the active and talented youth department",
        title7_list4:
          "Leader of youth initiatives and entrepreneurship department",
        title7_list5: "Leader of the educational quality monitoring department",
        title7_list6:
          "Leader of the department working with youth after compulsory military service",
        title7_list7: "Deputy leader for spiritual and moral work",
        title7_list8:
          "Leader of the spiritual and moral work and youth tourism department",
        title7_list9: "Leader of sports and health department",
        title7_list10:
          "Leader of the department working with needy and students with limited abilities",
        title7_list11:
          "Leader of the organizational-control and personnel department",
        title7_list12: "Press secretary, leader of the youth media group",
        title7_list13:
          "Leader of the department working with student appeals, working on a voluntary basis.",
        title8:
          "The following clubs and circles were organized under the primary organization of the Uzbekistan Youth Union at Bukhara International University:",
        title8_list1: '"Vatan Posbonlari" public organization',
        title8_list2: '"Khumo" student theater studio',
        title8_list3: '"Zakovat" intellectual club',
        title8_list4: '"Kuvnoqar va Zukkolar" club',
        title8_list5: '"BIU Press Today" journalist club',
        title8_list6: '"Munozara" club',
        title8_list7: '"Yosh Ijodkorlar" club',
        title8_list8: '"Chempionlar" club',
        title8_list9: '"Siyosatchilar" club',
        title8_list10: '"Taffakur" intellectual club',
      },
      scientificactivity: {
        title: `According to the decree No. 367 of the Presidium of the Higher Attestation Commission 
              of the Republic of Uzbekistan dated February 12, 2025, a collection of scientific articles 
              prepared based on materials from the "Psychology of the XXI Century" international congress, 
              organized by the Institute of Psychology and Foreign Languages and the International Academy 
              of Psychological Sciences (MAPN) on March 16-18, 2025, was included in the list of foreign 
              scientific publications.`,
        title1: `Scientific Activity`,
        title2: "Diplomas and Scientific Works",
        title3: "Haydarov Shakhriyor Shukhratovich",
        title4: "Photos",
        title5: "Diplomas",
        title6:
          "Pedagogical and psychological factors in shaping the psychological well-being of future engineers",
        title7: "Jalolov Tursunbek Sadriddinovich",
        title8:
          "Pedagogical and psychological foundations of data processing using SPSS software",
        title9: "PhD diplomas awarded to institute teachers in 2023–2024",
        title10: "Independent Researcher Full Name",
        title11: "Dissertation Topic",
        title12: "Ikromova Sitora Akbarovna",
        title13:
          "Socio-psychological factors in forming ideological immunity against destructive information among adolescents",
        title14: "Barotov Khumoyun Sharifovich",
        title15:
          "Scientific-practical mechanisms for improving psychological assistance practices for adolescent athletes",
        title16: "Abdullayev Amrilla Nasullayevich",
        title17:
          "Psychological determinants of forming pedagogical communication factors among military education faculty cadets",
        title18: "Narzullayeva Salomatbonu Nasullayevna",
        title19:
          "Socio-psychological determinants of forming professional competence factors among nurses",
      },
      researchcenters: {
        content: "BUKHARA INTERNATIONAL UNIVERSITY'S",
        content1: "Information Resource Center",
        content2: "Collaboration with the National Library",
        content3:
          "Professors, teachers, and students have free access to electronic resources",
        content4: "Modern resources",
        content5: "Printed, electronic, and QR-coded textbooks for all fields",
        content6: "Center's capabilities",
        content7: "Partnership with the National Library",
        content8:
          "A cooperation agreement has been signed with the Alisher Navoi National Library of Uzbekistan.",
        content9: "Modern resources",
        content10: "Printed, electronic, and QR-coded textbooks are available.",
        content11: "Extensive collection",
        content12: "Dissertations, fiction, study guides, and textbooks.",
        content13: "Reader competitions",
        content14:
          'Quarterly competitions for the title of "Best Reader" are held.',
        content15: "Center photos",
        content16: "Interior of the Information Resource Center",
        content17: "Information Resource Center | Workspaces for students",
      },
      partneruniversity: {
        title: "International Conference 2025",
        text: "Memorandum signing ceremony 2023",
        text1: "University partnership agreement",
        text2: "International cooperation",
        text3: "Student exchange program",
        text4: "Academic cooperation agreement",
        text5: `
        On March 16, 2025, the Bukhara Institute of Psychology and Foreign Languages  
        hosted the "INTERNATIONAL CONFERENCE ON PSYCHOLOGICAL SCIENCES".
        `,
        text6: `
        At this conference, qualified specialists working in the Republic of Uzbekistan,  
        professors with academic degrees (DSc, PhD) presented reports on the latest scientific  
        advancements, proposals, and pressing topics in the field of psychology.
        `,
        text7: `
        Foreign scholars also delivered speeches, sharing their suggestions on the contributions  
        of Uzbek psychologists to the development of psychological sciences and issues of ongoing  
        cooperation with international universities.
        `,
        text8:
          "International Cooperation: With Ankara Yıldırım Beyazıt University",
        text9: "Strategic partnership between Turkish and Uzbek universities",
        text10: "Visit of Professor Kosimov Ali Askarxon",
        text11: `
        Professor Kosimov Ali Askarxon Aslamxon o'g'li, a leading expert in international  
        cooperation from Ankara Yıldırım Beyazıt University (Turkey), visited Bukhara International University.
        `,
        text12: `The guest familiarized himself with the modern facilities at our university  
        and delivered a special lecture on "Psychology of Religion" for master's students majoring in Psychology.`,
        text13: "Signed Agreements",
        text14: "Memorandum of Strategic Cooperation",
        text15: "Faculty exchange program",
        text16: "Joint scientific research",
        text17: "Professor Kosimov’s discussion with students",
        text18: "Future Cooperation Plans",
        text19: `Plans include developing joint master's programs between the two universities,  
        organizing international conferences, and publishing academic journals.`,
        text20: "International Conference 2024",
        text21:
          "In 2024, a prestigious international conference was held at Samarkand State University.",
        text22: `This conference featured presentations by psychology scholars from over 40 countries.`,
        text23: `The presentations covered recent scientific advancements, experiences, journals, and books in psychology.`,
        text24: `Uzbek psychologists also participated in the conference. The main goal was to promote  
        the development of psychology in Uzbekistan and train qualified specialists for society.  
        Several international memorandums were signed.`,
        text25: `A delegation led by the rector of BUKHARA INTERNATIONAL UNIVERSITY  
        held an international conference to establish cooperation with leading Turkish universities.`,
        text26:
          "Several international connections were made during this visit.",
        text27: `For example, agreements were signed for professional development of  
        BUKHARA INTERNATIONAL UNIVERSITY faculty at Russian universities,  
        student exchange under the international credit-module system, and joint programs.`,
        text28: `A delegation led by the rector of BUKHARA INTERNATIONAL UNIVERSITY  
        held an international conference to establish cooperation with leading Kazakh universities.`,
        text29:
          "Several international connections were made during this visit.",
        text30: `For example, agreements were signed for professional development of  
        BUKHARA INTERNATIONAL UNIVERSITY faculty at Kazakh universities,  
        student exchange under the international credit-module system, and joint programs.`,
        text31: "International Conference",
        text32: `A delegation led by the rector of BUKHARA INTERNATIONAL UNIVERSITY  
        visited leading Russian universities to establish international cooperation.`,
        text33: `At this conference, qualified specialists working in the Republic of Uzbekistan,  
        professors with academic degrees (DSc, PhD) presented reports on the latest scientific  
        advancements, proposals, and pressing topics in the field of psychology.`,
        text34: `Foreign scholars also delivered speeches, sharing their suggestions on the contributions  
        of Uzbek psychologists to the development of psychological sciences and issues of ongoing  
        cooperation with international universities.`,
        text35: "Our Memorandums",
        text36: "Cooperation photos",
        text37: "Memorandum documents",
        text38: "Download",
      },
      headstaff: {
        title: "Department Heads",
        staffMembers: [
          {
            name: "Barotov Shuxrat Sharipovich",
            position: "Administrative Manager",
            phone: "+998 99 773 17 37",
            email: "shuxrat.barotov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Niyazov Fazliddin Sayfitdinovich",
            position: "Rector's Advisor",
            phone: "+998 90 711 96 97",
            email: "fazliddin.niyazov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Ochilova Dildora Toshpulatovna",
            position: "Head of Planning and Finance Department",
            phone: "+998 88 855 20 12",
            email: "dildora.ochilova@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Nusratov Farruxmirzo Furqat o'g'li",
            position: "Economist",
            phone: "+998 94 217 11 12",
            email: "farruxmirzo.nusratov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Qurbonov O'ktam Radjabovich",
            position: "Head of Academic Affairs and Master's Department",
            phone: "+998 93 809 66 05",
            email: "oktam.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Haydarov Shahriyor Shuxrat o'g'li",
            position:
              "Head of Youth Affairs, Spirituality and Enlightenment Department",
            phone: "+998 90 635 96 16",
            email: "shahriyor.haydarov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Qo'yliyev Ulug'bek Ravshanovich",
            position: "Head of Correspondence Department",
            phone: "+998 94 322 57 75",
            email: "ulugbek.qoyliyev@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Usmonova Surayyo Muxitdinovna",
            position:
              "Head of Research, Innovation and Academic Staff Training Sector",
            phone: "+998 93 651 30 10",
            email: "surayyo.usmonova@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Jo'rayev Uchqun Yusuf o'g'li",
            position: "Head of Registrar's Office",
            phone: "+998 99 708 78 04",
            email: "uchqun.jorayev@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Normurodov Olmos Dilshod o'g'li",
            position: "Deputy Head of Education Quality Control Department",
            phone: "+998 94 025 15 29",
            email: "olmos.normurodov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Karimov Behruz Ibrohimbekovich",
            position: "Head of Marketing and Student Internship Department",
            phone: "+998 90 635 56 58",
            email: "behruz.karimov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Raxmatov Nurbek Erkinovich",
            position: "Vice Dean of Psychology and Foreign Languages Faculty",
            phone: "+998 90 710 64 46",
            email: "nurbek.raxmatov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Xalilov Bekzod Jobir o'g'li",
            position:
              "Responsible Officer for Higher Education Management Information System (HEMIS)",
            phone: "+998 94 771 01 24",
            email: "bekzod.xalilov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Baratova Dilafruz Sharifovna",
            position: "Chair of Psychology Department",
            phone: "+998 94 445 36 66",
            email: "dilafruz.baratova@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Qurbonov Abdujalil Maxmutovich",
            position: "Chair of Philology Department",
            phone: "+998 93 476 06 75",
            email: "abdujalil.qurbonov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
          {
            name: "Kurbanov Baxodir Samatovich",
            position: "Chair of Pedagogy and General Sciences Department",
            phone: "+998 99 707 36 50",
            email: "baxodir.kurbanov@university.edu",
            workHours: "9:00 - 18:00 (Monday-Friday)",
          },
        ],
      },
      goals: {
        text: "Our Goals",
        text1: `
        Our goal is to educate modern, knowledgeable, well-rounded, creative and 
                spiritually strong youth who align with the development of the 
                contemporary world, shaping them as specialists who will actively 
                participate in the future development of our country and the world.`,
        text2: "Qualified Specialists",
        text3: `Training highly qualified specialists in psychology based on 
                    modern knowledge, practical skills and innovative approaches.`,
        text4: "Improving Education Quality",
        text5: `Implementing international standard education methodologies in 
                    accordance with the priority tasks set by our Republic's President 
                    in the field of education.`,
        text6: "Developing Psychology",
        text7: `Expanding psychological services across various social strata, 
                  facilitating personal and professional development. Identifying 
                  each student's capabilities and assisting them in personal and 
                  career orientation.`,
        text8: "Our Higher Goals",
        text9: "International Cooperation",
        text10: `Establishing joint programs with TOP-1000 world universities, 
                      dual degree programs and student exchanges. Professional 
                      development in collaboration with foreign universities and 
                      research centers.`,
        text11: "Education Export",
        text12: `Transforming Uzbekistan into a regional education hub, attracting 
                      international students. Securing positions in international 
                      rankings and enhancing Uzbekistan's prestige in education.`,
        text13: "Innovative Education",
        text14: `Improving education quality through modern technologies 
                      (AI, virtual labs, online platforms). Implementing practice-oriented 
                      education system to prepare students for labor market demands.`,
        text15: "Conclusion",
        text16: `We believe that educating youth with knowledge, dedication and 
                patriotism will enable Uzbekistan to join the ranks of developed nations 
                in the future. Every student represents our country's future, therefore 
                every minute and every piece of knowledge given to them is extremely important.`,
      },
      classrooms: {
        title: "BUKHARA INTERNATIONAL UNIVERSITY CLASSROOMS",
        description:
          "There are a total of 60 classrooms equipped with surveillance cameras, Wi-Fi, each room has a 65-inch SMART TV, modern computers, and separate cameras for Zoom. These facilities aim to further improve the quality of education.",
        gallery: "General view of the classroom",
        gallery1: "Equipped with modern facilities",
        gallery2: "Equipped with SMART TV",
        gallery3: "Comfortable learning environment",
      },
      conferenceHall: {
        title: "BUKHARA INTERNATIONAL UNIVERSITY CONFERENCE HALL",
        description:
          "With a total capacity of 300 seats, all conditions are provided here for holding educational, cultural events, concert programs, and various types of conferences.",
        image1: "300-seat conference hall",
        image2: "Interior view of the hall",
        image3: "Modern equipment",
      },
      contactUs: {
        contactCard: {
          title1: "BIU in Bukhara city",
          title2: "BIU in Kogon city",
          address1:
            "Bukhara city, Sitoroyi Mohi-Xosa CMM, G'ijduvon street, house 250",
          address2:
            "Bukhara region, Kogon district, B. Naqshband CMM, Abay street, house 20",
          address_label: "Address",
          telefon_label: "Phone",
          fax_label: "Fax",
          website_label: "Website",
        },
        title: "Contact BIU",
        header:
          "Reception schedule of BIU leadership and administration in Bukhara city",
        header1:
          "Proposals and complaints of individuals and legal entities regarding the activities of BIU in Bukhara city",
        header2:
          "Can be sent via email or through a special form. Also, according to the schedule, individuals and legal entities can discuss matters related to the university administration during personal appointments.",
        header3: "Rector's advisor Niyazov Fazliddin Sayfitdinovich",
        table_section1: "Full Name",
        table_section2: "Position",
        table_section3: "Reception time",
        table_section4: "Reception day",
        table_section5: "Phone number",
        days: "Monday - Friday",
        ourAddress: "Our address",
        ourAddress1: "The location of BIU university in Bukhara city",
        ourAddress2:
          "Address: Bukhara city, Sitoroyi Mohi-Xosa CMM, G'ijduvon street, house 250",
        ourAddress3: "Open in Google Maps for enlargement",
        staffList: [
          {
            id: 1,
            fio: "Barotov Khumoyin Sharifovich",
            lavozimi:
              "Vice-rector for youth affairs and spiritual-educational work",
            telefon: "+998 91 447 05 04",
          },
          {
            id: 2,
            fio: "Sobirova Dilafruz Abduroziqovna",
            lavozimi: "Vice-rector for scientific work and innovations",
            telefon: "+998 91 831 25 11",
          },
          {
            id: 3,
            fio: "Muxtorov Erkin Mustafoyevich",
            lavozimi: "Vice-rector for academic work",
            telefon: "+998 91 243 17 14",
          },
          {
            id: 4,
            fio: "Barotov Shuxrat Sharipovich",
            lavozimi: "Head of Operations",
            telefon: "+998 99 773 17 37",
          },
          {
            id: 5,
            fio: "Niyazov Fazliddin Sayfitdinovich",
            lavozimi: "Rector's advisor",
            telefon: "+998 90 711 96 97",
          },
          {
            id: 6,
            fio: "Ochilova Dildora Toshpulatovna",
            lavozimi: "Head of planning and finance department",
            telefon: "+998 88 855 20 12",
          },
          {
            id: 7,
            fio: "Nusratov Farruxmirzo Furqat o'g'li",
            lavozimi: "Economist",
            telefon: "+998 94 217 11 12",
          },
          {
            id: 8,
            fio: "Qurbonov O'ktam Radjabovich",
            lavozimi: "Head of training and master's department",
            telefon: "+998 93 809 66 05",
          },
          {
            id: 9,
            fio: "Haydarov Shahriyor Shuxrat o'g'li",
            lavozimi:
              "Head of youth work, spirituality, and education department",
            telefon: "+998 90 635 96 16",
          },
          {
            id: 10,
            fio: "Qo'yliyev Ulug'bek Ravshanbekovich",
            lavozimi: "Head of external relations department",
            telefon: "+998 94 322 57 75",
          },
          {
            id: 11,
            fio: "Usmonova Surayyo Muxitdinovna",
            lavozimi:
              "Head of scientific research, innovation, and pedagogical staff training sector",
            telefon: "+998 93 651 30 10",
          },
          {
            id: 12,
            fio: "Jo'rayev Uchkun Yusuf o'g'li",
            lavozimi: "Head of registrar office",
            telefon: "+998 99 708 78 04",
          },
          {
            id: 13,
            fio: "Normurodov Almos Dilshod o'g'li",
            lavozimi: "Deputy Head of Education Quality Control Department",
            telefon: "+998 94 025 15 29",
          },
          {
            id: 14,
            fio: "Karimov Behruz Ibrohimbekovich",
            lavozimi: "Head of marketing and student practice department",
            telefon: "+998 90 635 56 58",
          },
          {
            id: 15,
            fio: "Rahmatov Nurbek Erkinbekovich",
            lavozimi: "Vice-dean of psychology and foreign languages faculty",
            telefon: "+998 90 710 64 46",
          },
          {
            id: 16,
            fio: "Xalilov Bekzod Jobirovich",
            lavozimi:
              "Responsible for the higher education management information system (HEMIS)",
            telefon: "+998 94 771 01 24",
          },
          {
            id: 17,
            fio: "Baratova Dilafruz Sharifovna",
            lavozimi: "Head of Psychology Department",
            telefon: "+998 94 445 36 66",
          },
          {
            id: 18,
            fio: "Qurbonov Abdujalil Makhmudovich",
            lavozimi: "Head of Philology Department",
            telefon: "+998 93 476 06 75",
          },
          {
            id: 19,
            fio: "Qurbonov Baxodir Samatovich",
            lavozimi: "Head of Pedagogy and General Sciences Department",
            telefon: "+998 99 707 36 50",
          },
        ],
      },
      distance: {
        title: "Distance Education System",
        description1: "Distance Education at Bukhara International University",
        description2:
          "At Bukhara International University, the distance education system has been implemented according to the demands of the time, which is very convenient for applicants working in businesses and organizations.",
        description3:
          "The university has created all the necessary conditions for distance education, and the video lessons of professors and teachers are of very high quality.",
        list_head: "Available Distance Education Programs",
        list_body1:
          "National idea, foundations of spirituality and legal education",
        list_body2: "Psychology",
        list_body3: "Economics",
        list_body4: "Primary education",
        list_body5: "Preschool education",
        list_body6: "Uzbek language and literature",
        list_body7: "Logistics (in transport and other fields)",
        list_body8: "Mother tongue and literature",
        list_body9: "Mathematics",
        body1: "Additional information:",
        body2:
          "To enroll in the distance education program, you can contact the university's official website or the student affairs department.",
      },
      dormitory: {
        title: "STUDENT DORMITORY OF BUKHARA INTERNATIONAL UNIVERSITY",
        description:
          "Our university provides comfortable and modern accommodation for students. The dormitory buildings are equipped with all the necessary facilities, and there are all conditions for students to live in safety and comfort.",
        list1: "Each room accommodates 2-3 people",
        list2: "Kitchen and shower rooms",
        list3: "24/7 security and WiFi network",
        list4: "Study and recreation rooms",
        joy1: "Exterior of the dormitory building",
        joy2: "Comfortable sleeping rooms",
        joy3: "Special study areas",
        joy4: "Recreation room",
        rules: "Dormitory rules:",
        rule1: "Each student must maintain cleanliness and order",
        rule2: "No noise is allowed after 23:00",
        rule3: "Guest registration is mandatory",
        rule4: "Monthly payments must be made on time",
      },
      ecozone: {
        apple: "Apple",
        cherry: "Cherry",
        apricot: "Apricot",
        peach: "Peach",
        pear: "Pear",
        juniper: "Juniper",
        text: "Green spaces of Bukhara International University",
        text1:
          "Statistical data on planted tree species and their distribution",
        text2: "Trees on the university campus",
        text3: "Total number of saplings",
        text4: "CO₂ absorption",
        text5: "650 tons/year",
        text6: "Air purification",
        text7: "3,500 m³/day",
        text8: "Tree species",
        text9: "Detailed information on all tree species",
        text10: "Tree species",
        text11: "Quantity",
        text12: "Percentage",
        text13: "Image",
        text14: "Chart",
        text15: "Environmental impact",
        text16: "Fighting climate change",
        text17: "Trees absorb 650 tons of CO₂ per year",
        text18: "Air purification",
        text19: "Produce 3,500 m³ of clean air daily",
        text20: "Supporting biodiversity",
        text21: "Habitat for 10+ species of birds and insects",
        text22: "pcs",
      },
      korusel: {
        title: "News",
        text: `State sample diplomas were awarded to our students.`,
        t: "Diplomas were handed over.",
        text1: `On June 19, 2023, 19 people,`,
        t1: "On August 5, 2024, 40 people",
        t2: "graduates of the master's program successfully",
        t3: "received QR code diplomas.",
        text2: `Improving the quality of education is a new`,
        t4: "the only correct path for the development of Uzbekistan",
        t5: "Shavkat Mirziyoyev",
        text3: "President of the Republic of Uzbekistan",
        text4: `Our university held`,
        t6: "On March 16, 2025",
        text5: "By our university",
        text6: "❝ INTERNATIONAL CONFERENCE ON PSYCHOLOGY ❝",
        text7: "took place.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // default language
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
