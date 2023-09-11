import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ACTIVATE_USER } from "src/actions/actions";
const ActivateUser = () => {
    const { uid, token } = useParams();
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const navigate = useNavigate();

    useEffect(() => {
        if (uid && token) dispatch(ACTIVATE_USER(navigate, uid, token));
    }, [uid, token]);

    return <div>ActivateUser</div>;
};

export default ActivateUser;

// /NzAxOA/bu48f0-c49baa2ee3e27a6d55d4ac563feaa666
