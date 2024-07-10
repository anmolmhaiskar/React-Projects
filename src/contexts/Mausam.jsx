import { createContext, useContext, useState } from "react";
import {
  getMausamBackgroundImage,
  getMausamDataForLocation,
  getMausamReport,
} from "../apis/mausam";

const MausamContext = createContext();

export const useMausam = () => {
  return useContext(MausamContext);
};

export const MausamProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchRegion, setSearchRegion] = useState(null);
  const [background, setBackground] = useState(null);

  const fetchMausamData = async () => {
    const response = await getMausamReport(searchRegion);
    setData(response);
    fetchBackgroundImg(response);
  };

  const fetchBackgroundImg = async (response) => {
    const imgResponse = await getMausamBackgroundImage(
      response?.current?.condition?.text
    );
    const backImgLink = imgResponse?.results[0]?.links?.download;
    setBackground(backImgLink);
  };

  const fetchCurrentUserLocationData = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const response = await getMausamDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      );
      setData(response);
      fetchBackgroundImg(response);
    });
  };

  return (
    <MausamContext.Provider
      value={{
        data,
        searchRegion,
        setSearchRegion,
        fetchMausamData,
        setData,
        setBackground,
        background,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </MausamContext.Provider>
  );
};
