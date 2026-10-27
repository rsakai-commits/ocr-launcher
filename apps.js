/*
 * ツール一覧の設定ファイル
 * ------------------------------------------------------------
 * ツールの追加・URL変更・並び替えは、このファイルだけを編集してください。
 * 同じ category の項目は、画面上で同じ見出しの下にまとめて表示されます
 * （見出しの順番は、そのカテゴリが最初に出てきた順です）。
 *
 *   category    : 分類の見出し（例: 経理）
 *   icon        : アイコン（receipt / card / tag / leaf / sheet / doc から選ぶ）
 *   name        : 画面に出る名前
 *   description : 1行の説明（何ができるか）
 *   audience    : 対象者の表示（空文字なら表示しない）
 *   url         : 開く先の URL
 *                 ツール … Apps Script の「ウェブアプリ」URL（末尾が /exec のもの）
 *                 シートなど … そのページの URL
 *                 空文字にすると「準備中」として表示され、押せません。
 *
 * ※ このページとこのファイルは、インターネット上に公開されます。
 *   ここで表示を分けても、アクセス制限にはなりません。
 *   アクセス制限は、各ツール（Apps Script）やシートの共有設定で行ってください。
 */
window.OCR_APPS = [
  {
    category: "経理",
    icon: "receipt",
    name: "役員経費精算",
    description: "役員の領収書を読み取り、月ごとのスプレッドシートに記録します",
    audience: "経理担当者向け",
    url: "https://script.google.com/a/macros/thomas-gr.com/s/AKfycbx_nsnXmtkRbF_kWlXnM2-s7LOX1xck-_9CXtYgK-QM6bkm7bmRtjGK2LE0DvHZeeCf_w/exec"
  },
  {
    category: "経理",
    icon: "card",
    name: "法人カード明細と領収書の突合",
    description: "読み取った領収書とカード明細を照合し、一致・不一致を確認します",
    audience: "",
    url: ""
  },
  {
    category: "資産管理",
    icon: "tag",
    name: "資産管理OCR",
    description: "資産ラベルを読み取り、スプレッドシートに記録します",
    audience: "棚卸し担当者向け",
    url: "https://script.google.com/a/macros/thomas-gr.com/s/AKfycbwTTD9I8xZk9bJ2um5TcJrs8SmqAeV448Tqx5d3JQH0yFhVYrJnmzj7Cc4-HAMbBgQu5g/exec"
  },
  {
    category: "植物管理",
    icon: "leaf",
    name: "植物読み取りツール",
    description: "植物の写真から状態を判定し、植物管理シートに記録します",
    audience: "",
    url: "https://script.google.com/macros/s/AKfycbxa67K0GLMAO48yNhJHXGhiFrAtRPxYOF9-76rnZPoTcQtj_4gfW_BYcwNz84NArwEnvA/exec"
  },
  {
    category: "植物管理",
    icon: "sheet",
    name: "植物管理シート",
    description: "205の植物の管理台帳（Googleスプレッドシート）を開きます",
    audience: "",
    url: "https://docs.google.com/spreadsheets/d/12WcUrpI5ovu9sh2BEoOo5qzFI2cI37OUQTNjSZ2QDrc/edit?gid=574295321#gid=574295321"
  }
];
