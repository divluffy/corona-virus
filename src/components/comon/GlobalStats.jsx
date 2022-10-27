import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cancel, ViruseImg } from "../../assets";
import LoopCircleLoading from "react-loadingg/lib/LoopCircleLoading";
import Line from "./Line";
import Error from "./Error";

function GlobalStats() {
  const [data, setData] = useState();
  const [searchList, setSearchList] = useState();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const Imgs = new Array(6).fill(0);

  // get data from viruse api
  const getGlobal = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_API);
      if (data.Message) return setError(data.Message);
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getGlobal();
  }, []);

  // to filter countries
  const onSearch = (e) => {
    const { value } = e.target;
    let result = data?.Countries.filter(({ Country }) =>
      Country.includes(value)
    );
    setSearchList(result);
  };

  let list = searchList || data?.Countries;

  return (
    <div className="global_stats">
      {/* image viruse */}
      {loader ? (
        <LoopCircleLoading />
      ) : error ? (
        <Error msg={error} />
      ) : (
        <>
          <div className="cvoers_viruse">
            {Imgs.map((_, i) => {
              return (
                <img
                  className={`viruse_${i + 1}`}
                  src={ViruseImg}
                  key={i}
                  alt="image virse"
                />
              );
            })}
          </div>
          <div className="countries_list">
            <div className="global_title">
              <h2>Global Stats</h2>
            </div>

            <Line
              TotalConfirmed={data?.Global?.TotalConfirmed}
              TotalDeaths={data?.Global?.TotalDeaths}
              TotalRecovered={data?.Global?.TotalRecovered}
            />
            <br />
            <div className="global_title">
              <h2>Countries Stats</h2>
            </div>

            <div className="bowl_search">
              <input type="text" placeholder="Search.." onKeyUp={onSearch} />
              <div className="cancel_search">
                <Cancel />
              </div>
            </div>

            {list ? (
              list.map(
                ({
                  ID,
                  Country,
                  TotalConfirmed,
                  TotalDeaths,
                  TotalRecovered,
                }) => {
                  return (
                    <Line
                      key={ID}
                      Country={Country}
                      TotalConfirmed={TotalConfirmed}
                      TotalDeaths={TotalDeaths}
                      TotalRecovered={TotalRecovered}
                    />
                  );
                }
              )
            ) : (
              <div className="country_not_found">Country not found</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default GlobalStats;
