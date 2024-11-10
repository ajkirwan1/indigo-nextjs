/** @format */
"use client";
import classes from "./overlay.module.css";
import { motion } from "framer-motion";

export default function Overlay({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className={classes.overlay}
    >
      {/* <h1>GUIDING VISIONS, MANAGING REALITIES</h1>
      <h1>YOUR PARTNER IN DEVELOPMENT</h1>
      <h1>CONSULTING & MANAGEMENT</h1> */}
      {children}
    </motion.div>
  );
}
