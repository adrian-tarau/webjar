const SELECTOR_SIDEBAR_WRAPPER = ".sidebar-wrapper";
const SELECTOR_MAIN_WRAPPER = ".app-main";
const Default = {
    scrollbarTheme: "os-theme-light",
    scrollbarAutoHide: "leave",
    scrollbarClickScroll: true,
};
document.addEventListener("DOMContentLoaded", function () {
    const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);
    const mainWrapper = false;//document.querySelector(SELECTOR_MAIN_WRAPPER);
    const hasOverlayLib = typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined";
    if (sidebarWrapper && hasOverlayLib) {
        OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
            scrollbars: {
                theme: Default.scrollbarTheme,
                autoHide: Default.scrollbarAutoHide,
                clickScroll: Default.scrollbarClickScroll,
            },
        });
    }
    if (mainWrapper && hasOverlayLib) {
        OverlayScrollbarsGlobal.OverlayScrollbars(mainWrapper, {
            scrollbars: {
                theme: Default.scrollbarTheme,
                autoHide: Default.scrollbarAutoHide,
                clickScroll: Default.scrollbarClickScroll,
            },
        });
    }
});