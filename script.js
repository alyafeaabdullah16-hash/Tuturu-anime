const animeData = [
  {
    id: 1,
    name: "Re:Zero",
    title: "Re:Zero - بداية الحياة في عالم آخر",
    symbol: "❄️",
    type: "مسلسل تلفزيوني",
    source: "رواية خفيفة",
    status: "مستمر",
    statusClass: "ongoing",
    dates: "أبريل 2016 - مستمر",
    episodesCount: "4 مواسم — 85 حلقة حتى أكتوبر 2026",
    duration: "25 دقيقة تقريباً",
    studio: "White Fox",
    director: "واسوكي ماساهارو",
    author: "ناغاتسوكي تابي",
    seiyuu: "كوباياشي يوكو، إيغاراشي هيرومي",
    age: "PG-13 — المراهقون فوق 13 سنة",
    genres: "خيال، دراما، نفسي، إيسيكاي، مغامرة",
    themes: "إيسيكاي، قوة الإرادة، الموت وإعادة الولادة، الأصدقاء",
    synopsis: "تسوكيكي ناتسوكي يعود للمنزل ليلاً ليُنقل فجأة إلى عالم آخر. لا يملك أي قوة خارقة سوى قدرته على العودة للوقت عند الموت. يبدأ رحلة البحث عن سبب وصوله لهذا العالم وإنقاذ من يحب.",
    chars: "ناتسوكي سوبارو، إميليا، رام، ريم، روزوال",
    world: "عالم سحري يشبه العصور الوسطى، ممالك متنوعة، وقوى سحرية وأرواح",
    rating: "8.5/10",
    ranking: "المرتبة #120 على MyAnimeList",
    watchOrder: "الموسم 1 → Memory Snow → الموسم 2 → The Frozen Bond → الموسم 3 → الموسم 4",
    related: "لا توجد أعمال مرتبطة مباشرة سوى الأوفات",
    seasons: ["الموسم الأول (25 حلقة)", "الموسم الثاني (25 حلقة)", "الموسم الثالث (16 حلقة)", "الموسم الرابع (19 حلقة)"],
    episodes: {
      "الموسم الأول (25 حلقة)": Array(25).fill("").map((_,i)=>`الحلقة ${i+1}`),
      "الموسم الثاني (25 حلقة)": Array(25).fill("").map((_,i)=>`الحلقة ${i+1}`),
      "الموسم الثالث (16 حلقة)": Array(16).fill("").map((_,i)=>`الحلقة ${i+1}`),
      "الموسم الرابع (19 حلقة)": Array(19).fill("").map((_,i)=>`الحلقة ${i+1}`)
    }
  },
  {
    id: 2,
    name: "Corpse Party",
    title: "Corpse Party: Tortured Souls",
    symbol: "💀",
    type: "OVA",
    source: "لعبة رعب بقاء",
    status: "مكتمل",
    statusClass: "ended",
    dates: "يوليو 2013",
    episodesCount: "4 حلقات كاملة",
    duration: "29 دقيقة للحلقة",
    studio: "Asread",
    director: "موريتا كونيا",
    author: "ماكيدو يوشيكا",
    seiyuu: "ماتسوكي يوكا، سايتو شييرو",
    age: "R — للبالغين فقط (مشاهد عنف ودم)",
    genres: "رعب، غموض، نفسي، خوارق",
    themes: "أشباح، مدرسة ملعونة، بقاء، مأساة",
    synopsis: "مجموعة طلاب يقومون بطقس صداقة بسيط ليجدوا أنفسهم محاصرين في مدرسة ابتدائية ملعونة في بعد موازٍ، حيث تكمن الرعب والموت في كل زاوية.",
    chars: "ناكاجيما أياتسو، شيشيدو يوي، كيشينوما يوشيكي، ساتشيكو",
    world: "مدرسة ابتدائية مهجورة تُعرف بـ 'المضيف السماوي'، محاصرة بلعنة قديمة",
    rating: "6.8/10",
    ranking: "المرتبة #4,200 على MyAnimeList",
    watchOrder: "تُشاهد كاملة كوحدة واحدة — 4 حلقات فقط",
    related: "Corpse Party: Missing Footsteps",
    seasons: ["العمل الكامل (4 حلقات)"],
    episodes: {
      "العمل الكامل (4 حلقات)": ["الحلقة 1", "الحلقة 2", "الحلقة 3", "الحلقة 4"]
    }
  },
  {
    id: 3,
    name: "Tasogare Otome",
    title: "Tasogare Otome x Amnesia",
    symbol: "🌙",
    type: "مسلسل + OVA",
    source: "مانجا",
    status: "مكتمل",
    statusClass: "ended",
    dates: "أبريل 2012 — المسلسل + نوفمبر 2012 الأوفا",
    episodesCount: "12 حلقات رئيسية + 1 OVA",
    duration: "24 دقيقة للحلقة",
    studio: "Silver Link",
    director: "أونومي يويتشي",
    author: "ماتسوماي تيرو",
    seiyuu: "ساويري هاياشي، ميتسوكي سايتو",
    age: "PG-13 — المراهقون فوق 13 سنة",
    genres: "كوميديا رومانسية، دراما، خوارق، غموض",
    themes: "أشباح، مدرسة، حب بين إنسان وشبح، فقدان الذاكرة",
    synopsis: "نييا تييتشي يجد شبحًا لفتاة اسمها يوكو فقدت ذاكرتها داخل مبنى مدرسة قديم، فيبدأان معًا بالبحث عن أسرار موتها وذكرياتها المفقودة.",
    chars: "كانييه تييتشي، كونو يوكو، ميزونوكا كيري",
    world: "مدرسة قديمة مبنية فوق معبد قديم، تجوبها أشباح وآثار الماضي",
    rating: "7.6/10",
    ranking: "المرتبة #1,500 على MyAnimeList",
    watchOrder: "الحلقات 1-12 أولاً → ثم الأوفا كحلقة جانبية أخيرة",
    related: "لا توجد أعمال أخرى مرتبطة",
    seasons: ["المسلسل الرئيسي (12 حلقة)", "الأوفا (حلقة 13)"],
    episodes: {
      "المسلسل الرئيسي (12 حلقة)": Array(12).fill("").map((_,i)=>`الحلقة ${i+1}`),
      "الأوفا (حلقة 13)": ["الأوفا — عذبة طرد الأرواح"]
    }
  }
];

