// Edit the memes array below to add your own meme URLs and associated hashtags.
// Each meme is an object with 'url' (image link) and 'hashtags' (array of strings like ['#funny', '#meme']).
// Replace placeholder URLs with your actual meme image links (e.g., hosted on Imgur, etc.).
// Aim to have at least 20-50 memes for good variety.

const memes = [
    { url: 'https://chameleonmemes.com/wp-content/uploads/2023/06/Boxes-in-public-Naughty-Memes.jpeg', hashtags: ['#funny', '#meme'] },
    { url: 'https://chameleonmemes.com/wp-content/uploads/2023/06/Still-rolls-back-Naughty-Memes.jpeg', hashtags: ['#naughty', '#funny'] },
    { url: 'https://picsum.photos/300/300?random=3', hashtags: ['#viral', '#dank'] },
    { url: 'https://picsum.photos/300/300?random=4', hashtags: ['#funny', '#relatable'] },
    { url: 'https://picsum.photos/300/300?random=5', hashtags: ['#meme', '#savage'] },
    { url: 'https://picsum.photos/300/300?random=6', hashtags: ['#lol', '#wholesome'] },
    { url: 'https://picsum.photos/300/300?random=7', hashtags: ['#viral', '#random'] },
    { url: 'https://picsum.photos/300/300?random=8', hashtags: ['#dank', '#funny'] },
    { url: 'https://picsum.photos/300/300?random=9', hashtags: ['#relatable', '#meme'] },
    { url: 'https://picsum.photos/300/300?random=10', hashtags: ['#lol', '#viral'] },
    { url: 'https://picsum.photos/300/300?random=11', hashtags: ['#savage', '#dank'] },
    { url: 'https://picsum.photos/300/300?random=12', hashtags: ['#wholesome', '#random'] },
    { url: 'https://picsum.photos/300/300?random=13', hashtags: ['#funny', '#lol'] },
    { url: 'https://picsum.photos/300/300?random=14', hashtags: ['#meme', '#relatable'] },
    { url: 'https://picsum.photos/300/300?random=15', hashtags: ['#viral', '#savage'] },
    { url: 'https://picsum.photos/300/300?random=16', hashtags: ['#dank', '#wholesome'] },
    { url: 'https://picsum.photos/300/300?random=17', hashtags: ['#random', '#funny'] },
    { url: 'https://picsum.photos/300/300?random=18', hashtags: ['#lol', '#meme'] },
    { url: 'https://picsum.photos/300/300?random=19', hashtags: ['#relatable', '#viral'] },
    { url: 'https://picsum.photos/300/300?random=20', hashtags: ['#savage', '#dank'] },
    { url: 'https://picsum.photos/300/300?random=21', hashtags: ['#wholesome', '#random'] },
    { url: 'https://picsum.photos/300/300?random=22', hashtags: ['#funny', '#lol'] },
    { url: 'https://picsum.photos/300/300?random=23', hashtags: ['#meme', '#relatable'] },
    { url: 'https://picsum.photos/300/300?random=24', hashtags: ['#viral', '#savage'] },
    { url: 'https://picsum.photos/300/300?random=25', hashtags: ['#dank', '#wholesome'] },
    { url: 'https://picsum.photos/300/300?random=26', hashtags: ['#random', '#funny'] },
    { url: 'https://picsum.photos/300/300?random=27', hashtags: ['#lol', '#meme'] },
    { url: 'https://picsum.photos/300/300?random=28', hashtags: ['#relatable', '#viral'] },
    { url: 'https://picsum.photos/300/300?random=29', hashtags: ['#savage', '#dank'] },
    { url: 'https://picsum.photos/300/300?random=30', hashtags: ['#wholesome', '#random'] },
    { url: 'https://picsum.photos/300/300?random=31', hashtags: ['#funny', '#lol'] },
    { url: 'https://picsum.photos/300/300?random=32', hashtags: ['#meme', '#relatable'] },
    { url: 'https://picsum.photos/300/300?random=33', hashtags: ['#viral', '#savage'] },
    { url: 'https://picsum.photos/300/300?random=34', hashtags: ['#dank', '#wholesome'] },
    { url: 'https://picsum.photos/300/300?random=35', hashtags: ['#random', '#funny'] },
    { url: 'https://picsum.photos/300/300?random=36', hashtags: ['#lol', '#meme'] },
    { url: 'https://picsum.photos/300/300?random=37', hashtags: ['#relatable', '#viral'] },
    { url: 'https://picsum.photos/300/300?random=38', hashtags: ['#savage', '#dank'] },
    { url: 'https://picsum.photos/300/300?random=39', hashtags: ['#wholesome', '#random'] },
    { url: 'https://picsum.photos/300/300?random=40', hashtags: ['#funny', '#lol'] },
    { url: 'https://picsum.photos/300/300?random=41', hashtags: ['#meme', '#relatable'] },
    { url: 'https://picsum.photos/300/300?random=42', hashtags: ['#viral', '#savage'] },
    { url: 'https://picsum.photos/300/300?random=43', hashtags: ['#dank', '#wholesome'] },
    { url: 'https://picsum.photos/300/300?random=44', hashtags: ['#random', '#funny'] },
    { url: 'https://picsum.photos/300/300?random=45', hashtags: ['#lol', '#meme'] },
    { url: 'https://picsum.photos/300/300?random=46', hashtags: ['#relatable', '#viral'] },
    { url: 'https://picsum.photos/300/300?random=47', hashtags: ['#savage', '#dank'] },
    { url: 'https://picsum.photos/300/300?random=48', hashtags: ['#wholesome', '#random'] },
    { url: 'https://picsum.photos/300/300?random=49', hashtags: ['#funny', '#lol'] },
    { url: 'https://picsum.photos/300/300?random=50', hashtags: ['#meme', '#relatable'] }
];

