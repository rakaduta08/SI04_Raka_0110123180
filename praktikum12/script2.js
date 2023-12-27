function validateForm(event) {
    event.preventDefault();
  
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const jam = document.getElementById('jam').value.trim();
    const tujuan = document.getElementById('tujuan').value.trim();
    const jumlah = document.getElementById('jumlah').value.trim();
  
    const errorNama = document.getElementById('error-nama');
    const errorEmail = document.getElementById('error-email');
    const errorJam = document.getElementById('error-jam');
    const errorTujuan = document.getElementById('error-tujuan');
    const errorJumlah = document.getElementById('error-jumlah');
  
    // Validasi Nama Pelanggan
    if (nama === '' || nama.length > 30) {
      errorNama.textContent = 'Nama pelanggan harus diisi dan maksimal 30 karakter';
      errorNama.style.display = 'block';
    } else {
      errorNama.style.display = 'none';
    }
  
    // Validasi Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
      errorEmail.textContent = 'Email harus diisi dengan format yang benar';
      errorEmail.style.display = 'block';
    } else {
      errorEmail.style.display = 'none';
    }
  
    // Validasi Jam Keberangkatan
    const jamPattern = /^(0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9]$/;
    if (jam === '' || !jamPattern.test(jam)) {
      errorJam.textContent = 'Jam keberangkatan harus dalam format HH.MM (contoh: 08.30)';
      errorJam.style.display = 'block';
    } else {
      errorJam.style.display = 'none';
    }
  
    // Validasi Tujuan Keberangkatan
    if (tujuan === '') {
      errorTujuan.textContent = 'Tujuan keberangkatan harus diisi';
      errorTujuan.style.display = 'block';
    } else {
      errorTujuan.style.display = 'none';
    }
  
    // Validasi Jumlah Tiket
    if (jumlah === '' || jumlah < 1 || jumlah > 10 || isNaN(jumlah)) {
      errorJumlah.textContent = 'Jumlah tiket harus diisi dengan angka antara 1 - 10';
      errorJumlah.style.display = 'block';
    } else {
      errorJumlah.style.display = 'none';
    }
  
    // Jika semua valid, tampilkan data
    if (
      errorNama.style.display === 'none' &&
      errorEmail.style.display === 'none' &&
      errorJam.style.display === 'none' &&
      errorTujuan.style.display === 'none' &&
      errorJumlah.style.display === 'none'
    ) {
      const resultContainer = document.getElementById('result-container');
      const result = document.getElementById('result');
  
      result.innerHTML = `
        <strong>Nama Pelanggan:</strong> ${nama}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Jam Keberangkatan:</strong> ${jam}<br>
        <strong>Tujuan Keberangkatan:</strong> ${tujuan}<br>
        <strong>Jumlah Tiket:</strong> ${jumlah}
      `;
  
      resultContainer.style.display = 'block';
    }
  }
  