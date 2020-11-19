module.exports = {
  common: {
    an_error_occurred: 'エラーが発生しました',
    page_not_found: 'ページが見つかりません',
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
        name: 'Docs',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'Examples',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'FAQ',
        icon: 'resources',
        slug: 'faq'
      },
      {
        name: 'Blog',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'Video Courses',
        icon: 'video',
        href:
          'https://masteringnuxt.com?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Navbar&utm_content=prelaunch'
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
      title: '使いやすい {br} {frameworkType} フレームワーク',
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
  design: {
    meta: {
      title: 'NuxtJS Design',
      description:
        'Download NuxtJS design resources (SVG, icons, emoji and favicon).'
    },
    title: '{nuxt} Design',
    description:
      'NuxtJS is an MIT licensed open source project and completely free to use. {break} You can freely use our logos as long as you mention NuxtJS and link to nuxtjs.org.',
    other_download_message:
      'You can also download our {favicon} or our {sketch} file.'
  },
  resources: {
    meta: {
      title: 'NuxtJS Resources',
      description:
        'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.'
    },
    title: '{nuxt} Resources',
    description:
      'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.',
    themes: {
      title: 'Themes'
    },
    videos: {
      title: 'Video Courses'
    }
  },
  shop: {
    meta: {
      title: 'The NuxtJS Shop',
      description:
        'You want to support the NuxtJS project and show your love to the rest of the community? Here our products with the best quality ever!'
    },
    title: 'The {nuxt} Shop',
    description:
      'You want to support the NuxtJS project and show your love to the rest of the community?{break} Here our products with the best quality ever!',
    button: 'Coming soon'
  },
  team: {
    meta: {
      title: 'NuxtJS Team',
      description:
        'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.'
    },
    title: '{nuxt} Team',
    description:
      'The development of NuxtJS and its ecosystem is guided by an international team. We have a very active and engaged team that is constantly striving to push Nuxt forward.'
  },
  themes: {
    meta: {
      title: 'NuxtJS Themes',
      description:
        'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.'
    },
    title: '{nuxt} Themes',
    description:
      'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.',
    button: 'GET IT for'
  },
  'video-courses': {
    meta: {
      title: 'NuxtJS Video Courses',
      description:
        'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt.js Framework.'
    },
    title: '{nuxt} Video Courses',
    description:
      'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt.js Framework.',
    cta: {
      discover: 'Discover vueschool',
      start: 'START COURSE'
    }
  },
  sponsor: {
    meta: {
      title: 'Sponsor NuxtJS Development',
      description:
        'You can support NuxtJS development via different methods and ensure regular updates to the framework.'
    },
    title: 'Sponsor {nuxt} Development',
    description:
      'NuxtJS is an MIT licensed open source project and completely free to use.{break} However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.{break} You can support NuxtJS development via the following methods:',
    donations: {
      title: 'One-time donations',
      description: 'We accept donations through these channels'
    },
    pledges: {
      title: 'Recurring Pledges',
      description:
        'Recurring pledges come with exclusive perks, e.g. having your name listed in the NuxtJS GitHub repository, or have your company logo placed on this website. Become a nuxter or sponsor via {opencollective} (goes into a fund with transparent expense models supporting community efforts and events).'
    },
    become_a_sponsor: 'Become a sponsor'
  },
  support: {
    meta: {
      title: 'The NuxtJS Support',
      description:
        'Our NuxtJS team now offers official consulting services for your NuxtJS applications.'
    },
    title: 'Consulting {nuxt} Support',
    description:
      'Our {team} now offers official consulting services for your NuxtJS applications.{break} We offer different services depending of your needs, from technical support to custom development. Expect a reply within one business day, we can sign custom NDA and you can get a full refund if you are not satisfied with our service.',
    technical: {
      title: 'Technical support',
      description:
        'Get project audits, app deployments, custom development and technical support from the NuxtJS team.',
      start: 'Start chat',
      partner: {
        pre: 'We partnered with',
        post:
          'to offer these services so we can focus on helping you as fast as possible.'
      }
    },
    entreprise: {
      title: 'for enterprise',
      description:
        'NuxtJS and the maintainers of thousands of other packages are working with Tidelift to deliver one enterprise subscription that covers all of the open source you use.{break} If you want the flexibility of open source and the confidence of commercial-grade software, this is for you.',
      partner: {
        pre: 'Available as part of the',
        post: 'subscription.'
      },
      learn_more: 'Learn more',
      request_a_demo: 'Request a demo'
    }
  },
  blog: {
    meta: {
      title: 'NuxtJS Blog',
      description:
        'Discover articles from the NuxtJS team and NuxtJS Community about NuxtJS, tips and tricks included!'
    },
    title: '{nuxt} Blog',
    description:
      'Discover articles from the {nuxtTeam} and {nuxtCommunity} about NuxtJS, tips and tricks included!',
    nuxt_team: 'NuxtJS Team',
    nuxt_community: 'Nuxt.js Community',
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
  example: {
    intro: 'In this example:'
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
  },
  footer: {
    links: {
      discover: {
        title: 'Discover',
        shop: 'Our Goodies Store',
        consulting: 'Training & consultancy',
        sponsorNuxt: 'Sponsoring & donations'
      },
      about: {
        title: 'About',
        team: 'Our team',
        design: 'Design kit',
        contact: 'Contact us'
      },
      support: {
        title: 'Support',
        resources: 'Resources',
        discord: 'Chat with us',
        contributionGuide: 'Contribution guide'
      }
    }
  },
  cookies: {
    consent: 'We use Cookies for user analysis and on-page improvements!',
    linkLabel: 'Learn about cookies',
    button: 'Got it'
  }
}
