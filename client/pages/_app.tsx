import Navbar from "@/components/navbar/navbar";
import "../styles/global.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import 'tailwindcss/tailwind.css'; // Importez les styles Tailwind CSS

function App({ Component, pageProps }: AppProps) {
    return (
        <div style={{ background: 'your-background-color' }}>
            <Navbar /> {/* Affichez la barre de navigation en haut de chaque page */}
            <Component {...pageProps} />
        </div>
    );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
