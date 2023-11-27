import "/src/teacherFetch.js"; // protection against fetch() in infinite re-render
import {createRoot} from "react-dom/client";
createRoot(document.getElementById('root'))
    .render(<div>hello world!</div>);  
