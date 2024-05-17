const generateForm = document.querySelector(".generator-form");

const handleFormSubmission = (e) =>{
    e.preventDefault();
    // console.log(e.srcElement);
    // Get user input and image quantity values from the form.
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;

    console.log(userPrompt, userImgQuantity);
    // creating HTML markup for image cards with loading state
    const imgCarMarkup = Array.from({length: userImgQuantity}, () => 
    `<div class="img-card loading">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWpwMGKhryGz1a5DTcIkTAdG8Ey-tUMg4V818X9Eq56foc2ai2RhVVs-qNA&s" alt="image">
        <a href="#" class="download-btn">
            <span class="fa fa-solid fa-download" style="color: black;position: absolute;"></span>
        </a>
    </div>`
    ).join("");
    console.log(imgCarMarkup);
}

generateForm.addEventListener("submit", handleFormSubmission);