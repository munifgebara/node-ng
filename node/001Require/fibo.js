console.log("inicio");

function fibo (n){
    if (n==0) return 1;
    if (n==1) return 1;
    return (fibo(n-1)+fibo(n-2));
}

function fibo2 (n){
    if (n==0) return 1;
    if (n==1) return 1;
    var sa1=1;
    var sa2=1;
    var s=2;
    for (var i=2;i<n;i++){
        sa2=sa1;
        sa1=s;
        s=sa1+sa2;
    }
    return s;
}


var ti=Date.now();
console.log(fibo(40));

console.log(Date.now()-ti);


