import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AgencyAfterModule from '../Module/AgencyAfterModule';
import AgencyBeforeModule from '../Module/AgencyBeforeModule';

import './Agency.css';

function Agency() {
  const params = useParams();
  const [dday, setDday] = useState(false);
  useEffect(() => {
    if (params.groupid == '1') setDday(true);
    else if (params.groupid == '2') setDday(true);
  }, []);
  if (!dday) return <AgencyBeforeModule></AgencyBeforeModule>;
  return <AgencyAfterModule></AgencyAfterModule>;
}

export default Agency;
