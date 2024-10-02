import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		//https: false, // HTTPS'i kapatın
		port: 3000, // İsteğe bağlı olarak portu belirleyin
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
