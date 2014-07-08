// Magnifying Effect
$(document).ready(function(){

	var native_width = 0;
	var native_height = 0;

	$(".magnify").mousemove(function(e){
		if(!native_width && !native_height)
		{
			var image_object = new Image();
			image_object.src = $(".small-img").attr("src");
			native_width = image_object.width;
			native_height = image_object.height;
		}
		else
		{
			var magnify_offset = $(this).offset();
			var mx = e.pageX - magnify_offset.left;
			var my = e.pageY - magnify_offset.top;

			if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
			{
				$(".large-img").fadeIn(100);
			}
			else
			{
				$(".large-img").fadeOut(100);
			}
			if($(".large-img").is(":visible"))
			{
				var rx = Math.round(mx/$(".small-img").width()*native_width - $(".large-img").width()/2)*-1;
				var ry = Math.round(my/$(".small-img").height()*native_height - $(".large-img").height()/2)*-1;
				var bgp = rx + "px " + ry + "px";
				var px = mx - $(".large-img").width()/2;
				var py = my - $(".large-img").height()/2;
				$(".large-img").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	})
})

// Animations
$(function() {
    $('.fadein, .fadein2, .fadein3, .fadein4').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
          $(this).addClass('active');
        if (visiblePartY == 'top') {
          // top
        } else if (visiblePartY == 'bottom') {
          // bottom part of element is visible
        } else {
          // whole part of element is visible
        }
      } else {
        // element has gone out of viewport
      }
    });
});

$(function() {
    $('.slideup').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
          $(this).addClass('active2');
        if (visiblePartY == 'top') {
          // top
        } else if (visiblePartY == 'bottom') {
          // bottom part of element is visible
        } else {
          // whole part of element is visible
        }
      } else {
        // element has gone out of viewport
      }
    });
});

// Notification Form
$('.noti').click(function(){
   $(this).hide();
   $('form').show();
});
$('.noti2').click(function(){
   $('.noti').hide();
   $('form').show();
});

// Remove animations on Mobile


// Scroll To Top
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
$(".playVid").click(function(){
    $('#vimeoVid').html('<iframe src="//player.vimeo.com/video/90816320?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
});
$("body").on("click",".reveal-modal-bg, .closeMe",function(){
    $('#vimeoVid').html('');
});
});