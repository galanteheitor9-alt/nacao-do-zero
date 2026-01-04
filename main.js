let country = {
  money: 100,
  popularity: 50,
  infrastructure: 40,
  economy: 50
};

function updateUI() {
  document.getElementById("stats").innerHTML = `
    💰 Dinheiro: ${country.money}<br>
    🏗️ Infraestrutura: ${country.infrastructure}<br>
    📈 Economia: ${country.economy}<br>
    ❤️ Popularidade: ${country.popularity}
  `;
}

function investInfrastructure() {
  country.money -= 10;
  country.infrastructure += 5;
  country.economy += 3;
  country.popularity += 1;
  updateUI();
}

function cutSpending() {
  country.money += 5;
  country.popularity -= 5;
  updateUI();
}

function raiseTaxes() {
  country.money += 10;
  country.popularity -= 8;
  country.economy -= 2;
  updateUI();
}

updateUI();
