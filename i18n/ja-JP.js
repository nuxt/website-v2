import ja from '~docus-i18n/ja-JP'

export default {
  ...ja,
  banner: {
    here: 'v3.nuxtjs.org',
    format: '{nuxt} ベータがリリースされました！ {here} で詳細について見れます。'
  },
  cookies: {
    message: 'ユーザー分析とページ上の改善の目的で Cookie を使っています！',
    link: 'Cookie の詳細',
    button: '分かりました'
  },
  footer: {
    newsletter: {
      title: 'ニュースレターを購読する',
      description: '最新ニュース、記事、そしてリソース、毎月メールボックスに届けます。',
      form: {
        email: 'Eメール',
        subscribing: '購読中...',
        subscribe: '購読',
        already_registered: '既に登録されています',
        invalid_address: 'アドレスが不正です',
        subscribed_messages: {
          error: '確認メールを送っている間にエラーが発生しました。',
          pre: '申し込みを確認するメールが送信されています。',
          confirmation: '確認済みEメール'
        }
      }
    },
    license: 'Nuxt は MIT ライセンスのオープンソースフレームワークです。'
  },
  sidebar: {
    ads: {
      fallback: {
        title: 'Nuxt はあなたが必要です！',
        description: 'アドブロッカーに nuxtjs.org を許可することで、私たちの活動をサポートし、経済的な助けとなります。'
      }
    }
  },
  home: {
    discover: {
      pages: 'ページ',
      ui: 'UI',
      data: 'データ',
      modules: 'モジュール',
      deployment: 'デプロイ'
    },
    cli: 'CLI',
    scratch: 'スクラッチ'
  },
  modules: {
    search: 'モジュールを検索 (名前、カテゴリ、ユーザー名、など)',
    sort_by: 'ソート方法',
    loading: 'ロード中...',
    error: 'モジュール情報の取得中にエラーが発生しました'
  },
  resources: {
    themes: {
      get_for_it: '{price} で手に入れる',
      video_course: 'コースを開始する'
    }
  },
  sustainability: {
    tiers: {
      mvp_sponsors: 'MVP パートナー',
      partners: 'パートナー',
      sponsors: 'スポンサー',
      donations: '寄付'
    },
    mvp_detail: {
      services: 'サービス',
      location: '場所',
      contact_partner: 'Contact {partner}',
      follow_partner: "Follow {partner}'s activities",
      resources: 'Resources',
      join_us: 'Join us',
      they_will_get_back_to_you: 'They will get back to you asap.',
      find_them_on_the_web: 'Find them on the web.',
      first_name: 'First name',
      last_name: 'Last name',
      company_name: 'Company name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit'
    }
  },
  support: {
    confirm_sending: 'テクニカルサポートにメッセージを送信する',
    error_sending: '送信中にエラーが発生しました。',
    invalid_adress: '不正なアドレスです。'
  },
  showcases: {
    loading: '詠み込み中...',
    chrome_extension: 'Chrome 拡張',
    firefox_extension: 'Firefox 拡張',
    categories: {
      Featured: '特集',
      'E-Commerce': 'E-コマース',
      News: 'ニュース',
      Government: '政治',
      Sport: 'スポーツ',
      Education: '教育',
      Entertainment: '娯楽',
      Travel: '旅行',
      Finance: '金融',
      Tech: '技術',
      Business: 'ビジネス'
    }
  },
  releases: {
    version: 'バージョン',
    released_on: 'リリース日 {datetime}'
  },
  partners: {
    become_partner: 'パートナーになる',
    contact_success: 'Your request has been sent'
  },
  translated_pages: {
    title: '翻訳されたページ',
    content_outdated: 'このページのコンテンツは古い可能性があります。',
    read_original_page: '原文を読む',
    contribute: 'このページの翻訳を改善する'
  },
  theme_mode: {
    system: 'システム',
    light: '明るい',
    dark: '暗い'
  },
  common: {
    an_error_occurred: 'エラーが発生しました',
    page_not_found: '探しているページを見つけることできませんでした。',
    please_define_title: 'front matter でタイトルを定義してください',
    please_define_description: 'front matter で説明を定義してください',
    search: '検索 ("/"を押すとここにフォーカスします)',
    settings: '設定',
    version: 'バージョン',
    currently_version: '現在プライベートベータ',
    back: '戻る',
    go_to: '{title}に進む',
    go_home: 'ホームへ',
    read_article: '記事を読む',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    copied: 'Copied',
    email_address_copied: 'Email address copied to clipboard',
    watch_video: 'Watch video',
    multiple_authors: 'Multiple Authors',
    download: 'Download',
    downloads: 'ダウンロード数',
    star: 'Star',
    stars: 'スター数'
  },
  iso: 'en'
}
