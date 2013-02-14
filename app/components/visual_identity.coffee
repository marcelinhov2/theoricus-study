#<< app/utils/utils

class app.components.VisualIdentity extends app.AppView
  @title   : '.visual_identity h1'
  @socials : '.visual_identity  ul li a'
  @getIn   : '.visual_identity  .getIn a'

  showTitle = (callback) =>
    time = 0.8

    TweenLite.to $(@title), time, {css:{opacity:1, top:0, left:0, display:'block'},ease:Back.easeOut, onComplete: callback if callback?}  

  showSocial = (callback) =>
    delay = 0
    time = 0.5

    $(@socials).each((i, item) =>
      item = $(item)
      delay += .20
      time += .05
      
      TweenLite.to item, time, {css:{opacity:0.3, top:0, left:0, display:'block'},delay:delay,ease:Back.easeOut.config(3)}
    )

    delay += .20
    millisecounds = parseInt(delay * 1000)

    t = setTimeout(->
      do callback if callback?
    , millisecounds)

  showGetIn = () =>
    time = 0.8

    TweenLite.to $(@getIn), time, {css:{opacity:.3, top:0, left:0, display:'block'},ease:Back.easeOut}

  hideTitle = (callback) =>
    time = 0.5

    TweenLite.to $(@title), time, {css:{opacity:0, top:-20, left:0, display:'none'},ease:Back.easeOut, onComplete: callback if callback?}  

  hideSocial = (callback) =>
    delay = 0
    time = 0.5

    $($(@socials).get().reverse()).each((i, item) =>
      item = $(item)
      delay += .20
      time += .05
      
      tween = TweenLite.to item, time, {css:{opacity:0, top:-20, left:0, display:'none'},delay:delay,ease:Back.easeOut.config(3)}
    )

    delay += .20

    setTimeout (->
      do callback if callback?
    ), ( delay * 1000 )

  @show : =>
    showQueue = new app.utils.Queue [showTitle, showSocial]
    showQueue.start showGetIn

  @hide : =>
    hideQueue = new app.utils.Queue [hideSocial, hideTitle]
    do hideQueue.start