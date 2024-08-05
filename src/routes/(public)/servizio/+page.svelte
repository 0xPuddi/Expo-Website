<script lang="ts">
	// TODO: Add content and translations

	import { onMount } from "svelte";
	import { t } from "$lib/languages/i18n"; // add
	import ProjectCard from "$lib/ProjectCard.svelte";

	import { headerList } from "$lib/index";
	$: headerList.set([
		["/cornici", $t("header.cornici")],
		["/progetti", $t("header.progetti")],
		["/#noi", $t("header.noi")],
		["/#brands", $t("header.brands")],
		["/preventivo", $t("header.contatta")],
	]);

	var serviceStages = [
		[
			"Misurazione",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
		],
		[
			"Preventivo",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
		],
		[
			"Ideazione",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
		],
		[
			"Approvazione",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
		],
		[
			"Consegna",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
		],
		[
			"Montaggio",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
		],
		[
			"Goditelo!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae, debitis doloribus commodi voluptate totam labore. Rerum, nisi ullam rem quae eveniet sapiente. Quidem voluptatibus reiciendis architecto reprehenderit commodi facilis.",
		],
	];

	var mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<main
	class="flex items-center justify-center flex-col min-h-screen w-screen bg-gradient-to-b from-black from-0% to-expo to-90% py-36 lg:py-24 px-10"
>
	<div
		class="flex flex-col gap-10 justify-center items-start px-3 py-5 pt-0 sm:pt-16 sm:px-10"
	>
		{#each serviceStages as s, i}
			{#if i % 2 == 0}
				<div
					class="flex flex-col gap-5 justify-around items-center lg:flex-row"
				>
					<div
						class="flex flex-col gap-3 justify-center items-start px-8 py-3 w-full h-full border-2 border-white bg-expo lg:w-3/4 sm:flex-row"
					>
						<div
							class="flex flex-col gap-3 justify-center items-start w-full h-full"
						>
							<div class="w-full h-full text-3xl font-extrabold">
								<h1>{s[0]}</h1>
							</div>
							<div
								class="overflow-auto w-full h-full text-sm lg:text-base"
							>
								<p
									class="flex justify-center items-center text-justify"
								>
									{@html s[1]}
								</p>
							</div>
						</div>
					</div>

					<div
						class="flex justify-center items-start w-full lg:w-1/4"
					>
						<div
							class="flex justify-center items-center w-full h-full"
						>
							<img
								class="border-2 border-white"
								src="/background/gattoLook.jpeg"
								alt=""
							/>
						</div>
					</div>
				</div>
			{:else}
				<div
					class="flex flex-col gap-5 justify-around items-center lg:flex-row"
				>
					<div
						class="flex order-2 justify-center items-start w-full lg:w-1/4 lg:order-1"
					>
						<div
							class="flex justify-center items-center w-full h-full"
						>
							<img
								class="border-2 border-white"
								src="/background/gattoLook.jpeg"
								alt=""
							/>
						</div>
					</div>

					<div
						class="flex flex-col order-1 gap-3 justify-center items-start px-8 py-3 w-full h-full border-2 border-white bg-expo lg:w-3/4 sm:flex-row lg:order-2"
					>
						<div
							class="flex flex-col gap-3 justify-center items-start w-full h-full"
						>
							<div class="w-full h-full text-3xl font-extrabold">
								<h1>{s[0]}</h1>
							</div>
							<div
								class="overflow-auto w-full h-full text-sm lg:text-base"
							>
								<p
									class="flex justify-center items-center text-justify"
								>
									{@html s[1]}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</main>

<section
	id="progetti"
	class="flex items-center justify-center h-full w-screen bg-gradient-to-b from-expo from-5% to-black to-99% py-24 pt-0"
>
	<div
		class="flex flex-col gap-10 justify-center items-center p-10 w-full h-full sm:flex-row"
	>
		<div
			class="flex order-2 justify-center items-center w-full h-full sm:order-1"
		>
			<ProjectCard href="/progetti/0" />
		</div>

		<div
			class="flex flex-col order-1 gap-20 justify-evenly items-center w-full h-full sm:order-2"
		>
			<div class="flex flex-col gap-5 justify-center w-11/12">
				<h1 class="text-4xl font-extrabold">
					Abbiamo servito oltre <span class="text-blue-500"
						>123456</span
					><br />
					Progetti.
				</h1>
				<div
					class="flex overflow-auto justify-center w-full h-full items-top"
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odit vitae, debitis doloribus commodi voluptate totam
						labore. Rerum, nisi ullam rem quae eveniet sapiente.
						Quidem voluptatibus reiciendis architecto reprehenderit
						commodi facilis.
					</p>
				</div>
			</div>

			<div class="flex justify-center items-center">
				<a href="/progetti">
					<button
						class="flex flex-row gap-2 justify-center items-center px-1 py-3 w-64 h-20 ring-white shadow-2xl transition-all bg-expo sm:w-80 hover:ring-2"
					>
						<div
							class="flex justify-center items-center h-full font-extrabold tracking-wider uppercase font-button"
						>
							Scopri i Progetti
						</div>

						<div class="flex justify-center items-center h-full">
							<img
								src="/button/Vector.svg"
								alt="Button Arrow"
							/>
						</div>
					</button>
				</a>
			</div>
		</div>
	</div>
</section>
