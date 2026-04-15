import { gears } from "@/shared/data/gear";

const GearSection = () => {
  return (
    <div id="gallery-gear">
      <p className="gallery-gear__title">Gear</p>
      <div className="gallery-gear__tags">
        {gears.map((gear) => (
          <span key={gear} className="gallery-gear__tag">
            {gear}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GearSection;
