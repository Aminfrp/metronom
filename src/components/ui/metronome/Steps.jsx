import stepsStyle from "./steps.module.css";

const Steps = ({ nominator, activeIndex }) => {
  return (
    <div className="flex justify-center gap-2">
      {Array(nominator)
        .fill(() => null)
        .map((_, index) => (
          <span
            key={index}
            className={`${
              activeIndex === index
                ? "bg-teal-600 border shadow-xl scale-150 p-1"
                : "bg-slate-800"
            } rounded-full ${stepsStyle.step}`}
          ></span>
        ))}
    </div>
  );
};

export default Steps;
