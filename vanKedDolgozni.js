//console.log("commands.js");

//const dolgoz =()=>{};


function getWeekDay(date){
    var weekdays = new Array(
        "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
    );
    var day = date.getDay();
    return weekdays[day];
}

var date = new Date();
var weekDay = getWeekDay(date);

if(getWeekDay(date) === "sunday"){
    console.log("ma vasárnap van, és minden be van konfigurálva a munkához");

if(getWeekDay(date) === "monday")
    console.log("ma hétfő van, legjobb lenne ma teljes gőzzel melózni");    

if(getWeekDay(date) === "tuesday")
    console.log("ma kedd van, bízzuk az időjárásra a munkakedvünket");
    
if(getWeekDay(date) === "wednesday")
    console.log("ma szerda van, smoothiek bekészítve a regenerálódáshoz");

if(getWeekDay(date) === "thursday")
    console.log("ma csütörtök van, legyen a munka egyenes arányban a felüdüléssel");

if(getWeekDay(date) === "friday")
    console.log("ma péntek van, a heti teljesítményemre vonatkozó elégedettségem függvényében állítom be a szabadidő és munka egyensúlyát");

if(getWeekDay(date) === "saturday")
    console.log("ma szombat van, mindenki felüdülhet ahogy szeretne");

function dolgoz(_){
    if(_ === 1){
        console.log("van kedvem dolgozni")
    }else{
        console.log("nincs kedvem csinálni semmit")
    }
} 

    let vankedvMero= 1;

    dolgoz(vankedvMero)
}