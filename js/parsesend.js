Parse.initialize("SzTtXKcXHazB6Lws6hLTwZO8g7xYUim28ePbwp1W", "UsQY7PRkoFsBUOHit6upDZ1C34sjziE5HXC4l8b3");
var PortfolioQuery=Parse.Object.extend("PortfolioQuery");

function sendMessage(){
	//Take user inputs
	var username=document.getElementById('name').value;
	var email=document.getElementById('email').value;
	var message =document.getElementById('message').value;

	var u= {
		emailId:email,
		name:username,
		callmessage:message
	};

	if(u.emailId==""&&u.name==""&&u.callmessage==""){
		//TODO: Sorry Can't just send an empty message.
		render('EMPTY');
	}else{
			if(validateEmail(u.emailId)){
				if(u.name!=""){
					//TODO: Send to Parse.
					sendToParse(u);
					
				}else{
					console.log("No Name.")
					//TODO: No Name?
					render('NONAME')
				}	
		}else{
			console.log("Not a valid emaild id");
			//TODO: Doesn't look like a valid Email Pal!
			render('EMAILINVALID');
		}	
	}

	
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function render(input){
	var err_msg='';
	var ele=document.getElementById('error-message') ;
	if(input=='EMPTY'){
		err_msg='Sorry can\'t just send an empty message'
	}else if(input=='NONAME'){
		err_msg='Name Please?';
	}else if (input=='EMAILINVALID'){
		err_msg='Email ID doesn\'t look right.'
	}else if (input=='SUCESS'){
		err_msg='Done. I\'ll contact you soon!'
	}else if(input=='ERRORMESSAGE'){
		err_msg='Oops! something went wrong, please try again.'
	}

	ele.textContent=err_msg;
}

function sendToParse(inputData){
	var PortfolioQuery=Parse.Object.extend("PortfolioQuery");
	var data= new PortfolioQuery();
	data.save(inputData,{
        success:function(object){
          render('SUCESS');
          Parse.Analytics.track('MessageSend', u, function(response){
		    	//alert('Analytics sent'); 
			});
        },
        error:function(model,error){
          render('ERRORMESSAGE')
        }
    })
}

