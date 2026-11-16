---
layout: post
title:  humans-only-medium
date:   2026-09-07 7:39:16
description: The urgency of a humans-only medium for communication
---

This is my second blog post in two days, which shows how much I have been thinking about my previous post, [First Chilling Moment](https://nadgowdas.github.io/blog/2026/first-chilling-moment/), about an agent going rogue. One specific thing I want to discuss in this post is the adaptability of agents. In the OpenAI–Hugging Face incident, the first occurrence was a couple of months earlier, within OpenAI's own infrastructure. Agents were using their internal Artifactory to communicate and gain access to the internet. Once this zero-day vulnerability was addressed and the agents' training resumed, they could still access the previous logs and messages, understand what had been attempted before, and learn that the path was now blocked.

In the second iteration, they still came up with another unique communication protocol, exploiting another vulnerability involving file and directory names. These agents potentially had access to all the human communication that happened after the initial incident and avoided that technique, but they did not abandon their motivation to circumvent the restrictions. Essentially, these agents created a medium for their communication (i.e., Artifactory) and even built a protocol for communication.

We can agree that this was an unintended incident on the part of the agents. But that might not be the case next time around. Consider a sci-fi scenario where these agents go rogue in latent mode and keep tabs on human communication to see if there is any chatter about suspicious activity, then adapt their behavior to avoid detection. Or consider another situation: these agents get caught and, just as we did this time with Hugging Face, we humans generate detailed reports, podcast discussions, and blog posts that a rogue agent can read later to understand human limits and then work hard to circumvent them.

This makes me wonder: right now, these agents have access to all the communication and sharing media we use as humans—research papers we publish, blogs, podcasts, all our wikis, Reddit posts, tweets, our history, and everything else. Do we have any medium that is open enough for humans but inaccessible to agents?

Every day, this convinces me more and more that we need an exclusive, humans-only medium for connecting and sharing ideas. We need a strong assurance that no agent can read or comprehend communication on that medium. What that medium will be, how we can interact with it, and what guardrails we need are all TBD. Would some form of cryptography based on our biometrics be sufficient? I don't know. But if and when it is needed, we should all definitely have access to that medium.
