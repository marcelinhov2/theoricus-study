#<< app/utils/utils

class app.components.VisualIdentity extends app.AppView
  @title   : '.visual_identity h1'
  @socials : '.visual_identity  ul li a'

  showTitle = (callback) =>
    time = 0.8

    TweenLite.to $(@title), time, {css:{opacity:1, top:0, left:0},ease:Back.easeOut, onComplete: callback if callback?}  

  showSocial = (callback) =>
    delay = 0
    time = 0.5

    $(@socials).each((i, item) =>
      item = $(item)
      delay += .20
      time += .05
      
      TweenLite.to item, time, {css:{opacity:0.3, top:0, left:0},delay:delay,ease:Back.easeOut.config(3)}

      # item.delay(delay).fadeIn "slow"
    ).promise().done =>
      do callback if callback?

  hideTitle = (callback) =>
    $(@title).fadeOut 'slow', ->
      do callback if callback?

  hideSocial = (callback) =>
    $(@socials).each( (i, item) =>
      reverse_index = (@socials.length - 1) - i

      item = $(@socials[reverse_index])
      link = item.find("a")
      delay = 150 * i
      
      item.delay(delay).fadeOut "slow"
    ).promise().done =>
      do callback if callback?

  @show : =>
    showQueue = new app.utils.Queue [showTitle, showSocial]
    do showQueue.start

  @hide : =>
    hideQueue = new app.utils.Queue [hideSocial, hideTitle]
    do hideQueue.start