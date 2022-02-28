# DAO fork

> Picture this: A thief steals millions of dollars by hacking into an investment fund. What if you could just hit the undo button and get that money back? - [How a $64M hack changed the fate of Ethereum, Bitcoin's closest competitor](https://www.cbc.ca/news/science/ethereum-hack-blockchain-fork-bitcoin-1.3719009)

## What was [[the DAO]] #hack?
> On June 17, 2016, the DAO was subjected to an attack exploiting a combination of vulnerabilities, including the one concerning recursive calls, that resulted in the transfer of 3.6 million Ether - around a third of the 11.5 million Ether that had been committed to The DAO - valued at the time at around $50M. The funds were moved into an account subject to a 28-day holding period under the terms of the Ethereum smart contract so were not actually gone.
>
> Members of The DAO and the Ethereum community debated what to do next, with some calling the attack a valid but unethical maneuver, others calling for the Ether to be re-appropriated, and some calling for The DAO to be shut down. Eventually, the Ethereum network was hard forked to move the funds in The DAO to a recovery address where they could be exchanged back to Ethereum by their original owners. However, some continued to use the original unforked Ethereum blockchain, now called Ethereum Classic. 
[The_DAO_(organization)](https://en.wikipedia.org/wiki/The_DAO_(organization))

> The DAO had become such a heavily invested project that its contracts contained approximately 14% of all ether (ETH) in circulation at the time. 
[Gemini: What Was The DAO?](https://www.gemini.com/cryptopedia/the-dao-hack-makerdao#section-the-dao-hack)

> The DAO controlled $150M worth of ether, and an attacker exploited a bug to extract $60M of that. This current reality is unacceptable to many people.
> The only way to get the ether back is to create an alternate reality where the attacker does not have anything.
[Stick a Fork in Ethereum](https://elaineou.com/2016/07/18/stick-a-fork-in-ethereum/)

> Blockchain Company's Smart Contracts Were Dumb
> What matters more: What the code said or what people thought it said?
[Blockchain Company's Smart Contracts Were Dumb](https://www.bloomberg.com/opinion/articles/2016-06-17/blockchain-company-s-smart-contracts-were-dumb)

### Who hacked The DAO? (Und warum ist das (un)interessant?)
Am 22.02.2022 schreibt [[Laura Shin]] in einem Artikel auf forbes.com:
> Who hacked The DAO? My exclusive investigation, built on the reporting for my new book, The Cryptopians: Idealism, Greed, Lies, and the Making of the First Big Cryptocurrency Craze, appears to point to Toby Hoenisch, a 36-year-old programmer who grew up in Austria and was living in Singapore at the time of the hack. [...] Last year, as I was working on my book, my sources and I, utilizing (among other things), a powerful and previously secret forensics tool from crypto tracing firm [[Chainalysis]], came to believe we had figured out who did it. Indeed, the story of The DAO and the six-year quest to identify the hacker, shows a lot about just how far the crypto world and the technology for tracking transactions have both come since the first crypto craze. Today, blockchain technology has gone mainstream. But as new applications arise, one of the first uses of crypto — as an anonymity shield — is in retreat, thanks to both regulatory pressure and the fact that transactions on public blockchains are traceable.
[Exclusive: Austrian Programmer And Ex Crypto CEO Likely Stole $11 Billion Of Ether](https://www.forbes.com/sites/laurashin/2022/02/22/exclusive-austrian-programmer-and-ex-crypto-ceo-likely-stole-11-billion-of-ether/)

### Ethereum.org über den DAO hack
Über den DAO fork heißt es auf der Webseite [ethereum.org][eth-history]:
> The DAO fork was in response to the 2016 DAO attack where an insecure DAO contract was drained of over 3.6 million ETH in a hack. The fork moved the funds from the faulty contract to a new contract with a single function: withdraw. Anyone who lost funds could withdraw 1 ETH for every 100 DAO tokens in their wallets.
> 
> This course of action was voted on by the Ethereum community. Any ETH holder was able to vote via a transaction on a voting platform. The decision to fork reached over 85% of the votes.
> 
> Some miners refused to fork because the DAO incident wasn't a defect in the protocol. They went on to form Ethereum Classic.

In zitiertem Abschnitt wird auf die Voting Platform [CarbonVote][carbonvote-website] verwiesen, die aktuell (Stand: 21.02.2022) nicht erreichbar ist. Der [Quellcode der Webseite](https://github.com/consenlabs/carbonvote) kann aber auf GitHub eingesehen werden. Dort ist auch zu sehen, dass der letzte _commit_ vom 22. Juli 2016 stammt. Über archive.org lassen sich [verschiedene Screenshots der Webseite](https://web.archive.org/web/2021*/http://v1.carbonvote.com/) aus dem Zeitraum von 2017 bis Ende 2021 ansehen.

Dabei fällt zweierlei auf:
1. Auf, bzw. über die Webseite wurde zu keinem Zeitpunkt eine andere Wahl abgehalten bzw. beworben, als die Wahl über den DAO fork. Dies lässt sich sowohl über die Screenshots von archive.org, als auch über die _commits_ im Repository auf GitHub nachvollziehen. Es handelt sich also nicht um eine Voting Platform, wie auf [ethereum.org][eth-website] dargestellt, sondern um eine statische Webseite, die sich ausschließlich auf den DAO fork bezieht. Daraus ergeben sich zwei Fragen:
   1. Weshalb wird auf [ethereum.org][eth-website] das Wording _voting platform_ verwendet?
   2. Wie und von wem werden Entscheidungen darüber gefällt, wie sich [[Ethereum]] entwickelt?
2. In dem Commit "[Update Content - ec47bd18c0330232b3bb44109fb9ccb26d32c9e7](https://github.com/consenlabs/carbonvote/commit/ec47bd18c0330232b3bb44109fb9ccb26d32c9e7)" vom 5. Juli 2016 von [Daniel Lv - lgn21st](https://github.com/lgn21st) werden Löschungen (_deletions_) und Hinzufügungen (_additions_) zu der Datei _views/index.ejs_ farblich markiert.
   
   Während die Hinzufügungen weitgehend dem Text entsprechen, der auch in den Screenshots von archive.org zu sehen ist, scheint in den Löschungen (also die frühere Version der [Webseite][carbonvote-website]) fast schon eine politische Agenda durch:
   
   > ``<h3>CarbonVote - Time to Show Hands</h3>``
    > ``<pre>``
    > Hi Ethereum Community, and by extension, the Blockchain community,
    > 
    > It has been a very rough month for everyone, and we mean everyone, who’s involved in the blockchain community because of what happened on ethereum, with The DAO.
    > 
    > Every new technology goes through major setbacks, until it becomes a standard. This is not the first and it won’t be the last for some to question and for us to polish the security and of ethereum, blockchain, and smart contracts we write and use on the platform. The discussions, segregated on all sorts of platforms because of the new media and in different regions because of geography, on facts about what really happened, the causes and consequences, polices about what to do next and how to achieve the goal, and most importantly, the values everyone in the community holds are important for the technology, the community and the world (if we are ever allowed to be so ambitious) to improve to what’s the most ideal.
    > 
    > What is the most ideal? We agreed on a clear direction but a vague vision. This has always been meaning to be a long process, but when there are events that push us to make a decision, we need to come up with solutions, imperfect and tentative policies, and to achieve that, we need to bring together the communties, the real stake holders who have a say and who should have a say, to decide for this issue and for issues that will come about in the future.
    > 
    > We as a group of people who have been (relatively) long in this young industry, who have passions (almost love) for the technology, have very different opinions on what actions ethereum and the community should take for this hacking in this crisis, but we quickly gathered together and want to offer our contribution, a practical solution, a workable solution. Clock is ticking. We are not saying it’s perfect, but it’s among many of the ways, the optimal way, in our opinion, to reflect the opinions. So it will be an important source of reference when there are actions to be taken. We welcome the community to challenge and help us to improve.
    > 
    > And here is what we want to put forward: Carbonvote.com
    > 
    > Specifically on: A hard fork or no action?
    > 
    > 1) Who should vote?
    > Right now, the people who get to decide are miners. We put forward that it’s at this point, the legitimate voters should be players who have ethers in their wallets.
    > 
    > 2) So we are going to count heads?
    > No. We are going to count coins, in this case, ethers. How many ethers you have, how many votes you have.
    > Ethereum will turn into a POS blockchain in its plan. And we as participants have agreed to this plan when we start to hold ethers. The result of this polling will be depended on what most ethers go, fork or nothing, or default.
    > 
    > 3) How to vote?
    > Simply, send a message from your wallet.
    > We won’t collect or lock money. After what happened, who is brave enough to send any money to any smart contract at the moment?
    > Carbonvote.com will dynamically calculate how many ethers go to which bench, until the due time due date. So you can change your mind, you can overwrite your vote by resending your message as long as it’s before this smart contract finishes the final round of counting and announces the result.
    > 
    > F&Q
    > 
    > 
    > We call for everyone who has the least care for ethereum to vote on the CarbonVote platform. The more people involved, the more reflective this vote will be.
    > 
    > At this point, it’s important we bring all the communities that are only loosely connected together to voice. No matter where we go, no matter what you believe, what needs to be said needs to be heard.
    > ``</pre>``
    
In der _Introduction to Ethereum governance_ heißt es im [Abschnitt zum DAO fork][eth-governance], ergänzend zu den Erläuterungen aus der [_History of Ethereum_][eth-history]:
> It's important to note that whilst the protocol did fork to revert the hack, the weight the vote carried in deciding to fork is debatable for a few reasons:
> 1. The turnout to vote was incredibly low
> 2. Most people didn't know the vote was happening
> 3. The vote only represented ETH holders, not any of the other participants in the system
>
> A subset of the community refused to fork, largely because they felt the DAO incident wasn't a defect in the protocol. They went on to form Ethereum Classic.
>
> Today, the Ethereum community has adopted a policy of non-intervention in cases of contract bugs or lost funds to maintain the credible neutrality of the system.

Ein Tag vor Durchführung des forks, am 18. Juli 2016, veröffentlicht [[Elaine Ou]] den Artikel [Stick a fork in Ethereum](https://elaineou.com/2016/07/18/stick-a-fork-in-ethereum/) und nennt darin Zahlen zu der Wahl, die auch in [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook) von Andreas M. Antonopoulos und Gavin Wood aufgegriffen werden:
> Most people didn’t know, didn’t care, or couldn’t figure out how to vote. Carbonvote is a poll that weighed user votes by their ether account holdings. Only 5.5% of the total ether holders bothered to vote. A quarter of the DAO-Fork votes came from a single account.
> Just like a real democracy, the loudness of your voice is a function of your bank account balance. The results of this vote determined the default behavior of the new client software. Ethereum Foundation members call it social consensus.

## Was lässt sich zusammenfassend über die Entscheidungsfindung hinsichtlich der Weiterentwicklung von [[Ethereum]] am Beispiel des DAO forks sagen?
[[Ether whales]]

## Wertveränderung von Ether nach DAO fork 
Die blockchain data platform [[Chainalysis]] veröffentlicht am 15. Mai 2019 einen Artikel zum "[Economic Impact of Ether Whales on the Market](https://blog.chainalysis.com/reports/the-economic-impact-of-ether-whales/)", in dem festgestellt wird, "these whales have no meaningful impact on the price of Ether; they do, however, make the market more volatile on a daily basis with their large sell-offs."

Heise veröffentlicht am 20.7.2016 einen Artikel "[Nach dem DAO-Hack: Ethereum glückt der harte Fork](https://www.heise.de/newsticker/meldung/Nach-dem-DAO-Hack-Ethereum-glueckt-der-harte-Fork-3273618.html)" in dem die Wertsteigerung von [[Ether]] nach der Durchführung des forks auf etwa 10% beziffert wird.

## Links:
* https://www.gemini.com/cryptopedia/the-dao-hack-makerdao
* https://www.cbc.ca/news/science/ethereum-hack-blockchain-fork-bitcoin-1.3719009
* https://www.bloomberg.com/opinion/articles/2016-06-17/blockchain-company-s-smart-contracts-were-dumb
* https://www.forbes.com/sites/laurashin/2022/02/22/exclusive-austrian-programmer-and-ex-crypto-ceo-likely-stole-11-billion-of-ether/?sh=56a957f57f58

[eth-website]: https://ethereum.org
[carbonvote-website]: http://v1.carbonvote.com/
[eth-history]: https://ethereum.org/en/history/#dao-fork
[eth-governance]: https://ethereum.org/en/governance/#dao-fork

[//begin]: # "Autogenerated link references for markdown compatibility"
[the DAO]: <The DAO.md> "The DAO"
[Chainalysis]: Chainalysis.md "Chainalysis"
[Ethereum]: Ethereum.md "Ethereum"
[Ether whales]: <Ether whales.md> "Ether whales"
[//end]: # "Autogenerated link references"