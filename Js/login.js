document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('input-phone').value;
    const pinNumber = document.getElementById('input-pin').value;
    
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in')
    }
    else{
        alert('Wrong Phone Number or Pin')
    }
    window.location.href = 'home.html'
})