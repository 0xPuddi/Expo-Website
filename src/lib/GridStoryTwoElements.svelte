<script lang="ts">
	export var elOne: {
		img: string;
		text: string;
	} = { img: "", text: "Not Given" };
	export var elTwo: {
		img: string;
		text: string;
	} = { img: "", text: "Not Given" };

	export var left: boolean = true;
</script>

{#if left}
	<section
		class="relative grid grid-rows-20-80 sm:grid-rows-1 grid-cols-1 sm:grid-cols-20-80 w-screen min-h-three-quarters-viewport"
	>
		<div class="w-full h-full">
			<img
				class="w-full h-full object-cover"
				src={elOne.img}
				alt=""
			/>
		</div>

		<div class="grid grid-rows-45-55">
			<div class="flex items-center justify-center h-full w-full py-3">
				<p class="w-5/6 text-base sm:text-xl lg:text-4xl">
					{@html elOne.text}
				</p>
			</div>

			<div
				class="relative flex flex-col justify-evenly sm:flex-row items-center sm:justify-center sm:pr-64 lg:pr-80"
			>
				<p class="w-5/6 text-base sm:text-xl lg:text-4xl order-2">
					{@html elTwo.text}
				</p>
				<div
					class="relative sm:absolute sm:bottom-0 sm:right-0 w-full h-24 sm:h-auto sm:max-w-64 lg:max-w-80 order-1"
				>
					<img
						class="w-full h-full object-cover"
						src={elTwo.img}
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
{:else}
	<section
		class="grid grid-rows-20-80 sm:grid-rows-1 grid-cols-1 sm:grid-cols-80-20 w-screen min-h-three-quarters-viewport"
	>
		<div class="grid grid-rows-45-55 order-2 sm:order-1">
			<div class="flex items-center justify-center h-full w-full py-3">
				<p class="w-5/6 text-base sm:text-xl lg:text-4xl">
					{@html elOne.text}
				</p>
			</div>

			<div
				class="relative flex flex-col sm:flex-row justify-evenly items-center sm:justify-center sm:pl-64 lg:pl-80"
			>
				<p class="w-5/6 text-base sm:text-xl lg:text-4xl order-2">
					{@html elTwo.text}
				</p>

				<div
					class="relative sm:absolute sm:bottom-0 sm:left-0 w-full h-24 sm:h-auto sm:max-w-64 lg:max-w-80 order-1"
				>
					<img
						class="w-full h-full object-cover"
						src={elTwo.img}
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="w-full h-full order-1 sm:order-2">
			<img
				class="w-full h-full object-cover"
				src={elOne.img}
				alt=""
			/>
		</div>
	</section>
{/if}
