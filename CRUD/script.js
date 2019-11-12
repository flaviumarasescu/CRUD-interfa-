var selectedRow = null

function onFormSubmit(){
  var formData = readFormData();
  if (selectedRow == null)
      insertNewRecord(formData);
      else
        updateRecord(formData);
  resetForm();
}

function readFormData(){
  var formData = {};
  formData["Nume"] = document.getElementById("Nume").value;
  formData["Cod"] = document.getElementById("Cod").value;
  formData["Salariu"] = document.getElementById("Salariu").value;
  formData["Oras"] = document.getElementById("Oras").value;
  return formData;
}

function insertNewRecord(data){             
    var table = document.getElementById("listaAngajati").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nume;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Cod;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Salariu;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Oras;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button type="button"  onClick="onEdit(this)"  >Update</button>
                      <button type="button" onClick="onDelete(this)">Delete</button>` ;

}

function resetForm(){
  document.getElementById("Nume").value = "";
  document.getElementById("Cod").value = "";
  document.getElementById("Salariu").value = "";
  document.getElementById("Oras").value = "";
  selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nume").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Cod").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Salariu").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Oras").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
  selectedRow.cells[0].innerHTML = formData.Nume;
  selectedRow.cells[1].innerHTML = formData.Cod;
  selectedRow.cells[2].innerHTML = formData.Salariu;
  selectedRow.cells[3].innerHTML = formData.Oras;
}

function onDelete(td) {
    if (confirm('Vrei sa stergi inregistrarea ?')) {
        var  row = td.parentElement.parentElement;
        document.getElementById("listaAngajati").deleteRow(row.rowIndex);
        resetForm();
    }
}
