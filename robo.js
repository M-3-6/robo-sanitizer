$(".what,.why").hover(function(){
  $(this).css("backgroundColor","#ffc2c2");
});
$(".what").on("click",function(){
  $(this).css("backgroundColor","#ffc2c2");
  $(this).html("<p>Robosanitizer is a device which dispense a controlled amount of hand sanitizer.They function to conserve the amount of sanitizer used and stem infectious disease transmission.</p>");


});
$(".why").on("click",function(){
  $(this).css("backgroundColor","#ffc2c2");
  $(this).html("<p><li>easy to install</li><li>touch-free</li><li>re-usable</li><li>fully hygienic</li><li>conserves the amount of sanitizer</li></p>");
  

});
