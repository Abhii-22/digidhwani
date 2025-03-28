import React from 'react';
import { motion } from 'framer-motion';

import autodesk from "@/assets/Logos/autodesk-learning-partner-logo-rgb-black.png"
import bentley from "@/assets/Logos/Bentley-Training-Partner-Logo.png"
import sketchUp from "@/assets/Logos/Sketchup_Colour.png"
import chaos from "@/assets/Logos/Chaos_idHNVPKG7k_0.svg"
import ptc from "@/assets/Logos/ptc_master_logo_CMYK_color.png"

export function PartnersSection() {
    const partners = [
        { image: autodesk, name: "Autodesk" },
        { image: bentley, name: "Bentley" },
        { image: sketchUp, name: "SketchUp" },
        { image: chaos, name: "Chaos" },
        { image: ptc, name: "PTC" },
    ];

    return (
        <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Our Technology Partners
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Collaborating with industry leaders to deliver innovative solutions and transform digital experiences.
                    </p>
                </div>

                <div className="relative w-full">
                    <motion.div 
                        className="flex"
                        animate={{
                            x: [0, "-50%"],
                            transition: {
                                ease: "linear",
                                duration: 15,
                                repeat: Infinity,
                                repeatType: "loop"
                            }
                        }}
                    >
                        {partners.map((partner, index) => (
                            <div 
                                key={index} 
                                className="flex-shrink-0 w-1/4 px-8 flex items-center justify-center transition-opacity duration-300"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="max-h-16 w-auto transition-all duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PartnersSection;