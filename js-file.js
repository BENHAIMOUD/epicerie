//js-file
var fruit1 = {name:"Mangue", price:"12.99", stock:550};
var fruit2 = {name:"Raisin", price:"5.99", stock:150 };
var fruit3 = {name:"Figue", price:"2.80", stock:23};
var fruit4 = {name:"Kiwi", price:"8.99", stock:76};
let dataHtml='';
var fruits = new Array(fruit1, fruit2, fruit3, fruit4);
function loadTableData() {
    for (let fruit of fruits ){
        dataHtml+='<tr>\n' +
            '<td>'+fruit.name+'</td>\n' +
            '<td>'+fruit.price+'</td>\n' +
            '<td>'+fruit.stock+'</td>\n' +
            '</tr>';
        console.log(dataHtml)
        document.getElementById('idTable').innerHTML=dataHtml;
    }
}
function deleteAll() {
    document.getElementById('idTable').innerHTML=''
}
function search() {
    let s=document.getElementById("id-input").value;
    let a=0;
    dataHtml='';
    for (let fruit of fruits) {
        if (fruit.name.localeCompare(s)==0){
            a++;
            deleteAll();
            dataHtml+='<tr>\n' +
                '<td>'+fruit.name+'</td>\n' +
                '<td>'+fruit.price+'</td>\n' +
                '<td>'+fruit.stock+'</td>\n' +
                '</tr>';
            document.getElementById('idTable').innerHTML=dataHtml;
            console.log(dataHtml)
        }

    }
    if (a==0 || s==''){
        alert("fruit does not find !");
        loadTableData();
    }
}
function bay() {
    let s=document.getElementById("id-input").value;
    if (s=='')
        alert("please choose your favorite fruit !");
    else {
        search();
        alert("the fruit is bought !");
    }
}
