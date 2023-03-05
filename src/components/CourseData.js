const data = [
  {
    key: 1,
    id: "/kotlin",
    courseImage:
      "https://miro.medium.com/max/1400/1*tZBSUBNpKHREIasM9zOgcQ.png",
    courseName: "Android",
    mentor: "Allayarov Otabek",
    technology: "Kotlin",
    courseInfo:
      "Dasturlashni endigina boshlovchilar yoki shu sohaga qiziquvchilar qaysi yo'nalishni tanlash kerak va uning yaqin kelajagi qanday degan savol qiziqtiradi. Albatta, tanlangan yo'nalish jamiyatga foydasi tegadigan, kelajagi bor va eng muhimi yuqori daromadga olib keladigan bo'lishi kerak. Hozirgi kunda dunyo aholisining deyarli barchasi mobil qurilmalarga ega ekanligi hammaga ma'lum. Bu qurilmalarning juda katta qismi Android operatsion tizimida ishlaydi. Statistik ma'lumotlarga qaraganda, aqlli qurilmalar(smart devices)ning 80% dan ortiq qismi Android tizimida ishlaydi. Android tizimi keng imkoniyatli, dasturchilarga qulay, bepul va albatta ochiq kodlidir.",
    price: "250 000 som/oy",
    duration: "6oy-9oy",
    sertificat: "Mavjud",
    courseIcon: "bi bi-android",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    key: 2,
    id: "/ks",
    courseImage:
      "https://i0.wp.com/nydabd.com/wp-content/uploads/2018/11/Office-application.png?fit=600%2C338&ssl=1",
    courseName: "Kompyuter Savodxonligi",
    mentor: "Abdullayev Sultonbek",
    technology: "Word, Excel, PowerPoint, Kompyuter Arxitektura",
    courseInfo:
      "Dasturlashni endigina boshlovchilar yoki shu sohaga qiziquvchilar qaysi yo'nalishni tanlash kerak va uning yaqin kelajagi qanday degan savol qiziqtiradi. Albatta, tanlangan yo'nalish jamiyatga foydasi tegadigan, kelajagi bor va eng muhimi yuqori daromadga olib keladigan bo'lishi kerak. Hozirgi kunda dunyo aholisining deyarli barchasi mobil qurilmalarga ega ekanligi hammaga ma'lum. Bu qurilmalarning juda katta qismi Android operatsion tizimida ishlaydi. Statistik ma'lumotlarga qaraganda, aqlli qurilmalar(smart devices)ning 80% dan ortiq qismi Android tizimida ishlaydi. Android tizimi keng imkoniyatli, dasturchilarga qulay, bepul va albatta ochiq kodlidir.",
    price: "200 000 som/oy",
    duration: "2oy",
    sertificat: "Mavjud",
    courseIcon: "bi bi-pc-display",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    key: 3,
    id: "/frontend",
    courseImage:
      "https://www.pskitservices.com/wp-content/uploads/2019/08/html-css-javascrit.jpg",
    courseName: "Front End (Web Dasturlash)",
    mentor: "Tursinbayev Shukurulla",
    technology: "HTML, CSS, JavaScript, ReactJS",
    courseInfo:
      "Dasturlashni endigina boshlovchilar yoki shu sohaga qiziquvchilar qaysi yo'nalishni tanlash kerak va uning yaqin kelajagi qanday degan savol qiziqtiradi. Albatta, tanlangan yo'nalish jamiyatga foydasi tegadigan, kelajagi bor va eng muhimi yuqori daromadga olib keladigan bo'lishi kerak. Hozirgi kunda dunyo aholisining deyarli barchasi mobil qurilmalarga ega ekanligi hammaga ma'lum. Bu qurilmalarning juda katta qismi Android operatsion tizimida ishlaydi. Statistik ma'lumotlarga qaraganda, aqlli qurilmalar(smart devices)ning 80% dan ortiq qismi Android tizimida ishlaydi. Android tizimi keng imkoniyatli, dasturchilarga qulay, bepul va albatta ochiq kodlidir.",
    price: "250 000 som/oy",
    duration: "6oy-9oy",
    sertificat: "Mavjud",
    courseIcon: "fa-brands fa-html5",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    key: 4,
    id: "/itmath",
    courseImage:
      "https://storage.kun.uz/source/4/-Ky--bEa249lIxAuzDEPPmwwWO01trJG.jpg",
    courseName: "IT Matematika",
    mentor: "Nurillaev Samandar",
    technology: "Algebra, Geometriya",
    courseInfo:
      "Dasturlashni endigina boshlovchilar yoki shu sohaga qiziquvchilar qaysi yo'nalishni tanlash kerak va uning yaqin kelajagi qanday degan savol qiziqtiradi. Albatta, tanlangan yo'nalish jamiyatga foydasi tegadigan, kelajagi bor va eng muhimi yuqori daromadga olib keladigan bo'lishi kerak. Hozirgi kunda dunyo aholisining deyarli barchasi mobil qurilmalarga ega ekanligi hammaga ma'lum. Bu qurilmalarning juda katta qismi Android operatsion tizimida ishlaydi. Statistik ma'lumotlarga qaraganda, aqlli qurilmalar(smart devices)ning 80% dan ortiq qismi Android tizimida ishlaydi. Android tizimi keng imkoniyatli, dasturchilarga qulay, bepul va albatta ochiq kodlidir.",
    price: "220 000 som/oy",
    duration: "6oy-9oy",
    sertificat: "Mavjud",
    courseIcon: "fa-solid fa-square-root-variable",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    key: 5,
    id: "/itenglish",
    courseImage:
      "https://all.ie/wp-content/uploads/2015/09/Evening_English_1-1150x647.jpg",
    courseName: "IT English",
    mentor: "",
    technology: "IT English",
    courseInfo:
      "Dasturlashni endigina boshlovchilar yoki shu sohaga qiziquvchilar qaysi yo'nalishni tanlash kerak va uning yaqin kelajagi qanday degan savol qiziqtiradi. Albatta, tanlangan yo'nalish jamiyatga foydasi tegadigan, kelajagi bor va eng muhimi yuqori daromadga olib keladigan bo'lishi kerak. Hozirgi kunda dunyo aholisining deyarli barchasi mobil qurilmalarga ega ekanligi hammaga ma'lum. Bu qurilmalarning juda katta qismi Android operatsion tizimida ishlaydi. Statistik ma'lumotlarga qaraganda, aqlli qurilmalar(smart devices)ning 80% dan ortiq qismi Android tizimida ishlaydi. Android tizimi keng imkoniyatli, dasturchilarga qulay, bepul va albatta ochiq kodlidir.",
    price: "220 000 som/oy",
    duration: "3oy-6oy",
    sertificat: "Mavjud",
    courseIcon: "bi bi-translate",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    key: 6,
    id: "/python",
    courseImage:
      "https://1.bp.blogspot.com/-iz4h8usN6dQ/Xg3J_I6QxHI/AAAAAAAAEPE/itErMf_VcVI-fY0-vqPiPabtKkebJZLBgCNcBGAsYHQ/s1600/AdvancePython.jpg",
    courseName: "Python",
    mentor: "Ubaydullayev Xumoyun",
    technology: "Python",
    courseInfo:
      "Dasturlashni endigina boshlovchilar yoki shu sohaga qiziquvchilar qaysi yo'nalishni tanlash kerak va uning yaqin kelajagi qanday degan savol qiziqtiradi. Albatta, tanlangan yo'nalish jamiyatga foydasi tegadigan, kelajagi bor va eng muhimi yuqori daromadga olib keladigan bo'lishi kerak. Hozirgi kunda dunyo aholisining deyarli barchasi mobil qurilmalarga ega ekanligi hammaga ma'lum. Bu qurilmalarning juda katta qismi Android operatsion tizimida ishlaydi. Statistik ma'lumotlarga qaraganda, aqlli qurilmalar(smart devices)ning 80% dan ortiq qismi Android tizimida ishlaydi. Android tizimi keng imkoniyatli, dasturchilarga qulay, bepul va albatta ochiq kodlidir.",
    price: "250 000 som/oy",
    duration: "3oy-6oy",
    sertificat: "Mavjud",
    courseIcon: "fa-brands fa-python",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    key: 7,
    id: "/graphicdesign",
    courseImage: "https://i.ytimg.com/vi/mQSKseBlA4c/maxresdefault.jpg",
    courseName: "Grafik Dizayn",
    mentor: "Batir",
    technology: "Photoshop, CorelDraw",
    courseInfo:
      "Dasturlashni endigina boshlovchilar yoki shu sohaga qiziquvchilar qaysi yo'nalishni tanlash kerak va uning yaqin kelajagi qanday degan savol qiziqtiradi. Albatta, tanlangan yo'nalish jamiyatga foydasi tegadigan, kelajagi bor va eng muhimi yuqori daromadga olib keladigan bo'lishi kerak. Hozirgi kunda dunyo aholisining deyarli barchasi mobil qurilmalarga ega ekanligi hammaga ma'lum. Bu qurilmalarning juda katta qismi Android operatsion tizimida ishlaydi. Statistik ma'lumotlarga qaraganda, aqlli qurilmalar(smart devices)ning 80% dan ortiq qismi Android tizimida ishlaydi. Android tizimi keng imkoniyatli, dasturchilarga qulay, bepul va albatta ochiq kodlidir.",
    price: "220 000 som/oy",
    duration: "3oy-6oy",
    sertificat: "Mavjud",
    courseIcon: "fa-solid fa-palette",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
];

export default data;
