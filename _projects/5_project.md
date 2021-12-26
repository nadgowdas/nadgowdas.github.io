---
layout: page
title: columbus
description: File based software discovery
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
    Software Discovery
</div>

This was one project that I started purely based on some intuition -- when developers builds their software they tend to organize various files/binaries in some common patterns. For instance, they would start name of each compiled binary to start with the name of the software itself. For instance, all binaries for `mysql` application are named `mysqld`, `mysqladmin`, `mysqldump` ..? Coincidence ? In 2016-17, I went ahead and built a software discovery solution based on this intuition. And then, when we ran experiments with it against then available official public images from DockerHub (~150 of them), we were surprised to see >90% accurancy. Of-course, this is not a reliable method for discovery discovery as it can easily be tricked by changing naming patterns. But, it can be used as a starting point for more sophisticated discovery techniques. And that's what  we did. After initial evaluation, we collaborated with researchers/students from Boston University and built a more advanced ML model on top of this.  

### Paper Abstract: 
Software discovery is a key management function to ensure that systems are free of vulnerabilities, comply with licensing requirements, and support advanced search for systems containing given software. Today, software is predominantly discovered through querying package management tools, or using rules that check for file metadata or contents. These approaches are inadequate as not every software is installed through package managers, and agile development practices lead to frequent de- ployment of software. Other approaches to software discovery use machine learning methods requiring training phase, or require maintaining knowledge bases. Columbus uses the knowledge of the software packaging practices that evolved over time, and uses the information embedded in the file system impression created by a software package to discover it. Columbus is able to discover software in 92% of all official Docker images. Further, Columbus can be used in problem diagnosis and drift detection situations to compare two different systems, or to determine the evolution of a system overtime.

### Paper Link: 
<a href="https://ieeexplore.ieee.org/document/7923788">Click Here</a> 