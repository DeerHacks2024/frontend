import aVideo from './animations/a.mp4';
import acceptVideo from './animations/accept.mp4';
import aboutVideo from './animations/about.mp4';
import againVideo from './animations/again.mp4';
import andVideo from './animations/and.mp4';
import badVideo from './animations/bad.mp4';
import bigVideo from './animations/big.mp4';
import butVideo from './animations/but.mp4';
import carVideo from './animations/car.mp4';
import classVideo from './animations/class.mp4';
import coldVideo from './animations/cold.mp4';
import comeVideo from './animations/come.mp4';
import dayVideo from './animations/day.mp4';
import deafVideo from './animations/deaf.mp4';
import driveVideo from './animations/drive.mp4';
import easyVideo from './animations/easy.mp4';
import eatVideo from './animations/eat.mp4';
import everyVideo from './animations/every.mp4';
import exampleVideo from './animations/example.mp4';
import familyVideo from './animations/family.mp4';
import finishVideo from './animations/finish.mp4';
import friendVideo from './animations/friend.mp4';
import getVideo from './animations/get.mp4';
import growVideo from './animations/grow.mp4';
import helloVideo from './animations/hello.mp4';
import hereVideo from './animations/here.mp4';
import iVideo from './animations/i.mp4';
import importantVideo from './animations/important.mp4';
import inVideo from './animations/in.mp4';
import jokeVideo from './animations/joke.mp4';
import keepVideo from './animations/keep.mp4';
import knowVideo from './animations/know.mp4';
import learnVideo from './animations/learn.mp4';
import leaveVideo from './animations/leave.mp4';
import littleVideo from './animations/little.mp4';
import liveVideo from './animations/live.mp4';
import manyVideo from './animations/many.mp4';
import meaningVideo from './animations/meaning.mp4';
import nameVideo from './animations/name.mp4';
import nextVideo from './animations/next.mp4';
import normalVideo from './animations/normal.mp4';
import onlyVideo from './animations/only.mp4';
import overlookVideo from './animations/overlook.mp4';
import penVideo from './animations/pen.mp4';
import playVideo from './animations/play.mp4';
import readVideo from './animations/read.mp4';
import rightVideo from './animations/right.mp4';
import sadVideo from './animations/sad.mp4';
import smallVideo from './animations/small.mp4';
import springVideo from './animations/spring.mp4';
import untilVideo from './animations/until.mp4';
import useVideo from './animations/use.mp4';
import youngVideo from './animations/young.mp4';
import yourVideo from './animations/your.mp4';
import yourselfVideo from './animations/yourself.mp4';

const VidMap = {
  a: aVideo,
  about: aboutVideo,
  accept: acceptVideo,
  again: againVideo,
  and: andVideo,
  bad: badVideo,
  big: bigVideo,
  but: butVideo,
  car: carVideo,
  class: classVideo,
  cold: coldVideo,
  come: comeVideo,
  day: dayVideo,
  deaf: deafVideo,
  drive: driveVideo,
  easy: easyVideo,
  eat: eatVideo,
  every: everyVideo,
  example: exampleVideo,
  family: familyVideo,
  finish: finishVideo,
  friend: friendVideo,
  get: getVideo,
  grow: growVideo,
  hello: helloVideo,
  here: hereVideo,
  i: iVideo,
  important: importantVideo,
  in: inVideo,
  joke: jokeVideo,
  keep: keepVideo,
  know: knowVideo,
  learn: learnVideo,
  leave: leaveVideo,
  little: littleVideo,
  live: liveVideo,
  many: manyVideo,
  meaning: meaningVideo,
  name: nameVideo,
  next: nextVideo,
  normal: normalVideo,
  only: onlyVideo,
  overlook: overlookVideo,
  pen: penVideo,
  play: playVideo,
  read: readVideo,
  right: rightVideo,
  sad: sadVideo,
  small: smallVideo,
  spring: springVideo,
  until: untilVideo,
  use: useVideo,
  young: youngVideo,
  your: yourVideo,
  yourself: yourselfVideo,
};

const getVideoFileName = (word) => {
  const fileName = VidMap[word];
  if (!fileName) {
    throw new Error(`Video for word "${word}" not found in the mapping.`);
  }
  return fileName;
};

export default getVideoFileName;
