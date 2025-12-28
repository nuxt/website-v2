import tw from '~docus-i18n/zh-TW'

export default {
  ...tw,
  banner: {
    here: 'v3.nuxtjs.org',
    format: '{nuxt} 已發布！前往 {here} 以了解詳情。'
  },
  cookies: {
    message: '我們使用 Cookies 進行使用者分析及頁面改進！',
    link: '了解 Cookies',
    button: '知道了'
  },
  footer: {
    newsletter: {
      title: '電子報',
      description: '每月寄送最新消息、文章和資源到您的收件匣。',
      form: {
        email: '電子郵件地址',
        subscribing: '正在訂閱...',
        subscribe: '訂閱',
        already_registered: '您已經註冊過了',
        invalid_address: '電子郵件地址無效',
        subscribed_messages: {
          error: '傳送確認信時發生錯誤',
          pre: '已將確認信傳送至您的信箱',
          confirmation: '電子郵件地址已確認'
        }
      }
    },
    license: 'Nuxt 是採用 MIT 授權的開源框架。'
  },
  sidebar: {
    ads: {
      fallback: {
        title: 'Nuxt 需要您！',
        description:
          'By allowing nuxtjs.org on your Ad-Blocker, you support our work and help us financially. 在您的廣告過濾器中允許 nuxtjs.org，'
      }
    }
  },
  home: {
    discover: {
      pages: '頁面',
      ui: '介面',
      data: '資料',
      modules: '模組',
      deployment: '部屬'
    },
    cli: '使用 CLI',
    scratch: '手動安裝'
  },
  modules: {
    search: '搜尋模組 (名稱、類別、使用者名稱...)',
    sort_by: '排序方式',
    loading: '載入中...',
    error: '擷取模組時發生錯誤。'
  },
  resources: {
    themes: {
      get_for_it: '以 {price} 購買',
      video_course: '開始課程'
    }
  },
  sustainability: {
    tiers: {
      mvp_sponsors: 'MVP 贊助者',
      partners: '合作夥伴',
      sponsors: '贊助者',
      donations: '贊助'
    },
    mvp_detail: {
      services: '服務',
      location: '地點',
      contact_partner: '聯繫 {partner}',
      follow_partner: '追蹤 {partner} 的活動',
      resources: '資源',
      join_us: '加入我們',
      they_will_get_back_to_you: '他們會盡快回覆您。',
      find_them_on_the_web: '在網路上尋找它們。',
      first_name: '名稱',
      last_name: '姓氏',
      company_name: '公司名稱',
      email: 'Email',
      message: '訊息',
      submit: '送出'
    }
  },
  support: {
    confirm_sending: '已將訊息傳送至技術支援',
    error_sending: '傳送時發生錯誤',
    invalid_adress: '地址無效'
  },
  showcases: {
    loading: '載入中...',
    chrome_extension: 'Chrome 擴充功能',
    firefox_extension: 'Firefox 擴充功能',
    categories: {
      Featured: '精選',
      'E-Commerce': '電商',
      News: '新聞',
      Government: '政府',
      Sport: '運動',
      Education: '教育',
      Entertainment: '娛樂',
      Travel: '旅遊',
      Finance: '金融',
      Tech: '科技',
      Business: '商務'
    }
  },
  releases: {
    version: '版本',
    released_on: '於 {datetime} 發布'
  },
  partners: {
    become_partner: '成為合作夥伴',
    contact_success: '已傳送您的請求'
  },
  translated_pages: {
    title: '已翻譯的頁面',
    content_outdated: '此頁面的內容可能已過時。',
    read_original_page: '閱讀原始頁面',
    contribute: '改進此頁面的翻譯'
  },
  theme_mode: {
    system: '系統',
    light: '亮色',
    dark: '暗色'
  },
  common: {
    an_error_occurred: '發生錯誤',
    page_not_found: '我們找不到您所要的頁面。',
    please_define_title: '請在正文前頁中定義標題',
    please_define_description: '請在正文前頁中定義說明',
    search: '搜尋 ("/" 以聚焦到輸入框)',
    settings: '設定',
    version: '版本',
    currently_version: '目前處於封測階段',
    back: '返回',
    go_to: '前往 {title}',
    go_home: '返回主頁',
    read_article: '閱讀文章',
    days: '天',
    hours: '小時',
    minutes: '分',
    seconds: '秒',
    copied: '已複製',
    email_address_copied: '已將電子郵件地址複製至剪貼簿',
    watch_video: '觀看影片',
    multiple_authors: '多名作者',
    download: '下載',
    downloads: '下載',
    star: 'Star',
    stars: 'Stars'
  },
  iso: 'zh-TW'
}
