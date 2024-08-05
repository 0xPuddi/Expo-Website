<script lang="ts">
	import { t } from "$lib/languages/i18n";
	import gsap from "gsap";
	import { onMount } from "svelte";

	// notes: somethimes last brands items are already showing?
	// notes: add languages and logos
	// notes: lower screen top seems off

	var marchi = "MARCHI";

	var typesAndBrands = [
		[
			"Arredamento",
			[
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
			],
		],
		[
			"Cucine",
			[
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
			],
		],
		[
			"Bagni",
			[
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
			],
		],
		[
			"Arredo Esterno",
			[
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
			],
		],
		[
			"Illuminazione",
			[
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
			],
		],
		[
			"Ufficio",
			[
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
				{
					img: "/brands/franke.svg",
					description: "this is frankie",
					alt: "this is frankie",
				},
			],
		],
	];

	let _brandType: HTMLElement[] = [];
	$: brandType = _brandType.filter(Boolean);

	let _brands: HTMLUListElement[] = [];
	$: brands = _brands.filter(Boolean);

	var leftArrow: HTMLElement;
	var rightArrow: HTMLElement;

	function leftArrowClick() {
		if (!mounted) {
			return;
		}

		let tl = gsap.timeline();
		tl.fromTo(
			leftArrow,
			{
				x: 0,
				duration: 0.1,
			},
			{
				x: -10,
				duration: 0.1,
			}
		).to(leftArrow, {
			x: 0,
			duration: 0.1,
		});

		for (let i = 0; i < brandType.length; ++i) {
			if (i == 0 && brandType[i].id == "visible") {
				gsap.fromTo(
					brandType[i],
					{
						y: 0,
						duration: 0.1,
					},
					{
						y: 300,
						duration: 0.1,
					}
				);
				gsap.fromTo(
					brandType[i],
					{
						y: 300,
						duration: 0.1,
					},
					{
						y: 0,
						duration: 0.1,
					}
				);
				break;
			}

			if (brandType[i].id == "visible") {
				// show top element
				gsap.fromTo(
					brandType[i - 1],
					{
						y: 50,
						duration: 0.2,
						opacity: 0,
					},
					{
						y: 0,
						duration: 0.2,
						opacity: 1,
					}
				);
				brandType[i - 1].id = "visible";

				// hide to bottom
				gsap.fromTo(
					brandType[i],
					{
						y: 0,
						duration: 0.2,
						opacity: 1,
					},
					{
						y: 50,
						duration: 0.2,
						opacity: 0,
					}
				);
				brandType[i].id = "invisible";

				updateBrands(i, false);
				break;
			}
		}
	}

	function rightArrowClick() {
		if (!mounted) {
			return;
		}

		let tl = gsap.timeline();
		tl.fromTo(
			rightArrow,
			{
				x: 0,
				duration: 0.1,
			},
			{
				x: 10,
				duration: 0.1,
			}
		).to(rightArrow, {
			x: 0,
			duration: 0.1,
		});

		for (let i = 0; i < brandType.length; ++i) {
			if (i == brandType.length - 1 && brandType[i].id == "visible") {
				gsap.fromTo(
					brandType[i],
					{
						y: 0,
						duration: 0.1,
					},
					{
						y: -300,
						duration: 0.1,
					}
				);
				gsap.fromTo(
					brandType[i],
					{
						y: -300,
						duration: 0.1,
					},
					{
						y: 0,
						duration: 0.1,
					}
				);
				break;
			}

			if (brandType[i].id == "visible") {
				// hide to top
				gsap.fromTo(
					brandType[i],
					{
						y: 0,
						duration: 0.2,
						opacity: 1,
					},
					{
						y: -50,
						duration: 0.2,
						opacity: 0,
					}
				);
				brandType[i].id = "invisible";

				// show bottom element
				gsap.fromTo(
					brandType[i + 1],
					{
						y: -50,
						duration: 0.2,
						opacity: 0,
					},
					{
						y: 0,
						duration: 0.2,
						opacity: 1,
					}
				);
				brandType[i + 1].id = "visible";

				updateBrands(i, true);
				break;
			}
		}
	}

	function updateBrands(i: number, right: boolean) {
		if (!mounted) {
			return;
		}

		// hide
		let toHide: HTMLUListElement = brands[i];
		toHide.classList.remove("flex");
		toHide.classList.remove("opacity-100");
		toHide.classList.add("hidden");
		toHide.classList.add("opacity-0");

		var toShow: HTMLUListElement;
		if (right) {
			// show
			toShow = brands[i + 1];
		} else {
			toShow = brands[i - 1];
		}

		toShow.classList.remove("hidden");
		toShow.classList.remove("opacity-0");
		toShow.classList.add("flex");
		toShow.classList.add("opacity-100");
		var toShowItems = toShow.childNodes;
		for (let i = 0; i < toShowItems.length; i++) {
			if (toShowItems[i].nodeName == "#text") {
				continue;
			}

			gsap.fromTo(
				toShowItems[i],
				{
					y: 5,
					opacity: 0,
				},
				{
					y: 0,
					duration: 0.3,
					opacity: 1,
					delay: 0.03 * i,
				}
			);
		}
	}

	var mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section
	id="brands"
	class="relative flex justify-center items-start w-screen min-h-screen bg-white text-black pt-28 pb-20 px-3"
