document.getElementById('input-btn').addEventListener('keyup', function(event){
    const text = event.target.value;
    const btnDelete = document.getElementById('delete-btn');
    if(text === "delete"){
        console.log('delete typed');
        btnDelete.removeAttribute('disabled')
    }else{
        console.log('somthing else');
        btnDelete.setAttribute('disabled', true)}
})
