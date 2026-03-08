/* ===========================
   PODCAST EPISODES DATA
=========================== */
const episodes = [
  {
    ep: 26,
    id: 'oIPPK1AcuTY',
    title: 'איך לקנות אקדח נכון? | צרכנות נכונה עם קובי ליאני',
    date: '2026-02-19',
    desc: 'קיבלנו את האישור המותנה והגיע הזמן להתחדש באקדח חדש. איך נדע איזה אקדח מתאים לנו? איך נדע באיזה בית מסחר נקבל את העסקה המשתלמת ביותר?'
  },
  {
    ep: 25,
    id: 'dii-KYvsxlo',
    title: 'החמושות של ישראל | אזרחים חמושים לביטחון של כולנו עם מורין אמיתי',
    date: '2026-02-05',
    desc: 'בישראל של היום, מרגיש שרישיון לנשק אישי הוא פריבילגיה. האם זאת הגישה הנכונה בהתאם למציאות שסביבנו? האם האזרח החמוש הוא חלק מתכנית הביטחון הלאומי?'
  },
  {
    ep: 24,
    id: 'FxqAN6kKPlQ',
    title: 'הרעלת עופרת בירי - הסכנה שאף אחד לא מדבר עליה | עם אבי מור',
    date: '2026-01-22',
    desc: 'רובנו יודעים שצריך לשטוף ידיים אחרי ירי במטווח. מה שרובנו לא יודעים זה כמה אנשים בעולם סובלים, וחלקם אף נפטרו כתוצאה מהרעלת עופרת.'
  },
  {
    ep: 23,
    id: 'Lm6_WTzuuX4',
    title: 'ערכות הסבה - יתרון או סרבול מיותר? | עם אבי מור',
    date: '2026-01-22',
    desc: 'לאזרח בישראל אין אפשרות להחזיק בנשק ארוך, אבל זה לא אומר שהאקדח נשאר אותו דבר. בשנים האחרונות נכנס לשיח עולם שלם של ערכות הסבה.'
  },
  {
    ep: 22,
    id: 'jTCStOyuYq8',
    title: 'דקירות ואגרופנים | מתי אפשר להשתמש בסכין להגנה עצמית?',
    date: '2026-01-08',
    desc: 'סכין, דוקרן, אגרופן, אולר... חפצים שכל אחד מכיר, חלקינו נושאים אותם בשגרה, אבל רובנו לא מבינים את המשמעות המשפטית שלהם.'
  },
  {
    ep: 21,
    id: 'sxzQcMhUZTM',
    title: 'להביא את ה״אס״ בחקירה | איך להביא לשוטר תיק מוכן לסגירה?',
    date: '2025-12-25',
    desc: 'אם אני מהסס להשתמש בנשק שלי כי אני מפחד מהחקירה שתגיע אח״כ, יש לי חור במוכנות. בפרק הזה נצלול יותר עמוק לתוך השיקולים לסגירת תיק.'
  },
  {
    ep: 20,
    id: 'wYDLoR8_aWI',
    title: 'משה השכן הרשע | איך מתמודדים עם השכן הבעייתי?',
    date: '2025-12-11',
    desc: 'כולנו חווינו בצורה כזאתי או אחרת את השכן הבעייתי. לאט לאט, הכעס נבנה וכשהפיצוץ יגיע זה לרוב יהיה על שטויות. איך כל כך הרבה חמושים מאבדים את הרישיון?'
  },
  {
    ep: 19,
    id: 'j6TfNVvkyB4',
    title: 'איום עם נשק וירי באוויר | מתי החוק מאפשר לי לאיים עם נשק?',
    date: '2025-11-27',
    desc: 'אנחנו כל הזמן מדברים על מצבים בהם מותר לירות בתוקף. אבל מה החוק אומר בנוגע לאיום עם נשק? בנוגע לירי אזהרה באוויר?'
  },
  {
    ep: 18,
    id: '_C6nnRqDlMU',
    title: 'איך להציל את הילד מתקיפת כלב | מנפצים מיתוסים עם מידן כחלון',
    date: '2025-11-13',
    desc: 'הפרק של היום יתמקד בעולם הכלבים בהקשר של הגנה עצמית. כל נושא הכלבים עלה בשאלות ובתגובות לא מעט.'
  },
  {
    ep: 17,
    id: '3q9w6wRJgaU',
    title: 'אזרחים עם פנסים | איך פנס קטן יכול להפוך ליתרון גדול בהגנה על הבית',
    date: '2025-10-29',
    desc: 'כמה פנס לנשק באמת רלוונטי לאזרח החמוש בישראל? בפרק הזה אני מארח את לידור בר חיים, מדריך ירי ולחימה.'
  },
  {
    ep: 16,
    id: '0GJVID0uvGA',
    title: 'נשק אזרחי בצבא | דברים שכל מילואימניק צריך לדעת עם קטי אוסטרין',
    date: '2025-10-16',
    desc: 'כבר התרגלנו לראות נרתיק עם אקדח ליד נשק ארוך. אז איך עדיין אנחנו רואים מצבים שאנשי קבע ומילואים נדפקים מהמערכת?'
  },
  {
    ep: 15,
    id: '_f7JwrMJlSA',
    title: 'אקדח הוא לא קסם, ולא תמיד התשובה | קרב מגע לאזרח החמוש עם גבריאל נתנוב',
    date: '2025-08-28',
    desc: 'אזרח חמוש במרחב האזרחי חייב להבין מתי הוא יכול להשתמש בתגובות הלא קטלניות כדי להגן על עצמו או על הרכוש שלו.'
  },
  {
    ep: 14,
    id: 'x0Yw6lDWIdA',
    title: 'זעם בכביש ומכות עם כיסאות באילת',
    date: '2025-08-14',
    desc: 'מבחן הכניסה למצב, זה בדיוק המקום שבו רוב האנשים נופלים כשהם בטוחים שזו הייתה הגנה עצמית.'
  },
  {
    ep: 13,
    id: 'hUou6E7-ufc',
    title: 'תרסיס פלפל לתוך העיניים, האם זה שווה את זה?',
    date: '2025-07-30',
    desc: 'יחסית לאקדח, שימוש בתרסיס פלפל נשמע כמו משחק ילדים. אבל, ויש אבל גדול, זה יכול להיות הכלי הקטן שיגרום לנו להסתבך בגדול.'
  },
  {
    ep: 12,
    id: 'QElNM0bu3PQ',
    title: 'חטיפות נשק, ורוצחי כלבים',
    date: '2025-07-16',
    desc: 'מישהו קופץ עליי ומנסה לקחת את הנשק. הכלב שלי מותקף למוות. ברחוב - אזרחים צועקים. מה אני עושה? מותר לי לירות?'
  },
  {
    ep: 11,
    id: 'ZhW918zAqUo',
    title: 'שי דרומי, ירי בפורצים וחוק שמבלבל את כולנו',
    date: '2025-07-02',
    desc: 'לילה שקט. חווה מבודדת. פורצים נכנסו. שי דרומי ירה והרג. מה אומר החוק? ומה השתנה מאז?'
  },
  {
    ep: 10,
    id: 'GbU_UUXvvwE',
    title: 'אבנים, תקיפות כלבים ומה שביניהם',
    date: '2025-06-19',
    desc: 'פתאום, באמצע הרחוב, כלב גדול תוקף באכזריות אישה. מה עושים? מותר לי לירות? ומה עם רכב שדוהר לעברי?'
  },
  {
    ep: 9,
    id: 'IdJQmSxmy6M',
    title: 'איום בנשק?!? כולה סידרתי את החגורה',
    date: '2025-06-05',
    desc: 'אתם יוצאים מהבית, ופתאום - שוב היא שם. השכנה. חוסמת את החניה בכוונה, מתגרה, מחפשת ריב. מה עושים?'
  },
  {
    ep: 8,
    id: 'ezSDKDWSp4o',
    title: 'הסיפור של ניר סומך',
    date: '2025-05-22',
    desc: 'ניר סומך ירה. התקשר למשטרה, דיווח בדיוק מה קרה - וחשב שזה נגמר. אבל זו הייתה רק ההתחלה.'
  },
  {
    ep: 7,
    id: 'XewLDwaXhA8',
    title: 'הסיפור של אריה שיף',
    date: '2025-05-02',
    desc: 'אמצע הלילה, ״בום״, אתה שומע רעש, לוקח את האקדח ויוצא החוצה לבדוק מה קרה, ואז קולט שחודרים לרכב שלך.'
  },
  {
    ep: 6,
    id: 'rc_fUOUYPsU',
    title: 'איך לא ליפול בחקירה פלילית (גם כשאתה הגיבור בסיפור)',
    date: '2025-04-17',
    desc: 'אתה בתחנת המשטרה. הדופק ירד, נראה שהשיא מאחוריך. אבל החקירה רק מתחילה.'
  },
  {
    ep: 5,
    id: 'fzVvCHvpkoY',
    title: 'מה עושים אחרי אירוע ירי? הדברים שאסור לטעות בהם',
    date: '2025-04-02',
    desc: 'ירית. התקשרת למשטרה. ולפני שהספקת לומר הגנה עצמית - מצאת את עצמך בתחנת משטרה, נחקר.'
  },
  {
    ep: 4,
    id: '3_g5QvVZ_Q0',
    title: 'טעות במצב דברים - מה קורה כשיריתי והתברר שטעיתי?',
    date: '2025-03-13',
    desc: 'מה קורה כשאתה בטוח שאתה מציל חיים - ואז מגלה שטעית? כשנדמה לך שמדובר בפיגוע, אבל בעצם לא.'
  },
  {
    ep: 3,
    id: '3FQmBn6_Sqo',
    title: 'שומרים על הבית - מתי מותר לירות בפורץ?',
    date: '2025-02-27',
    desc: 'אמצע הלילה, שומע רעש מהסלון, מתעורר ומבין שיש פורץ בבית שלי!?! מתי אוכל לירות בו?'
  },
  {
    ep: 2,
    id: '4rTfFMM9_2I',
    title: 'מכת המציאות - למה כל חמוש חייב להבין את ההבדל בין העובדתי למשפטי',
    date: '2025-02-13',
    desc: 'הירי שלך היה מוצדק, אבל יכול להיות שלא ישפטו אותך על מה שקרה באמת. האירוע הסתיים אבל ההליך המשפטי רק מתחיל.'
  },
  {
    ep: 1,
    id: 'Eh5598d2eiY',
    title: 'מתי אני יורה? הגנה עצמית או כתב אישום?',
    date: '2025-01-30',
    desc: 'אז הוצאנו רישיון לאקדח, עברנו את ההכשרה במטווח ויצאנו לחופשי. אבל מה בתכל׳ס? מתי מותר ומתי אסור?'
  }
];

