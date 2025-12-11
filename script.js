// Data Kuliner LENGKAP (10 item)
const kulinerData = [
    {
        id: 'gudeg',
        nama: 'Gudeg Jogja',
        asal: 'Yogyakarta',
        gambar: 'https://img.sanishtech.com/u/743da53892554fe7260b606bf89396c2.jpg', 
        deskripsi: 'Gudeg adalah masakan khas Yogyakarta dan Jawa Tengah yang terbuat dari nangka muda (gori) yang dimasak dengan santan dan gula aren dalam waktu yang sangat lama (bisa mencapai 8–10 jam). Proses memasak yang panjang ini membuat bumbu meresap sempurna, menghasilkan tekstur nangka yang empuk, legit, dan berwarna cokelat kemerahan gelap. Gudeg disajikan dengan berbagai pelengkap, terutama krecek (sambal goreng kulit sapi), telur pindang, ayam kampung suwir, dan areh (santan kental).',
        fakta: 'Gudeg memiliki dua varian utama yang kontras: Gudeg Kering (lebih tahan lama) dan Gudeg Basah (lebih berkuah). Selain itu, ada juga Gudeg Manggar yang dibuat dari bunga kelapa (manggar) muda, memberikan tekstur yang lebih crunchy dan rasa yang lebih eksklusif.',
        sejarah: 'Sejarah Gudeg erat kaitannya dengan berdirinya Kesultanan Mataram Islam di abad ke-16. Saat itu, para prajurit yang sedang membuka hutan untuk pembangunan keraton kesulitan mencari bahan makanan. Kelezatan dari masakan gori yang dimasak lama ini kemudian diadopsi dan dikembangkan menjadi hidangan istana, dan lambat laun menjadi ikon kuliner kota Yogyakarta.'
    },
    {
        id: 'rendang',
        nama: 'Rendang',
        asal: 'Minangkabau, Sumatera Barat',
        gambar: 'https://img.sanishtech.com/u/245265bfcfdef643aa3c8f67e25ac53b.jpg',
        deskripsi: 'Rendang adalah hidangan berbahan dasar daging sapi yang dimasak perlahan dalam santan kelapa dan campuran bumbu rempah-rempah yang kaya, hingga mengering. Proses memasak melalui tiga tahapan: Gulai, Kalio (setengah jadi), hingga menjadi Rendang (sangat kering) yang bisa memakan waktu hingga 8 jam. Teksturnya yang sangat kering membuatnya sangat awet.',
        fakta: 'Rendang dinobatkan sebagai "Makanan Terlezat di Dunia" versi CNN Travel. Dalam budaya Minang, bahan utamanya melambangkan empat pilar masyarakat adat: Daging (pemimpin), Santan (cendekiawan), Cabai (kaum ulama), dan Bumbu (keseluruhan masyarakat).',
        sejarah: 'Rendang adalah bagian tak terpisahkan dari tradisi merantau suku Minangkabau. Kemampuannya untuk bertahan hingga berminggu-minggu tanpa pengawet menjadikannya bekal wajib bagi para perantau yang melakukan perjalanan jauh.'
    },
    {
        id: 'papeda',
        nama: 'Papeda',
        asal: 'Maluku & Papua',
        gambar: 'https://img.sanishtech.com/u/79373a8c8658e026e12798eda22c6186.jpg',
        deskripsi: 'Makanan pokok tradisional yang terbuat dari sagu yang dicampur dengan air mendidih sambil diaduk cepat hingga membentuk bubur kental dan lengket seperti lem. Papeda hampir tidak memiliki rasa, sehingga wajib disajikan dengan Ikan Kuah Kuning yang kaya rempah, asam, dan gurih sebagai penyeimbang.',
        fakta: 'Papeda sangat kaya serat dan rendah kolesterol. Cara memakannya sangat khas, menggunakan dua buah sumpit kayu atau garpu khusus untuk menggulung dan mengambil gumpalan sagu, dan biasanya ditelan tanpa dikunyah (dihirup).',
        sejarah: 'Papeda merupakan warisan turun-temurun dari suku-suku di wilayah Indonesia Timur, di mana pohon sagu (Metroxyclon sagu) merupakan sumber karbohidrat utama dan sangat dihormati.'
    },
    {
        id: 'ayam-betutu',
        nama: 'Ayam Betutu',
        asal: 'Bali',
        gambar: 'https://img.sanishtech.com/u/a984217cde38c14687825873979249bf.jpg',
        deskripsi: 'Ayam Betutu adalah hidangan khas Bali yang menggunakan ayam utuh (atau bebek) yang diisi dengan Base Genep (bumbu lengkap khas Bali) yang sangat kuat dan kompleks. Ayam dibungkus rapat dengan daun pisang dan dipanggang atau dikukus perlahan selama minimal 6-8 jam hingga daging sangat empuk dan bumbu meresap hingga ke tulang.',
        fakta: 'Secara tradisional, Betutu dimasak dengan mengubur ayam bungkusan di dalam lubang tanah yang berisi bara api sekam panas (teknik memasak *slow-cooking* kuno).',
        sejarah: 'Dahulu, Ayam Betutu bukan makanan sehari-hari, melainkan hidangan ritual atau upacara adat (seperti upacara kematian, kelahiran, atau pernikahan) yang dianggap sakral dan mewah karena proses pembuatannya yang panjang dan penggunaan bumbu yang lengkap.'
    },
    {
        id: 'nasi-liwet',
        nama: 'Nasi Liwet',
        asal: 'Solo & Sunda (Jawa Barat)',
        gambar: 'https://img.sanishtech.com/u/85cd61630c7d739c9a8ed6ba4c737ffd.jpg',
        deskripsi: 'Nasi Liwet adalah hidangan nasi yang dimasak dengan santan kelapa, daun salam, serai, dan rempah lainnya, menghasilkan nasi yang gurih dan wangi. Terdapat dua versi populer: Nasi Liwet Solo yang disajikan dengan labu siam, areh (santan kental), dan lauk terpisah, serta Nasi Liwet Sunda yang dimasak bersama lauk (seperti ikan asin atau teri) dan dimakan dari kastrolnya langsung.',
        fakta: 'Memasak Liwet tradisional dilakukan dalam *kastrol* (periuk logam kecil) di atas api arang, yang menghasilkan aroma khas dan kerak nasi di bawahnya yang sangat gurih. Tradisi ini sering disebut *meluwet*.',
        sejarah: 'Tradisi *meluwet* sudah ada sejak lama di pedesaan Jawa. Hal ini sering dikaitkan dengan tradisi komunal dan merupakan simbol kebersamaan, kesederhanaan, dan rasa syukur setelah panen.'
    },
    {
        id: 'rawon',
        nama: 'Rawon',
        asal: 'Jawa Timur',
        gambar: 'https://img.sanishtech.com/u/bf1d157be817e58754eac3e3b5596674.jpg',
        deskripsi: 'Rawon adalah sup daging sapi khas Jawa Timur yang terkenal dengan kuah hitamnya yang unik dan kaya rasa. Warna hitam ini berasal dari bumbu utama yaitu kluwek (Pangium edule), yang memberikan rasa gurih yang mendalam dengan sedikit rasa pahit yang khas. Rawon disajikan dengan nasi, tauge pendek, telur asin, dan sambal terasi.',
        fakta: 'Kluwek adalah biji yang sangat beracun jika tidak diolah dengan benar. Biji ini harus direbus dan difermentasi (dibusukkan) terlebih dahulu sebelum dapat digunakan sebagai bumbu. Rawon diperkirakan sebagai salah satu masakan tertua yang tercatat dalam sejarah kuliner Indonesia.',
        sejarah: 'Rawon diperkirakan telah ada sejak abad ke-10 di Jawa Timur dan bahkan disebutkan dalam prasasti Jawa Kuno, Prasasti Taji. Ini menunjukkan bahwa hidangan ini memiliki akar yang sangat dalam dalam sejarah kuliner Kerajaan di Jawa.'
    },
    {
        id: 'sate-ayam',
        nama: 'Sate Ayam Madura',
        asal: 'Madura, Jawa Timur',
        gambar: 'https://img.sanishtech.com/u/f0a6d69a088008a32368ff708a1161fc.jpg',
        deskripsi: 'Sate Ayam Madura adalah potongan daging ayam yang ditusuk, dibakar di atas bara api, dan disajikan dengan bumbu kacang yang kental, manis, dan gurih yang dimasak dengan sedikit kecap. Sate ini disajikan dengan lontong atau nasi, dan ditaburi irisan bawang merah segar.',
        fakta: 'Bumbu kacang Madura memiliki kekhasan, yaitu digiling kasar dan dicampur minyak saat dibakar, memberikan tekstur yang berbeda dari sate daerah lain. Penjual Sate Madura sering membawa alat pemanggang sate yang terbuat dari drum bekas yang dimodifikasi.',
        sejarah: 'Sate adalah makanan yang terinspirasi oleh kebab dari Timur Tengah yang dibawa oleh para pedagang Muslim. Sate Ayam Madura menjadi populer karena banyaknya orang Madura yang merantau ke seluruh pelosok Indonesia, menyebarkan resep sate mereka ke mana-mana.'
    },
    {
        id: 'gado-gado',
        nama: 'Gado-Gado',
        asal: 'Betawi, Jakarta',
        gambar: 'https://img.sanishtech.com/u/d584c80b4b2d188466ab300771005d66.jpg',
        deskripsi: 'Gado-Gado sering disebut sebagai "Salad Indonesia". Hidangan ini terdiri dari berbagai sayuran rebus atau kukus (seperti kangkung, tauge, kacang panjang), kentang, telur, tahu, dan tempe, disiram dengan saus kacang yang dihaluskan secara manual, dicampur air asam Jawa dan gula merah.',
        fakta: 'Nama "Gado-Gado" berasal dari istilah Betawi yang berarti "campur aduk", sesuai dengan isinya yang sangat beragam. Saus kacangnya biasanya digiling atau diulek langsung saat dipesan untuk menjaga kesegaran dan kekentalannya yang optimal.',
        sejarah: 'Diperkirakan muncul dari kreativitas masyarakat Betawi dan peranakan Tionghoa di Batavia yang mencampur berbagai sayuran lokal dengan bumbu kacang yang diadaptasi dari bumbu pecel Jawa.'
    },
    {
        id: 'soto-banjar',
        nama: 'Soto Banjar',
        asal: 'Kalimantan Selatan',
        gambar: 'https://img.sanishtech.com/u/6ebf9a064cd38757509922c69dc2906a.jpg',
        deskripsi: 'Soto khas Banjarmasin dengan kuah bening kecokelatan yang kaya rempah wangi seperti cengkeh, kayu manis, dan kapulaga. Berbeda dari soto Jawa yang menggunakan kunyit, warna Soto Banjar lebih gelap dan kaya aroma. Isian utama adalah suwiran ayam, telur bebek, dan perkedel kentang.',
        fakta: 'Soto Banjar sering dimakan bersama ketupat dan memiliki ciri khas dicampur dengan susu (atau krimer) untuk menambah kekentalan dan gurih, meskipun varian yang bening juga populer.',
        sejarah: 'Cita rasa Soto Banjar sangat dipengaruhi oleh lalu lintas perdagangan di Sungai Barito dan Pelabuhan Banjarmasin, yang membawa rempah-rempah dari berbagai daerah dan budaya ke wilayah Borneo.'
    },
    {
        id: 'pempek',
        nama: 'Pempek Palembang',
        asal: 'Palembang, Sumatera Selatan',
        gambar: 'https://img.sanishtech.com/u/0f58f131299d47b88b7b6306417f6138.jpg',
        deskripsi: 'Pempek adalah makanan yang terbuat dari olahan daging ikan yang dihaluskan (biasanya ikan belida, tenggiri, atau gabus), dicampur dengan tepung sagu, dan dibentuk menjadi berbagai macam bentuk (Kapal Selam, Lenjer, Adaan, dll.). Disajikan bersama Cuko (kuah cuka hitam) yang pedas, asam, dan manis.',
        fakta: 'Varian Pempek Kapal Selam mendapatkan namanya karena bentuknya yang diisi telur dan tenggelam saat direbus. Kunci kelezatan Pempek terletak pada kualitas ikan dan kuah Cuko yang pekat yang terbuat dari gula batok (gula merah khas Palembang), bawang putih, dan cuka.',
        sejarah: 'Asal usul Pempek erat kaitannya dengan imigran Tiongkok ke Palembang di sekitar abad ke-16 atau 17. Penjualnya, seorang tua keturunan Tionghoa yang dipanggil "Apek," lama-kelamaan menjadi julukan untuk makanan tersebut, "Pempek."'
    }
];

