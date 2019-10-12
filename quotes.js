$(document).ready(function(){
  var randQuote;
  var corrAuthor;
  var randNum;
  
  getQuote();
  
  function getQuote(){
    var quotes = ["Stay Hungry.Stay Foolish.","All our dreams can come true if we have the courage to pursue them.","It does not matter how slowly you go, so long as you do not stop.","Success is walking from failure to failure with no loss of enthusiasm.","Someone is sitting in the shade today because someone planted a tree a long time ago.","Opportunities don't happen. You create them.","The best revenge is massive success.","I have not failed. I've just found 10,000 ways that won't work.","The biggest risk is not taking any risk","The successful warrior is the average man, with laser-like focus.","Everything you can imagine is real.","As we look ahead into the next century, leaders will be those who empower others.","Failure is an option here. If things are not failing, you are not innovating enough.","I HOPE MY DEATH MAKES MORE CENTS THAN MY LIFE."];
    var authors = ["Steve Jobs","Walt Disney","Confucius","Winston Churchill","Warren Buffett","Chris Grosser","Frank Sinatra","Thomas Edison","Mark Zuckerberg","Bruce Lee","Pablo Picasso","Bill Gates","Elon Musk","Arthur Fleck"];
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73F129", "#73A857",'#16a085'];
    
    var color = Math.floor(Math.random() * colors.length);
      $("#body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
    randNum = Math.floor(Math.random() * quotes.length)
    randQuote = "\"" + quotes[randNum] + "\"";
    corrAuthor = authors[randNum];
    
    $(".quote").text(randQuote);
    $(".author").text(corrAuthor);
                     }
   
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + randQuote + "  " + corrAuthor);
  });
  
  $("#newquote").on("click", function(){
    getQuote();
  });
 
  
});
