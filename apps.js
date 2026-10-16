/*
 * ツール一覧の設定ファイル
 * ------------------------------------------------------------
 * ツールの追加・URL変更・並び替えは、このファイルだけを編集してください。
 *
 *   name        : 画面に出るツール名
 *   description : 1行の説明（何ができるか）
 *   audience    : 対象者の表示（空文字なら表示しない）
 *   url         : Apps Script の「ウェブアプリ」URL（末尾が /exec のもの）
 *                 例: "https://script.google.com/a/macros/thomas-gr.com/s/XXXXXXXX/exec"
 *                 空文字にすると「準備中」として表示され、押せません。
 *
 * ※ このページはインターネット上に公開されます。
 *   ここで表示を分けても、各ツールへのアクセス制限にはなりません。
 *   アクセス制限は、各ツール（Apps Script）側で行ってください。
 */
window.OCR_APPS = [
  {
    name: "役員経費精算",
    description: "役員の領収書を読み取り、月ごとのスプレッドシートに記録します",
    audience: "経理担当者向け",
    url: "https://script.google.com/a/macros/thomas-gr.com/s/AKfycbx_nsnXmtkRbF_kWlXnM2-s7LOX1xck-_9CXtYgK-QM6bkm7bmRtjGK2LE0DvHZeeCf_w/exec"
  },
  {
    name: "法人カード明細と領収書の突合",
    description: "読み取った領収書とカード明細を照合し、一致・不一致を確認します",
    audience: "",
    url: ""
  }
];