/* ===========================
   PLATFORM LINKS
=========================== */
const SPOTIFY_SHOW = 'https://open.spotify.com/show/7q9zEQTl915sBsNd84j75X';
const APPLE_SHOW = 'https://podcasts.apple.com/il/podcast/%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%97%D7%9E%D7%95%D7%A9-%D7%91%D7%90%D7%A8%D7%A6%D7%A0%D7%95/id1793563265';

/* ===========================
   AUTO-UPDATE CONFIG
=========================== */
const PLAYLIST_ID = 'PLqxdzFOfiqajC1ga6WbpKCWWV9lNp_h2v';
const RSS2JSON_URL = 'https://api.rss2json.com/v1/api.json?rss_url=' +
  encodeURIComponent('https://www.youtube.com/feeds/videos.xml?playlist_id=' + PLAYLIST_ID);
const FETCH_TIMEOUT_MS = 5000;

/* ===========================
   HTML ESCAPE (XSS PREVENTION)
=========================== */
function escapeHtml(text) {
  if (!text) return '';
  var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, function(m) { return map[m]; });
}

/* ===========================
   RENDER EPISODES
=========================== */
let currentSort = 'newest';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

function renderEpisodes(sort) {
  var container = document.getElementById('episodes-list');
  if (!container) return;

  var sorted = episodes.slice().sort(function(a, b) {
    if (sort === 'newest') return new Date(b.date) - new Date(a.date);
    return new Date(a.date) - new Date(b.date);
  });

  container.innerHTML = sorted.map(function(ep) {
    var safeTitle = escapeHtml(ep.title);
    var safeDesc = escapeHtml(ep.desc);
    var safeId = encodeURIComponent(ep.id);
    return '<div class="pc-episode' + (ep.ep >= 2 && ep.ep <= 8 ? ' pc-letterbox' : '') + '">' +
      (ep.isNew ? '<span class="pc-new-badge">חדש</span>' : '') +
      '<div class="pc-episode-info">' +
        '<div class="pc-episode-num">' + ep.ep + '</div>' +
        '<div class="pc-episode-content">' +
          '<h3 class="pc-episode-title">' + safeTitle + '</h3>' +
          '<p class="pc-episode-date">' + formatDate(ep.date) + '</p>' +
          '<p class="pc-episode-desc">' + safeDesc + '</p>' +
          '<div class="pc-episode-links">' +
            '<a href="https://www.youtube.com/watch?v=' + safeId + '" target="_blank" rel="noopener noreferrer" class="pc-ep-link pc-ep-youtube">' +
              '<i class="fa-brands fa-youtube"></i> <span>YouTube</span>' +
            '</a>' +
            '<a href="' + SPOTIFY_SHOW + '" target="_blank" rel="noopener noreferrer" class="pc-ep-link pc-ep-spotify">' +
              '<i class="fa-brands fa-spotify"></i> <span>Spotify</span>' +
            '</a>' +
            '<a href="' + APPLE_SHOW + '" target="_blank" rel="noopener noreferrer" class="pc-ep-link pc-ep-apple">' +
              '<i class="fa-brands fa-apple"></i> <span>Apple</span>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<a href="https://www.youtube.com/watch?v=' + safeId + '" target="_blank" rel="noopener noreferrer" class="pc-episode-thumb">' +
        '<img src="https://img.youtube.com/vi/' + safeId + '/hqdefault.jpg" alt="' + safeTitle + '" loading="lazy" />' +
        '<div class="pc-thumb-play"><i class="fa-solid fa-play"></i></div>' +
      '</a>' +
    '</div>';
  }).join('');
}

