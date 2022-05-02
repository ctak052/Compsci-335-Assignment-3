import React, { useState, useEffect } from "react";
import { staffAPI } from "../../api/staffAPI";
import StaffCard from "./StaffCard";
import Loading from "./Loading";

const Staff = () => {
  const [staffList, setStaffList] = useState([]);
  let fetchActive = false;
  console.log("pageReloaded", staffList.length);

  useEffect(() => {
    const fetchAllStaff = () => {
      return new Promise((resolve, reject) => {
        try {
          staffAPI.fetchStaff().then((staffJson) => {
            Promise.all(
              staffJson.map((staff) => {
                return staffAPI.fetchCard(staff.id);
              })
            ).then((staffVcards) => {
              resolve(staffVcards);
            });
          });
        } catch (err) {
          reject("StaffList failed to populate");
        }
      });
    };

    async function populateStaffList() {
      try {
        const response = await fetchAllStaff();
        response.forEach((staffCard) => createStaffFromVCard(staffCard));
        console.log(staffList);
        setStaffList(staffList);
        //setStaffList(staffList);
      } catch (err) {
        console.log(err);
      }
      console.log("populated1")
    }

    if (staffList.length === 0) {
      fetchActive = true;
      populateStaffList();
      console.log("populated2")
    }

    const createStaffFromVCard = (vCard) => {
      let newStaff = {};
      const vCard_lines = vCard.split("\n");
      newStaff.url = vCard_lines[8].slice(4);
      newStaff.image = "data:image/png;base64,".concat(
        vCard_lines[10].split(":")[1]
      );
      newStaff.name = vCard_lines[3].slice(3);
      newStaff.telNumber = vCard_lines[7].slice(4);
      newStaff.email = vCard_lines[6].slice(16);
      newStaff.categories = vCard_lines[9].slice(11);

      newStaff.vCardURL =
        "http://localhost:5000/api/GetCard/" + vCard_lines[4].slice(4);
      staffList.push(newStaff);
    };
  }, [staffList, fetchActive]);

  return (
    <div>
      {staffList.map((staffJson) => (
        <StaffCard key={staffJson.name} staff={staffJson} />
      ))}
      <Loading activeFetch={fetchActive} />
    </div>
  );
};

export default Staff;