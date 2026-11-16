---
layout: page
title: Projects
permalink: /projects/
description: Projects in cloud infrastructure, reliability, and software supply chain security.
nav: true
display_categories: [work, fun]
---

<div class="projects">
{% for category in page.display_categories %}
  {% assign projects = site.projects | where: 'category', category | sort: 'importance' %}
  {% if projects.size > 0 %}
  <section class="project-category">
    <h2>{{ category | capitalize }}</h2>
    <div class="project-grid">
      {% for project in projects %}{% include projects.html %}{% endfor %}
    </div>
  </section>
  {% endif %}
{% endfor %}
</div>
