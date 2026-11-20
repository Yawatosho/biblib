import{c as n,n as d,s as l,a as u,b as y}from"./index-DCY0xYgv.js";import{s as p}from"./story-stages-DMBzbYBh.js";import{c as m}from"./classic-art-B3yJAYvl.js";import{c as f}from"./story-music-Isy7mP6X.js";import"./gallery-progress-Bs1p2-wQ.js";import"./score-options-BteVHQZi.js";function L(){const e=p[n()],a=d(e.id),r=document.querySelector("#app");r.dataset.stage=String(e.id),r.dataset.scene="victory",r.dataset.mode="story",document.title=`STAGE ${e.id} CLEAR | びぶりぶ`,r.innerHTML=`<section class="story-clear" aria-label="${e.name}との勝負に勝利したリリー">
    <img class="clear-library" src="${new URL(""+new URL("historic-library-ke47RtuL.webp",import.meta.url).href,import.meta.url).href}" alt="" draggable="false">
    <header class="victory-heading"><span>${l(e.id)}</span><h1><i aria-hidden="true">✦</i> YOU WIN <i aria-hidden="true">✦</i></h1></header>
    <div class="victory-portraits">
      <figure class="victory-portrait victory-winner"><div class="victory-face"><img src="${m.pictures[5]}" alt="嬉しそうに笑うリリーの顔のアップ" draggable="false"></div></figure>
      <span class="victory-divider" aria-hidden="true">✧</span>
      <figure class="victory-portrait victory-rival"><div class="victory-face"><img src="${e.art.exhaustedPicture}" alt="負けを悔しがる${e.name}の顔のアップ" draggable="false"></div></figure>
    </div>
    <button class="victory-dialogue" id="${a?"story-continue":"story-finish"}" type="button" aria-label="リリー「${e.victoryLine}」 ${a?"次の場面へ":"エンディングへ"}">
      <span class="victory-line">${e.victoryLine}</span>
    </button>
  </section>`;const i=f(r,{source:new URL(""+new URL("win-CGXwzJPd.mp3",import.meta.url).href,import.meta.url).href,id:"victory-bgm",galleryId:"bgm:win"});addEventListener("pagehide",()=>i.stop());const c=r.querySelector(".victory-dialogue");let o=!1;async function s(){if(o)return;o=!0,c.disabled=!0,r.inert=!0,a&&u(a);const t=r.animate([{opacity:1},{opacity:0}],{duration:280,fill:"forwards"});await Promise.all([t.finished.catch(()=>{}),i.fadeOut(280)]),y(a?"story-intro":"story-ending")}document.addEventListener("click",t=>{t.preventDefault(),s()}),document.addEventListener("keydown",t=>{t.repeat||t.ctrlKey||t.metaKey||t.altKey||t.code!=="Enter"&&t.code!=="Space"&&t.code!=="NumpadEnter"||t.target.closest("button, a, input, textarea, select")||(t.preventDefault(),s())})}export{L as mountStoryVictory};
