

//getting data from local storage
let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

//building submit functionality on button click using jquery
$("#addteamform").submit(function (e) {


    e.preventDefault();


    let inp_val = $("#inp1").val();
    let shortName = '';//extracting team name from input and making it to uppercase.
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }
//Building of object to be set in local storage to add new card in homepage.
    let addData = {
        "id": localTeam.length,
        "teamFullName":$("#inp1").val() ,
        "sName": shortName,
        
        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),


    }

   localTeam.push(addData);
   localStorage.setItem("teamArray", JSON.stringify(localTeam));//adding new team data using local storage. 

   location.href = `./teams.html?name=${addData.sName}`;
})
