import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AgencyAfterModule from '../Module/AgencyAfterModule';
import AgencyBeforeModule from '../Module/AgencyBeforeModule';
import MissionModule from '../Module/MissionModule';

import './CSS/Agency.css';

function Agency() {
  const params = useParams();
  const [dday, setDday] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (params.groupid == '1') setDday(true);
    else if (params.groupid == '2') setDday(true);
    else if (params.groupid == '10') setDday(true);
    else if (params.groupid == '11') setDday(true);
    if (params.groupid == '10') setOpen(true);
    else if (params.groupid == '11') setOpen(true);
  }, []);

  if (!dday) return <AgencyBeforeModule></AgencyBeforeModule>;
  else if (!open) return <AgencyAfterModule></AgencyAfterModule>;
  return <MissionModule></MissionModule>;
}

export default Agency;
