const VidMap = {
  a: 'a.mp4',
  about: 'about.mp4',
  accept: 'accept.mp4',
  again: 'again.mp4',
  and: 'and.mp4',
  bad: 'bad.mp4',
  big: 'big.mp4',
  but: 'but.mp4',
  car: 'car.mp4',
  class: 'class.mp4',
  cold: 'cold.mp4',
  come: 'come.mp4',
  day: 'day.mp4',
  deaf: 'deaf.mp4',
  drive: 'drive.mp4',
  easy: 'easy.mp4',
  eat: 'eat.mp4',
  every: 'every.mp4',
  example: 'example.mp4',
  family: 'family.mp4',
  finish: 'finish.mp4',
  friend: 'friend.mp4',
  get: 'get.mp4',
  grow: 'grow.mp4',
  hello: 'hello.mp4',
  here: 'here.mp4',
  i: 'i.mp4',
  important: 'important.mp4',
  in: 'in.mp4',
  joke: 'joke.mp4',
  keep: 'keep.mp4',
  know: 'know.mp4',
  learn: 'learn.mp4',
  leave: 'leave.mp4',
  little: 'little.mp4',
  live: 'live.mp4',
  many: 'many.mp4',
  meaning: 'meaning.mp4',
  name: 'name.mp4',
  next: 'next.mp4',
  normal: 'normal.mp4',
  only: 'only.mp4',
  overlook: 'overlook.mp4',
  pen: 'pen.mp4',
  play: 'play.mp4',
  read: 'read.mp4',
  right: 'right.mp4',
  sad: 'sad.mp4',
  small: 'small.mp4',
  spring: 'spring.mp4',
  until: 'until.mp4',
  use: 'use.mp4',
  young: 'young.mp4',
  your: 'your.mp4',
  yourself: 'yourself.mp4',
};

function renderVideo(word) {
  const videoName = VidMap[word];
  if (videoName) {
    // Render the video on screen using videoName
    console.log('Rendering video:', videoName);
    // Example: document.getElementById('video').src = videoName;
  } else {
    console.log('Video not found for word:', word);
  }
}

// Example usage:
renderVideo('hello');
