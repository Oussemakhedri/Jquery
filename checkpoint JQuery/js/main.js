   $('#b').click(function(){

  
 var style=  $('#par').css("font-weight");
   if(style==400){
    $('#par').css("font-weight","bold")
   }
    else
    {$('#par').css("font-weight","")}
   

   })
  
  

    /*if (b.style.backgroundColor === "grey")
        b.style.backgroundColor = ""
    else
        b.style.backrgoundColor = "grey"*/
    console.log(b.style.backgroundColor )

    $('#i').click(function(){

        var italic=  $('#par').css("font-style");
          if(italic == 'normal'){
           $('#par').css("font-style","italic")
          }
           else
           {$('#par').css("font-style","normal")}
          
       
          })

    
    $('#u').click(function(){

        var underl=  $('#par').css("text-decoration-line");
          if(underl== "none"){
           $('#par').css("text-decoration-line","underline")
          }
           else
           $('#par').css("text-decoration-line","none")
          
       
          })
//family
          $(".font_family").change(function(){
              var font = $('.font_family')[0].value
              $('#par').css("font-family",font);
          })
//size

          $(".font_size").change(function(){
            var size = $('.font_size')[0].value
            $('#par').css("font-size",size+"px");
        })
