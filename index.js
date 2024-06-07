let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

// Render the leads in the unordered list using ulEl.textContent
function renderLeads () {
    let listItems = " "
for (let i = 0; i < myLeads.length; i++) {
    listItems += 
    `<li>
        <a href='${myLeads[i]}' target='_blank'>
            ${myLeads[i]}
        <a>
    </li>`

    //another way to add elements to html
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}

ulEl.innerHTML = listItems
}