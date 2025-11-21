import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { useRuntimeConfig } from "#app";

export default defineNuxtPlugin(() => {
    try {
        const directus = createDirectus(useRuntimeConfig().public.DIRECTUS_API).with(rest());
        return {
            provide: { directus, readItem, readItems }
        }
    } catch(error) {
        console.log(error);
        return;
    }
})