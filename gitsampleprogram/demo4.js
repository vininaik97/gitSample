// quertSelector



// var inp=document.querySelector('input');
// inp.value="hello world";


var title=document.querySelectorAll('.title');

title[2].style.backgroundcolor='yellow';
    



var odd= document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length;i++){
    // odd[i].textContent="hello";
    odd[i].style.backgroundcolor='#f4f4f4';
}
