import { Option } from "../../../lib/select";

export const includeWhen = (when: any, options: Option | Option[]) => {
	return when ? (Array.isArray(options) ? options : [options]) : [];
};

export const includeWhenElse = (
	when: any,
	options: Option | Option[],
	elseOptions: Option | Option[]
) => {
	return when
		? Array.isArray(options)
			? options
			: [options]
		: Array.isArray(elseOptions)
		? elseOptions
		: [elseOptions];
};
