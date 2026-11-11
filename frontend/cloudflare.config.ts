import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "vortex-email",
		compatibilityDate: "2026-11-10",
		entrypoint: "./workers/app.ts",
		domains: ["vortex.skyfall.dev", "www.vortex.skyfall.dev"],
		observability: {
			enabled: true,
		},
	},
});
