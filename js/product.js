window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tabs_header_item');
    const contents = document.querySelectorAll('.tabs_content_item');

    function showTab(tabId) {
        buttons.forEach(btn => btn.classList.remove('tabs_header_item--active'));
        contents.forEach(content => (content.style.display = 'none'));
        document.querySelector(`.tabs_header_item[data-tab="${tabId}"]`).classList.add('tabs_header_item--active');
        document.getElementById(tabId).style.display = 'block';
    }

    showTab('tab-2');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = button.getAttribute('data-tab');
            showTab(tabId);
        });
    });
})