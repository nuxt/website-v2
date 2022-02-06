import fr from '~docus-i18n/fr-FR'

export default {
  ...fr,
  banner: {
    here: 'v3.nuxtjs.org',
    format: '{nuxt} beta is out! Discover more about it on {here}'
  },
  cookies: {
    message: "Nous utilisons des cookies pour mesurer l'audience et améliorer le site !",
    link: 'En savoir plus sur les cookies',
    button: 'Accepter'
  },
  footer: {
    newsletter: {
      title: 'Inscrivez vous à la newsletter',
      description: 'Les dernières nouvelles, articles et ressources, envoyés mensuellement dans votre boîte mail.',
      form: {
        email: 'Email',
        subscribing: 'Inscription...',
        subscribe: "S'inscrire",
        already_registered: 'Vous êtes déjà inscrit(e)',
        invalid_address: 'Adresse invalide',
        subscribed_messages: {
          error: "Une erreur s'est produite lors de l'envoi de l'e-mail de confirmation",
          pre: 'Un email de confirmation de votre inscription a été envoyé',
          confirmation: 'Email confirmé'
        }
      }
    },
    license: 'Nuxt est un framework open source sous license MIT.'
  },
  sidebar: {
    ads: {
      fallback: {
        title: 'Nuxt a besoin de vous !',
        description:
          'En autorisant nuxtjs.org sur votre bloqueur de publicité, vous soutenez notre travail et nous aidez financièrement.'
      }
    }
  },
  home: {
    discover: {
      pages: 'Pages',
      ui: 'UI',
      data: 'Data',
      modules: 'Modules',
      deployment: 'Déploiement'
    },
    cli: "Depuis l'interface CLI",
    scratch: 'À partir de zéro'
  },
  modules: {
    search: "Chercher un module (nom, catégorie, nom d'utilisateur, etc.)",
    sort_by: 'Trier par',
    loading: 'Chargement...',
    error: 'Une erreur est survenue lors de la récupération des modules'
  },
  resources: {
    themes: {
      get_for_it: 'Achetez-le pour {price}',
      video_course: 'Début du cours'
    }
  },
  sustainability: {
    tiers: {
      mvp_partners: 'Partenaires MVP',
      partners: 'Partenaires',
      sponsors: 'Sponsors',
      donations: 'Faire un don'
    },
    mvp_detail: {
      services: 'Services',
      location: 'Lieu',
      contact_partner: 'Contact {partner}',
      follow_partner: 'Suivez les actualités de {partner}',
      resources: 'Ressources',
      join_us: 'Nous rejoindre',
      they_will_get_back_to_you: 'Ils vous recontacteront prochainement.',
      find_them_on_the_web: 'Trouvez-les sur le web.',
      first_name: 'Prénom',
      last_name: 'Nom',
      company_name: 'Entreprise',
      email: 'Email',
      message: 'Message',
      submit: 'Envoyer'
    }
  },
  support: {
    confirm_sending: 'Message envoyé au support technique',
    error_sending: "Erreur de l'envoi",
    invalid_adress: 'Addresse invalide'
  },
  showcases: {
    loading: 'Chargement...',
    chrome_extension: 'Extension Chrome',
    firefox_extension: 'Extension Firefox',
    categories: {
      Featured: 'Featured',
      'E-Commerce': 'E-Commerce',
      News: 'News',
      Government: 'Gouvernement',
      Sport: 'Sport',
      Education: 'Éducation',
      Entertainment: 'Divertissement',
      Travel: 'Voyage',
      Finance: 'Finance',
      Tech: 'Tech',
      Business: 'Business'
    }
  },
  releases: {
    version: 'Version',
    released_on: 'Sortie le {datetime}'
  },
  partners: {
    become_partner: 'Devenez partenaire',
    contact_success: 'Your request has been sent'
  },
  translated_pages: {
    title: 'Page traduite',
    content_outdated: 'Le contenu de cette page peut être déprécié.',
    read_original_page: 'Lire la page originale',
    contribute: 'Contribuer à cette traduction'
  },
  theme_mode: {
    system: 'Système',
    light: 'Clair',
    dark: 'Sombre'
  },
  common: {
    an_error_occurred: "Une erreur s'est produite",
    page_not_found: 'La page est que vous demandez est introuvable...',
    please_define_title: 'Merci de définir un titre',
    please_define_description: 'Merci de définir une description',
    search: 'Rechercher',
    settings: 'Réglages',
    version: 'Version',
    currently_version: 'Actuellement en beta privée',
    back: 'Retour',
    go_to: 'Visiter {title}',
    go_home: "Retourner à l'accueil",
    read_article: "Lire l'article",
    days: 'jours',
    hours: 'heures',
    minutes: 'minutes',
    seconds: 'secondes',
    copied: 'Copié',
    email_address_copied: 'Adresse email copiée dans la presse papier',
    watch_video: 'Regarder',
    multiple_authors: 'Plusieurs auteurs',
    download: 'Téléchargement',
    downloads: 'Téléchargements',
    star: 'Star',
    stars: 'Stars'
  },
  iso: 'fr'
}
