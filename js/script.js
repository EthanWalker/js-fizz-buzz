$( document ).ready(function() {
  
  // For loop from 1-100
  // Uses modulus operator to test if
  // current iterator value is divisible
  // and  appends correct result to the 
  // list being displayed on page.
    for(i = 1; i <= 100; i++)
    {
      if(i%3 == 0 && i%5 == 0)
      {
        $(".list").append("<li>FizBuzz</li>");
      }
      else if(i%3 == 0)
      {
        $(".list").append("<li>Fiz</li>");
      }
      else if(i%5 == 0)
      {
        $(".list").append("<li>Buzz</li>");
      }
      else
      {
        $(".list").append("<li>" + i + "</li>");
      }
    } 
});