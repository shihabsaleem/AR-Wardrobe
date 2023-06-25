import React from "react";
import mod from "../Assets/watch.glb"

function WatchS() {
  return (
    <div>
      <a-scene embedded arjs="debugUIEnabled: false;">
        <a-marker preset="hiro">
          <a-entity
            position="0 0 0"
            scale="10 10 10"
            gltf-model={mod}
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default WatchS;
