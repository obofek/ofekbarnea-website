/* ===========================
   EVENTS DATA
   ---------------------------
   כדי להוסיף אירוע חדש: העתק בלוק אירוע והכנס אותו לרשימה.
   'id'        — מזהה ייחודי באנגלית (מופיע בכתובת העמוד, בלי רווחים)
   'date'      — תאריך בפורמט שנה-חודש-יום (לפיו האירועים מסתדרים כרונולוגית)
   'ticketUrl' — קישור לרכישת כרטיסים באתר חיצוני
   שדה שנשאר ריק ('') פשוט לא יוצג בעמוד.
   התמונות כרגע הן תמונת ה"נשק הכחול" כמציין מקום (placeholder).
=========================== */
const EVENT_IMG_PLACEHOLDER = 'images/ChatGPT Image Feb 25, 2026, 07_18_11 PM.png';

/* התוכן הקבוע של "מה בסדנה?" ו"תנאי השתתפות" (מתוך הדוגמה של שוהם) */
const WORKSHOP_WHAT = [
  'הבנה פרקטית של החוק והמשחק המשפטי בהגנה עצמית ושימוש בנשק',
  'כללי אצבע להתנהלות נכונה ב״זירה הטרייה״',
  'שלב החקירה: מסירת עדויות וטיפים להתנהלות מול גורמי אכיפה',
  'שלב הסימולציות- תרגול תרחישים וניתוח סיטואציות מהשטח',
  'פק״לוני כלים מעשיים להתנהלות נכונה תחת לחץ ואי וודאות'
];
const WORKSHOP_TERMS = [
  'הכניסה למתחם תתאפשר לאחר רכישת כרטיס ובהצגת רישיון נשק בתוקף בלבד. אזרחים שאינם חמושים יוכלו להשתתף רק לאחר קבלת אישור בכתב מראש, טרם רכישת הכרטיס.',
  'הסדנה מיועדת לבגירים (18+) בלבד.',
  'הסדנה אינה מהווה ייעוץ משפטי, ואינה תחליף לייעוץ פרטני.',
  'ההשתתפות מותנית בהתנהלות אחראית, מכבדת ושמירה על כללי החוק והסדר.',
  'המארגנים שומרים לעצמם שיקול דעת מלא למנוע או להפסיק השתתפות, לרבות במהלך הסדנה, במקרה של חוסר התאמה או חשש לפגיעה בבטיחות.',
  'מעבר לזכויות הביטול הקבועות בדין, הכרטיס אינו ניתן לביטול או להחזר כספי. אי־הגעה לסדנה אינה מזכה בהחזר.'
];

