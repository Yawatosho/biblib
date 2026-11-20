import{b as S}from"./index-DCY0xYgv.js";import{c as U}from"./score-options-BteVHQZi.js";import{S as k}from"./story-config-T0OBp6-Y.js";import{c as v}from"./classic-art-B3yJAYvl.js";const E=new URL(""+new URL("shelf-DFwf5unp.webp",import.meta.url).href,import.meta.url).href,x=new URL(""+new URL("battle-B7ykC4lW.webp",import.meta.url).href,import.meta.url).href,M=new URL(""+new URL("challenge-BYRmQ8WH.webp",import.meta.url).href,import.meta.url).href,q=new URL(""+new URL("versus-setup-BU5Pliby.webp",import.meta.url).href,import.meta.url).href,C=new URL(""+new URL("versus-battle-snSMH-lR.webp",import.meta.url).href,import.meta.url).href,T=new URL(""+new URL("gallery-ByILVfb0.webp",import.meta.url).href,import.meta.url).href,A=["#b1c6a0","#e8bc9c","#c5b4d9","#a8c6ce","#e7cb87","#d5a5b1","#a6bdb2","#c4bd99","#b9bedc","#ddae97"];function w(l,e,r){return`<div class="manual-sample" aria-label="${e}"><span class="manual-sample-label">${e}</span>
    <div class="manual-books">${l.map(n=>`<span style="--book-color:${A[n]}"${n===r?' class="manual-picked"':""}>${n}</span>`).join("")}</div>
  </div>`}function p(l,e,r,n=[]){return`<figure class="manual-figure">
    <div class="manual-image"><img src="${l}" alt="${e}" draggable="false">
      ${n.map(({x:d,y:a},c)=>`<span class="manual-pin" style="left:${d}%;top:${a}%" aria-hidden="true">${c+1}</span>`).join("")}
    </div><figcaption>${r}</figcaption>
  </figure>`}const B=[{name:"探偵さん",portrait:new URL(""+new URL("detective-confident-Cl87LMGE.webp",import.meta.url).href,import.meta.url).href,description:"消えた本を追う探偵。ひらめきからリリーに勝負を挑みます。"},{name:"教授",portrait:new URL(""+new URL("professor-confident-D-XbCc1L.webp",import.meta.url).href,import.meta.url).href,description:"計算で本の並びを予測する教授。「本の声」に興味津々です。"},{name:"司書さん",portrait:new URL(""+new URL("smile-Buu1f2lL.webp",import.meta.url).href,import.meta.url).href,description:"リリーを見守る優しい司書さん。にこやかな笑顔で本気の勝負をします。"},{name:"至高の司書",portrait:new URL(""+new URL("serious-CsjTcrWt.webp",import.meta.url).href,import.meta.url).href,description:"フードをまとう威厳ある司書。リリーの力を見極めようとします。"}],m=[{title:"本の並べかたと操作",pages:[{title:"本を抜いて、はさむ",content:`<p>ひよっこ司書リリーと、本棚を整理しましょう。同じ段の本を左から <strong>0、1、2 … 9</strong> の順に揃えると、その段が消えます。</p>
          ${w([0,1,2,3,4,5,6,7,9,8],"① 9の本を選ぶ",9)}
          <p class="manual-move-arrow">↓　8の右にあるすき間へ</p>
          ${w([0,1,2,3,4,5,6,7,8,9],"② 0〜9が揃う",9)}
          <p class="manual-note">隣り合う昇順の連番は、選んだ本と一緒に動きます。たとえば「1・2・3」はひとつの塊です。</p>`},{title:"操作のしかた",content:`<h3>マウス・タッチ</h3>
          <ol class="manual-steps"><li>動かしたい本を選びます。</li><li>同じ段に出る <strong>▼</strong> を押して差し込みます。</li></ol>
          <p>本をつかみ、左右へドラッグしてそのまま差し込むこともできます。選んだ本をもう一度押すと、選択を取り消せます。</p>
          <h3>キーボード</h3>
          <dl class="manual-controls">
            <dt><kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd></dt><dd>カーソルを移動</dd>
            <dt><kbd>Space</kbd></dt><dd>本を選ぶ／差し込む</dd>
            <dt><kbd>Z</kbd></dt><dd>自分の棚に1段追加</dd>
            <dt><kbd>Esc</kbd></dt><dd>本の選択を取り消す</dd>
          </dl>
          <p class="manual-note">選択中は左右キーで挿入先を選びます。上下キーは選択を取り消して段を移動します。<br>対戦モードの操作は9ページへ。</p>`}]},{title:"本棚の見かたとコンボ",pages:[{title:"本棚と右側の表示",content:`${p(E,"左に本棚、右上にSCORE、右中段にNEXT・LEVEL・追加ボタンが並ぶプレイ画面","エンドレスのプレイ画面",[{x:66,y:30},{x:75.4,y:30},{x:80.2,y:30}])}
          <dl class="manual-legend">
            <dt>① NEXT</dt><dd>ゲージがなくなると、新しい段が届きます。</dd>
            <dt>② LEVEL</dt><dd>10段整理するごとに、段が早く届きます。</dd>
            <dt>③ 本＋</dt><dd>好きなタイミングで自分の棚に1段追加。</dd>
          </dl>
          <p class="manual-note">棚の上の灯りは段数の目安。9段目が届くとゲームオーバーです。</p>`},{title:"コンボをつなごう",content:`<p>揃った段が光っている間に、別の段も揃えるとコンボになります。次の段を揃えるたび、猶予が戻ります。</p>
          <div class="manual-combo-illustration">
            <img src="${v.pictures[5]}" alt="コンボが続いて大喜びするリリー" draggable="false">
            <ol><li><span>1段目を整理</span><strong>100点</strong></li><li><span>2 COMBO</span><strong>200点</strong></li><li><span>3 COMBO</span><strong>300点</strong></li></ol>
          </div>
          <p class="manual-note">あと1手で揃う段を複数作っておくと、続けて整理しやすくなります。</p>
          <p>5コンボ以上では、キャラクターのカットインが出ることも。</p>`}]},{title:"キャラクター紹介",pages:[{title:"リリー",content:`<div class="manual-lily-profile">
          <img src="${v.pictures[0]}" alt="本を抱えたリリーの立ち絵" draggable="false">
          <div>
            <h3>本の声が聞こえる<br>ひよっこ司書</h3>
            <p>本とおしゃべりができる、ひよっこ司書です。</p>
            <p>いつものように本を整理していたら、消えた本を探す探偵さんに出会い、思いがけず本棚勝負をすることに。</p>
          </div>
        </div>`},{title:"図書館で出会う人たち",content:`<div class="manual-rival-profiles">${B.map(({name:l,portrait:e,description:r})=>`
          <figure>
            <img src="${e}" alt="" draggable="false">
            <figcaption><h3>${l}</h3><p>${r}</p></figcaption>
          </figure>
        `).join("")}</div>`}]},{title:"ストーリーとスコアアタック",pages:[{title:"ストーリーモード",content:`${p(x,"左にリリーの本棚、右に探偵さんの本棚が並ぶ対戦画面","左がリリー、右が対戦相手の本棚")}
          <p>会話のあと、相手と本棚勝負。相手の本棚に9段目が届くと勝利です。</p>
          <ul class="manual-list">
            <li><strong>攻撃</strong>　2コンボから相手に段を送れます。2コンボで1段、5コンボ以上で最大${k.maxAttack}段。</li>
            <li><strong>相殺</strong>　棚の上に攻撃予告が出たら、着地前にコンボして届く段を打ち消せます。</li>
          </ul>`},{title:"スコアアタック",content:`${p(M,"エンドレスか整理チャレンジ、目標段数と5人のキャラクターを選ぶ画面","舞台に立つキャラは5人から選べます")}
          <h3>エンドレス</h3>
          <p>棚がいっぱいになるまで、コンボで得点を伸ばします。</p>
          <h3>整理チャレンジ</h3>
          <p><strong>${U.join("・")}段</strong>から目標を選び、クリアまでの速さを競います。最後の段を揃えた瞬間にタイムが確定します。</p>`}]},{title:"対戦モード",pages:[{title:"ふたりで対戦する",content:`<p>1台のPCでふたり対戦。タイトルの「対戦モード」でキャラと操作を選ぶと、VS画面から試合へ進みます。</p>
          <div class="manual-versus-setup">
            ${p(q,"1Pと2Pがそれぞれキャラクターと操作タイプを選ぶ設定画面","操作タイプは、ふたりで別々に選びます。")}
          </div>
          <table class="manual-key-table" aria-label="対戦モードの操作">
            <thead><tr><th scope="col">操作タイプ</th><th scope="col">移動</th><th scope="col">決定</th><th scope="col">段追加</th><th scope="col">取消</th></tr></thead>
            <tbody>
              <tr><th scope="row">マウス</th><td colspan="2">クリック・ドラッグ</td><td>本＋</td><td><kbd>Esc</kbd></td></tr>
              <tr><th scope="row">キーボード左側</th><td><kbd>W A S D</kbd></td><td><kbd>F</kbd></td><td><kbd>G</kbd></td><td><kbd>Q</kbd></td></tr>
              <tr><th scope="row">キーボード右側</th><td><kbd>↑ ← ↓ →</kbd></td><td><kbd>Enter</kbd></td><td><kbd>/</kbd></td><td><kbd>右Shift</kbd></td></tr>
            </tbody>
          </table>
          <p class="manual-note">同じキャラも選べます。キャラによる性能差はありません。<br>スマートフォンでは対戦モードを選べません。</p>`},{title:"コンボで段を送り合う",content:`${p(C,"左右に本棚があり、中央に両者の2コンボと相殺が表示された対戦画面","1Pは左、2Pは右の本棚を整理します。",[{x:25.1,y:5.55},{x:54.7,y:50}])}
          <p>時間がたつと新しい段が届き、9段目が積まれた側の負けです。</p>
          <dl class="manual-legend">
            <dt>攻撃</dt><dd>2コンボで1段。コンボが続くと1段ずつ増え、最大${k.maxAttack}段。</dd>
            <dt>① 攻撃予告</dt><dd>埋まった枠1つが1段。攻撃が届くまで約${k.attackDelayMs/1e3}秒あります。</dd>
            <dt>② 相殺</dt><dd>攻撃が届く前にコンボすると、届く段を打ち消せます。余った分は相手に送り返します。</dd>
          </dl>`}]},{title:"ギャラリーと整理のヒント",pages:[{title:"ギャラリー",content:`${p(T,"木枠にカットインを表示し、右側の一覧で作品を選ぶギャラリー","見つけた絵を拡大し、BGMを試聴できます")}
          <ul class="manual-list">
            <li><strong>カットインとエンディング</strong>　ゲームで見た絵が解放されます。BGMは実際に再生された曲を聴けます。</li>
            <li><strong>ちびキャラ</strong>　ストーリーで対戦した相手とリリーの差分が揃います。</li>
            <li><strong>クリア記念</strong>　整理チャレンジをクリアしたキャラと段数に応じて絵が増えます。</li>
          </ul>`},{title:"リリーの整理メモ",content:`<div class="manual-tips">
          <ol class="manual-steps">
            <li><strong>連番の塊を探す</strong><p>きれいに繋がっている本は、そのまま一度に運べます。</p></li>
            <li><strong>揃いやすい段から片づける</strong><p>NEXTが尽きそうなら、あと少しで揃う段を優先しましょう。</p></li>
            <li><strong>次の一手を見つけておく</strong><p>別の段の仕上げを考えておくと、コンボの猶予を活かせます。</p></li>
          </ol>
          <img src="${v.pictures[0]}" alt="本を抱えたリリー" draggable="false">
        </div>
          <p class="manual-note">スコアアタックで全段を消すと、次の段が1段補充され、NEXTがリセットされます。</p>`}]}],D=new URL(""+new URL("title-MhAHD50_.webp",import.meta.url).href,import.meta.url).href,N=new URL(""+new URL("logo-D1aO3tEq.webp",import.meta.url).href,import.meta.url).href,O=new URL(""+new URL("historic-library-ke47RtuL.webp",import.meta.url).href,import.meta.url).href;function L(l,e,r,n,d){const a=document.createElement("div");a.className="manual-turn",a.dataset.direction=d?"forward":"backward",a.inert=!0,a.setAttribute("aria-hidden","true"),a.innerHTML=`<div class="manual-turn-still"></div>
    <div class="manual-turn-leaf"><div class="manual-turn-face"></div>
      <div class="manual-turn-face manual-turn-back"></div></div>`,a.querySelector(".manual-turn-still").append(e),a.querySelector(".manual-turn-face").append(r),a.querySelector(".manual-turn-back").append(n.cloneNode(!0));const c=a.querySelector(".manual-turn-leaf");c.addEventListener("animationend",()=>a.remove(),{once:!0}),c.addEventListener("animationcancel",()=>a.remove(),{once:!0}),l.append(a)}function X(){const l=document.querySelector("#app");document.title="説明書 | びぶりぶ",l.innerHTML=`<section class="manual-scene" aria-label="びぶりぶの取扱説明書">
    <img src="${O}" class="manual-background" alt="" draggable="false">
    <header class="manual-header">
      <button type="button" class="text-button" data-screen-target="title">‹ タイトル</button>
      <h1>びぶりぶ 説明書</h1>
      <button type="button" class="text-button" id="manual-contents">もくじ</button>
    </header>
    <div class="manual-book" id="manual-book"></div>
    <nav class="manual-navigation" aria-label="ページ送り">
      <button type="button" class="text-button" id="manual-prev">‹ 前へ</button>
      <span id="manual-location" role="status" aria-atomic="true"></span>
      <button type="button" class="text-button" id="manual-next">次へ ›</button>
    </nav>
  </section>`;const e=l.querySelector("#manual-book"),r=l.querySelector("#manual-prev"),n=l.querySelector("#manual-next"),d=l.querySelector("#manual-contents"),a=l.querySelector("#manual-location"),c=matchMedia("(prefers-reduced-motion: reduce)");let s=-1;function b(t){if(t===s||t<0||t>m.length)return;e.querySelector(".manual-turn")?.remove();const[o,g]=e.children,$=t>s;if(s=t,s===0)e.innerHTML=`<div class="manual-cover" data-side="left">
        <img class="manual-cover-art" src="${D}" alt="" draggable="false">
        <div class="manual-cover-label"><img src="${N}" alt="びぶりぶ" draggable="false"><p>取扱説明書</p></div>
      </div>
      <article class="manual-page manual-toc" data-side="right">
        <p class="manual-kicker">✦</p>
        <h2 tabindex="-1">もくじ</h2>
        <p class="manual-toc-intro">開きたいページを選んでください。</p>
        <ol>${m.map(({title:u},i)=>`<li>
          <button type="button" data-chapter="${i+1}"><span>${u}</span><i aria-hidden="true"></i><b>${i*2+1}</b></button>
        </li>`).join("")}</ol>
        <p class="manual-toc-hint"><kbd>←</kbd> <kbd>→</kbd> でもページをめくれます。</p>
      </article>`,a.textContent="表紙・もくじ";else{const u=m[s-1],i=s*2-1;e.innerHTML=u.pages.map(({title:y,content:R},h)=>`<article class="manual-page" data-side="${h===0?"left":"right"}">
        <p class="manual-kicker">${u.title}</p>
        <h2 tabindex="-1">${y}</h2>
        ${R}
        <span class="manual-folio" aria-label="${i+h}ページ">${String(i+h).padStart(2,"0")}</span>
      </article>`).join(""),a.textContent=`${i}–${i+1} / ${m.length*2}`}if(r.disabled=s===0,n.disabled=s===m.length,d.setAttribute("aria-current",s===0?"page":"false"),o&&g&&!c.matches){const[u,i]=e.children;$?L(e,o,g,u,!0):L(e,g,o,i,!1)}}function f(t){const o=document.activeElement;b(s+t),!(o!==r&&o!==n)&&(r.disabled&&n.focus({preventScroll:!0}),n.disabled&&r.focus({preventScroll:!0}))}r.addEventListener("click",()=>f(-1)),n.addEventListener("click",()=>f(1)),d.addEventListener("click",()=>{b(0),e.querySelector("h2")?.focus({preventScroll:!0})}),e.addEventListener("click",t=>{const o=t.target.closest("[data-chapter]");o&&(b(Number(o.dataset.chapter)),e.querySelector("h2")?.focus({preventScroll:!0}))}),document.addEventListener("keydown",t=>{t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||(t.key==="ArrowLeft"||t.key==="ArrowRight"?(t.preventDefault(),t.repeat||f(t.key==="ArrowLeft"?-1:1)):t.key==="Escape"&&!t.repeat&&(t.preventDefault(),S("title")))}),b(0)}export{X as mountManual};
