//object 1
var games = {
    "system": "32X",
    "name": "After Burner",
    "alias": "none",
    "type": [
    {"type_one": "Cartridge", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "No"},
    {"type_three": "Manual", "Yes_No": "No"}

],
//call the keys here
}

//object 2
var games = {
    "system": "32X",
    "name": "Doom",
    "alias": "none",
    "type": [
    {"type_one": "Cartridge", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "Yes"},
    {"type_three": "Manual", "Yes_No": "Yes"}

],
//call the keys here
}


//object 3
var games = {
    "system": "32X",
    "name": "Star Wars",
    "alias": "none",
    "type": [
    {"type_one": "Cartridge", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "No"},
    {"type_three": "Manual", "Yes_No": "No"}

],
//call the keys here
}

//object 4
var games = {
    "system": "32X",
    "name": "WWF Wrestlemania: The Arcade Game",
    "alias": "WWE",
    "type": [
    {"type_one": "Cartridge", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "No"},
    {"type_three": "Manual", "Yes_No": "No"}

],
//call the keys here
}//don't think this syntax should be here?

//object 5
var games = {
    "system": "3DS",
    "name": "Mario Kart 7",
    "alias": "Mario Kart 7",
    "type": [
    {"type_one": "Cartridge", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "Yes"},
    {"type_three": "Manual", "Yes_No": "Yes"}

],
//call the keys here
}

//object 6
var games = {
    "system": "3DS",
    "name": "Mario Tennis Open",
    "alias": "None",
    "type": [
    {"type_one": "Cartridge", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "Yes"},
    {"type_three": "Manual", "Yes_No": "Yes"}

],
//call the keys here
}

//object 7
var games = {
    "system": "3DS",
    "name": "Project X Zone",
    "alias": "None",
    "type": [
    {"type_one": "Cartridge", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "Yes"},
    {"type_three": "Manual", "Yes_No": "Yes"}

],
//call the keys here
}

//object 8
var games = {
    "system": "3DS",
    "name": "Super Mario 3D Land",
    "alias": "Super Mario 3D Land 1",
    "type": [
    {"type_one": "Digital Download", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "No"},
    {"type_three": "Manual", "Yes_No": "No"}

],
//call the keys here
}

//object 9
var games = {
    "system": "Dreamcast",
    "name": "The House of the Dead 2 (Jap)",
    "alias": "House of the Dead 2 (Jap)",
    "type": [
    {"type_one": "Disc", "Yes_No": "Yes"},
    {"type_two": "Box", "Yes_No": "Yes"},
    {"type_three": "Manual", "Yes_No": "Yes"}

],
//call the keys here
}

"listgames": function(full_name) {   //calls the keys and object
        var output = "";
        for(var i = 0; i < this.type.length; i++){ //this is equaled to course for var course
            var ta = this.type[i]; //this is equaled to var "course"
            output += type.Yes_No;
            if(full_name){
                output += " " + type.Yes_No;
            }
            output += " | ";
        }
        console.log(output);
    }
};


/*
var course = {  //starts the object
    "name": "Intro to JavaScript",  //name, teacher, location are all keys
    "teacher": "Amy Hammond",
    "location": "Link Executive Search",
    "tas": [
        {"first_name": "CJ", "last_name": "Sinner"},
        {"first_name": "Sam", "last_name": "Oyen"},
        {"first_name": "Denise", "last_name": "Chen"},
        {"first_name": "Heather", "last_name": "Elliot"}
    ],
    "listTAs": function(full_name) {   //calls the keys and object
        var output = "";
        for(var i = 0; i < this.tas.length; i++){ //this is equaled to course for var course
            var ta = this.tas[i]; //this is equaled to var "course"
            output += ta.first_name;
            if(full_name){
                output += " " + ta.last_name;
            }
            output += " | ";
        }
        console.log(output);
    }
};
*/