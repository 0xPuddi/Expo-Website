<script lang="ts">
	import { t } from "$lib/languages/i18n"; // add
	import { onMount } from "svelte";

	// Card data
	export var href = "/progetti";
	export var Title = "Titolo";
	export var Description =
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sequi corporis! Magni similique rem accusamus amet! At veritatis, quas iure, eveniet quisquam inventore id eum, ea consequuntur repellat cumque. Porro.";
	export var Time = "12g";
	export var Cost = "5'000.-";
	export var ToRight: boolean = true;

	// Movement logic
	var anchorCard: HTMLAnchorElement;
	const DEFAULT_TRANSFORM_RIGHT =
		"perspective(5000px) rotateY(20deg) rotateX(20deg)";
	const DEFAULT_TRANSFORM_LEFT =
		"perspective(5000px) rotateY(20deg) rotateX(-20deg)";
	function rotateCard(event: MouseEvent) {
		if (!mounted) return;

		const x = event.clientX;
		const y = event.clientY;

		const middleX = window.innerWidth / 2;
		const middleY = window.innerHeight / 2;

		const offsetX = ((middleX - x) / middleX) * 55;
		const offsetY = ((y - middleY) / middleY) * 55;

		anchorCard.style.transform = `perspective(5000px) rotateY(${offsetY}deg) rotateX(${offsetX}deg)`;
	}
	function resetCard() {
		if (!mounted) return;

		if (ToRight) {
			anchorCard.style.transform = DEFAULT_TRANSFORM_RIGHT;
		} else {
			anchorCard.style.transform = DEFAULT_TRANSFORM_LEFT;
		}
	}

	var mounted: boolean = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if ToRight}
	<a
		class="flex items-center justify-center w-full h-full transition-all clickable perspective-card-to-right relative"
		{href}
		bind:this={anchorCard}
		on:mousemove={rotateCard}
		on:mouseout={resetCard}
		on:blur={resetCard}
	>
		<div
			class="flex items-center justify-center flex-col gap-8 transition-all hover:shadow-2xl shadow-sm
                bg-black bg-opacity-90 drop-shadow-2xl
				backdrop-blur-2xl px-5 py-12"
		>
			<div>
				<h1 class="text-4xl font-extrabold">{Title}</h1>
			</div>

			<div
				class="border-2 border-white w-8/12 flex items-center justify-center relative"
			>
				<img
					class="object-cover h-full w-full"
					src="/background/gatto.jpeg"
					alt=""
				/>
				<img
					class="object-cover h-full w-full absolute hover:opacity-0 transition-all"
					src="/background/cucinaHome.png"
					alt=""
				/>
			</div>

			<div
				class="flex items-start justify-center overflow-auto w-10/12 text-base text-justify font-lightbold h-40"
			>
				<p>
					{@html Description}
				</p>
			</div>

			<div>
				<ul
					class="flex flex-row justify-center items-center gap-5 font-bold text-1xl"
				>
					<li
						class="flex flex-col items-start justify-center gap-1 border-l-2 border-expo px-2"
					>
						<h1>Tempo</h1>
						<p>{Time}</p>
					</li>
					<li
						class="flex flex-col items-start justify-center gap-1 border-l-2 border-expo px-2"
					>
						<h1>Costo</h1>
						<p>{Cost}</p>
					</li>
				</ul>
			</div>
		</div>
	</a>
{:else}
	<a
		class="flex items-center justify-center w-full h-full transition-all clickable perspective-card-to-left relative"
		{href}
		bind:this={anchorCard}
		on:mousemove={rotateCard}
		on:mouseout={resetCard}
		on:blur={resetCard}
	>
		<div
			class="flex items-center justify-center flex-col gap-8 transition-all hover:shadow-2xl shadow-sm
                bg-black bg-opacity-90 drop-shadow-2xl
				backdrop-blur-2xl px-5 py-12"
		>
			<div>
				<h1 class="text-4xl font-extrabold">{Title}</h1>
			</div>

			<div
				class="border-2 border-white w-8/12 flex items-center justify-center relative"
			>
				<img
					class="object-cover h-full w-full"
					src="/background/gatto.jpeg"
					alt=""
				/>
				<img
					class="object-cover h-full w-full absolute hover:opacity-0 transition-all"
					src="/background/cucinaHome.png"
					alt=""
				/>
			</div>

			<div
				class="flex items-start justify-center overflow-auto w-10/12 text-base text-justify font-lightbold h-40"
			>
				<p>
					{@html Description}
				</p>
			</div>

			<div>
				<ul
					class="flex flex-row justify-center items-center gap-5 font-bold text-1xl"
				>
					<li
						class="flex flex-col items-start justify-center gap-1 border-l-2 border-expo px-2"
					>
						<h1>Tempo</h1>
						<p>{Time}</p>
					</li>
					<li
						class="flex flex-col items-start justify-center gap-1 border-l-2 border-expo px-2"
					>
						<h1>Costo</h1>
						<p>{Cost}</p>
					</li>
				</ul>
			</div>
		</div>
	</a>
{/if}
