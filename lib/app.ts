import "dotenv";

export const APP = {
	version: "1.0.2",
	codename: "Andreea",
};

export const DEV = !Deno.env.get("DENO_DEPLOYMENT_ID");
