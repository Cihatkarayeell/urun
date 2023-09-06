const lists = document.querySelectorAll('.list');
        window.addEventListener('scroll', checkLists);
        checkLists();

        function checkLists() {
            const triggerBottom = window.innerHeight / 5 * 5;
            lists.forEach((list, idx) => {
                const listTop = list.getBoundingClientRect().top;

                if (listTop < triggerBottom) {
                    list.classList.add('show');
                } else {
                    list.classList.remove('show');
                }
            });
        }