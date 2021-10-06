---
layout: page
image: ''
blocks:
- buttons:
  - text: Read more
    target: "#"
  decoration: ''
  text: "# Why we’re planning the reparations bloc"
  map: false
  background_image: ''
  id: why

- buttons: []
  text: |-
    # We demand that the UK Government

    {% assign demands =  site.data.demands | where: "type", "Stop" %}
    {% include demands.html demands=demands %}
  decoration: ''
  map: false
  background_image: ''
  id: demands
- buttons: []
  text: |-
    # And instead:

    {% assign demands =  site.data.demands | where: "type", "Start to" %}
    {% include demands.html demands=demands %}
  decoration: ''
  map: false
  background_image: ''
  id: demands-start
- buttons: []
  text: |-
    # Find out more

    Some frequently asked questions and answers

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
  id: faqs
- buttons: []
  text: |-
    # Get updates

    {% include event-signup %}
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  map: false
  background_image: ''
  id: join

- text: |-
    # Partners

    This bloc is supported by a number of UK organisations and collectives.

    {% include partner-list.html background='light' %}
  buttons:
  - text: Add your group
    target: https://airtable.com/shrU9RuY0Vbe9iMZ1
  decoration: ''
  map: false
  background_image: ''
  id: partners
credits: ''
header:
  full: true
  image:
    link: ''
    location: left
  text: |-
    #### Countdown to march: {% include counter.html %}

    # Climate Reparations Bloc

    Our economic, political and social infrastructures are failing to protect life, and need repairing. At the COP26 Coalition’s 6 November 2021 Global Day of Climate Justice London rally, we’ll be standing with organisers from London Renters Union, No More Exclusions, Revoke and others to co-lead a reparations bloc demanding systems change. Gathering from 11am at the Bank of England.
  buttons:
  - text: Demands
    target: "#demands"
  border_bottom:
    image: ''
    reflect: true
invert: odd

---
