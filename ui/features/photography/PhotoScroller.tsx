"use client";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface PhotoScrollerProps {
  label: string;
  children: ReactNode;
}

// Horizontal scroller with a hidden scrollbar. Scrollability is signalled by:
// - the next photo peeking in from the edge (item widths never divide evenly)
// - a fade on whichever edge still has more content
// - arrow buttons (needed for mouse users, who can't scroll sideways without a scrollbar)
const PhotoScroller = ({ label, children }: PhotoScrollerProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // 1px tolerance for sub-pixel rounding
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      observer.disconnect();
    };
  }, [updateEdges]);

  const scroll = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="photo-scroller" data-at-start={atStart} data-at-end={atEnd}>
      <div
        ref={scrollerRef}
        className="photo-scroller__track"
        tabIndex={0}
        role="region"
        aria-label={`${label} photos`}
      >
        {children}
      </div>
      <button
        className="photo-scroller__arrow photo-scroller__arrow--prev"
        onClick={() => scroll(-1)}
        aria-label={`Previous ${label} photos`}
        hidden={atStart}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="photo-scroller__arrow photo-scroller__arrow--next"
        onClick={() => scroll(1)}
        aria-label={`Next ${label} photos`}
        hidden={atEnd}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default PhotoScroller;
