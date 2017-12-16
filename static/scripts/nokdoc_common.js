  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90965544-1', 'auto');
  ga('send', 'pageview');

  // Filtering and highlighting of search results https://jsfiddle.net/julmot/bs69vcqL/
  $.fn.pressEnter = function(fn) {  
    
        return this.each(function() {  
            $(this).bind('enterPress', fn);
            $(this).keyup(function(e){
                if(e.keyCode == 13)
                {
                  $(this).trigger("enterPress");
                }
            })
        });  
     }; 
  $(function() {
    $("input[name='keyword']").focus();
    var $input = $("input[name='keyword']"),
      $context = $("table tbody tr");
    $input.pressEnter(function() {
      var term = $(this).val();
      $context.show().unmark();
      if (term) {
        $context.mark(term, {
          "separateWordSearch": false,
          "wildcards": "enabled",
          done: function() {
            $context.not(":has(mark)").hide();
          }
        });
      }
    });
  });
