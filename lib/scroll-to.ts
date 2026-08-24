const MIN_DURATION_MS = 750;
const MAX_DURATION_MS = 1700;
/** Time budget per viewport-height travelled, so long trips stay cinematic. */
const MS_PER_VIEWPORT = 640;
/** Sub-pixel slack: the browser rounds scroll offsets to device pixels. */
const DRIFT_TOLERANCE_PX = 4;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

const durationFor = (distance: number) => {
  const viewports = Math.abs(distance) / Math.max(window.innerHeight, 1);
  return Math.min(
    MAX_DURATION_MS,
    Math.max(MIN_DURATION_MS, viewports * MS_PER_VIEWPORT),
  );
};

/**
 * Eased scroll to an absolute document offset. Returns a cancel function.
 *
 * The document sets `scroll-behavior: smooth`, which would make every
 * `scrollTo` below its own animation and fight this one, so it is suspended for
 * the duration and restored afterwards.
 *
 * The animation yields the moment the visitor takes over: rather than listening
 * for wheel or key events, which fire spuriously and would strand the page
 * mid-flight, each frame checks whether the page still sits where the previous
 * frame left it.
 */
export function animateScrollTo(target: number): () => void {
  const start = window.scrollY;
  const distance = target - start;
  if (distance === 0) return () => {};

  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const duration = durationFor(distance);
  const startedAt = performance.now();
  let frame = 0;
  let expected = start;

  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    root.style.scrollBehavior = previousBehavior;
  };

  const step = (now: number) => {
    frame = 0;
    if (Math.abs(window.scrollY - expected) > DRIFT_TOLERANCE_PX) {
      stop();
      return;
    }

    const progress = Math.min((now - startedAt) / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    expected = window.scrollY;

    if (progress < 1) {
      frame = requestAnimationFrame(step);
      return;
    }
    stop();
  };

  frame = requestAnimationFrame(step);

  return stop;
}
