import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client";

// import component
import SayHellow from "./components/sayHellow";


// membuat wadah untuk menampung element default
const root = createRoot(document.getElementById("root"));


// menggunakan react element
const heading = React.createElement("h1",null,"Biodata Perusahaan");

// menggunakan react jsx
const paragraf = (
    <div>   
        <h1>Biodata Per businesses</h1>
        <p>Full Name : Cipta Prasetya</p>
        <p>Age : 22</p>
        <p>Address : Cirebon</p>
        <p>Hobby : Games</p>
        <p>Marital Status : Single</p>
        <p>Favorite Color : Black</p>
    </div>
)

// render id root yang di ambil dari variabel root
root.render(
    <StrictMode>
        <h1>Welome To React Js</h1>
        <SayHellow name="kiki"/>
    </StrictMode>
)