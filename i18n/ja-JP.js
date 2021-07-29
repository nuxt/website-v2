import ja from '~docus-i18n/ja-JP'

export default {
  ...ja,
  header: {
    Docs: "ドキュメント",
    Examples: "例",
    Resources: "リソース",
    Blog: "ブログ",
    "Video Courses": "ビデオコース"
  },
  footer: {
    titles: {
      Discover: "発見",
      Help: "ヘルプ",
      Support: "サポート"
    },
    "Our team": "チーム",
    "Design Kit": "デザインキット",
    "Contact us": "コンタクト",
    "Resources": "リソース",
    "Chat with us": "チャット",
    "Contribution guide": "貢献ガイド",
    Sustainability: "持続可能性",
    Training: "トレーニング",
    newsletter: {
      title: "ニュースレターを購読する",
      description: "最新ニュース、記事、そしてリソース、毎月メールボックスに届けます。",
      form: {
        email: 'Eメール',
        subscribing: '購読中...',
        subscribe: '購読',
        already_registered: '既に登録されています',
        invalid_address: 'アドレスが不正です',
        subscribed_messages: {
          pre: '申し込みを確認するメールが送信されています。',
          confirmation: '確認済みEメール'
        }
      }
    },
    license: "NuxtJS は MIT ライセンスのオープンソースフレームワークです。"
  },
  sidebar: {
    partners: {
      title: "パートナー",
      button: "サポート"
    },
    ads: {
      fallback: {
        title: "NuxtJS はあなたが必要です！",
        description: "アドブロッカーに nuxtjs.org を許可することで、私たちの活動をサポートし、経済的な助けとなります。"
      }
    }
  },
  sustainability: {
    tiers: {
      mvp_partners: "MVP パートナー",
      partners: "パートナー",
      sponsors: "スポンサー"
    }
  },
  common: {
    an_error_occurred: 'エラーが発生しました',
    page_not_found: "探しているページを見つけることできませんでした。",
    please_define_title: 'front matter でタイトルを定義してください',
    please_define_description: 'front matter で説明を定義してください',
    search: '検索 ("/" はフォーカスを合わせるため)',
    version: 'バージョン',
    go_to: "{title}に進む",
    go_home: "ホームへ",
    read_article: "記事を読む"
  },
  iso: 'en'
}
