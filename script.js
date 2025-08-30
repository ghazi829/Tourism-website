    const menubts = document.querySelector('.menu_bts');
        const navmenu = document.querySelector('.nav_links');


        menubts.addEventListener('click', () => {
            navmenu.classList.toggle('moblie_menu');
        });

        // ✅ Initialize EmailJS
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY"); // 🔑 Replace with your actual public key from EmailJS
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e){
        e.preventDefault();

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
        .then(function(response) {
            document.getElementById("statusMsg").innerText = "✅ Message sent successfully!";
            document.getElementById("contact-form").reset();
        }, function(error) {
            document.getElementById("statusMsg").innerText = "❌ Failed to send message. Please try again.";
        });
    });
