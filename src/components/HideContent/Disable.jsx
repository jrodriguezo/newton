import React from "react";
import { COLORS } from "../../constants/colors";
import useAuthentication from "../../hooks/useAuthentication";
import Lock from "../../icons/Lock";

function Disable({ children, isVisible }) {
  const { handleLogin } = useAuthentication();

  const visibleClassName = isVisible
    ? "opacity-100"
    : "pointer-events-none opacity-10 blur-sm";
  return (
    <div className="relative">
      {!isVisible && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center">
            LOCKED <Lock className="h-10 w-10 mb-2 mx-auto" /> SECTION
          </div>
          <p className="text-xs">
            You must be{" "}
            <button
              className={`${COLORS.PURPLE_TEXT_600} hover:underline hover:text-purple-400 `}
              onClick={handleLogin}
            >
              logged
            </button>{" "}
            to see this content
          </p>
        </div>
      )}
      <div className={visibleClassName}>{children}</div>
    </div>
  );
}

export default Disable;
