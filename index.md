---
layout: page
image: ''
blocks:
- text: |-
    # Upcoming Events

    {% assign events  = site.events %}

    {% include events-gallery.html date_field="start_date" limit=_2 %}
  decoration: ''
  map: false
  id: ''
  buttons: []
  background_image: ''
- buttons:
  - text: Demands
    target: "#demands-start-stop"
  decoration: ''
  text: |-
    ## Climate justice means 1.5C to stay alive

    To keep our planet livable for everyone, including the most exposed and marginalised among us, we need to **keep global heating to no more than 1.5C temperature increase**. Our world is already nearly 1.2C hotter. Those least responsible are already paying the highest price and have the least resources to protect themselves from raging climate impacts.

    The UK has an outsized historic responsibility to do its [fair share](https://waronwant.org/sites/default/files/20-21_FairShareUK_Infographic_web.pdf) and lead the world in meeting the global climate goal of 1.5C set by the Paris Agreement. Our country is disproportionately responsible for carbon emissions after profiting for over 400 years from slavery, colonialism and the continued extraction and exploitation of communities in the Global South.

    We are hearing greenwash pledges to get to ‘Net Zero’ with techno-fixes and more false solutions. **Net zero is NOT zero**. To meet the UK’s fair share of 1.5C to stay alive, we need a rapid and justice-centred transition to get to **real zero carbon emissions by 2030.** That’s just 9 years from now. So how do we get there and how can we force our government to go about it equitably?
  map: false
  background_image: ''
  id: demands
- buttons: []
  text: |-
    # And instead:

    {% assign demands =  site.data.demands | where: "type", "Start to" %} {% include demands.html demands=demands %}
  decoration: |-
    # We demand that the UK Government:

    {% assign demands =  site.data.demands | where: "type", "Stop" %} {% include demands.html demands=demands %}
  map: false
  background_image: ''
  id: demands-start-stop
- map: false
  text: |-
    # Sign demands

    {% include an-blind-post.html petition="https://actionnetwork.org/api/v2/petitions/81ea4655-f544-43eb-b3c4-ace557bafef7/" %}
  id: sign-demands
  buttons: []
  decoration: ''
  background_image: ''
- buttons: []
  text: |-
    # Join us

    Sign on to our [stop/start demands](#demands "Demands") to access our newsletter and join us in working towards climate reparations. Your data will be processed according to our [privacy policy](http://tpnt.uk/privacy "Privacy Policy").

    {% include an-blind-post.html petition="https://actionnetwork.org/api/v2/petitions/81ea4655-f544-43eb-b3c4-ace557bafef7/" %}
  decoration: "![](/assets/images/favicon.png)"
  map: false
  background_image: ''
  id: join
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
    # Posts

    {% assign posts = site.posts %}
    {% include blog-list.html %}
  map: false
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
- text: |-
    # Co-leaders

    This bloc is supported by a number of UK organisations and collectives as part of the [global day for climate justice](https://cop26coalition.org/gda/) organised by the COP26 Coalition. Join our Bloc by adding your group or organisation below.

    {% include partner-list.html background='light' %}
  buttons:
  - text: Add your group
    target: https://airtable.com/shrU9RuY0Vbe9iMZ1
  decoration: ''
  map: false
  background_image: ''
  id: groups
credits: ''
header:
  full: true
  background_image: "/assets/images/dandelionsnpeople_small.png"
  image:
    link: ''
    location: left
  text: |-
    # Climate Reparations

    {% include qr.html url='https://c.tpnt.uk#qr' %}

    Our economic, political and social infrastructure are failing to protect life, and need urgent repair.

    We are a movement made up of social and climate justice groups demanding a change to the systems causing climate breakdown. Join us on 12th of November to demand justice
  buttons:
  - text: Find our more
    target: "/events/climate-reparations-now-london-rally-on-12th-november-2022/"
  border_bottom:
    image: ''
    reflect: true
invert: odd

---
