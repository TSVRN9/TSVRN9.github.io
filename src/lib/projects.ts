export interface Project {
    title: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: 'Catan RL',
        description:
            "A Catan bot that beats Catanatron's AlphaBeta player: a depth-2 expectimax search guided by a learned win-probability network. There's a WebAssembly site where you can play against it or replay its games.",
        tech: ['Rust', 'Python', 'WebAssembly'],
        githubUrl: 'https://github.com/TSVRN9/settlers_of_catan_rl',
        liveUrl: 'https://owenwang.dev/settlers_of_catan_rl/',
        image: '/images/projects/catan-rl.jpg'
    },
    {
        title: 'UDine',
        description:
            "A calorie and macro tracker for UMass Amherst dining. It's a SvelteKit web app and a React Native mobile app sharing one core package, logging real dining-hall nutrition data, ranking dishes head-to-head Beli-style, and pinging you when a friend's at the dining hall.",
        tech: ['SvelteKit', 'React Native', 'Supabase'],
        githubUrl: 'https://github.com/TSVRN9/UDine',
        image: '/images/projects/udine.png'
    },
    {
        title: 'Transcribe',
        description:
            'A media player built for transcribing music by ear. Load a local file or a YouTube link, then slow it down, loop a section with a flag-and-rewind, and check what notes are really playing in the Pitchgram view against a piano keyboard.',
        tech: ['Svelte', 'TypeScript'],
        githubUrl: 'https://github.com/TSVRN9/Transcribe',
        liveUrl: 'https://owenwang.dev/Transcribe',
        image: '/images/projects/transcribe.jpg'
    },
    {
        title: 'BLEh',
        description:
            "A DIY Bluetooth tracker built in 24 hours at HackUMass, an alternative to AirTags that doesn't phone home. An ESP32 beacon pairs with a Tauri + SvelteKit app for iOS and Android that finds it and rings a buzzer.",
        tech: ['Tauri', 'Svelte', 'Rust', 'ESP32'],
        githubUrl: 'https://github.com/TSVRN9/BLEh',
        image: '/images/projects/bleh.jpg'
    }
];
