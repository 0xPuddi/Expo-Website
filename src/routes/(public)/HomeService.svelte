<script lang="ts">
	import { t } from "$lib/languages/i18n"; // add
	import { onMount } from "svelte";

	// Secionts data
	const SECTIONS = [
		{
			image: "/background/cucinaHome.png",
			title: "Rilievo",
			text: `Effettuiamo rilievi per poter avere una base di progetto precisa
				sulla quale realizzare progetti su misura per voi, entrando
				in sintonia con le vostre idee. Prima di tutto vi ascoltiamo, solo così
				possiamo aiutarvi a prendere decisioni che, nel lungo termine,
				si rivelano essere le migliori.`,
			cta: "rilieva",
		},
		{
			image: "/background/gatto.jpeg",
			title: "Progetto",
			text: `Progettiamo su misura, in funzione delle vostre esigenze,
				curiamo ogni particolare sia nella funzionalità
				sia nell'estetica. Vi accompagneremo nella scelta dei
				materiali delle vostre case a partire dai pavimenti, ai
				colori delle pareti, ai materiali per l'arredo fino
				all'illuminazione ed è grazie alla sensibilità, alla
				creatività e alla professionalità dei consulenti Expo
				che un nuovo progetto diventa il progetto perfetto`,
			cta: "progetta",
		},
		{
			image: "/background/gattoLook.jpeg",
			title: "Render",
			text: `il render è un elemento che completa la nostra progettazione,
				vi aiuta a visualizare gli spazzi, l'effetto delle finiture
				scelte e l'illuminazione progettata così da fugare ogni dubbio`,
			cta: "render",
		},
		{
			image: "/background/ExpoBuildingIds.svg",
			title: "Ristrutturazioni",
			text: `Il nostro team si occupa anche di ristrutturazioni collaborando
				con artigiani del territorio, seguite nei minimi particolari dall'incontro
				iniziale per una conoscenza reciproca, seguita dall'idea di progetto, scelta
				delle finiture fino all'aspetto economico, così da darvi un quadro generale. </br>
				Una volta conclusa la pianificazione si passa immediatamente all'esecuzione:
				preparazione dei disegni di demolizione e costruzione, disegni tecnici per
				l'impiantistica, fino alla programmazione dei lavori con la direzione lavori
				seguendo ogni artigiano passo dopo passo. Terminando la realizzazione con gli
				arredi montati dai nostri tecnici con la massima cura fino alla consegna della
				casa finita`,
			cta: "ristrutturazione",
		},
		{
			image: "/background/gatto.jpeg",
			title: "Montaggio",
			text: `Un dettaglio molto importante per una perfetta esecuzione è il montaggio.
				Grazie al nostro personale interno formato per eseguire qualunque montaggio
				garantiamo un lavoro preciso ed accurato lasciandovi solo il compito di
				godervi il vostro nuovo mobilio`,
			cta: "montaggio",
		},
		{
			image: "/background/cucinaHome.png",
			title: "Post Vendita",
			text: `Il cliente può rivolgersi al nostro personale per qualsiasi necessità, sia
				all'inizio dei lavori sia dopo anni che il lavoro è stato portato a termine.
				Effetuiamo interbventi di routine per regolazioni o qualsiasi riparazione
				dovuta all'usura del tempo`,
			cta: "ristrutturazione",
		},
		{
			image: "/background/cucinaHome.png",
			title: "Spazio Architetti ed Immobiliari",
			text: `Collaboriamo con studi d'architettura e professionisti del settore immobiliare
				offrendo il nostro supporto sia in fase di progettazione sia nella fornitura e
				montaggio dei prodotti`,
			cta: "collabora",
		},
	];

	var sectionImagesRaw: HTMLCollectionOf<Element>;
	var sectionImages: {
		element: HTMLImageElement;
		scale: number;
	}[] = [];
	var MAX_WINDOW_HEIGHT: number;
	const MAX_HIKE_PX: number = 125;

	// Runs once sy (scroll y) is changed
	var sy: number;
	$: (() => {
		if (!mounted) return;

		const scrollPercent = sy / MAX_WINDOW_HEIGHT;
		for (let i = 0; i < sectionImages.length; i++) {
			const hike = MAX_HIKE_PX * (scrollPercent * sectionImages[i].scale);
			sectionImages[i].element.style.transform = `translateY(-${hike}px)`;
		}
	})();

	// Mounted document
	var mounted = false;
	onMount(() => {
		mounted = true;

		// We initialize the images reference and scale value
		sectionImagesRaw = document.getElementsByClassName("sectionImages");
		MAX_WINDOW_HEIGHT = document.documentElement.scrollHeight;
		for (let i = 0; i < sectionImagesRaw.length; i++) {
			if (Math.random() <= 0.35) continue;

			sectionImages.push({
				element: sectionImagesRaw[i] as HTMLImageElement,
				scale: Math.random(),
			});
		}
	});
