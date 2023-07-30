import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const app = new Elysia()
	.use(html())
	.get("/", ({ html }) => html(
	<BaseHtml>
	<body>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" hx-post="/clicked" hx-swap="outerHTML">Click here modafvcka</button>
	</body>
	</BaseHtml>))
	.post("/clicked", () => <div>I'M FROM THE SERVERRRR!</div>)
	.listen(3000);

console.log(`🦊Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cool-proj with BETH Stack</title>bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
${children}
`;
