import { Dispatch, useEffect, useRef } from "react";
import nouislider, {
  API as SliderAPI,
  Options as SliderOptions,
} from "nouislider";
import "nouislider/dist/nouislider.css";
import { Tier } from "@/domain";
import classNames from "classnames";

export type TierRange = {
  from: Tier;
  to: Tier;
};

export type TierRangeSliderProps = Props<{
  range: TierRange;
  onChange: Dispatch<TierRange>;
}>;

export function TierRangeSlider({
  range,
  onChange,
  className,
}: TierRangeSliderProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Nullable<TierRangeSliderAPI>>(null);

  // initialize
  useEffect(() => {
    sliderRef.current = new TierRangeSliderAPI(
      containerRef.current as HTMLElement,
    );
    return () => sliderRef.current?.destroy();
  }, []);

  // bind state
  useEffect(() => sliderRef.current?.onChange(onChange), [onChange]);
  useEffect(() => sliderRef.current?.setValue(range), [range]);

  return <div className={classNames(className)} ref={containerRef} />;
}

class TierRangeSliderAPI {
  slider: SliderAPI;

  constructor(element: HTMLElement) {
    const options: SliderOptions = {
      range: {
        min: Tier.F,
        max: Tier.SS,
      },
      start: [Tier.F, Tier.S],
      connect: true,
      step: 1,
      tooltips: true,
      format: {
        to: (value) => Tier[Math.round(value)],
        // here value is already a number, no idea why
        from: (value) => parseInt(value),
      },
    };

    this.slider = nouislider.create(element, options);
  }

  destroy() {
    this.slider.destroy();
  }

  onChange(onChange: Dispatch<TierRange>) {
    this.slider.off("change");
    this.slider.on("change", (_values, _handle, unencoded) =>
      onChange({
        from: Math.round(unencoded[0]) as Tier,
        to: Math.round(unencoded[1]) as Tier,
      }),
    );
  }

  setValue({ from, to }: TierRange) {
    this.slider.set([from, to], false);
  }
}
