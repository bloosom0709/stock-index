



//正式寫法

var videoTitle_array=[];
videoTitle_array[0]="投資策略1"
videoTitle_array[1]="投資策略2"
videoTitle_array[2]="股本、EPS"
videoTitle_array[3]="殖利率、本益比"
videoTitle_array[4]="ROA、ROE"
videoTitle_array[5]="均線"
videoTitle_array[6]="K線"

var videointro_array=[];
videointro_array[0]="很多人為什麼在股市中迷失自己，或是盲目聽從別人的建議就亂買股票，很大的原因是不夠了解自己適合怎樣的投資方式。"
videointro_array[1]="第2支內容"
videointro_array[2]="第3支內容"
videointro_array[3]="第4支內容"
videointro_array[4]="第5支內容"
videointro_array[5]="第6支內容"
videointro_array[6]="第7支內容"

var videoURL_array=[];
videoURL_array[0]='<iframe class="video_URL" frameborder="0" src="https://www.youtube.com/embed/Nf1C1fSJG_8" allowfullscreen="true"></iframe>'
videoURL_array[1]='<iframe class="video_URL" frameborder="0" src="https://www.youtube.com/embed/gdGdO6KjF1I" allowfullscreen="true"></iframe>'
videoURL_array[2]='<iframe class="video_URL" frameborder="0" src="https://www.youtube.com/embed/PlCbgZxonJs" allowfullscreen="true"></iframe>'
videoURL_array[3]='<iframe class="video_URL" frameborder="0" src="https://www.youtube.com/embed/k8jAqe9QZ7I" allowfullscreen="true"></iframe>'
videoURL_array[4]='<iframe class="video_URL" frameborder="0" src="https://www.youtube.com/embed/RkQy3NlG1eo" allowfullscreen="true"></iframe>'
videoURL_array[5]='<iframe class="video_URL" frameborder="0" src="https://www.youtube.com/embed/Ej83dvkU-Z4" allowfullscreen="true"></iframe>'
videoURL_array[6]='<iframe class="video_URL" frameborder="0" src="https://www.youtube.com/embed/crIP7PuC8Bc" allowfullscreen="true"></iframe>'

var i=0;
function call_array(){
  
  $(".video_title").text(videoTitle_array[i]);
  $(".video_content").text(videointro_array[i]);
  $(".videobox").html(videoURL_array[i]);
}

$(".video_menu").click(function(){
  var cata=$(this).attr("data-cata");
  $(".show_cata").text(cata);
  if (cata=="strategy1"){
    i=0;
    call_array();
    // $(".video_title").text(videoTitle_array[0]);
    // $(".video_content").text(videointro_array[0]);
    // $(".videobox").html(videoURL_array[0]);
    // $(this).addClass("video_click");
    
    
  }else if(cata=="strategy2"){
    i=1;
    call_array();
    
  }else if(cata=="EPS"){
    i=2;
    call_array();
    
  }else if(cata=="P/E ratio"){
    i=3;
    call_array();
  }else if(cata=="ROA"){
    i=4;
    call_array();
  }else if(cata=="average"){
    i=5;
    call_array();
  }else if(cata=="Kline"){
    i=6;
    call_array();
  }
  
});

//緩慢滑動
$(document).on('click', '.Step_a', function(event){
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});

setTimeout(function () {
  $("#loading").hide();
}, 3000);

//檢選單元

// var img_1=[];
// img_1[0]='<img src="https://i.imgur.com/8UWbtDF.png" alt="">'
// img_1[1]='<img src="https://i.imgur.com/JE1Lo5y.png" alt="">'
// img_1[2]='<img src="https://i.imgur.com/uJR6A3e.png" alt="">'

// var n=0;
// function call_select(){
  
//   $(".img_1").html(img_1[n]);
//   $(".img_2").html(img_2[n]);
// }

// 學習導引
// $(window).scroll(function (e) {
//   if ($(window).scrollTop() >= 1500 & $(window).scrollTop() <= 4500) $(".bar_box").addClass("at_top");
//   else $(".bar_box").removeClass("at_top");
// });
$(window).scroll(function (e) {
  if ($(window).scrollTop() >= 800) $(".bar_box").addClass("at_top");
  else $(".bar_box").removeClass("at_top");
});





// $(".select_href").click(function(){s
//   var cata=$(this).attr("data-cata");
//   $(".show_cata").text(cata);
//   if (cata=="strategy"){
//     $(".img_1").html('<img src="https://i.imgur.com/8UWbtDF.png" alt="">');
//     $(".img_2").html('<img src="https://i.imgur.com/zbdeop3.png" alt="">');

//     $(".Title1").text('投資策略1');
//     $(".contain1").text('要玩股票必須先了解自己適合的投資策略，大體分為長期策略與短期策略。');

//     $(".Title2").text('投資策略2');
//     $(".contain2").text('短期策略關注甚麼?長期策略關注甚麼?這裡都會告訴你 !!');

//     $(".ROA_E").addClass("ROA_hidden");
    
//   }else if(cata=="formula"){
//     // n=1;
//     // call_select();
//     $(".img_1").html('<img src="https://i.imgur.com/JE1Lo5y.png" alt="">');
//     $(".img_2").html('<img src="https://i.imgur.com/0PgrBAU.png" alt="">');

//     $(".Title1").text('股本、EPS');
//     $(".contain1").text('股本跟公司的關係是甚麼?EPS第一次聽到好像很厲害(?');

//     $(".Title2").text('殖利率、本益比');
//     $(".contain2").text('殖利率、本益比兩個詞很常聽到，但到底在股票內是甚麼意思呢?');

//     $(".ROA_E").removeClass("ROA_hidden");
    
//   }else if(cata=="line"){
//     $(".img_1").html('<img src="https://i.imgur.com/uJR6A3e.png" alt="">');
//     $(".img_2").html('<img src="https://i.imgur.com/kQf1Fpj.png" alt="">');

//     $(".Title1").text('均線');
//     $(".contain1").text('股票看盤，常有很多條線跑來跑去，這些線到底代表什麼呢?');

//     $(".Title2").text('K線');
//     $(".contain2").text('股票看盤，有好多紅紅綠綠的東西，到底是什麼呢?');

//     $(".ROA_E").addClass("ROA_hidden");
//   }
  
// });



