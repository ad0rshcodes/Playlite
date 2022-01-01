import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Soulsounds",
      cover: "https://i.scdn.co/image/ab67616d0000b2730f571abe472289e236d83de5",
      artist: "Parkbench Epiphany",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
      color: ["#EC999F", "#3F5563"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Snaring River",
      cover: "https://i.scdn.co/image/ab67616d0000b273ed624e07e45841dc5680ed05",
      artist: "Moods",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24694",
      color: ["#D3E7EE", "#112D33"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Polaroid",
      cover: "https://i.scdn.co/image/ab67616d0000b273e0388f7a99ee3009d8e22128",
      artist: "Makzo, Mama Aluto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
      color: ["#C6DDE5", "#382D4B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Move it on",
      cover: "https://i.scdn.co/image/ab67616d0000b273eb84407e80d5762051c88fed",
      artist: "Vhsceral",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=246877",
      color: ["#478B79", "#F3B991"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
