var storyArr = [
    {
        name: "Azaan Khan",
        time: "14h",
        profPic: "https://media.licdn.com/dms/image/D4D03AQFqLEZ4_vErmw/profile-displayphoto-shrink_800_800/0/1694808665998?e=2147483647&v=beta&t=cPW6erF8ro2iNFcm7AzDFCh3n3NNh1ASzeUvgVCzCFs",
        storyPic: "./assets/post1.jpg"
    },
    {
        name: "Shahrukh Khan",
        time: "14h",
        profPic: "https://i.tribune.com.pk/media/images/957083-shahrukhkhan_-1442296851/957083-shahrukhkhan_-1442296851.jpg",
        storyPic: "https://i.pinimg.com/550x/bf/77/20/bf77208f6428dc550a740c8c304c7295.jpg"
    },
    {
        name: "Saim Ayub",
        time: "14h",
        profPic: "https://hamariweb.com/profiles/images/more/5302_1.jpg",
        storyPic: "https://i.pinimg.com/originals/41/71/1d/41711d83d3cf4aadde21ef90123431b3.jpg"
    },
    {
        name: "Virat Kohli",
        time: "14h",
        profPic: "https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg",
        storyPic: "https://ih1.redbubble.net/image.3846513239.3654/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
        name: "Babar Azam",
        time: "14h",
        profPic: "https://pbs.twimg.com/profile_images/1438817879332425730/anYBmFZz_400x400.jpg",
        storyPic: "https://kafka.pk/cdn/shop/products/Babar-Azam-tapestry-vertical.webp?v=1666079989"
    },
    {
        name: "Aaliyan Khan",
        time: "14h",
        profPic: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
        storyPic: "./assets/Story.png"
    }
]

storyArr.map((key) => {
    document.getElementById("stories").innerHTML += `
    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column">
        <div style="background: linear-gradient(to right, #FBAA47, #D91A46,#A60F93); padding: 2px; border-radius: 50%; display: flex; align-items: center; justify-content: center">
            <img src=${key.profPic} width="65" height="65" style="border-radius: 50%; object-fit: cover ;border: 3px solid #fff" onclick="openStory('${key.storyPic}','${key.profPic}','${key.name}','${key.time}')"/>
        </div>
        <p style="font-size: 10px; margin-top: 5px; text-align: center">${key.name}</p>
    </div>
    `
})


function openStory(url, pic, name, time) {
    document.getElementById("story").style.backgroundImage = `url('${url}')`
    document.getElementById("story").style.transform = "scale(1)"
    document.getElementById("pic").src = pic
    document.getElementById("time").innerText = time
    document.getElementById("name").innerText = name.split(" ").join("_").toLowerCase()
}
function like(){
    document.querySelector(".fa-heart").style.transform = "translate(-50%,-50%) scale(1)"
    document.querySelector(".fa-heart").style.opacity = "1"
    setTimeout(() => {
        document.querySelector(".fa-heart").style.transform = "translate(-50%,-50%) scale(0)"
        document.querySelector(".fa-heart").style.opacity = "0"
    }, 700);
}