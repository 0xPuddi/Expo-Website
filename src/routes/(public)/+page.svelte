<script lang="ts">
	import { onMount } from "svelte";
	import ButtonHome from "./ButtonHome.svelte";
	import HomeProjects from "./HomeProjects.svelte";
	import HomeService from "./HomeService.svelte";
	import Outlet from "./Outlet.svelte";
	import Us from "./Us.svelte";
	import Brands from "./Brands.svelte";

	import { t } from "$lib/languages/i18n";
	import { headerList } from "$lib/index";
	$: headerList.set([
		["/storia", $t("header.storia")],
		["#servizi", $t("header.servizio")],
		["/progetti", $t("header.progetti")],
		["/outlet", "Outlet"],
		["/#brands", $t("header.brands")],
		["/cornici", $t("header.cornici")],
	]);

	import { arredo } from "$lib/index";
	arredo.set(true);

	var mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<main
	class="bg-white min-w-screen min-h-screen flex items-center justify-center flex-col z-40 relative overflow-hidden"
	id="main-home"
>
	<div
		class="w-full min-h-screen z-10
        flex items-center justify-evenly gap-0 sm:justify-center sm:gap-28 lg:justify-around lg:gap-0 flex-col lg:flex-row
        bg-gradient-to-r sm:bg-gradient-to-tr from-black from-25% to-transparent to-80%"
	>
		<img
			class="w-8/12 sm:w-6/12 lg:w-4/12"
			src={$t("home.heroImageArredo")}
			alt="Expo Arredo Home Logo"
		/>

		<div class="flex flex-col flex-wrap items-start justify-center gap-10">
			<ButtonHome placeholder={$t("home.heroButtonArredo")} />
		</div>
	</div>

	<video
		class="absolute object-top sm:object-right-top object-cover w-full h-full z-0"
		autoplay
		loop
		muted
		playsinline
	>
		<source
			src="/video/cats.mp4"
			type="video/mp4"
		/>
		<track kind="captions" />
	</video>
</main>

<Us />

<HomeService />

<HomeProjects />

<Outlet />

<Brands />
