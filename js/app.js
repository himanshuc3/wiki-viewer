





$("#search-input").keypress(function(a) {
    if (a.which == 13) {
      var query = $(this).val();

      $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&callback=?",
      async: false,
      dataType: "json",
      success: function(data) {
        $('#result-list').html("");
        for (var i = 0; i < data[1].length; i++) {
          $('#result-list').prepend("<li><a href= " + data[3][i] + " target='_blank'>" + data[1][i] + "<p>" + data[2][i] + "</p></a></li>");

        }//for end
        
      }//function end
      
    });//ajax end
      
    

    }//if end
});//keypress end
 