/* sends the request to the server and updates the
 * body of the page with the returned questions */
function executeRequest(sort, num) {
    document.getElementById("questions").innerHTML = "";
    document.getElementById("solutions").innerHTML = "";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http:\/\/localhost:3490/qgen?sort=${sort}&num=${num}`, true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let questions = JSON.parse(this.responseText);
            for(let i=0; i < questions.length; i++) {
                let quest = document.createElement("li");
                quest.innerText = questions[i][0];
                let sol = document.createElement("li");
                sol.innerText = questions[i][1];
                document.getElementById("questions").appendChild(quest);
                document.getElementById("solutions").appendChild(sol);
            }
        }
    }
    xhttp.send();
}

/* hooks onto the onsubmit event for the form */
function makeRequest(event) {
    event.preventDefault();
    executeRequest(event.target.sort.value, event.target.num.value);
}

/* hook things in the right places when page content is loaded */
window.onload = () => {
    document.getElementById("genform").onsubmit = makeRequest;
}
