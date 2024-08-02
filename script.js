const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  if (document && category && !isNaN(amount)) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${amount}</td>
                            <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>`;

    expenseList.appendChild(newRow);

    /*making null*/
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill out fields with valid data");
  }
});

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("expenseTable").deleteRow(i);
}


const clearButton=document.getElementById('clearSummary');


clearButton.addEventListener('click',()=>{
  var nrows=document.getElementById('expenseTable').rows.length;
  var rows=document.getElementById('expenseTable').rows;
  for(var i=1;i<nrows;i++){
    rows[i].remove();   

  }
})

