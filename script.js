function createTable() {
    rn = window.prompt("Input number of rows");
    cn = window.prompt("Input number of columns");
  
    for(var r=0;r<parseInt(rn);r++) {
        var x=document.getElementById('myTable').insertRow(r);
        for(var c=0;c<parseInt(cn);c++) {
            var y=  x.insertCell(c);
            y.innerHTML="Row-"+r+" Column-"+c; 
        }
    }
}
  