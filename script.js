



//正式寫法

var videoTitle_array=[];
videoTitle_array[0]="長 / 短期投資策略"
videoTitle_array[1]="基本面、技術面"
videoTitle_array[2]="股本、EPS"
videoTitle_array[3]="殖利率、本益比"
videoTitle_array[4]="ROA、ROE"
videoTitle_array[5]="均線"
videoTitle_array[6]="K線"

var videointro_array=[];
videointro_array[0]="要玩股票必須先了解自己適什麼投資策略，可分成短期/長期，快來了解他們的意義以及特點吧！短期投資策略-透過買進跟賣出的價差獲利，可短時間獲利，但風險也比較高喔!長期投資策略-透過領取股利、公司長期穩定成長的股價來獲利，雖需要較長時間，但風險比較低喔!"
videointro_array[1]="基本面是什麼?技術面是甚麼?跟投資策略又有什麼關係呢?長期投資策略-透過基本面判斷公司經營成效，是否具有前景及穩定領取股利短期投資策略-透過技術面預測價格，抓準時間賺取買賣價差"
videointro_array[2]="股本是公司初期通過發行相同面額的股票所募集的資金，那你知道公司股本的大小也會影響股價的變化嗎?小股本的公司更容易受到消息影響導致股價波動喔!EPS稱為每股盈餘，是公司一股賺了多少錢，常被用來衡量不同公司之間的獲利能力"
videointro_array[3]="殖利率就是大家關心的每股股票賺多少現金股利，但殖利率沒有將時間考慮進去，所以也要看本益比喔!本益比則是買後多久會回本喔!"
videointro_array[4]="ROA、ROE聽起來很像，但是可不要搞混了喔!ROA(資產報酬率)是公司用總資產賺錢的能力ROE(股東權益報酬率)公司用股東的錢獲利的能力喔!這兩個指標都是數值愈高獲利能力愈好，但建議先看ROA再看ROE。"
videointro_array[5]="移動平均線簡稱為均線或是 MA或T，紀錄著一段時間的「平均」股價，分成短日、長日均線，可以用來判斷股價上漲或是下跌的趨勢喔!"
videointro_array[6]="透過K棒可以了解一天股價的最高、最低、開盤、收盤4個價格，紅K代表今天股價上升，綠K則代表股價下跌，但建議搭配均線觀看，才能進一步預測趨勢喔!"

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



