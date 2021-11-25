import { FunctionComponent } from "react";
import { ISpaceXResponse } from "../hooks/useCapsules";

export const Card: FunctionComponent<ISpaceXResponse> = (capsule) => (
  <div className="py-8 px-4 bg-white rounded-md shadow-md">
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h6 className="text-xs text-gray-600 mb-1">
            {capsule.capsule_serial} &bull; {capsule.type}
          </h6>
        </div>
        <div className="text-right">
          <h6 className="text-xs mb-2 text-gray-600 uppercase">
            {capsule.status}
          </h6>
        </div>
      </div>
      <span className="text-gray-800 text-sm">{capsule.details}</span>
    </div>
    <div className="mt-4 flex flex-col">
      <h6 className="text-sm text-gray-800 mb-1">
        <strong>missions</strong>
      </h6>
      <ul className="list-none">
        {capsule.missions.map((mission) => (
          <li
            className="text-sm text-gray-800"
            key={mission.name + mission.flight}
          >
            {mission.name}, flight: {mission.flight}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
