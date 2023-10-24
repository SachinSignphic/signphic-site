import { gsap } from "gsap";
import SplitType from "split-type";

// get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Flip from "gsap/Flip";
// import Draggable from "gsap/Draggable";

// // or all tools are exported from the "all" file (excluding members-only plugins):
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// // don't forget to register plugins
// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

// custom cursor


//initalize timeline for GSAP
const timeLine = gsap.timeline();

// gsap for header -- not really sure if it needs to be timeline'd.. but we'll see
gsap.fromTo(".header", { y: -140 }, { y: 0, delay: 0.5, duration: 2, ease: "power1.out" });

//gsap for landing marquee container
timeLine.fromTo(".slogan-container", { y: window.innerHeight }, { y: 0, duration: 1.7, ease: "power2.out" });

//gsap for landing marquee 
const marqueeSplit = new SplitType(".signphic-slogan", {
    type: "words",
});

timeLine.fromTo(marqueeSplit.words, { y: "150px" }, { y: 0, duration: 2, ease: "power2.out", stagger: 0.3 });

// motto words split
const mottoSplit = new SplitType(".motto");
gsap.fromTo(mottoSplit.elements, { y: "150px" }, { delay: timeLine.endTime() - 2, duration: 2, y:0, ease: "power2.out", stagger: 0.2 });

