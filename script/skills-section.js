const searchEl = document.getElementById('skills-search');
const filtersEl = document.getElementById('skills-filters');

const listEl = document.getElementById('skills-list');
const emptyEl = document.getElementById('skills-empty');

const skills = [
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Firestore', category: 'backend' },
    { name: 'Git', category: 'tools' },
    { name: 'GitHub', category: 'tools' },
    { name: 'Gitea', category: 'tools' },
    { name: 'GitLab', category: 'tools' },
    { name: 'VSCode', category: 'tools' },
];

let currentCategory = 'all';
let currentSearch = '';

searchEl.addEventListener('input', e => {
    currentSearch = e.target.value;
    render();
});

filtersEl.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    currentCategory = e.target.dataset.category;
    filtersEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    render();
});

function render() {
    const filtered = skills.filter(s => {
        const matchCat = currentCategory === 'all' || s.category === currentCategory;
        const matchSearch = s.name.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCat && matchSearch;
    });

    listEl.innerHTML = '';
    filtered.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s.name;
        listEl.appendChild(li);
    });

    emptyEl.hidden = filtered.length !== 0;
}

render();