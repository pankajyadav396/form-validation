export const CommonButton = ({ text, className , icon = "", ...props }) => {
    return (
      <button
        className={`duration-300 flex rounded-[36px] bg-black w-24 mx-auto text-white items-center leading-121 font-normal text-sm text-center ${className}`}
        {...props}
      >
        {text}{icon}
      </button>
    );
  };
  