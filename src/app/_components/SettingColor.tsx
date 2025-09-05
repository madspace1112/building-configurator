import { setWallColor } from "@/store/slices/wallColor";
import { useDispatch } from "react-redux";

export const SettingColor = () => {
  const dispatch = useDispatch();
  const colors = [
    "#ccc",
    "#EFBD4E",
    "#80C670",
    "#726DE8",
    "#EF674E",
    "#353934",
  ];

  const handleClickColor = (color: string) => {
    dispatch(setWallColor({ color }));
  };
  return (
    <div className="z-10 absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none flex gap-2">
      {colors.map((color) => (
        <div
          key={color}
          className={`size-8 rounded-full border-2 border-white border-solid cursor-pointer hover:scale-110 transition-all pointer-events-auto`}
          style={{ background: color }}
          onClick={() => handleClickColor(color)}
        ></div>
      ))}
    </div>
  );
};
