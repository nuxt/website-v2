module.exports = {
  common: {
    an_error_occurred: 'エラーが発生しました',
    api_page_not_found: 'API ページが見つかりません',
    please_define_title: 'Frontmatter 内の title を定義してください',
    please_define_description:
      'Frontmatter 内の description を定義してください',
    search: '検索 ("/" でフォーカス)',
    version: 'バージョン'
  },
  iso: 'ja',
  links: {
    download: 'ダウンロード',
    live_edit: 'ライブ編集'
  },
  header: {
    links: [
      {
        name: 'Guides',
        slug: 'guides',
        type: 'newDocs',
        routeName: 'guides-book-slug'
      },
      {
        name: 'Guide',
        slug: 'guide',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'API',
        slug: 'api',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Examples',
        slug: 'examples',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'FAQ',
        slug: 'faq',
        type: 'dynamic',
        routeName: 'section-slug'
      },
      {
        name: 'Resources',
        slug: 'resources',
        type: 'static'
      },
      {
        name: 'Blog',
        slug: 'blog',
        type: 'static'
      }
    ],
    search: {
      placeholder: '検索 ("/" でフォーカス)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - ユニバーサル Vue.js アプリケーション',
      description:
        'Nuxt.js はサーバーサイドレンダリングやコード分割、ホットリローディング、静的ファイル生成などを備えた Vue.js アプリケーションを構築するためのミニマルなフレームワークです！'
    },
    welcome: {
      title: '使いやすい {frameworkType} フレームワーク',
      description:
        'NuxtJS を使用し自信を持って次の Vue.js アプリケーションをビルドしましょう。ウェブ開発をシンプルかつ強力にする{openSource}フレームワークです。',
      openSource: 'オープンソース',
      get_started: 'はじめる',
      get_updates: 'Get NuxtJS updates to your inbox each month',
      video:
        '動画は {company} による提供で、彼らの {cheatSheet}は無料でダウンロードできます。.',
      cheatSheet: 'Nuxt チートシート.'
    },
    why: {
      title: 'なぜ {nuxt} なのか？',
      try_nuxtjs_online: 'Nuxt.js をオンラインで試す',
      enjoyable: {
        title: '楽しみ',
        description:
          '私たちのメインフォーカスは開発者体験です。私たちは Nuxt.js が好きで、継続的にフレームワークの改善をしているため、あなたも好きになることでしょう！{break} 魅力的な解決策や、説明的なエラーメッセージ、強力なデフォルト設定、詳細なドキュメントが待っています。もし質問や問題が発生した場合、私たちの有用なコミュニティが助けてくれるでしょう。'
      },
      modular: {
        title: 'モジュール',
        description:
          'Nuxt は強力なモジュール構造に基づいています。開発をより早く簡単にするために、50を超えるモジュールから選ぶことができます。PWA の利点を得るため、ページに Google アナリティクスを追加するため、サイトマップの生成のために車輪の再発明をする必要はありません。'
      },
      performant: {
        title: 'パフォーマンス',
        description:
          'Nuxt.js は、あなたのアプリケーションをすぐに最適化することでしょう。Vue.js と Node.js のベストプラクティスを利用することで、パフォーマンスの高いアプリケーションを構築することに最善を尽くします。 アプリケーションから不要な部分を絞りだすために、Nuxt はバンドルアナライザや多くの微調整の機会を含んでいます。'
      }
    },
    companies: {
      title: '{nuxt} を使っている企業 '
    },
    modes: {
      title: '{nuxt} のレンダリング',
      ssr: {
        title: 'サーバーサイドレンダリング',
        description:
          'Nuxt で一番人気のモードです。サーバーサイドレンダリングでは「ユニバーサル」または「アイソモーフィック」モードと呼ばれ、Node.js サーバーではピュア JavaScript の代わりに Vue コンポーネントベースの HTML をクライアントに配信するために利用しています。サーバーサイドレンダリングを利用すると従来の Vue SPA と比較し SEO が大幅に向上し、UX がよくなり、より多くの機会が増えます。{break}サーバーサイドレンダリングを自分で実装するのは非常に面倒です。Nuxt.js はそのまま利用でき、よくある落とし穴を回避します。'
      },
      spa: {
        title: 'シングルページアプリケーション（SPA）',
        description:
          'サーバーサイドレンダリングや静的サイト生成は必要ありませんが、それでも Nuxt が提供する利点から利益を得たいですか？徐々にアプリを移行し、軽量に始めたいですか？その場合従来の SPA モードがあなたに適しています。結果はあなたも知っているごく普通の Vue SPA になりますが、Nuxt の設定とフレームワーク自身の影響を受けています。'
      },
      ssg: {
        title: '静的ファイルの生成',
        description:
          '静的サイト生成は現在非常に注目されているトピックです（JAMStack として知られます）。別のフレームワークに切り替えて慣れるのに時間を費やす代わりに、なぜ一石二鳥ではいけないのでしょうか？{proverbial} Nuxt.js はあなたの Vue アプリケーションに基づく静的ウェブサイトの生成をサポートします。Nuxt はすべてのページを事前にレンダリングしてインクルードするため、サーバーは必要ありませんが SEO の利点はあるという、いいとこ取りをしています。また、作成したページを Netlify または GitHub Pages に簡単に配置できます。',
        proverbial: 'ただのことわざ'
      }
    },
    sponsors: {
      title: 'スポンサー',
      description:
        'Nuxt.js は MIT ライセンスのオープンソースプロジェクトで、完全無料で使用できます。ただし、プロジェクトの新しい機能を維持および開発するために必要な作業は、適切な資金援助なしには持続できません。もし、あなたがビジネスで営利目的の製品に Nuxt を使用しているのであれば、Nuxt の開発をサポートすることは理に適っています。サポートいただくことで、Nuxt プロジェクトを健全でアクティブに維持することができます。また、サポートにより Vue/Nuxt コミュニティに露出することで、Vue/Nuxt 開発者を引きつけやすくなります。もし、あなたが個人ユーザーで Nuxt を使用した開発を楽しんでいるのであれば、感謝の印として寄付を検討いただけると幸いです。',
      become_a_sponsor: 'スポンサーになる'
    },
    newsletter: {
      title: '{nuxt} ニュースレター',
      description:
        'コアチームとコントリビューターがキュレーションした最新の Nuxt のニュースをメールで受信できます。',
      form: {
        email: 'メールアドレス',
        subscribing: '送信中...',
        subscribe: '購読する',
        subscribed_messages: {
          pre: '購読を確認するメールを',
          post: 'に送信しました 💚'
        }
      }
    }
  },
  blog: {
    title: 'NuxtJS Blog',
    description:
      'Discover articles from the {nuxtTeam} and {ambassadors} about NuxtJS, tips and tricks included!',
    ambassadors: 'ambassadors',
    contribute: 'Caught a mistake or want to contribute to this blog post?'
  },
  guide: {
    release_notes: 'リリースノート',
    toc_title: 'On this page'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: 'Want to take a look at our new docs? Our ',
    link: 'new docs',
    msg2: 'are now in beta. Have fun!'
  },
  contribute: {
    title: 'Contributors',
    docs: '間違いを見つけた、またはドキュメントに貢献したいですか？',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: 'GitHub でこのページを編集する',
    msg1:
      'Contribution for this page is now closed. If you would like to contribute please check out our',
    link: 'new docs'
  },
  codeSandbox: {
    open: 'Open CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prologue',
      'getting-started': 'Getting Started'
    },
    api: {
      essential: 'Essential',
      pages: 'Pages',
      components: 'Components',
      utils: 'Utils',
      configuration: 'Configuration',
      programmatically: 'Programmatically',
      internals: 'Internals'
    },
    examples: {
      essentials: 'Essentials',
      customization: 'Customization',
      advanced: 'Advanced'
    },
    faq: {
      configuration: 'Configuration',
      development: 'Development',
      deployment: 'Deployment'
    },
    guides: {
      'get-started': 'Get Started',
      concepts: 'Concepts',
      features: 'Features',
      'directory-structure': 'Directory Structure',
      'configuration-glossary': 'Configuration Glossary',
      'internals-glossary': 'Internals Glossary',
      'components-glossary': 'Components Glossary'
    }
  }
}
