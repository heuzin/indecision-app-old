// JSX - JavaScript XML
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

let app = {
    tittle: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

let template = (
    <div>
        <h1>{app.tittle}</h1>
        {app.subtitle && <p>{app.subtitle}</p>} 
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let user = {
    name: 'Matheus Silva',
    age: 27,
    location : 'Connectcut'
};

function getLocation(location) {
    if (location) {
        return <p>location: {location}</p>
    } else {
        return undefined
    }
};

let tamplateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);