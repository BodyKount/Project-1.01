document.getElementById('submit').addEventListener('click', function() {
    const day = document.getElementById('day').value;
    const muscle = document.getElementById('muscle').value;
    const exercise = document.getElementById('exercise').value;
    const weight = document.querySelector('input[name="weight"]').value;
    const sets = document.querySelector('input[name="sets"]').value;
    const reps = document.querySelector('input[name="reps"]').value;

    if (day && muscle && exercise && weight && sets && reps) {
        const entry = {
            day,
            muscle,
            exercise,
            weight,
            sets,
            reps
        };

        let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        journalEntries.push(entry);
        localStorage.setItem('journalEntries', JSON.stringify(journalEntries));

        document.getElementById('form').reset();
        document.getElementById('errMsg').textContent = 'Entry saved successfully!';
        location.reload(); // Refresh the page to show the new entry
    } else {
        document.getElementById('errMsg').textContent = 'Please fill out all fields.';
    }
});

function displayJournalEntries() {
    const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const table = document.getElementById('tbl');
    table.innerHTML = '';

    if (journalEntries.length > 0) {
        const headerRow = document.createElement('tr');
        const headers = ['Day', 'Muscle Group', 'Exercise', 'Weight', 'Sets', 'Reps'];
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });
        table.appendChild(headerRow);

        journalEntries.forEach(entry => {
            const row = document.createElement('tr');
            Object.values(entry).forEach(text => {
                const cell = document.createElement('td');
                cell.textContent = text;
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
    } else {
        const noDataRow = document.createElement('tr');
        const noDataCell = document.createElement('td');
        noDataCell.textContent = 'No entries found';
        noDataCell.colSpan = 6;
        noDataRow.appendChild(noDataCell);
        table.appendChild(noDataRow);
    }
}

document.addEventListener('DOMContentLoaded', displayJournalEntries);

document.getElementById('RefreshBtn').addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});