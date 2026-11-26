// 台湾華語 練習帳 — オフライン用サービスワーカー
// アプリを更新したら VERSION の数字を1つ上げてください（古いキャッシュが入れ替わります）
const VERSION = 'v6';
const APP = 'app-' + VERSION;
const FONTS = 'fonts-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== APP && k !== FONTS).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Google Fonts：一度読み込んだらキャッシュから使う
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(res => { c.put(e.request, res.clone()); return res; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  // アプリ本体：ネットにつながっていれば最新、つながらなければキャッシュ
  e.respondWith(fetch(e.request).then(res => { const copy = res.clone(); caches.open(APP).then(c => c.put(e.request, copy)); return res; }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html'))));
});
