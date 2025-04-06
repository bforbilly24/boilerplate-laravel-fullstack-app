import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "../css/app.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
        return pages[`./pages/${name}.tsx`];
    },

    setup({ el, App, props }) {
        createRoot(el).render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>,
        );
    },
});
