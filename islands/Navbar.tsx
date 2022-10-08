import { useEffect, useState } from "preact/hooks";
import { useScroll } from "@/hooks/useScroll.ts";
import { iconBtn } from "@/lib/ui.ts";
import Icon from "@/components/Icon.tsx";

export type Props = {
	back?: boolean;
	rightIcon?: string;
	rightIconHref?: string;
};

export default function Navbar(props: Props) {
	const [visitedRoot, setVisitedRoot] = useState(
		!!globalThis.sessionStorage?.getItem("visitedRoot"),
	);

	const trigger = useScroll({
		threshold: 16,
	});

	useEffect(() => {
		if (!visitedRoot && globalThis.location.pathname === "/") {
			setVisitedRoot(true);
			globalThis.sessionStorage.setItem("visitedRoot", "true");
		}
	}, []);

	const goBack = () => {
		console.log("Pressed back");
		if (visitedRoot) {
			globalThis.history.back();
		} else {
			setVisitedRoot(true);
			globalThis.sessionStorage.setItem("visitedRoot", "true");

			globalThis.location.replace("/");
		}
	};

	return (
		<div
			class={`
					fixed flex w-full bg-white dark:bg-dark
					-top-px left-0 right-0
					items-center content-center
					
					border-opacity-25 border-black dark:(border-white border-opacity-25)
					px-2 py-2 z-30

					${trigger && "border-b-1"}
				`}
		>
			<div>
				{props.back && (
					<button
						class={iconBtn}
						onClick={goBack}
					>
						<Icon
							name="arrow_back"
							width={24}
							height={24}
						/>
					</button>
				)}
			</div>
			<div class="flex flex-row ml-auto items-center gap-2">
				{props.rightIcon && (
					<a class={iconBtn} href={props.rightIconHref}>
						<Icon
							name={props.rightIcon}
							width={24}
							height={24}
						/>
					</a>
				)}
			</div>
		</div>
	);
}