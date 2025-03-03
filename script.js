// Sweet Home Apart Otel - Script
// Updated: 2024-03-03

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

// Modal işlemleri için fonksiyon
function openRoomDetails(roomType) {
    const modal = document.getElementById("roomDetailsModal");
    const contentDiv = document.getElementById("roomDetailsContent");
    const room = roomDetails[roomType];
    
    if (!room) return;
    
    let html = `
        <h2>${room.title}</h2>
        <p class="room-description">${room.description}</p>
        <div class="room-images">
    `;
    
    room.images.forEach(img => {
        html += `<img src="${img}" alt="${room.title}">`;
    });
    
    html += `</div><ul class="features-list">`;
    
    room.features.forEach(feature => {
        html += `<li><i class="fas fa-check"></i> ${feature}</li>`;
    });
    
    html += `</ul>`;
    
    contentDiv.innerHTML = html;
    modal.style.display = "block";
    
    // Modal kapatma işlemi
    const closeBtn = document.getElementsByClassName("close")[0];
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }
    
    // Dışarı tıklayınca kapatma
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Mobil menü toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const nav = document.getElementById("main-nav");
    
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }
    
    // Menü öğelerine tıklandığında menüyü kapat (mobil görünümde)
    const menuItems = document.querySelectorAll("#main-nav a");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove("active");
            }
        });
    });
    
    // Sayfa yüklendiğinde ve yeniden boyutlandırıldığında galeri öğelerini düzenle
    function adjustGalleryItems() {
        const galleryItems = document.querySelectorAll(".gallery-item");
        if (galleryItems.length > 0) {
            // Galeri öğelerinin boyutlarını ayarla
            galleryItems.forEach(item => {
                // Mobil görünümde farklı aspect ratio
                if (window.innerWidth <= 768) {
                    item.style.paddingBottom = "75%"; // 4:3 oranı
                } else {
                    item.style.paddingBottom = "56.25%"; // 16:9 oranı
                }
            });
        }
    }
    
    // Sayfa yüklendiğinde çalıştır
    adjustGalleryItems();
    
    // Pencere yeniden boyutlandırıldığında çalıştır
    window.addEventListener("resize", adjustGalleryItems);
});

// Performans iyileştirmeleri
// Resimlerin lazy loading ile yüklenmesi
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    if ("loading" in HTMLImageElement.prototype) {
        // Tarayıcı native lazy loading'i destekliyorsa
        images.forEach(img => {
            if (!img.hasAttribute("loading")) {
                img.setAttribute("loading", "lazy");
            }
        });
    }
});

// Newsletter form işlemleri
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log('Newsletter kaydı:', email);
    alert('Bülten aboneliğiniz başarıyla gerçekleştirilmiştir.');
    this.reset();
}); 
