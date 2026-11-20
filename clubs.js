const clubs = [
  ["Paris Saint-Germain","France","PSG"],["Olympique de Marseille","France","OM"],["Olympique Lyonnais","France","OL"],["AS Monaco","France","ASM"],["LOSC Lille","France","L"],["RC Lens","France","RCL"],["Stade Rennais","France","SR"],["FC Nantes","France","FCN"],
  ["Real Madrid","Espagne","RM"],["FC Barcelone","Espagne","FCB"],["Atlético Madrid","Espagne","ATM"],["Athletic Bilbao","Espagne","AB"],
  ["Manchester United","Angleterre","MU"],["Manchester City","Angleterre","MC"],["Liverpool FC","Angleterre","LFC"],["Arsenal FC","Angleterre","AFC"],["Chelsea FC","Angleterre","CFC"],["Tottenham Hotspur","Angleterre","TH"],["Newcastle United","Angleterre","NU"],
  ["Bayern Munich","Allemagne","FCB"],["Borussia Dortmund","Allemagne","BVB"],["RB Leipzig","Allemagne","RBL"],
  ["AC Milan","Italie","ACM"],["Inter Milan","Italie","IM"],["Juventus","Italie","J"],["AS Roma","Italie","ROM"],["Napoli","Italie","NAP"],
  ["Ajax","Pays-Bas","AJX"],["Benfica","Portugal","BEN"],["Porto","Portugal","FCP"],["Sporting CP","Portugal","SCP"],
  ["Galatasaray","Turquie","GS"],["Fenerbahçe","Turquie","FB"],["Celtic FC","Écosse","C"],["Al-Nassr","Arabie saoudite","AN"],["Al-Hilal","Arabie saoudite","AH"]
];
const grid=document.getElementById("club-grid"),search=document.getElementById("search"),count=document.getElementById("count"),empty=document.getElementById("empty");
function render(query=""){const filtered=clubs.filter(([name,country])=>(name+" "+country).toLowerCase().includes(query.toLowerCase()));grid.innerHTML=filtered.map(([name,country,short])=>`<a class="club-card" href="#" data-club="${name}"><span class="crest" aria-hidden="true">${short}</span><span><span class="club-name">${name}</span><div class="club-country">${country}</div></span></a>`).join("");count.textContent=`${filtered.length} club${filtered.length>1?"s":""}`;empty.hidden=filtered.length!==0}
grid.addEventListener("click",e=>{const card=e.target.closest("[data-club]");if(card){e.preventDefault();alert("Page du club « "+card.dataset.club+" » : elle sera reliée aux maillots dans la prochaine étape.");}});
search.addEventListener("input",()=>render(search.value.trim()));render();
