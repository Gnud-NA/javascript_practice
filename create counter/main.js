var count = 0;

var numberNode = document.querySelector('.number');
var btns = document.querySelectorAll('.btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        var styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
            numberNode.style.color = 'red';
        } else if(styles.contains("increase")) {
            count++;
            numberNode.style.color = 'green';
        } else {
            count = 0;
            numberNode.style.color = 'black';
        }
        numberNode.innerHTML = count;
    })
})