import fr from '~docus-i18n/fr-FR'

export default {
  ...fr,
  header: {
    Docs: "Docs",
    Examples: "Exemples",
    Resources: "Ressources",
    Modules: "Modules",
    Partners: "Partenaires",
    Blog: "Blog",
    "Video Courses": "Cours Video"
  },
  footer: {
    titles: {
      Discover: "Découvrir",
      Help: "Aide",
      Support: "Support"
    },
    "Our team": "Notre équipe",
    "Design Kit": "Design Kit",
    "Contact us": "Contactez-nous",
    "Resources": "Ressources",
    "Chat with us": "Chattez avec nous",
    "Contribution guide": "Guide de contribution",
    Sustainability: "Viabilité",
    Training: "Support",
    newsletter: {
      title: "Inscrivez vous à la newsletter",
      description: "Les dernières nouvelles, articles et ressources, envoyés mensuellement dans votre boîte mail.",
      form: {
        email: 'Email',
        subscribing: 'Inscription...',
        subscribe: 'S\'inscrire',
        already_registered: 'Vous êtes déjà inscrit(e)',
        invalid_address: 'Adresse invalide',
        subscribed_messages: {
          pre: 'Un email de confirmation de votre inscription a été envoyé',
          confirmation: 'Email confirmé'
        }
      }
    },
    license: "NuxtJS est un framework open source sous license MIT."
  },
  sidebar: {
    partners: {
      title: "Partenaires",
      button: "Nous soutenir"
    },
    ads: {
      fallback: {
        title: "NuxtJS a besoin de vous !",
        description: "En autorisant nuxtjs.org sur votre bloqueur de publicité, vous soutenez notre travail et nous aidez financièrement."
      }
    }
  },
  home: {
    discover: {
      pages: 'Pages',
      ui: 'UI',
      data: 'Data',
      modules: 'Modules',
      deployment: 'Deployment'
    },
    cli: "Depuis l'interface CLI",
    scratch: "À partir de zéro"
  },
  modules: {
    search: "Search a module (name, category, username, etc.)",
    sort_by: "Sort by",
    sort_fields: {
      downloads: "Downloads",
      stars: "Stars"
    },
    loading: "Loading...",
    error: "Une erreur est survenue lors de la récupération des modules"
  },
  resources: {
    themes: {
      get_for_it: "Achetez-le pour {price}",
      video_course: "Début du cours"
    }
  },
  sustainability: {
    tiers: {
      mvp_partners: "Partenaires MVP",
      partners: "Partenaires",
      sponsors: "Sponsors",
      donations: "Faire un don"
    },
    mvp_detail: {
      services: "Services",
      location: "Lieu",
      contact_partner: "Contacter le partenaire",
      visit_website: "Visitez le website"
    }
  },
  common: {
    an_error_occurred: "Une erreur s'est produite",
    page_not_found: 'La page est que vous demandez est introuvable...',
    please_define_title: 'Merci de définir un titre',
    please_define_description: 'Merci de définir une description',
    search: 'Rechercher',
    settings: 'Settings',
    version: 'Version',
    currently_version: 'Currently in private beta',
    back: 'Dos',
    go_to: "Visiter {title}",
    go_home: "Retourner à l'accueil",
    read_article: "Lire l'article"
  },
  iso: 'fr',
  cookies: {
    consent: "Nous utilisons des cookies pour l'analyse des utilisateurs et les améliorations sur la page !",
    linkLabel: 'En savoir plus sur les cookies',
    button: 'Accepter'
  }
}
