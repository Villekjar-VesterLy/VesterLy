import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Home, MapPin, BookOpen, Wrench, Heart, Wifi, Waves, Coffee, CheckCircle2, AlertTriangle, Send, Star, Umbrella, Utensils, Flame, ThermometerSun, Bike, Palette, KeyRound, Clock, Trash2 } from "lucide-react";
import "./style.css";

const sections = [
  { id: "home", label: "Forside", icon: Home },
  { id: "house", label: "Huset", icon: Wifi },
  { id: "area", label: "Området", icon: MapPin },
  { id: "guestbook", label: "Gæstebog", icon: BookOpen },
  { id: "help", label: "Hjælp", icon: Wrench },
];

const favorites = [
  { title: "Havet ved solnedgang", tag: "Magisk aftenlys", text: "Gå mod havet sidst på dagen og oplev lyset over kysten. Tag tæppe, kaffe eller et glas vin med.", icon: Waves },
  { title: "Café Slugten", tag: "Hyggelig favorit", text: "Her er altid hyggeligt. Stemningen er fri, og både fiskeplatterne og chili con carne er favoritter hos os.", icon: Coffee },
  { title: "Galleri A", tag: "Kunst i særklasse", text: "Efter vores mening et galleri i særklasse. Spændende udstillinger, smukke rammer og skønne værter.", icon: Palette },
  { title: "Cykeltur gennem Harerenden", tag: "Rolige veje", text: "Tag cyklen og oplev landskabet, roen og de små veje omkring Lønstrup.", icon: Bike },
];

const houseGuides = [
  { title: "Wi-Fi", text: "Netværk: TNCAP9E2CAC\nKode: CvjcvpadKveH7Qyg", icon: Wifi },
  { title: "Nøgle", text: "Brug den aftalte nøgleløsning. Husk at lægge nøglen tilbage ved afrejse.", icon: KeyRound },
  { title: "Varmepumpe", text: "Brug auto-programmet. Sæt gerne temperaturen til 21 grader.", icon: ThermometerSun },
  { title: "Brændeovn", text: "Brug kun tørt brænde. Husk at åbne spjældet, når I tænder op.", icon: Flame },
  { title: "Affald", text: "Sorter gerne affald efter de lokale anvisninger. Tøm køkkenaffald ved afrejse.", icon: Trash2 },
  { title: "Check-out", text: "Tøm køleskab, start opvaskemaskine, luk vinduer og sluk lys.", icon: Clock },
];

const guestMessages = [
  { name: "Familien Møller", text: "Vi elskede aftenturen til stranden og morgenkaffen på terrassen. Tak for en skøn uge!", rating: 5 },
  { name: "Sofie & Anders", text: "Solnedgangen ved havet var helt magisk. Vi kommer gerne igen.", rating: 5 },
];

function Card({ children, className = "" }) { return <div className={`card ${className}`}>{children}</div>; }
function Header({ active }) {
  const title = sections.find((s) => s.id === active)?.label || "Forside";
  return <header className="hero"><div className="heroGlow" /><div className="heroContent"><p className="eyebrow">Velkommen til</p><h1>VesterLy</h1><p className="heroText">Jeres digitale gæstebog og guide til huset, havet og de bedste oplevelser i Lønstrup.</p><div className="pill"><MapPin size={16}/> Lønstrup, Hjørring</div></div><div className="current">{title}</div></header>;
}
function Nav({ active, setActive }) { return <nav className="nav">{sections.map(item => { const Icon = item.icon; return <button key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? "navBtn active" : "navBtn"}><Icon size={18}/><span>{item.label}</span></button>; })}</nav>; }

function FavoriteCard({ item }) { const Icon = item.icon; return <Card><div className="row"><div className="iconBubble"><Icon/></div><div><div className="tag">{item.tag}</div><h3>{item.title}</h3><p>{item.text}</p></div></div></Card>; }

