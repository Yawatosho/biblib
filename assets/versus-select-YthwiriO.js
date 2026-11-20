import{b}from"./index-IB3eUnPq.js";import{a as u}from"./score-characters-p-GuuV_f.js";import{readVersusOptions as h,versusSeat as c,versusControls as n,writeVersusOptions as p}from"./versus-options-DQp02CON.js";import{a as m,m as y,o as l}from"./versus-portraits-B7j4quTJ.js";import"./classic-art-B3yJAYvl.js";import"./story-stages-DMBzbYBh.js";import"./score-options-Cr4Zom4n.js";import"./engine-DfBVmaVW.js";import"./story-config-T0OBp6-Y.js";function C(){const o=document.querySelector("#app"),s=h(),v=new URL(""+new URL("historic-library-ke47RtuL.webp",import.meta.url).href,import.meta.url).href;document.title="対戦モード | びぶりぶ",o.innerHTML=`<section class="versus-select" aria-labelledby="versus-title">
    <img class="versus-library" src="${v}" alt="" draggable="false">
    <button type="button" class="text-button versus-back" data-screen-target="title">‹ タイトル</button>
    <h1 id="versus-title">対戦モード</h1>
    <p class="versus-intro">同じ端末で、ふたりで本棚勝負。キャラと操作を選んでください。</p>
    <div class="versus-players">
      ${m.map(r=>`<section class="versus-player" data-side="${r}" aria-label="${c[r]}の設定">
        <h2><b>${c[r]}</b><span data-chosen-name></span></h2>
        <div class="versus-cast" role="group" aria-label="キャラクター">
          ${u.map(t=>`<button type="button" data-character="${t.id}">
            <img src="${t.preview}" alt="" draggable="false"${y(t.id,r)?" data-mirrored":""}><span>${t.name}</span>
          </button>`).join("")}
        </div>
        <div class="versus-inputs" role="group" aria-label="操作タイプ">
          ${Object.entries(n).map(([t,a])=>`<button type="button" data-control="${t}">
            <span>${a.name}</span><small data-control-note>${a.movement}</small>
          </button>`).join("")}
        </div>
        <p class="versus-key-hint" aria-live="polite"></p>
      </section>`).join("")}
      <span class="versus-seal" aria-hidden="true">VS</span>
    </div>
    <button type="button" id="versus-start" class="primary versus-start">対戦をはじめる</button>
  </section>`;function d(){for(const r of m){const t=o.querySelector(`[data-side="${r}"]`),a=s[r];t.querySelector("[data-chosen-name]").textContent=u.find(e=>e.id===a.character).name,t.querySelectorAll("[data-character]").forEach(e=>{e.setAttribute("aria-pressed",String(e.dataset.character===a.character))}),t.querySelectorAll("[data-control]").forEach(e=>{const i=e.dataset.control;e.disabled=i===s[l(r)].control,e.setAttribute("aria-pressed",String(i===a.control)),e.querySelector("[data-control-note]").textContent=e.disabled?`${c[l(r)]}が使用中`:n[i].movement}),t.querySelector(".versus-key-hint").textContent=`${n[a.control].movement}　${n[a.control].actions}`}}o.addEventListener("click",r=>{const t=r.target.closest("button"),a=t?.closest("[data-side]")?.dataset.side;if(!a||!t||t.disabled)return;t.dataset.character&&(s[a].character=t.dataset.character);const e=t.dataset.control;e&&e!==s[l(a)].control&&(s[a].control=e),p(s),d()}),o.querySelector("#versus-start").addEventListener("click",()=>{p(s),b("versus-battle")}),d()}export{C as mountVersusSelect};
