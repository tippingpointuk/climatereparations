---
layout: page
image: "/assets/images/reparationsblock-og.png"
blocks:
- buttons: []
  text: |-
    # Join us

    If you can't make it to London, make sure to check all the other expected action on the 6th November on [the COP26 Coalition main website](https://cop26coalition.org/map/ "Map of actions, local hubs and regions")

    {% include event-signup %}
  decoration: "![](/assets/images/whatsapp-image-2021-10-11-at-20-53-42.jpeg)"
  map: false
  background_image: ''
  id: join
- buttons:
  - text: Stop demands
    target: "#demands"
  - text: Start demands
    target: "#demands-start"
  decoration: ''
  text: |-
    ## Climate justice means 1.5C to stay alive

    To keep our planet livable for everyone, including the most exposed and marginalised among us, we need to **keep global heating to no more than 1.5C temperature increase**. Our world is already nearly 1.2C hotter. Those least responsible are already paying the highest price and have the least resources to protect themselves from raging climate impacts.

    The UK has an outsized historic responsibility to do its [fair share](https://waronwant.org/sites/default/files/20-21_FairShareUK_Infographic_web.pdf) and lead the world in meeting the global climate goal of 1.5C set by the Paris Agreement. Our country is disproportionately responsible for carbon emissions after profiting for over 400 years from slavery, colonialism and the continued extraction and exploitation of communities in the Global South.

    We are hearing greenwash pledges to get to ‘Net Zero’ with techno-fixes and more false solutions. **Net zero is NOT zero**. To meet the UK’s fair share of 1.5C to stay alive, we need a rapid and justice-centred transition to get to **real zero carbon emissions by 2030.** That’s just 9 years from now. So how do we get there and how can we force our government to go about it equitably?
  map: false
  background_image: ''
  id: why
- buttons: []
  text: "# We demand that the UK Government: \n\n{% assign demands =  site.data.demands
    | where: \"type\", \"Stop\" %}\n{% include demands.html demands=demands %}"
  decoration: |-
    ## The first thing to do when you find yourself in a hole is to **stop** digging.

    > #### There are red lines the UK government cannot cross if it wants to maintain credibility as a genuine climate leader at COP26.  We hope you will join our groups in coming together on 6th November to call for the UK to meet these **Stop** and **Start** **demands**.
  map: false
  background_image: ''
  id: demands
- buttons: []
  text: |-
    # And instead:

    {% assign demands =  site.data.demands | where: "type", "Start to" %}
    {% include demands.html demands=demands %}
  decoration: "> ## Our government must **start** providing the care and reparations
    that communities here and around the world need to protect themselves and repair
    the damage already done."
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
- text: |-
    # Posts

    {% assign posts = site.posts %}
    {% include blog-list.html %}
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
    ## Climate Reparations Bloc

    # {% include counter.html %}

    ### Gather from 11:30am at the Bank of England.

    Our economic, political and social infrastructures are failing to protect life, and need repairing.

    At the COP26 Coalition’s 6 November 2021 Global Day of Climate Justice London rally, organisers from {{ partners }} and [others](#groups) will co-lead a reparations bloc demanding systems change.
  buttons:
  - text: RSVP
    target: "#join"
  - text: Demands
    target: "#demands"
  border_bottom:
    image: ''
    reflect: true
invert: odd

---