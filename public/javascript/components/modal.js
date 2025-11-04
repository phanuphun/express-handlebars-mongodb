// /public/javascript/components/modal.js
(function () {
    function openModal(id) {
        const dlg = document.getElementById(id);
        if (!dlg) return;
        if (typeof dlg.showModal === 'function') dlg.showModal();
        else dlg.setAttribute('open', '');
    }

    function closeModal(id) {
        const dlg = document.getElementById(id);
        if (!dlg) return;
        if (typeof dlg.close === 'function') dlg.close();
        dlg.removeAttribute('open');
        document.documentElement.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
    }

    document.addEventListener('click', (e) => {
        const opener = e.target.closest('[data-modal-open]');
        if (opener) {
            const id = opener.getAttribute('data-modal-open');
            if (id) openModal(id);
            return;
        }
        const closer = e.target.closest('[data-modal-close]');
        if (closer) {
            const id = closer.getAttribute('data-modal-close');
            if (id) closeModal(id);
            return;
        }
    });

    window.openModal = openModal;
    window.closeModal = closeModal;
})();
