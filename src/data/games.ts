export interface Game {
  id: string;
  name: string;
  tagline: string;
  description: string;
  howToPlay: string[];
  features: string[];
  techStack: string[];
  demoUrl: string;
  githubUrl?: string;
  image?: string;
  players: string;
  playTime: string;
}

export const games: Game[] = [
  {
    id: 'impostor',
    name: 'Impostor',
    tagline: 'Who is hiding among you?',
    description:
      'A group deception game where one randomly selected player — the impostor — doesn\'t know the secret word. Normal players see the word and category; the impostor only sees the category. Through debate and subtle clues, the group tries to unmask the impostor before they guess the word.',
    howToPlay: [
      'Register 3 or more players',
      'Pass the phone to each player privately',
      'Normal players see the word + category',
      'The impostor sees only the category',
      'Debate, give clues, and vote for the impostor',
      'The impostor wins by guessing the word before being caught',
    ],
    features: [
      '50 categories with ~600 words',
      'Automatic role assignment',
      'No server or account needed',
      'Light/dark theme',
      'Works fully offline',
      'PWA-ready',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap 5'],
    demoUrl: 'https://impostor.lealtek.com',
    githubUrl: 'https://github.com/paulaolileal/impostor-game',
    image: '/images/impostor-game.png',
    players: '3+',
    playTime: '10–30 min',
  },
  {
    id: 'stop',
    name: 'Stop! Adedanha',
    tagline: 'Race to fill the categories first',
    description:
      'The classic Brazilian word game — Stop! / Adedanha — reimagined as a PWA. A random letter is chosen, players fill categories that start with that letter, and the first to yell "Stop!" ends the round. Features 143+ categories in 13 themed packs, shareable configurations via URL, and a full scoring system.',
    howToPlay: [
      'Select your category packs (or create custom ones)',
      'Share the game link with friends',
      'A random letter is revealed — fill all categories fast',
      'First to press STOP ends the round',
      'Score: 10pts (unique answer), 5pts (tied), 0pts (invalid)',
      'Play multiple rounds and see the final ranking',
    ],
    features: [
      '143+ categories in 13 themed packs',
      'Custom category creation',
      'Shareable config via URL',
      'Configurable rounds (3, 5, 7, 10, or infinite)',
      '100% offline with Service Worker',
      'Installable as native app (PWA)',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript ES2020+', 'Service Worker', 'Web App Manifest'],
    demoUrl: 'https://stop.lealtek.com',
    githubUrl: 'https://github.com/paulaolileal/stop-game',
    image: '/images/stop-game.png',
    players: '2+',
    playTime: '15–60 min',
  },
  {
    id: 'dino',
    name: 'ARK: Territory Wars',
    tagline: 'Tribal warfare, battleship-style — with dinosaurs',
    description:
      'A "battleship"-style board game themed around ARK: Survival Evolved. Position your creatures on a grid, connect with a friend peer-to-peer, and attack the enemy territory until every creature is destroyed. Personal fan project, not affiliated with Studio Wildcard.',
    howToPlay: [
      'Choose Create, pick a grid size, and confirm',
      'Share the room code with your opponent (copy, QR Code, or WhatsApp)',
      'Wait for your opponent to join the room',
      'Position your creatures on your territory, with rotate, randomize, or clear options',
      'Take turns attacking one tile at a time',
      'The game ends when every creature on one side is destroyed',
    ],
    features: [
      'Peer-to-peer multiplayer via PeerJS — no game server needed',
      'Configurable grid: 8x8, 10x10, 12x12, or 14x14',
      '11 creatures with distinct shapes and auto-rotation',
      'Join via code, QR Code scan, or shareable link',
      'One-tap room code sharing via WhatsApp',
      'Background music per phase and sound effects, with volume control',
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'PeerJS'],
    demoUrl: 'https://dino.lealtek.com',
    githubUrl: 'https://gitlab.com/paulaolileal/dino-territory-wars',
    image: '/images/dino-game.png',
    players: '2',
    playTime: '10–20 min',
  },
];
