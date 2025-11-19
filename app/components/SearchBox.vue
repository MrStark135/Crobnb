<script setup>

const props = defineProps({
	label: String,
	iconSrc: String,
	input: String,
	placeholder: String,
	controller: Object
});

// props.controller.selection = reactive();
// // if (props.controller.selection !== "") value.value = props.controller.selection;

function hideDropdown() {
	setTimeout(() => {
		props.controller.dropdown = false;
	}, 120);
}

const inputBox = ref(null);
const inputContainer = ref(null);
</script>
<template>
	<div class="flex flex-col items-start gap-3 w-full">
		<div class="text-[14px]/[16px] font-bold whitespace-nowrap">{{ label }}</div>
		<div tabindex="0" ref="inputContainer" class="flex justify-between border border-grayscale-10 rounded-[5px] p-3 w-full" >
			<div class="flex items-center gap-2">
				<img :src="iconSrc" class="size-6"/>
				<input ref="inputBox" :class="`text-sm w-full focus:outline-none placeholder-grayscale-60 ${props.controller.selection == '' ? 'text-grayscale-60' : 'text-black'}`" 
				 :type="input" :placeholder="placeholder"
				 @input="(event) => { if (input == 'text') controller.onType(event); }"
				 @click="(event) => { controller.onFocus(event); }"
				 @focusout="() => { hideDropdown(); }"
				 :value="
				 (() => {
					if (input == 'button' || props.controller.selection != '')
						return props.controller.selection || placeholder;
				 })()
				 ">
				</input>
			</div>
			<div class="cursor-pointer flex justify-center items-center min-w-6" @click="(event) => { controller.onFocus(event); inputBox.focus(); }">
				<img src="/assets/icons/triangle_bracket_down.svg"/>
			</div>
		</div>
	</div>
</template>