document.getElementById("start").addEventListener("click", startFunction);
document.getElementById("story").classList.add("hidden");
document.getElementById("travelFinal").classList.add("hidden");
document.getElementById("movieFinal").classList.add("hidden");

function startFunction(){
    document.getElementById("beginning").classList.add("hidden");
    document.getElementById("afterStart").classList.remove("hidden");
    document.getElementById("story").classList.add("hidden");
    document.getElementById("travelFinal").classList.add("hidden");
    document.getElementById("movieFinal").classList.add("hidden");
    

}

document.getElementById("submit").addEventListener("click", submitFunction);

function submitFunction(){
    let playerName = document.getElementById("name").value;
    let houseName = document.getElementById("house").value;

    if(playerName === "" || houseName=== "") {
        alert("Enter the details to continue")
    }else {
        document.getElementById("story").classList.remove("hidden");
        document.getElementById("story").innerHTML = `Welcome <strong>${playerName}</strong> from Team <strong>${houseName}!</strong> <br><br> Let me give you an idea about Adam. Adam has basically 2 moods, 'Happy' and 'Sad'.<br> By clicking the NEXT button , you can decide Adam's mood and make necessary events. `
        document.getElementById("afterStart").classList.add("hidden");
        document.getElementById("next").classList.remove("hidden");
        
    }

}

document.getElementById("next").addEventListener("click", nextFunction);

function nextFunction(){
    document.getElementById("afterNext").classList.remove("hidden");
    document.getElementById("next").classList.add("hidden");
    document.getElementById("story").classList.add("hidden");

}

document.getElementById("happyButton").addEventListener("click", happyFunction);

function happyFunction(){
    document.getElementById("happy").classList.remove("hidden");
    document.getElementById("beginning").classList.add("hidden");
    document.getElementById("afterNext").classList.add("hidden");
    document.getElementById("story").classList.add("hidden");

}
document.getElementById("sadButton").addEventListener("click", sadFunction);

function sadFunction(){
    document.getElementById("sad").classList.remove("hidden");
    document.getElementById("beginning").classList.add("hidden");
    document.getElementById("afterNext").classList.add("hidden");
    document.getElementById("story").classList.add("hidden");

}
document.getElementById("travelButton").addEventListener("click", travelFunction);

function travelFunction(){
    document.getElementById("travel").classList.remove("hidden");
    document.getElementById("happy").classList.add("hidden");
}
document.getElementById("okayButton").addEventListener("click",okayFunction);

function okayFunction(){
    let placeName = document.getElementById("place").value;
    if(placeName===""){
        alert("Enter a Location")
    } else {
        document.getElementById("happy").classList.add("hidden");
        document.getElementById("travel").classList.add("hidden");
        document.getElementById("travelFinal").classList.remove("hidden");
        document.getElementById("travelFinal").innerHTML = `"Thanks for the suggestion. <strong>${placeName}</strong> is one of the places Adam wished to visit. He will be definitely enjoying throughout the journey. Let him enjoy his vacation and thanks again for making his day way more brighter." <br> <br> BYE!`
    }

}

document.getElementById("aloneButton").addEventListener("click", aloneFunction);

function aloneFunction(){
    document.getElementById("alone").classList.remove("hidden");
    document.getElementById("sad").classList.add("hidden");
}

document.getElementById("foodButton").addEventListener("click", foodFunction);

function foodFunction(){
    document.getElementById("food").classList.remove("hidden");
    document.getElementById("sad").classList.add("hidden");
}
document.getElementById("movieButton").addEventListener("click",movieFunction);

function movieFunction(){
   
        document.getElementById("movie").classList.remove("hidden");
        document.getElementById("happy").classList.add("hidden");
    
    
}
document.getElementById("okButton").addEventListener("click",okFunction);

function okFunction(){
    let movieName = document.getElementById("film").value;
    if(movieName===""){
        alert("Enter a Movie Name")
    } else {
        document.getElementById("happy").classList.add("hidden");
        document.getElementById("movie").classList.add("hidden");
        document.getElementById("movieFinal").classList.remove("hidden");
        document.getElementById("movieFinal").innerHTML = `"Thanks for the suggestion. <strong>${movieName}</strong> is a great movie. Adam is going to love this. Let him enjoy the movie and thanks again for making his day way more brighter." <br> <br> BYE!`
    }

}