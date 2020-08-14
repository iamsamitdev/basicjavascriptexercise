// Array
var firstname = ['John', 'Jane', 'Jany', 'Joe'];

// Read array
console.log(firstname[0]);

// Object
var person = {
    "data": [
        {
            'name':'Samit Koyom', 
            'gender':'male', 
            'age':36
        },
        {
            'name':'Wichai Jaidee', 
            'gender':'male', 
            'age':40
        },
    ]
}

var i;
for(i=0; person['data'][i]; i++){
    console.log(person['data'][i]['name'] + " " + person['data'][i]['gender'] + " " +  person['data'][i]['age']);   
}