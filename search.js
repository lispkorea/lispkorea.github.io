const SearchModule = (() => {
    const el = {
        input: document.getElementById('search-input'),
        results: document.getElementById('search-results'),
        btn: document.getElementById('search-button'),
        modal: document.getElementById('search-modal'),
        close: document.getElementById('close-modal'),
        bg: document.querySelector('.modal-background')
    };

    let fuse = null;

    function getHighlightedText(text, matches, query) {
        if (!matches || !query) return text;

        const queryLower = query.toLowerCase();
        const validIndices = matches.filter(([start, end]) => {
            const matchChunk = text.substring(start, end + 1).toLowerCase();
            return matchChunk === queryLower;
        });

        if (validIndices.length === 0) return text;

        let highlighted = text;
        [...validIndices].sort((a, b) => b[0] - a[0]).forEach(([start, end]) => {
            const before = highlighted.slice(0, start);
            const match = highlighted.slice(start, end + 1);
            const after = highlighted.slice(end + 1);
            highlighted = `${before}<mark>${match}</mark>${after}`;
        });

        return highlighted;
    }

    function init() {


        if (!el.input || !el.results) return;

        const searchData = window.searchIndex?.docs || window.searchIndex;
        if (!Array.isArray(searchData)) return;

        fuse = new Fuse(searchData, {
            keys: ['title', 'body', 'description'],
            threshold: 0.4,
            minMatchCharLength: 2,
            includeMatches: true,
            ignoreLocation: true,
        });

        el.input.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length < 2) {
                el.results.innerHTML = '';
                return;
            }
            render(query, fuse.search(query), el.results);
        });

        const toggleModal = (state) => {
            if (state) {
                el.modal.classList.add('is-active');
                el.modal.style.alignItems = 'flex-start';
                el.input.focus();
            } else {
                el.modal.classList.remove('is-active');
            }
        };
        if (el.btn) el.btn.onclick = () => { toggleModal(true); el.input.focus(); };
        if (el.close) el.close.onclick = () => toggleModal(false);
        if (el.bg) el.bg.onclick = () => toggleModal(false);
    }

    function render(query, results, container) {
        if (results.length === 0) {
            container.innerHTML = '<p class="has-text-grey p-4">결과가 없습니다.</p>';
            return;
        }

        container.innerHTML = results.map(result => {
            const { item, matches } = result;
            let title = item.title;
            let body = item.body ? item.body.substring(0, 150) : "";

            if (matches) {
                matches.forEach(match => {
                    if (match.key === 'title') {
                        title = getHighlightedText(match.value, match.indices, query);
                    } else if (match.key === 'body') {
                        body = getHighlightedText(body, match.indices, query);
                    }
                });
            }

            return `
        <a href="${item.url}" class="box mb-2 p-3 is-shadowless border-bottom is-block">
          <h4 class="title is-5 mb-1">${title}</h4>
          <p class="subtitle is-6 has-text-grey" style="word-break: break-all;">
            ${body}${item.body?.length > 150 ? "..." : ""}
          </p>
        </a>`;
        }).join('');
    }

    const toggleModal = (state) => {
        el.modal.classList.toggle('is-active', state);
        if (!state) {
            el.input.value = '';
            el.results.innerHTML = '';
        }
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && el.modal.classList.contains('is-active')) {
            toggleModal(false);
        }
    });

    return { init };
})();

document.addEventListener('DOMContentLoaded', SearchModule.init);