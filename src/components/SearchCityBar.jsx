import React, { useState } from "react";
import axios from "axios";
import { useGeoLocation } from "../contexts/Geolocation";

export default function SearchCityBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { locationInfo, setLocationInfo } = useGeoLocation();
  const { cityName, lat, lng } = locationInfo;
  const fetchSuggestions = async () => {
    if (searchTerm.split(" ").join("").length > 3) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${searchTerm}&limit=5&format=json&addressdetai`
        );
        setSuggestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setLocationInfo({ cityName: event.target.value, lat, lng });
    fetchSuggestions();
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.display_name);
    setLocationInfo({
      lat: suggestion.lat,
      lng: suggestion.lon,
      cityName: suggestion.name,
    });
    setSuggestions([]);
    // Perform additional actions (e.g., search)
  };

  return (
    <>
      <label
        className="text-text font-medium text-base md:text-lg"
        htmlFor="city"
      >
        المدينة
      </label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Search..."
        className=" h-10 border mt-1 rounded px-4 w-full outline-0 focus-within:border-accent text-text border-border bg-background"
        value={cityName}
        onChange={handleInputChange}
      />
      {suggestions && searchTerm && (
        <ul className="absolute left-0 bg-white rounded-md shadow-md mt-2 z-[10000] w-full">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.display_name}
              {suggestion.Sirte}
            </li>
          ))}
        </ul>
      )}
      <input
        type="hidden"
        name="address"
        value={JSON.stringify(locationInfo)}
      />
    </>
  );
}
