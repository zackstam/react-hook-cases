import React, { useEffect, useState, memo } from 'react';
import ChildScore from './ChildScore';

const Score = ({ score }) => {
    const [editedScore, setEditedScore] = useState(null);
    // console.log('rendering on score');
    useEffect(() => {
        // console.log('score effect');
        setEditedScore(score + 1);
    }, [score]);
    return (
        <div style={{ 'border': '1px solid #000' }}>
            <h1>from parent {score}</h1>
            <h1>from child {editedScore}</h1>
            <ChildScore/>
        </div>
    );
}

export default Score;
