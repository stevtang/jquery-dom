"use strict";

//TODO:
//Event listener for button
//function that makes new entry
//  title, rating, remove button
//function that appends new entry to entries div


function handleSubmit(){
    const $title = $(".title");
    const $rating = $(".rating");

    alert(`Title: ${$title.val()}, Rating: ${$rating.val()}`);

}

function makeEntry($title, $rating){
    const newEntry = $("<div></div>");
    newEntry.class("entry").text(`Title: ${$title}`).appendTo(".entries");
}

$(".submit-btn").on("click", handleSubmit);