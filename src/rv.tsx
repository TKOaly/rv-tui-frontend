#!/usr/bin/env node
import { render } from "ink";
import type { Result } from "meow";
import meow from "meow";
import App from "./App.js";

type Flags = {
	dimensions: {
		type: "string";
		shortFlag: string;
		default: string;
		choices: string[];
	};
	width: {
		type: "number";
		shortFlag: string;
	};
	height: {
		type: "number";
		shortFlag: string;
	};
};

export type Cli = Result<Flags>;

const cli = meow(
	`
    TKO-äly ry RV

	Usage

        $ rv
      
    Options
    
        --dimensions    Set the size of the user interface    
			possible values:
                "static" -  default, default is 100x28. (terminal dimensions of old RV) Will be overridden by --weight and --height if defined
                "initial" - dimensions set to terminal size on startup
                "dynamic" - dimensions are updated dynamically when the terminal is resized
        
        --width         Set the width of the user interface
                            Overrides the width set by --dimensions
        
        --height        Set the height of the user interface
                            Overrides the height set by --dimensions
      `,
	{
		importMeta: import.meta,
		flags: {
			dimensions: {
				type: "string",
				default: "static",
				choices: ["static", "initial", "dynamic"]
			},
			width: {
				type: "number",
				default: 100
			},
			height: {
				type: "number",
				default: 28
			}
		}
	}
);

render(<App cli={cli} />);
