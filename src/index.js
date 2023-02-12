module.exports = function toReadable (num) {
  
    onedigit = new Object ({
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
})

teendigit = new Object ({
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
})

rounddigit = new Object ({
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
})

threedigit = new Object ({
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred'
})
    let str = num.toString();
    let result = '';
    let part = 0;
    if (str.length < 3)
    {
        if (num < 10){
            result = onedigit[num];
        }
        else if (num < 20){
            result = teendigit[num];
        }
        else if (num > 20 && str[1] != '0'){
            part = num - Number(str[1]);
            result = rounddigit[part] + " " + onedigit[str[1]];
        }
        else if (num < 100 && str[1] == '0'){
            result = rounddigit[num];
        }
    }
    else if (str.length == 3)
    {
        if(num%100==0)
        {
            result=threedigit[num];
        }
        
        else if(str[2]=="0" )
        {
            let a = num-Number(100*str[0]);
            let ost=onedigit[str[0]]+" hundred ";
            //console.log(ost);
            result=ost+rounddigit[a];
        }
        else if(str[1]=="0" &&str[2]!="0")
        {
            let a = num-Number(100*str[0]);
            let ost=onedigit[str[0]]+" hundred ";
           
            result=ost+onedigit[a];
        }
        else if(str[1]=="0" && str[2]=="0")
        {
          
            let ost=onedigit[str[0]]+" hundred ";
           
            result=ost;
        }
        else
        {
            let a=num-Number(str[1]+str[2]);
           
            let b =Number(str[1]+str[2]);
            
            if(b<20)
            {
                help=teendigit[b];
                 result = threedigit[a]+ " "+help;
                
            }
            else 
            {
                help=Number(b)-Number(str[2]);
                let c=rounddigit[help];
                result=threedigit[a]+ " "+c+" "+onedigit[str[2]];
            }
        
            
        }
        
    }
    return result;
}

