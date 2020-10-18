var form = document.getElementById('register_form'); //form ID
 $( ".buttons" ).click(function(){ //class buttons
    for(var i=0; i < form.length; i++){
      if(form.elements[i].value === '' && form.elements[i].getElementsByTagName('input')){
        alert('There are some required fields!');
        return false;
      }
    }
 
var aceptList = ["gmail.com", "hotmail.com"];
var emailValue = $('input#user_email').val(); //input do id email
var splitArray = emailValue.split('@');

if(aceptList.indexOf(splitArray[1]) !== -1)
{
return true;
}
else{
alert("Only use Gmail or Hotmail email.");
return false;
}
 
});
