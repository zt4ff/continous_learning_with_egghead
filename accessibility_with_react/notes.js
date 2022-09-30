// a simple way to test a11y in react is using the @axe-core/react
// https://www.npmjs.com/package/@axe-core/react
// example
import React from "react"
import ReactDOM from "react-dom"


// App.js
if (process.env.NODE_ENV !== "production") {
    const axe = require("@axe-core/react")
    axe(React, ReactDOM, 1000)
}