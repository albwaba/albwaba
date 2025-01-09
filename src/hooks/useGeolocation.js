import React, { useEffect, useState } from "react";

export default function useGeolocation(
  defultPositon = { lat: 32.8559851, lng: 12.0575469 }
) {
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [position, setPosition] = useState(defultPositon);
  const [error, setError] = useState(null);
  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });

        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return {
    isLoading,
    position,
    error,
    getPosition,
    setPosition,
    setStateName,
    setCityName,
    cityName,
    stateName,
  };
}
