#<< app/utils/utils

class app.components.VisualIdentity extends app.AppView
  el: '.visual_identity'

  constructor : ->
    @Utils = new app.utils.Utils

    @title = $(@el + ' h1')
    @socials = $(@el + ' ul li')
    
    do @animateVisualIdentity

  showTitle : =>
    @title.fadeIn 'slow'

  showSocial : =>
    i = 0

    while i < @socials.length
      item = $(@socials[i])
      link = item.find("a")
      delay = 200 * i
      
      item.delay(delay).fadeIn "slow"
      i++

  animateVisualIdentity : =>
    do @showTitle
    do @showSocial