function setSort(sort) {
  currentSort = sort;
  document.querySelectorAll('.pc-sort-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.sort === sort);
  });
  renderEpisodes(sort);
}

/* ===========================
   AUTO-UPDATE HELPERS
=========================== */

function extractVideoId(item) {
  if (item.link) {
    var vIndex = item.link.indexOf('v=');
    if (vIndex !== -1) {
      var raw = item.link.substring(vIndex + 2);
      var ampIndex = raw.indexOf('&');
      return ampIndex !== -1 ? raw.substring(0, ampIndex) : raw;
    }
  }
  if (item.guid && item.guid.indexOf(':') !== -1) {
    var parts = item.guid.split(':');
    return parts[parts.length - 1];
  }
  return null;
}

function normalizeDate(pubDate) {
  var d = new Date(pubDate);
  if (isNaN(d.getTime())) return null;
  var yyyy = d.getFullYear();
  var mm = String(d.getMonth() + 1);
  if (mm.length < 2) mm = '0' + mm;
  var dd = String(d.getDate());
  if (dd.length < 2) dd = '0' + dd;
  return yyyy + '-' + mm + '-' + dd;
}

function cleanDescription(html) {
  if (!html) return '';
  var tmp = document.createElement('div');
  tmp.innerHTML = html;
  var text = tmp.textContent || tmp.innerText || '';
  text = text.trim();
  if (text.length > 200) text = text.substring(0, 197) + '...';
  return text;
}

