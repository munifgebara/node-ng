console.log("inicio");

var t=50000;
var m=[];
for (var i=0;i<t;i++){
  m.push(Math.random(t));
}
var ti=Date.now();
for (var i=0;i<t-1;i++){
    for (var j=i+1;j<t;j++){
        if (m[i]>m[j]){
            var aux=m[i];
            m[i]=m[j];
            m[j]=aux;
        }

    }
}
console.log(Date.now()-ti);


