$(document).ready(function(){
    $(".toggleSide").click(function(){
        $('.sidebar').toggleClass("open");
        $('.sideTabs span').toggle();
        $('.mainPane').toggleClass("open");
        xpand=($('.mainPane').attr('class'));
        if(xpand.indexOf("open")<0 ){
            netWidth=$(window).width()-90;
            $('.mainPane').css("width",netWidth);
        }else
        {
            $('.mainPane').css("width","80%");
        }
        
    });
    $('.portTabs').click(function(){
        $('.categories').hide();
        $('.detailed-section').show();
        dataTitle=$(this).data('title');
        $('.detailed-section').find('.row').html('<div class="col-md-12">'+dataTitle+'</div>');
    });
    $('.sideTabs').click(function(){
        $('.detailed-section').hide();
        $('.categories').show();
    });
});