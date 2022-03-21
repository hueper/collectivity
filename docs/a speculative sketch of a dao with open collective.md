---
title:
tags:
  - Ethereum
  - Widerspruch
---

# a speculative sketch of a dao with open collective

[_a speculative sketch of a dao with open collective_](https://www.radicalxchange.org/media/blog/a-speculative-sketch-of-a-dao-with-open-collective/) ist ein Artikel von [[Matt Prewitt]], der am 21. Januar 2022 auf der Webseite von [[RadicalXChange]] veröffentlicht wurde, in dem Prewitt skizziert, wie [[die Kollektivität der Kollektivität open collective#Motivation von Open Collective|Open Collective]] als [[DAO]] organisiert werden könnte.

Prewitt schreibt einleitend, dass es sich bei _a speculative sketch of a dao with open collective_ nicht um ein White Paper handelt, sondern lediglich um eine Skizze, die aus Gesprächen zwischen RadicalXChange und Open Collective hervorging. Wie der Titel schon sagt, beschreibt Prewitt in dem Artikel "a possible new system of DAO governance".

## Uniswap und Plutokratie
Bevor Prewitt zu seinem "Sketch of a DAO" kommt, beleuchtet er [[Uniswap]] und stellt dabei eine Uniswap-spezifische Problematik, die sich aus der "Uniswap-style tokenification of governance" ergebe, dar. Laut Prewitt besteht bei Uniswap langfristig die Gefahr einer [[Regime|Plutokratie]], weil "without an identity system tracking who owns the tokens representing governance power, Uniswap’s DAO and every similar one can be influenced fairly directly, with the power of money" (Prewitt [[Literatur|2022]], Online). Prewitt bezieht sich dabei auf einen Artikel von [[Vitalik Buterin]] - _[Moving beyond coin voting governance](https://vitalik.ca/general/2021/08/16/voting3.html)_ - und sagt: "Token voting systems without identity can seem to work well for a while, but we shouldn’t forget that they will converge, sooner or later, with plutocracy." ([[Literatur|ebd.]], Online)

## Identität und Machtkonzentration
Damit Open Collective als DAO nicht langfristig unter die Herrschaft des Geldes gerät, wird nun in der Folge eine spekulative DAO skizziert, die sich durch folgende Charakteristika auszeichnet:
> **The first consideration must be identity**. Any token-voting system must have an identity system that formally distinguishes between different agents, or it will slide toward plutocracy. [...]
> **A second important consideration is power concentration**. When we tokenize governance, even with a good identity system in place, we open up the possibility that lots of power will end up in a few hands.
> 
> -- ([[Literatur|ebd.]], Online)

Um einer Machtkonzentration entgegenzuwirken werden drei verschiedene _design patterns_ vorgestellt:
> The **first** is [[partial common ownership]]: assets whose value recycles into the community and doesn’t unduly build upon itself. The **second** is periodicity. This is the ancient idea behind debt jubilees: every now and then, to ensure rough egalitarianism in a system where exchange is occurring, it makes sense to wipe the slates clean. Juice cleanses also work on this principle. The **third** pattern is QV (quadratic voting).
> 
> -- ([[Literatur|ebd.]], Online)

## Außerhalb der DAO oder Was wird nicht skizziert
Auffällig ist an dem Artikel, dass kein einziges Mal explizit eine Verbindung zwischen der spekulativen DAO und [[Ethereum]] hergestellt wird. Der Begriff Ethereum taucht nicht auf. Auch wenn durch die [[RadicalxChange#Mitglieder|Beteiligten an RadicalxChange]] ein Bezug zu Ethereum offensichtlich ist, lässt sich die tatsächlich vorausgesetzte Eingebundenheit der Spekulation in das Ethereum Protokoll auch mit einem Blick in das Repository auf Github, in dem die "open source implementation of Partial Common Ownership for non-fungible tokens" (https://github.com/721labs/partial-common-ownership) erarbeitet wird (auf das sich Prewitt auch bezieht), nachverfolgen:
> This project establishes standard, open source implementations of Partial Common Ownership of Ethereum ERC721 "NFTs". It aims to be a mature, secure, and all-encompassing starting point for any developer who wants to implement Partial Common Ownership.
> 
> -- (Holley [[Literatur|2022]], Online)

## The dark side of Ethereum
Vor dem Hintergrund der Ereignisse um den [[DAO fork]] und der Tatsache, dass es sich bei Ethereum um ein plutokratisches System handelt, in dem Verschleierung von Identitäten und die Etablierung einer Machtkonzentration [[Regime#Archein|von Anfang an]] Teil des Designs waren[^1], mutet es doch _widersprüchlich_ an, auf diesem Grund eine Organisation errichten zu wollen, die sich dezidiert gegen eine Plutokratie ausspricht.

Die Debatte um verschleierte Identitäten und Machtverteilung wird am 24.02.2022 auch öffentlicher - auf Twitter - sichtbar, wenn sich aus Buterins Behauptung "[[Ethereum is neutral]]" ein Austausch zwischen [[E Glen Weyl|E. Glen Weyl]] und weiteren Twitter-Accounts ergibt.

Hieraus ergibt sich die Frage, warum bzw. wann Ethereum für DAOs ein Problem ist oder wird, selbst wenn es möglich scheint eine DAO so zu entwickeln, dass eine Herrschaft des Geldes in ihr ausgeschlossen wird. Eine Antwort darauf geben Nachforschungen zu dem [[DAO fork]], die im Rahmen dieser Arbeit leider nur als Beitrag in Form von _Zusatzinformationen_ einfließen können.

Der DAO fork war - kurz umrissen - eine Änderung des Ethereum Protokolls (ein Update der Software), dem ein Konflikt vorausgegangen war. Der Konflikt entzündete sich daran, dass ein Fehler in dem Code der zu diesem Zeitpunkt größten DAO ausgenutzt wurde, wodurch eine beträchtliche Menge von Ether, 14% des sich damals im Umlauf befindlichen Gesamtvolumens[^2], extrahiert wurde. Nach Durchführung des DAO [[hard fork]] war die betreffende DAO, _the DAO_, aus dem Ethereum Netzwerk entkoppelt und damit nicht mehr existent. Aus Elaine Ou's Blogpost _Stick a Fork in Ethereum_ wird der Konflikt um die Perspektive auf den Fehler klar:
> Earlier, I said I want the DAO attacker to keep my ether. Self-enforcing contracts are supposed to turn us into sovereign individuals. That means we accept the consequences of our actions, not escape to some alternate reality.[^3]

Matt Levine fragt in seinem Artikel _Blockchain Company's Smart Contracts Were Dumb_ vom 17. Juni 2016: "What matters more: What the code said or what people thought it said?" [^4]

## Leseempfehlung
[[multitude-leviathan-dao]]

## Fußnoten
[^1] Joseph Lubin, Mitbegründer von Ethereum und ehemaliger Goldman-Sachs-Manager, spricht bei einem Meetup am 17. März 2014 "on fees in Ethereum and related economic topics". Lubin wird dort gefragt: "Will there be a limit on the amount that a person can invest in Ethereum?" Lubins' Antwort ist: "A person can buy from any number of different identities. We may limit the unit size of a sale, just to make it easier to disguise. Let's say, if you are a [[Ether whales|whale]] and you want some privacy you can buy 50.000 units [...]. So if you are a whale, if you're planning on investing several million US dollars worth then you can do that in multiple identities. We will ask for real world identity in the form of email address, so that we can make sure everything works smoothly through the process but we won't be requiring it. So we can create a pseudonymous email and identity and purchasing then." https://youtu.be/qgdHPxl6W64?t=3086
[^2]: vgl. https://www.gemini.com/cryptopedia/the-dao-hack-makerdao#section-the-dao-hack
[^3]: vgl. https://elaineou.com/2016/07/18/stick-a-fork-in-ethereum/
[^4]: vgl. https://www.bloomberg.com/opinion/articles/2016-06-17/blockchain-company-s-smart-contracts-were-dumb

[//begin]: # "Autogenerated link references for markdown compatibility"
[RadicalXChange]: RadicalxChange.md "RadicalxChange"
[die Kollektivität der Kollektivität open collective#Motivation von Open Collective|Open Collective]: <die Kollektivität der Kollektivität open collective.md> "die Kollektivität der Kollektivität Open Collective"
[DAO]: DAO.md "DAO"
[Uniswap]: Uniswap.md "Uniswap"
[Regime|Plutokratie]: Regime.md "Herrschaft / Regime / Ideologie"
[Literatur|2022]: Literatur.md "Literatur"
[Vitalik Buterin]: <Vitalik Buterin.md> "Vitalik Buterin"
[Literatur|ebd.]: Literatur.md "Literatur"
[partial common ownership]: <partial common ownership.md> "Partial common ownership"
[Ethereum]: Ethereum.md "Ethereum"
[RadicalxChange#Mitglieder|Beteiligten an RadicalxChange]: RadicalxChange.md "RadicalxChange"
[DAO fork]: <DAO fork.md> "DAO fork"
[Regime#Archein|von Anfang an]: Regime.md "Herrschaft / Regime / Ideologie"
[Ethereum is neutral]: <Ethereum is neutral.md> "Ethereum ist neutral"
[E Glen Weyl|E. Glen Weyl]: <E Glen Weyl.md> "E. Glen Weyl"
[hard fork]: <hard fork.md> "hard fork"
[multitude-leviathan-dao]: multitude-leviathan-dao.md "multitude-leviathan-dao"
[Ether whales|whale]: <Ether whales.md> "Ether whales"
[//end]: # "Autogenerated link references"