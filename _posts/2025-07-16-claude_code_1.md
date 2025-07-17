---
layout: post
title:  First encounter with Coding Agent
date:   2025-07-15 7:39:16
description: First impression of Claude Code
---

Last couple of weeks, I came across multiple posts from my connections about their tryst with coding agents. Some tried Cursor, while others did Claude code, and so on. 
It was not my first time, interacting with coding agents. I had enabled CoPilot into my VSCode for more than 8 months and have been using it regularly. With CoPilot, it was helping me 
auto-complete some functions, add documentation and fix some errors. That was the extent to which I was using it. And I was pretty impressed with what it could do. 

Then, as I mentioned above, I got many updates on LinkedIn and X from people talking about "vibe coding". Basically, interacting with the coding agents in natural language to accomplish your tasks or build the whole project. The promise is -- you don't need to be an expert (or in some cases, not even be knowledgeable) on the underlying programming languages. So i decided to give it a try. I got Claude Pro subscription, setup their code agent on my Mac and I was ready within 5 minutes.

I checked few tutorials on it -- they were mostly talking about intializing your existing project with claude, where claude can understand your complete project and then help you extend that with new features or help fix bugs. I was more interested in using it to build code from scratch. So instead of typical Web-app, I decided to try building a new Kubernetes Operator from scratch. I created new emptry project directory, intialize claude and enter prompt "I am looking to build a Kubernetes Operator to manage storage resources for Object Store (e.g. S3). You can use kubebuilder to scaffold the project and create a sample resource type with specs for size only. I want to see this working on my local workstation, so once ready, build and deploy it on kind.". Pressed Enter>

Things that worked as I had expected were - it was able to discover if I have all the dependecies on my local workstation, like "kind", "kubebuilder", "docker" and stuff. It downloaded and install missing components. But, what amazed me was - how it adapted to things that failed without involving me. For instance, it failed to update "kube-builder" binary, because of conflicts, it read that error message, figure out the resolution path and executed it autonomously. There were multiple steps that failed during the process, and the agent was able to resolve those correctly. At the end, I had a new kind cluster with CRDs installed with sample. If I would have started without the agent, it would have taken me maybe an hour or two to get this stage, which in this case happened within 10 minutes. That's a great productivity boost for me.

I realized these agents are going to be great assistant for automating generalized tasks like bootstrapping the projects, building and running test-cases and more. IMO, we would still need experienced engineer to write the business logic for your projects, because that is something which is hard to generalize. Agents would certainly be helpful in assisting with code completions, function optimizations, but those would be supervised and on-demand. 

Next, I am going deep, trying to see exent to which they can be embedded into my daily development activities. 