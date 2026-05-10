import React, { useMemo } from "react";
import {
  Smartphone,
  Tablet,
  MonitorSmartphone,
  Phone,
  Laptop,
} from "lucide-react";

const FloatingBackground = React.memo(
  ({
    icons = [Smartphone, Tablet, MonitorSmartphone, Phone, Laptop],
    count = 60,
  }) => {
    const floatingIcons = useMemo(() => {
      return Array.from({ length: count }).map((_, i) => {
        const RandomIcon = icons[Math.floor(Math.random() * icons.length)];

        return {
          id: i,
          Icon: RandomIcon,
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          animationDuration: `${25 + Math.random() * 40}s`,
          animationDelay: `-${Math.random() * 40}s`,
          size: 16 + Math.random() * 30,
        };
      });
    }, [icons, count]);

    return (
      <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute text-blue-400 opacity-20 drop-shadow-sm"
            style={{
              left: icon.left,
              top: icon.top,
              animation: `floatAmbient ${icon.animationDuration} ease-in-out infinite alternate`,
              animationDelay: icon.animationDelay,
            }}
          >
            <icon.Icon size={icon.size} />
          </div>
        ))}
      </div>
    );
  },
);

export default FloatingBackground;
