export function initTheme() {
  try {
    const stored = localStorage.getItem('chromo-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const root = document.documentElement;
    if (stored === 'dark' || (!stored && prefersDark)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  } catch (e) {
    // ignore
  }
}

export function toggleTheme(next) {
  try {
    const root = document.documentElement;
    if (next === 'dark' || (!next && !root.classList.contains('dark'))) {
      root.classList.add('dark');
      localStorage.setItem('chromo-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('chromo-theme', 'light');
    }
  } catch (e) {}
}
