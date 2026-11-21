import{s as f,o as g,l as h,m as y,q as b,t as v}from"./index-CkMKDJ8n.js";function c(n,e){const o=document.querySelector("#app");return document.title=`${n} | びぶりぶ`,o.innerHTML=`<section class="library-settings" aria-labelledby="settings-title">
    <header><button type="button" class="text-button" data-screen-target="title">‹ タイトル</button>
    <h1 id="settings-title">${n}</h1></header>
    <div class="settings-paper">${e}</div>
  </section>`,o}function q(){const n=c("プライバシーポリシー",`
    <h2>アクセス解析</h2>
    <p>びぶりぶは、利用状況を把握し、ゲームの改善に役立てるために Google Analytics（GA4）を利用します。公開サイトを開いたときのページ閲覧などを計測します。Google のタグは Cookie などを利用する場合があり、取得した情報は Google が取り扱います。
      <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer">Google のプライバシーポリシー</a></p>
    <h2>アクセス解析を止めるには</h2>
    <p>下の設定を切り替えると、このブラウザからの以後の計測を停止できます。ブラウザの Cookie 制限や Google の
      <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">オプトアウト アドオン</a>も利用できます。</p>
    <label class="settings-option"><input id="analytics-opt-out" type="checkbox"> このブラウザでアクセス解析を無効にする</label>
    <p id="analytics-save" role="status"></p>
    <h2>ブラウザに保存するデータ</h2>
    <p>スコア、整理チャレンジのタイム・達成日・使用キャラなどの記録、ギャラリーの解放状況、アクセス解析の設定は、ブラウザのローカルストレージに保存します。対戦やモードの選択、ストーリーの進行先はタブ内に保存します。オフライン準備で取得したゲーム素材はブラウザのキャッシュに保存します。</p>
    <p>これらのゲームデータは画面表示や再開のために使い、ゲームから運営サーバーや Google Analytics へ送信しません。ブラウザでサイトデータを削除すると、記録・解放状況・設定・オフライン用データは消去されます。</p>
    <h2>個人情報</h2>
    <p>ゲームに登録フォームはなく、ゲーム内で氏名・メールアドレスなどの入力を求めません。アクセス解析で Google が取得する情報の取り扱いは、上記の Google のプライバシーポリシーをご確認ください。</p>`),e=n.querySelector("#analytics-opt-out"),o=n.querySelector("#analytics-save");e.checked=y(),e.addEventListener("change",()=>{o.textContent=b(e.checked)?"設定を保存しました。":"このページに設定を反映しました。ブラウザの保存領域は使えませんでした。"})}function C(){const n=c("オフライン準備",`
    <p>ゲームに必要なイラストや音声を保存すると、通信がないときも遊べます。</p>
    <p id="offline-status" role="status">保存状況を確認しています…</p>
    <progress id="offline-progress" hidden></progress>
    <p id="offline-update"></p>
    <button id="offline-download" type="button" class="primary" disabled>ゲームデータをダウンロード</button>`),{signal:e}=f(),o=n.querySelector("#offline-status"),i=n.querySelector("#offline-progress"),l=n.querySelector("#offline-download");let a=!1;const p=({type:t,cached:s,total:d,bytes:u})=>{i.hidden=!1,i.max=d,i.value=s,t==="ready"?o.textContent="オフラインで遊べる準備ができました。":t==="error"?o.textContent="保存を完了できませんでした。接続と空き容量を確認して、もう一度お試しください。":o.textContent=`${a?"保存中":"保存済み"} ${s} / ${d} ファイル（全約 ${(u/1e6).toFixed(1)} MB）`,l.disabled=t==="ready"||a&&t==="progress"},r=async t=>{if(!a){a=t==="download",a&&(l.disabled=!0,o.textContent="ダウンロードを開始しています…");try{await v(t,e,p)}catch{if(e.aborted)return;o.textContent="オフライン準備を利用できませんでした。接続を確認して再試行してください。",l.disabled=!1}finally{a=!1}}};if(!g){o.textContent="この環境ではオフライン準備を利用できません。オンラインで遊べます。";return}l.addEventListener("click",()=>{r("download")}),h().then(t=>{if(!t||e.aborted)return;const s=()=>{n.querySelector("#offline-update").textContent=t.waiting?"更新の準備ができました。このゲームを開いているタブをすべて閉じ、開き直すと切り替わります。":""};t.addEventListener("updatefound",()=>{t.installing?.addEventListener("statechange",s,{signal:e})},{signal:e}),t.installing?.addEventListener("statechange",s,{signal:e}),navigator.serviceWorker.addEventListener("controllerchange",s,{signal:e}),s()}),r("status"),addEventListener("online",()=>{r("status")},{signal:e})}export{C as mountOffline,q as mountPrivacy};
