function loadStatus() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('status_container').innerHTML = xhr.responseText;
            } else {
                console.error('Произошла ошибка при загрузке статуса');
            }
        }
    };
    xhr.open('GET', '/status', true);
    xhr.send();
}
