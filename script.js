function showSidebar() {
    const sidebar = document.querySelector('.nav-sidebar');
    sidebar.classList.add('show');
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav-sidebar');
    sidebar.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-ul li a");

    function changeActiveLink() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                document.querySelector(`.nav-ul li a[href="#${sectionId}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});

// Fungsi form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (email === "" || message === "") {
            alert("Harap isi semua kolom!");
            return;
        }

        // Format mailto untuk membuka Gmail
        const subject = encodeURIComponent("Pesan dari Pengunjung Website");
        const body = encodeURIComponent(`Dari: ${email}\n\nPesan:\n${message}`);
        const mailtoLink = `mailto:gen.impianbandung@gmail.com ?subject=${subject}&body=${body}`;

        // Membuka Gmail dengan email yang terisi
        window.location.href = mailtoLink;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header-par1").classList.add("show");
});
