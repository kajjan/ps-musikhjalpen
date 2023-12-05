import Image from "next/image";
 
 
const Progress: React.FC<{ name: string; value: number }> = (props) => {
 
 
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium ">{props.name}</span>
        <span className="text-sm font-medium ">{props.value.toFixed(1)}%</span>
      </div>
 
      <div>
        <div
          className="w-full bg-gray-200 rounded-full h-4 mb-0 relative"
        >
          <div
            className="bg-rose-600 h-4 rounded-full"
            style={{ width: `${props.value}%` }}
          ></div>
        </div>
 
 
          <Image
            src="/horse.gif"
            alt="running horse"
            width={50}
            height={50}
            className="object-scale-up absolute top-0 left-0"
            style={{
              position: "relative",
              right: 0,
              left:`${props.value - 3}%`,
              top: "-2.70rem"
            }}
          />
 
      </div>
    </>
  );
};
 
export default Progress;