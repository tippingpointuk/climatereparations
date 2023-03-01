---
layout: page
image: "/assets/images/aaa_8213.jpg"
blocks:
- text: |-
    Britain is the [5th largest](https://www.carbonbrief.org/analysis-which-countries-are-historically-responsible-for-climate-change/#national) historical polluter of fossil fuels and has built its wealth through centuries of colonial extraction. Now the UK Government seeks to avoid responsibility for the loss and damage it continues to cause for those who've done the least to cause the climate crisis, through its continued expansion and burning of fossil fuels.

    The largest 6 fossil fuel companies made [enough profit](https://www.bloomberg.com/news/articles/2022-10-23/fossil-fuel-profits-can-easily-cover-climate-losses-report-says?leadSource=uverify%20wall) in the first six months of 2022 to cover the costs of loss and damage in the Global South for 6 months. The British government has the power to tax fossil fuel companies, but has made the political choice not to make polluters pay for the damages they’ve caused.

    All while people around the world are suffering due to the impacts of climate change. Pakistan contributed less than [1% of global emissions](https://www.theguardian.com/world/2022/aug/30/pakistan-monsoon-on-steroids-flooding-warning-antonio-guterres), but the recent floods affected more than 33 million people – destroying homes, crops, livelihoods and lives.

    Climate Reparations means repair for the harm of the climate crisis, paid for by the governments and corporations that have profited from it over hundreds of years. It means just transition to renewable energy; an end to debt traps, exploitation and extraction.

    Climate reparations also means better housing, education, healthcare and safe migration—for working class communities all over the world. Paid for by taxing companies that profit from destruction of people and the planet. A global Green New Deal.

    Add your name and help us build a movement of movements that defunds climate chaos and help us create a system of care and repair everywhere.
  decoration: "<link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css'
    rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v5/petition/climate-reparations-now?format=js&source=widget'></script><div
    id='can-petition-area-climate-reparations-now' style='width: 100%'><!-- this div
    is the target for our HTML insertion --></div>"
  map: false
  id: why
  buttons: []
  background_image: "/assets/images/aaa_8213.jpg"
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
- buttons: []
  text: |-
    # Join us

    Sign up here for our newsletter! Your data will be processed according to our [privacy policy](http://tpnt.uk/privacy "Privacy Policy").

    {% include an-blind-post.html petition="https://actionnetwork.org/api/v2/petitions/81ea4655-f544-43eb-b3c4-ace557bafef7/" %}
  decoration: "![](/assets/images/favicon.png)"
  map: false
  background_image: ''
  id: join
- text: |-
    # Co-leaders

    This bloc is supported by a number of UK organisations and collectives as part of the [global day for climate justice](https://climatejustice.uk) organised by the Climate Justice Coalition. Join our network by adding your group or organisation below.

    {% include partner-list.html background='light' %}
  buttons:
  - text: Add your group
    target: https://airtable.com/shrU9RuY0Vbe9iMZ1
  decoration: ''
  map: false
  background_image: ''
  id: groups
- buttons: []
  text: |-
    # Find out more

    Some frequently asked questions and answers

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
  id: faqs
credits: ''
header:
  full: true
  background_image: "/assets/images/dandelionsnpeople_small.png"
  image:
    link: ''
    location: left
  text: |-
    {% include qr.html url='https://c.tpnt.uk#qr' %}

    ## Demand Climate Reparations Now

    We believe that the British Government should tax the obscene profits of fossil fuel corporations who are worsening the climate crisis to pay the compensation and reparations that we owe to countries and communities that have contributed the least but are experiencing the worst climate loss and damage.

    Let's make polluters pay climate reparations to ensure that communities both at home and around the world can repair from the loss and damage caused by the climate crisis.

    Sign the petition and subscribe here.

    {% include an-form/base.html endpoint="https://actionnetwork.org/api/v2/petitions/6060da0f-e68b-4d99-b924-885d47f286e2/signatures" lines="first-name,email.postal-code,phone-number.submit." button="Sign"  %}
  buttons: []
  border_bottom:
    image: ''
    reflect: true
invert: odd

---
