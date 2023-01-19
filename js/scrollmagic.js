var controller = new ScrollMagic.Controller();

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.first-caption' )
    // .addIndicators( {name: 'premier' } )
    .setClassToggle( '.first-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.second-caption' )
    // .addIndicators( {name: 'deuxieme' } )
    .setClassToggle( '.second-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.third-caption' )
    .offset(200)
    // .addIndicators( {name: 'troisième' } )
    .setClassToggle( '.third-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );
    
var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.fourth-caption' )
    // .addIndicators( {name: 'quatrième' } )
    .setClassToggle( '.fourth-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.fifth-caption' )
    // .addIndicators( {name: 'cinquième' } )
    .setClassToggle( '.fifth-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.sixth-caption' )
    // .addIndicators( {name: 'sixième' } )
    .setClassToggle( '.sixth-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.seventh-caption' )
    // .addIndicators( {name: 'septième' } )
    .setClassToggle( '.seventh-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.eighth-caption' )
    // .addIndicators( {name: 'huitième' } )
    .setClassToggle( '.eighth-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.ninth-caption' )
    // .addIndicators( {name: 'neuvième' } )
    .setClassToggle( '.ninth-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.tenth-caption' )
    // .addIndicators( {name: 'dixième' } )
    .setClassToggle( '.tenth-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneCaption = new ScrollMagic.Scene()
    .triggerElement( '.eleventh-caption' )
    .offset(-200)
    // .addIndicators( {name: 'onzième' } )
    .setClassToggle( '.eleventh-caption', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneStopScroll = new ScrollMagic.Scene()
    .triggerElement( '.crime-scene .strip-content-image' )
    .offset(200)
    .duration(500)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( 'html', 'has-no-scroll' )
    .reverse( false )
    .addTo( controller );

var sceneStopScroll = new ScrollMagic.Scene()
    .triggerElement( '.police-office' )
    .offset(300)
    .duration(500)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( 'html', 'has-no-scroll' )
    .reverse( false )
    .addTo( controller );

var sceneStopScroll = new ScrollMagic.Scene()
    .triggerElement( '.leon-home' )
    .offset(300)
    .duration(500)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( 'html', 'has-no-scroll' )
    .reverse( false )
    .addTo( controller );

var sceneStopScroll = new ScrollMagic.Scene()
    .triggerElement( '.cypher-club' )
    .offset(300)
    .duration(500)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( 'html', 'has-no-scroll' )
    .reverse( false )
    .addTo( controller );

var sceneStopScroll = new ScrollMagic.Scene()
    .triggerElement( '.cemetery' )
    .offset(800)
    .duration(500)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( 'html', 'has-no-scroll' )
    .reverse( false )
    .addTo( controller );

var teaserReveal = new ScrollMagic.Scene() 
    .triggerElement('.teaser')
    .offset(300)
    // .addIndicators( {name: 'teaser' })
    .setClassToggle( '.teaser', 'is-visible' )
    .reverse(false)
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.crime-scene .strip-content-image' )
    .offset(200)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.crime-scene', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.police-office' )
    .offset(200)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.police-office', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.leon-home' )
    .offset(200)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.leon-home', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.cypher-club' )
    .offset(200)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.cypher-club', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.rat-discussion' )
    .offset(-200)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.rat-discussion', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.cemetery' )
    .offset(-100)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.cemetery', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.blacksad-home' )
    .offset(200)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.blacksad-home', 'is-visible' )
    .reverse( false )
    .addTo( controller );

var sceneReveal = new ScrollMagic.Scene()
    .triggerElement( '.blacksad-shot' )
    .offset(200)
    // .addIndicators( {name: 'image' } )
    .setClassToggle( '.blacksad-shot', 'is-visible' )
    .reverse( false )
    .addTo( controller );