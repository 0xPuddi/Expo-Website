<script lang="ts">
	import { onMount } from "svelte";
	import { t } from "$lib/languages/i18n";
	import { headerList } from "$lib/index";

	$: headerList.set([
		["/cornici", $t("header.cornici")],
		["/servizio", $t("header.servizio")],
		["/progetti", $t("header.progetti")],
		["/#noi", $t("header.noi")],
		["/#brands", $t("header.brands")],
		["/preventivo", $t("header.contatta")],
	]);

	export var Title = "Casa con gatto";
	export var Description =
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vitae beatae pariatur dignissimos? Dolore commodi, reprehenderit ab esse pariatur non dicta in ad modi. Voluptate laudantium hic magnam eaque sit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem non a. Quod harum illum excepturi iste quo, facere dolore, perferendis commodi fuga fugiat quia autem magnam rerum soluta quidem. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi sint, aut praesentium at odio debitis ipsam laboriosam ducimus, sed reprehenderit eos? Provident nemo laudantium, labore consectetur itaque quibusdam magnam.";
	export var Statistics = [
		["Tempo", "1 giorno"],
		["Costo", "10.-"],
		["Numero mobili", "111"],
	];

	// Project data. Images need the same aspect ratio, 2:1
	export var photosProject = [
		{
			src: "/background/gattoLook.jpeg",
			description: "Descrizione immagini",
		},
		{
			src: "/background/gatto.jpeg",
			description: "Cucina Cucina Cucina Cucina Cucina Cucina",
		},
		{
			src: "/background/gattoLook.jpeg",
			description: "Descrizione immagini",
		},
	];

	// Carouselle logic
	var juxtaposeElementsWrapper: HTMLElement;
	var currentPhotos = photosProject[0];
	var previousJuxtaposeElementIndex = 0;
	const HIDE_IMAGES = ["opacity-0", "absolute", "pointer-events-none"];
	const SHOW_IMAGES = ["opacity-100", "relative"];
	function handleCarouselleChange(e: any) {
		if (!mounted) return;

		let length = e.target.id.length;
		let id = e.target.id[length - 1];
		currentPhotos = photosProject[id];

		// Change juxtapose visibility and bookeeping
		let children = juxtaposeElementsWrapper.children;
		let previousJuxtaposeElement = children.namedItem(
			`carouselle-image-${previousJuxtaposeElementIndex}`
		);
		let juxtaposeElement = children.namedItem(`carouselle-image-${id}`);
		previousJuxtaposeElementIndex = id;

		// Hide
		previousJuxtaposeElement?.classList.add(...HIDE_IMAGES);
		previousJuxtaposeElement?.classList.remove(...SHOW_IMAGES);

		// Show
		juxtaposeElement?.classList.remove(...HIDE_IMAGES);
		juxtaposeElement?.classList.add(...SHOW_IMAGES);
	}

	// Loading screen logic
	var loadingScreenImagesFrame: HTMLElement;
	var loadingScreenFaviconImagesFrame: HTMLElement;
	function onPageLoaded() {
		loadingScreenFaviconImagesFrame.classList.add("bg-opacity-0");
		loadingScreenImagesFrame.classList.add("pointer-events-none");
		loadingScreenImagesFrame.classList.add("opacity-0");
	}

	// Mount
	var mounted = false;
	onMount(() => {
		mounted = true;

		loadingScreenFaviconImagesFrame.classList.add(
			"animate-loading-spinner"
		);

		setTimeout(() => {
			onPageLoaded();
		}, 1000);
	});
</script>

<svelte:window
	on:load={onPageLoaded}
	on:loadeddata={onPageLoaded}
/>

<div class="bg-black h-0 sm:h-24 top-0"></div>

<main
	class="flex items-center justify-evenly lg:justify-center flex-col lg:flex-row gap-24 lg:gap-1 min-h-screen w-screen bg-gradient-to-tl from-expo lg:from-white from-30% lg:from-60% to-white lg:to-expo to-30% lg:to-60% py-36 lg:py-24 px-5 lg:px-10 text-black"
>
	<div
		class="flex flex-col order-2 gap-10 justify-around items-center w-full lg:w-7/12 h-full lg:order-1"
	>
		<div
			bind:this={juxtaposeElementsWrapper}
			class="flex relative justify-center items-center w-full h-full"
		>
			<div
				bind:this={loadingScreenImagesFrame}
				class="flex absolute justify-center items-center bg-black transition-all w-full-2 h-full-2 z-2"
			>
				<img
					bind:this={loadingScreenFaviconImagesFrame}
					class="transition-all"
					src="/favicon/expoArredoWhite.svg"
					alt="Expo Arredo Logo White"
				/>
			</div>

			{#each photosProject as p, i}
				{#if i == 0}
					<div
						id={"carouselle-image-" + String(i)}
						class="flex overflow-hidden relative z-0 justify-center items-center w-full border-2 border-white opacity-100 h-108 cursor-col-resize shadow-light-theater"
					>
						<img
							class="object-cover w-full h-full"
							src={p.src}
							alt=""
						/>
					</div>
				{:else}
					<div
						id={"carouselle-image-" + String(i)}
						class="flex overflow-hidden absolute z-0 justify-center items-center w-full border-2 border-white opacity-0 pointer-events-none h-108 cursor-col-resize shadow-light-theater"
					>
						<img
							class="object-cover w-full h-full aspect-1-2"
							src={p.src}
							alt=""
						/>
					</div>
				{/if}
			{/each}
		</div>

		<div class="flex flex-col gap-3 justify-center items-center">
			<div class="">{currentPhotos.description}</div>
			<div>
				<ul class="flex flex-row gap-5 justify-center items-center">
					{#each photosProject as _, i}
						{#if i == 0}
							<li class="flex justify-center items-center">
								<input
									on:click={handleCarouselleChange}
									class="w-4 h-4 bg-black ring-black ring-offset-1 transition-all appearance-none cursor-pointer focus:bg-expo focus:ring-2 checked:bg-expo checked:ring-2"
									type="radio"
									checked={true}
									name="carouselleImages"
									id={"carouselle-input-" + i}
								/>
							</li>
						{:else}
							<li class="flex justify-center items-center">
								<input
									on:click={handleCarouselleChange}
									class="w-4 h-4 bg-black ring-black ring-offset-1 transition-all appearance-none cursor-pointer focus:bg-expo focus:ring-2 checked:bg-expo checked:ring-2"
									type="radio"
									name="carouselleImages"
									id={"carouselle-input-" + i}
								/>
							</li>
						{/if}
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="flex justify-center items-center w-full h-full lg:order-2">
		<div
			class="flex flex-col gap-7 justify-around items-start w-11/12 sm:w-10/12"
		>
			<h1 class="w-full text-7xl font-extrabold">{Title}</h1>

			<div
				class="flex flex-col gap-5 justify-center items-center w-full h-full sm:items-start"
			>
				<div
					class="flex overflow-scroll justify-center items-start w-11/12 sm:w-full max-h-96"
				>
					<p class="w-full text-justify text-lg font-semibold">
						{@html Description}
					</p>
				</div>

				<div class="flex justify-center items-center w-full">
					<ul
						class="flex flex-row justify-evenly items-center w-full"
					>
						{#each Statistics as s}
							<li class="p-2 border-l-4 border-expo">
								<p class="font-semibold">{s[0]}</p>
								<p>{s[1]}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>
