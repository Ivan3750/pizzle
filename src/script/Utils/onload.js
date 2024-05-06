window.onload = function() {
/*     const headerContainerB = document.getElementById('headerB');
 */    const headerContainerW = document.getElementById('headerW');

    /* fetch('../components/header__b.html')
        .then(response => response.text())
        .then(html => {
            headerContainerB.innerHTML = html;
        })
        .catch(error => {
/*             console.error('Помилка завантаження header.html:', error);
         }); */
    fetch('../components/header__w.html')
        .then(response => response.text())
        .then(html => {
            headerContainerW.innerHTML = html;
        })
        .catch(error => {
/*             console.error('Помилка завантаження header.html:', error);
 */        });
    const footerContainer = document.getElementById('footer');

    fetch('../components/footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Помилка завантаження footer.html:', error);
        });
    const subscribeContainer = document.getElementById('subscribe');

    fetch('../components/subscribe.html')
        .then(response => response.text())
        .then(html => {
            subscribeContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Помилка завантаження subscribe.html:', error);
        });
};


