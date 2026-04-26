import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Home, MapPin, BookOpen, Wrench, Heart, Wifi, Waves, Coffee, CheckCircle2, AlertTriangle, Send, Star, Umbrella, Utensils, Flame, ThermometerSun, Bike, Palette } from "lucide-react";
import "./styles.css";

const sections = [
  { id: "home", label: "Forside", icon: Home },
  { id: "house", label: "Huset", icon: Wifi },
  { id: "area", label: "Området", icon: MapPin },
  { id: "guestbook", label: "Gæstebog", icon: BookOpen },
  { id: "help", label: "Hjælp", icon: Wrench },
];

const favorites = [
  { title: "Havet ved solnedgang", text: "Gå mod havet sidst på dagen og oplev lyset over kysten. Tag tæppe, kaffe eller et glas vin med.", icon: Waves },
  { title: "Café Slugten", text: "Her er altid hyggeligt. Stemningen er fri, og både fiskeplatterne og chili con carne er favoritter hos os.", icon: Coffee },
  { title: "Galleri A", text: "Efter vores mening et galleri i særklasse. Spændende udstillinger, smukke rammer og skønne værter.", icon: Palette },
  { title: "Cykeltur gennem Harerenden", text: "Tag cyklen og oplev landskabet, roen og de små veje omkring Lønstrup.", icon: Bike },
];

const houseGuides = [
  { title: "Wi-Fi", text: "Netværk: TNCAP9E2CAC · Kode: CvjcvpadKveH7Qyg", icon: Wifi },
  { title: "Varmepumpe", text: "Brug auto-programmet. Sæt gerne temperaturen til 21 grader.", icon: ThermometerSun },
  { title: "Brændeovn", text: "Brug kun tørt brænde. Husk at åbne spjældet, når I tænder op.", icon: Flame },
  { title: "Køkken", text: "Ekstra bestik, børneservice og kaffefiltre findes i nederste skuffe.", icon: Utensils },
];

const guestMessages = [
  { name: "Familien Møller", text: "Vi elskede aftenturen til stranden og morgenkaffen på terrassen. Tak for en skøn uge!", rating: 5 },
  { name: "Sofie & Anders", text: "Rubjerg Knude i solnedgang var helt magisk. Vi kommer gerne igen.", rating: 5 },
];

function Card({ children, className = "" }) { return <div className={`card ${className}`}>{children}</div>; }

function Header({ active }) {
  const title = sections.find((s) => s.id === active)?.label || "Forside";
  return <div className="hero"><div className="heroOverlay" /><div className="heroContent"><p className="eyebrow">Velkommen til</p><h1>VesterLy</h1><p className="heroText">Jeres digitale gæstebog og guide til huset, havet og de bedste oplevelser i Lønstrup.</p><div className="pill"><MapPin size={16} /> Lønstrup, Hjørring</div></div><div className="current">Aktuel side: {title}</div></div>;
}

function Nav({ active, setActive }) {
  return <nav className="nav">{sections.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? "navBtn active" : "navBtn"}><Icon size={18} /><span>{item.label}</span></button>; })}</nav>;
}

function HomeScreen({ setActive }) {
  return <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="screen">
    <Card><div className="row top"><div className="iconBubble"><Heart /></div><div><h2>Hej og velkommen</h2><p>Velkommen til VesterLy. Vi håber, I får nogle dejlige dage med havluft, ro og gode oplevelser. Her finder I alt det praktiske — og vores personlige favoritter i Lønstrup.</p></div></div></Card>
    <div className="quickGrid"><button onClick={() => setActive("house")} className="quick dark"><Wifi /> Praktisk info</button><button onClick={() => setActive("area")} className="quick blue"><MapPin /> Oplevelser</button></div>
    <Card className="amber"><div className="row"><Umbrella className="accent" /><div><h3>Dagens idé</h3><p>Pak kaffe, gå mod stranden og find jeres favoritbænk på vejen tilbage gennem Lønstrup.</p></div></div></Card>
    <h3 className="sectionTitle">Vores favoritter</h3>
    {favorites.map((tip) => { const Icon = tip.icon; return <Card key={tip.title}><div className="row"><div className="iconBubble"><Icon /></div><div><h4>{tip.title}</h4><p>{tip.text}</p></div></div></Card>; })}
  </motion.main>;
}

function HouseScreen() {
  return <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="screen">
    <h2>Sådan fungerer huset</h2><p className="lead">Her kan I hurtigt finde svar uden at skulle lede i mapper.</p>
    {houseGuides.map((item) => { const Icon = item.icon; return <Card key={item.title}><div className="row"><div className="iconBubble"><Icon /></div><div><h3>{item.title}</h3><p>{item.text}</p></div></div></Card>; })}
    <Card className="green"><div className="row"><CheckCircle2 className="greenIcon" /><div><h3>Inden I tager hjem</h3><p>Tøm køleskab, start opvaskemaskine, luk vinduer, sluk lys og læg nøglen tilbage efter aftale.</p></div></div></Card>
  </motion.main>;
}

function AreaScreen() {
  return <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="screen">
    <h2>Oplev Lønstrup</h2><p className="lead">Udvalgte forslag, som gør opholdet mere personligt.</p>
    {favorites.map((item) => { const Icon = item.icon; return <Card key={item.title}><div className="row"><div className="iconBubble"><Icon /></div><div><h3>{item.title}</h3><p>{item.text}</p></div></div></Card>; })}
    <Card><h3>På en regnvejrsdag</h3><p>Café, lokale butikker, spil i huset og en varm brændeovn.</p></Card>
  </motion.main>;
}

function GuestbookScreen() {
  return <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="screen">
    <h2>Gæstebog</h2><p className="lead">Del små minder, anbefalinger og øjeblikke fra opholdet.</p>
    <Card className="darkCard"><h3>Skriv en hilsen</h3><div className="inputFake">Hvad var jeres bedste øjeblik i Lønstrup?</div><button className="primary"><Send size={16} /> Send hilsen</button></Card>
    {guestMessages.map((msg) => <Card key={msg.name}><div className="stars">{Array.from({ length: msg.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div><p>“{msg.text}”</p><strong>{msg.name}</strong></Card>)}
  </motion.main>;
}

function HelpScreen() {
  return <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="screen">
    <h2>Meld noget ind</h2><p className="lead">En venlig måde at give besked om mangler eller fejl.</p>
    <div className="quickGrid"><Card className="orange"><AlertTriangle /><h3>Noget virker ikke</h3><p>Fx varme, internet eller hårde hvidevarer.</p></Card><Card className="sky"><Utensils /><h3>Noget mangler</h3><p>Fx bestik, glas, batterier eller sæbe.</p></Card></div>
    <Card><h3>Send besked til værten</h3><div className="inputFake">Kort beskrivelse...</div><div className="inputFake">Tilføj billede</div><button className="primary full">Send rapport</button></Card>
  </motion.main>;
}

function App() {
  const [active, setActive] = useState("home");
  return <div className="page"><div className="phone"><Header active={active} />{active === "home" && <HomeScreen setActive={setActive} />}{active === "house" && <HouseScreen />}{active === "area" && <AreaScreen />}{active === "guestbook" && <GuestbookScreen />}{active === "help" && <HelpScreen />}<Nav active={active} setActive={setActive} /></div></div>;
}

createRoot(document.getElementById("root")).render(<App />);
