import type { Tutorial, Category } from './types';
import React from 'react';

// --- SVG Icons ---

// FIX: Replaced JSX with React.createElement to fix parsing errors in a .ts file.
export const RobotIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement('path', { d: "M12 8V4H8V8H12Z" }),
    React.createElement('path', { d: "M16 8h-4" }),
    React.createElement('path', { d: "M12 16h4" }),
    React.createElement('path', { d: "M12 12v4" }),
    React.createElement('rect', { x: "5", y: "10", width: "14", height: "10", rx: "2" }),
    React.createElement('path', { d: "M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }),
    React.createElement('circle', { cx: "8.5", cy: "15.5", r: ".5", fill: "currentColor" }),
    React.createElement('circle', { cx: "15.5", cy: "15.5", r: ".5", fill: "currentColor" })
  )
);

// FIX: Replaced JSX with React.createElement to fix parsing errors in a .ts file.
export const GearIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement('path', { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" }),
    React.createElement('path', { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }),
    React.createElement('path', { d: "M12 2v2" }),
    React.createElement('path', { d: "M12 22v-2" }),
    React.createElement('path', { d: "m17 20.66-1-1.73" }),
    React.createElement('path', { d: "m7 4.66 1 1.73" }),
    React.createElement('path', { d: "m20.66 17-1.73-1" }),
    React.createElement('path', { d: "m4.66 7 1.73 1" }),
    React.createElement('path', { d: "M2 12h2" }),
    React.createElement('path', { d: "M22 12h-2" }),
    React.createElement('path', { d: "m17 4.66-1 1.73" }),
    React.createElement('path', { d: "m7 20.66 1-1.73" }),
    React.createElement('path', { d: "m20.66 7-1.73 1" }),
    React.createElement('path', { d: "m4.66 17 1.73-1" })
  )
);

// FIX: Replaced JSX with React.createElement to fix parsing errors in a .ts file.
export const BeakerIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement('path', { d: "M4.5 3h15" }),
    React.createElement('path', { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }),
    React.createElement('path', { d: "M6 14h12" })
  )
);

// FIX: Replaced JSX with React.createElement to fix parsing errors in a .ts file.
export const ScissorsIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
 React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
    React.createElement('circle', { cx: "6", cy: "6", r: "3" }),
    React.createElement('circle', { cx: "6", cy: "18", r: "3" }),
    React.createElement('line', { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }),
    React.createElement('line', { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }),
    React.createElement('line', { x1: "8.12", y1: "8.12", x2: "12", y2: "12" })
  )
);

// --- Categories Data ---

export const CATEGORIES: Category[] = [
  { name: 'Mechanical Builds', slug: 'mechanical-builds', description: 'Gears, levers, and structures that move.', icon: GearIcon, color: 'text-sky-500', bgColor: 'bg-sky-100' },
  { name: 'Science Experiments', slug: 'science-experiments', description: 'Fun experiments that teach scientific principles.', icon: BeakerIcon, color: 'text-emerald-500', bgColor: 'bg-emerald-100' },
  { name: 'Robotics Basics', slug: 'robotics-basics', description: 'Get started with simple circuits and robots.', icon: RobotIcon, color: 'text-orange-500', bgColor: 'bg-orange-100' },
  { name: 'DIY Crafts', slug: 'diy-crafts', description: 'Creative projects using everyday materials.', icon: ScissorsIcon, color: 'text-violet-500', bgColor: 'bg-violet-100' },
];

// --- Tutorials Data ---

