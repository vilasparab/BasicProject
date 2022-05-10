/**
 * 
 */
 
  function Show()
   {  alert('testing');
      
      var n1=  document.getElementById('num1').value;
      var n2=  document.getElementById('num2').value;  
      
      var n3 = parseInt(n1) + parseInt(n2);
      document.getElementById('result').value=n3;
   }