const events = [
  {
    id: 'shoham-2026-10-15',
    title: 'סדנת "חמוש בארצנו" – שוהם',
    subtitle: 'מה מותר, מה אסור ואיך מקבלים החלטה בזמן אמת כאזרח חמוש',
    date: '2026-10-15',
    dateText: '',                 // ריק = מחושב אוטומטית מהתאריך (יום בשבוע)
    time: '17:30',                // שעת התחלה (מוצגת בכרטיס)
    scheduleNote: '17:00 התכנסות · 17:30 מתחילים', // מוצג בעמוד האירוע
    duration: '3–4 שעות',
    location: 'מרכז METRO, שוהם',
    price: '',                    // ללא מחיר מוצג
    image: EVENT_IMG_PLACEHOLDER, // תמונה ראשית (האקדח הכחול)
    gallery: ['images/ofek-lecture.jpeg'], // "השאר" — תמונות מהסדנה שמופיעות בעמוד האירוע
    ticketUrl: 'https://pay.grow.link/OTY5NjI~d86c5c8e02ea3e8a8b9c6f8581517590-MzkwMTEyNA',
    soldOut: true,
    description: 'בעצם לומדים את הכללים, איך לשחק את המשחק ואיך ליישם את הדברים בזמן אמת. הכל כדי שבבוא העת, הפחד מהחוק ואי הוודאות לא יהיו פקטורים במשוואה.',
    whatIncluded: WORKSHOP_WHAT,
    terms: WORKSHOP_TERMS
  },

  {
    id: 'haifa-2026-10-23',
    title: 'סדנת "חמוש בארצנו" – חיפה',
    subtitle: 'מה מותר, מה אסור ואיך מקבלים החלטה בזמן אמת כאזרח חמוש',
    date: '2026-10-23',
    dateText: '',
    time: '09:00',
    scheduleNote: '08:30 התכנסות · 09:00 מתחילים',
    duration: '3–4 שעות',
    location: 'בית אבא חושי, חיפה',
    price: '',
    image: EVENT_IMG_PLACEHOLDER, // תמונה ראשית (האקדח הכחול)
    gallery: ['images/ofek-lecture.jpeg'], // "השאר" — תמונות מהסדנה שמופיעות בעמוד האירוע
    ticketUrl: 'https://pay.grow.link/OTY5NjI~c63a7ab3de8125bd0708be0c5233d82b-Mzk1OTg0Nw',
    description: 'בעצם לומדים את הכללים, איך לשחק את המשחק ואיך ליישם את הדברים בזמן אמת. הכל כדי שבבוא העת, הפחד מהחוק ואי הוודאות לא יהיו פקטורים במשוואה.',
    whatIncluded: WORKSHOP_WHAT,
    terms: WORKSHOP_TERMS
  },

  {
    id: 'shlita-baerua-2026-10-19',
    title: 'שליטה באירוע',
    subtitle: 'מודעות, תגובה והחלטות ירי בזמן אמת',
    date: '2026-10-19',
    dateText: '',
    time: '18:30',
    scheduleNote: '18:00 התכנסות · 18:30 תחילת ההדרכה',
    duration: 'כשעתיים וחצי',
    location: 'מרכז METRO, שוהם',
    price: '',
    image: 'images/dave-stern-workshop.png', // תמונה ראשית — דייב שטרן
    gallery: [EVENT_IMG_PLACEHOLDER],         // האקדח הכחול בגלריה
    ticketUrl: 'https://pay.grow.link/OTY5NjI~c0339fdf4ba21c26054a667c7fea970d-NDAwNDM3NQ',
    soldOut: true,
    description: [
      'הדרכה משולבת לאזרחים חמושים בהנחיית דייב שטרן ואופק ברנע.',
      'במטווח אתם יודעים איפה המטרה, מתי מתחיל התרגיל ומה מצופה מכם. באירוע אמת התמונה אחרת: המציאות אינה ברורה, הגוף נכנס לסטרס, אנשים נמצאים סביבכם, ובתוך שניות אתם נדרשים לזהות את האיום, לבחור כיצד להגיב ולקבל החלטה טקטית ומשפטית שיכולה לקבוע כיצד האירוע יסתיים.',
      '״שליטה באירוע״ נועדה לגשר על הפער שבין מיומנות הקליעה במטווח לבין היכולת לתפקד, להחליט ולהוביל באירוע אמת.',
      'במשך כשעתיים וחצי נחבר בין מוכנות מנטלית, מודעות סביבתית, תפקוד תחת לחץ, זיהוי איום, התאמת התגובה למצב והבנת הגבולות המשפטיים של איום ושימוש בנשק.'
    ],
    sections: [
      {
        title: 'חלק 1 · דייב שטרן — תפקוד טקטי ומנטלי',
        body: [
          'דייב שטרן, יוצא יחידת עילית של המארינס האמריקאי, ששירת במגוון תפקידים ביטחוניים ושרד את הפיגוע בחווארה כשהוא יורה במחבל מבעד לשמשת הרכב, ינתח את האירוע שחווה ויעביר כלים פרקטיים להתמודדות עם סטרס, יציאה מקיפאון וקבלת החלטות תחת לחץ.',
          'נעסוק במודל הצבעים, מעגל ה־OODA, מוכנות מנטלית בשגרה, סוגי הכוונות, ראייה ופגיעה תחת לחץ, התאמת הטכניקה לרמת האיום והפעלת המשפחה והסביבה במהלך האירוע.'
        ]
      },
      {
        title: 'חלק 2 · עו״ד אופק ברנע — קבלת החלטה משפטית',
        body: 'עו״ד אופק ברנע, מייסד פרויקט ״חמוש בארצנו״, יעשה סדר בגבולות המשפטיים של האזרח החמוש:',
        items: [
          'מתי מותר להיערך לקראת איום?',
          'מתי ניתן לשלוף או לאיים בנשק?',
          'היכן מתחיל השטח המשפטי האפור והמסוכן?',
          'כיצד מבחינים בזמן אמת בין עובדה, הנחה ותחושת בטן?',
          'אילו פעולות פשוטות יכולות לסייע בקבלת החלטה ובהמשך גם בתיעוד האירוע?'
        ]
      },
      {
        title: 'חלק 3 · סימולציות',
        body: 'בחלק המעשי מתנדבים מהקהל יתמודדו עם סימולציות פיזיות המדמות את חוסר הוודאות של אירוע אמת. הסימולציות ייעצרו בנקודות ההחלטה המרכזיות, וכל פעולה תנותח ממספר זוויות:',
        items: ['טקטי', 'מנטלי', 'משפטי'],
        note: 'התרגול יבוצע באמצעות אקדחי אימון מפלסטיק בלבד. לא ייעשה שימוש בנשק אמיתי או בתחמושת במהלך הסימולציות.'
      },
      {
        title: 'למי ההדרכה מיועדת?',
        items: [
          'אזרחים בעלי רישיון נשק בתוקף.',
          'אנשי כוחות הביטחון והמילואים.',
          'אזרחים חמושים שרוצים לשפר את היכולת לזהות איום, לקבל החלטה ולתפקד תחת לחץ.',
          'בני 18 ומעלה בלבד.'
        ],
        note: 'אין צורך בניסיון קודם מעבר להכשרה הנדרשת כדין לצורך החזקת הנשק. הרכישה אישית ומבטיחה מקום למשתתף אחד בלבד.'
      },
      {
        title: 'מידע חשוב לפני ההרשמה',
        items: [
          'הכניסה מותנית בהרשמה מראש, בהצגת תעודה מזהה ובהצגת רישיון נשק תקף.',
          'ההשתתפות בחלק המעשי היא מרצון וכפופה להנחיות הצוות.',
          'לפני תחילת הסימולציות יינתנו הנחיות מסודרות בנוגע לאבטחת כלי הנשק האישיים. אין להשתתף בסימולציה כשנושאים נשק אמיתי, תחמושת או אמצעי מסוכן אחר.',
          'יש להישמע להוראות הבטיחות ולהנחיות המדריכים לאורך כל האירוע.',
          'למארגנים שמורה הזכות למנוע השתתפות או להפסיק את השתתפותו של אדם הפועל בניגוד להוראות הבטיחות, מפריע למהלך ההדרכה או מסכן את עצמו או אחרים.',
          'משתתף הסובל ממגבלה רפואית או גופנית שעשויה להשפיע על השתתפותו בתרגול מתבקש לעדכן את הצוות מראש.',
          'תוכן ההדרכה עשוי להשתנות באופן סביר בהתאם ללוחות הזמנים, למספר המשתתפים ולשיקול הדעת המקצועי של המדריכים.'
        ]
      },
      {
        title: 'הבהרה משפטית ומקצועית',
        body: [
          'ההדרכה מעניקה מידע כללי וכלים מקצועיים לצורכי לימוד והעשרה בלבד. התוכן אינו מהווה ייעוץ משפטי פרטני, חוות דעת משפטית, הכשרת ירי, אימון במטווח או תחליף להכשרה הנדרשת על פי דין.',
          'כל אירוע נבחן בהתאם לנסיבותיו. אין להסתמך על תוכן ההדרכה כעל אישור מראש לבצע פעולה מסוימת או להשתמש בנשק במקרה קונקרטי.'
        ]
      },
      {
        title: 'צילום במהלך האירוע',
        body: [
          'האירוע עשוי להיות מצולם לצורכי תיעוד, פרסום וקידום פעילות ״חמוש בארצנו״ ודייב שטרן.',
          'משתתף שאינו מעוניין להופיע בצילום מתבקש לעדכן את הצוות לפני תחילת האירוע. צילום עצמאי של משתתפים אחרים או של הסימולציות אסור ללא אישור מראש.'
        ]
      },
      {
        title: 'ביטולים והעברת כרטיס',
        body: [
          'בקשות ביטול יטופלו בהתאם להוראות חוק הגנת הצרכן והדין החל. במקרים שבהם לא קיימת זכות ביטול מכוח הדין, לא יינתן החזר כספי על ביטול שיתקבל במהלך שבעת הימים שאינם ימי מנוחה שלפני האירוע או במקרה של אי־הגעה.',
          'ניתן לבקש להעביר את הכרטיס למשתתף אחר העומד בתנאי ההשתתפות, בכפוף למסירת פרטיו ולקבלת אישור מראש מהמארגנים.',
          'אם האירוע יבוטל על ידי המארגנים, התשלום יוחזר לרוכש. במקרה של דחיית האירוע, הכרטיס יהיה תקף למועד החדש, וזכויות הביטול יישמרו בהתאם לדין.'
        ]
      },
      {
        title: 'שמירת מידע',
        body: [
          'הפרטים שיימסרו בהרשמה ישמשו לצורך השלמת העסקה, ניהול ההרשמה, יצירת קשר בנוגע לאירוע, משלוח עדכונים תפעוליים ומילוי החובות החלות על המארגנים על פי דין.',
          'מסירת הפרטים מהווה תנאי להרשמה. משלוח תוכן שיווקי ייעשה רק בהתאם להסכמה שניתנה כדין.'
        ]
      },
      {
        title: 'לשאלות והרשמה',
        body: 'לשאלות: WhatsApp 053-5824942. מספר המקומות מוגבל — לאחר מילוי הקבוצה ההרשמה תיסגר.'
      }
    ]
  }
];

