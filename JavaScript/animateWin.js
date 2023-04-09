 const train = document.querySelector('.train');
 const title = document.querySelector('.title');
 
train.onclick = function() {
  const start = Date.now();

  const timer = setInterval(function() {
    const timePassed = Date.now() - start;

    train.style.top = timePassed / 2 + 'px';

    if (timePassed > 2000) clearInterval(timer);

  }, 15);
}

title.addEventListener('click', ()=>{
  const start = Date.now();
  const time = setInterval(function(){
  const set_time = Date.now() - start;
  title.style.left = set_time / 5 + 'px';

  if(set_time > 2000) clearInterval(time);
  
  },15);

})

// False answer /// 

const wrong = document.querySelector('.wrong');
const failed = document.querySelector('.failed');


wrong.addEventListener('click', ()=>{
  const start = Date.now();
  const time = setInterval(function(){
  const set_time = Date.now() - start;
  wrong.style.left = set_time / 5 + 'px';

  if(set_time > 2000) clearInterval(time);
  
  },15);

})

failed.onclick = function() {
  const start = Date.now();

  const timer = setInterval(function() {
    const timePassed = Date.now() - start;

  failed.style.top = timePassed / 2 + 'px';

    if (timePassed > 2000) clearInterval(timer);

  }, 15);
}




