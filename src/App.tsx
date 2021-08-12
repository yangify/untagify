import React from 'react';
import './App.css';
import Tagify from "./tagification/Tagify";
import Untagify from "./tagification/Untagify";

function App() {
    const rawText = "[[{\"value\": \"first\", \"prefix\": \"@\"}]] [[{\"value\": \"second\", \"prefix\": \"@\"}]]";
    const tagify = new Tagify(rawText);
    const untagify = new Untagify(tagify.parsed, tagify.ranges());

    return (
        <div className="App">
            <div>{tagify.raw}</div>
            <div>{tagify.parsed}</div>
            <div>{JSON.stringify(tagify.tags)}</div>
            <div>{untagify.parsed}</div>
        </div>
    );
}

export default App;
