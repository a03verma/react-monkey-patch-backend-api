import React, {useState, useEffect, FC} from "react"
import {fromFetch} from "rxjs/fetch";
import {useRecoilValue} from "recoil";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const Users =() =>{

    const [resValue, setResValue] = React.useState([]);
    const [showUsers, setShowUsers] = React.useState(false);


    const fetchUsers=() => {
        const url = "https://example.com/users";

        fromFetch(url,
            {
                method: 'GET',
                selector: response => response.json()
            }).subscribe(
            response => {
                setResValue(response.value);
                setShowUsers(true);
                console.log(response)
            }
        )
    }
    return(
        <div>
            <JSONPretty  id="json-pretty" data={resValue}></JSONPretty>
        </div>
    );
}