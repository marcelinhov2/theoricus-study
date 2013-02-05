#<< app/utils/utils

class app.components.VisualIdentity extends app.AppView
  el: '.visual_identity'

  constructor : ->
    @title = $(@el + ' h1')
    @socials = $(@el + ' ul li')

  showTitle : (callback) =>
    @title.fadeIn 'slow', ->
      if callback
        do callback

  showSocial : (callback) =>
    @socials.each((i, item) =>
      item = $(item)
      link = item.find("a")
      delay = 200 * i
      
      item.delay(delay).fadeIn "slow"
    ).promise().done =>
      if callback
        do callback

  hideTitle : (callback) =>
    @title.fadeOut 'slow', ->
      if callback
        do callback

  hideSocial : (callback) =>
    @socials.each( (i, item) =>
      reverse_index = (@socials.length - 1) - i

      item = $(@socials[reverse_index])
      link = item.find("a")
      delay = 200 * i
      
      item.delay(delay).fadeOut "slow"
    ).promise().done =>
      if callback
        do callback

  showVisualIdentity : =>
    show = new app.utils.Queue [@showTitle, @showSocial]
    do show.queue

  hideVisualIdentity : =>
    hide = new app.utils.Queue [@hideSocial, @hideTitle]
    do hide.queue