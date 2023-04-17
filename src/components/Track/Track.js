import React, { useCallback } from "react";

const Track = (props) => {
  const { onAdd, onRemove, track } = props;

  const addTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button
          className="px-2 py-1 text-lg transition-colors border-0 bg-transparent text-white hover:text-sub1"
          onClick={removeTrack}
        >
          -
        </button>
      );
    }
    return (
      <button
        className="px-2 py-1 text-lg transition-colors border-0 bg-transparent text-white hover:text-sub1"
        onClick={addTrack}
      >
        +
      </button>
    );
  };

  return (
    <div className="flex items-center border-b border-white border-opacity-80">
      <div className="flex-1 flex flex-col justify-center min-h-30">
        <h3 className="mb-1">{props.track.name}</h3>
        <p className="text-sm font-light text-white opacity-80">
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
