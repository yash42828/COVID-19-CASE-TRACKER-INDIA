import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Level from './level';
import Table from './table';

function Summary(props) {
  const [states, setStates] = useState([]);
  const [deltas, setDeltas] = useState([]);
  const [timeseries, setTimeseries] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = () => {
    axios
      .get('https://api.covid19india.org/data.json')
      .then((response) => {
        setStates(response.data.statewise);
        setDeltas(response.data.key_values[0]);
        setTimeseries(response.data.cases_time_series);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Summary">
      <div className="header fadeInUp" style={{animationDelay: '0.5s'}}>
        <h1>India COVID-CASE Tracker</h1>
      </div>

      <Level data={states} deltas={deltas} />
      <Table states={states} summary={true} />

      <div className="summary-bottom">
        <div className="summary-bottom-left">
          <img
            src="icon.png"
            alt="Coronavirus cases live dashboard"
          />
          <h5>We stand with everyone fighting on the frontlines</h5>
        </div>
        <div className="link">
          <a href="https://github.com/yash42828">covid19india</a>
        </div>
      </div>
    </div>
  );
}

export default Summary;
