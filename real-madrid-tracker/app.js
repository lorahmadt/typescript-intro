async function getNextMatch() {
  const response = await fetch("http://localhost:3000/next-match");
  const match = await response.json();
  const date = new Date(match.utcDate).toLocaleString('en-us', { dataStyle: 'long', timeStyle: 'short'});
  const text = `${match.homeTeam.name} vs ${match.awayTeam.name} — ${date}`;
  document.getElementById("next-match").innerText = text;
}

async function getLastResult() {
  const response = await fetch("http://localhost:3000/last-result");
  const match = await response.json();
  const score = `${match.score.fullTime.home} - ${match.score.fullTime.away}`;
  const teams = `${match.homeTeam.name} vs ${match.awayTeam.name}`;
  document.getElementById("last-result").innerHTML = `
    <p>${teams}</p>
    <p style="font-size: 32px; color: #D4AF37; font-weight: bold; margin-top: 8px;">${score}</p>
  `;
}

getNextMatch();
getLastResult();