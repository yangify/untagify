import React from 'react';

import Tagify from "./tagification/Tagify";
import Untagify from "./tagification/Untagify";

function App() {
    const rawText: string = "[[{\"value\": \"first\", \"prefix\": \"@\", \"id\": \"id\", \"type\": \"type\"}]] [[{\"value\": \"second\", \"prefix\": \"@\", \"id\": \"id\", \"type\": \"type\"}]]";
    const tagify: Tagify = new Tagify(rawText);
    const untagify: Untagify = new Untagify(tagify.parsed, tagify.ranges());

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
