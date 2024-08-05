<script lang="ts">
	// TODO: Add content and translations
	import { onMount } from "svelte";
	import { homeOffsetHeight } from "$lib/index";
	import { t } from "$lib/languages/i18n";
	import GridStoryTwoElements from "$lib/GridStoryTwoElements.svelte";
	import GridStoryOneElement from "$lib/GridStoryOneElement.svelte";
	import { headerList } from "$lib/index";

	// Header
	import { cornici, arredo } from "$lib/index";
	arredo.set(true);
	cornici.set(false);
	$: headerList.set([
		["/progetti", $t("header.progetti")],
		["/#servizi", $t("header.servizio")],
		["/#brands", $t("header.brands")],
		["/outlet", "outlet"],
		["/cornici", $t("header.cornici")],
	]);

	// Sections data
	var SECTIONS = [
		{
			one: {
				img: "/background/gatto.jpeg",
				text: `Non offriamo solo un negozio d'arredamento, ma proponiamo un nuovo
                modo di immaginare, organizzare e vivere la casa in ogni suo spazio.
                Il nostro obiettivo è progettare e realizare interni con la massima
                precisione, studiando con attenzione la funzione di ogni spazio e
                l'emozione che esso può trasmettere`,
			},
			two: {
				img: "/background/gatto.jpeg",
				text: `Accostando colori e materiali diversi interpretiamo la vostra casa
                con istinto e passione, ma soprattutto seguendo i vostri sogni e
                transformandoli in realtà`,
			},
			single: false,
		},
		{
			one: {
				img: "/background/gatto.jpeg",
				text: `Il risultato finale è una serie di ambienti che si susseguono in modo
                uniforme, ma studiati per situazioni diverse, particolari e sicuramente
                avvolgenti, i quali formando una casa senza confini nella quale sono le
                vostre sensazioni a creare il vostro spazio abitativo`,
			},
			two: {
				img: "/background/gatto.jpeg",
				text: `Nella nostra esposizione di oltre 900mq trovate una selezione di importanti
                e qualificati esempi della migliore produzione del mobile d'Europa, notando
                subito l'estrema attenzione dedicata alle nuove tendenze dell'arredamento`,
			},
			single: false,
		},
		{
			one: {
				img: "/background/gatto.jpeg",
				text: `Il gusto e la passione uniti alla versatilità e flessibilità ci permettono
                di accontentare sempre ogni genere di clientela, fornendo soluzioni uniche con
                un ottimo rapporto qualità prezzo`,
			},
			two: {
				img: "/background/gatto.jpeg",
				text: `Il nostro obiettivo è progettare e realizzare interni con la massima precisione,
                studiando con attenzione la funzione di ogni spazio e le emozioni che esso può
                trasmettere`,
			},
			single: false,
		},
		{
			one: {
				img: "/background/gatto.jpeg",
				text: `La passione per il nostro mestiere ci permette di accontentare anche la clientela
                più esigente, che ha la necessità di rivolgersi non solo ad un semplice
                negozio d'arredamento, ma ad un team di professionisti che ha una visione
                della progettazione a 360 gradi e che è in grado di rispondere con soluzioni
                sartoriali alle diverse richieste`,
			},
			two: {
				img: "",
				text: "",
			},
			single: true,
		},
	];
	var shuffledSECTIONS: typeof SECTIONS;
	shuffledSECTIONS = SECTIONS.map((value) => ({
		value,
		sort: Math.random(),
	}))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	// Cursor logic
	var cursorElement: HTMLDivElement;
	var left: boolean = false;
	var prev_sy: number = 0;
	var sy: number;
	var ox: number = 0;
	var oy: number = 0;
	function updateCursorElement(event: MouseEvent) {
		oy = event.pageY - cursorElement.offsetHeight / 2;
		ox = event.pageX - cursorElement.offsetWidth / 2;
	}
	function updateCursorElementLeave(event: MouseEvent) {
		left = true;
	}
	function updateCursorElementEnter(event: MouseEvent) {
		left = false;
	}
	$: (() => {
		oy = oy - prev_sy + sy;
		prev_sy = sy;
	})();
	$: (() => {
		if (!mounted) return;
		if (left) return;
		cursorElement.style.left = ox + "px";
		cursorElement.style.top = oy + "px";
	})();

	// Mount Page
	var mounted = false;
	onMount(() => {
		mounted = true;
		homeOffsetHeight.set(120);
	});
</script>

<!-- Scroll listener -->
<svelte:window bind:scrollY={sy} />

<!-- Page -->
<main
	on:mousemove={updateCursorElement}
	on:mouseleave={updateCursorElementLeave}
	on:mouseenter={updateCursorElementEnter}
	class="relative flex items-center justify-center flex-col min-h-screen w-screen bg-expo sm:pt-24"
>
	{#each shuffledSECTIONS as ss, i}
		{#if ss.single == true}
			{#if i % 2 == 0}
				<GridStoryOneElement el={ss.one}></GridStoryOneElement>
			{:else}
				<GridStoryOneElement
					el={ss.one}
					left={false}
				></GridStoryOneElement>
			{/if}
		{:else if i % 2 == 0}
			<GridStoryTwoElements
				elOne={ss.one}
				elTwo={ss.two}
			></GridStoryTwoElements>
		{:else}
			<GridStoryTwoElements
				elOne={ss.one}
				elTwo={ss.two}
				left={false}
			></GridStoryTwoElements>
		{/if}
	{/each}

	<div
		bind:this={cursorElement}
		class="absolute w-40 h-40 opacity-10"
	>
		<img
			class="object-cover w-full h-full"
			src="/favicon/expoArredoWhite.svg"
			alt=""
		/>
	</div>
	<div class="absolute top-0 w-full h-0 sm:h-24 bg-black"></div>
</main>
