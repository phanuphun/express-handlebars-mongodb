(function () {
    function qs(sel, root = document) { return root.querySelector(sel); }

    function fillAndOpenUpdateModal(btn) {
        const id = btn.getAttribute('data-note-id');
        if (!id) return;

        const title = btn.getAttribute('data-title') || '';
        const content = btn.getAttribute('data-content') || '';
        const bgColor = btn.getAttribute('data-bgcolor') || '#ffffff';

        const form = qs('#update-note-form');
        const titleEl = qs('#update-title');
        const contentEl = qs('#update-content');
        const colorEl = qs('#update-bgColor');

        if (!form || !titleEl || !contentEl || !colorEl) return;

        form.setAttribute('action', `/notes/${id}`);

        titleEl.value = title;
        contentEl.value = content;
        colorEl.value = bgColor;

        window.openModal?.('update_note_modal');
    }

    document.addEventListener('click', (e) => {
        const editBtn = e.target.closest('[data-edit-note]');
        if (editBtn) {
            e.preventDefault();
            fillAndOpenUpdateModal(editBtn);
        }
    });
})();