function HomeScreen({ setActive }) { return <main className="screen fade"><Card className="welcome"><div className="row top"><div className="iconBubble soft"><Heart/></div><div><h2>Hej og velkommen</h2><p>Velkommen til VesterLy. Vi håber, I får nogle dejlige dage med havluft, ro og gode oplevelser. Her finder I alt det praktiske - og vores personlige favoritter i Lønstrup.</p></div></div></Card><div className="quickGrid"><button onClick={() => setActive('house')} className="quick dark"><Wifi/> Praktisk info</button><button onClick={() => setActive('area')} className="quick blue"><MapPin/> Oplevelser</button></div><Card className="amber"><div className="row"><Umbrella className="accent"/><div><h3>Dagens idé</h3><p>Pak kaffe, gå mod stranden og find jeres favoritbænk på vejen tilbage gennem Lønstrup.</p></div></div></Card><h3 className="sectionTitle">Vores favoritter</h3>{favorites.map(item => <FavoriteCard key={item.title} item={item}/>)}</main>; }
function HouseScreen() { return <main className="screen fade"><h2>Sådan fungerer huset</h2><p className="lead">Her kan I hurtigt finde svar uden at skulle lede i mapper.</p>{houseGuides.map(item => { const Icon = item.icon; return <Card key={item.title}><div className="row"><div className="iconBubble"><Icon/></div><div><h3>{item.title}</h3><p className="preline">{item.text}</p></div></div></Card>; })}<Card className="green"><div className="row"><CheckCircle2 className="greenIcon"/><div><h3>Inden I tager hjem</h3><p>Tøm køleskab, start opvaskemaskine, luk vinduer, sluk lys og læg nøglen tilbage efter aftale.</p></div></div></Card></main>; }
function AreaScreen() { return <main className="screen fade"><h2>Oplev Lønstrup</h2><p className="lead">Udvalgte forslag, som gør opholdet mere personligt.</p>{favorites.map(item => <FavoriteCard key={item.title} item={item}/>)}<Card><h3>På en regnvejrsdag</h3><p>Café, lokale butikker, spil i huset og en varm brændeovn.</p></Card></main>; }
function GuestbookScreen() { return <main className="screen fade"><h2>Gæstebog</h2><p className="lead">Del små minder, anbefalinger og øjeblikke fra opholdet.</p><Card className="darkCard"><h3>Skriv en hilsen</h3><div className="inputFake">Hvad var jeres bedste øjeblik i Lønstrup?</div><button className="primary"><Send size={16}/> Send hilsen</button></Card>{guestMessages.map(msg => <Card key={msg.name}><div className="stars">{Array.from({ length: msg.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor"/> )}</div><p>“{msg.text}”</p><strong>{msg.name}</strong></Card>)}</main>; }
function HelpScreen() { return <main className="screen fade"><h2>Meld noget ind</h2><p className="lead">En venlig måde at give besked om mangler eller fejl.</p><div className="quickGrid"><Card className="orange"><AlertTriangle/><h3>Noget virker ikke</h3><p>Fx varme, internet eller hårde hvidevarer.</p></Card><Card className="sky"><Utensils/><h3>Noget mangler</h3><p>Fx bestik, glas, batterier eller sæbe.</p></Card></div><Card><h3>Send besked til værten</h3><div className="inputFake">Kort beskrivelse...</div><div className="inputFake">Tilføj billede</div><button className="primary full">Send rapport</button></Card></main>; }
function App() { const [active, setActive] = useState('home'); return <div className="page"><div className="phone"><Header active={active}/>{active === 'home' && <HomeScreen setActive={setActive}/>} {active === 'house' && <HouseScreen/>} {active === 'area' && <AreaScreen/>} {active === 'guestbook' && <GuestbookScreen/>} {active === 'help' && <HelpScreen/>}<Nav active={active} setActive={setActive}/></div></div>; }

createRoot(document.getElementById("root")).render(<App/>);
