const board = document.querySelector('#board'),
     SQUARES_NUMBER = 1000,
     colors = ["#e57373", "#ba68c8", "#90caf9", "#4db6ac", "#dce775", "#ffb74d", "#b0bec5", "#81c784","red",'violet','pink','green','yellow','blue'],
     start = document.querySelector('.start'),
     reset = document.querySelector('.reset');

start.addEventListener('click',() =>{
    start.style.display = 'none';
    reset.classList.add('active');
    boadr();
});
reset.addEventListener('click',() =>{
    start.style.display = 'block';
    reset.classList.remove('active');
    resetBoad();
});

document.addEventListener('keydown',event=>{
    if(event.key === 'Enter'){
        start.style.display = 'none';
        reset.classList.add('active');
        boadr();
    }
});
    function resetBoad(){
    const squareDel = document.querySelectorAll('.square');
    squareDel.forEach((n) => n.remove());
    }

    function boadr(){
        for(let i = 0 ; i < SQUARES_NUMBER ; i++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', () => {
                setColor (square);
            });
            square.addEventListener('mouseleave', () => {
                removeColor (square);
            });
        
            board.append(square);
        }
        
        function setColor(element){
            const color = getRandomColor()
            element.style.backgroundColor = color;
            element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
        }
        
        function removeColor(element){
            element.style.backgroundColor = '#1d1d1d';
            element.style.boxShadow = '0 0 2px black';
        } 
        function getRandomColor(){
            const indexColor = Math.floor(Math.random() * colors.length);
            return colors[indexColor] ;
        }
    }

