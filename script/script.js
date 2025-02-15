$(document).ready(function() {
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true,
        duration: 1000,
        gradients: true,
        acceleration: true,
        elevation: 50,
        when: {
            turning: function(event, page, view) {
                console.log("Turning to page " + page);
            },
            turned: function(event, page, view) {
                console.log("Now on page " + page);
            }
        }
    });
});
