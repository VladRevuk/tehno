(function ($) {
    var hwSlideSpeed = 700;
    var hwTimeOut = 1000;
    var hwNeedLinks = true;

    $(document).ready(function(e) {
        $('.slide').css(
            {"position" : "static"}).hide().eq(0).show();
        var slideNum = 0;
        var slideTime;
        slideCount = $("#slider .slide").size();
        var animSlide = function(arrow){
           clearTimeout(slideTime);
            $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
            if(arrow == "next"){
                if(slideNum == (slideCount-1)){slideNum=0;}
                else{slideNum++}
            }
            else if(arrow == "prew")
            {
                if(slideNum == 0){slideNum=slideCount-1;}
                else{slideNum-=1}
            }
            else{
                slideNum = arrow;
            }
            $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
            $("#menu0").removeClass("activea");
            $("#menu1").removeClass("activea");
            $("#menu2").removeClass("activea");
            $("#menu3").removeClass("activea");
            $("#menu"+slideNum).addClass("activea");
            $(".control-slide.active").removeClass("active");
            $('.control-slide').eq(slideNum).addClass('active');
        }
        if(hwNeedLinks){
            //var $linkArrow = $('<a id="prewbutton" href="#"> </a><a id="nextbutton" href="#"> </a>')
            //    .prependTo('#slider');
            $('#nextbutton1').click(function(){
                animSlide("next");
                return false;
            })
            $('#prewbutton1').click(function(){
                animSlide("prew");
                return false;
            })
            $('#nextbutton2').click(function(){
                animSlide("next");
                return false;
            })
            $('#prewbutton2').click(function(){
                animSlide("prew");
                return false;
            })
        }
        var $adderSpan = '';
        $('.slide').each(function(index) {
            $adderSpan += '<span class = "control-slide" id="control-slide'+index+'">' + index + '</span>';

            $("#menu"+index).click(function(){


                $('#control-slide'+index).click();
            })
        });
        $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
        $(".control-slide:first").addClass("active");
        $('.control-slide').click(function(){
            var goToNum = parseFloat($(this).text());
            animSlide(goToNum);
        });
        var pause = true;
        var rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
        $('#slider-wrap').hover(
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = true; rotator();
            });
        rotator();
    });

    $(document).ready(function(e) {
        $('.slidetwo').css(
            {"position" : "static"}).hide().eq(0).show();
        var slideNumtwo = 0;
        var slideTime;
        slideCounttwo = $("#slidertwo .slidetwo").size();
        var animSlide = function(arrow){
            clearTimeout(slideTime);
            $('.slidetwo').eq(slideNumtwo).fadeOut(hwSlideSpeed);
            if(arrow == "next"){
                if(slideNumtwo == (slideCounttwo-1)){slideNumtwo=0;}
                else{slideNumtwo++}
            }
            else if(arrow == "prew")
            {
                if(slideNumtwo == 0){slideNumtwo=slideCounttwo-1;}
                else{slideNumtwo-=1}
            }
            else{
                slideNumtwo = arrow;
            }
            $('.slidetwo').eq(slideNumtwo).fadeIn(hwSlideSpeed, rotator);
            $(".control-slide.active").removeClass("active");
            $('.control-slide').eq(slideNumtwo).addClass('active');
        }
        if(hwNeedLinks){
            //var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
            //    .prependTo('#slider');
            $('#nextbutton').click(function(){
                animSlide("next");
                return false;
            })
            $('#prewbutton').click(function(){
                animSlide("prew");
                return false;
            })
        }
        var $adderSpan = '';
        $('.slidetwo').each(function(index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
        $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wraptwo');
        $(".control-slide:first").addClass("active");
        $('.control-slide').click(function(){
            var goToNum = parseFloat($(this).text());
            animSlide(goToNum);
        });
        var pause = true;
        var rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
        $('#slider-wraptwo').hover(
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = true; rotator();
            });
        rotator();
    });
})(jQuery);