</script>

<!-- Parallax listener -->
<svelte:window bind:scrollY={sy} />

<!-- Page -->
<section
	id="servizi"
	class="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-bl bg-expo py-5"
>
	<div
		class="flex flex-col items-center justify-center my-2 mx-6 lg:my-20 lg:mx-32 gap-20"
	>
		<div class="flex flex-col items-start justify-center gap-10">
			<h1 class="font-extrabold text-5xl lg:text-8xl">
				Le offerte di EXPO Arredo
			</h1>
			<p class="text-base lg:text-lg">
				Il nostro obiettivo é progettare e realizzare interni con la
				massima precisione, studiando con attenzione la funzione di ogni
				spazio e l’emozione che questo può trasmettere. Non offriamo
				solo un negozio d'arredamento, ma proponiamo un nuovo modo di
				immaginare, di organizzare, di vivere la casa in ogni suo
				spazio. Interpretiamo la vostra casa con istinto e passione,
				seguendo i vostri sogni.
			</p>
		</div>

		<div
			class="flex flex-col items-center justify-center gap-40 lg:gap-20 w-11/12 lg:w-10/12"
		>
			{#each SECTIONS as s, i}
				{#if i % 2 == 0}
					<div
						class="flex flex-col lg:flex-row items-start justify-center gap-7 h-120 w-full"
					>
						<img
							class="sectionImages h-60 w-120 lg:h-120 lg:w-120 object-cover border-white border-2 transition-all"
							src={s.image}
							alt=""
						/>

						<div
							class="flex flex-col items-start justify-start gap-5 lg:gap-10 h-full"
						>
							<h2 class="font-bold text-3xl lg:text-5xl">
								{s.title}
							</h2>
							<p class="text-sm sm:text-base max-h-56">
								{@html s.text}
							</p>

							<button
								class="flex flex-row gap-2 justify-center items-center px-2 py-3 sm:w-40 lg:w-60 h-16 shadow-2xl transition-all bg-white clickable"
							>
								<div
									class="flex justify-center items-center h-full font-extrabold tracking-wider uppercase font-button text-base text-expo"
								>
									{s.cta}
								</div>
							</button>
						</div>
					</div>
				{:else}
					<div
						class="flex flex-col lg:flex-row items-start justify-center gap-7 h-120 w-full"
					>
						<div
							class="flex flex-col items-start justify-start gap-5 lg:gap-10 h-full order-2 lg:order-1"
						>
							<h2 class="font-bold text-3xl lg:text-5xl">
								{s.title}
							</h2>
							<p
								class="text-sm lg:text-base max-h-56 overflow-scroll"
							>
								{@html s.text}
							</p>

							<button
								class="flex flex-row gap-2 justify-center items-center px-2 py-3 sm:w-40 lg:w-60 h-16 shadow-2xl transition-all bg-white clickable"
							>
								<div
									class="flex justify-center items-center h-full font-extrabold tracking-wider uppercase font-button text-base text-expo"
								>
									{s.cta}
								</div>
							</button>
						</div>

						<img
							class="sectionImages h-60 w-120 lg:h-120 lg:w-120 object-cover border-white border-2 order-1 lg:order-2 transition-all"
							src={s.image}
							alt=""
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