// Data Resep Simulasi (Digunakan untuk alert pada bagian Resep Pilihan)
const resepData = {
    rendang: `Langkah-langkah Rendang Daging Sapi:
1. Siapkan 1 kg daging sapi, 2 liter santan kental, dan bumbu halus (cabai, bawang merah, bawang putih, lengkuas, kunyit, jahe, serai, daun kunyit, daun jeruk).
2. Tumis bumbu hingga harum, masukkan daging dan aduk hingga berubah warna.
3. Tuang santan, masak dengan api sedang sambil terus diaduk.
4. Kecilkan api setelah santan mendidih. Terus masak perlahan (minimum 4 jam) hingga santan mengering dan mengeluarkan minyak.
5. Rendang siap disajikan.`,

    basegenep: `Bumbu Dasar Bali (Base Genep):
Bahan-bahan: Bawang merah, bawang putih, cabai merah besar, cabai rawit, kencur, jahe, kunyit, lengkuas, serai, daun jeruk, daun salam, terasi, gula merah, dan garam.
Cara: Haluskan semua bahan hingga benar-benar lembut. Bumbu ini bisa disimpan lama dan digunakan sebagai dasar untuk Ayam Betutu, Sate Lilit, atau Lawar.`,

    cuko: `Resep Kuah Cuko Pempek:
1. Didihkan 500 ml air. Masukkan 250 gram gula batok (gula merah khas Palembang).
2. Haluskan 5 siung bawang putih, cabai rawit (sesuai selera pedas), dan garam.
3. Masukkan bumbu halus ke dalam rebusan gula. Masak hingga gula larut dan kuah mengental.
4. Matikan api, tambahkan cuka secukupnya (sekitar 3-4 sdm).
5. Saring kuah Cuko agar bersih dan siap disajikan dingin.`
};


