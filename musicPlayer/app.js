//music list

const music_list = [
    {
        id:1,
        artist:"1.artist",
        music:"1.single",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlGlT_8BECtHcvPsB0mx9ImNaMV8JckUzGmc5fjmMno4GqZ9GrybWIIvGmiQOzvwFqQE&usqp=CAU",
        mp3: "music/hey.mp3"

    },

    {
        id:2,
        artist:"2.artist",
        music:"2.single",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRry8yP0rTLbwNTRLCj47m9X2CBrG98tMuUXxnFG6oDw6Qe-BzmB3zRFznVb-a-qEnL8xs&usqp=CAU",
        mp3: "music/summer.mp3"

    },


   

    {
        id:4,
        artist:"3.artist",
        music:"3.single",
        img:"https://wallpaper8k.com/inside/categories/40/78673_1280x720-84260.jpg",
        mp3: "music/ukelele.mp3"


    },  
    
];



//select items

const img = document.getElementById("music-img");
const music = document.getElementById("music");
const artist = document.getElementById("artist");
const track_art = document.getElementById("track_art");


//buttons 

const pervBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const stopBtn = document.querySelector(".stop-btn");


//

let currentItem = 0;

//show based on item

function showPerson(person){
    const item = music_list[person];
    img.src = item.img;
    artist.textContent = item.artist;
    track_art.textContent = item.music//bak
    //music.textContent = item.music;
    
    
}





//show next one

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > music_list.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});


pervBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = music_list.length - 1;
    }
    showPerson(currentItem);
})

//buna bak
stopBtn.addEventListener("click", function() {
    currentItem;
})

//button for toggle

function toggleButton () {
    let element = document.querySelector(".container-sm");
    element.classList.toggle("dark-mode")

}

//buraya dikkat
