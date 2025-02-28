/**
 * This file serves as a centralized configuration for customizing Grafana’s default text elements to align with the Liberty Now branding. 
 * Instead of modifying hardcoded strings throughout the codebase, it exports an object named LN_TEXT that contains all the replacement text values.
 */

 export const LN_TEXT={
    pages:{
        login:{
            welcome:'Liberty Now Stats'
        },
        home:{
            welcome:'Welcome To Liberty Now Stats'
        }
    },
    appTitle:'Liberty Now Stats',
}