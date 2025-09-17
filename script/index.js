const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
    const cartBtn = document.querySelector('#cart-button')


    const openModal = () => {
        modal.classList.add('open')
    }

    const closeModal = () => {
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {
        openModal()
    })


    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains("cart-modal__overlay") ||
            event.target.closest(".cart-modal__header--close")
        ) {
            closeModal();
        }
    })
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: '50 мин',
            rating: 4.5,
            price: 'от 900 р',
            type: 'Пицца',
            image: 'rest01.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: '50 мин',
            rating: 4.5,
            price: 'от 900 р',
            type: 'Пицца',
            image: 'rest02.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: '50 мин',
            rating: 4.5,
            price: 'от 900 р',
            type: 'Пицца',
            image: 'rest03.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: '50 мин',
            rating: 4.5,
            price: 'от 900 р',
            type: 'Пицца',
            image: 'rest04.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: '50 мин',
            rating: 4.5,
            price: 'от 900 р',
            type: 'Пицца',
            image: 'rest05.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: '50 мин',
            rating: 4.5,
            price: 'от 900 р',
            type: 'Пицца',
            image: 'rest06.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'

    }

    const randerRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                  <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/banners/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description--title">${card.title}</h4>
                                    <div class="products-card__description--badge">${card.time}</div>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description-info--raiting">
                                            <img src="./images/banners/star.svg" alt="star"> ${card.rating}
                                        </div>
                                        <div class="products-card__description-info--price">
                                            ${card.price}
                                        </div>
                                        <div class="products-card__description-info--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `)
        })
    }

    if (container) {
        loading()
    setTimeout(() => {
        randerRests(restArray)
    }, 1000)
    }
}

modalFunc()
restsFunc()