export const TUTORIALS: Tutorial[] = [
  {
    slug: 'build-a-mini-catapult',
    title: 'Build a Mini Catapult',
    description: 'Learn about levers and potential energy by building your own mini catapult from craft sticks.',
    author: 'Dr. Sprocket',
    date: '2024-07-15',
    category: 'Mechanical Builds',
    tags: ['physics', 'engineering', 'crafts'],
    difficulty: 'Beginner',
    time: '45 mins',
    thumbnail: 'https://picsum.photos/seed/catapult/400/300',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: ['10 Craft sticks', 'Rubber bands', 'Bottle cap', 'Small projectile (e.g., marshmallow)'],
    steps: [
      { title: 'Create the Base', description: 'Stack 8 craft sticks together and wrap rubber bands tightly around both ends.' },
      { title: 'Form the Lever Arm', description: 'Stack the remaining 2 sticks. Wrap a rubber band around one end. Pry them apart and slide the base stack in between.' },
      { title: 'Attach the Basket', description: 'Glue the bottle cap to the top of the lever arm. This will hold your projectile.' },
      { title: 'Launch!', description: 'Press down on the lever arm and release to launch your marshmallow. Experiment with different angles!' }
    ]
  },
  {
    slug: 'make-a-lemon-battery',
    title: 'Make a Lemon Battery',
    description: 'Discover the basics of electricity by creating a simple battery from a lemon.',
    author: 'Prof. Volt',
    date: '2024-06-20',
    category: 'Science Experiments',
    tags: ['chemistry', 'electricity', 'beginner'],
    difficulty: 'Beginner',
    time: '30 mins',
    thumbnail: 'https://picsum.photos/seed/lemonbattery/400/300',
    materials: ['1 Lemon', '1 Copper coin', '1 Galvanized (zinc-coated) nail', 'Voltmeter or a small LED'],
    steps: [
      { title: 'Prepare the Lemon', description: 'Roll the lemon on a table to soften it up and get the juices flowing inside.' },
      { title: 'Insert Electrodes', description: 'Push the copper coin into one side of the lemon and the galvanized nail into the other side. Make sure they don\'t touch inside the lemon.' },
      { title: 'Test the Circuit', description: 'Connect the voltmeter to the coin and nail. You should see a small voltage reading! You can also try to power a small LED.' }
    ]
  },
  {
    slug: 'simple-bristlebot',
    title: 'Simple Bristle-Bot',
    description: 'Create a tiny vibrating robot that skitters around using a toothbrush head and a small motor.',
    author: 'Amy Engino',
    date: '2024-07-01',
    category: 'Robotics Basics',
    tags: ['robotics', 'electronics', 'vibration'],
    difficulty: 'Intermediate',
    time: '1 hour',
    thumbnail: 'https://picsum.photos/seed/bristlebot/400/300',
    videoUrl: 'https://www.youtube.com/embed/uib43k4bkv8',
    materials: ['Toothbrush head', 'Vibrating micro-motor', '3V coin cell battery', 'Double-sided tape'],
    steps: [
      { title: 'Prepare the Brush', description: 'Cut the head off a toothbrush. The angled bristles will help it move in a specific direction.' },
      { title: 'Attach the Motor', description: 'Use double-sided tape to stick the micro-motor onto the top of the toothbrush head.' },
      { title: 'Connect the Power', description: 'Tape one wire from the motor to one side of the coin cell battery. When you touch the other wire to the other side of the battery, the motor will vibrate!' },
      { title: 'Let it Go!', description: 'Secure the second wire to the battery to complete the circuit and watch your Bristle-Bot zoom around on a flat surface.' }
    ]
  },
  {
    slug: 'diy-slime-experiment',
    title: 'DIY Slime Experiment',
    description: 'Mix up your own batch of gooey slime and learn about polymers and non-Newtonian fluids.',
    author: 'The Slime Scientist',
    date: '2024-05-10',
    category: 'DIY Crafts',
    tags: ['chemistry', 'polymers', 'fun'],
    difficulty: 'Beginner',
    time: '25 mins',
    thumbnail: 'https://picsum.photos/seed/slime/400/300',
    materials: ['1/2 cup white school glue', '1/2 cup water', '1/2 tsp Borax', '1 cup warm water', 'Food coloring (optional)'],
    steps: [
      { title: 'Mix Glue Solution', description: 'In one bowl, mix the white school glue and 1/2 cup of water. Add food coloring if desired.' },
      { title: 'Create Borax Activator', description: 'In a separate bowl, dissolve the 1/2 tsp of Borax in 1 cup of warm water. Stir until it\'s fully dissolved.' },
      { title: 'Combine and Mix', description: 'Slowly pour the Borax solution into the glue mixture while stirring constantly. You will feel it start to thicken.' },
      { title: 'Knead Your Slime', description: 'Once it\'s too thick to stir, take it out and knead it with your hands until it reaches the perfect slime consistency. Enjoy!' }
    ]
  },
  {
    slug: 'cardboard-marble-run',
    title: 'Cardboard Marble Run',
    description: 'Engineer an exciting marble run using cardboard tubes, boxes, and your imagination.',
    author: 'Builder Bob',
    date: '2024-07-22',
    category: 'Mechanical Builds',
    tags: ['engineering', 'gravity', 'recycling'],
    difficulty: 'Intermediate',
    time: '2 hours',
    thumbnail: 'https://picsum.photos/seed/marblerun/400/300',
    materials: ['Cardboard boxes', 'Paper towel tubes', 'Tape or hot glue', 'Scissors', 'Marbles'],
    steps: [
      { title: 'Plan Your Design', description: 'Sketch out a path for your marble run. Think about ramps, turns, and drops.' },
      { title: 'Build the Structure', description: 'Use a large cardboard box as your base. Cut tubes and cardboard pieces to create ramps and tracks.' },
      { title: 'Assemble the Run', description: 'Attach your pieces to the base using tape or hot glue. Test each section with a marble as you go to make sure it works.' },
      { title: 'Decorate and Play', description: 'Add fun decorations, obstacles, or even a funnel at the end. Let the marbles roll!' }
    ]
  },
  {
    slug: 'baking-soda-volcano',
    title: 'Baking Soda Volcano',
    description: 'A classic science experiment that demonstrates a simple chemical reaction in a fun, eruptive way.',
    author: 'Dr. Lava',
    date: '2024-04-18',
    category: 'Science Experiments',
    tags: ['chemistry', 'reaction', 'classic'],
    difficulty: 'Beginner',
    time: '35 mins',
    thumbnail: 'https://picsum.photos/seed/volcano/400/300',
    materials: ['Small plastic bottle', 'Modeling clay or play-doh', 'Baking soda', 'Vinegar', 'Red food coloring', 'Dish soap'],
    steps: [
      { title: 'Build the Volcano', description: 'Place the bottle on a tray or in a pan. Build up the sides with modeling clay to form a volcano shape, leaving the top open.' },
      { title: 'Add the Ingredients', description: 'Fill the bottle about halfway with warm water. Add a few drops of red food coloring and dish soap. Then, add 2 tablespoons of baking soda.' },
      { title: 'Time for Eruption!', description: 'When you are ready, pour about 1/4 cup of vinegar into the bottle and watch the fizzy eruption!' }
    ]
  },
];