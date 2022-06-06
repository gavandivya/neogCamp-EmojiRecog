import './App.css';
import { useState } from "react";
const emoji = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🌪️": "Tornado",
  "🌬️": "Wind Face",
  "🌈": "Rainbow",
  "☂️": "Umbrella",
  "⚡": "High Voltage",
  "☃️": "Snowman",
  "☄️": "Comet",
  "🔥": "Fire",
  "💧": "Droplet",
  "🎄": "Christmas Tree",
  "✨": "Sparkles",
  "⏲️": "Timer Clock",
  "🪀": "Yo-Yo",
  "🪁": "Kite",
  "🔮": "Crystal Ball",
  "🧿": "Nazar Amulet",
  "🕹️": "Joystick",
  "🧸": "Teddy Bear",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🏫": "School",
  "🏬": "Department Store",
  "🏭": "Factory",
  "🏯": "Japanese Castle",
  "🏰": "Castle",
  "💒": "Wedding",
  "🗼": "Tokyo Tower",
  "🗽": "Statue of Liberty",
  "⛪": "Church",
  "🕌": "Mosque",
  "🛕": "Hindu Temple",
  "🕍": "Synagogue",
  "🕋": "Kaaba",
  "⛲": "Fountain",
  "🕰️": "Mantelpiece Clock",
  "🌡️": "Thermometer",
  "⛱️": "Umbrella on Ground",
  "🧨": "Firecracker",
  "🎈": "Balloon",
  "🎉": "Party Popper",
  "🎊": "Confetti Ball",
  "🎎": "Japanese Dolls",
  "🎏": "Carp Streamer",
  "🎐": "Wind Chime",
  "🧧": "Red Envelope",
  "🎀": "Ribbon",
  "🎁": "Wrapped Gift",
  "🤿": "Diving Mask",
  "⛺": "Tent",
  "🌁": "Foggy",
  "🛌": "Person in Bed",
  "🔪": "Kitchen Knife",
  "🏺": "Amphora",
  "️🗺️": "World Map",
  "🧭": "Compass",
  "🧱": "Brick",
  "💈": "Barber Pole",
  "🦽": "Manual Wheelchair",
  "🦼": "Motorized Wheelchair",
  "🛢️": "Oil Drum",
  "🛎️": "Bellhop Bell",
  "🧳": "Luggage",
  "🌃": "Night with Stars",
  "🏙️": "Cityscape",
  "🌄": "Sunrise Over Mountains",
  "🌅": "Sunrise",
  "🌆": "Cityscape at Dusk",
  "🌇": "Sunset",
  "💌": "Love Letter",
  "🕳️": "Hole",
  "💣": "Bomb",
  "🛀": "Person Taking Bath",
  "⌛": "Hourglass Done",
  "⏳": "Hourglass Not Done",
  "⌚": "Watch",
  "⏰": "Alarm Clock",
  "⏱️": "Stopwatch",
  "☎️": "Telephone",
  "📞": "Telephone Receiver",
  "📟": "Pager"
};

const emojikey = Object.keys(emoji);
const selectedStyle = {
  cursor: "pointer",
  backgroundColor: "black",
  borderRadius: "40px"
};
// const shopping = ["Milk", "Oil", "Coconut", "tea"];
export default function App() {
  var [emojiMeaning, set] = useState("");
  var [showEmoji, setEmoji] = useState("");


  function emojiChangeHandler(e) {
    var showEmoji = e.target.value;
    if(showEmoji){
      emojiClickHandler(showEmoji);
    }
    else{
      set("Please enter some emoji");
      setEmoji("");
    }
  }

  function emojiClickHandler(item) {
    if(item in emoji){
      emojiMeaning = emoji[item];
      showEmoji = item;
    }
    else{
      emojiMeaning = "We don't have emoji in our database.";
      showEmoji = '';
    }
    set(emojiMeaning);
    setEmoji(showEmoji);
  }
  // console.log(emojikey);
  // function getBg(index){
  //   if(index%2 === 0){
  //     return "blue";
  //   }
  //   return "red";
  // }
  // function listClickHandler(index){
  // console.log("clicked" , index);
  // }
  return (
    <div className="App">
      <h1>EmojiRecog{"🔍"}</h1>
      <p style={{ fontSize: "1.5rem" }}>
        Sometimes finding the exact meaning of Emoji becomes a tough task.
        EmojiRecog is here to help and search the meaning instantly.
      </p>
      <input
        type="text"
        onChange={emojiChangeHandler}
        value={showEmoji}
        placeholder="Enter any emoji you want to search"
      />
      <p style={{ fontSize: "1.8rem"}}>
        {emojiMeaning} {showEmoji}
      </p>
      {/* <p>{emojikey}</p>*/}
      {/* <ol>
        {shopping.map((item, index) => {
          return (
            <div>
              <li key={item} onClick={()=>listClickHandler(index)} 
              style={{backgroundColor: getBg(index)}}>{item}</li>
            </div>
          );
        })}
      </ol> */}
      <div style={{ margin: "0 5rem", paddingBottom:"5rem" }}>
        <h4>Select one of your favourite emoji and know its meaning</h4>
        {emojikey.map((item) => {
          return (
            <span
              style={showEmoji === item ? selectedStyle : null}
              key={item}
              className="emojiStyle"
              onClick={() => emojiClickHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