let currentHashtag = null;
let shuffledMemes = [];
let shownIndices = new Set();
const memesPerLoad = 10;

// Function to get unique hashtags
function getUniqueHashtags() {
    const hashtags = new Set();
    memes.forEach(meme => {
        meme.hashtags.forEach(tag => hashtags.add(tag));
    });
    return Array.from(hashtags);
}

// Function to shuffle array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadFeatured() {
    const featuredContainer = document.querySelector('.featured-grid');
    if (!featuredContainer) return;
    const randomMemes = shuffleArray([...memes]).slice(0, 4);
    featuredContainer.innerHTML = '';
    randomMemes.forEach((meme, index) => {
        const memeDiv = document.createElement('div');
        memeDiv.className = 'featured-meme';
        memeDiv.innerHTML = `<img src="${meme.url}" alt="Featured Meme" loading="lazy">`;
        memeDiv.style.animationDelay = `${index * 0.2}s`;
        featuredContainer.appendChild(memeDiv);
    });
}

// Function to show initial or filtered memes (first 10)
function showInitialMemes(memeList) {
    const container = document.getElementById('meme-container');
    container.innerHTML = '';
    shownIndices.clear();
    const firstIndices = Array.from({length: Math.min(10, memeList.length)}, (_, i) => i);
    firstIndices.forEach(idx => {
        const meme = memeList[idx];
        const memeDiv = document.createElement('div');
        memeDiv.className = 'meme';
        memeDiv.innerHTML = `<img src="${meme.url}" alt="Meme" loading="lazy">`;
        memeDiv.style.animationDelay = `${idx * 0.1}s`;
        container.appendChild(memeDiv);
        shownIndices.add(idx);
    });
    document.getElementById('show-more').style.display = memeList.length > 10 ? 'block' : 'none';
}

// Function to show more random memes from remaining
function showMore() {
    const remainingIndices = [];
    for (let i = 0; i < shuffledMemes.length; i++) {
        if (!shownIndices.has(i)) {
            remainingIndices.push(i);
        }
    }
    if (remainingIndices.length === 0) {
        document.getElementById('show-more').style.display = 'none';
        return;
    }
    shuffleArray(remainingIndices);
    const toShowCount = Math.min(memesPerLoad, remainingIndices.length);
    const toShow = remainingIndices.slice(0, toShowCount);
    const container = document.getElementById('meme-container');
    toShow.forEach((idx, showIndex) => {
        const meme = shuffledMemes[idx];
        const memeDiv = document.createElement('div');
        memeDiv.className = 'meme';
        memeDiv.innerHTML = `<img src="${meme.url}" alt="Meme" loading="lazy">`;
        memeDiv.style.animationDelay = `${showIndex * 0.1}s`;
        container.appendChild(memeDiv);
        shownIndices.add(idx);
    });
    if (remainingIndices.length <= memesPerLoad) {
        document.getElementById('show-more').style.display = 'none';
    }
}

// Function to load initial random memes
function loadInitialMemes() {
    const allMemes = [...memes];
    shuffledMemes = shuffleArray(allMemes);
    showInitialMemes(shuffledMemes);
    currentHashtag = null;
    updateHashtagButtons();
}

// Function to load memes for a specific hashtag
function loadHashtagMemes(hashtag) {
    const filteredMemes = memes.filter(meme => meme.hashtags.includes(hashtag));
    if (filteredMemes.length === 0) return;
    
    shuffledMemes = shuffleArray([...filteredMemes]);
    showInitialMemes(shuffledMemes);
    currentHashtag = hashtag;
    updateHashtagButtons();
}

// Function to update hashtag buttons
function updateHashtagButtons() {
    const buttonsContainer = document.getElementById('hashtag-buttons');
    const hashtags = getUniqueHashtags();
    buttonsContainer.innerHTML = '';
    
    hashtags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'hashtag-btn';
        btn.textContent = tag;
        btn.addEventListener('click', () => loadHashtagMemes(tag));
        if (currentHashtag === tag) {
            btn.classList.add('active');
        }
        buttonsContainer.appendChild(btn);
    });
}

// Show more handler
document.getElementById('show-more').addEventListener('click', showMore);

// Theme toggle functions
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-toggle').textContent = '☀';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.getElementById('theme-toggle').textContent = isDark ? '☀' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    loadFeatured();
    updateHashtagButtons();
    loadInitialMemes();
});
