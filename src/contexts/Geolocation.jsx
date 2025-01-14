import axios from "axios";
import { createContext, useContext, useState } from "react";

const GeolocationContext = createContext();

export default function GeolocationProvider({ children }) {
  const [locationInfo, setLocationInfo] = useState({
    cityName: "",
    lat: "32.855667359290095",
    lng: "12.057572922483653",
  });
  const [isLoading, setIsLoading] = useState("");

  async function getCityInfo(latitude, longitude) {
    console.log("2 - start get city  info");
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );

      if (res.status === 200) {
        const cityName =
          res.data.address.city ||
          res.data.address.town ||
          res.data.name ||
          res.data.address.village;
        // const { lat, lon } = res.data;
        setLocationInfo({ cityName, lat: latitude, lng: longitude });
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  function getMyPosition() {
    console.log("1 - start get my position");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        getCityInfo(pos.coords.latitude, pos.coords.longitude);
      },
      (e) => {
        console.log(e.message);
      }
    );
  }

  return (
    <GeolocationContext.Provider
      value={{
        isLoading,
        locationInfo,
        setLocationInfo,
        getCityInfo,
        getMyPosition,
      }}
    >
      {children}
    </GeolocationContext.Provider>
  );
}

export const useGeoLocation = () => {
  const contex = useContext(GeolocationContext);
  return contex;
};
