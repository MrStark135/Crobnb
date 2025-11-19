import { createDirectus, readItem, readItems, rest } from "@directus/sdk";
import { useRuntimeConfig } from "#app";

export default defineNuxtPlugin(() => {
    const directus = createDirectus(useRuntimeConfig().public.DIRECTUS_API).with(rest());
    return {
        provide: { directus, readItem, readItems }
    }
})