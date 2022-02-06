---
template: post
title: Guide de contribution
description: Toute contribution à Nuxt est plus que bienvenue !
back: false
---

> Toute contribution à Nuxt est plus que bienvenue !

## Signaler des erreurs

Une excellente façon de contribuer au projet est d'envoyer un rapport détaillé lorsque vous rencontrez un problème : [Bug report](https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=bug-report&template=bug-report.md&title=)

Veuillez vous assurer d'inclure un dépôt de reproduction ou [CodeSandBox](https://template.nuxtjs.org/) afin que les bogues puissent être reproduits sans grands efforts. Plus un bug peut être reproduit, plus vite nous pouvons commencer à le corriger !

## Pull Requests

Nous serons ravis de recevoir vos demandes de modification, même s'il s'agit simplement de corriger une coquille !

Cependant, toute amélioration significative doit être associée à une demande de [fonctionnalité](https://feature.nuxtjs.org/) ou d'un [bug report](https://bug.nuxtjs.org/).

### Pour commencer

1. [Dupliquez (Fork)](https://help.github.com/articles/fork-a-repo/) le [dépôt Nuxt](https://github.com/nuxt/nuxt.js) sur votre propre compte GitHub, puis le [cloner](https://help.github.com/articles/cloning-a-repository/) sur votre machine locale.
2. Exécutez `npm install` ou `yarn install` pour installer les dépendances.

> _Notez que **npm** et **yarn** ont été vus comme manquant l'installation des dépendances. Pour remédier à cela, vous pouvez soit supprimer le dossier `node_modules` de votre application d'exemple et l'installer à nouveau, soit faire une installation locale des dépendances manquantes._

> Si vous ajoutez une dépendance, veuillez utiliser `yarn add`. Le fichier `yarn.lock` est la source de vérité pour toutes les dépendances de Nuxt.

### Installation

Avant d'exécuter les tests, assurez-vous que toutes les dépendances ont bien été installées et vous pouvez alors construire les paquets :

```sh
yarn
yarn build
```

### Structure d'un Test

Une bonne Pull Request, qu'il s'agisse d'une correction de bogue ou d'une nouvelle fonctionnalité, comprendra souvent des tests. Pour écrire de bons tests, nous allons vous expliquer la structure attendue :

#### Fixtures

Les fixtures (trouvées sous `tests/fixtures`) contiennent plusieurs applications Nuxt. Pour que le temps de construction soit le plus court possible, nous ne construisons pas une application Nuxt par test. Au lieu de cela, les fixtures sont construites (`yarn test:fixtures`) avant d'exécuter les tests unitaires.

Veillez à **modifier** ou **ajouter une nouvelle fixture** lorsque vous soumettez une PR afin de refléter correctement les changements (si applicable).

N'oubliez pas non plus de **reconstruire** une fixture après l'avoir modifié en exécutant le test correspondant avec `jest test/fixtures/my-fixture/my-fixture.test.js`!

#### Tests unitaires

Les tests unitaires peuvent être trouvés dans `tests/unit` et seront exécutés après la construction des fixtures. Un nouveau serveur Nuxt sera utilisé pour chaque test afin qu'aucun état partagé (excepté l'état initial de l'étape de construction) ne soit présent.

Après avoir ajouté vos tests unitaires, vous pouvez les exécuter directement :

```sh
jest test/unit/test.js
```

Ou vous pouvez exécuter toute la suite de tests unitaires :

```sh
yarn test:unit
```

Encore une fois, sachez qu'il se peut que vous deviez reconstruire vos fixtures avant !

### Tester vos changements

Pendant que vous travaillez sur votre PR, vous voudrez probablement vérifier si votre fixture est configurée correctement ou déboguer vos modifications en cours.

Pour ce faire, vous pouvez utiliser le script Nuxt pour lancer, par exemple, votre fixture ou une application d'exemple :

```sh
yarn nuxt examples/your-app
yarn nuxt test/fixtures/your-fixture-app
```

> `npm link` pourrait également fonctionner pour cela (et fonctionne, dans une certaine mesure), mais il est connu pour présenter quelques problèmes. C'est pourquoi nous recommandons d'appeler directement `yarn nuxt` pour exécuter les exemples.

### Exemples

Si vous travaillez sur une fonctionnalité plus importante, veuillez mettre en place une application d'exemple dans `examples/`. Cela aidera grandement à comprendre les changements et permettra aux utilisateurs de Nuxt à comprendre la fonctionnalité que vous avez construite en profondeur.

### Linting

Comme vous l'avez peut-être déjà remarqué, nous utilisons ESLint afin de standardiser le code. Veuillez lancer `yarn lint` avant de valider vos modifications pour vérifier que le style du code est correct. Si ce n'est pas le cas, vous pouvez utiliser `yarn lint --fix` ou `npm run lint -- --fix` (sans faute de frappe !) pour corriger la plupart des changements de style. S'il reste des erreurs, vous devez les corriger manuellement.

### Documentation

Si vous ajoutez une nouvelle fonctionnalité, ou si vous modifiez le comportement de Nuxt de toute autre manière, vous voudrez probablement documenter les changements. Veuillez le faire avec une PR dans le dépôt [docs](https://github.com/nuxt/docs/pulls). Vous n'êtes pas obligé de rédiger la documentation immédiatement (mais faites-le dès que votre PR est prête).

### Liste de vérification finale

Lorsque vous soumettez votre PR, il existe un modèle simple que vous devez remplir. Veuillez cocher toutes les "réponses" appropriées dans les listes de contrôle.

### Dépannage

#### Débogage des tests sur macOS

La recherche de `getPort()` révélera qu'il est utilisé pour démarrer de nouveaux processus Nuxt pendant les tests. Il a été constaté qu'elle ne fonctionne pas toujours sous macOS et peut vous obliger à définir manuellement un port pour les tests.

Un autre problème courant est celui des processus Nuxt qui peuvent rester en mémoire lors de l'exécution des tests de fixture. Un processus fantôme empêchera souvent les tests suivants de fonctionner. Exécutez `ps aux | grep -i node` pour inspecter les processus de test suspendus si vous pensez que cela se produit.
