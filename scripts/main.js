const unavailable = document.querySelector("#unavailable");
unavailable.innerHTML = `
	<style>
		.register {
			text-align: center;
			color: red;
		}
	</style>
	<h4 class="register">Registration Unavailable</h4>
`;

const register = document.querySelector("#register");
register.addEventListener("click", function(event) {
	unavailable.innerHTML = `
		<style>
			.register, .announcement {
				text-align: center;
				color: red;
			}
		</style>
		<h4 class="register">Registration Unavailable</h4>
		<p class="announcement">Sorry, registration can only be accessed in the
		opening month of the registration, the month of the end 
		of the Domestic Competition.
	`;
});
