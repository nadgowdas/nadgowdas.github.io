---
layout: post
title:  Taming the Beast
date:   2025-07-15 7:39:16
description: AI Regulations - A step in a right direction
---

After the initial "wow" moment, there has been various concerns and questions being raised around the "AI Systems". They ranged from safety to ethicality to existential crisis and much more. There was even a memo circled around to regulate the progress ( or the arms race) of AI systems (needless to say it failed miserably). at the same time, there has been efforts to make AI safely and ethically useful. Let's talk about 2 specific efforts to bring "transparency in AI training" and "fair use of conent for training". Ideally, I would have loved these to be a single topic, but, unfortunately they are not.

Anthropic recently released the a post "The need for transparency in Frontier AI"[1]. Few themes in this proposal includes:

**Fare game** Taxing or regulating big players -- ones that are building the biggest frontier models and having huge compute capital. 
**Model benchmark** While building new models, create awareness amongst developers to consider possible implications and risks it might pose. Instead of having these evaluated subjectively, establish a common benchmark against which the models should be evaluated.
**Model provenance** Every model should make an authentic provenance report (publically with possible redaction) available, on the training process and safety benchmarks it conducted.
**Compliance** Creating "standard" and legal penaulty for non-adherance.

In nutshell, these are not new. In one form or the other, they are already exercise for food and drug safety. Nonetheless, these are essential.

I noticed one thing missing and it is "data curation practice". Besides, the electric power, these model training processes are extremely data hungry and resulting models are as good as the input data. And still, these transparency proposal lack any mention around regulation of data curation. It also came at the time when United States District Court ruled that training LLMs on copyrighted books constitutes fair use[4]. I found the argument even more distrubing. It says "[ it is] no different than it would be if they complained that training schoolchildren to write well would result in an explosion of competing works". 

Then, I came across efforts by Cloudflare that would allow content creators on internet to restrict use of their content from ai-crawler-bots. With simple configuration from user, Cloudflare can automate management of `robots.txt` file to limit ai-bots from visting certain sections of user's content online world. This is really a smart step in the right direction. Although, it puts the onus of conent regulation on the content creator, instead of clients (ai players). I sincerely believe, this should be a shared-reposibility between two. And hope as/if we bring more transparency to the AI models, we include data provenance in their system cards. 

References:

1. [Anthropic: The need for transparency in Frontier Ai](https://www.anthropic.com/news/the-need-for-transparency-in-frontier-ai)
2. [Cloudflare: Control content use for AI training with Cloudflare](https://blog.cloudflare.com/control-content-use-for-ai-training/)
3. [Cloudflare: Content Independence Day](https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/)
4. [Deeplearning: Weekly](https://www.deeplearning.ai/the-batch/issue-307/)
