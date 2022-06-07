const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert("Sabia que ibas a decir que si,te quiero mucho mi niña:(")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transfort',`translate(-${randomX}%,-${randomY}%)`);
})