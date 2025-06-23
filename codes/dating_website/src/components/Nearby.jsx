import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { searchPeople } from "../data/SeachPeople"; // Ensure data includes lat/lng
import { Aicontext } from "../context/Main.context";

const Nearby = () => {
  const [people, setPeople] = useState([]);
  const { users } = useContext(Aicontext);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex w-full  items-center flex-col ">
          <h2 className=" uppercase font-bold text-2xl mt-2 mb-2 text-pink-500">
            🎯 click on location icon and get detail of partner 🚀
          </h2>

          <div className="w-[900px] h-[500px] rounded-2xl bg-amber-100 overflow-hidden">
            {/* Debugging Lat/Lng */}
            {users.forEach((person) =>
              console.log({
                latitude: person.latitude,
                longitude: person.longitude,
              })
            )}

            <MapContainer
              center={[
                searchPeople[0]?.latitude || 51.505,
                searchPeople[0]?.longitude || -0.09,
              ]}
              zoom={11}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {searchPeople.map((person) => (
                <Marker
                  key={person.id}
                  position={[person.latitude, person.longitude]}
                >
                  <Popup>
                    <img
                      src={person.Image}
                      alt=""
                      width="40"
                      className="w-30"
                    />{" "}
                    <br />
                    <b>{person.name}</b> <br />
                    {person.location} <br />
                    Age: {person.age}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            <p>No users found.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nearby;
