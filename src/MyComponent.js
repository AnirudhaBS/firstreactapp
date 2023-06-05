// function MyComponent() {
//     return(
//         <div>
//             <h1>The first components "MyComponent" is been done</h1>
//         </div>
//     )
// }

// export default MyComponent;

import {React } from "react";

class MyComponent extends React {
    constructor() {
         super();
    }

    render(){
        return (
            <div>
                <h1>This is Class--Statefull components</h1>
            </div>
        )
    }
}
export default MyComponent;