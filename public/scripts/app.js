'use strict';

// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
    title: 'Visibility Toggle'
};

var toggleVisibility = function toggleVisibility(e) {
    visibility = !visibility;
    render();
};

var visibility = false;

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can now See!'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
