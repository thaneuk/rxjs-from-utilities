import { Observable, Subscriber } from 'rxjs';

/** will always emit initially, suggest skip(1) if not desired */
export const fromElementResize = (element: HTMLElement) => {
  return new Observable((subscriber: Subscriber<ResizeObserverEntry[]>) => {
    let resizeObserver: ResizeObserver | null = new ResizeObserver((entries: ResizeObserverEntry[]) =>
      subscriber.next(entries)
    );

    resizeObserver?.observe(element);

    return (): void => {
      resizeObserver?.unobserve(element);
      resizeObserver = null;
    };
  });
};
