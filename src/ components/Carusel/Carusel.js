import React from 'react';
import './Carusel.css'

const Carusel = () => {
    const state = {};
    const carouselList = document.getElementsByClassName('.carousel__list');
    const carouselItems = document.querySelectorAll('.carousel__item');
    const elems = Array.from(carouselItems);

    function rr (event) {
        var newActive = event.target;
        var isItem = newActive.closest('.carousel__item');

        if (!isItem || newActive.classList.contains('carousel__item_active')) {
            return;
        };

        update(newActive);
    };

    const update = function(newActive) {
        const newActivePos = newActive.dataset.pos;

        const current = elems.find((elem) => elem.dataset.pos == 0);
        const prev = elems.find((elem) => elem.dataset.pos == -1);
        const next = elems.find((elem) => elem.dataset.pos == 1);
        const first = elems.find((elem) => elem.dataset.pos == -2);
        const last = elems.find((elem) => elem.dataset.pos == 2);

        current.classList.remove('carousel__item_active');

        [current, prev, next, first, last].forEach(item => {
            var itemPos = item.dataset.pos;

            item.dataset.pos = getPos(itemPos, newActivePos)
        });
    };

    const getPos = function (current, active) {
        const diff = current - active;

        if (Math.abs(current - active) > 2) {
            return -current
        }

        return diff;
    }
    return (
        <>
            <div className="carousel">
                <ul className="carousel__list" onClick={(event)=>rr(event)}>
                    <li className="carousel__item" data-pos="-2">1</li>
                    <li className="carousel__item" data-pos="-1">2</li>
                    <li className="carousel__item" data-pos="0">3</li>
                    <li className="carousel__item" data-pos="1">4</li>
                    <li className="carousel__item" data-pos="2">5</li>
                </ul>
            </div>
        </>
    );
};

export default Carusel;
