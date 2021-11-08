function generate() {
    var x = document.getElementById('guess').value;
    if (!x || x < 1) {
        alert('please enter valid number');
        return;
    }
    var y = Math.floor(Math.random() * 100) + 1;

    if (x == y) {
        alert('Success');
        document.getElementById('gameover').style.display = "none";
        document.getElementById('one').style.display = "none";
        document.getElementById('success').style.display = "block";
        return;
    }
    else {
        var l = document.getElementById('circle').innerText;
        l = Number(l);
        l -= 1;
        if (l == 0) {
            alert("Game Over");
            document.getElementById('circle').innerHTML = 0;
            document.getElementById('gameover').style.display = "block";
            document.getElementById('one').style.display = "none";
            document.getElementById('success').style.display = "none";
            return;
        }
        else {
            document.getElementById('gameover').style.display = "none";
            document.getElementById('one').style.display = "block";
            document.getElementById('success').style.display = "none";
        }
        document.getElementById('circle').innerHTML = l;
    }
    return
}