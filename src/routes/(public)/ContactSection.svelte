<script lang="ts">
	import { onMount } from "svelte";
	import { t } from "$lib/languages/i18n";
	import { popUp } from "$lib/index";

	export var Message = true;

	// Manage form request
	var messageForm: HTMLElement;
	async function handleMessageRequest(e: any) {
		let popUpContainer = document.getElementById("popUpContainer");
		if (popUpContainer != null) {
			popUpContainer.classList.remove("animate-enter-alert");
		}

		e.preventDefault();

		const myForm = e.target as HTMLFormElement;
		const formData = new FormData(myForm);

		var reqBody: { [key: string]: string } = {};
		for (var [key, value] of formData.entries()) {
			reqBody[key] = value as string;
		}

		let parsedBody = JSON.stringify(reqBody);

		await fetch("/api/preventivo", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: parsedBody,
		})
			.then((res: any) => {
				// Not triggered

				// success popUp
				if (res.status != 200) {
					let popUpSta = $t("popUp.errorStatus");
					let popUpMsg = $t("popUp.errorMessage");

					let sta = popUpSta + res.status;
					let msg = popUpMsg + res.statusText;

					popUp.set([false, sta, msg]);
					return;
				}

				let popUpSta = $t("popUp.successStatus");
				let popUpMsg = $t("popUp.successMessage");

				let sta = popUpSta + res.status;
				let msg = popUpMsg + res.statusText;

				popUp.set([true, sta, msg]);
			})
			.catch((err) => {
				// error request
				popUp.set([false, $t("popUp.errorRequest"), err]);
			});
	}

	var mounted = false;
	onMount(() => {
		mounted = true;

		messageForm.addEventListener("submit", handleMessageRequest);
	});
</script>

<section
	class="text-black bg-white relative overflow-hidden z-0 min-h-three-quarters-viewport flex items-center justify-center"
>
	<div
		class="relative flex flex-col lg:flex-row items-center justify-around w-full h-full gap-14 lg:gap-0 px-5 sm:px-12 py-8"
	>
		<div class="flex flex-col items-center justify-center lg:w-3/6">
			<ul
				class="flex flex-col items-center justify-center gap-12 sm:gap-20 w-full"
			>
				<li
					class="flex flex-col sm:flex-row items-center justify-center gap-10 w-full"
				>
					<img
						class="w-80"
						src="/background/cucinaHome.png"
						alt="Expo Arredo Outside View"
					/>
					<p
						class="flex items-center justify-center w-full flex-wrap whitespace-pre-line text-3xl font-bold text-center sm:text-left"
					>
						{$t("contact.stabile")}
					</p>
				</li>

				<li class="w-full h-full flex items-center justify-center">
					<ul
						class="sm:grid flex flex-col items-center justify-center sm:grid-cols-2 gap-5 sm:gap-14"
					>
						<li
							class="flex flex-row flex-wrap items-center justify-start gap-3 w-full"
						>
							<img
								class="w-8"
								src="/favicon/envelope.svg"
								alt="Envelope icon"
							/>
							<a
								class="clickable hover:text-expo transition-all text-xl font-medium"
								href="mailto:email@example.com"
								>info@expoarredo.ch</a
							>
						</li>
						<li
							class="flex flex-row flex-wrap items-center justify-start gap-3 w-full"
						>
							<img
								class="w-8"
								src="/favicon/phone.svg"
								alt="Phone icon"
							/>
							<a
								class="clickable hover:text-expo transition-all text-xl font-medium"
								href="tel:+41916461047">+41 91 646 10 47</a
							>
						</li>
						<li
							class="flex flex-row flex-wrap items-center justify-start gap-3 w-full"
						>
							<img
								class="w-8"
								src="/favicon/mapMaker.svg"
								alt="Map Maker icon"
							/>
							<p class="text-xl font-medium">
								{$t("footer.via")} Vignalunga, 2c<br />6850
								Mendrisio - Svizzera
							</p>
						</li>
						<li
							class="flex flex-row flex-wrap items-center justify-start gap-3 w-full"
						>
							<img
								class="w-8"
								src="/favicon/clock.svg"
								alt="Map Maker icon"
							/>
							<p class="text-xl font-medium">
								{$t("footer.lunVen")} :<br />
								9.00 - 12.00 / 14.00 - 18.00 <br />
								{$t("footer.sabato")} :<br />
								{$t("footer.soloAppuntamento")}
							</p>
						</li>
					</ul>
				</li>
			</ul>

			{#if Message}
				<div class="w-full h-full flex items-center justify-center">
					<form
						bind:this={messageForm}
						class="flex flex-col justify-center items-center w-10/12 gap-5 px-5 py-12"
					>
						<div class="flex w-full items-start justify-start">
							<h1 class="text-3xl font-bold">
								{$t("contact.formMessage")}
							</h1>
						</div>
						<fieldset
							class="flex flex-col items-center justify-center w-full gap-5"
						>
							<div
								class="h-full w-full flex flex-col justify-center items-start"
							>
								<div
									class="flex flex-col items-start justify-center gap-1 w-full"
								>
									<p class="text-xl font-medium">
										{$t("contact.formTitle")}
									</p>
									<input
										class="w-full input"
										type="text"
										name="title"
										id="Title"
									/>
								</div>
							</div>
							<div
								class=" h-full w-full flex flex-col justify-center items-start"
							>
								<div
									class="flex flex-col items-start justify-center gap-1 w-full"
								>
									<p class="text-xl font-medium">Email</p>
									<input
										class="input w-full"
										type="email"
										name="email"
										id="Email"
									/>
								</div>
							</div>
							<div
								class=" h-full w-full flex flex-col justify-center items-start"
							>
								<div
									class="flex flex-col items-start justify-center gap-1 w-full"
								>
									<p class="text-xl font-medium">
										{$t("contact.formComment")}
									</p>
									<textarea
										class="input h-32 flex flex-col items-start justify-start leading-4 w-full"
										name="comment"
										id="Comment"
									/>
								</div>
							</div>
						</fieldset>

						<div>
							<button
								type="submit"
								class="clickable bg-expo px-2 py-3 flex flex-row justify-center items-center gap-2 shadow-2xl transition-all h-12 w-32"
							>
								<div
									class="flex justify-center items-center h-full uppercase font-button tracking-wider font-extrabold text-xs text-white"
								>
									{$t("contact.buttonPlaceholder")}
								</div>

								<div
									class="flex justify-center items-center h-full px-1"
								>
									<img
										src="/button/Vector.svg"
										alt="Button Arrow"
									/>
								</div>
							</button>
						</div>
					</form>
				</div>
			{/if}
		</div>

		<div class="block shadow-2xl w-10/12 sm:w-3/4 lg:w-2/6 min-h-128">
			<iframe
				class="h-full w-full min-h-128"
				title="Google maps"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32653.45716357588!2d8.968982962913973!3d45.88083548029522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478429b58b9d3f5f%3A0x6e9a9bc1b2004cfb!2sExpo%20Arredo%20SA!5e0!3m2!1sit!2sch!4v1692431177848!5m2!1sit!2sch"
				allowfullscreen={true}
				loading="eager"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
</section>
