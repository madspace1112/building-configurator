import { RootState } from "@/store";
import { setWallColor } from "@/store/slices/wallColor";
import { useDispatch, useSelector } from "react-redux";

export const SettingColor = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.wallColor);
  const WallColors = [
    "#ccc",
    "#EFBD4E",
    "#80C670",
    "#726DE8",
    "#EF674E",
    "#353934",
  ];

  const RoofColors = [
    "#ccc",
    "#EFBD4E",
    "#80C670",
    "#726DE8",
    "#EF674E",
    "#353934",
  ];

  const handleClickColor = (color: string, type: string) => {
    dispatch(setWallColor({ color: { ...value.color, [type]: color } }));
  };
  return (
    <div className="z-10 absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 pointer-events-none flex max-md:flex-col gap-2">
      <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 flex flex-col gap-4 justify-center items-center">
        <p className="pointer-events-none text-2xl">Roof</p>
        <div className="flex gap-2">
          {RoofColors.map((color) => (
            <div
              key={color}
              className={`size-8 rounded-full border-2 border-white border-solid cursor-pointer hover:scale-110 transition-all pointer-events-auto`}
              style={{ background: color }}
              onClick={() => handleClickColor(color, "roof")}
            ></div>
          ))}
        </div>
      </div>
      <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 flex flex-col gap-4 justify-center items-center">
        <p className="pointer-events-none text-2xl">Wall</p>
        <div className="flex gap-2">
          {WallColors.map((color) => (
            <div
              key={color}
              className={`size-8 rounded-full border-2 border-white border-solid cursor-pointer hover:scale-110 transition-all pointer-events-auto`}
              style={{ background: color }}
              onClick={() => handleClickColor(color, "wall")}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
