---
layout: post
title:  Orion - for SBOM Completeness
date:   2021-12-10 6:10:16
description: Software Supply Chain Security, SBOM
---

I had worked on designing and building one SBOM generation solution in DevSecOps pipeline. At the same time, I was building lots of micro-services and following different build patterns for them. And soon, I realize some gaps in the use of my  own tool for own micro-services for complete SBOM generation. And I found the same gap in the existing open-source SBOM generation tools. So I decided to work on this and that gave rise to "orion" - an SBOM generation for software dependencies not managed through package managers.

The discussion of these  gaps and  some description of this tool is available  in TheNewStack article <a href="https://thenewstack.io/orion-go-beyond-package-manager-discovery-for-your-sbom/" target="blank">here</a>.

And the project is available at <a href="https://github.com/tap8stry/orion" target="blank">tap8stry/orion</a>