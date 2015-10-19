
    $("#btn1").click(function(){
        
var angle = 0;
setInterval(function(){
      angle+=3;
     $("#egghi").rotate(angle);
},50);
        
    });


 $(document).ready(function(){
  
    $("#btn2").click(function(){
        $("#eggwalk1").fadeIn("slow"); 
    });
     
     
   $("#eggwalk1").hover(function(){
        $("#eggwalk1").hide(); 
        $("#eggwalk2").show(); 
    });  
     
    $("#eggwalk2").hover(function(){
        $("#eggwalk2").hide(); 
        $("#eggwalk1").show(); 
    }); 
});


 $(document).ready(function(){
  
    $("#btn3").click(function(){
        $("#egghot1").fadeIn("fast"); 
    });
     
   $("#egghot1").hover(function(){
        $("#egghot1").hide(2000); 
        $("#egghot2").show(3000); 
    });  
     
    $("#egghot2").hover(function(){
          $("#egghot1").hide(1000); 
        $("#egghot2").hide(1000); 
        $("#egghot3").show(3000); 
    }); 
     
     $("#egghot3").hover(function(){
          $("#egghot1").hide(1000); 
        $("#egghot3").hide(1000); 
        $("#egghot2").show(3000); 
    }); 
});

$(document).ready(function(){
  
    $("#btn4").click(function(){
        $("#eggfell").fadeIn("slow"); 
    });
     
   $("#eggfell").hover(function(){
        $("#eggfell").animate({
        left:'100px',
        opacity: '0.5',
        height: '100px',
        width:'100px'
        });
       
       
       
       $("#eggfell2").fadeIn("slow", function(){
       
           $("#eggfell2").animate({
        left:'100px',
        opacity: '1',
        height: '300px',
        width:'300px'
        });
       
       });
       
       
    });  
});

