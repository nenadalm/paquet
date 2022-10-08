import { type JSX } from "preact";

type Props = {
	isLast?: boolean;
	snap?: boolean;
	equal?: boolean;
};

export default function SlideItem(props: Props & JSX.IntrinsicElements["div"]) {
	return (
		<div
			{...props}
			class={`
				${props.isLast ? "!pr-4 md:pr-0" : ""} 
				${props.equal ? "flex-1" : ""}
				pl-4

				${props.class || ""}
			`}
			style={{
				...props.style as Record<string, string>,
				scrollSnapAlign: props.snap ? "start" : undefined,
			}}
		/>
	);
}