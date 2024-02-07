#!/usr/bin/env node
import { render } from "ink";
import App from "./App.js";

const { unmount } = render(<App />);

process.on("SIGINT", () => {
	unmount();
});
