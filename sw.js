/*
 * サービスワーカー（オフラインでもランチャー画面を開けるようにする）
 * ------------------------------------------------------------
 * index.html / アイコンなどを変更して公開し直したときは、
 * 下の CACHE_VERSION の数字を 1 つ上げてください（古い画面が残るのを防ぎます）。
 * ※ publish.ps1 で公開すると、自動で上がります。
 *
 * 画面本体（index.html）とツール一覧（apps.js）は、ブラウザが覚えている分を使わず、
 * 開くたびにサーバーへ最新かを確かめます。つながらないときだけ、保存分を使います。
 */
const CACHE_VERSION = "v6";
const CACHE_NAME = "ocr-launcher-" + CACHE_VERSION;

const SHELL = [
  "./",
  "./index.html",
  "./apps.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // ブラウザに残っている古いファイルを取り込まないよう、必ずサーバーから取り直す
      .then((cache) => cache.addAll(SHELL.map((u) => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith("ocr-launcher-") && k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 自分のサイト以外（Apps Script・スプレッドシートなど）には一切関与しない
  if (req.method !== "GET" || url.origin !== self.location.origin) return;

  // 画面本体と設定ファイル：毎回サーバーに最新かを確かめ、つながらなければ保存分を使う
  const networkFirst = req.mode === "navigate" || url.pathname.endsWith("/apps.js");
  if (networkFirst) {
    event.respondWith(
      fetch(new Request(req.url, { cache: "no-cache", credentials: "same-origin" }))
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() =>
          caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("./index.html"))
        )
    );
    return;
  }

  // アイコンなど：保存分を優先
  event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
