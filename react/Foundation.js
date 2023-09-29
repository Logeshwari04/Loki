import * as React from 'react';
import { useRef, useState, useEffect } from "react";
// import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { TextField } from "@mui/material";
// import { Link } from 'react-router-dom';
// import './AdminRegister.css'
// const USER_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;

const FoundationId_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const FoundationName_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const Phonenumber_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const AllocatedSeats_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const AvailableSeats_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const CollegeId_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Foundation_URL='';
const Foundation = () => {
    const fidRef = useRef();
    const fnameRef = useRef();
    const faddressRef = useRef();
    const fphRef = useRef();
    const aseatsRef = useRef();
    const asRef = useRef();
    const cidRef = useRef();
    const errRef = useRef();
    var valid = true;
    
    const [fid, setFid] = useState('');
    const [validFid, setValidFid] = useState(false);
    const [fidFocus, setFidFocus] = useState(false);

    const [fname, setFname] = useState('');
    const [validFname, setValidFname] = useState(false);
    const [fnameFocus, setFnameFocus] = useState(false);

    const [faddress, setFaddress] = useState('');
    const [validFaddress, setValidFaddress] = useState(false);
    const [faddressFocus, setFaddressFocus] = useState(false);

    const [fph, setFph] = useState('');
    const [validFph, setValidFph] = useState(false);
    const [fphFocus, setFphFocus] = useState(false);

    const [aseats, setAseats] = useState('');
    const [validAseats, setValidAseats] = useState(false);
    const [aseatsFocus, setAseatsFocus] = useState(false);

    const [as, setAs] = useState('');
    const [validAs, setValidAs] = useState(false);
    const [asFocus, setAsFocus] = useState(false);

    const [cid, setCid] = useState('');
    const [validCid, setValidCid] = useState(false);
    const [cidFocus, setCidFocus] = useState(false);

    const [errMsg, seterrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {

        // useRef.current.focus();

    }, [])



    useEffect(() => {

        setValidFid(FoundationId_REGEX.test(fid));

    }, [fid])



    useEffect(() => {

        setValidFname(FoundationName_REGEX.test(fname));
    }, [fname])
    useEffect(() => {

        setValidFph(Phonenumber_REGEX.test(fph));

    }, [fph])

    useEffect(() => {

        setValidAseats(AllocatedSeats_REGEX.test(aseats));
    }, [aseats])
    useEffect(() => {

        setValidAs(AvailableSeats_REGEX.test(as));

    }, [as])
    useEffect(() => {

        setValidCid(CollegeId_REGEX.test(cid));

    }, [cid])

    useEffect(() => {

        seterrMsg('');

    }, [fid, fname, faddress, fph,aseats,as,cid])

    const handleSubmit = async (e) => {

        e.preventDefault();

        // const data = {fid,fname,faddress,fph}

        const data={
            "name": fname,
            "address": faddress,
            "phone_number": fph,
            "allocatedSeats": aseats,
            "availableseats": as,
            "collegeid": cid
        }


        console.log(data);

   

 

      axios.post("http://localhost:8000/addFoundation", data)

      .then((response) => {

           console.log('success')

      })

      .catch((error) => {

          console.log("érror")

      })

    }



    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>

                    </p>
                </section>
            ) : (
                
                <section>

                 <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <h1 id="pd">Foundation</h1>

                     <form onSubmit={handleSubmit}>
                     
                        <div class="grid-container2">
                            {/* <TextField id="standard-basic" label="Foundation Id" variant="standard"
                                ref={fidRef}
                                autoComplete="off"
                                onChange={(e) => setFid(e.target.value)}
                                value={fid}
                                required
                                aria-invalid={validFid ? "false" : "true"}
                                // onFocus={() => setFidFocus(true)}
                                // onBlur={() => setFidFocus(false)}
                            />
                            <p id="uidnote" className={fidFocus && !validFid ? "instructions" : "offscreen"}> </p> */}

                            <TextField id="standard-basic" label="Foundation Name" variant="standard"
                                ref={fnameRef}
                                autoComplete="off"
                                onChange={(e) => setFname(e.target.value)}
                                value={fname}
                                required
                                aria-invalid={validFname ? "false" : "true"}
                                // onFocus={() => setFnameFocus(true)}
                                // onBlur={() => setFnameFocus(false)}
                            />
                            <p id="uidnote" className={fnameFocus && !validFname ? "instructions" : "offscreen"}> </p>
                            {/*<FontAwesomeIcon icon={faInfoCircle} /> */}

                            <TextField id="standard-basic" label="Foundation address" variant="standard"
                                ref={faddressRef}
                                autoComplete="off"
                                onChange={(e) => setFaddress(e.target.value)}
                                value={faddress}
                                required
                                aria-invalid={validFaddress ? "false" : "true"}
                                // onFocus={() => setFaddressFocus(true)}
                                // onBlur={() => setFaddressFocus(false)}
                            />
                            <p id="uidnote" className={faddressFocus && !validFaddress ? "instructions" : "offscreen"}> </p>
                            {/*<FontAwesomeIcon icon={faInfoCircle} /> */}


                            <TextField id="standard-basic" label="Phone number" variant="standard"
                                ref={fphRef}
                                autoComplete="off"
                                onChange={(e) => setFph(e.target.value)}
                                value={fph}
                                required
                                aria-invalid={validFph ? "false" : "true"}
                                // onFocus={() => setFphFocus(true)}
                                // onBlur={() => setFphFocus(false)}
                            />
                            <p id="uidnote" className={fphFocus && !validFph ? "instructions" : "offscreen"}> </p>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}

                            <TextField id="standard-basic" label="Allocated Seats" variant="standard"
                                ref={aseatsRef}
                                autoComplete="off"
                                onChange={(e) => setAseats(e.target.value)}
                                value={aseats}
                                required
                                aria-invalid={validAseats ? "false" : "true"}
                                
                            />
                            <p id="uidnote" className={aseatsFocus && !validAseats ? "instructions" : "offscreen"}> </p>
                            {/*<FontAwesomeIcon icon={faInfoCircle} /> */}

                            <TextField id="standard-basic" label="Available Seats" variant="standard"
                                ref={asRef}
                                autoComplete="off"
                                onChange={(e) => setAs(e.target.value)}
                                value={as}
                                required
                                aria-invalid={validAs ? "false" : "true"}
                                // onFocus={() => setFaddressFocus(true)}
                                // onBlur={() => setFaddressFocus(false)}
                            />
                            <p id="uidnote" className={asFocus && !validAs ? "instructions" : "offscreen"}> </p>
                            {/*<FontAwesomeIcon icon={faInfoCircle} /> */}


                            <TextField id="standard-basic" label="College Id" variant="standard"
                                ref={cidRef}
                                autoComplete="off"
                                onChange={(e) => setCid(e.target.value)}
                                value={cid}
                                required
                                aria-invalid={validCid ? "false" : "true"}
                                // onFocus={() => setFphFocus(true)}
                                // onBlur={() => setFphFocus(false)}
                            />
                            <p id="uidnote" className={cidFocus && !validCid ? "instructions" : "offscreen"}> </p>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}

                        </div>
                        </form>
                        <button onClick={handleSubmit}>NEXT</button>
                        </section>
            )}
                         </>
                         )

                }

                
export default Foundation;


