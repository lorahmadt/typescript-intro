async function getNextMatch() {
  const response = await fetch("http://localhost:3000/next-match");
  const match = await response.json();
  const text = `${match.homeTeam.name} vs ${match.awayTeam.name} — ${match.utcDate}`;
  document.getElementById("next-match").innerText = text;
}

async function getLastResult() {
  const response = await fetch("http://localhost:3000/last-result");
  const match = await response.json();
  const text = `${match.homeTeam.name} ${match.score.fullTime.home} - ${match.score.fullTime.away} ${match.awayTeam.name}`;
  document.getElementById("last-result").innerText = text;
}

getNextMatch();
getLastResult();