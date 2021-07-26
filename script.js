let nameInput = document.querySelector(".name-input")
let btn = document.querySelector(".submit-btn")
let userName = document.querySelector(".name")
let gender = document.querySelector(".gender")
let probability = document.querySelector(".probability")
let count = document.querySelector(".count")
let msgTxt = document.querySelector(".msg-txt")

let getGender = async () => {
    try {
        let inputTxt = nameInput.value.trim()
        let response = await fetch(`https://api.genderize.io/?name=${inputTxt}`)
        let data = await response.json()
        if (data.gender == undefined || data.gender == null) {
            msgTxt.innerHTML = "<h2>Oops! Please type a valid name...</h2>"
            msgTxt.style.color = "rgb(240, 23, 59)"
        } else {
        userName.innerText = `Name: ${data.name}`
        gender.innerText = `Gender: ${data.gender}`
        probability.innerText = `Probability: ${data.probability}`
        count.innerText = `Count: ${data.count}`
        msgTxt.innerHTML = "Hope, I've rightly detected the gender you were looking for..."
        msgTxt.style.color = "rgb(0, 172, 120)"
        }
    } catch (error) {
        console.log("👿 Error: ", error);
    }

}

btn.addEventListener("click", getGender)