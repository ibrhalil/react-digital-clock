import fs from "fs";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const useHttps =
	fs.existsSync("./localhost-key.pem") && fs.existsSync("./localhost.pem");

export default defineConfig({
	server: {
		https: useHttps
			? {
					key: fs.readFileSync("./localhost-key.pem"),
					cert: fs.readFileSync("./localhost.pem"),
			  }
			: false,
		port: 3000,
		open: true,
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	plugins: [react()],
	build: {
		outDir: "build",
	},
	base: "/",
});
