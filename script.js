function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}

function addZeroToBin(x){
    var str = new String(convertToBinary(x)); 
    while(str.length !=10){
        str = "0" + str;
    }
    console.log(str)
    
    return str;
}

function setIdToTags(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    str = addZeroToBin(hour)

    if(str[0] == "0"){
        document.getElementById("hour1").style.backgroundColor="white"
    }else{
        document.getElementById("hour1").style.backgroundColor="green"
    }
    if(str[1] == "0"){
        document.getElementById("hour2").style.backgroundColor="white"
    }else{
        document.getElementById("hour2").style.backgroundColor="green"
    }
    if(str[2] == "0"){
        document.getElementById("hour3").style.backgroundColor="white"
    }else{
        document.getElementById("hour3").style.backgroundColor="green"
    }
    if(str[3] == "0"){
        document.getElementById("hour4").style.backgroundColor="white"
    }else{
        document.getElementById("hour4").style.backgroundColor="green"
    }
    if(str[4] == "0"){
        document.getElementById("hour5").style.backgroundColor="white"
    }else{
        document.getElementById("hour5").style.backgroundColor="green"
    }
    if(str[5] == "0"){
        document.getElementById("hour6").style.backgroundColor="white"
    }else{
        document.getElementById("hour6").style.backgroundColor="green"
    }
    if(str[6] == "0"){
        document.getElementById("hour7").style.backgroundColor="white"
    }else{
        document.getElementById("hour7").style.backgroundColor="green"
    }
    if(str[7] == "0"){
        document.getElementById("hour8").style.backgroundColor="white"
    }else{
        document.getElementById("hour8").style.backgroundColor="green"
    }
    if(str[8] == "0"){
        document.getElementById("hour9").style.backgroundColor="white"
    }else{
        document.getElementById("hour9").style.backgroundColor="green"
    }
    if(str[9] == "0"){
        document.getElementById("hour10").style.backgroundColor="white"
    }else{
        document.getElementById("hour10").style.backgroundColor="green"
    }


    str = addZeroToBin(min)

    if(str[0] == "0"){
        document.getElementById("minute1").style.backgroundColor="white"
    }else{
        document.getElementById("minute1").style.backgroundColor="green"
    }
    if(str[1] == "0"){
        document.getElementById("minute2").style.backgroundColor="white"
    }else{
        document.getElementById("minute2").style.backgroundColor="green"
    }
    if(str[2] == "0"){
        document.getElementById("minute3").style.backgroundColor="white"
    }else{
        document.getElementById("minute3").style.backgroundColor="green"
    }
    if(str[3] == "0"){
        document.getElementById("minute4").style.backgroundColor="white"
    }else{
        document.getElementById("minute4").style.backgroundColor="green"
    }
    if(str[4] == "0"){
        document.getElementById("minute5").style.backgroundColor="white"
    }else{
        document.getElementById("minute5").style.backgroundColor="green"
    }
    if(str[5] == "0"){
        document.getElementById("minute6").style.backgroundColor="white"
    }else{
        document.getElementById("minute6").style.backgroundColor="green"
    }
    if(str[6] == "0"){
        document.getElementById("minute7").style.backgroundColor="white"
    }else{
        document.getElementById("minute7").style.backgroundColor="green"
    }
    if(str[7] == "0"){
        document.getElementById("minute8").style.backgroundColor="white"
    }else{
        document.getElementById("minute8").style.backgroundColor="green"
    }
    if(str[8] == "0"){
        document.getElementById("minute9").style.backgroundColor="white"
    }else{
        document.getElementById("minute9").style.backgroundColor="green"
    }
    if(str[9] == "0"){
        document.getElementById("minute10").style.backgroundColor="white"
    }else{
        document.getElementById("minute10").style.backgroundColor="green"
    }


    str = addZeroToBin(milliseconds)

    if(str[0] == "0"){
        document.getElementById("ms1").style.backgroundColor="white"
    }else{
        document.getElementById("ms1").style.backgroundColor="green"
    }
    if(str[1] == "0"){
        document.getElementById("ms2").style.backgroundColor="white"
    }else{
        document.getElementById("ms2").style.backgroundColor="green"
    }
    if(str[2] == "0"){
        document.getElementById("ms3").style.backgroundColor="white"
    }else{
        document.getElementById("ms3").style.backgroundColor="green"
    }
    if(str[3] == "0"){
        document.getElementById("ms4").style.backgroundColor="white"
    }else{
        document.getElementById("ms4").style.backgroundColor="green"
    }
    if(str[4] == "0"){
        document.getElementById("ms5").style.backgroundColor="white"
    }else{
        document.getElementById("ms5").style.backgroundColor="green"
    }
    if(str[5] == "0"){
        document.getElementById("ms6").style.backgroundColor="white"
    }else{
        document.getElementById("ms6").style.backgroundColor="green"
    }
    if(str[6] == "0"){
        document.getElementById("ms7").style.backgroundColor="white"
    }else{
        document.getElementById("ms7").style.backgroundColor="green"
    }
    if(str[7] == "0"){
        document.getElementById("ms8").style.backgroundColor="white"
    }else{
        document.getElementById("ms8").style.backgroundColor="green"
    }
    if(str[8] == "0"){
        document.getElementById("ms9").style.backgroundColor="white"
    }else{
        document.getElementById("ms9").style.backgroundColor="green"
    }
    if(str[9] == "0"){
        document.getElementById("ms10").style.backgroundColor="white"
    }else{
        document.getElementById("ms10").style.backgroundColor="green"
    }


    str = addZeroToBin(seconds)

    if(str[0] == "0"){
        document.getElementById("s1").style.backgroundColor="white"
    }else{
        document.getElementById("s1").style.backgroundColor="green"
    }
    if(str[1] == "0"){
        document.getElementById("s2").style.backgroundColor="white"
    }else{
        document.getElementById("s2").style.backgroundColor="green"
    }
    if(str[2] == "0"){
        document.getElementById("s3").style.backgroundColor="white"
    }else{
        document.getElementById("s3").style.backgroundColor="green"
    }
    if(str[3] == "0"){
        document.getElementById("s4").style.backgroundColor="white"
    }else{
        document.getElementById("s4").style.backgroundColor="green"
    }
    if(str[4] == "0"){
        document.getElementById("s5").style.backgroundColor="white"
    }else{
        document.getElementById("s5").style.backgroundColor="green"
    }
    if(str[5] == "0"){
        document.getElementById("s6").style.backgroundColor="white"
    }else{
        document.getElementById("s6").style.backgroundColor="green"
    }
    if(str[6] == "0"){
        document.getElementById("s7").style.backgroundColor="white"
    }else{
        document.getElementById("s7").style.backgroundColor="green"
    }
    if(str[7] == "0"){
        document.getElementById("s8").style.backgroundColor="white"
    }else{
        document.getElementById("s8").style.backgroundColor="green"
    }
    if(str[8] == "0"){
        document.getElementById("s9").style.backgroundColor="white"
    }else{
        document.getElementById("s9").style.backgroundColor="green"
    }
    if(str[9] == "0"){
        document.getElementById("s10").style.backgroundColor="white"
    }else{
        document.getElementById("s10").style.backgroundColor="green"
    }
}

function fetchTime(){
    document.getElementById("bin").innerHTML=addZeroToBin();
    document.getElementById("bin2").style.backgroundColor="green";
}
