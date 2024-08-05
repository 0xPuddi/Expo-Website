<script lang="ts">
	import { t } from "$lib/languages/i18n"; // add

	// Sections pair
	var SECTIONS = [
		{
			img: "/background/expo1.jpg",
			description: `Da una grande intuizione dell'architetto Emanuele Riva,
					nasce nel 1993 Expo Arredo, con l'intento di proporre
					elementi di arredo di qualità unici nel loro genere, in
					grado di creare il vivere quotidiano in un ambiente
					personalizzato legato alle esigenze della persona`,
		},
		{
			img: "/background/cucinaHome.png",
			description: `Storia`,
		},
	];
</script>

<section
	id="noi"
	class="relative flex items-center justify-center w-screen bg-gradient-to-br bg-white"
>
	<div
		class="flex flex-col items-center justify-center w-full h-full gap-10 sm:gap-0"
	>
		<div
			class="flex items-center justify-center flex-col gap-10 sm:gap-0 sm:grid sm:grid-cols-40-60 h-full w-full"
		>
			<div class="w-full h-full relative">
				<img
					class="object-cover w-full h-full"
					src={SECTIONS[0].img}
					alt=""
				/>
			</div>

			<div
				class="flex items-center justify-center sm:justify-start sm:ml-10"
			>
				<h2
					class="text-expo text-lg lg:text-3xl font-extrabold w-4/5 lg:w-11/12"
				>
					{@html SECTIONS[0].description}
				</h2>
			</div>
		</div>

		<div
			class="flex items-center justify-center py-5 sm:py-0 sm:grid sm:grid-cols-55-45 h-full w-full border-t-2 border-expo"
		>
			<div class="flex items-center justify-center">
				<a href="/storia">
					<button
						class="flex flex-row gap-2 justify-center items-center px-1 py-3 w-56 sm:w-60 lg:w-80 h-20 shadow-2xl transition-all bg-expo clickable"
					>
						<div
							class="flex justify-center items-center h-full font-extrabold tracking-wider uppercase font-button text-base"
						>
							{@html SECTIONS[1].description}
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

			<div class="w-full h-full hidden sm:block">
				<img
					class="object-cover w-full h-full"
					src={SECTIONS[0].img}
					alt=""
				/>
			</div>
		</div>
	</div>
</section>
