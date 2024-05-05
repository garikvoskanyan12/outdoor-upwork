                                                                                                                                                                                                        import RangeSlider from '@spreadtheweb/multi-range-slider';

if (window.location.href.indexOf('shop.html') > -1) {
    new RangeSlider('.price-range', {
        values: [100, 5500],
        colors: {
            points: 'rgb(25, 118, 210)',
            rail: '#6A6363',
            tracks: '#000000',
        },
        min: 0,
        max: 10000,
        step: 100,
    });
}
