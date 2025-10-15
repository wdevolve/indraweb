document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form"); // select all forms
  if (!forms.length) return;

  forms.forEach(form => {
    // Message box
    const messageBox = document.createElement("div");
    messageBox.style.display = "none";
    messageBox.style.marginTop = "1rem";
    form.appendChild(messageBox);

    // Loader
    const loader = document.createElement("div");
    loader.style.display = "none";
    loader.style.marginTop = "1rem";
    loader.innerHTML = `<div class="loader" style="
      border: 4px solid #f3f3f3;
      border-top: 4px solid #07468c;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    "></div>`;
    form.appendChild(loader);

    // Loader animation CSS (only once)
    if (!document.getElementById("loader-spin-style")) {
      const style = document.createElement("style");
      style.id = "loader-spin-style";
      style.innerHTML = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // prevent reload

      loader.style.display = "block";
      messageBox.style.display = "none";

      // Collect form data as JSON
      const data = {};
      let senderName = "Website User";

      form.querySelectorAll("input, textarea, select").forEach(input => {
        data[input.id] = input.value || "N/A";
        if (input.id.toLowerCase().includes("name") && input.value.trim() !== "") {
          senderName = input.value.trim();
        }
      });

      data.to = ["contact@indrawater.com","selva@evolvemediasolutions.in"];
      data.subject = `New Inquiry from ${senderName}`;

      try {
        const res = await fetch("https://app.evolvemediamarketing.in/api/sendMail.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await res.json();

        loader.style.display = "none";
        messageBox.style.display = "block";
        messageBox.style.padding = "10px 15px";
        messageBox.style.borderRadius = "6px";
        messageBox.style.textAlign = "center";
        messageBox.style.transition = "all 0.3s ease";

        if (result.status === "success") {
          messageBox.style.background = "#d1e7dd";
          messageBox.style.color = "#0f5132";
          messageBox.innerHTML = "✅ Your message has been sent successfully!";
          form.reset();
        } else {
          messageBox.style.background = "#f8d7da";
          messageBox.style.color = "#842029";
          messageBox.innerHTML = "❌ Failed to send: " + result.message;
        }
      } catch (err) {
        loader.style.display = "none";
        messageBox.style.display = "block";
        messageBox.style.background = "#f8d7da";
        messageBox.style.color = "#842029";
        messageBox.innerHTML = "⚠️ Error: " + err.message;
      }
    });
  });
});