/* ===========================
   HTML ESCAPE (XSS PREVENTION)
=========================== */
function escapeHtml(text) {
  if (text === undefined || text === null) return '';
  var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, function (m) { return map[m]; });
}

/* ===========================
   DATE HELPERS
=========================== */
var HE_MONTHS_SHORT = ['ינו׳','פבר׳','מרץ','אפר׳','מאי','יוני','יולי','אוג׳','ספט׳','אוק׳','נוב׳','דצמ׳'];

function dateChip(dateStr) {
  var d = new Date(dateStr);
  return {
    day: d.getDate(),
    mon: HE_MONTHS_SHORT[d.getMonth()],
    year: d.getFullYear()
  };
}

var HE_DAYS = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];

function autoDateText(dateStr) {
  var d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  var yy = String(d.getFullYear()).slice(-2);
  return 'יום ' + HE_DAYS[d.getDay()] + ', ' + d.getDate() + '.' + (d.getMonth() + 1) + '.' + yy;
}

function whenText(ev) {
  var dt = ev.dateText || autoDateText(ev.date);
  return [dt, ev.time].filter(Boolean).join(' | ');
}

/* ===========================
   CARD MARKUP (shared)
=========================== */
function cardMetaSpan(icon, value) {
  if (!value) return '';
  return '<span><i class="' + icon + '"></i> ' + escapeHtml(value) + '</span>';
}

