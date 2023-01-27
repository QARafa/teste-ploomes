function processData(input) {
    const lines = input.split("\n");

    function readOnly(){
        var n = 0;
        this.nxLn = ()=>{
            return n++;
        }
    }

    var rd = new readOnly();

    var q = parseInt(lines[rd.nxLn()]);

    var isLowerCase = (value) => {
        if(value.charCodeAt(0)>96){
            return true;
        } else {
            return false;    
        }
    }

    var containsUpperCase = (value) =>{
        for(var i=0;i<value.length;i++){
            if(!isLowerCase(value.substr(i,1))){
                return true;
            }
        }
        return false;
    }

    while (q!==0) {
        var a = lines[rd.nxLn()];
        var b = lines[rd.nxLn()];

        var firstCondition = true;

        b.split("").forEach(val=>{
            var ind = a.indexOf(val);
            if(ind==-1){
                ind = a.indexOf(val.toLowerCase());
            }
            if(ind==-1){
                firstCondition = false;
            }
            if(containsUpperCase(a.substr(0,ind))){
                firstCondition = false;
            }
            a = a.substr(ind+1);
        });

        if(containsUpperCase(a)){
            firstCondition = false;
        }

        if(firstCondition){
            console.log("YES");
        } else {
            console.log("NO");
        }

        q--;
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", (input) => {
    _input += input;
});

process.stdin.on("end", ()  => {
   processData(_input);
});