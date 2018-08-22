/**
 * Created by user on 2018/7/16.
 */
$(function () {
    // 首页动效果
    var banderD = function () {
        $('.bander-left').stop().animate({'left':'30%','opacity':'1'},1000);
        $('.bander-right').stop().animate({'right':'28%','opacity':'1'},1000)
    };

    banderD();

    $('#nextBtn').click(function () {
        location.href = '#page2'
    });

    $('.topPa li').each(function (index, date) {
        $(date).click(function () {
            location.href = $(date).find('a').attr('href')
        })
    });

    var width = document.documentElement.clientWidth;
    var showHid = false;
    if (width < 768){
        // 首页更换
        $('.bander-left').css('display', 'none');
        $('.bander-right').css('display', 'none');

        $('.topPa').css('display', 'none');
        $('.icon').css('display', 'block').click(function () {
            if (!showHid){
                $('.topPa').slideDown();
                showHid = true;
                $('.topPa li').each(function (index, date) {
                    $(date).click(function () {
                        setTimeout(function() {
                            $('.topPa').slideUp();
                        }, 200);

                        showHid = false;
                    })
                });

            } else {
                $('.topPa').slideUp() ;
                showHid = false
            }
        });

        $('.section').each(function (index, date) {
            $(date).click(function () {
                $('.topPa').slideUp();
                showHid = false;
            })
        });

        $('.pcSmall').css('display', 'none');
        $('.appSmall').show();

         // 组织架构
        $('.indexThreeImg li').each(function (index, date) {
            $(date).click(function () {
                $('.indexAlertT').fadeIn();
                $('.indexPositionT').html($(this).html())
                    .find('.indexThreeNew').show()
            })
        });

        $('.offIndexAlertT').click(function () {
            $('.indexAlertT').fadeOut();
            $('.indexPositionT').html();
            $('.indexThreeNew').hide();
            $('.indexThreeOld').show()
        });

        // 荣誉资质
        $('.indexFiveBox li').each(function (index, date) {
            $(date).click(function () {
                var obj = $('.indexPosition');

                $('.indexAlert').fadeIn();
                obj.html($(this).html());
                if(obj.find('img').height() > obj.find('img').width()){
                    $('.indexPosition  img').css('width','30%')
                } else {
                    $('.indexPosition  img').css('width','38%')
                }
            })
        });
    } else {

        $('.app-pagination').css('display', 'flex');
        $('.icon').css('display', 'none');
        $('.apptwo').hide();

        $('.appSmall').css('display', 'none');
        $('.pcSmall').show();

        // 组织架构样式
        $('.indexThreeImg li').each(function (index, date) {
            $(date).mouseover(function (){
                $('.indexThreeOld').eq(index).css('display', 'none');
                $('.indexThreeNew').eq(index).show();
                $('.indexThreeImg li img').eq(index).css({'marginTop':'30%', 'transition':'0.5s'});
                $(this).css({'transform':'scale(1.2)', 'transition':'0.5s'})
            }).mouseout(function (){
                $('.indexThreeOld').eq(index).show();
                $('.indexThreeNew').eq(index).hide();
                $('.indexThreeImg li img').eq(index).css({'marginTop':'50%', 'transition':'0.5s'});
                $(this).css({'transform':'scale(1)', 'transition':'0.5s'})
            });
        });

        $('.indexFiveBox li').each(function (index, date) {
            $(date).click(function () {

                var obj = $('.indexPosition');

                $('.indexAlert').fadeIn();
                obj.html($(this).html());
                if(obj.find('img').height() > obj.find('img').width()){
                    $('.indexPosition  img').css('width','30%')
                } else {
                    $('.indexPosition  img').css('width','50%')
                }
            })
        });
    }

    // 荣誉资质


    $('.offIndexAlert').click(function () {
        $('.indexAlert').fadeOut();
        $('.indexPosition').html()
    })


});