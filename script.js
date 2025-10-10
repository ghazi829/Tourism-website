        // Toggle Menu
    const menubts = document.querySelector('.menu_bts');
        const navmenu = document.querySelector('.nav_links');


        menubts.addEventListener('click', () => {
            navmenu.classList.toggle('moblie_menu');
        });

        // Date Upadate
        document.getElementById('year').textContent = new Date().getFullYear();


    // ✅ EmailJS Send Function
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };


    const serviceID = "service_ymp004l";
    const templateID = "template_drhvb53";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("✅ Your Message is sent successfully!");
        })
        .catch(err => {
        console.error("EmailJS Error:", err);
        alert("❌ Failed to send message. Please try again.");
        });
}


        // https://www.youtube.com/watch?v=BgVjild0C9A This is a link of video form where you leran about Email.js...