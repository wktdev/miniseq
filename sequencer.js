



context = new webkitAudioContext(); 

var SequencerApp = $(function (){
        var drumPad = document.getElementById("drumPad");
	    var snare  = new audioApiKey("drumPad","snare.mp3","click"); 
		var milliseconds = 600;						
		var counter = 0  
		var counterMonitor =[];                                          // This variables only purpose is for console read out
		var noteGrid = [];

		var quarterNoteDiv = function() {
		
		var play = function(){
		         $('#drumPad').click();
		}
	
				     
				counter == 8 ? counter = 1 : counter++;  
				counterMonitor.pop();                                    /*These 3 lines do*/
				counterMonitor.push(counter);                   /*nothing except give a read out of the 4 count*/
				console.log( counterMonitor);                     /* in the console.*/
				
				$('#quarterNotes div').hide().filter (function() {			                        // All one
				return  this.id.match('quarterNoteDiv' + counter); }).show();          // function
				
				 noteGrid.forEach(function(x,i,noteGrid) {  if (noteGrid[i] === counter)  {play();}      });
				        
	    };
	    
	    
	    var quarterNote = setInterval(quarterNoteDiv, milliseconds);		

		$("#drumPad").mousedown(function () {
		      $(this).effect( "highlight",{color:"#749CD5"}, 320 );
		});
		
		
		var pushCounterToNoteGrid = function() {
			noteGrid.push(counter);
		
		}
						
		
		drumPad.addEventListener("mousedown", pushCounterToNoteGrid, false);
        

});



/*Sketched by WKTDev[at]gmail_dot_com*/
