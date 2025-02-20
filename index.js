document.getElementById('loadButton').addEventListener('click', function(event) {
    document.getElementById('loader').style.display = 'block';

    setTimeout(function() {
        window.location.href = 'index2.html';
    }, 3000);
});