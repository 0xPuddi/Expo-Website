<script lang="ts">
	export var el: {
		img: string;
		text: string;
	} = { img: "", text: "Not Given" };

	export var left: boolean = true;
</script>

{#if left}
	<section
		class="sm:grid flex flex-col items-center justify-center content-none gap-20 sm:gap-0 sm:grid-cols-20-80 min-h-three-quarters-viewport"
	>
		<div class="w-full h-32 sm:h-full">
			<img
				class="w-full h-full object-cover"
				src={el.img}
				alt=""
			/>
		</div>

		<div class="flex items-center justify-center">
			<p class="w-5/6 text-base sm:text-lg lg:text-4xl">
				{@html el.text}
			</p>
		</div>
	</section>
{:else}
	<section
		class="sm:grid flex flex-col items-center justify-center content-none gap-20 sm:gap-0 sm:grid-cols-80-20 min-h-three-quarters-viewport"
	>
		<div class="flex items-center justify-center order-2 sm:order-1 h-full">
			<p class="w-5/6 text-base sm:text-lg lg:text-4xl">
				{@html el.text}
			</p>
		</div>

		<div class="w-full order-1 sm:order-2 h-32 sm:h-full">
			<img
				class="w-full h-full object-cover"
				src={el.img}
				alt=""
			/>
		</div>
	</section>
{/if}
