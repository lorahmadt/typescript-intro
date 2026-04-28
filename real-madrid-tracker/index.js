require('dotenv').config();

const apiKey = process.env.FOOTBALL_API_KEY;

async function getNextMatch() {
  const response = await fetch('https://api.football-data.org/v4/teams/86/matches?status=SCHEDULED', {
    headers: {
      'X-Auth-Token': apiKey
    }
  });

  const data = await response.json();
  const nextMatch = data.matches[0];

  console.log("=== REAL MADRID NEXT MATCH ===");
  console.log(`Home: ${nextMatch.homeTeam.name}`);
  console.log(`Away: ${nextMatch.awayTeam.name}`);
  console.log(`Date: ${nextMatch.utcDate}`);
  console.log(`Matchday: ${nextMatch.matchday}`);
}

getNextMatch();


async function getLastResult() {
  const response = await fetch('https://api.football-data.org/v4/teams/86/matches?status=FINISHED&limit=1', {
    headers: {
      'X-Auth-Token': apiKey
    }
  });

  const data = await response.json();
  const lastMatch = data.matches[data.matches.length - 1];

  console.log("\n=== REAL MADRID LAST RESULT ===");
  console.log(`Home: ${lastMatch.homeTeam.name}`);
  console.log(`Away: ${lastMatch.awayTeam.name}`);
  console.log(`Score: ${lastMatch.score.fullTime.home} - ${lastMatch.score.fullTime.away}`);
  console.log(`Winner: ${lastMatch.score.winner}`);
}

getLastResult();