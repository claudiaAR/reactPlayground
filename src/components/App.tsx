import * as React from "react";

interface Props { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.


// export class App extends React.Component<HelloProps, {}> {
//     render() {
      
//         return <h1 className="center">Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//     }
// }

export default function App(props: Props) {
    return(
        // <div style={centerContent}>
            <h1 style={centerContent}>Hello from {props.compiler} and {props.framework}!</h1>
        // </div>
    )
}

// export default App




// export class App2 extends React.Component<Props> {
    
//     render() {
//         //dekonstruerar tar bort this.props i {compiler} och {frmework}
//         const { compiler, framework } = this.props
//         return(
//             <div style={centerContent}>
//                 <h1 >Hello from {compiler} and {framework}!</h1>
//             </div>
//         )
//     }
// }


const centerContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}