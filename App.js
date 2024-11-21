var users = []; // Array to store user data

        class Person {
            constructor(username, password, email, gender, city) {
                this.username = username;
                this.password = password;
                this.email = email;
                this.gender = gender;
                this.city = city;
            }
        }

        function validateForm() {
            var isValid = true;

            // Clear all errors
            document.querySelectorAll(".error").forEach(error => error.textContent = "");

            // Get form values
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var email = document.getElementById("email").value;
            var gender = document.querySelector('input[name="gender"]:checked');
            var city = document.getElementById("city").value;

            // Validation
            if (!username) {
                document.getElementById("usernameError").textContent = "Username is required.";
                isValid = false;
            }

            if (!password) {
                document.getElementById("passwordError").textContent = "Password is required.";
                isValid = false;
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                document.getElementById("emailError").textContent = "Email is required.";
                isValid = false;
            } else if (!emailRegex.test(email)) {
                document.getElementById("emailError").textContent = "Invalid email format.";
                isValid = false;
            }

            if (!gender) {
                document.getElementById("genderError").textContent = "Gender is required.";
                isValid = false;
            }

            if (!city) {
                document.getElementById("cityError").textContent = "City is required.";
                isValid = false;
            }

            return isValid;
        }

        function submitForm() {
            if (!validateForm()) return;

            // Get form values
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var email = document.getElementById("email").value;
            var gender = document.querySelector('input[name="gender"]:checked').value;
            var city = document.getElementById("city").value;

            // Check for existing username or email
            if (users.some(user => user.username === username)) {
                alert("Username already exists.");
                return;
            }

            if (users.some(user => user.email === email)) {
                alert("Email already exists.");
                return;
            }

            // Create new user
            var newUser = new Person(username, password, email, gender, city);
            users.push(newUser);

            alert("User created successfully!");
            console.log("Users Array:", users);

            // Reset form
            document.getElementById("userForm").reset();
        }