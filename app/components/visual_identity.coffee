#<< app/utils/utils

class app.components.VisualIdentity extends app.AppView
  el: '.visual_identity'

  constructor : ->
    @title = $(@el + ' h1')
    @socials = $(@el + ' ul li')

  showTitle : (callback) =>
    @title.fadeIn 'slow', ->
      do callback if callback?

  showSocial : (callback) =>
    @socials.each((i, item) =>
      item = $(item)
      link = item.find("a")
      delay = 150 * i
      
      item.delay(delay).fadeIn "slow"
    ).promise().done =>
      do callback if callback?

  hideTitle : (callback) =>
    @title.fadeOut 'slow', ->
      do callback if callback?

  hideSocial : (callback) =>
    @socials.each( (i, item) =>
      reverse_index = (@socials.length - 1) - i

      item = $(@socials[reverse_index])
      link = item.find("a")
      delay = 150 * i
      
      item.delay(delay).fadeOut "slow"
    ).promise().done =>
      do callback if callback?

  showVisualIdentity : =>
    showQueue = new app.utils.Queue [@showTitle, @showSocial]
    do showQueue.start

  hideVisualIdentity : =>
    hideQueue = new app.utils.Queue [@hideSocial, @hideTitle]
    do hideQueue.start