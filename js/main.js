jQuery(document).ready(function($){
    //fixar o menu
    window.onscroll = function(){
        if(window.pageYOffset > 140){
            $('#header').addClass("active")
        }else{
            $('#header').removeClass("active")
        }
    }

    //Isotope
    let btns = $("#servicos .button-group button");

    btns.click(function(e){
        $("#servicos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#servicos .grid").isotope({
            filter: selector,
        });
    });

    $(window).on("load", function() {
        $("#servicos .grid").isotope({
            filter: "*",
        });
    });

    //magnify

    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter:"%curr% de %total%",
        },

    });

    
});