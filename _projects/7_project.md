---
layout: page
title: RunEscape
description: Dynamically injected utility functions
img: assets/img/3.jpg
importance: 1
category: work
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/5.jpg title: "example image" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

As I got more into managing cloud-native applications on kubernetes, I started to realize our existing models of packaging a container image to make it look more like traditional VM image with all OS utility functions, with any required network/file management tools was very in-efficient. It made our container images bulky and exposed them to larger attack surface. At the same time, micro-containers, multi-stage build patterns started becoming popular and we started to brainstorm about this space with my colleagues, we came up with "runescape". What if we could dynamically inject all utility functions to our container application at  runtime? We  would need sfew  tricks with namespace sharing, affinity placements and careful removal, but yes should be possible. 

Again, this  would be different than Istio sidecar, wherein the sidecar container is transparently added during the deployment and is parmanently attached to your application throughout the lifecycle. In RunEscape we are talking about scenarios, where you deploy your application first, and then at later point in time, say you want to run `top` inside the container -- at that point you inject a sidecar containing only `top` utility into your application container, run it, capture the result and then remove the sidecar. Fancy huh ??

This is also different than the approach described in this <a href="hhttps://engineering.salesforce.com/a-generic-sidecar-injector-for-kubernetes-c05eede1f6bb">post</a>. This approach is similar to the istio one, wherein the sidecar is attached throughout the  lifecycle of an application. We are talking about "on-demand" utility functions. 


If you want to learn more about "RunEscape", I have listed some resources below:

### Paper Abstract:
Application runtimes are undergoing a fundamental transformation in the cloud, from general-purpose op- erating systems (OSes) in virtual machines (VMs) to lightweight, minimal OSes in microcontainers. On one hand, such transformation is helping reduce application footprint in the cloud to increase agility, density and to minimize attack surface. On the other hand it makes it challenging to implement system and application man- agement tasks. Inspired from the on-demand Function as a Service (FaaS) model in serverless computing, in RECap we are designing a cloud-native solution to deliver core systems and application management tasks through specially-managed Capsule containers. Capsule containers are dynamically attached to the running containers for the duration of their implemented function and are safely removed from application context afterwards. More generally, RECap framework allows us to design disaggregated on-demand managed service delivery for containers in the cloud. In this paper, we describe the motivation and the emerging opportunity for RECap in the cloud. We discuss its core design principles, performance, security and manageability trade-offs. We present current design of RECap for the Kubernetes platform.

### Paper Link: 
<a href="https://www.usenix.org/conference/hotcloud18/presentation/nadgowda">Click Here</a> 


