let urlData = location.href;
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("name");
console.log(playerUrl)


// geting data from local storage

teamDetails = JSON.parse(localStorage.getItem("teamArray"));
detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));

//Building table in player details using local storage.
let playerData=document.getElementById("detailOfPlayer-full")
for(var i=0;i<detailOfPlayer.length;i++){
    if(detailOfPlayer[i].playerName==playerUrl)
    {
        var playingOrN=""
        if(detailOfPlayer[i].isPlaying==true){
            playingOrN="Playing"
        }
        else{
            playingOrN="On Bench"
        }
        playerData.innerHTML+=`

        <div id="player_detail-img">
        <img src="${detailOfPlayer[i].playerImg}" alt="">
    </div>
        <div id="new-player-det">
        <table>
        <tr>
            <td>Player Name  </td>
            <td>${detailOfPlayer[i].playerName}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Name </td>
            <td> ${detailOfPlayer[i].playerTeam}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Code </td>
            <td>${detailOfPlayer[i].from}   </td>
        </tr>
    <table>
        <tr>
            <td> Worth </td>
            <td>${detailOfPlayer[i].price}  </td>
        </tr>
    <table>
        <tr>
            <td> Is playing </td>
            <td> ${playingOrN} </td>
        </tr>
    </table>
    </div>
    
        `
    }
}