function eventCardHtml(ev) {
  var c = dateChip(ev.date);
  var img = encodeURI(ev.image);
  var when = whenText(ev);
  return '' +
    '<a class="ev-card" href="event.html?id=' + encodeURIComponent(ev.id) + '">' +
      (ev.soldOut ? '<span class="ev-sold-badge"><i class="fa-solid fa-ban"></i> אזלו הכרטיסים</span>' : '') +
      '<div class="ev-card-body">' +
        '<div class="ev-date-chip">' +
          '<span class="ev-date-day">' + c.day + '</span>' +
          '<span class="ev-date-mon">' + c.mon + '</span>' +
          '<span class="ev-date-year">' + c.year + '</span>' +
        '</div>' +
        '<div class="ev-card-content">' +
          '<h3 class="ev-card-title">' + escapeHtml(ev.title) + '</h3>' +
          (ev.subtitle ? '<p class="ev-card-subtitle">' + escapeHtml(ev.subtitle) + '</p>' : '') +
          '<div class="ev-card-meta">' +
            cardMetaSpan('fa-regular fa-calendar', when) +
            cardMetaSpan('fa-solid fa-location-dot', ev.location) +
          '</div>' +
          (ev.description ? '<p class="ev-card-desc">' + escapeHtml(ev.description) + '</p>' : '') +
          '<span class="ev-card-cta">לפרטים והרשמה <i class="fa-solid fa-arrow-left"></i></span>' +
        '</div>' +
      '</div>' +
      '<div class="ev-card-media">' +
        '<img src="' + img + '" alt="' + escapeHtml(ev.title) + '" loading="lazy" />' +
      '</div>' +
    '</a>';
}

