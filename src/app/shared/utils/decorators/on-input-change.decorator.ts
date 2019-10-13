



interface SimpleChange<T> {
  currentValue: T;
  previousValue: T;
  isFirstChange: () => boolean;
  firstChange: boolean;
}

export function OnInputChange<T = any>(callback: (
  value: T, simpleChange?: SimpleChange<T>) => void) {

  const cachedValueKey = Symbol();
  const isFirstCahngeKey = Symbol();
  return (target, key) => {
    Object.defineProperty(target, key,
      {
        set(val) {
          if (this.cachedValueKey === val) {
            return;
          }

          this[isFirstCahngeKey] = this[isFirstCahngeKey] === undefined;

          const change: SimpleChange<T> = {
            currentValue: val,
            previousValue: this[cachedValueKey],
            isFirstChange: () => this[isFirstCahngeKey],
            firstChange: this[isFirstCahngeKey]
          };

          this[cachedValueKey] = val;

          callback.call(this, val, change);
        },
        get() {
          return this[cachedValueKey];
        }
      });
  };
}
