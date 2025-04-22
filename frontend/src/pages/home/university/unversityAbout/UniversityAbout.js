import React from "react";
import img1 from "./img/11.png";
import img2 from "./img/image.png";
import img3 from "./img/image1.png";

function UniversityAbout() {
  const fanlar = [
    { name: "Jismoniy madaniyat", time: "3,5 yil" },
    { name: "Milliy g'oya ma'naviyat asoslari huquq ta'limi", time: "4,5 yil" },
    { name: "Axborot tizimlari va texnologiyalari", time: "4,5 yil" },
    { name: "Turuzim va mexmondo'stlik", time: "4,5 yil" },
    { name: "Maxsus pedagogika va logopediya", time: "4 yil" },
    { name: "Psixologiya", time: "4,5 yil" },
    { name: "Xorijiy til va adabiyoti", time: "4 yil" },
    { name: "Iqtisodiyot", time: "4,5 yil" },
    { name: "Tarix", time: "4,5 yil" },
    { name: "Boshlang'ich ta'lim", time: "4,5 yil" },
    { name: "Maktabgacha ta'lim", time: "3,5 yil" },
    { name: "Musiqa ta'limi", time: "3,5 yil" },
    { name: "O'zbek tili va adabiyoti", time: "4 yil" },
    { name: "Logistika", time: "4,5 yil" },
    { name: "Rus tili", time: "4,5 yil" },
    { name: "Matematika", time: "4,5 yil" },
  ];

  const magistrYonalishlar = [
    { name: "Psixologiya", time: "2 yil" },
    { name: "Iqtisodiyot", time: "2 yil" },
    { name: "Lingvistika", time: "2 yil" },
    {
      name: "Ta'lim tarbiya nazariyasi va metodikasi (boshlang'ich ta'lim)",
      time: "2 yil",
    },
    { name: "Musiqa ta'limi va sa'nat", time: "2 yil" },
    {
      name: "Jismoniy tarbiya va sport mashg'ulotlari va metodikasi",
      time: "2 yil",
    },
    { name: "O'zbek tili va adabiyoti", time: "2 yil" },
    { name: "Pedagogika nazariyasi va tarixi", time: "2 yil" },
  ];

  const doktorantura = [
    { time: "19.00.05", name: "Ijtimoiy psixologiya. Etnopsixologiya" },
    {
      time: "19.00.06",
      name: "Yosh va pedagogik psixologiya. Rivojlanish psixologiyasi",
    },
    {
      time: "13.00.02",
      name: "Ta'lim va tarbiya nazariyasi va metodikasi (soxalar buyicha)",
    },
    {
      time: "13.00.01",
      name: "Pedagogika nazariyasi. Pedagogik ta'limotlar tarixi",
    },
    {
      time: "10.00.04",
      name: "Yevropa, Amerika va Avstraliya xalkdari tili va adabiyoti",
    },
    {
      time: "10.00.06",
      name: "Kiyosiy adabiyotshunoslik, chogishtirma tilshunoslik va tarjimashunoslik",
    },
  ];

  const masofaviy = [
    { name: "Psixologiya", time: "4 yil" },
    { name: "Milliy g'oya ma'naviyat asoslari huquq ta'limi", time: "4 yil" },
    { name: "Iqtisodiyot", time: "4 yil" },
    { name: "Boshlang'ich ta'lim", time: "4 yil" },
    { name: "Maktabgacha ta'lim", time: "3 yil" },
    { name: "O'zbek tili va adabiyoti", time: "4 yil" },
    { name: "Logistika", time: "4 yil" },
    { name: "Rus tili", time: "4 yil" },
    { name: "Matematika", time: "4 yil" },
  ];

  const Kechki = [
    { name: "Jismoniy madaniyat", time: "4,5 yil" },
    { name: "Maxsus pedagogika va logopediya", time: "4,5 yil" },
    { name: "Xorijiy til va adabiyoti", time: "4,5 yil" },
    { name: "Boshlang'ich ta'lim", time: "4,5 yil" },
    { name: "Musiqa ta'limi", time: "4,5 yil" },
    { name: "O'zbek tili va adabiyoti", time: "4,5 yil" },
  ];

  const renderTable = (data, showCode = false) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">№</th>
            <th className="py-3 px-4 text-left">Yo'nalish nomi</th>
            <th className="py-3 px-4 text-left">O'qish muddati</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  const renderTableDoc = (data, showCode = false) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">№</th>
            <th className="py-3 px-4 text-left">Yo'nalish nomi</th>
            <th className="py-3 px-4 text-left">Kodi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-4">{index + 1}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          BUXORO XALQARO UNIVERSITETI HAQIDA MA`LUMOT
        </h1>

        <div className="space-y-4 mb-8">
          <p className="text-lg text-gray-700">
            Prezidentimiz SH.M. Mirziyoyevning 2021 – yil 21-22 yanvar kunlari
            Buxoro viloyatiga tashrifi davomida va Xalq deputatlari viloyat
            Kengashining navbatdagi tashqari sessiyasida bergan topshiriqlari
            bo'yicha 4 – sonli bayonining 98 – bandiga asosan tashkil etilgan.
          </p>
          <p className="text-lg text-gray-700">
            Oliygoximizda bugungi kunda 3 ta kampus umumiy hisobda 6000 o`rinli
            o`quv binosi hamda 420 o`rinli talabalar yotoqxonasi mavjud. Bizda
            jami 16 ta bakalavr, 8 ta magistratura hamda 6 ta ta`lim shakli
            bo`yicha doktorantura mavjud. Ayni damda 35 ta talabalar davlat
            granti asosida ta`lim olmoqda.
          </p>
          <p className="text-lg text-gray-700">
            2021 yildan buyon "Raqamli ta'lim texnologiyalarini rivojlantirish
            markazi" bilan tuzilgan shartnoma asosan talabalarimiz hisoboti
            "HEMIS" platformasida olib boriladi. Hozir kunda 3 marotaba
            Magistratuta ta`limy o`nalishini bitirgan talabalarga diplomlar
            taqdim etildi.
          </p>
          <p className="text-lg text-gray-700">
            Buxoro xalqaro universitetida 12 ta fan doktori professor 41 ta fan
            nomzodi dotsent 92 malakali o'qituvchilar talabalarga tahsil berib
            kelyabti.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl text-center font-bold text-blue-700 mb-4">
              Kunduzgi ta'lim yo'nalishlari (Bakalavr)
            </h2>
            {renderTable(fanlar)}
          </section>

          <section>
            <h2 className="text-2xl text-center font-bold text-blue-700 mb-4">
              Magistratura ta'lim yo'nalishlari (Kunduzgi)
            </h2>
            {renderTable(magistrYonalishlar)}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
              Doktorantura ta'lim yo'nalishlari
            </h2>
            {renderTableDoc(doktorantura, true)}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
              Masofaviy talim yo'nalishlari (Bakalavr)
            </h2>
            {renderTable(masofaviy)}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
              Kechki ta'lim yo'nalishlar (Balakavr)
            </h2>
            {renderTable(Kechki)}
          </section>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-center">
          <div className="lg:w-1/2 space-y-3">
            <h3 className="text-lg font-medium">
              <span className="font-semibold text-blue-700">
                Kunduzgi ta'lim yo'nalishlar –{" "}
              </span>
              4 yil yoki 3 yil.
            </h3>
            <h3 className="text-lg font-medium">
              <span className="font-semibold text-blue-700">
                Sirtqi ta'lim yo'nalishlar –{" "}
              </span>
              5 yil.
            </h3>
            <h3 className="text-lg font-medium">
              <span className="font-semibold text-blue-700">
                Kechki ta'lim yo'nalishlar –
              </span>{" "}
              4,5 yil.
            </h3>
            <h3 className="text-lg font-medium">
              <span className="font-semibold text-blue-700">
                Masofaviy ta'lim yo'nalishlar –
              </span>{" "}
              4 yil yoki 3 yil.
            </h3>
          </div>
          <div className="lg:w-1/2">
            <img
              src={img1}
              alt="University education programs"
              className="w-full h-auto rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>

        <div className="space-y-6">
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base md:text-lg">
            <li className="pb-2 border-b border-gray-100">
              Universitetda 2025 yildan boshlab "Psixologiya fanlari bo'yicha"
              Ilmiy kengash ochildi.
            </li>
            <li className="pb-2 border-b border-gray-100">
              O'quv jarayonlari xalqaro kredit-modul tizimi talablari asosida
              olib boriladi.
            </li>
            <li className="pb-2 border-b border-gray-100">
              Universitet Dunyoning 30 dan ortiq nufuzli oliy ta'lim
              muassasalari bilan Xalqaro Memorandumlar imzolagan.
            </li>
            <li>
              Universitet haqida ko'proq ma'lumot olmoqchi bo'lganlar uchun{" "}
              <a
                href="tel:+998553099999"
                className="text-blue-600 hover:underline font-medium"
              >
                55 309 99 99
              </a>{" "}
              telefon raqami 24 soat ishlaydi.
            </li>
          </ul>

          <div className="bg-blue-50 p-4 md:p-6 rounded-lg mt-6">
            <h2 className="text-lg md:text-xl font-semibold text-blue-800 mb-3">
              1. Buxoro psixologiya va xorijiy tillar instituti (ilmiy
              axborotnomasi)
            </h2>
            <p className="text-gray-700">
              O'zbekiston Respublikasi Prezidenti Administratsiyasi xuzuridagi
              Axborot va ommaviy kommunikatsiyalar agentligi tomonidan berilgan.
              Jurnal O'zbekistan Respublikasi Oliy ta'lim, fan va innovatsiyalar
              vazirligi xuzuridagi OAK Rayosatining 2023 yil 29 dekabrdagi
              347-son qarori bilan 10.00.00 - Filologiya, 13.00.00 - Pedagogika,
              19.00.00 - Psixologiya fanlari buyicha dissertatsiya ishlari
              natijalari yuzasidan ilmiy maqolalar chop etilishi lozim bulgan
              zaruriy nashrlar ruyxatiga kiritilgan.
            </p>
          </div>

          <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
            <h2 className="text-lg md:text-xl font-semibold text-blue-800 mb-3">
              2. "Вестник интегративной психологии" ilmiy jurnalini
              muallifligini ham mazkur universitet olib boradi.
            </h2>
          </div>

          <div className="mt-8 border-t pt-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">
              Вестник интегративной психологии
            </h1>

            <div className=" space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">О журнале:</span> В журнале
                публикуются тезисы участников международной научно-методической
                конференции «Интегративная психология: теория и практика»,
                проводимой в Ярославле в апреле каждого года.
              </p>

              <p>
                <span className="font-semibold">
                  Крайний срок подачи материалов:
                </span>{" "}
                тезисы докладов принимаются до 8 марта 2011 г.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Требования к оформлению:</h3>
                <p className="mb-2">
                  В тезисах указать в правом верхнем углу ФИО, учреждение,
                  город, затем название доклада (заглавные буквы, жирный шрифт,
                  расположение по центру).
                </p>
                <p className="mb-2">
                  Тезисы докладов просим высылать на электронный адрес{" "}
                  <a
                    href="mailto:mapn2@rambler.ru"
                    className="text-blue-600 hover:underline"
                  >
                    mapn2@rambler.ru
                  </a>{" "}
                  с пометкой «Вестник интегративной психологии».
                </p>
                <p>
                  Объем от 2 до 4 полных страниц, компьютерного набора (word/98,
                  шрифт 14 «Times new Roman», через 1,0 интервал, распечатка
                  контрастная, черная, лист формата А4, поля справа 15 мм.,
                  слева – 25 мм., сверху и снизу 20 мм., абзацный отступ 5
                  знаков; в тезисах не должно быть таблиц, рисунков, подстрочных
                  символов, списка литературы; дискеты и печатный текст не
                  возвращаются).
                </p>
              </div>

              <div
                className="bg-gray-50 rounded-lg gap-4 mt-4">
                <div className=" p-2  px-4">
                  <p className="font-semibold">
                    Главный редактор журнала «Вестник интегративной психологи»:
                  </p>
                  <p>В.В.Козлов</p>
                </div>

                <div className="p-2  px-4">
                  <p className="font-semibold">
                    Заместитель главного редактора:
                  </p>
                  <p>Мазилов В.А.</p>
                </div>

                <div className="p-2 px-4">
                  <p className="font-semibold">Редакционная коллегия:</p>
                  <p>Новиков В.В., Карицкий И.Н., Карпов А.В.</p>
                </div>

                <div className="p-2 px-4">
                  <p className="font-semibold">Редакционный совет:</p>
                  <p className="text-sm">
                    Бубеев Ю.А., Волков И.П., Клюева Н.В., Поваренков Ю.П., Орел
                    В.Е., Мануйлов Г.М., Майков В.В., Кашапов С.М., Львов В.М.,
                    Петренко В.Ф., Семенов В.Е., Фетискин Н.П.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Учредители журнала:</p>
                <p>
                  Международная Академия Психологических Наук, Международный
                  Институт Интегративной Психологии, Ассоциация
                  Трансперсональной Психологии и Психотерапии
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Адрес редакции:</p>
                <p>150057, г. Ярославль, ул. Матросова, дом 9, офис 206</p>
                <p>Тел.: (4852) 728–394; факс (4852) 478–666</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <img
              src={img2}
              alt="Journal cover"
              className="w-full sm:w-1/2 h-auto rounded-lg shadow-md border border-gray-200"
            />
            <img
              src={img3}
              alt="Journal content"
              className="w-full sm:w-1/2 h-auto rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversityAbout;
