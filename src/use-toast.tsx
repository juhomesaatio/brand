import React, { useCallback, useState } from "react";

export const useToast = () => {
  const [state, setState] = useState({
    message: "",
    event: null,
  });

  const onSetState = (message: string, event: MouseEvent) =>
    setState({ message, event });

  const cachedContainer = useCallback(() => {
    if (!state.event) return null;
    const style = {
      left: state.event.clientX,
      top: state.event.clientY,
    };
    return (
      <aside className="toast" style={style} key={state.message}>
        <span className="toast-message">{state.message}</span>
      </aside>
    );
  }, [state]);

  return [cachedContainer, onSetState];
};
