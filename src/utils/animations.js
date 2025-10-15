"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAnimations() {
  // useEffect(() => {
  //   const createScrollAnim = (selector, fromVars, toVars) => {
  //     gsap.utils.toArray(selector).forEach((el) => {
  //       gsap.fromTo(
  //         el,
  //         fromVars,
  //         {
  //           ...toVars,
  //           scrollTrigger: {
  //             trigger: el,
  //             start: "top 80%",
  //             toggleActions: "play none none reverse",
  //           },
  //         }
  //       );
  //     });
  //   };

  //   // === Zoom ===
  //   createScrollAnim(".anim-zoom", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" });
  //   createScrollAnim(".anim-zoom-out", { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" });

  //   // === Fade ===
  //   createScrollAnim(".anim-fade-up", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
  //   createScrollAnim(".anim-fade-down", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
  //   createScrollAnim(".anim-fade-left", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 });
  //   createScrollAnim(".anim-fade-right", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 });

  //   // === Slide ===
  //   createScrollAnim(".anim-slide-up", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
  //   createScrollAnim(".anim-slide-down", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
  //   createScrollAnim(".anim-slide-left", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
  //   createScrollAnim(".anim-slide-right", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });

  //   // === Rotate ===
  //   createScrollAnim(".anim-rotate", { rotation: -15, opacity: 0 }, { rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });

  //   // === Flip ===
  //   createScrollAnim(".anim-flip-x", { rotationX: 90, opacity: 0, transformOrigin: "center" }, { rotationX: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
  //   createScrollAnim(".anim-flip-y", { rotationY: 90, opacity: 0, transformOrigin: "center" }, { rotationY: 0, opacity: 1, duration: 0.8, ease: "power2.out" });

  //   // === Scale bounce ===
  //   createScrollAnim(".anim-bounce-scale", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "bounce.out" });

  //   // === Hover animations (no scroll trigger) ===
  //   gsap.utils.toArray(".anim-hover-zoom").forEach((el) => {
  //     el.addEventListener("mouseenter", () => {
  //       gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  //     });
  //     el.addEventListener("mouseleave", () => {
  //       gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
  //     });
  //   });

  //   gsap.utils.toArray(".anim-hover-rotate").forEach((el) => {
  //     el.addEventListener("mouseenter", () => {
  //       gsap.to(el, { rotation: 5, duration: 0.3, ease: "power2.out" });
  //     });
  //     el.addEventListener("mouseleave", () => {
  //       gsap.to(el, { rotation: 0, duration: 0.3, ease: "power2.out" });
  //     });
  //   });

  // }, []);
}
