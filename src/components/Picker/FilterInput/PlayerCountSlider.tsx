import { Dispatch, useEffect, useRef } from "react";
import nouislider, {
  PipsMode,
  API as SliderAPI,
  Options as SliderOptions,
} from "nouislider";
import "nouislider/dist/nouislider.css";
import classNames from "classnames";

export type PlayerCountSliderProps = Props<{
  value: number;
  maxValue: number;
  onChange: Dispatch<number>;
}>;

export function PlayerCountSlider({
  value,
  maxValue,
  onChange,
  className,
}: PlayerCountSliderProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Nullable<PlayerCountSliderAPI>>(null);

  // initialize
  useEffect(() => {
    sliderRef.current = new PlayerCountSliderAPI(
      containerRef.current as HTMLElement,
    );
    return () => sliderRef.current?.destroy();
  }, []);

  // bind state
  useEffect(() => sliderRef.current?.onChange(onChange), [onChange]);
  useEffect(() => sliderRef.current?.setValue(value), [value]);
  useEffect(() => sliderRef.current?.setMaxValue(maxValue), [maxValue]);

  return (
    <div className={classNames("pt-2 pb-16 px-4", className)}>
      <div ref={containerRef} />
    </div>
  );
}

class PlayerCountSliderAPI {
  slider: SliderAPI;

  constructor(element: HTMLElement) {
    const options: SliderOptions = {
      range: {
        min: 2,
        max: 5,
      },
      start: 4,
      step: 1,
      format: {
        // integer without decimals
        to: (value) => Math.round(value),
        from: (value) => parseInt(value),
      },
      pips: {
        mode: PipsMode.Steps,
        density: 100,
        // large values
        filter: (_value) => 1,
      },
    };

    this.slider = nouislider.create(element, options);
  }

  destroy() {
    this.slider.destroy();
  }

  onChange(onChange: Dispatch<number>) {
    this.slider.off("change");
    this.slider.on("change", (_values, _handle, unencoded) =>
      onChange(Math.round(unencoded[0])),
    );
  }

  getValue(): number {
    return Math.round(this.slider.get(true) as number);
  }

  setValue(value: number) {
    this.slider.set(value, false);
  }

  setMaxValue(maxValue: number) {
    this.setValue(Math.min(this.getValue(), maxValue));

    this.slider.updateOptions(
      {
        range: {
          min: 2,
          max: maxValue,
        },
      },
      false,
    );
  }
}
