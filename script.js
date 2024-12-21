//your JS code here. If required.
        function checkExistingUser() {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            if (username && password) {
                document.getElementById('existing-user-button').style.display = 'block';
            }
        }

        // Handle login form submission
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('checkbox').checked;

            // If "remember me" is checked, store username and password in local storage
            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            alert(`Logged in as ${username}`);

            // After login, show the "Login as existing user" button if details are saved
            checkExistingUser();
        });

        // Function to handle "Login as existing user"
        function loginAsExisting() {
            const username = localStorage.getItem('username');
            alert(`Logged in as ${username}`);
        }

        // Check for existing user on page load
        checkExistingUser();
