#!/usr/bin/env node
import { render } from "ink";
import App from "./App.js";

process.on("SIGINT", () => {
	process.exit();
});

render(<App />);
