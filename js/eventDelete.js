// document.getElementById('input-btn').addEventListener('keyup', function(event){
//     const text = event.target.value;
//     const btnDelete = document.getElementById('delete-btn');
//     if(text === "delete"){
//         console.log('delete typed');
//         btnDelete.removeAttribute('disabled')
//     }else{
//         console.log('somthing else');
//         btnDelete.setAttribute('disabled', true)}
// })
// document.getElementById('item1').addEventListener('click', function(event){
//     console.log('item 1 clicked');
//     // event.stopPropagation()
//     event.stopImmediatePropagation()
// })
// document.getElementById('item2').addEventListener('click', function(){
//     console.log('item 2 clicked');
    
// })
// document.getElementById('item3').addEventListener('click', function(){
//     console.log('item 3 clicked');
    
// })
// document.getElementById('item4').addEventListener('click', function(){
//     console.log('item 4 clicked');
    
// })
// document.getElementById('item5').addEventListener('click', function(){
//     console.log('item 5 clicked');
    
// })
// document.getElementById('item6').addEventListener('click', function(){
//     console.log('item 6 clicked');
    
// })

// document.getElementById('item6').addEventListener('click', function(){
//     console.log('item 6 clicked');
//     document.getElementById('h1-click').addEventListener('click', function(){
//         console.log('h1-click clicked');
        
//     })
    
// })

// document.getElementById('item-list').addEventListener('click', function(){
//     console.log('item-list clicked');
    
// })


// document.getElementById('section-click').addEventListener('click', function(){
//     console.log('section-click clicked');
    
// })

// const itemClass = document.getElementsByClassName('item');
// for(const item of itemClass){
//     item.addEventListener('click', function(event){
//       event.target.parentNode.removeChild(event.target)
        
//     })
// }
document.getElementById('item-list')
    .addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target)
        
    })


document.getElementById('btn-new-item').addEventListener('click', function (){

   const ol = document.getElementById('item-list');

   let li = document.createElement('li');
   li.classList.add('item');
   li.innerText = 'its new item added';

console.log(li);

   ol.appendChild(li);
})

// document.getElementById('btn-remove-item')
//     .addEventListener('click', function(event){
//         const ol = document.getElementById('item-list');
        
//         const li = document.getElementsByClassName('item');

//        event.parentNode.removeChild(li)
        
//     })

