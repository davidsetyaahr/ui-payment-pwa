
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    var total = 0;
    var selectedRows = [];
    // get the checked checkboxes and loop through them
    var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedCheckboxes.forEach(function(checkedCheckbox) {
      // find the parent row and get the name and detail cells
      var row = checkedCheckbox.closest('tr');
      var nameCell = row.querySelectorAll('td')[1];
      var detailCell = row.querySelectorAll('td')[3];
      // add the name and detail values to the selectedRows array
      selectedRows.push({
        name: nameCell.textContent,
        detail: parseInt(detailCell.textContent)
      });
      // add the detail value to the total
      total += parseInt(detailCell.textContent);
    });
    var totalElement = document.getElementById('total');
    totalElement.textContent = total;
  });
});
