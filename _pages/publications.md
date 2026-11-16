---
layout: page
permalink: /publications/
title: Research
description: Papers, journals, reports, and patents, with the most recent work first.
nav: true
---

<div class="publications">
  {% bibliography -f papers -q @*[year] --group_by year --group_order descending %}
</div>
