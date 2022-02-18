function calculate(){
        
    let billAmount = document.getElementById('billAmount').value
    console.log(billAmount);
    let percentageTip = document.getElementById('percentTip').value
    console.log(percentageTip);
    let tipAmount = document.getElementById('tipAmount').value = (billAmount *percentageTip)/100;
    console.log(tipAmount);
    let total = document.getElementById('total').value = parseFloat(billAmount) + parseFloat(tipAmount);
    document.getElementById('TotalBill').innerHTML= `Total Bill = ${total}`;
    if(billAmount === '' || percentageTip === ''){
        document.getElementById('TotalBill').innerHTML='please enter a valid input'
    }

}
