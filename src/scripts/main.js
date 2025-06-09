'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const table = document.querySelector('table');
  const templateRow = document.querySelector('table tr');
  const rowCount = table.rows.length;

  if (rowCount + 1 > 10) {
    document.querySelector('button.append-row').setAttribute('disabled', '');
  } else {
    const newTr = document.createElement('tr');

    table.appendChild(newTr);

    for (let i = 0; i < templateRow.cells.length; i++) {
      const newTd = document.createElement('td');

      newTr.appendChild(newTd);
    }
  }

  if (rowCount + 1 > 2) {
    document.querySelector('.remove-row').disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const table = document.querySelector('table');
  const rowCount = table.rows.length;

  if (rowCount - 1 < 2) {
    document.querySelector('button.remove-row').setAttribute('disabled', '');
  } else {
    const lastRow = table.rows[table.rows.length - 1];

    lastRow.remove();
  }

  if (rowCount - 1 < 10) {
    document.querySelector('.append-row').disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  const table = document.querySelector('table');
  const firstRow = table.rows[0];
  const columnCount = firstRow ? firstRow.cells.length : 0;

  if (columnCount + 1 > 10) {
    appendColumn.disabled = true;
  } else {
    Array.from(table.rows).forEach((row) => {
      const newTd = document.createElement('td');

      row.appendChild(newTd);
    });
  }

  if (columnCount + 1 > 2) {
    document.querySelector('.remove-column').disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const table = document.querySelector('table');
  const firstRow = table.rows[0];
  const columnCount = firstRow ? firstRow.cells.length : 0;

  if (columnCount - 1 < 2) {
    removeColumn.disabled = true;
  } else {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });
  }

  if (columnCount - 1 < 10) {
    document.querySelector('.append-column').disabled = false;
  }
});
