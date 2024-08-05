<script lang="ts">
	import { t } from "$lib/languages/i18n"; // add

	export var href: string = "/progetti";
	export var Title: string = "Titolo";
	export var Description: string =
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro.";
	export var Statistics: string[][] = [
		["Tempo", "123 giorni"],
		["Costo", "500'000.-"],
	];
	export var PhotosPath = [
		"/background/gattoLook.jpeg",
		"/background/gatto.jpeg",
	];
</script>

<a
	class="flex flex-col justify-center items-center h-full transition-all clickable max-w-96"
	{href}
	><div
		class="flex items-center justify-center flex-col gap-5 transition-all hover:shadow-2xl
                border-l-2 border-b-2 border-white bg-black
				to-60% drop-shadow-2xl backdrop-blur-sm px-5 py-12 sm:px-5"
	>
		<div>
			<h1 class="text-2xl font-extrabold overflow-scroll max-h-8">
				{Title}
			</h1>
		</div>
		<div
			class="flex relative justify-center items-center w-7/12 border-2 border-expo"
		>
			<img
				class="object-cover absolute w-full h-full opacity-100 transition-all hover:opacity-0"
				src={PhotosPath[0]}
				alt=""
			/>
			<img
				class="object-cover w-full h-full"
				src={PhotosPath[1]}
				alt=""
			/>
		</div>
		<div
			class="flex overflow-auto justify-center items-start w-10/12 sm:w-8/12"
		>
			<p class="text-xs">
				{Description}
			</p>
		</div>
		<div>
			<ul class="flex flex-row gap-5 justify-center items-center">
				{#each Statistics as s}
					<li
						class="flex flex-col gap-1 justify-center items-start px-2 text-sm border-l-2 border-expo"
					>
						<h1>{s[0]}</h1>
						<p>{s[1]}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div></a
>
