// tailwind-config.premium.js - Configuración de Tailwind para el sistema de diseño Purple Premium.
// Las páginas de la app cargan este archivo. (login.html conserva tailwind-config.js sin cambios.)
// Los colores apuntan a variables CSS definidas en koda-premium.css; los valores entre paréntesis son un respaldo.
(function () {
const kc = (v, fb) => `rgb(var(${v}, ${fb}) / <alpha-value>)`;
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif']
            },
            colors: {
                // Nombres antiguos: se conservan para que ninguna clase existente deje de funcionar (valores fijos, siempre oscuros)
                koda: {
                    darkBg: kc('--kd-bg', '14 9 22'),
                    darkCard: kc('--kd-card', '24 17 38'),
                    darkBorder: kc('--kd-border', '43 33 64'),
                    textMuted: kc('--kd-muted', '180 169 208'),
                    steel: kc('--kd-steel', '169 159 198'),
                    white: kc('--kd-white', '246 243 255'),
                    red: kc('--kd-rose', '253 164 192'),
                    green: kc('--kd-mint', '110 231 183'),
                    blue: kc('--kd-accent', '167 139 250'),
                    lime: kc('--kd-accent', '167 139 250'),
                    gold: kc('--kd-amber', '252 211 77'),
                    gray: kc('--kd-gray', '123 111 153')
                },
                // Nombres nuevos (siguen el tema: oscuro por defecto, claro si la página no tiene la clase "dark")
                k: {
                    bg: kc('--k-bg', '14 9 22'),
                    surface: kc('--k-surface', '24 17 38'),
                    raised: kc('--k-raised', '33 24 58'),
                    text: kc('--k-text', '246 243 255'),
                    muted: kc('--k-muted', '169 159 198'),
                    faint: kc('--k-faint', '123 111 153'),
                    primary: kc('--k-primary', '124 58 237'),
                    primary2: kc('--k-primary2', '167 139 250'),
                    lav: kc('--k-lav', '205 191 255'),
                    mag: kc('--k-mag', '232 121 249'),
                    mint: kc('--k-mint', '110 231 183'),
                    rose: kc('--k-rose', '253 164 192'),
                    amber: kc('--k-amber', '252 211 77')
                }
            },
            borderRadius: { 'k-sm': '12px', 'k-md': '16px', 'k-lg': '24px', 'k-xl': '28px' },
            boxShadow: {
                'k-card': '0 20px 40px -24px rgba(0,0,0,.6)',
                'k-glow': '0 12px 28px -10px rgba(139,92,246,.7)',
                'k-pop': '0 24px 60px -20px rgba(0,0,0,.75)'
            }
        }
    }
};
})();
