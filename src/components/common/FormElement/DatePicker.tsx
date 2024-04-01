import flatpickr from "flatpickr";
import { useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";

interface DatePickerProps{
    label: string
}

const DatePicker:React.FC<DatePickerProps> = ({label}) => {
  useEffect(() => {
    // Init flatpickr
    flatpickr(".form-datepicker", {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);

  return (
    <>
      <label className="mb-3 flex gap-[2px] text-sm font-medium text-black dark:text-white">
        {label}
        <span className='text-red-500'>*</span>
      </label>
      <div className="relative w-full border-[1.5px] border-stroke">
        <input
          className="form-datepicker rounded  bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          placeholder="mm/dd/yyyy"
          data-class="flatpickr-right"
        />

        <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
          <MdOutlineDateRange className="text-xl text-slate-400"/>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
