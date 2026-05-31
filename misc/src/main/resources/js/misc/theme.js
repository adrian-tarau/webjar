(() => {
    const updateTheme = () => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    };
    let currentTheme = document.documentElement.getAttribute('data-bs-theme');
    if (!currentTheme) {
        updateTheme();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    }
})();