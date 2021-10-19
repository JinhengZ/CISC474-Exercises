$( "document" ).ready(function() {
    console.log( "ready!" );
    
  //   $("#nameform").submit(function(){

  //     var lName = $("#lname").val();
  //     var fName = $("#fname").val();
  // });

    $("#go").click(function(){

      var lName = $("#lname").val();
      var fName = $("#fname").val();
      
      $('#jumbotron').html(fName+lName);
      //$('#jumbotron').html(fName);

  });

  $("#nameform").click(function(e) {
    e.preventDefault(); // <==stop page refresh==>
});
 
});