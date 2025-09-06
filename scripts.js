const searchBox = document.getElementById('search-box');
const resultsDiv = document.getElementById('results');

const data = [
  { name: 'Magellan\'s Cross', url: '1magellan.html' },
  { name: 'Basilica del Santo Niño', url: '2santonino.html' },
  { name: 'Fort San Pedro', url: '3fortsanpedro.html' },
  { name: 'Cebu Taoist Temple', url: '4cebutaoist.html' },
  { name: 'Lapu-Lapu Shrine', url: '5lapulapushrine.html' },
  { name: 'Museo Sugbo', url: '6museosugbo.html' },
  { name: 'Alona Beach', url: '7alonabeach.html' },
  { name: 'Bantayan Island', url: '8bantayanisland.html' },
  { name: 'Malapascua Island', url: '9malapascuaisland.html' },
  { name: 'Moalboal Island', url: '10moalboalisland.html' },
  { name: 'Tumalog Falls', url: '11tumalogfalls.html' },
  { name: 'Camotes Islands', url: '12camotesisland.html' },
  { name: 'Arapal Nature Farms', url: '13arapalnaturefarms.html' },
  { name: 'Sumilon Island', url: '14sumilonisland.html' },
  { name: 'Caohagan Island', url: '15caohaganisland.html' },
  { name: 'Hilutungan Island', url: '16hiluntunganisland.html' },
  { name: 'Kawasan Falls', url: '17kawasanfalls.html' },
  { name: 'Osmeña Peak', url: '18osmenapeak.html' },
  { name: 'Olango Island Bird Sanctuary', url: '19olangowildlifesanctuary.html' },
  { name: 'Canyoneering in Badian', url: '20canyoneeringinbadian.html' },
  { name: 'Cebu Metropolitan Cathedral', url: '21cebumetropolitancathedral.html' },
  { name: 'Simala Church', url: '22simalachurch.html' },
  { name: 'Bojo River', url: '23bojoriver.html' },
  { name: 'Mantayupan Falls', url: '24Mantayupanfalls.html' },
  { name: 'Dao Falls', url: '25daofalls.html' },
  { name: 'Little Tokyo', url: '26littlekyoto.html' },
  { name: 'Carnaza Island', url: '27carnazaisland.html' },
  { name: 'Temple of Leah', url: '28templeoflea.html' },
  { name: 'Sirao Island', url: '29siraogarden.html' },
  { name: 'Cebu Bamboo Forest', url: '30cebubambooforest.html' },
];

function search(query) {
  resultsDiv.innerHTML = '';
  if (query) {
    const filteredData = data.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    displayResults(filteredData);
  } else {
    resultsDiv.innerHTML = '<p">Search for something...</p>';
  }
}

function displayResults(results) {
  if (results.length) {
    results.forEach(result => {
      const resultElem = document.createElement('div');
      resultElem.innerHTML = `<p>${result.name}</p>`;
      resultElem.addEventListener('click', () => {
        window.location.href = result.url;
      });
      resultsDiv.appendChild(resultElem);
    });
  } else {
    resultsDiv.innerHTML = '<p>No results found.</p>';
  }
}

searchBox.addEventListener('input', () => {
  search(searchBox.value);
});