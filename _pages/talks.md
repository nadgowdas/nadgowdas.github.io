---
layout: page
title: Talks
permalink: /talks/
description: Talks on reliability, cloud infrastructure, and software supply chain security.
nav: true
---

<div class="talk-list">
{% for talk in site.data.talks %}
  {% include talk_card.html talk=talk %}
{% endfor %}
</div>
