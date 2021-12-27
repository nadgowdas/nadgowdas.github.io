---
layout: page
title: tapestry
description: Supply Chain Security Platform
img: assets/img/9.jpg
importance: 1
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/9.jpg title: "example image" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Supply Chain Security 
</div>

Supply Chain security is something that started driving me since 2019. When I designed Gitsecure -- our DevSecOps solution, it already had support for SBOM reporting. Then as we started using Tekton as a primary technology for implementing our CICD pipelines, how do we build trust in these pipelines ? I started mentoring one <a href="https://github.com/BU-CLOUD-F20/Securing_MS_Integrity">Cloud course project</a>  at Boston University during Fall'20 to explore the idea further. Then, in early 2021, I came across a wonderful project, i.e. tekton/chains that was trying bring trust and attestation into our pipelines. I believe, pipeline security is much broader in scope. I gave a talk at Cloud-native Security Con at Kubecon'NA 21 to elaborate on this. There are few open-source initiatives I started to address this area to bring signing/verification to pipelines [<a href="https://github.com/tap8stry/tapestry-pipelines">tapestry-pipelines</a>], admission checks before executing pipelines [<a href="https://github.com/OpenSecureSupplyChain/tkn-admcontroller">tkn-admcontroller</a>], building canonical  representation of tekton resources to intoto [<a href="https://github.com/tap8stry/tkn-intoto-formatter">tkn-intoto-formatter</a>]. 

This is an evolving area and we need to address it from multiple vantage points, including build security, dependency validations, code security, runtime verifications and attestation pedigree for auditing. 

### References

<a href="https://dev.tube/video/NHSsRjMsb1Y">CrossPlane Community Day Kubecon'EU 21</a>]

<a href="https://www.youtube.com/watch?v=cshICut7apQ">Cloud-Native Security Con Kubecon'NA 21</a>]

<a href="https://thenewstack.io/blueprint-for-securing-your-ci-cd-pipelines/">TheNewStack - Pipeline Security</a>]

<a href="https://thenewstack.io/orion-go-beyond-package-manager-discovery-for-your-sbom/">TheNewStack - Orion SBOM</a>]

<a href="https://anchor.fm/ibm-cloud-podcast/episodes/What-is-DevSecOps-and-Software-Supply-Chain-Security-e16sfdp">IBM Cloud Podcast on DevSecOps and SupplyChainSecurity</a>


