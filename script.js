var labelfirst = label_create("label","for","firstname","First Name");
var firstinput = input_create("input","id","firstname","type","text");
var break1 = break_create();
var break2 = break_create();

var labelmiddle = label_create("label","for","middlename","Middle Name");
var middleinput = input_create("input","id","middlename","type","text");
var break3 = break_create();
var break4 = break_create();

var labellast = label_create("label","for","lastname","Last Name");
var lastinput = input_create("input","id","lastname","type","text");
var break5 = break_create();
var break6 = break_create();

var labelmail = label_create("label","for","e-mail","E-Mail");
var mailinput = input_create("input","id","e-mail","type","email");
var break7 = break_create();
var break8 = break_create();

var labelpassword = label_create("label","for","passcode","Password");
var passwordinput = input_create("input","id","passcode","type","password");
var break9 = break_create();
var break10 = break_create();

//var button = label_create("button","onclick","foo()","click me");
var button = document.createElement("button");
button.setAttribute("type","button");
button.addEventListener("click",foo);
button.innerHTML = "Click Me";




document.body.append(labelfirst,break1,firstinput,break2,labelmiddle,break3,middleinput,break4,labellast,break5,lastinput,break6,labelmail,break7,mailinput,break8,labelpassword,break9,passwordinput,break10,button);

function foo(){
    var first = document.getElementById("firstname").value;
    var first_name = document.createElement("p") 
    first_name.innerHTML = `First Name : ${first}`;
    
    var middle = document.getElementById("middlename").value;
    var middle_name = document.createElement("p") 
    middle_name.innerHTML = `Middle Name : ${middle}`;

    var last = document.getElementById("lastname").value;
    var last_name = document.createElement("p") 
    last_name.innerHTML = `Last Name : ${last}`;

    var mail = document.getElementById("e-mail").value;
    var email_id = document.createElement("p") 
    email_id.innerHTML = `E-Mail : ${mail}`;

    var pass = document.getElementById("passcode").value;
    var password = document.createElement("p") 
    password.innerHTML = `Password : ${pass}`;

    document.body.append(first_name,middle_name,last_name,email_id,password);
}

function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname);
    element.setAttribute(attr1name,attr1value);
    element.setAttribute(attr2name,attr2value);
    return element;
}

function break_create(){
    var bre = document.createElement("br");
    return bre;
}