>
	<div
		class="absolute w-full h-full flex items-center sm:items-start justify-start sm:justify-center flex-col sm:flex-row gap-2 sm:gap-10
		-translate-y-16 sm:-translate-y-0 lg:-translate-y-12 pointer-events-none z-0 opacity-10"
	>
		{#each marchi as m}
			<h1
				class="text-7xl sm:text-10xl lg:text-20xl font-extrabold uppercase"
			>
				{m}
			</h1>
		{/each}
	</div>

	<div class="w-full flex items-center justify-between flex-col gap-16 z-10">
		<div
			class="w-full flex items-center justify-center gap-10 flex-wrap flex-row"
		>
			<button on:click={leftArrowClick}>
				<img
					bind:this={leftArrow}
					class="rotate-180 w-12"
					src="/favicon/fatPointyArrowBlack.svg"
					alt=""
				/>
			</button>

			<ul
				class="relative flex items-center justify-center sm:w-56 font-extrabold text-3xl"
			>
				{#each typesAndBrands as t, i}
					{#if i == 0}
						<li
							bind:this={_brandType[i]}
							id="visible"
							class="transition-all"
						>
							{t[0]}
						</li>
					{:else}
						<li
							bind:this={_brandType[i]}
							id="invisible"
							class="absolute opacity-0 transition-all translate-y-16"
						>
							{t[0]}
						</li>
					{/if}
				{/each}
			</ul>

			<button on:click={rightArrowClick}>
				<img
					bind:this={rightArrow}
					class="w-12"
					src="/favicon/fatPointyArrowBlack.svg"
					alt=""
				/>
			</button>
		</div>

		<div class="w-full h-full">
			{#each typesAndBrands as t, i}
				{#if i == 0}
					<ul
						bind:this={brands[i]}
						class="flex w-full items-center justify-center gap-5 flex-wrap transition-all opacity-100"
					>
						{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as i}
							<li
								class="w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center flex-col transition-all opacity-100
								hover:border-expo border-transparent border-2"
							>
								<a
									class="relative w-full h-full flex items-center justify-center flex-col"
									href="https://google.com"
								>
									<img
										class=""
										src="/brands/franke.svg"
										alt=""
									/>
									<div>
										<p>Franke brand</p>
									</div>
								</a>
							</li>
							<li
								class="w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center flex-col transition-all opacity-100
								hover:border-expo border-transparent border-2"
							>
								<a
									class="relative w-full h-full flex items-center justify-center flex-col"
									href="https://google.com"
								>
									<img
										class=""
										src="/brands/franke.svg"
										alt=""
									/>
									<div>
										<p>Franke brand</p>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<ul
						bind:this={brands[i]}
						class="hidden w-full items-center justify-center gap-5 flex-wrap transition-all opacity-0"
					>
						{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as i}
							<li
								class=" w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center flex-col p-2 gap-3 transition-all opacity-0 hover:border-expo border-transparent border-2"
							>
								<img
									class=""
									src="/brands/franke.svg"
									alt=""
								/>
								<div>
									<p>Franke brand</p>
								</div>
							</li>
							<li
								class="w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center flex-col p-2 gap-3 transition-all opacity-0 hover:border-expo border-transparent border-2"
							>
								<a
									class="relative w-full h-full flex items-center justify-center flex-col"
									href="https://google.com"
								>
									<img
										class=""
										src="/brands/franke.svg"
										alt=""
									/>
									<div>
										<p>Franke brand</p>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</div>
	</div>
</section>
