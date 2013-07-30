'use strict';
var J = jQuery.noConflict();

window.onload = function(){
    navigator.getUserMedia = (  navigator.getUserMedia ||
                                navigator.webkitGetUserMedia ||
                                navigator.mozGetUserMedia ||
                                navigator.msGetUserMedia
        );

    if (navigator.getUserMedia){
        navigator.getUserMedia(
            {video: true},
            function(localMediaStream){//Exito
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(localMediaStream)
            },
            function(error){//Error

            });
    } else {
        alert('Su navegador no soporta al API getUserMedia')
    }
}
