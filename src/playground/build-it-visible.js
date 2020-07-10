// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }

    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
           
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>  
                        <p>Hey. These are some details you can now See!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
// const app = {
//     title: 'Visibility Toggle'
// }

// const toggleVisibility = (e) => {
//     visibility = !visibility;
//     render()
// };

// let visibility = false;

// const appRoot = document.getElementById('app')

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now See!</p>
//                 </div>
//             )}
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render()