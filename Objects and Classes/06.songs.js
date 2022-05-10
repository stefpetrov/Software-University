function songs(input) {
  let numberOfSongs = +input.shift();
  let desiredPlayList = input.pop();

  class Song {
    constructor(typeList, name, time) {
      (this.typeList = typeList), (this.name = name), (this.time = time);
    }
  }
  let songs = [];

  for (let i = 0; i < numberOfSongs; i++) {
    let currentInput = input[i];
    let currentArr = currentInput.split("_");
    let currentPlayList = currentArr[0];
    let currentSong = currentArr[1];
    let currentTime = currentArr[2];

    let song = new Song(currentPlayList, currentSong, currentTime);

    songs.push(song);
  }
  if (desiredPlayList === "all") {
    songs.forEach((a) => console.log(a.name));
  } else {
    let filtered = songs.filter((a) => a.typeList === desiredPlayList);
    filtered.forEach((a) => console.log(a.name));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
