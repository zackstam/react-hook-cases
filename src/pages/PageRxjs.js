import React, { useEffect } from 'react';
// RxJS v6+
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


function PageRxjs(props) {
    useEffect(() => {
        const searchBox = document.getElementById('search');
        const keyup$ = fromEvent(searchBox, 'keyup');
        keyup$
        .pipe(
            map((i) => i.currentTarget.value),
            debounceTime(500)
        )
        .subscribe(value => console.log(value));
      }, [])
    return (
        <div>
            <h1>rxjs</h1>
            <input type="text" id="search"></input>
        </div>
    );
}

export default PageRxjs;