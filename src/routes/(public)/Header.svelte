<script lang="ts">
	import { onMount } from "svelte";
	import ButtonHeader from "./ButtonHeader.svelte";
	import { beforeNavigate } from "$app/navigation";
	import type { BeforeNavigate } from "@sveltejs/kit";

	// Sections of the website
	import { arredo, cornici, preventivo } from "$lib/index";
	var _arredo: boolean = false;
	arredo.subscribe((e) => {
		_arredo = e;
	});
	var _cornici: boolean = false;
	cornici.subscribe((e) => {
		_cornici = e;
	});
	var _preventivo: boolean = false;
	preventivo.subscribe((e) => {
		_preventivo = e;
	});

	// Header config
	import { headerList } from "$lib/index";
	var _headerList: string[][] = [[]];
	headerList.subscribe((e) => {
		_headerList = e;
	});

	// Langauges
	import { t, locale, locales } from "$lib/languages/i18n";
	var languagesDropDownMenu: HTMLElement;
	function changeLanguage(e: any): void {
		const target = e.target as HTMLButtonElement;
		if (!mounted || target == null) return;

		// change local order
		locales[locales.indexOf(target.innerText)] = locales[0];
		locales[0] = target.innerText;

		// Set language
		locale.set(locales[0]);
	}

	// HTML bindings
	var headerSection: HTMLElement;
	var lastScrollPosition: number = 0;

	// Path
	beforeNavigate(checkHeaderStatus);
	var isHomePage = false;
	function checkHeaderStatus(event: BeforeNavigate) {
		if (
			event.to != null &&
			(event.to.route.id == "/(public)" ||
				event.to.route.id == "/(public)/cornici")
		) {
			isHomePage = true;
		} else {
			isHomePage = false;
		}

		if (headerSection.classList.contains("-translate-y-24")) {
			headerSection.classList.remove(...ROLL_UP_HEADER);
			headerSection.classList.add(...ROLL_DOWN_HEADER);
		}
	}

	// Hamburger Menu logic
	var hamburgerMenu: HTMLElement;
	var isLeftMenuActive: boolean = false;

	const ROLL_RIGHT_HAMBURGER_MENU = ["translate-x-36"];
	const ROLL_RIGHT_HEADER = ["translate-x-0"];
	const ROLL_LEFT_HEADER = ["-translate-x-96"];
	function triggerLeftMenu() {
		if (!mounted) {
			return;
		}

		if (isLeftMenuActive) {
			headerSection.classList.remove(...ROLL_RIGHT_HEADER);
			hamburgerMenu.classList.remove(...ROLL_RIGHT_HAMBURGER_MENU);
			headerSection.classList.add(...ROLL_LEFT_HEADER);
			isLeftMenuActive = false;
			return;
		}

		headerSection.classList.remove(...ROLL_LEFT_HEADER);
		headerSection.classList.add(...ROLL_RIGHT_HEADER);
		hamburgerMenu.classList.add(...ROLL_RIGHT_HAMBURGER_MENU);
		isLeftMenuActive = true;
	}

	function onLoad() {
		// Check if we are in the home page
		const path = window.location.pathname;
		if (path == "/" || path == "/cornici") {
			isHomePage = true;
		} else {
			isHomePage = false;
		}
	}

	const POSITIONED_HEADER = ["border-opacity-0", "bg-opacity-0", "absolute"];
	const MOVING_HEADER = ["border-opacity-100", "bg-opacity-100", "fixed"];
	const ROLL_DOWN_HEADER = ["translate-y-0"];
	const ROLL_UP_HEADER = ["-translate-y-24"];
	var isHeaderolledDown = true;
	function onScroll() {
		if (!mounted) return;

		// Block movement on secondary pages
		if (!isHomePage && window.innerWidth > 640) {
			headerSection.classList.remove(...MOVING_HEADER);
			headerSection.classList.add(...POSITIONED_HEADER);
			return;
		}

		// Backgound logic only applies to big header
		if (window.scrollY <= 1 && window.innerWidth > 640) {
			headerSection.classList.remove(...MOVING_HEADER);
			headerSection.classList.add(...POSITIONED_HEADER);
		} else if (window.innerWidth > 640) {
			headerSection.classList.remove(...POSITIONED_HEADER);
			headerSection.classList.add(...MOVING_HEADER);
		}

		// Movement logic
		const isScrollingDown: boolean = lastScrollPosition <= window.scrollY;
		const isFast: boolean = window.scrollY - lastScrollPosition >= 10;

		if (
			(isHeaderolledDown ? isScrollingDown && isFast : isScrollingDown) &&
			window.innerWidth > 640
		) {
			headerSection.classList.remove(...ROLL_DOWN_HEADER);
			headerSection.classList.add(...ROLL_UP_HEADER);
			isHeaderolledDown = false;
		} else {
			// Main header
			headerSection.classList.remove(...ROLL_UP_HEADER);
			headerSection.classList.add(...ROLL_DOWN_HEADER);
			isHeaderolledDown = true;
		}

		lastScrollPosition = window.scrollY;
	}

	var mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<!-- Dom Events -->
