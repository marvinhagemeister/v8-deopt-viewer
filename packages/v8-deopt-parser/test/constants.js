import { repoRoot, repoFileURL } from "./helpers.js";

/**
 * @typedef {"adders" | "two-modules" | "html-inline" | "html-external"} Examples
 * @type {{ [key in Examples]:  import('../').ICEntry }} */
export const expectedICSLogs = {
	adders: {
		type: "ics",
		id: "327",
		functionName: "addAny",
		file: repoRoot("examples/simple/adders.js"),
		line: 93,
		column: 27,
		severity: 3,
		updates: [
			{
				type: "LoadIC",
				oldState: "premonomorphic",
				newState: "monomorphic",
				key: "x",
				map: "0x017b7663a951",
				optimizationState: "optimizable",
				severity: 1,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "monomorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x017b76637b61",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x017b76637481",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x017b76636e41",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x017b76637021",
				optimizationState: "optimizable",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x017b76637251",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x017b76636bc1",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x017b76635d11",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
		],
	},

	"two-modules": {
		type: "ics",
		id: "333",
		functionName: "addAny",
		file: repoRoot("examples/two-modules/adders.js"),
		line: 38,
		column: 27,
		severity: 3,
		updates: [
			{
				type: "LoadIC",
				oldState: "premonomorphic",
				newState: "monomorphic",
				key: "x",
				map: "0x37cdf3b7a951",
				optimizationState: "optimizable",
				severity: 1,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "monomorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x37cdf3b77b61",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x37cdf3b77481",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x37cdf3b76e41",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x37cdf3b77021",
				optimizationState: "optimizable",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x37cdf3b77251",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x37cdf3b76bc1",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x37cdf3b75d11",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
		],
	},

	"html-inline": {
		type: "ics",
		id: "19",
		functionName: "addAny",
		file: repoFileURL("examples/html-inline/adders.html"),
		line: 98,
		column: 33,
		severity: 3,
		updates: [
			{
				type: "LoadIC",
				oldState: "unintialized",
				newState: "monomorphic",
				key: "x",
				map: "0x14cd08283fc9",
				optimizationState: "optimizable",
				severity: 1,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "monomorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x14cd08284091",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x14cd08284181",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x14cd08284271",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x14cd08284361",
				optimizationState: "optimizable",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x14cd08284479",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x14cd08284591",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x14cd082846a9",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
		],
	},

	"html-external": {
		type: "ics",
		id: "20",
		functionName: "addAny",
		file: repoFileURL("examples/html-external/adders.js"),
		line: 38,
		column: 27,
		severity: 3,
		updates: [
			{
				type: "LoadIC",
				oldState: "unintialized",
				newState: "monomorphic",
				key: "x",
				map: "0x420708283f51",
				optimizationState: "optimizable",
				severity: 1,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "monomorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x420708284019",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x420708284109",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "polymorphic",
				key: "x",
				map: "0x4207082841f9",
				optimizationState: "optimizable",
				severity: 2,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "polymorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x4207082842e9",
				optimizationState: "optimizable",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x420708284401",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x420708284519",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
			{
				type: "LoadIC",
				oldState: "megamorphic",
				newState: "megamorphic",
				key: "x",
				map: "0x420708284631",
				optimizationState: "optimized",
				severity: 3,
				modifier: "",
				slowReason: "",
			},
		],
	},
};
