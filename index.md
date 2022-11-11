---
layout: page
image: ''
blocks:
- text: |-
    Britain is the [5th largest](https://www.carbonbrief.org/analysis-which-countries-are-historically-responsible-for-climate-change/#national) historical polluter of fossil fuels and has built its wealth through centuries of colonial extraction. Now the UK Government seeks to avoid responsibility for the loss and damage it continues to cause for those who've done the least to cause the climate crisis, through its continued expansion and burning of fossil fuels.

    The largest 6 fossil fuel companies made [enough profit](https://www.bloomberg.com/news/articles/2022-10-23/fossil-fuel-profits-can-easily-cover-climate-losses-report-says?leadSource=uverify%20wall) in the first six months of 2022 to cover the costs of loss and damage in the Global South for 6 months. The British government has the power to tax fossil fuel companies, but has made the political choice not to make polluters pay for the damages they’ve caused.

    All while people around the world are suffering due to the impacts of climate change. Pakistan contributed less than [1% of global emissions](https://www.theguardian.com/world/2022/aug/30/pakistan-monsoon-on-steroids-flooding-warning-antonio-guterres), but the recent floods affected more than 33 million people – destroying homes, crops, livelihoods and lives.

    Climate Reparations means repair for the harm of the climate crisis, paid for by the governments and corporations that have profited from it over hundreds of years. It means just transition to renewable energy; an end to debt traps, exploitation and extraction.

    Climate reparations also means better housing, education, healthcare and safe migration—for working class communities all over the world. Paid for by taxing companies that profit from destruction of people and the planet. A global Green New Deal.

    Add your name and help us build a movement of movements that defunds climate chaos and help us create a system of care and repair everywhere.
  decoration: ''
  map: false
  id: ''
  buttons: []
  background_image: ''
- map: false
  text: "# Demand Climate Reparations Now"
  id: ''
  buttons:
  - text: Sign the petition
    target: https://actionnetwork.org/petitions/climate-reparations-now/
  decoration: "![](/assets/images/ig-sign-the-petition.png)"
  background_image: ''
- text: |-
    # Upcoming Events

    {% assign events  = site.events %}

    {% include events-gallery.html date_field="start_date" limit=3 %}
  decoration: ''
  map: false
  id: ''
  buttons: []
  background_image: ''
- map: false
  text: "# Demand Climate Reparations Now"
  id: ''
  buttons:
  - text: Sign the petition
    target: https://actionnetwork.org/petitions/climate-reparations-now/
  decoration: "![](/assets/images/ig-sign-the-petition.png)"
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
    # Climate Reparations Now

    {% include qr.html url='https://c.tpnt.uk#qr' %}

    We believe that the British Government should tax the obscene profits of fossil fuel corporations who are worsening the climate crisis to pay the compensation and reparations that we owe to countries and communities that have contributed the least but are experiencing the worst climate loss and damage.

    Let's make polluters pay climate reparations to ensure that communities both at home and around the world can repair from the loss and damage caused by the climate crisis.

    {% include an-email-only-form.html button="Sign" endpoint="https://actionnetwork.org/api/v2/petitions/6060da0f-e68b-4d99-b924-885d47f286e2/signatures" %}
  buttons:
  - text: Find our more
    target: "/events/climate-reparations-now-london-rally-on-12th-november-2022/"
  border_bottom:
    image: ''
    reflect: true
invert: odd

---
