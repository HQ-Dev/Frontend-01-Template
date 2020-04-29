    function convertStringToNumber(string) {
     chars = string.split('');
     var number = 0;
     for (var i = 0; i < chars.length; i++) {
     number = number * 10;
     number += chars[i].codePointAt(0) - '0'.codePointAt(0);
}

return number;
    }
        
    
    convertStringToNumber('102')


    //
