---
layout: page
image: ''
blocks:
- buttons:
  - text: Read more
    target: "#"
  decoration: "![](/assets/images/red_lines_cop21_paris_2015.jpeg)"
  text: "# Why we’re planning the reparations bloc"
  map: false
  background_image: ''
  id: why
- buttons:
  - text: All trainings
    target: "/trainings"
  text: |-
    # Training and Action Planning Sessions

    {% assign events = site.trainings | sort: "start_date" %}
    {% include events-gallery.html date_field='start_date' %}
  decoration: ''
  background_image: "/assets/images/41363513_1776146282501405_6945596299618025472_o-600x600.jpeg"
  map: false
  id: trainings
- buttons: []
  text: |-
    # Resources

    Here are all the resources you’ll need to join or organise an action of your own to #DefundClimateChaos on October 29 (and beyond!):

    {% include resources.html %}
  decoration: ''
  map: false
  background_image: ''
  id: ''
- buttons: []
  text: |-
    # Get updates

    {% include event-signup %}
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  map: false
  background_image: ''
  id: join
- buttons:
  - text: See all
    target: "/stories"
  - text: Share a story
    target: mailto:stories@defundclimatechaos.uk
  text: "# Stories\n\n{% assign posts = site.posts %}  \n{% include blog-list.html
    limit=4 thumbnail=true date=false alternate_direction=true %}"
  decoration: "![](/assets/images/23-04-21-lloyds-london-coal-protest-gareth-morris-19.jpg)"
  map: false
  background_image: ''
  id: stories
- buttons: []
  text: |-
    # Find out more

    Some frequently asked questions and answers

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
  id: faqs
- text: |-
    # Partners

    This day of action is supported by a number of UK groups.  We are working closely with allied networks all around the world.
  buttons:
  - text: Add your group
    target: "/partners/#register-group"
  - target: "/partners"
    text: See all partners
  decoration: "![](/assets/images/barclays-greenpeace-j-rizak.jpeg)"
  map: false
  background_image: ''
  id: partners
credits: ''
header:
  full: true
  image:
    link: "/assets/images/money-faucet.png"
    location: left
  text: |-
    #### Countdown to march: {% include counter.html %}

    # Climate Reparations Bloc

    Our economic, political and social infrastructures are failing to protect life, and need repairing. At the COP26 Coalition’s 6 November 2021 Global Day of Climate Justice London rally, we’ll be standing with organisers from London Renters Union, No More Exclusions, Revoke and others to co-lead a reparations bloc demanding systems change.
  buttons:
  - text: Sign Up
    target: "#join"
  - text: Act Now
    target: "#map"
  border_bottom:
    image: ''
    reflect: true
invert: odd

---
