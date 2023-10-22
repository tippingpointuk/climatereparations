---
title: Actions
layout: page
sitemap: false
tags: []
top_image: ''
top_quote: ''
image: ''
credits: ''
summary: ''
_template: page
---


{% for c in site.collections %}
{% if c.output and site[c.label].size > 0 %}
{% include accordion-start.html title=c.label %}

{% assign posts = site[c.label] %}
{% include blog-list.html %}
{% include accordion-end.html %}
{% endif %}
{% endfor %}

{% assign posts = site.events | concat: site.petitions | concat: site.forms | concat: site.advocacy_campaigns %}