document.addEventListener('DOMContentLoaded', function() {
    
    // --- Elemen Utama ---
    const enterBtn = document.getElementById('enter-website-btn');
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const navItems = document.querySelectorAll('.nav-links .nav-item'); 
    const pageSections = document.querySelectorAll('.page-section');
    const kulinerListContainer = document.getElementById('kuliner-list');
    
    // --- Logika 1. Halaman Pembuka (Klik Masuk) ---
    enterBtn.addEventListener('click', () => {
        // Efek fade-out splash screen
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Aktivasi section pertama (Home)
            const homeSection = document.getElementById('home');
            homeSection.classList.add('active-section');
            
            // Atur navigasi aktif
            document.querySelector('a[href="#home"]').classList.add('active-nav');
            window.scrollTo(0, 0); 
        }, 500); 
    });


    // --- Logika 2. & 3. Navigasi dan Motion (Fade-in antar Section) ---
    function setActiveSection(targetId) {
        // Nonaktifkan semua section dan reset opacity
        pageSections.forEach(section => {
            section.classList.remove('active-section');
            section.classList.add('hidden');
        });

        // Hapus kelas aktif dari semua link navigasi
        navItems.forEach(item => {
            item.classList.remove('active-nav');
        });

        // Cari section tujuan dan aktifkan dengan motion (fade-in)
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            
            setTimeout(() => {
                targetSection.classList.add('active-section');
                
                // Set navigasi link yang aktif
                const activeNavLink = document.querySelector(`a[href="${targetId}"]`);
                if (activeNavLink) {
                    activeNavLink.classList.add('active-nav');
                }
                
                window.scrollTo(0, 0); 
            }, 50); 
        }
    }
    
    // Event listener untuk klik navigasi (termasuk tombol 'Jelajahi Kuliner' di Home)
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            setActiveSection(targetId);
            
            // Tutup menu hamburger jika di mobile
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Event listener untuk tombol 'Jelajahi Kuliner' di Hero (Home)
    const heroBtn = document.querySelector('.hero-new .btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            setActiveSection(targetId);
        });
    }


    // --- Logika 3. 10 KULINER TERBAIK (Pembuatan Kartu Grid) ---
    kulinerData.forEach(kuliner => {
        const card = document.createElement('div');
        card.classList.add('kuliner-card');
        card.setAttribute('data-id', kuliner.id);
        
        const img = document.createElement('img');
        img.src = kuliner.gambar;
        img.alt = kuliner.nama;
        
        const nama = document.createElement('h4');
        nama.textContent = kuliner.nama;
        
        const asal = document.createElement('p');
        asal.classList.add('asal');
        asal.textContent = kuliner.asal;
        
        card.appendChild(img);
        card.appendChild(nama);
        card.appendChild(asal);
        
        kulinerListContainer.appendChild(card);
        
        card.addEventListener('click', () => openModal(kuliner.id));
    });


    // --- Logika Rekomendasi Chef (Beranda Fitur Unggulan) ---
    function displayChefRecommendation() {
        const recommendContainer = document.getElementById('chef-recommendation');
        
        // Pilih kuliner secara acak
        const randomIndex = Math.floor(Math.random() * kulinerData.length);
        const recommendedFood = kulinerData[randomIndex];
        
        // Buat konten HTML untuk rekomendasi
        const content = `
            <img src="${recommendedFood.gambar}" alt="${recommendedFood.nama}" class="recommend-image">
            <div class="recommend-details">
                <h4>${recommendedFood.nama}</h4>
                <p class="asal">Dari: ${recommendedFood.asal}</p>
                <p>${recommendedFood.deskripsi.substring(0, 150)}...</p>
                <button class="btn-small" data-id="${recommendedFood.id}">Lihat Detail Lengkap</button>
            </div>
        `;
        
        recommendContainer.innerHTML = content;
        recommendContainer.setAttribute('data-id', recommendedFood.id);
        
        const detailBtn = recommendContainer.querySelector('.btn-small');
        detailBtn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            openModal(id);
        });

        // Tambahkan event listener ke kartu chef agar bisa diklik keseluruhan
        recommendContainer.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-small')) {
                 openModal(recommendedFood.id);
            }
        });
    }

    displayChefRecommendation();
    
    // --- Logika 4. Resep Pilihan (Tombol Lihat Langkah-langkah) ---
    document.querySelectorAll('.recipe-card .btn-small').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const recipeId = this.getAttribute('data-recipe');
            if (resepData[recipeId]) {
                alert(`--- ${this.closest('.recipe-card').querySelector('h4').textContent} ---\n\n${resepData[recipeId]}`);
            }
        });
    });


    // --- Logika Modal dan Tabs (Deskripsi, Fakta, Sejarah) ---
    const modal = document.getElementById('kuliner-modal');
    const closeBtn = document.querySelector('.close-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const modalGambar = document.getElementById('modal-gambar');

    function openModal(id) {
        const data = kulinerData.find(k => k.id === id);
        if (!data) return;

        // Isi konten modal
        document.getElementById('modal-nama').textContent = data.nama;
        document.getElementById('modal-asal').textContent = data.asal;
        modalGambar.src = data.gambar;
        modalGambar.alt = data.nama;
        document.getElementById('deskripsi-text').textContent = data.deskripsi;
        document.getElementById('fakta-text').textContent = data.fakta;
        document.getElementById('sejarah-text').textContent = data.sejarah;

        // Reset tab ke Deskripsi
        tabBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.querySelector('[data-tab="deskripsi"]').classList.add('active');
        document.getElementById('tab-deskripsi').classList.add('active');

        modal.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', (event) => { if (event.target === modal) { modal.style.display = 'none'; } });
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            
            const targetTab = this.getAttribute('data-tab');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });
    
    
    // --- Logika Navigasi Mobile (Hamburger) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

});