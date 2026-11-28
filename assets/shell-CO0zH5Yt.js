import{c as b}from"./classic-art-B3yJAYvl.js";import{s as u}from"./index-DgL9jjzv.js";const p={classic:"スコアアタック",story:"ストーリーモード"},h=b.pictures[0];function m(a,i,s,n=h){document.querySelector("#app").setAttribute("data-mode",a),document.querySelector("#app").innerHTML=`
  <div class="library-scene" aria-hidden="true">
    <div class="library-window"><i></i><i></i></div><div class="window-light"></div>
    ${[0,1].map(r=>`<div class="distant-shelf side-${r}">${Array.from({length:5},(e,c)=>`<div>${Array.from({length:7},(v,d)=>`<i style="--h:${18+(d*11+c*7)%22}px;--c:${["#aca18b","#a5b29b","#b5a3ba","#c0ad89"][d%4]}"></i>`).join("")}</div>`).join("")}</div>`).join("")}
    <div class="library-floor"></div>
    ${Array.from({length:7},(r,e)=>`<i class="ambient-dust" style="--x:${7+e*14}%;--y:${18+e*19%66}%;--delay:-${e*1.7}s"></i>`).join("")}
  </div>
  <header class="header">
    <button type="button" class="wordmark" data-screen-target="title" aria-label="びぶりぶ ホーム"><svg class="brand-mark" viewBox="0 0 40 42" aria-hidden="true"><path d="M5 12Q13 10 20 15Q27 10 35 12V35Q27 32 20 37Q13 32 5 35Z" fill="#a3b597" stroke="#7c9675" stroke-width="1.5"/><path d="M20 15V37M9 17Q14 16 17 19M23 19Q28 16 32 17" fill="none" stroke="#fff7d9" stroke-width="1.5"/><path d="M20 1l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#c9ad6d"/></svg><span>びぶりぶ</span></button>
    <nav aria-label="メニュー"><button class="text-button mode-button" id="mode-button" aria-label="モードを選ぶ">${p[a]} ▾</button><button class="text-button" id="ranking-button">記録</button><button class="icon-button" id="help-button" aria-label="遊び方" title="遊び方">?</button><button class="icon-button" id="restart-button" aria-label="はじめから" title="はじめから">↻</button></nav>
  </header>
  <section class="play-layout" aria-label="びぶりぶ ゲーム画面">
    <div class="shelf-area">
      <div class="cabinet" id="cabinet">
        <div class="cabinet-crown"><span aria-hidden="true">✦</span><div id="shelf-lights" class="shelf-lights" aria-hidden="true"></div></div>
        <div class="shelf-interior" id="board" aria-label="本棚。下から1段目〜8段目"></div>
        <div class="cabinet-base" aria-hidden="true"></div>
        <div class="floating" id="floating" aria-hidden="true"></div>
      </div>
    </div>
    <aside class="sidebar">
      <section class="score-area" aria-label="プレイ記録">
        <div class="score-hangers" aria-hidden="true"><i></i><i></i></div>
        <svg class="score-plaque" viewBox="0 0 286 184" aria-hidden="true">
          <defs>
            <linearGradient id="hud-wood" x2="0" y2="1"><stop stop-color="#e9d0a1"/><stop offset=".48" stop-color="#d8b88a"/><stop offset="1" stop-color="#c9a270"/></linearGradient>
            <linearGradient id="hud-paper" x2=".3" y2="1"><stop stop-color="#fffdf1"/><stop offset="1" stop-color="#f3e9cc"/></linearGradient>
            <linearGradient id="hud-gold" x2="0" y2="1"><stop stop-color="#fff1bc"/><stop offset=".5" stop-color="#c6a265"/><stop offset="1" stop-color="#ecd291"/></linearGradient>
            <pattern id="hud-grain" width="100" height="17" patternUnits="userSpaceOnUse"><path d="M0 9Q25 4 50 9T100 9M0 14Q25 9 50 14T100 14" fill="none" stroke="#af8755" stroke-width=".6" opacity=".15"/></pattern>
          </defs>
          <path d="M24 17H106Q116 7 127 9L143 2L159 9Q172 7 180 17H262Q281 17 281 35V139Q281 153 267 153H19Q5 153 5 139V35Q5 17 24 17Z" fill="url(#hud-wood)" stroke="#b28c59" stroke-width="1.3"/>
          <path d="M24 17H106Q116 7 127 9L143 2L159 9Q172 7 180 17H262Q281 17 281 35V139Q281 153 267 153H19Q5 153 5 139V35Q5 17 24 17Z" fill="url(#hud-grain)"/>
          <path d="M26 29H105Q124 18 143 15Q162 18 181 29H260Q268 29 268 38V134Q268 141 260 141H26Q18 141 18 134V38Q18 29 26 29Z" fill="url(#hud-paper)" stroke="url(#hud-gold)" stroke-width="2.3"/>
          <path d="M143 7l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#b99250"/>
          <circle cx="49" cy="22" r="2.4" fill="#ae8b55"/><circle cx="237" cy="22" r="2.4" fill="#ae8b55"/>
        </svg>
        <span class="score-label">SCORE</span><strong id="score">0</strong>
        <span class="practice" id="practice" hidden>調整プレイ</span><div class="score-magic" aria-hidden="true"></div>
      </section>
      <section class="next-box">
        <div class="delivery-countdown"><div class="arrival-label"><span>NEXT</span></div>
          <div class="arrival-gauge" id="arrival-gauge" role="progressbar" aria-label="新しい段が届くまでの残り手数" aria-valuemin="0" aria-valuemax="${i}" aria-valuenow="${i}"><div id="arrival-books" class="arrival-books" aria-hidden="true"></div></div>
        </div>
        <button id="add-button" class="add-button" aria-label="今すぐ1段追加"><svg viewBox="0 0 40 30" aria-hidden="true"><path d="M4 24h32v3H4z" fill="#c9ac6c"/><rect x="6" y="10" width="6" height="13" rx="1" fill="#b1c6a0"/><rect x="14" y="8" width="6" height="15" rx="1" fill="#c5b4d9"/><rect x="22" y="11" width="6" height="12" rx="1" fill="#e8bc9c"/><path d="M7 13h4m4-2h4m4 3h4" stroke="#fffbee"/><circle cx="32" cy="8" r="7" fill="#fffbee" stroke="#c9ac6c"/><path d="M32 4v8m-4-4h8" stroke="#718767" stroke-width="2" stroke-linecap="round"/></svg></button>
      </section>
      <section class="combo-box" hidden>
        <div class="combo-heading"><span aria-hidden="true">✧</span><strong id="combo"></strong><span aria-hidden="true">✧</span></div>
        <div class="combo-budget"><div id="combo-pips" class="combo-pips" role="meter" aria-label="コンボ継続までの残り手数" aria-valuemin="0" aria-valuemax="${s}" aria-valuenow="${s}"></div></div>
        <div class="combo-burst" aria-hidden="true"></div>
      </section>
      <div class="lily-art"><img src="${n}" alt="本を持って見守るリリー。" draggable="false"></div>
    </aside>
  </section>
  <button type="button" class="mobile-cancel" aria-label="選択を解除" hidden>×</button>
  <button id="debug-button" hidden>開発モード</button>
  <p class="sr-only" id="live" aria-live="polite"></p>
  <dialog id="modal" aria-labelledby="modal-title"><div id="modal-content"></div></dialog>
`;const t=document.querySelector("#app"),o=t.querySelector(".mobile-cancel");o.addEventListener("click",()=>{t.querySelector(".shelf-area:not(.duel-rival) .book.selected:not(:disabled)")?.click()});const l=new MutationObserver(()=>{o.hidden=!t.querySelector(".shelf-area:not(.duel-rival) .book.selected:not(:disabled)")});l.observe(t.querySelector(".shelf-area"),{subtree:!0,attributes:!0,attributeFilter:["class","disabled"]}),u().signal.addEventListener("abort",()=>l.disconnect(),{once:!0})}function y(a){return`<button class="modal-close" id="close-modal" aria-label="閉じる">×</button>
    <span class="eyebrow">LILY'S LIBRARY</span><h2 id="modal-title">今日はどんな整理にする？</h2>
    <p>選んだモードで、新しいゲームを始めます。</p>
    <div class="mode-options">
      <button type="button" class="mode-option" id="choose-classic" data-screen-target="classic-select" ${a==="classic"?'aria-current="true"':""}><strong>スコアアタック</strong><small>エンドレスと整理チャレンジ。キャラクターを選んで整理しよう。</small></button>
      <button type="button" class="mode-option" id="choose-story" data-screen-target="story-intro" data-story-stage="1" ${a==="story"?'aria-current="true"':""}><strong>ストーリーモード</strong><small>探偵さんと対戦。コンボで段を送り、相殺で本棚を守ろう。</small></button>
    </div>`}export{y as a,m};
