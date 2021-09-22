---
template: post
title: Contribution Guide
description: Jeder Beitrag zu Nuxt ist mehr als willkommen!
back: false
---

> Jeder Beitrag zu Nuxt ist mehr als willkommen!

## Fehler melden

Eine gute Möglichkeit, zum Projekt beizutragen, ist es, einen detaillierten Bericht zu schicken, wenn Sie auf ein Problem stoßen. Um die Dinge für Mitwirkende und Betreuer zu vereinfachen, verwenden wir [CMTY](https://cmty.nuxtjs.org/).

Bitte stellen Sie sicher, dass Sie ein Reproduktions-Repository oder [CodeSandBox](https://template.nuxtjs.org/) angeben, damit Fehler ohne großen Aufwand reproduziert werden können. Je besser ein Fehler reproduziert werden kann, desto schneller können wir damit beginnen, ihn zu beheben!

## Pull Requests

Wir freuen uns über Ihre Pull Requests, auch wenn es nur darum geht, einen Tippfehler zu korrigieren!

Jede signifikante Verbesserung sollte jedoch mit einem bestehenden [Feature Request](https://feature.nuxtjs.org/) oder [Bug Report](https://bug.nuxtjs.org/) verbunden werden.

### Erste Schritte

1. [Fork](https://help.github.com/articles/fork-a-repo/) die [Nuxt repository](https://github.com/nuxt/nuxt.js) zu deinem eigenen Github Account und dann [clone](https://help.github.com/articles/cloning-a-repository/) sie auf dein lokales Gerät.
2. Führe den Befehl `npm install` oder `yarn install` um alle Dependencies zu installieren.

> _Beachten Sie, dass sowohl **npm** als auch **yarn** die Installation von Abhängigkeiten vergessen könnten. Um dies zu beheben, können Sie entweder den Ordner "node_modules" in Ihrer Beispielanwendung löschen und erneut installieren oder eine lokale Installation der fehlenden Dependencies durchführen._

> Wenn Sie eine Depenency hinzufügen, verwenden Sie bitte `yarn add`. Die Datei "yarn.lock" ist die Quelle für alle Nuxt-Dependencies.

### Setup

Bevor Sie Tests durchführen, vergewissern Sie sich, dass alle Dependencies erfüllt sind und erstellen Sie alle Packages:

```sh
yarn
yarn build
```

### Test Struktur

Eine großartige Pull Request, egal ob sie eine Fehlerbehebung oder eine neue Funktion enthält, beinhaltet oft auch Tests. Um gute Tests zu schreiben, wollen wir unsere Teststruktur erklären:

#### Fixtures

Die Fixtures (zu finden unter `tests/fixtures`) enthalten mehrere Nuxt-Anwendungen. Um die Build-Zeit so kurz wie möglich zu halten, bauen wir nicht für jeden Test eine eigene Nuxt-Anwendung. Stattdessen werden die Fixtures gebaut (`yarn test:fixtures`), bevor die eigentlichen Unit-Tests ausgeführt werden.

Bitte stellen Sie sicher, dass Sie **eine Änderung** oder **eine neue Fixture** hinzufügen, wenn Sie eine Pull Request einreichen, um die Änderungen korrekt wiederzugeben (falls zutreffend).

Vergessen Sie auch nicht, eine Fixture **neu zu erstellen**, nachdem Sie sie geändert haben, indem Sie den entsprechenden Test mit `jest test/fixtures/my-fixture/my-fixture.test.js` ausführen!

#### Unit tests

Die Unit-Tests sind in `tests/unit` zu finden und werden nach dem Bauen der Fixtures ausgeführt. Für jeden Test wird ein neuer Nuxt-Server verwendet, so dass kein gemeinsamer Zustand (außer dem Anfangszustand aus dem Build-Schritt) vorhanden ist.

Nachdem Sie Ihre Unit-Tests hinzugefügt haben, können Sie sie direkt ausführen:

```sh
jest test/unit/test.js
```

Oder Sie können die gesamte Unit-Test-Suite ausführen:

```sh
yarn test:unit
```

Bitte beachten Sie auch hier, dass Sie möglicherweise Ihre Fixtures vorher builden müssen!

### Änderungen testen

Während der Arbeit an Ihrer PR werden Sie wahrscheinlich überprüfen wollen, ob Ihr Fixture korrekt eingerichtet ist oder Ihre aktuellen Änderungen debuggen.

Dazu können Sie das Nuxt-Script selbst verwenden, um zum Beispiel Ihr Fixture oder eine Beispielanwendung zu starten:

```sh
yarn nuxt examples/your-app
yarn nuxt test/fixtures/your-fixture-app
```

> `npm link` könnte auch (und tut es bis zu einem gewissen Grad) für diesen Zweck funktionieren, aber es ist bekannt dafür, dass es einige Probleme gibt. Deshalb empfehlen wir, `yarn nuxt` direkt aufzurufen, um Beispiele auszuführen.

### Beispiele

Wenn Sie an einer größeren Funktion arbeiten, legen Sie bitte eine Beispiel-App in `examples/` an. Dies wird sehr helfen, Änderungen zu verstehen und hilft auch Nuxt-Benutzern, die Funktion, die Sie gebaut haben, im Detail zu verstehen.

### Linting

Wie Sie vielleicht schon bemerkt haben, verwenden wir ESLint, um einen Code-Standard durchzusetzen. Bitte führen Sie `yarn lint` aus, bevor Sie Ihre Änderungen committen, um zu überprüfen, ob der Codestil korrekt ist. Wenn nicht, können Sie `yarn lint --fix` oder `npm run lint -- --fix` (kein Tippfehler!) verwenden, um die meisten Stiländerungen zu korrigieren. Wenn noch Fehler vorhanden sind, müssen Sie diese manuell korrigieren.

### Dokumentation

Wenn Sie eine neue Funktion hinzufügen, oder das Verhalten von Nuxt in irgendeiner anderen Weise verändern, werden Sie wahrscheinlich die Änderungen dokumentieren wollen. Bitte tun Sie dies mit einer Pull Request an das [docs](https://github.com/nuxt/docs/pulls) Repository. Sie müssen die Dokumentation nicht sofort erstellen (aber bitte tun Sie es, sobald Ihre Pull Request vollständig ist).

### Endgültige Checkliste

Wenn Sie Ihre Pull Request einreichen, gibt es eine einfache Vorlage, die Sie ausfüllen müssen. Bitte kreuzen Sie alle zutreffenden "Antworten" in den Checklisten an.

### Fehlersuche

#### Debugging Tests auf macOS

Die Suche nach `getPort()` zeigt, dass es verwendet wird, um neue Nuxt-Prozesse während der Tests zu starten. Es wurde beobachtet, dass es unter macOS manchmal nicht mehr funktioniert und es kann erforderlich sein, einen Port für Tests manuell zu setzen.

Ein weiteres häufiges Problem sind Nuxt-Prozesse, die bei der Ausführung von Fixture-Tests im Speicher hängen bleiben können. Ein Geisterprozess verhindert oft, dass nachfolgende Tests funktionieren. Führen Sie `ps aux | grep -i node` aus, um alle hängenden Testprozesse zu untersuchen, wenn Sie vermuten, dass dies der Fall ist.