const homeView = document.getElementById('homeView');
const detailsView = document.getElementById('detailsView');
const animeGrid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');

function renderCards(list = animeData) {
  animeGrid.innerHTML = '';
  list.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.dataset.id = anime.id;
    card.dataset.title = anime.title + ' ' + anime.name;
    card.dataset.symbol = anime.symbol;
    card.dataset.type = anime.type;
    card.dataset.source = anime.source;
    card.dataset.status = anime.status;
    card.dataset.dates = anime.dates;
    card.dataset.episodescount = anime.episodesCount;
    card.dataset.duration = anime.duration;
    card.dataset.studio = anime.studio;
    card.dataset.director = anime.director;
    card.dataset.author = anime.author;
    card.dataset.seiyuu = anime.seiyuu;
    card.dataset.age = anime.age;
    card.dataset.genres = anime.genres;
    card.dataset.themes = anime.themes;
    card.dataset.synopsis = anime.synopsis;
    card.dataset.chars = anime.chars;
    card.dataset.world = anime.world;
    card.dataset.rating = anime.rating;
    card.dataset.ranking = anime.ranking;
    card.dataset.related = anime.related;
    card.dataset.watchorder = anime.watchOrder;
    card.dataset.seasons = anime.seasons.join(',');

    card.innerHTML = `
      <div class="poster">${anime.symbol}</div>
      <h3>${anime.name}</h3>
      <div class="card-meta">
        <span>${anime.type.split(' ')[0]}</span>
        <span class="status ${anime.statusClass}">${anime.status}</span>
      </div>
    `;

    card.addEventListener('click', () => openAnimeDetails(anime));
    animeGrid.appendChild(card);
  });
}

function openAnimeDetails(anime) {
  homeView.classList.remove('active');
  detailsView.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});

  document.getElementById('detName').textContent = anime.title;
  document.getElementById('detPosterSymbol').textContent = anime.symbol;
  document.getElementById('detTypeSource').textContent = `${anime.type} | المصدر: ${anime.source}`;
  
  const statusEl = document.getElementById('detStatus');
  statusEl.textContent = anime.status;
  statusEl.className = `status ${anime.statusClass}`;
  
  document.getElementById('detDates').textContent = anime.dates;
  document.getElementById('detEpisodesCount').textContent = anime.episodesCount;
  document.getElementById('detDuration').textContent = anime.duration;
  document.getElementById('detStudio').textContent = anime.studio;
  document.getElementById('detDirector').textContent = anime.director;
  document.getElementById('detAuthor').textContent = anime.author;
  document.getElementById('detSeiyuu').textContent = anime.seiyuu;
  document.getElementById('detAge').textContent = anime.age;
  document.getElementById('detGenres').textContent = anime.genres;
  document.getElementById('detThemes').textContent = anime.themes;
  document.getElementById('detSynopsis').textContent = anime.synopsis;
  document.getElementById('detChars').textContent = anime.chars;
  document.getElementById('detWorld').textContent = anime.world;
  document.getElementById('detRating').textContent = anime.rating;
  document.getElementById('detRanking').textContent = anime.ranking;
  document.getElementById('detWatchOrder').textContent = anime.watchOrder;
  document.getElementById('detRelated').textContent = anime.related;

  const seasonsBar = document.getElementById('detSeasonsList');
  seasonsBar.innerHTML = '';
  
  anime.seasons.forEach((season, index) => {
    const btn = document.createElement('button');
    btn.className = index === 0 ? 'season-tab active' : 'season-tab';
    btn.textContent = season;
    btn.onclick = () => {
      document.querySelectorAll('.season-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadEpisodes(season, anime);
    };
    seasonsBar.appendChild(btn);
  });

  if(anime.seasons.length > 0) loadEpisodes(anime.seasons[0], anime);
}

function loadEpisodes(seasonName, anime) {
  const epGrid = document.getElementById('episodesList');
  epGrid.innerHTML = '';
  document.getElementById('currentEpTitle').textContent = `📺 ${seasonName} — اختر حلقة`;

  const episodes = anime.episodes[seasonName] || [];
  
  episodes.forEach((epName, index) => {
    const epBtn = document.createElement('button');
    epBtn.className = 'ep-btn';
    epBtn.textContent = epName;
    epBtn.onclick = () => {
      document.querySelectorAll('.ep-btn').forEach(b => b.classList.remove('active'));
      epBtn.classList.add('active');
      document.getElementById('currentEpTitle').textContent = `▶️ ${epName}`;
    };
    epGrid.appendChild(epBtn);
  });
}

function goBack() {
  detailsView.classList.remove('active');
  homeView.classList.add('active');
  document.getElementById('videoPlayer').src = 'about:blank';
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if(!q) return renderCards();
  const filtered = animeData.filter(a => 
    a.title.toLowerCase().includes(q) || 
    a.name.toLowerCase().includes(q) ||
    a.genres.toLowerCase().includes(q)
  );
  renderCards(filtered);
});

renderCards();
      
