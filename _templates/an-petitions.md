---
slug: an-petitions
template: |-
  # {{ page.title }}

  {% capture page_url %}{{ site.url }}{{ page.url | relative_url }}{% endcapture %}
  {% include qr.html url=page_url %}

  {{ image }}

  {% include an-email-only-form.html button="Sign" endpoint=page.action_network_blindpost %}

  {{ content }}

  > **To:** {{ petition_target }}
  >
  > {{ petition_text }}

  {{ form }}
title: Action Network Petitions

---
