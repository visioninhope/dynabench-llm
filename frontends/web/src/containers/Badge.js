/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Moment from "react-moment";

const Badge = (props) => {
  var desc = 'Unknown badge';
  switch (props.name) {
    case 'TESTING_BADGES':
      desc = 'Test badge!';
    break;
    case 'WELCOME_NOOB':
      desc = 'Welcome noob!';
    break;
    case 'FIRST_CREATED':
      desc = 'First example!';
    break;
    case 'FIRST_VALIDATED_FOOLING':
      desc = 'First time fooled!';
    break;
    case 'FIRST_VERIFIED':
      desc = 'First validation!';
    break;
    case 'FIRST_TEN_CREATED':
      desc = 'First ten examples!';
    break;
    case 'ALL_TASKS_COVERED':
      desc = 'All tasks covered!';
    break;
    case 'MODEL_BUILDER':
      desc = 'Model builder!';
    break;
    case 'SOTA':
      desc = 'State of the art!';
    break;
    case 'SERIAL_PREDICTOR':
      desc = 'Serial predictor!';
    break;
    case 'MULTITASKER':
      desc = 'Multi tasker!';
    break;
    case 'EXAMPLE_STREAK_5':
      desc = 'Five example streak!';
    break;
    case 'EXAMPLE_STREAK_10':
      desc = 'Ten example streak!';
    break;
    case 'EXAMPLE_STREAK_20':
      desc = 'Twenty example streak!';
    break;
    case 'EXAMPLE_STREAK_50':
      desc = 'Fifty example streak!';
    break;
    case 'EXAMPLE_STREAK_100':
      desc = 'Hundred example streak!';
    break;
    case 'DAY_STREAK_2':
      desc = 'Two day streak!';
    break;
    case 'DAY_STREAK_3':
      desc = 'Three day streak!';
    break;
    case 'DAY_STREAK_3':
      desc = 'Three day streak!';
    break;
    case 'DAY_STREAK_1_WEEK':
      desc = 'One week streak!';
    break;
    case 'DAY_STREAK_2_WEEK':
      desc = 'Two week streak!';
    break;
    case 'DAY_STREAK_1_MONTH':
      desc = 'One month streak!';
    break;
    case 'DAY_STREAK_3_MONTH':
      desc = 'Three month streak!';
    break;
    case 'DAY_STREAK_1_YEAR':
      desc = 'One year streak!';
    break;
    default:
    break;
  }
  var awarded = props.awarded;
  return (props.format && props.format === "text") ?
    desc
    :
    (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={(props) => <Tooltip {...props}>
        {desc}<br />
        Awarded <Moment utc fromNow>{awarded}</Moment>
        </Tooltip>}
    >
      <img src={"/badges/"+props.name+".png"} style={{width: 50, marginBottom: 10, cursor: 'pointer'}} />
    </OverlayTrigger>
  );
}


export default Badge;
