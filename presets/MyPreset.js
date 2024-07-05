import { definePreset } from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Nora from '@primevue/themes/nora';


const themes = { Aura, Lara, Nora };

class ThemePreset {
    constructor() {
        this.presets = {
            Indigo: {
                primary: {
                    50: '{indigo.50}',
                    100: '{indigo.100}',
                    200: '{indigo.200}',
                    300: '{indigo.300}',
                    400: '{indigo.400}',
                    500: '{indigo.500}',
                    600: '{indigo.600}',
                    700: '{indigo.700}',
                    800: '{indigo.800}',
                    900: '{indigo.900}',
                    950: '{indigo.950}'
                }
            },
            Blue: {
                primary: {
                    50: '{blue.50}',
                    100: '{blue.100}',
                    200: '{blue.200}',
                    300: '{blue.300}',
                    400: '{blue.400}',
                    500: '{blue.500}',
                    600: '{blue.600}',
                    700: '{blue.700}',
                    800: '{blue.800}',
                    900: '{blue.900}',
                    950: '{blue.950}'
                }
            },
            Green: {
                primary: {
                    50: '{green.50}',
                    100: '{green.100}',
                    200: '{green.200}',
                    300: '{green.300}',
                    400: '{green.400}',
                    500: '{green.500}',
                    600: '{green.600}',
                    700: '{green.700}',
                    800: '{green.800}',
                    900: '{green.900}',
                    950: '{green.950}'
                }
            },
            Red: {
                primary: {
                    50: '{red.50}',
                    100: '{red.100}',
                    200: '{red.200}',
                    300: '{red.300}',
                    400: '{red.400}',
                    500: '{red.500}',
                    600: '{red.600}',
                    700: '{red.700}',
                    800: '{red.800}',
                    900: '{red.900}',
                    950: '{red.950}'
                }
            },
            Noir: {
                primary: {
                    50: '{surface.50}',
                    100: '{surface.100}',
                    200: '{surface.200}',
                    300: '{surface.300}',
                    400: '{surface.400}',
                    500: '{surface.500}',
                    600: '{surface.600}',
                    700: '{surface.700}',
                    800: '{surface.800}',
                    900: '{surface.900}',
                    950: '{surface.950}'
                },
                colorScheme: {
                    light: {
                        primary: {
                            color: '{primary.950}',
                            contrastColor: '#ffffff',
                            hoverColor: '{primary.900}',
                            activeColor: '{primary.800}'
                        },
                        highlight: {
                            background: '{primary.950}',
                            focusBackground: '{primary.700}',
                            color: '#ffffff',
                            focusColor: '#ffffff'
                        }
                    },
                    dark: {
                        primary: {
                            color: '{primary.50}',
                            contrastColor: '{primary.950}',
                            hoverColor: '{primary.100}',
                            activeColor: '{primary.200}'
                        },
                        highlight: {
                            background: '{primary.50}',
                            focusBackground: '{primary.300}',
                            color: '{primary.950}',
                            focusColor: '{primary.950}'
                        }
                    }
                }
            }
        };
    }

    createPreset(baseTheme, config) {
        return definePreset(baseTheme, config);
    }

    getPreset(themeName, presetName) {
        const baseTheme = themes[themeName];
        const presetConfig = this.presets[presetName];
        if (!baseTheme || !presetConfig) {
            throw new Error(`Invalid theme or preset name: ${themeName}, ${presetName}`);
        }
        return this.createPreset(baseTheme, { semantic: presetConfig });
    }
}

const themePreset = new ThemePreset();

export default themePreset;
