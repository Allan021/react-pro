import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

interface HooksProp {
  maximunCount: number;
}

export const useCounter = ({ maximunCount = 10 }: HooksProp) => {
  const [counter, setCounter] = useState(0);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());
  const handleIncrementCounter = useCallback(() => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, maximunCount));
  }, [maximunCount]);
  const handleDecrementCounter = useCallback(() => {
    setCounter((prevCounter) => Math.max(0, prevCounter - 1));
  }, []);

  useLayoutEffect(() => {
    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, [counter]);

  useEffect(() => {
    tl.current.play(0);
  }, [counter, maximunCount]);

  return {
    counter,
    elementToAnimate,
    handleIncrementCounter,
    handleDecrementCounter,
  };
};
