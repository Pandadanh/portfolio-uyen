import React, { useState, useEffect } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiGoogleanalytics, SiHubspot } from "react-icons/si";

const Portfolio = () => {
    const [darkMode, setDarkMode] = useState(false);
    const controls = useAnimation();
    const { scrollYProgress } = useScroll();

    const skills = [
        { name: "Adobe Photoshop", icon: SiAdobephotoshop, proficiency: 85 },
        { name: "Adobe Illustrator", icon: SiAdobeillustrator, proficiency: 80 },
        { name: "Figma", icon: SiFigma, proficiency: 90 },
        { name: "Google Analytics", icon: SiGoogleanalytics, proficiency: 75 },
        { name: "HubSpot", icon: SiHubspot, proficiency: 85 }
    ];

    const experiences = [
        {
            title: "Marketing Intern",
            company: "Tech Solutions Inc.",
            period: "2023 - Present",
            description: "Led digital marketing campaigns and increased engagement by 45%",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028"
        },
        {
            title: "Social Media Manager",
            company: "Creative Agency",
            period: "2022 - 2023",
            description: "Managed social media accounts for multiple clients",
            image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868"
        }
    ];

    return (
        <div className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-background"}`}>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-screen flex items-center justify-center relative overflow-hidden"
            >
                <div className="text-center z-10">
                    <motion.h1
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-primary-foreground"
                    >
                        Thy Uyen
                    </motion.h1>
                    <TypeAnimation
                        sequence={[
                            "Digital Marketing Specialist",
                            2000,
                            "Content Creator",
                            2000,
                            "Brand Strategist",
                            2000
                        ]}
                        wrapper="h2"
                        className="text-2xl md:text-4xl text-accent"
                        repeat={Infinity}
                    />
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-20 px-4 md:px-20"
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.img
                        src="https://media.canva.com/v2/image-resize/format:PNG/height:800/quality:100/uri:ifs%3A%2F%2F%2F7ffec690-e0cc-48a2-84ff-886e57fafc8f/watermark:F/width:695?csig=AAAAAAAAAAAAAAAAAAAAAEWfSDLImf61GIaA29s1mFAkUkGTcCYVNfiA_fWC7Pgc&exp=1740590172&osig=AAAAAAAAAAAAAAAAAAAAAO98sBtrUacfT2_Bz87rcOv9hm5aek8oBNvnRHunDvY0&signer=media-rpc&x-canva-quality=screen"
                        alt="Profile"
                        className="rounded-lg shadow-lg w-full"
                        whileHover={{ scale: 1.05 }}
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary-foreground">About Me</h2>
                        <p className="text-lg text-foreground">
                            Passionate marketing professional with a creative mindset and analytical approach.
                            Specialized in digital marketing strategies and brand development.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Skills Section */}
            <section className="py-20 px-4 md:px-20 bg-secondary">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground">Skills</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card p-6 rounded-lg shadow-sm text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <skill.icon className="text-4xl mb-4 mx-auto text-primary" />
                            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                            <div className="w-full bg-muted rounded-full h-2">
                                <div
                                    className="bg-primary h-2 rounded-full"
                                    style={{ width: `${skill.proficiency}%` }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-4 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground">Experience</h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-card p-6 rounded-lg shadow-sm"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={exp.image}
                                alt={exp.company}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                            <p className="text-accent mb-2">{exp.company}</p>
                            <p className="text-muted-foreground mb-4">{exp.period}</p>
                            <p className="text-foreground">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 md:px-20 bg-secondary">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground">Contact Me</h2>
                    <form className="space-y-6">
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 rounded-lg border border-input focus:ring-2 focus:ring-primary outline-none"
                            />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-lg border border-input focus:ring-2 focus:ring-primary outline-none"
                            />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="w-full p-3 rounded-lg border border-input focus:ring-2 focus:ring-primary outline-none"
                            ></textarea>
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
                        >
                            Send Message
                        </motion.button>
                    </form>

                    <div className="flex justify-center space-x-6 mt-12">
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-2xl text-primary-foreground">
                            <FaLinkedin />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-2xl text-primary-foreground">
                            <FaGithub />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-2xl text-primary-foreground">
                            <FaInstagram />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-2xl text-primary-foreground">
                            <FaTwitter />
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="fixed top-4 right-4 bg-card p-2 rounded-full shadow-sm"
            >
                {darkMode ? "🌞" : "🌙"}
            </button>
        </div>
    );
};

export default Portfolio;