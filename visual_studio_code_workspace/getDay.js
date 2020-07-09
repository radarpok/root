function getWeekDay(date){
    var weekdays = new Array(
        "vasarnap", "hetfo", "kedd", "szerda", "csutortok", "pentek", "szombat"
    );
    var day = date.getDay();
    return weekdays[day];
}

var date = new Date();
var weekDay = getWeekDay(date);
console.log('The current weekday is ' + weekDay);