<svelte:window
	on:load={onLoad}
	on:scroll={onScroll}
/>

<!-- Quando e nascosto e clicchi in secondaria header non appare -->
<!-- Header Body -->
<header
	class="text-white border-b-white bg-black z-50 sm:w-full w-auto sm:h-24 h-full px-4 py-2 sm:p-header
    flex flex-col sm:flex-row justify-evenly sm:justify-between items-start sm:items-center sm:gap-2

	border-opacity-100 bg-opacity-100
	fixed border-b-0 sm:border-b-2 border-r-2 sm:border-r-0
	-translate-x-96 sm:-translate-x-0
    
    transition-all"
	bind:this={headerSection}
	id="header"
>
	<div class="flex justify-center items-center w-full sm:w-auto sm:h-full">
		{#if _arredo}
			<a href="/">
				<img
					class="w-16 min-w-16 transition-all hover:drop-shadow-expoLight clickable"
					src="/favicon/expoArredoWhite.svg"
					alt="Expo Arredo Favicon"
				/>
			</a>
		{:else if _cornici}
			<a href="/cornici">
				<img
					class="w-16 min-w-16 transition-all hover:drop-shadow-expoLight clickable"
					src="/favicon/expoCorniciWhite.svg"
					alt="Expo Cornici Favicon"
				/>
			</a>
		{:else}
			<a href="/">
				<img
					class="w-16 min-w-16 transition-all hover:drop-shadow-expoLight clickable"
					src="/favicon/expoArredoWhite.svg"
					alt="Expo Arredo Favicon"
				/>
			</a>
		{/if}
	</div>
	<div>
		<ul
			class="flex flex-col sm:flex-row justify-center items-center gap-10"
		>
			<li>
				<ul
					class="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-5 flex-wrap"
				>
					{#each _headerList as e}
						<li
							class="cursor-pointer transition-all hover:text-expo hover:border-b-white border-b-2 border-b-transparent uppercase clickable"
						>
							<a href={e[0]}>{e[1]}</a>
						</li>
					{/each}
				</ul>
			</li>

			<li>
				{#if _arredo}
					<ButtonHeader placeholder={$t("header.buttonArredo")} />
				{:else if _cornici}
					<ButtonHeader placeholder={$t("header.buttonCornici")} />
				{:else if _preventivo}
					<ButtonHeader
						displayNone={true}
						placeholder={$t("header.buttonArredo")}
					/>
				{:else}
					<ButtonHeader placeholder={$t("header.buttonArredo")} />
				{/if}
			</li>

			<ul
				class="dropdown transition-all relative flex flex-col items-center justify-center hover:bg-expo cursor-pointer p-3"
			>
				<li>{locales[0]}</li>
				<ul
					class="dropdown-menu opacity-0 bottom-96 transition-all absolute bg-expo px-4 py-2 flex sm:flex-col justify-center items-center gap-2 pointer-events-none"
					bind:this={languagesDropDownMenu}
				>
					{#each locales as l, i}
						{#if i > 0}
							<button on:click={changeLanguage}>
								<li class="hover:underline clickable">{l}</li>
							</button>
						{/if}
					{/each}
				</ul>
			</ul>
		</ul>
	</div>
</header>

<div
	class="absolute w-full h-full flex items-start justify-start p-8 z-50 pointer-events-none"
>
	<div
		class="
        fixed flex flex-col justify-center items-center gap-2

		bg-expo py-2 px-1 rounded-sm

        clickable sm:opacity-0 opacity-100 transition-all
        pointer-events-auto sm:pointer-events-none"
		on:click={triggerLeftMenu}
		on:keydown={triggerLeftMenu}
		bind:this={hamburgerMenu}
		role="button"
		tabindex="0"
	>
		<img
			class="w-10"
			src="/favicon/horizontalBar.svg"
			alt="Horizontal Bar"
		/>
		<img
			class="w-10"
			src="/favicon/horizontalBar.svg"
			alt="Horizontal Bar"
		/>
		<img
			class="w-10"
			src="/favicon/horizontalBar.svg"
			alt="Horizontal Bar"
		/>
	</div>
</div>

<style>
	.dropdown:hover > .dropdown-menu {
		opacity: 1;
		transform: translateY(calc(99% + 24rem));
		pointer-events: all;
	}
</style>