/* ===========================
   FETCH & MERGE NEW EPISODES
=========================== */

function fetchAndMergeNewEpisodes() {
  var controller = null;
  var timeoutId = null;

  try {
    controller = new AbortController();
    timeoutId = setTimeout(function() { controller.abort(); }, FETCH_TIMEOUT_MS);
  } catch (e) {
    // AbortController not supported - fetch without timeout
  }

  var fetchOptions = controller ? { signal: controller.signal } : {};

  fetch(RSS2JSON_URL, fetchOptions)
    .then(function(response) {
      if (timeoutId) clearTimeout(timeoutId);
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    })
    .then(function(data) {
      if (data.status !== 'ok' || !Array.isArray(data.items)) {
        throw new Error('Invalid response');
      }

      // Build a Set of existing video IDs
      var existingIds = {};
      for (var i = 0; i < episodes.length; i++) {
        existingIds[episodes[i].id] = true;
      }

      // Find max episode number
      var maxEp = 0;
      for (var j = 0; j < episodes.length; j++) {
        if (episodes[j].ep > maxEp) maxEp = episodes[j].ep;
      }

      // Collect new episodes
      var newEpisodes = [];
      for (var k = 0; k < data.items.length; k++) {
        var item = data.items[k];
        var videoId = extractVideoId(item);
        if (!videoId || existingIds[videoId]) continue;

        var date = normalizeDate(item.pubDate);
        if (!date) continue;

        newEpisodes.push({
          id: videoId,
          title: escapeHtml(item.title || ''),
          date: date,
          desc: escapeHtml(cleanDescription(item.description)),
          isNew: true
        });

        existingIds[videoId] = true;
      }

      if (newEpisodes.length === 0) return;

      // Sort by date ascending so numbering is chronological
      newEpisodes.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      });

      // Assign episode numbers
      for (var n = 0; n < newEpisodes.length; n++) {
        maxEp++;
        newEpisodes[n].ep = maxEp;
      }

      // Merge into main array
      for (var m = 0; m < newEpisodes.length; m++) {
        episodes.push(newEpisodes[m]);
      }

      // Re-render
      renderEpisodes(currentSort);
    })
    .catch(function() {
      // Silent fail - hardcoded episodes are already displayed
    });
}

/* ===========================
   INIT
=========================== */
document.addEventListener('DOMContentLoaded', function() {
  // Step 1: Render hardcoded episodes immediately
  renderEpisodes('newest');

  // Step 2: Wire up sort buttons
  document.querySelectorAll('.pc-sort-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setSort(btn.dataset.sort); });
  });

  // Step 3: Fetch new episodes in the background
  fetchAndMergeNewEpisodes();
});
