import type { Config } from "@react-router/dev/config";

export default {
	ssr: true,
	// prerender: true, -- gets the commit dates wrong
} satisfies Config;
