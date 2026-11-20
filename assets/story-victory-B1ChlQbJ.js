import{s as d,a as l,j as u,f as y,e as p,n as f}from"./index-Cb84i4zE.js";import{s as m}from"./story-stages-BRC_Ym9m.js";import{c as g}from"./classic-art-B3yJAYvl.js";import{c as v}from"./story-music-DMA3tET-.js";import"./bgm-owner-BPW0rEf2.js";import"./score-options-BAaNOMF_.js";function E(){const{signal:i}=d(),a=m[l()],e=u(a.id),r=document.querySelector("#app");r.dataset.stage=String(a.id),r.dataset.scene="victory",r.dataset.mode="story",document.title=`STAGE ${a.id} CLEAR | びぶりぶ`,r.innerHTML=`<section class="story-clear" aria-label="${a.name}との勝負に勝利したリリー">
    <img class="clear-library" src="${new URL(""+new URL("historic-library-ke47RtuL.webp",import.meta.url).href,import.meta.url).href}" alt="" draggable="false">
    <header class="victory-heading"><span>${y(a.id)}</span><h1><i aria-hidden="true">✦</i> YOU WIN <i aria-hidden="true">✦</i></h1></header>
    <div class="victory-portraits">
      <figure class="victory-portrait victory-winner"><div class="victory-face"><img src="${g.pictures[5]}" alt="嬉しそうに笑うリリーの顔のアップ" draggable="false"></div></figure>
      <span class="victory-divider" aria-hidden="true">✧</span>
      <figure class="victory-portrait victory-rival"><div class="victory-face"><img src="${a.art.exhaustedPicture}" alt="負けを悔しがる${a.name}の顔のアップ" draggable="false"></div></figure>
    </div>
    <button class="victory-dialogue" id="${e?"story-continue":"story-finish"}" type="button" aria-label="リリー「${a.victoryLine}」 ${e?"次の場面へ":"エンディングへ"}">
      <span class="victory-line">${a.victoryLine}</span>
    </button>
  </section>`;const c=v(r,{track:"win",id:"victory-bgm"}),n=r.querySelector(".victory-dialogue");let s=!1;async function o(){if(s)return;s=!0,n.disabled=!0,r.inert=!0,e&&p(e);const t=r.animate([{opacity:1},{opacity:0}],{duration:280,fill:"forwards"});await Promise.all([t.finished.catch(()=>{}),c.fadeOut(280)]),i.aborted||f(e?"story-intro":"story-ending")}document.addEventListener("click",t=>{t.preventDefault(),o()},{signal:i}),document.addEventListener("keydown",t=>{t.repeat||t.ctrlKey||t.metaKey||t.altKey||t.code!=="Enter"&&t.code!=="Space"&&t.code!=="NumpadEnter"||t.target.closest("button, a, input, textarea, select")||(t.preventDefault(),o())},{signal:i})}export{E as mountStoryVictory};
