const getTitle = (url) => {
    return fetch(`https://crossorigin.me/${url}`)
        .then((response) => response.text())
        .then((html) => {
            const doc = new DOMParser().parseFromString(html, "text/html");
            const title = doc.querySelectorAll('title')[0];
            return title.innerText;
        });
};

$('input[id="targetField"]').attr("style", "width:" + $(window).width() )

$('input[id="targetField"]').attr("style", "height:" + $(window).height())

// This one kehttp://kotaku.com/the-12-best-games-on-the-3ds-5878903eps the order the same as the URL list.
// Promise.all(
//   urls.map((url) => getTitle(url))
// ).then((titles) => {
//   console.log(titles);
// });


anon = (y) => y = $('input[id="targetField"]').val();
var Title = (url) => {
    // anon = (y) => y = $('input[id="targetField"]').val();
    url = anon();
    return getTitle(url).then(
        (title) => {
            var x = title.substr(0, 3);
            switch(x){
               
                case "DNS":
                    console.log(x); //modal pop should go here for manual entry
                    break;
                default:
                    console.log(title); //shoots ajax call to be sent to article section
            }
        })
}

// anon = (y) => y = $('input[id="targetField"]').val();
$('input[id="targetField"]').on("dragover", function(event) {
   


    event.stopPropagation();
 

});

$('input[id="targetField"]').on("dragleave", function(event) {
    event.preventDefault();
    event.stopPropagation();
 

});


$('input[id="targetField"]').on("drop", function(event) {


    event.stopPropagation();

    $('input[id="targetField"]').one("mousemove", function(event) {
        event.stopPropagation();
        var getLocation = function(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };
        url = anon();
        var l = getLocation(url);
        var w = l.hostname;
        link = $('input[id="targetField"]').val();
        
        
        switch(w) {
            case "www.youtube.com":
                console.log(link); //shoots link to video iframe
                break;
            case "vid.me":
                console.log(link); //shoots link to video iframe
                break;
            case "soundcloud.com":
                console.log(link); //shoots link to podcast iframe
                break;
            case "twitter.com":
                console.log(link); //shoots link to twitter component
                break;
            default:
                Title();
        };


        // Title();
    })


});