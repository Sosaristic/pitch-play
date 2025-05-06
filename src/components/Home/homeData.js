export const chipsData = [
  { id: 1, name: 'matches' },
  { id: 2, name: 'live' },
  { id: 3, name: 'fixtures' },
  { id: 4, name: 'competition' },
];

export const matchData = [
  {
    id: 1,
    time: 56,
    matchStarted: true,
    competition: 'friendly match',
    home: { homeName: 'Ronaldo Fans', homeScore: 0, homeColor: 'red' },
    away: { awayName: 'Messi fans', awayScore: 3, awayColor: 'orange' },
  },
  {
    id: 2,
    time: 45,
    competition: 'friendly match',
    matchStarted: false,
    home: { homeName: 'ECE 024', homeScore: 2, homeColor: 'blue' },
    away: { awayName: 'EEE 024', awayScore: 2, awayColor: 'yellow' },
  },
];

export const fixturesData = [
  {
    id: 1,
    time: 56,
    matchStarted: false,
    competition: 'Group A ',
    home: { homeName: 'Ronaldo Fans', homeScore: 0, homeColor: 'red' },
    away: { awayName: 'Messi fans', awayScore: 3, awayColor: 'orange' },
  },
  {
    id: 2,
    time: 80,
    competition: 'Group B',
    matchStarted: false,
    home: { homeName: 'ECE 024', homeScore: 2, homeColor: 'blue' },
    away: { awayName: 'EEE 024', awayScore: 2, awayColor: 'yellow' },
  },
];
