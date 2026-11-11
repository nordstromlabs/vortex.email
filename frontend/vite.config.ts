import { execSync } from "node:child_process";
import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

function getGitCommitHash() {
	return execSync("git rev-parse --short HEAD").toString().trim();
}

function getGitCommitLink() {
	const commitHash = getGitCommitHash();
	return `https://github.com/SkyfallWasTaken/vortex.email/commit/${commitHash}`;
}

function getGitCommitTime() {
	return execSync("git log -1 --format=%ct").toString().trim(); // UNIX timestamp
}

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter()],
	define: {
		__GIT_COMMIT_HASH__: JSON.stringify(getGitCommitHash()),
		__GIT_COMMIT_URL__: JSON.stringify(getGitCommitLink()),
		__GIT_COMMIT_TIME__: JSON.stringify(getGitCommitTime()),
	},
});
