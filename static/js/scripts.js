
function send(){
  const form = document.getElementById('sign_up')
  ime = document.getElementById('ime').value;
  email = document.getElementById('email').value;
  sifra = document.getElementById('password').value;

  var podaci = {
    'name':ime,
    'email':email,
    'password':sifra

  }

    console.log(ime)
    console.log(email)
    console.log(sifra)
  

    fetch('http://127.0.0.1:5000/user/signup/', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: podaci,

  }).then(function(response){
    return response.text();
  }).then(function(text){
    console.log(text)
  }).catch(function(error){
    console.log(error)
  });
};


/*
function submit_entry(){

var names = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var podaci = {
        name:names,
        email: email,
        password: password,
  };

fetch(`${window.origin}/user/signup`),{
  method: 'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(podaci),
}

};



$("form[name=signup_form]").submit(function(e){
    var $form = $(this);
   var $error = $form.find('.error')
  var data = $form.serialize();

   $.ajax({
     url:'/user/signup/',
     type:'POST',
      data: data,
     dataType:'json',
     success: function(resp){
         console.log(resp);
      },
    error: function(resp){
           console.log(resp);
   }
 });
    


   e.preventDefault();
})*/
