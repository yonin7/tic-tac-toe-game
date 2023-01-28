import React, { useState } from 'react'

import { Container, BoardSizeInput,Button } from "./StartGameStyles";

const StartGame:React.FC<{restartHandler:(setBoardSize:number|null)=>void}>  = ({restartHandler}) => {

    const [newBoardSize,setNewBoardSize]=useState<number|null>(null)
    
    const sizeInput=(e:any)=> setNewBoardSize(e.target.value)

    return (
        <Container>  
            <BoardSizeInput onChange={(e:any)=>sizeInput(e)} />
            <Button onClick={()=>restartHandler(newBoardSize)}>START</Button>
        </Container>
    )
}

export default StartGame