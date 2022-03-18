function popupclose() {
    // let popup = document.querySelector('.dialog-box').style.transform = 'rotate(90deg)'
    let popup = document.querySelector('.dialog-box').style.display = "none";
    // console.log(popup)

}
let showCard = document.getElementById('show-card')

const getData = () => {

    let url = ("https://www.boredapi.com/api/activity")

    fetch(url)
        .then(res => res.json())
        .then((data) => {

            // console.log(data)
            showCard.innerHTML = `<li class="activity">
Activity : ${data.activity}
            </li>
            <li class="type">
            Category : ${data.type}
            </li>
            <li class="link">
           <a href="${(data.link)}"> Link </a>
            </li>`

        })

}

const getExcuses = () => {

    let url = ("https://excuser.herokuapp.com/v1/excuse")

    fetch(url)
        .then(res => res.json())
        .then((data) => {

            console.log(data)
            showCard.innerHTML = `<li class="activity">
Excuse : ${data[0].excuse}
            </li>
            <li class="type">
            Category : ${data[0].category}
            </li>`
        })

}
const getFunFact = () => {

    let url = ("https://api.aakhilv.me/fun/facts")

    fetch(url)
        .then(res => res.json())
        .then((data) => {

            console.log(data)
            showCard.innerHTML = `<li class="activity">
Fun Fact : ${data[0]}
            </li>
            <li class="type">
            Category : Fun Fact 
            </li>`
        })

}
const getUrlShort = () => {

    let longurl = document.getElementById('long-url').value;
    // longurl = longurl.value
    let name = document.getElementById('name').value
    let url = (`https://ulvis.net/api.php?url=${longurl}&custom=${name}`)

    fetch(url)
        .then(res => res.json())
        .then((data) => {

            console.log(data)

        })

}