document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Data yang diharapkan
    var expectedUsername = 'ahmad2017';
    var expectedPassword = 'integrity';
  
    // Mendapatkan nilai dari form
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;
  
    // Periksa apakah nilai sesuai
    if (enteredUsername === expectedUsername && enteredPassword === expectedPassword) {
      alert('Login Sukses');
      window.location.href = "berhasillogin.html"; // Arahkan ke halaman baru
    } else {
      alert('Login Gagal');
    }
  });
  