import React, { useState, useEffect } from "react";
import { getStaff, staffAPI } from "../../api/staffAPI";
import StaffCard from "./StaffCard";
import Loading from "./Loading";
import PageTemplate from "../PageTemplate";
import { fetchJson } from "../../api/fetch";
import LoadingSpinner from "../atoms/LoadingSpinner";
import { colours } from "../constants/colours";

const Staff = () => {
  const [staffList, setStaffList] = useState([]);
  console.log("pageReloaded", staffList.length);
  useEffect(() => {
    const fetchStaffList = async () => {
      const staff = await staffAPI.fetchStaff();
      const vcards = await Promise.all(
        staff.map(async (id) => {
          return await staffAPI.fetchCard(id.id);
        })
      );
      const staffArray = vcards.map((staffCard) => {
        return createStaffFromVCard(staffCard);
      });
      setStaffList(staffArray);
    };

    const createStaffFromVCard = (vCard) => {
      let newStaff = {};
      const vCard_lines = vCard.split("\n");
      newStaff.url = vCard_lines[8].slice(4);
      newStaff.image = `data:image/png;base64,${vCard_lines[10].split(":")[1]}`;
      newStaff.name = vCard_lines[3].slice(3);
      newStaff.telNumber = vCard_lines[7].slice(4);
      newStaff.email = vCard_lines[6].slice(16);
      newStaff.categories = vCard_lines[9].slice(11);

      newStaff.vCardURL = `http://localhost:5000/api/GetCard/${vCard_lines[4].slice(
        4
      )}`;
      return newStaff;
    };

    fetchStaffList();
  }, [staffList]);
  
  return (
    <PageTemplate>
      <div>

        {staffList.length === 0 ? (<LoadingSpinner colour={colours.tertiary} />) : (
          staffList.map((staffJson) => (
            <StaffCard key={staffJson.name} staff={staffJson} />
          )) 
        )}
      </div>
    </PageTemplate>
  );
};

export default Staff;
