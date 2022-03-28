---
layout: post
title:  Orion - Gartner Validation
date:   2022-03-28 7:39:16
description: Software Supply Chain Security, SBOM
---

In the previous <a href="https://nadgowdas.github.io/blog/2021/orion-article/" target="blank">post</a> I talked about project <a href="https://github.com/tap8stry/orion" target="blank">Orion</a> and how critical it is to embed it into our CI pipeline to ensure SBOM completeness of our application builds. It was truly exciting to see the technical gap Orion is trying to address is being called explicitly in the research report by none other than Gatrner. 

On Feb. 14th 2022, Gartner published a report <a href="https://www.gartner.com/en/documents/4011501" target="blank">Innovation Insight for SBOMs</a>. This report summarizes requirements, challenges, risk and tools in the space of SBOM. In this report, they specifically called out the technical gap and risk in the existing SBOM generation tooling that could not discover software dependencies installed through non-package managers modes. And this is precisely the problem that project Orion is solving. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ site.baseurl }}/assets/img/gartner-orion-req.png">
    </div>
</div>
<div class="caption">
    SBOM generation tooling technical risk
</div>

This was a satisfying validation of the motivation when I started this project. And also, the fact that this project is being recognised amonst the SBOM management tools is gratifying.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ site.baseurl }}/assets/img/gartner-orion-list.png">
    </div>
</div>
<div class="caption">
    List of open-source SBOM management tools
</div>