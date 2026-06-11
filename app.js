// Global state
let selectedCountryId = null;
let selectedUniversityId = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderCountries();
});

// Render countries
function renderCountries() {
    const countriesList = document.getElementById('countriesList');
    
    if (countries.length === 0) {
        countriesList.innerHTML = '<div class="placeholder"><div class="placeholder-icon">🌍</div><p>No countries available</p></div>';
        return;
    }
    
    countriesList.innerHTML = '';
    countries.forEach(country => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'country-btn' + (selectedCountryId === country.id ? ' active' : '');
        btn.textContent = country.flag + ' ' + country.name;
        btn.onclick = () => selectCountry(country.id);
        countriesList.appendChild(btn);
    });
}

// Select country
function selectCountry(countryId) {
    selectedCountryId = countryId;
    selectedUniversityId = null;
    renderCountries();
    renderUniversities();
    renderDetails();
}

// Render universities
function renderUniversities() {
    const universitiesPanel = document.getElementById('universitiesPanel');
    
    if (!selectedCountryId) {
        universitiesPanel.innerHTML = '<div class="placeholder"><div class="placeholder-icon">🏫</div><p>Choose a country first</p></div>';
        return;
    }
    
    const countryUniversities = universities.filter(u => u.countryId === selectedCountryId);
    
    if (countryUniversities.length === 0) {
        universitiesPanel.innerHTML = '<div class="placeholder"><div class="placeholder-icon">🏫</div><p>No universities in this country</p></div>';
        return;
    }
    
    // Sort by difficulty (easy -> medium -> hard)
    const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
    countryUniversities.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    
    const universitiesList = document.createElement('div');
    universitiesList.className = 'university-list';
    
    countryUniversities.forEach(university => {
        const item = document.createElement('div');
        item.className = 'university-item' + (selectedUniversityId === university.id ? ' active' : '');
        
        const difficultyClass = 'difficulty-' + university.difficulty;
        
        item.innerHTML = `
            <div>${university.name}</div>
            <div class="difficulty-badge ${difficultyClass}">${university.difficulty.charAt(0).toUpperCase() + university.difficulty.slice(1)}</div>
        `;
        
        item.onclick = () => selectUniversity(university.id);
        universitiesList.appendChild(item);
    });
    
    universitiesPanel.innerHTML = '';
    universitiesPanel.appendChild(universitiesList);
}

// Select university
function selectUniversity(universityId) {
    selectedUniversityId = universityId;
    renderUniversities();
    renderDetails();
}

// Render details
function renderDetails() {
    const detailsPanel = document.getElementById('detailsPanel');
    
    if (!selectedUniversityId) {
        detailsPanel.innerHTML = '<div class="placeholder"><div class="placeholder-icon">📋</div><p>Select a university to view details</p></div>';
        return;
    }
    
    const university = universities.find(u => u.id === selectedUniversityId);
    const universityDetails = details.find(d => d.universityId === selectedUniversityId);
    
    if (!universityDetails) {
        detailsPanel.innerHTML = '<div class="placeholder"><div class="placeholder-icon">📋</div><p>No details available for this university yet</p></div>';
        return;
    }
    
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'details-container';
    
    // University name
    const nameSection = document.createElement('div');
    nameSection.className = 'detail-section';
    nameSection.innerHTML = `<h3>${university.name}</h3><p>${university.description || 'No description available'}</p>`;
    detailsContainer.appendChild(nameSection);
    
    // Expenses
    const expensesSection = document.createElement('div');
    expensesSection.className = 'detail-section';
    expensesSection.innerHTML = `
        <h3>💰 Expenses</h3>
        <p><strong>Tuition Fee:</strong> ${universityDetails.tuitionFee}</p>
        <p><strong>Rent:</strong> ${universityDetails.rentCost}</p>
    `;
    
    if (universityDetails.otherExpenses && universityDetails.otherExpenses.length > 0) {
        expensesSection.innerHTML += '<p><strong>Other Expenses:</strong></p><ul class="expense-list">';
        universityDetails.otherExpenses.forEach(expense => {
            expensesSection.innerHTML += `<li>${expense}</li>`;
        });
        expensesSection.innerHTML += '</ul>';
    }
    
    detailsContainer.appendChild(expensesSection);
    
    // Academic Requirements
    const academicSection = document.createElement('div');
    academicSection.className = 'detail-section';
    academicSection.innerHTML = `
        <h3>🎓 Academic Requirements</h3>
        <p><strong>Minimum Grade:</strong> ${universityDetails.minGrade}</p>
        <p><strong>Test Scores:</strong> ${universityDetails.testScores || 'Not specified'}</p>
    `;
    detailsContainer.appendChild(academicSection);
    
    // Useful Information
    if (universityDetails.usefulInfo && universityDetails.usefulInfo.length > 0) {
        const infoSection = document.createElement('div');
        infoSection.className = 'detail-section';
        infoSection.innerHTML = `<h3>ℹ️ Useful Information</h3><ul class="info-list">`;
        universityDetails.usefulInfo.forEach(info => {
            infoSection.innerHTML += `<li>${info}</li>`;
        });
        infoSection.innerHTML += '</ul>';
        detailsContainer.appendChild(infoSection);
    }
    
    detailsPanel.innerHTML = '';
    detailsPanel.appendChild(detailsContainer);
}