/* ===========================
   LISTING PAGE
=========================== */
var currentSort = 'soonest';

function renderEventsList(sort) {
  var container = document.getElementById('events-list-cards');
  if (!container) return;

  var sorted = events.slice().sort(function (a, b) {
    if (sort === 'latest') return new Date(b.date) - new Date(a.date);
    return new Date(a.date) - new Date(b.date);
  });

  var empty = document.getElementById('events-empty');
  if (sorted.length === 0) {
    container.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  container.innerHTML = sorted.map(eventCardHtml).join('');
}

function setSort(sort) {
  currentSort = sort;
  document.querySelectorAll('.pc-sort-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.sort === sort);
  });
  renderEventsList(sort);
}

/* ===========================
   DETAIL PAGE
=========================== */
function getParam(name) {
  var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
}

function listHtml(items, cls) {
  return '<ul class="ev-list ' + (cls || '') + '">' +
    items.map(function (it) { return '<li>' + escapeHtml(it) + '</li>'; }).join('') +
    '</ul>';
}

function detailMetaRow(icon, value, label) {
  if (!value) return '';
  return '<div><i class="' + icon + '"></i> <span>' +
    (label ? '<b>' + label + '</b>' : '') + escapeHtml(value) + '</span></div>';
}

function evSwapImg(el) {
  var main = document.querySelector('.ev-detail-main-img');
  if (main) main.src = el.src;
  document.querySelectorAll('.ev-thumb').forEach(function (t) { t.classList.remove('active'); });
  el.classList.add('active');
}

