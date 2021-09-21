import fr from '~docus-i18n/fr-FR'

export default {
  ...fr,
  banner: {
    here: 'here',
    format: '{nuxt} is coming... Discover more about it {here} !'
  },
  footer: {
    titles: {
      Discover: 'Découvrir',
      Help: 'Aide',
      Support: 'Support'
    },
    'Our team': 'Notre équipe',
    'Design Kit': 'Design Kit',
    'Contact us': 'Contactez-nous',
    Resources: 'Ressources',
    'Chat with us': 'Chattez avec nous',
    'Contribution guide': 'Guide de contribution',
    Sustainability: 'Viabilité',
    Training: 'Support',
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
          pre: 'Un email de confirmation de votre inscription a été envoyé',
          confirmation: 'Email confirmé'
        }
      }
    },
    license: 'Nuxt est un framework open source sous license MIT.'
  },
  sidebar: {
    partners: {
      title: 'Partenaires',
      button: 'Nous soutenir'
    },
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
    sort_fields: {
      downloads: 'Téléchargements',
      stars: 'Stars'
    },
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
      contact_partner: 'Contacter le partenaire',
      visit_website: 'Visitez le website'
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
    released_on: 'Sortie le'
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
    watch_video: 'Regarder'
  },
  iso: 'fr',
  cookies: {
    consent: "Nous utilisons des cookies pour l'analyse des utilisateurs et les améliorations sur la page !",
    linkLabel: 'En savoir plus sur les cookies',
    button: 'Accepter'
  }
}
