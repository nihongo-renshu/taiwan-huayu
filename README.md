# 台湾華語 練習帳（スマホアプリ版）

GitHub Pages で公開し、スマホのホーム画面に追加して使うためのファイル一式です。

## 入っているファイル

| ファイル | 役割 |
|---|---|
| index.html | アプリ本体 |
| manifest.webmanifest | アプリ名・アイコン・色などの設定 |
| sw.js | オフラインでも動かすための仕組み |
| icon-*.png | ホーム画面用アイコン |

## 公開のしかた（パソコンのブラウザで約5分）

1. GitHub にログインし、右上の「＋」→「New repository」を押す
2. Repository name に `taiwan-huayu` などと入力し、**Public** を選んで「Create repository」
3. 次の画面の「uploading an existing file」をクリック
4. この ZIP を展開したフォルダの中身（index.html、manifest.webmanifest、sw.js）をまとめてドラッグ＆ドロップし、「Commit changes」
5. リポジトリの「Settings」→ 左メニュー「Pages」を開く
6. 「Branch」で `main` と `/ (root)` を選んで「Save」
7. 1〜2分待つと、ページ上部に URL が表示されます
   例：`https://（ユーザー名）.github.io/taiwan-huayu/`

## スマホのホーム画面に追加する

- **iPhone（Safari）**：URL を開く →「共有」ボタン →「ホーム画面に追加」
- **Android（Chrome）**：URL を開く →「︙」メニュー →「ホーム画面に追加」または「アプリをインストール」

一度開けば、そのあとはネットにつながっていなくても起動できます。

## 記録の引き継ぎ

GitHub 版は Claude 上の版とは別の場所に記録を保存するため、最初は記録が空です。

1. これまで使っていた画面で、設定（歯車）→「記録のバックアップ」→「コピー」
2. GitHub 版を開き、設定 → 欄にコードを貼り付けて「復元」

## アプリを更新するとき

1. 新しい index.html を同じリポジトリにアップロード（上書き）する
2. sw.js の `const VERSION = 'v1';` を `'v2'` のように1つ上げてアップロードする

スマホ側は、アプリを2回ほど開き直すと新しい版に切り替わります。
