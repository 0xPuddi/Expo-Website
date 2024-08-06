<script lang="ts">
	import { onMount } from "svelte";

	import { t } from "$lib/languages/i18n"; // add
	import ProjectCardGrid from "$lib/ProjectCardGrid.svelte";

	// Header config
	import { headerList } from "$lib/index";
	$: headerList.set([
		["/cornici", $t("header.cornici")],
		["/servizio", $t("header.servizio")],
		["/progetti", $t("header.progetti")],
		["/#noi", $t("header.noi")],
		["/#brands", $t("header.brands")],
		["/preventivo", $t("header.contatta")],
	]);

	// Projects data
	var PROJECTS = [
		{
			href: "/progetti/0",
			title: "Casa al lago",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "100'000.-"],
			],
		},
		{
			href: "/progetti/0",
			title: "Casa al mare",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "600'000.-"],
			],
		},
		{
			href: "/progetti/0",
			title: "Sinistro al ponte",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "200'000.-"],
			],
		},
		{
			href: "/progetti/0",
			title: "Divano a casa",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "500'000.-"],
			],
		},
		{
			href: "/progetti/0",
			title: "Fiume",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "500'000.-"],
			],
		},
		{
			href: "/progetti/0",
			title: "Titus a Sonogno",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "500'000.-"],
			],
		},
		{
			href: "/progetti/0",
			title: "Mare in Montagna",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "400'000.-"],
			],
		},
		{
			href: "/progetti/0",
			title: "Giorno al fiume",
			photosPaths: [""],
			statistics: [
				["Tempo", "123 giorni"],
				["Costo", "300'000.-"],
			],
		},
	];

	function BubbleSort<T>(
		fn: (a: T, b: T, c?: any) => boolean,
		a: Array<T>,
		c?: any
	) {
		let s = a;

		for (let j = 1; j < a.length; ++j) {
			for (let i = 0; i < a.length - 1; ++i) {
				if (fn(s[i], s[i + 1], c)) {
					let o = s[i];
					s[i] = s[i + 1];
					s[i + 1] = o;
				}
			}
		}

		return s;
	}

	function aFirstAlphabeticThanB(
		a: (typeof PROJECTS)[0],
		b: (typeof PROJECTS)[0],
		first?: boolean
	): boolean {
		const title_a = a.title;
		const title_b = b.title;
		return first ? title_a > title_b : title_a < title_b;
	}
	function aMoreCostThanB(
		a: (typeof PROJECTS)[0],
		b: (typeof PROJECTS)[0]
	): boolean {
		let saldo_a: number = 0;
		let saldo_b: number = 0;
		for (let i = 0; i < a.statistics.length; ++i) {
			if (a.statistics[i][0] == "Costo") {
				let ssaldo_a: string = a.statistics[i][1];
				saldo_a = Number(
					ssaldo_a.replace(".", "").replace("-", "").replace("'", "")
				);
				break;
			}
		}
		for (let i = 0; i < b.statistics.length; ++i) {
			if (b.statistics[i][0] == "Costo") {
				let ssaldo_b: string = b.statistics[i][1];
				saldo_b = Number(
					ssaldo_b.replace(".", "").replace("-", "").replace("'", "")
				);
				break;
			}
		}

		return saldo_a > saldo_b;
	}

	var selectValue: string;
	function changeElementsOrder() {
		switch (selectValue) {
			case "Sort-Projects":
				break;
			case "A-Z":
				PROJECTS = BubbleSort(aFirstAlphabeticThanB, PROJECTS, true);
				break;
			case "Z-A":
				PROJECTS = BubbleSort(aFirstAlphabeticThanB, PROJECTS, false);
				break;
			case "Costo":
				PROJECTS = BubbleSort(aMoreCostThanB, PROJECTS);
				break;
			default:
				console.error("No projects fetching rule");
		}
	}

	var mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<div class="bg-black h-0 sm:h-24 top-0"></div>

<main
	class="flex items-center justify-center min-h-threeQuarterScreen w-screen bg-gradient-to-tr from-expo from-20% to-white to-20% text-black pt-28 py-24 px-5 sm:px-10"
>
	<div class="flex flex-col gap-7 justify-center items-center w-full">
		<h1 class="text-5xl lg:text-7xl font-extrabold">
			Expo Arredo: <br class="sm:hidden" />
			<span class="text-expo">X</span> Progetti
		</h1>
		<p class="flex flex-col gap-5 justify-center items-center w-11/12">
			<span class="text-3xl font-bold">
				Abbiamo lavorato su moltissimi progetti,
				<span class="underline transition-all hover:text-expo"
					>il nostro livello di esperienza non ha rivali</span
				>.
			</span>
			<span
				class="flex flex-col gap-1 justify-center items-center w-11/12 max-h-72 text-justify font-semibold text-lg overflow-scroll"
			>
				<span>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Officiis sequi alias nihil, mollitia minus excepturi nostrum
					ullam rem modi enim. Ullam voluptates quibusdam hic aliquam
					corrupti deleniti dolorem pariatur maxime.
				</span>

				<span>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Obcaecati optio unde incidunt impedit, dolore perferendis
					natus ipsam cumque dicta veniam reprehenderit quia facere
					voluptates debitis hic. Quae odit odio quas.
				</span>
			</span>
		</p>
	</div>
</main>

<section
	class="w-screen min-h-screen bg-gradient-to-br from-expo from-60% to-white to-60%"
>
	<div
		class="flex flex-col gap-10 justify-center items-center px-16 py-3 pb-16"
	>
		<div
			class="flex flex-col gap-10 justify-start items-center w-full sm:flex-row"
		>
			<h1 class="text-5xl font-extrabold">Progetti</h1>
			<select
				bind:value={selectValue}
				on:change={changeElementsOrder}
				class="px-2 py-1 h-full bg-transparent border-2 border-white transition-all focus:outline-none focus:bg-white focus:border-expo focus:text-expo"
			>
				<option value="Sort-Projects">Sort Projects</option>
				<option value="A-Z">A to Z</option>
				<option value="Z-A">Z to A</option>
				<option value="Costo">Costo</option>
			</select>
		</div>
		<div
			class="flex flex-col gap-10 justify-center items-center sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-3"
		>
			{#each PROJECTS as p}
				<ProjectCardGrid
					href={p.href}
					Title={p.title}
					Statistics={p.statistics}
				/>
			{/each}
		</div>
	</div>
</section>
