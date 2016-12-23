$(document).ready(function() {
  $('#fade').hide();
  $('#fade').fadeIn(2000);
  function resetApp(){
    location.reload(false);
  };
  function fadeOut (){
    $('#fade').fadeOut(3000);
  };
  
  $('#greenStrict').hide();$('#redStrict').hide();
  $('#yellowStrict').hide();$('#blueStrict').hide();
  
  $('#reset').hide();
  
  function strictOn (){
      $('#green').hide();$('#red').hide();
      $('#yellow').hide();$('#blue').hide();
      $('#greenStrict').show();$('#redStrict').show();
      $('#yellowStrict').show();$('#blueStrict').show();
  };
  function strictOff (){
      $('#green').show();$('#red').show();
      $('#yellow').show();$('#blue').show();
      $('#greenStrict').hide();$('#redStrict').hide();
      $('#yellowStrict').hide();$('#blueStrict').hide();
  };
    
  function greenOff () {
    $("#green").show();
    $("greenLit").hide()
  };
  function greenOffStrict () {
    $("#greenStrict").show();
    $("greenLit").hide()
  };
  function greenOn () {
    $("#greenLit").show();
    $("#greenLit").hide();
  };
  
  function redOff () {
    $("#red").show();
    $("redLit").hide()
  };
  function redOffStrict () {
    $("#redStrict").show();
    $("redLit").hide()
  };
  function redOn () {
    $("#redLit").show();
    $("#redLit").hide();
  };
  
  function yellowOff () {
    $("#yellow").show();
    $("yellowLit").hide()
  };
  function yellowOffStrict () {
    $("#yellowStrict").show();
    $("yellowLit").hide()
  };
  function yellowOn () {
    $("#yellowLit").show();
    $("#yellowLit").hide();
  };
  
  function blueOff () {
    $("#blue").show();
    $("blueLit").hide()
  };
  function blueOffStrict () {
    $("#blueStrict").show();
    $("blueLit").hide()
  };
  function blueOn () {
    $("#blueLit").show();
    $("#blueLit").hide();
  };
  
  var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  var mistake = new Audio('http://soundbible.com/mp3/Basketball%20Buzzer-SoundBible.com-1863250611.mp3');
  var win = new Audio('http://soundbible.com/mp3/Applause-SoundBible.com-151138312.mp3');
  
  
  function greenSound(){
    greenAudio.play();
  };
  function redSound(){
    redAudio.play();
  };
  function yellowSound(){
    yellowAudio.play();
  };
  function blueSound(){
    blueAudio.play();
  };
  function mistakeSound() {
    mistake.play();
  };
  function applause(){
    win.play();
  };
  
  function greenLight(){
    $("#greenLit").toggle(); 
    $("#green").toggle();
    window.setTimeout(greenOn,500); 
    window.setTimeout(greenOff,500);
  };
  function redLight(){
    $("#redLit").toggle(); 
    $("#red").toggle();
    window.setTimeout(redOn,500); 
    window.setTimeout(redOff,500);
  };
  function yellowLight(){
    $("#yellowLit").toggle(); 
    $("#yellow").toggle();
    window.setTimeout(yellowOn,500); 
    window.setTimeout(yellowOff,500);
  };
  function blueLight(){
    $("#blueLit").toggle(); 
    $("#blue").toggle();
    window.setTimeout(blueOn,500); 
    window.setTimeout(blueOff,500);
  };
  
  function greenLightStrict(){
    $("#greenLit").toggle(); 
    $("#greenStrict").toggle();
    window.setTimeout(greenOn,500); 
    window.setTimeout(greenOffStrict,500);
  };
  function redLightStrict(){
    $("#redLit").toggle(); 
    $("#redStrict").toggle();
    window.setTimeout(redOn,500); 
    window.setTimeout(redOffStrict,500);
  };
  function yellowLightStrict(){
    $("#yellowLit").toggle(); 
    $("#yellowStrict").toggle();
    window.setTimeout(yellowOn,500); 
    window.setTimeout(yellowOffStrict,500);
  };
  function blueLightStrict(){
    $("#blueLit").toggle(); 
    $("#blueStrict").toggle();
    window.setTimeout(blueOn,500); 
    window.setTimeout(blueOffStrict,500);
  };
  
  var cseq = [];
  var useq = [];
  var count = 1;
  
  function genSeq (){
    $("#countLED").html(count);
    for(i=count;i<count+1;i++){
      var r = Math.floor(Math.random()*120);
      if(r<=30 && r >=1){
        cseq.push("g");
      }
      if(r<=60 && r >=31){
        cseq.push("r");
      }
      if(r<=90 && r >=61){
        cseq.push("y");
      }
      if(r<=120 && r >=91){
        cseq.push("b");
      }
    }
   
  };
  function genSeqStrict (){
    $("#countLED").html(count);
    for(i=count;i<count+1;i++){
      var r = Math.floor(Math.random()*120);
      if(r<=30 && r >=1){
        cseq.push("g");
      }
      if(r<=60 && r >=31){
        cseq.push("r");
      }
      if(r<=90 && r >=61){
        cseq.push("y");
      }
      if(r<=120 && r >=91){
        cseq.push("b");
      }
    }
   
  };
  
  function playSeq () {
    for(i=0;i<cseq.length + 1;i++){
      if(cseq[i]=="g"){
        window.setTimeout(greenSound, (i+1)*1000);
        window.setTimeout(greenLight, (i+1)*1000);
     }
      if(cseq[i]=="r"){
        window.setTimeout(redSound, (i+1)*1000);
        window.setTimeout(redLight, (i+1)*1000);
     }
      if(cseq[i]=="y"){
        window.setTimeout(yellowSound, (i+1)*1000);
        window.setTimeout(yellowLight, (i+1)*1000);
     }
      if(cseq[i]=="b"){
        window.setTimeout(blueSound, (i+1)*1000);
        window.setTimeout(blueLight, (i+1)*1000);
     }
  }
 };
  function playSeqStrict () {
    for(i=0;i<cseq.length+1;i++){
      if(cseq[i]=="g"){
        window.setTimeout(greenSound, (i+1)*1000);
        window.setTimeout(greenLightStrict, (i+1)*1000);
     }
      if(cseq[i]=="r"){
        window.setTimeout(redSound, (i+1)*1000);
        window.setTimeout(redLightStrict, (i+1)*1000);
     }
      if(cseq[i]=="y"){
        window.setTimeout(yellowSound, (i+1)*1000);
        window.setTimeout(yellowLightStrict, (i+1)*1000);
     }
      if(cseq[i]=="b"){
        window.setTimeout(blueSound, (i+1)*1000);
        window.setTimeout(blueLightStrict, (i+1)*1000);
     }
  }
 };
  
  function checkSeq (){
    for(i=0;i<useq.length;i++){
      if(useq[i]!=cseq[i]&&useq.length[i]==cseq.length[i]&&useq[cseq.length-1]!=cseq[cseq.length-1]){
      window.setTimeout(mistakeSound,100);
      useq = [];
      window.setTimeout(playSeq,2000);
        
    }      
      if(useq[i]==cseq[i]&&useq.length==cseq.length&&useq[cseq.length-1]==cseq[cseq.length-1]){
      count++;
      genSeq();
      playSeq();
      useq = [];
    }  
    }
  };
  function checkSeqWin (){
    for(i=0;i<useq.length;i++){
      if(useq[i]!=cseq[i]&&useq.length[i]==cseq.length[i]&&useq[cseq.length-1]!=cseq[cseq.length-1]){
      checkSeq();  
    }      
      if(useq[i]==cseq[i]&&useq.length==cseq.length&&useq[cseq.length-1]==cseq[cseq.length-1]){
      $('#countLED').html("- -")
      useq = [];
      cseq.length = 1;
      window.setTimeout(applause,1000);
      fadeOut();
      window.setTimeout(resetApp,4000);
    }  
    }
  };
  
  function checkSeqStrict (){
    for(i=0;i<useq.length;i++){
      if(useq[i]!=cseq[i]&&useq.length[i]==cseq.length[i]&&useq[cseq.length-1]!=cseq[cseq.length-1]){
      window.setTimeout(mistakeSound,100);
      useq = [];
      count = 1;
      $('#countLED').html(count);
      cseq.length = 1;
      //window.setTimeout(genSeqStrict,2000);
      window.setTimeout(playSeqStrict,2000);
        
    }      
      if(useq[i]==cseq[i]&&useq.length==cseq.length&&useq[cseq.length-1]==cseq[cseq.length-1]){
      count++;
      genSeqStrict();
      playSeqStrict();
      useq = [];
    }  
    }
  };
  function checkSeqStrictWin (){
    for(i=0;i<useq.length;i++){
      if(useq[i]!=cseq[i]&&useq.length[i]==cseq.length[i]&&useq[cseq.length-1]!=cseq[cseq.length-1]){
      checkSeqStrict();  
    }      
      if(useq[i]==cseq[i]&&useq.length==cseq.length&&useq[cseq.length-1]==cseq[cseq.length-1]){
      $('#countLED').html("- -")
      useq = [];
      cseq.length = 1;
      window.setTimeout(applause,1000);
      fadeOut();
      window.setTimeout(resetApp,4000);
    }  
    }
  };
  
  $("#greenLit").hide();$("#redLit").hide();$("#yellowLit").hide();$("#blueLit").hide();
  $("#indS").hide();$("#countLED").hide();
  
  $("#power").on("click",function(){
    $("#countLED").html("- -");  
    $("#countLED").toggle();
    $("#indS").hide();
    $("#power").hide();
    $("#reset").show();
    
  $("#strict").on("click",function(){
      strictOn();
      $("#indS").show();
      $("#countLED").html(count);
      genSeqStrict();
      playSeqStrict();  
    
    
  $("#greenStrict").on("click",function(){
      useq.push("g");
      greenAudio.play();
      $("#greenLit").toggle(); 
      $("#greenStrict").toggle();
      window.setTimeout(greenOn,500); 
      window.setTimeout(greenOffStrict,500);    
        //winning code 
  if(count==20&&useq.length==cseq.length){
    checkSeqStrictWin();
  };
    if(count<20){
      checkSeqStrict();  
    }
     });
  
  $("#redStrict").on("click",function(){
      useq.push("r");
      redAudio.play();
      $("#redLit").toggle(); 
      $("#redStrict").toggle();
      window.setTimeout(redOn,500);
      window.setTimeout(redOffStrict,500);
         //winning code 
  if(count==20&&useq.length==cseq.length){
    checkSeqStrictWin();
  };
    if(count<20){
      checkSeqStrict();  
    }   
       
     });
  
  $("#yellowStrict").on("click",function(){
      useq.push("y");
      yellowAudio.play();
      $("#yellowLit").toggle(); 
      $("#yellowStrict").toggle();
      window.setTimeout(yellowOn,500);
      window.setTimeout(yellowOffStrict,500);   
        //winning code 
  if(count==20&&useq.length==cseq.length){
    checkSeqStrictWin();
  };
   if(count<20){
      checkSeqStrict();  
    } 
     });
  
  $("#blueStrict").on("click",function(){
      useq.push("b");
      blueAudio.play();
      $("#blueLit").toggle(); 
      $("#blueStrict").toggle();
      window.setTimeout(blueOn,500);
      window.setTimeout(blueOffStrict,500);    
        //winning code 
  if(count==20&&useq.length==cseq.length){
    checkSeqStrictWin();
  };
    if(count<20){
      checkSeqStrict();
    }
    
     });
    
    
  });
  
  $("#start").on("click",function(){
      strictOff();
      $("#countLED").html(count);
      $("#indS").hide();
      genSeq();
      playSeq();  
    
    
  $("#green").on("click",function(){
      useq.push("g");
      greenAudio.play();
      $("#greenLit").toggle(); 
      $("#green").toggle();
      window.setTimeout(greenOn,500); 
      window.setTimeout(greenOff,500);
      if(count==20&&useq.length==cseq.length){
    checkSeqWin();
  };
    if(count<20){
      checkSeq();
    }
           
      
     });
  
  $("#red").on("click",function(){
      useq.push("r");
      redAudio.play();
      $("#redLit").toggle(); 
      $("#red").toggle();
      window.setTimeout(redOn,500);
      window.setTimeout(redOff,500);
       if(count==20&&useq.length==cseq.length){
    checkSeqWin();
  };
    if(count<20){
      checkSeq();
    }  
      
     });
  
  $("#yellow").on("click",function(){
      useq.push("y");
      yellowAudio.play();
      $("#yellowLit").toggle(); 
      $("#yellow").toggle();
      window.setTimeout(yellowOn,500);
      window.setTimeout(yellowOff,500);
       if(count==20&&useq.length==cseq.length){
    checkSeqWin();
  };
    if(count<20){
      checkSeq();
    }   
      
     });
  
  $("#blue").on("click",function(){
      useq.push("b");
      blueAudio.play();
      $("#blueLit").toggle(); 
      $("#blue").toggle();
      window.setTimeout(blueOn,500);
      window.setTimeout(blueOff,500);
       if(count==20&&useq.length==cseq.length){
    checkSeqWin();
  };
    if(count<20){
      checkSeq();
    }    
        
    
     });
  });
    
  });
  
  $('#reset').on("click",function(){
    fadeOut();
    window.setTimeout(resetApp,4000);
  });
  
});
