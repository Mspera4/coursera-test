//DOM manipuation
document.addEventListener("DOMContentLoaded",
function (event) {
	function sayHello (event) {
		var name =
			document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";
		document
			.getElementById("content")
			.innerHTML = message;
			
			if (name === "student") {
				var title = 
					document
					.querySelector("#title")
					.textContent;
					title += " and Lovin' it!";
					document
					.querySelector("h1")
					.textContent = title;
			}
		}

	document.querySelector("button")
	.addEventListener("click", sayHello);
}
);