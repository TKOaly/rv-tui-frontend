#!/usr/bin/env node
import { render } from "ink";
import App from "./App.js";

const { unmount, clear } = render(<App />);

// Determine what happens on Ctrl+C
process.on("SIGINT", () => {
	clear();
	unmount();
	process.stdout.write("<rv logs above ^ $>");
});
