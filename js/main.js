let index = 0;
let item = 0;
let totaItems = 0;
let imgSrc = "";
$(window).on("load", function() {
    $(".preloder").addClass("loaded");
})
$(document).ready(function() {

    $(".nav-toggle").click(function() {
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function() {
        if ($(window).width() < 768) {
            $(".header .nav").slideToggle();
        }
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    })
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height", wHeight + "px");

    $(".work-item-inner").click(function() {
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open");
        console.log(index);

        lightboxSlideShow();
    })
    $(".lightbox .prev").click(function() {


        if (item > 1) {
            item--;
            $(".lightbox-img").attr("src", imgSrc + "/" + item + ".PNG");
            $(".lightbox-counter").html(totaItems + " / " + item);
        }
    })
    $(".lightbox .next").click(function() {

        if (item < totaItems) {
            item++;
            $(".lightbox-img").attr("src", imgSrc + "/" + item + ".PNG");
            $(".lightbox-counter").html(totaItems + " / " + item);

        }
    })
    $(".lightbox-close").click(function() {
        $(".lightbox").removeClass("open");
    })
    $(".lightbox").click(function(event) {
        if ($(event.target).hasClass("lightbox")) {
            $(this).removeClass("open")
        }
    })
    var typed = new Typed("#element", {
        strings: ["a Software Engineer","a Web Developer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });
})

function lightboxSlideShow() {
    item = 1
    console.log(item);
    imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    totaItems = $(".work-item").eq(index).find("img").attr("data-max");
    console.log(totaItems);
    console.log(imgSrc + "/" + item + ".PNG");
    $(".lightbox-img").attr("src", imgSrc + "/" + item + ".PNG");
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totaItems + " / " + item);

}