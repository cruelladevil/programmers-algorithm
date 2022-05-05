function solution(genres, plays) {
  const record = {};
  const theTwoMostPlayedSongsList = [];

  genres.forEach((genre, i) => {
    if (!record[genre]) record[genre] = { total: 0, songs: [] };

    record[genre].total += plays[i];
    record[genre].songs.push(i);
  });

  const valueList = Object.values(record);
  const sortedByTotalPlay = valueList.sort((a, b) => b.total - a.total);

  const addTwoMostPlayed = (songs) => {
    if (songs.length === 1) return theTwoMostPlayedSongsList.push(songs[0]);

    const sortedBySongPlay = songs.sort((a, b) => plays[b] - plays[a]);
    const [theMostPlayed, secondMostPlayed] = sortedBySongPlay.slice(0, 2);

    return theTwoMostPlayedSongsList.push(theMostPlayed, secondMostPlayed);
  };

  sortedByTotalPlay.forEach(({ songs }) => addTwoMostPlayed(songs));

  return theTwoMostPlayedSongsList;
}
