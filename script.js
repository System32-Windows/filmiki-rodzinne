function login(form) {
    if ((form.username.value == "Kamila") && (form.password.value == "Janiak")) {
        self.location.href = "success.html";
    }
    if ((form.username.value == "Jolanta") && (form.password.value == "Janiak")) {
        self.location.href = "success.html"
    }
    if ((form.username.value == "Katarzyna") && (form.password.value == "Długosz")) {
        self.location.href = "success.html"
    }
    if ((form.username.value == "Daniel") && (form.password.value == "Długosz")) {
        self.location.href = "success.html"
    } else {;
        document.getElementById("zakaz").style.display = "block"
        return false;
    }
}