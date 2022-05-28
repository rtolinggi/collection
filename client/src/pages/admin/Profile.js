import React, { useEffect, useState } from "react";
import ProfileTable from "../../components/table/ProfileTable";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../features/auth/profileSlice";

const Profile = () => {
  const { isLoading } = useSelector((state) => state.profile);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataProfile = async () => {
      const response = await dispatch(getProfile()).unwrap();
      const result = await response.profil;
      const parsingResult = await result.map((element, idx) => {
        const { profil, username, email } = element;
        const { nik, address, noHp } = profil;
        const newArray = {
          no: ++idx,
          username,
          nik,
          email,
          address,
          noHp,
        };
        return newArray;
      });
      return parsingResult;
    };
    getDataProfile().then((res) => {
      setData(res);
    });
    // eslint-disable-next-line
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "no",
        accessor: "no",
      },
      {
        Header: "Full Name",
        accessor: "username",
      },
      {
        Header: "Nik",
        accessor: "nik",
        isNumeric: true,
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Alamat",
        accessor: "address",
      },
      {
        Header: "No HP",
        accessor: "noHp",
      },
    ],
    []
  );

  return (
    <>
      <p>Profil Page</p>
      <ProfileTable columns={columns} data={data} isLoading={isLoading} />
    </>
  );
};

export default Profile;
