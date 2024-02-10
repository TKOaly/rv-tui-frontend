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
	};
	height: {
		type: "number";
	};
	debug: {
		type: "boolean";
	};
};

export type Cli = Result<Flags>;

const cli = meow(
	`
    TKO-äly ry RV

	Usage

        $ rv
      
    Options
    
        --dimensions [mode]		Set the dimensions mode of the user interface

			available modes:
				"initial":	Default, Dimensions set to terminal size on startup
				"static":	Default is 100x28 (terminal dimensions of old RV)
						Can be set manually with --weight and --height
				"dynamic":	Dimensions are updated dynamically when the terminal is resized
        
        --width [width]		Set the width of the user interface
						Only overrides the static width set by --dimensions
        
        --height [height]		Set the height of the user interface
						Only overrides the static height set by --dimensions

		--debug				Enables debug mode

						Dimensions are set to static in order to
						not clear process output

						Console is not patched by ink so process
						error messages are not intercepted and discraded
      `,
	{
		importMeta: import.meta,
		flags: {
			dimensions: {
				type: "string",
				alias: "d",
				default: "initial",
				choices: ["initial", "static", "dynamic"]
			},
			width: {
				type: "number",
				alias: "w",
				default: 100
			},
			height: {
				type: "number",
				alias: "h",
				default: 28
			},
			debug: {
				type: "boolean",
				shortFlag: "d",
				default: false
			}
		}
	}
);

render(<App cli={cli} />, {
	patchConsole: cli.flags.debug ? false : true,
	debug: cli.flags.debug
});
