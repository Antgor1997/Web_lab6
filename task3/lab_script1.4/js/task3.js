function getTime(n) {
    //Change this function
    var mins, hours;
    hours=(n-n%3600)/3600;
    mins=((n-(hours*3600))-(n-(hours*3600))%60)/60;
    n=n-((hours*3600)+(mins*60));
    if (hours<10){
        hours="0"+hours;}
    if (mins<10){
        mins="0"+mins;}
    if (n<10){
        n="0"+n;}
    return hours + ":" + mins + ":" + n;
}
function assert(expression, message) {
    if(expression) {
        console.log("+", message);
    }
    else {
        console.error("-", message);
    }
}
function runTask3() {
    assert(getTime(20423) == "05:40:23", "Case '20423'");
    assert(getTime( 5320) == "01:28:40", "Case '5320'");
    assert(getTime(23630) == "06:33:50", "Case '23630'");
    assert(getTime(20381) == "05:39:41", "Case '20381'");
    assert(getTime(42718) == "11:51:58", "Case '42718'");
    assert(getTime(30002) == "08:20:02", "Case '30002'");
    assert(getTime( 3010) == "00:50:10", "Case '3010'");
    assert(getTime(20437) == "05:40:37", "Case '20437'");
    assert(getTime(40315) == "11:11:55", "Case '40315'");
    assert(getTime(18392) == "05:06:32", "Case '18392'");
    console.log("Done!");
}
runTask3();
