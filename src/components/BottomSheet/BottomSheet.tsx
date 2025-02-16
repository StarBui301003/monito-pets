/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/components/BottomSheet/BottomSheet.styles.css";
import { PropsWithChildren, TouchEvent, useCallback, useRef, useState } from "react";

export function BottomSheet({ children }: PropsWithChildren) {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(50);
  const [contentHeight, setContentHeight] = useState("20px");
  const bottomSheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const dragStart = (e: TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.touches?.[0].pageY);
    const contentAbsoluteHeight = contentRef.current?.getBoundingClientRect().height ?? 0;
    setStartHeight(contentAbsoluteHeight);
    bottomSheetRef.current?.classList.add("dragging");
  };

  const dragMove = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      if (!isDragging) return;
      const delta = startY - e.touches?.[0].pageY;

      setContentHeight(`${((startHeight + delta) / window.innerHeight) * 100}vh`);
    },
    [isDragging, startY, startHeight]
  );

  const dragStop = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    bottomSheetRef.current?.classList.remove("dragging");

    const contentAbsoluteHeight = contentRef.current?.getBoundingClientRect().height ?? 0;
    const delta = contentAbsoluteHeight - startHeight;
    const isMovedUp = delta >= 0;

    const windowProportion = parseFloat(contentHeight);

    if (isMovedUp) {
      if (windowProportion >= 20 && windowProportion < 60) {
        setContentHeight("40vh");
        bottomSheetRef.current?.classList.add("show");
      } else if (windowProportion >= 60) {
        setContentHeight("80vh");
        bottomSheetRef.current?.classList.add("show");
      } else {
        setContentHeight("20px");
        bottomSheetRef.current?.classList.remove("show");
      }
    }
    if (!isMovedUp) {
      if (windowProportion >= 40 && windowProportion < 80) {
        setContentHeight("40vh");
        bottomSheetRef.current?.classList.add("show");
      } else if (windowProportion >= 60) {
        setContentHeight("80vh");
        bottomSheetRef.current?.classList.add("show");
      } else {
        setContentHeight("20px");
        bottomSheetRef.current?.classList.remove("show");
      }
    }
  }, [contentHeight, isDragging, startHeight]);

  return (
    <div className="bottom-sheet" ref={bottomSheetRef}>
      <div className="sheet-overlay"></div>
      <div
        className="content"
        ref={contentRef}
        style={{
          height: contentHeight,
        }}
      >
        <div className="header" onTouchMove={dragMove} onTouchEnd={dragStop}>
          <div className="drag-icon" onTouchStart={dragStart}>
            <span></span>
          </div>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
}
