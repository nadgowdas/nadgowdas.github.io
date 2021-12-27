---
layout: page
title: Cargo
description: Container Migratioon 
img: assets/img/6.jpg
importance: 2
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/6.jpg title: "example image" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Container Migration
</div>

Before we start debate on "do we really need to migrate containers ?", I want to point out this was one of the important business use-case in 2015-16. I had worked on VM migrations in cloud in the past. And when I heard about  this requirement for containers, I was really motivated to address it. There were couple of open-source solutions available at the time, most prominent  being the "flocker", although it  was tied to the use of zfs. In "Cargo" I took file-system agnostic approach and built a solution for migrating "rootfs" of  containers. I  also tried using CRIU (it was in very early stage  that that time) for migrating in-memory state. When I wrote a research paper on this at IC2E'17, I received many inquiries by academic researchers who wanted  to  explore this  area further.

Although,  today (2021/22) I would think container migration is not really  needed. Our "rootfs" should be immutable and easily replicated across nodes through "golden images", mounted volumes should be plug-and-play  across nodes. And I am still not convinced we need to migrate in-memory  state. Yes, its important  for lot of stateful applications, but these days, applications have became so resilient that loss of this state during  migration should not be a big deal. Applications would be able to restore that state easily. 

### Paper Abstract:
Due to the small memory footprint and fast startup times offerred by container virtualization, made ever more popular by the Docker platform, con- tainers are seeing rapid adoption as a foundational capability to build PaaS and SaaS clouds. For such container clouds, which are fundamentally different from VM clouds, various cloud management services need to be revisited. In this paper, we present our Voyager - just-in-time live container migration service, designed in accordance with the Open Container Ini- tiative (OCI) principles. Voyager is a novel filesystem- agnostic and vendor-agnostic migration service that provides consistent full-system migration.Voyager com- bines CRIU-based memory migration together with the data federation capabilities of union mounts to minimize migration downtime. With a union view of data between the source and target hosts, Voyager containers can resume operation instantly on the target host, while performing disk state transfer lazily in the background.

### References (IEEE IC2E'17 Paper)
<a href="https://ieeexplore.ieee.org/abstract/document/7980161">Click Here</a>

