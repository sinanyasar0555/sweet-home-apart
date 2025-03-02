// Oda detayları için veri
const roomDetails = {
    standart: {
        title: "14 Numaralı Daire",
        description: "45m² genişliğinde, konforlu ve tam donanımlı dairemiz sizleri bekliyor.",
        features: [
            "Double Yatak",
            "Oturma Alanı",
            "Ücretsiz Wi-Fi",
            "Smart TV",
            "Tam Donanımlı Mini Mutfak",
            "Banyo",
            "Saç Kurutma Makinesi",
            "Oda Servisi",
            "VIP Temizlik Servisi",
            "Mini Buzdolabı",
            "Sıcak Su",
            "Doğalgaz Kombi"
        ],
        images: [
            "images/room5.jpg",
            "images/room2.jpg"
        ]
    },
    deluxe: {
        title: "13 Numaralı Daire",
        description: "65m² genişliğinde, aile konaklamaları için ideal dairemiz huzurlu bir konaklama sunuyor.",
        features: [
            "Double Yatak",
            "Oturma Alanı",
            "Ücretsiz Wi-Fi",
            "Smart TV",
            "Tam Donanımlı Mini Mutfak",
            "Banyo",
            "Saç Kurutma Makinesi",
            "Oda Servisi",
            "VIP Temizlik Servisi",
            "Mini Buzdolabı",
            "Sıcak Su",
            "Doğalgaz Kombi"
        ],
        images: [
            "images/room9.jpg",
            "images/room4.jpg"
        ]
    },
    suit: {
        title: "12 Numaralı Daire",
        description: "85m² genişliğinde, geniş aileler için lüks ve konforlu dairemiz unutulmaz bir konaklama deneyimi sunuyor.",
        features: [
            "Double Yatak",
            "Oturma Alanı",
            "Ücretsiz Wi-Fi",
            "Smart TV",
            "Tam Donanımlı Mini Mutfak",
            "Banyo",
            "Saç Kurutma Makinesi",
            "Oda Servisi",
            "VIP Temizlik Servisi",
            "Mini Buzdolabı",
            "Sıcak Su",
            "Doğalgaz Kombi"
        ],
        images: [
            "images/room10.jpg",
            "images/room6.jpg"
        ]
    }
};

// Modal işlemleri
const modal = document.getElementById("roomDetailsModal");
const modalContent = document.getElementById("roomDetailsContent");
const closeBtn = document.getElementsByClassName("close")[0];

// Oda detaylarını açma fonksiyonu
function openRoomDetails(roomType) {
    const room = roomDetails[roomType];
    
    let featuresHTML = '';
    room.features.forEach(feature => {
        featuresHTML += `<li><i class="fas fa-check"></i> ${feature}</li>`;
    });

    let imagesHTML = '';
    room.images.forEach(image => {
        imagesHTML += `<img src="${image}" alt="${room.title}">`;
    });

    modalContent.innerHTML = `
        <h2>${room.title}</h2>
        <p class="room-description">${room.description}</p>
        <div class="room-images">${imagesHTML}</div>
        <h3>Oda Özellikleri</h3>
        <ul class="features-list">${featuresHTML}</ul>
        <div class="modal-buttons">
            <a href="https://wa.me/905442898257" class="btn btn-whatsapp" target="_blank">
                <i class="fab fa-whatsapp"></i> Rezervasyon İçin WhatsApp
            </a>
        </div>
    `;

    modal.style.display = "block";
}

// Modal kapatma işlemleri
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Newsletter form işlemleri
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log('Newsletter kaydı:', email);
    alert('Bülten aboneliğiniz başarıyla gerçekleştirilmiştir.');
    this.reset();
});

// Mobil menü toggle işlevi
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Menü ikonunu değiştir
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Sayfa kaydırıldığında menüyü kapat
    window.addEventListener('scroll', function() {
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Menü öğelerine tıklandığında menüyü kapat
    const menuItems = mainNav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}); 