function renderEventDetail() {
  var host = document.getElementById('event-detail');
  if (!host) return;

  var id = getParam('id');
  var ev = null;
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === id) { ev = events[i]; break; }
  }

  if (!ev) {
    host.innerHTML =
      '<div class="ev-notfound">' +
        '<h1>האירוע לא נמצא</h1>' +
        '<p><a href="events.html">חזרה לכל האירועים הקרובים</a></p>' +
      '</div>';
    var sHost0 = document.getElementById('event-suggestions');
    if (sHost0) sHost0.closest('.ev-suggest-section').style.display = 'none';
    return;
  }

  document.title = ev.title + ' | חמוש בארצנו';

  var img = encodeURI(ev.image);
  var ticket = ev.ticketUrl ? escapeHtml(ev.ticketUrl) : '#';
  var dateOnly = ev.dateText || autoDateText(ev.date);
  var timeLine = ev.scheduleNote || ev.time;

  var metaHtml =
    detailMetaRow('fa-regular fa-calendar', dateOnly, '') +
    detailMetaRow('fa-regular fa-clock', timeLine, '') +
    detailMetaRow('fa-solid fa-location-dot', ev.location, '') +
    detailMetaRow('fa-solid fa-hourglass-half', ev.duration, 'משך: ') +
    detailMetaRow('fa-solid fa-ticket', ev.price, 'מחיר לכרטיס: ');

  var hasWhat = ev.whatIncluded && ev.whatIncluded.length;
  var hasTerms = ev.terms && ev.terms.length;
  var whatTitle = ev.whatTitle || 'עם מה יוצאים מהסדנה?';

  var badgeHtml = ev.soldOut
    ? '<span class="ev-detail-badge sold">אזלו הכרטיסים</span>'
    : '<span class="ev-detail-badge">אירוע קרוב</span>';

  var allImages = [ev.image].concat(ev.gallery || []);
  var galleryHtml = '';
  if (allImages.length > 1) {
    galleryHtml = '<div class="ev-gallery">' + allImages.map(function (src, i) {
      return '<img class="ev-thumb' + (i === 0 ? ' active' : '') + '" src="' +
        encodeURI(src) + '" alt="' + escapeHtml(ev.title) + '" loading="lazy" onclick="evSwapImg(this)" />';
    }).join('') + '</div>';
  }

  var hasTicket = ev.ticketUrl && ev.ticketUrl !== '#';
  var ctaHtml;
  if (ev.soldOut) {
    ctaHtml = '<span class="ev-buy-btn ev-sold-btn"><i class="fa-solid fa-ban"></i> אזלו הכרטיסים</span>';
  } else if (!hasTicket) {
    ctaHtml = '<span class="ev-buy-btn ev-soon-btn"><i class="fa-regular fa-clock"></i> ההרשמה תיפתח בקרוב</span>';
  } else {
    ctaHtml = '<a href="' + ticket + '" class="ev-buy-btn" target="_blank" rel="noopener noreferrer">' +
        '<i class="fa-solid fa-ticket"></i> לרכישת כרטיסים' +
      '</a>' +
      (ev.price ? '<span class="ev-buy-price">מחיר לכרטיס: ' + escapeHtml(ev.price) + '</span>' : '');
  }

  var descHtml = '';
  if (ev.description) {
    var dparas = Array.isArray(ev.description) ? ev.description : [ev.description];
    descHtml = dparas.map(function (p, i) {
      return '<p class="' + (i === 0 ? 'ev-detail-lead' : 'ev-section-body') + '">' + escapeHtml(p) + '</p>';
    }).join('');
  }

  var sectionsHtml = (ev.sections || []).map(function (s) {
    var h = '';
    if (s.title) h += '<h2 class="ev-section-title">' + escapeHtml(s.title) + '</h2>';
    if (s.body) {
      var bparas = Array.isArray(s.body) ? s.body : [s.body];
      h += bparas.map(function (p) { return '<p class="ev-section-body">' + escapeHtml(p) + '</p>'; }).join('');
    }
    if (s.items && s.items.length) h += listHtml(s.items);
    if (s.note) h += '<p class="ev-section-note">' + escapeHtml(s.note) + '</p>';
    return h;
  }).join('');

  host.innerHTML = '' +
    '<a href="events.html" class="ev-back"><i class="fa-solid fa-arrow-right"></i> חזרה לכל האירועים</a>' +
    '<div class="ev-detail">' +
      '<div class="ev-detail-text">' +
        badgeHtml +
        '<h1 class="ev-detail-title">' + escapeHtml(ev.title) + '</h1>' +
        (ev.subtitle ? '<p class="ev-detail-subtitle">' + escapeHtml(ev.subtitle) + '</p>' : '') +
        (metaHtml ? '<div class="ev-detail-meta">' + metaHtml + '</div>' : '') +
        descHtml +
        (hasWhat ? '<h2 class="ev-section-title">' + escapeHtml(whatTitle) + '</h2>' + listHtml(ev.whatIncluded) : '') +
        sectionsHtml +
        (hasTerms ? '<h2 class="ev-section-title">תנאי השתתפות</h2>' + listHtml(ev.terms, 'ev-list-terms') : '') +
        ctaHtml +
      '</div>' +
      '<div class="ev-detail-media">' +
        '<img class="ev-detail-main-img" src="' + img + '" alt="' + escapeHtml(ev.title) + '" />' +
        galleryHtml +
      '</div>' +
    '</div>';

  // suggestions: other upcoming events
  var sHost = document.getElementById('event-suggestions');
  if (sHost) {
    var others = events.filter(function (e) { return e.id !== ev.id; })
      .sort(function (a, b) { return new Date(a.date) - new Date(b.date); })
      .slice(0, 3);
    if (others.length === 0) {
      sHost.closest('.ev-suggest-section').style.display = 'none';
    } else {
      sHost.innerHTML = others.map(eventCardHtml).join('');
    }
  }
}

/* ===========================
   INIT
=========================== */
document.addEventListener('DOMContentLoaded', function () {
  renderEventsList('soonest');
  document.querySelectorAll('.pc-sort-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setSort(btn.dataset.sort); });
  });
  renderEventDetail();
});
