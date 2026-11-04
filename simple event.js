let eventQueue=[];
function addEvent(Event){
    eventQueue.push(Event);
    console.log("Event added:",Event);
}
function ProcessingEvent(){
    while (eventQueue.length>0){
        let event=eventQueue.shift();
        console.log("Processing event:",event);
    }
}
addEvent("Login");
addEvent("Download File");
console.log("\nProcessing Event;");
ProcessingEvent();