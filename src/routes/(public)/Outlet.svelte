<script lang="ts">
	import { t } from "$lib/languages/i18n"; // add
	import ProjectCard from "$lib/ProjectCard.svelte";
</script>

<section
	id="outlet"
	class="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-white from-50% to-expo to-50%"
>
	<div
		class="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-10 m-10"
	>
		<div
			class="lg:w-1/2 flex flex-col sm:flex-row lg:flex-col justify-evenly items-center gap-20"
		>
			<div
				class="flex flex-col items-center justify-center gap-5 text-black"
			>
				<h1 class="text-4xl font-extrabold">
					Expo Arredo: <span class="text-expo">X</span> Prodotti Outlet
				</h1>
				<div
					class="flex overflow-auto items-center justify-center w-full h-full lg:w-4/6"
				>
					<p class="font-semibold text-black">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odit vitae, debitis doloribus commodi voluptate totam
						labore. Rerum, nisi ullam rem quae eveniet sapiente.
						Quidem voluptatibus reiciendis architecto reprehenderit
						commodi facilis.
					</p>
				</div>
			</div>

			<div class="flex justify-center items-center">
				<a href="/outlet">
					<button
						class="flex flex-row gap-2 justify-center items-center px-1 py-3 w-56 sm:w-60 lg:w-80 h-20 shadow-2xl transition-all bg-expo clickable"
					>
						<div
							class="flex justify-center items-center h-full font-extrabold tracking-wider uppercase font-button text-base"
						>
							Scopri l'outlet
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

		<div class="lg:w-1/2 flex justify-center items-center">
			<div class="sm:w-96 lg:w-120 flex justify-center items-center">
				<ProjectCard
					href="/progetti/0"
					ToRight={false}
				/>
			</div>
		</div>
	</div>
</section>
