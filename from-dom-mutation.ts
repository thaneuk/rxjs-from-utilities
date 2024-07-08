import { Observable, Subscriber } from 'rxjs';

export const fromDomMutation = (element: Element, options?: MutationObserverInit) => {
  return new Observable((subscriber: Subscriber<MutationRecord[]>) => {
    let mutationObserver: MutationObserver | null = new MutationObserver((mutations: MutationRecord[]) =>
      subscriber.next(mutations)
    );

    mutationObserver?.observe(element, options);

    return (): void => {
      mutationObserver?.disconnect();
      mutationObserver = null;
    };
  });
};
