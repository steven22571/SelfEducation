document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var form = document.getElementById("login-form");
    var formData = new FormData(form);
    
    fetch("/login/", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = "/home/";
        } else {
            document.getElementById("error-message").textContent = data.error_message;
        }
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });
});
