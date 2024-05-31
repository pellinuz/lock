var input = document.getElementById("password");

function password() {
	console.log("yes");
	if (input.value === "password") {
		window.location.href = "https://bit.ly/GUIDAREGOLE";
	} else if (input.value === "") {
		window.location.href = "";
	} else {
		alert("The password is not correct!");
	}
}

input.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		password();
	}
});