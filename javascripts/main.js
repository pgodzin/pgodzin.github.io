(function($) {
$(document).ready(function(){

  // putting lines by the pre blocks
  $("pre").each(function(){
    var pre = $(this).text().split("\n");
    var lines = new Array(pre.length+1);
    for(var i = 0; i < pre.length; i++) {
      var wrap = Math.floor(pre[i].split("").length / 70)
      if (pre[i]==""&&i==pre.length-1) {
        lines.splice(i, 1);
      } else {
        lines[i] = i+1;
        for(var j = 0; j < wrap; j++) {
          lines[i] += "\n";
        }
      }
    }
    $(this).before("<pre class='lines'>" + lines.join("\n") + "</pre>");
  });

  var headings = [];

  var collectHeaders = function(){
    headings.push({"top":$(this).offset().top - 15,"text":$(this).text()});
  }

  if($(".markdown-body h1").length > 1) $(".markdown-body h1").each(collectHeaders)
  else if($(".markdown-body h2").length > 1) $(".markdown-body h2").each(collectHeaders)
  else if($(".markdown-body h3").length > 1) $(".markdown-body h3").each(collectHeaders)

  $(window).scroll(function(){
    if(headings.length==0) return true;
    var scrolltop = $(window).scrollTop() || 0;
    if(headings[0] && scrolltop < headings[0].top) {
      $(".current-section").css({"opacity":0,"visibility":"hidden"});
      return false;
    }
    $(".current-section").css({"opacity":1,"visibility":"visible"});
    for(var i in headings) {
      if(scrolltop >= headings[i].top) {
        $(".current-section .name").text(headings[i].text);
      }
    }
  });

  $(".current-section a").click(function(){
    $(window).scrollTop(0);
    return false;
  })

  var spells = ['Theres a lady whos sure all that glitters is gold'];
  
  var hour = (new Date).getHours();
  $('#spell').html(spells[hour%spells.length]);

  var song = [
    'And she\'s buying a stairway to heaven',
    'When she gets there she knows, if the stores are all closed',
    'With a word she cant get what she came for.',
    'Ooh, ooh, and she\'s buying a stairway to heaven.',
    'There\'s a sign on the wall but she wants to be sure',
    'Cause you know sometimes words have two meanings.',
    'In a tree by the brook, there\'s a songbird who sings,',
    'Sometimes all of our thoughts are misgiven.',
    
    '',
    '',
    '',
"                                 ____     ",             
"                               d88P'`88b    ",                
"d8888888888888888F'           |888    88b      ",        
       "      .dF'      __      `88b   d88P       __",  
      "     .dF'     d888888b    `88b          d888888b",    
     "    .dF'      d8b  `Y88b    `88b.       d8b  `Y88b  ",    
    "   .dF'        888b(*)888xxxxxx888bxxxxxx888b(*)888     ",     
   "  .dF'           888oo8P         `88b     888oo8P ", 
  " .dF'               ~~~~     d88P   `88b       ~~~", 
 ".dF'                          88b.   888|             ",         
"d88b.                            88b.d88P      ", 
 "888b.                            ~~~~~           ",   
    "888b.           .d8888b.      d888888888==-      ",                
       "888b.        8888L 88b.    `888888P~~            __________          ", 
          "888b.      8F  8888xxxxx8888xxxxxxxxxxx88888888888 ", 
             "888b.        d8P~~~~~~", 
                "888b.. ..d8F", 
                   "888888F", 
                      "~~~ "
  ];

  var line = 0;

  var sing = function () {
    console.log(song[line%song.length]);
    line++;
    setTimeout(sing, 500);
  };

  setTimeout(sing, 5000);

});
})(jQuery)
