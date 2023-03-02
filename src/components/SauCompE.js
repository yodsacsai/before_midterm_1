//rfce keyword shortcut
import React, { useEffect, useState } from 'react'

function SauCompE() {

    const [stuName, setStuName] = useState("????");
    const [midterm, setMidterm] = useState(0);
    const [final, setFinal] = useState(0);
    const [total, setTotal] = useState(0);
    const [grade, setGrade] = useState("?");

    useEffect(()=>{
        calGrade();
    }, [midterm, final]);

    const handleChangeOfName = (e) => {
        setStuName(e.target.value);
    };
    const handleChangeOfMidterm = (e) => {
        if(e.target.value === ""){
            setMidterm(0);
        }else{
            setMidterm(e.target.value);
        }
        
        
    };
    const handleChangeOfFinal = (e) => {
        if(e.target.value === ""){
            setFinal(0);
        }else{
            setFinal(e.target.value);
        }
        
        
    };
    // const handleChangeOfTotal = (e) => {
    //     setTotal(parseFloat(midterm) + parseFloat(final));
    //     calGrade();

    // };
    const handleReset = (e) => {
        document.getElementById("name").value = "";
        document.getElementById("mid").value = "";
        document.getElementById("final").value = "";
        setStuName("????");
        setMidterm(0);
        setFinal(0);
        setTotal(0);
        setGrade("?");
    };

    const calGrade = () => {
        setTotal(parseFloat(midterm) + parseFloat(final));
        setGrade(
            (parseFloat(midterm) + parseFloat(final)) > 80 ? "A" :
            (parseFloat(midterm) + parseFloat(final)) >= 71 ? "B" :
            (parseFloat(midterm) + parseFloat(final)) >= 61 ? "C" :
            (parseFloat(midterm) + parseFloat(final)) >= 51 ? "D" :
            "F"
        );
    }

    return (
        <>
            <h1>แสดงผลการเรียน</h1>
            <hr />
            ป้อนชื่อ : <input id='name' onChange={handleChangeOfName} type="text" placeholder="ชื่อ-สกุล" /><br /><br />
            ป้อนกลางภาค : <input id='mid' onChange={handleChangeOfMidterm} type="number" placeholder="0.00" /><br /><br />
            ป้อนปลายภาค : <input id='final' onChange={handleChangeOfFinal} type="number" placeholder="0.00" /><br /><br />
            <button onClick={calGrade}>คำนวณ</button>&nbsp;&nbsp;<button onClick={handleReset}>ยกเลิก</button>
            <hr />
            คุณ : {stuName}<br />
            คะแนนกลางภาค : {midterm}<br />
            คะแนนปลายภาค : {final}<br />
            คะแนนรวม : {total}<br />
            เกรดที่ได้ : {grade}<br />

        </>
    )
}

export default SauCompE
//-----------------------------------------
//rfc keyword shortcut
// import React from 'react'

// export default function SauCompE() {
//   return (
//     <div>SauCompE</div>
//   )
// }
//--------------------------------------------
//rafce keyword shortcut
// import React from 'react'

// const SauCompE = () => {
//   return (
//     <div>SauCompE</div>
//   )
// }

// export default SauCompE
//-----------------------------------------
//rafc keyword shortcut
// import React from 'react'

// export const SauCompE = () => {
//   return (
//     <div>SauCompE</div>
//   )
// }



