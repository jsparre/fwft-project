window.addEventListener('load',init,false);
function init(){
	
	var lastName=document.getElementById('lastName');
	var firstName=document.getElementById('firstName');
	var birthDate=document.getElementById('date');
    var submit=document.getElementById('submit');
    var reset=document.querySelector("[type='reset']");
	var form=document.getElementsByTagName('form')[0];
	
	lastName.addEventListener('blur',function(){showValue(lastName);},false);
    birthDate.addEventListener('blur',function(){showValue(birthDate);},false);
    reset.addEventListener('click',function(e){delText(field.value)});
	
	
	/*Auslesen von <input> */
	function showValue(field){
		console.log('inside showValue');
		console.log(field.value);
		
		if(field.value!=='')
			return true;
		else{
			alert('Field is empty!');	
			return false;
		}
	}

	form.addEventListener('submit',function(e){validate();e.preventDefault()},false);
	
	function validate(){
		console.log('inside validate');
		
		var regex=/[a-z]/;
		
		if(lastName.value===''){
			alert('Dont forget your last name!');
			return false;
		}
		else if(!isNaN(lastName.value)){
			alert('Names dont include numbers!');
			return false;
        }
		
		/*Abgleich eines regex mit der Methode test()*/
		else if(!regex.test(lastName.value)){
			alert('That doesnt fit the regex!');
			return false;
		}
		
		/*s. oben, ist schon mit lastName geprüft.
		besser in eine Funktion packen*/
		else if(firstName.value===''){
			alert('Dont forget your name!');
			return false;
		}
		
		else if(birthDate.value===''){
			alert('Dont forget your birthdate!');
			return false;
		}
		/*wenn true zurück gegeben wird, dann wird auch onsubmit ausgeführt*/
        else{
            addText(lastName.value, firstName.value, birthDate.value);
            return true;
        }
	}
	
    //resets the inputfield
    function delText(FieldValue){
        FieldValue.value = '';
    }

    function addText(lastName, firstName, birthDate){
		
        //1. Element erzeugen
        var newP=document.createElement('p');
        var personalInfo = [lastName, firstName, birthDate];
        newText=document.createTextNode("Your Lastname: " + personalInfo[0] + ", your Firstname: " + personalInfo[1] + ", your Birthdate: " + personalInfo[2]);
    
        //3. Inhalt in das Element einfügen
        newP.appendChild(newText);
    
        //4. Gefülltes Element in den DOM-Baum hängen
        document.getElementById("output").appendChild(newP);
    }
	
}
