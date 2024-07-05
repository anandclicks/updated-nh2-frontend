const queryForm = document.querySelectorAll("#queryForm");

queryForm.forEach(e=> {
  e.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    const name = e.querySelector("#name").value;
    const mobileNumber = e.querySelector("#mobileNumber").value;
    const propertyName = e.querySelector("#propertyName").value;
    const roomSharing = e.querySelector("#roomSharing").value;

    let userInfo = {
        name,
        mobileNumber,
        propertyName,
        roomSharing
    };

    console.log(userInfo);

    document.querySelector(".loadingpage").style.display = "flex";
    document.querySelector(".sending").style.display = "flex";

    try {
        const response = await fetch("https://backend-for-nh2.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });

        if (response.ok) {
            document.querySelector(".sending").style.display = "none";
            document.querySelector(".send").style.display = "flex";

            setTimeout(() => {
                document.querySelector(".loadingpage").style.display = "none";
                document.querySelector(".sending").style.display = "none";
                document.querySelector(".send").style.display = "none";

                // Reset form fields (example function calls)
               form.classList.add("dnone") 
      form.classList.remove("visible")
            }, 4000);
        } else {
            throw new Error('Failed to submit form');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error: display an error message or retry logic
    }
});

})
