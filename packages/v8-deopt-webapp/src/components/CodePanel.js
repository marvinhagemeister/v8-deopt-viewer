import { createElement } from "preact";
import { useMemo, useRef, useLayoutEffect } from "preact/hooks";
import { memo, forwardRef } from "preact/compat";
import Prism from "prismjs";
import { addDeoptMarkers } from "../utils/deoptMarkers";
import { codePanel, error as errorClass } from "./CodePanel.scss";
import { showLowSevs as showLowSevsClass } from "../utils/deoptMarkers.scss";

// Turn on auto highlighting by Prism
Prism.manual = true;

/**
 * @param {string} path
 */
function determineLanguage(path) {
	if (path.endsWith(".html")) {
		return "html";
	} else if (
		(path.startsWith("http:") || path.startsWith("https:")) &&
		!path.endsWith(".js")
	) {
		// Assume URLs without .js extensions are HTML pages
		return "html";
	} else {
		return "javascript";
	}
}

/**
 * @param {{ fileDeoptInfo: import("..").FileV8DeoptInfoWithSources; selectedLine: number; urlBase: string; settings: import('./CodeSettings').CodeSettingsState; }} props
 */
export function CodePanel({ fileDeoptInfo, selectedLine, urlBase, settings }) {
	if (fileDeoptInfo.srcError) {
		return <CodeError srcError={fileDeoptInfo.srcError} />;
	} else if (!fileDeoptInfo.src) {
		return <CodeError srcError="No sources for the file were found." />;
	}

	const lang = determineLanguage(fileDeoptInfo.srcPath);

	/** @type {import('preact').RefObject<HTMLElement>} */
	const codeRef = useRef(null);
	useLayoutEffect(() => {
		addDeoptMarkers(codeRef.current, urlBase, fileDeoptInfo);
	}, [urlBase, fileDeoptInfo]);

	return (
		<div
			class={[
				codePanel,
				(settings.showLowSevs && showLowSevsClass) || null
			].join(" ")}
		>
			<PrismCode
				src={fileDeoptInfo.src}
				lang={lang}
				class={(!settings.hideLineNums && "line-numbers") || null}
				ref={codeRef}
			>
				<LineNumbers selectedLine={selectedLine} contents={fileDeoptInfo.src} />
			</PrismCode>
		</div>
	);
}

/**
 * @typedef {{ lang: string; src: string; class?: string; children?: any }} PrismCodeProps
 * @type {import('preact').FunctionComponent<PrismCodeProps>}
 */
const PrismCode = forwardRef((props, ref) => {
	const className = [`language-${props.lang}`, props.class].join(" ");

	// TODO: File route changes will unmount and delete this cache. May be useful
	// to cache across files so switching back and forth between files doesn't
	// re-highlight the file each time
	const __html = useMemo(
		() => Prism.highlight(props.src, Prism.languages[props.lang], props.lang),
		[props.src, props.lang]
	);

	return (
		<pre class={className}>
			<code ref={ref} class={className} dangerouslySetInnerHTML={{ __html }} />
			{props.children}
		</pre>
	);
});

const NEW_LINE_EXP = /\n(?!$)/g;

/**
 * @param {{ selectedLine: number; contents: string }} props
 */
const LineNumbers = memo(({ selectedLine, contents }) => {
	const lines = useMemo(() => contents.split(NEW_LINE_EXP), [contents]);
	return (
		<span class="line-numbers-rows" aria-hidden="true">
			{lines.map((_, i) => (
				<span class={i == selectedLine - 1 ? "active" : null} />
			))}
		</span>
	);
});

function CodeError({ srcError }) {
	return (
		<div class={[codePanel, errorClass].join(" ")}>
			Error! {srcError instanceof Error ? srcError.toString() : srcError}
		</div>
	);
}
