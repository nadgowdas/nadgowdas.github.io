---
layout: page
title: GitSecure
description: Code Risk Analyzer 
img: assets/img/10.jpg
importance: 1
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/10.jpg title: "example image" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Container Migration
</div>

I was part of the team at research when we built first-of its kind, security scanner for container images  and running containers. It is part of IBM Cloud as <a href="https://www.ibm.com/docs/en/SSBS6K_3.2.0/manage_cluster/vuln_advisor.html">Vulnerability Advisor</a> offering. Later as I was leading some security and compliance solution extensions, I realized the need for building these solutions close to the developer's workflow. And at the same time DevSecOps was becoming the "thing". So I started designing and building this solution called "GitSecure" in 2017. The objective was to embed security analytic into the developer workflow. GitSecure was the first instance, where I had implemented Docker CIS evaluations  from static deployment definitions for cloud-native workloads. 

This project is now available on IBM Cloud under <a href="https://www.ibm.com/cloud/blog/announcements/find-source-code-vulnerabilities-with-code-risk-analyzer">Code Risk Analyzer (CRA)</a> offering. This was one of the foundational compliance control for IBM Financial Cloud. 

GitSecure holds tremendous potential to improve security and compliance automations. I had described a framework around end-to-end automation in my blog Code2Container. The basic idea is simple -- just like we have control loop in kubernetes wherein we describe our desire state for application through `spec` and controllers and then responsible to ensure that state is satisfied. We describe our compliance state as "desire-state" and build automated engine that monitors any discrepency (e.g. new vulnerability, runtime intrusion etc.) and drives concilor loop to fix the state (e.g. create a PR to upgrade vulnerable package). 

Our DevSecOps should also include "smart updates" that would notify users about newer versions of their dependencies.  ( yes, like existing solutions like Whitesource renovate). But, it should also give "reasons" for developers to upgrade their dependencies. Would it improve performance ? Does it fix any bugs ?

### References:

<a href="https://www.ibm.com/blogs/research/2020/11/secdevops-security-compliance/">Research Blog</a>

<a href="ttps://www.infoworld.com/article/3588100/ibm-adds-code-risk-analyzer-to-cloud-based-cicd.html">CRA Infoworld </a>

<a href="https://developer.ibm.com/articles/federation-of-security-controls/">Code2Container Article</a>

<a href="https://anchor.fm/ibm-cloud-podcast/episodes/What-is-DevSecOps-and-Software-Supply-Chain-Security-e16sfdp">IBM Cloud Podcast on DevSecOps and SupplyChainSecurity</a>






