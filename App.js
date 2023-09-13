
const parent = React.createElement(
    'div', 
    { id: 'parent' }, 
    [React.createElement(
        'div', 
        { id: 'child1' }, 
        [React.createElement('h1', {}, "I'm h1 tag from react!"), React.createElement('h2', {}, "I'm h1 tag from react!")]
    ), React.createElement(
        'div', 
        { id: 'child2' }, 
        [React.createElement('h1', {}, "I'm h1 tag from react!"), React.createElement('h3', {}, "I'm h1 tag from react!")]
    )]
)
const heading = React.createElement('h1', { id: 'heading' }, 'Valga valamudan from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);