
	 let status = 0;
	 let time = 0;
	 
	 function start(){
		status = 1;
		document.getElementById("startBtn").disabled = true;
		timer();
		
	 }
	 function stop(){
		status = 0;
		document.getElementById("startBtn").disabled = false;

	 }
	 function reset(){
		status = 0;
		time = 0;
		document.getElementById("startBtn").disabled = false;
		document.getElementById("timeLabel").innerHTML = "00:00";

	 }
	 function timer(){
	 
		if (status == 1 ){
			setTimeout(function(){
			time++;
				let min = Math.floor(time/100/60);
				let sec = Math.floor(time/100);
				if (min < 10 ) {
					min = "0" + min;
				}
				if (sec >= 60 ){
					sec = sec % 60;
				}
				if (sec < 10) {
					sec = "0" + sec;
				}
				document.getElementById("timeLabel").innerHTML = min + ":" + sec;
				timer();
				localStorage.setItem('timer', JSON.stringify(time));
				const retrievedObject = localStorage.getItem('timer');
				localStorage.removeItem('reset');
			},10);
		}
	 
	 }
	