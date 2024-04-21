# fromElementResize

Utility function written to work in Angular with RxJS.  It can work on anything else as well with a change to the imports.

If you need to trigger code based on an element resize then this code will do the job. Will always emit initially, suggest skip(1) if this is not required.

## Example usage:

```
fromElementResize(this.elementRef.nativeElement)
  .pipe(
    skip(1),
    debounceTime(50),
    tap(() => {
      /* do something */
    }),
    takeUntil(this.onDestroy$)
  )
  .subscribe();
```
