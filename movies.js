"use strict";

//TODO:
//Event listener for button
//function that makes new entry
//  title, rating, remove button
//function that appends new entry to entries div

function handleSubmit(evt){
    evt.preventDefault();
    const $title = $(".title");
    const $rating = $(".rating");

    console.log(`Title: ${$title.val()}, Rating: ${$rating.val()}`);
    makeEntry($title, $rating);
    
    
}

function makeEntry($title, $rating){
    // const newEntry = $("<div></div>");
    $(".entries").append($("<div>"));
    // newEntry.class("entry").text(`Title: ${$title}`).appendTo(".entries");
}

$(".submit-btn").on("click", handleSubmit);