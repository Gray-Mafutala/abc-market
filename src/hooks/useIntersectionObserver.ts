import { RefObject, useEffect, useRef, useState } from "react";

const useIntersectionObserver = (
  options?: IntersectionObserverInit
): [RefObject<Element | null>, boolean] => {
  const observerRef = useRef<Element | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [observerRef, options]);

  return [observerRef, isIntersecting];
};

export default useIntersectionObserver;
