$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJWQjRSZAXotYmcyVWNvel9YTjg0ZAVhkdHZAxY2tFckt1c1dqODlCOUlGNWpCRXNSZADZATeFJOVHdDc29BcHc1M3FMVU45bUhtdnJKVDV2UUpUeUhuVEhXdm5BZAXZAXekRDeWtfdDQ1Wm5vQ2Vvdk5UUwZDZD',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});