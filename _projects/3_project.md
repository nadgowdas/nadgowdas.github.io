---
layout: page
title: confuse
description: Container Filesystem in Userspace
img: assets/img/4.jpg
importance: 1
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/4.jpg title: "example image" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

I was really fascinated by the open-source project started by my colleagues around out-of-band container introspection. It is called <a href="https://github.com/cloudviz/agentless-system-crawler">agentless-system-crawler</a>. This tool allowed us to very efficiently capture the state of running container in a JSON object, which then can be transferred to dedicated  analytic platform for security analytics. And this solution was deployed on IBM Cloud  for image and container scanning. Although, it required  us to build "a new" analytic solution that would first parse that JSON object.

I had some experience working with FUSE filesystem and I started wondering can we re-construct the container state from that  JSON once and then use it to run existing security analytic tools  un-modified ? And as it turned out, it was indeed a very practical solution. It was deployed  and used in  IBM Cloud  Private solution to run existing CIS benchmark tools de-coupled from the actual cluster. 

### Paper Abstract:
Emerging security solutions for cloud commonly operate in two phases, data collection and analytics. Data collection phase provides visibility into cloud resources (images, containers, VMs, etc.) and analytics derives insights built on data. Analytics phase is com- monly decoupled from data collection and cloud resources as a separate, scalable pipeline. This enables cloud-scale operation via separation of concerns and overheads. Analytics focus on deriv- ing high-value insights from data, and data collection focuses on efficient and minimally-intrusive inspection and introspection tech- niques. However, this model breaks traditional security solutions, such as endpoint managers, malware and compliance checkers, that are designed to run locally inside the systems they are securing. The common cloud strategy to address this problem has been to rewrite existing solutions to “work from data” instead of “working inside the system”. This requires huge amount of resources and effort, and has fueled a slew of new “cloud-native security” solutions in the field.
In this paper we approach this problem from a different angle. In- stead of rewriting security solutions to work from data, we explore how to reuse existing security solutions as black-box analytics in the cloud. We present DéjàVu, a framework that makes data acces- sible to traditional software by mimicking a system veneer over the data. We achieve this by re-building a standard native POSIX system interface over the data. We enable traditional security ap- plications to run unmodified in a black-box fashion. We validate our framework with state of the art third party security solutions and demonstrate that they can be operated with modest overhead.

### Paper Link (Poster at ACM Sympoisum on Cloud  Computing 2018):
<a href="https://dl.acm.org/doi/abs/10.1145/3267809.3275470">Click Here</a>

### Paper Link (ACM Middleware 2018): 
<a href="https://dl.acm.org/doi/10.1145/3284028.3284031">Click Here</a>

### Paper Link (Workshop on Container Technologies, Middleware 2020):
<a href="https://dl.acm.org/doi/10.1145/3429885.3429961">Click Here</a>




