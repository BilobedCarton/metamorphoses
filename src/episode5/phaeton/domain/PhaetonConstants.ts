
export type IBirdState = {
    x: number,
    y: number,
    v: number,
}

export enum PlayerVictoryStatus {
    Start = 1,
    InProgress = 0,
    Loss = -1

}

export const gravity = 10 / 60;
export const jumpV = -6;
export const startingHorizSpeed = 1.1;

export const maxY = 480;
export const maxX = 680;
export const maxV = 8;
export const startingBirdState: IBirdState = {
    x: 100,
    y: 240,
    v: 0
}
export const startingDist = 250;
export const gapHeight = 170;
export const halfGapHeight = gapHeight / 2;

export const library = [
    [""],
    ["1"],
    ["22"],
    ["boy"],
    ["rash", "fear", "fool", "tiny"],
    ["ninny", "unfit", "wrath", "doubt"],
    ["denied", "refuse", "boyish", "mortal", "cannot", "lesser", "terror", "ambush"],
    ["failure"],
    ["impotent", "destroyed", "expelled"],
    ["unfitting", "encircled"],
    ["Unknowingly", "unprepared"],
    ["terrifying", "uncontrolled", "apparitions", "cruel pincers", "boyish fear", "deathly power", "inescapable"]
]

export function generateText(size: number) {
    const maxLetters = Math.floor(size / 25);
    const randLetters = Math.floor(maxLetters / 2) + Math.floor(Math.random() * (maxLetters / 2));
    if(randLetters < 3) return "";
    else if(randLetters >= 11) return library[11][Math.floor(Math.random() * library[11].length)];
    else return library[randLetters][Math.floor(Math.random() * library[randLetters].length)];
}